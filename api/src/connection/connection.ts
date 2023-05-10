import * as firebase from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccountKey),
  databaseURL: "https://pruebadedatabase.firebaseio.com",
  storageBucket: "gs://pruebadedatabase.appspot.com",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().bucket();

db.collection("test")
  .get()
  .then(() => console.log("Conexión exitosa con Firebase Firestore"))
  .catch((error) => console.error("Error al conectarse a Firebase Firestore"));

export { db, auth, storage };

// `NO TOCAR!!!!!!!!!!!!!!!!!!!!!!!!!`
