import { Router } from "express";
import { loginUser } from "../../controllers/inputs/login/loginUser";
import { loginChauffeur } from "../../controllers/inputs/login/loginChauffeur";
import { loginDistributor } from "../../controllers/inputs/login/loginDistributor";
import { loginLocal } from "../../controllers/inputs/login/loginLocal";
import { db } from "../../connection/connection";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";


const router = Router();

router.post("/user", loginUser);

router.post("/chauffeur", loginChauffeur);

router.post("/distributor", loginDistributor);

router.post("/local", loginLocal);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
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

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/auth/google", (req, res) => {
    res.send("profile")
})


export default router
