import * as admin from "firebase-admin";
import dotenv from 'dotenv';

dotenv.config();

const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: 'https://pruebadedatabase.firebaseio.com'
});
const db = admin.firestore();
const auth = admin.auth();

db.collection('test')
  .get()
  .then(() => console.log('Conexión exitosa con Firebase Firestore'))
  .catch((error) => console.error('Error al conectarse a Firebase Firestore'));

export { db, auth, admin }

// `NO TOCAR!!!!!!!!!!!!!!!!!!!!!!!!!`