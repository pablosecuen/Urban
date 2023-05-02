import { Router } from "express";
import { loginUser } from "../../controllers/inputs/login/loginUser";
import { loginChauffeur } from "../../controllers/inputs/login/loginChauffeur";
import { loginDistributor } from "../../controllers/inputs/login/loginDistributor";
import { loginLocal } from "../../controllers/inputs/login/loginLocal";
import { db } from "../../connection/connection";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import passport from "passport";
import jwt from "jsonwebtoken";
import { profile } from "console";

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
        const user = await db.collection("users").doc(profile.id).get();
        if (!user.exists) {
          await db.collection("users").doc(profile.id).set({
            email: profile.emails[0].value,
            name: profile.displayName,
            img: profile.photos[0].value,
            adress: "",
      payments: {
        cardNumber: "",
        expirationDate: "",
        securityCode: "",
      }
      ,
      history: {
        orders: [],
        travels: [],
      },
      DNI: "",
      deleted: false
          });

        }
        const payload = {
          email: profile.emails[0].value,
          name: profile.displayName,
          img: profile.photos[0].value,
          id: profile.id,
        }
        done(null, payload);
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google", (req, res) => {
  const { user } = req;
  const token = jwt.sign(user, "clavemegasecreta");

  // !!IMPORTANTE: en la url aparece un "#_=_"  al final que no es del token
  res.redirect(`http://localhost:3001?token=${token}`);
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

//Auth de Microsoft

passport.use(
  new MicrosoftStrategy(
    {
      //Hay que registrar la app en Microsoft Azure para obtener los datos
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/microsoft/callback",
      scope: ["user.read", "mail.read", "offline_access"],
      authorizationURL: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      tokenURL: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
    /* 
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ userId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    */
  )
);

router.get(
  "/microsoft",
  passport.authenticate("auth-microsoft", {
    prompt: "select_account",
    session: false,
  })
);

router.get(
  "/microsoft/callback",
  passport.authenticate("auth-microsoft", {
    failureRedirect: "/auth/microsoft",
    session: false,
  }),
  (req, res) => {
    res.json(req.user);
  }
);

export default router;
