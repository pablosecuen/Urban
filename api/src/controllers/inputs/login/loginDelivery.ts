import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import passport from "passport";
import { db } from "../../../connection/connection";
import { Strategy } from "passport-local";
import { compareSync } from "bcrypt";
import { Delivery } from "../../../schema/delivery";

const localDelivery = new Strategy({ usernameField: "email" }, async (email, password, done) => {
  try {
    const distributorsRef = db.collection("distributors");
    const snapshot = await distributorsRef.where("email", "==", email).get();
    if (snapshot.empty) {
      return done(null, false, { message: "Invalid credentials" });
    }
    const distributorDoc = snapshot.docs[0];
    const distributor = distributorDoc.data();
    const passwordMatch = compareSync(password, distributor.password);
    if (!passwordMatch) {
      return done(null, false, { message: "Invalid credentials" });
    }
    return done(null, distributor);
  } catch (error) {
    return done(error);
  }
});
passport.use("localDelivery", localDelivery);

passport.serializeUser((distributor: Delivery, done) => {
  done(null, distributor.email);
});

passport.deserializeUser(async (email: string, done) => {
  try {
    const distributorsRef = db.collection("distributors");
    const snapshot = await distributorsRef.where("email", "==", email).get();
    if (snapshot.empty) {
      return done(null, false);
    }
    const distributorDoc = snapshot.docs[0];
    const distributor = distributorDoc.data();
    return done(null, distributor);
  } catch (error) {
    return done(error);
  }
});

export const loginDelivery = async (req: Request, res: Response): Promise<void> => {
  passport.authenticate("localDelivery", (err: Error, distributor: Delivery) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!distributor) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    req.logIn(distributor, (err) => {
      if (err) {
        return res.status(500).json(err);
      }
      const jwt = jsonwebtoken;
      const secretKey = "mySecretKey";
      const token = jwt.sign({ email: distributor.email }, secretKey);
      return res.json({ token });
    });
  })(req, res);
};
