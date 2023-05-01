import { Router } from "express";
import { loginUser } from "../../controllers/inputs/login/loginUser";
import { loginChauffeur } from "../../controllers/inputs/login/loginChauffeur";
import { loginDistributor } from "../../controllers/inputs/login/loginDistributor";
import { loginLocal } from "../../controllers/inputs/login/loginLocal";
import { db } from "../../connection/connection";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import passport from "passport";

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
        const user = await db.collection("federated_credentials").doc(profile.id).get();
        if (!user.exists) {
          await db.collection("users").doc(profile.id).set({
            email: profile.emails[0].value, // no puedo acceder al mail desde la auth de facebook
            name: profile.displayName,
          });
        }
        cb(null, user.data());
      } catch (error) {
        return cb(error);
      }
    }
  )
);
router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "user_location"],
  })
);
router.get(
  "/oauth2/redirect/facebook",
  passport.authenticate("facebook", { failureRedirect: "/login", failureMessage: true }),
  function (req, res) {
    res.redirect("/");
  }
);

export default router;
