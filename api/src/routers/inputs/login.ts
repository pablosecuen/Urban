import { Router } from "express";
import { loginUser } from "../../controllers/inputs/login/loginUser";
import { loginChauffeur } from "../../controllers/inputs/login/loginChauffeur";
import { loginDistributor } from "../../controllers/inputs/login/loginDistributor";
import { loginLocal } from "../../controllers/inputs/login/loginLocal";
import { db } from "../../connection/connection";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();
router.get("/", (req, res) => {
  res.send("Autenticación realizada");
});

router.post("/user", loginUser);

router.post("/chauffeur", loginChauffeur);

router.post("/distributor", loginDistributor);

router.post("/local", loginLocal);

passport.use(
  new GoogleStrategy(
    {
      clientID: "413100398306-qhc30n7vdf81seedk3o8bckqrlisu86d.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/login/auth/google",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);
        const user = await db.collection("users").doc(profile.id).get();
        if (!user.exists) {
          await db.collection("users").doc(profile.id).set({
            email: profile.emails[0].value,
            name: profile.displayName,
          });
        }
        done(null, user.data());
      } catch (error) {
        done(error);
      }
    }
  )
);

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google", (req, res) => {
  res.send("profile");
});

// auth de facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: "1965817520430450",
      clientSecret: "eb27ee0a9ce5843d7ecc15b1ae0d2e93",
      callbackURL: "http://localhost:3000/login/oauth2/redirect/facebook",
      profileFields: ["id", "displayName", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user: any = await db.collection("authWithFacebook").doc(profile.id).get(); // esto busca el user en "authWithFacebook"
        if (!user.exists) {
          user = { email: profile.emails[0].value, name: profile.displayName };
          await db.collection("authWithFacebook").doc(profile.id).set(user);
        } else {
          user = {
            name: user._fieldsProto.name.stringValue,
            email: user._fieldsProto.email.stringValue,
          };
        }

        cb(null, user);
      } catch (error) {
        console.log(error);
        return cb(error);
      }
    }
  )
);

router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/oauth2/redirect/facebook",
  passport.authenticate("facebook", { failureRedirect: "/login", failureMessage: true }),
  (req, res) => {
    const { user } = req;
    const token = jwt.sign(user, "clavemegasecreta");

    // !!IMPORTANTE: en la url aparece un "#_=_"  al final que no es del token
    res.redirect(`http://localhost:3001?token=${token}`);
  }
);
export default router;
