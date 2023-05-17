import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import passport from "passport";
import { db } from "../../../connection/connection";
import { Strategy } from "passport-local";
import { compareSync } from "bcrypt";
import { User } from "../../../schema/user";

const userStretegy = new Strategy({ usernameField: "email" }, async (email, password, done) => {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.where("email", "==", email).get();
    if (snapshot.empty) {
      return done(null, false, { message: "Invalid credentials" });
    }
    const userDoc = snapshot.docs[0];
    const user = userDoc.data();
    const passwordIsValid = compareSync(password, user.password);
    if (!passwordIsValid) {
      return done(null, false, { message: "Invalid credentials" });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
passport.use("userStretegy", userStretegy);

passport.serializeUser((User: User, done) => {
  done(null, User.email);
});

passport.deserializeUser(async (email: string, done) => {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.where("email", "==", email).get();
    if (snapshot.empty) {
      return done(null, false);
    }
    const userDoc = snapshot.docs[0];
    const user = userDoc.data();
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}); //todo esto despues se hara un middlware de auth de passport

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  passport.authenticate("userStretegy", async (err: Error, user: User) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    try {
      const userSnapshot = await db.collection("users").where("email", "==", user.email).get();
      if (userSnapshot.empty) {
        throw new Error("Usuario no encontrado");
      }
      const userData = userSnapshot.docs[0].data();
      const userId = userSnapshot.docs[0].id;
      const jwt = jsonwebtoken;
      const secretKey = "mySecretKey"; // Cambiar por una clave secreta segura y única
      const token = jwt.sign({ email: user.email }, secretKey);
      return res.json({ token, user: { ...userData, id: userId } });
    } catch (error) {
      console.error("Error logueo del user", error);
      return res.status(500).json({ message: "Error logueo del user" });
    }
  })(req, res);
};
