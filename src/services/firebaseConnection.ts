import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY7TTZSxD4CStXlPll3paCWgoiAMUIk6s",
  authDomain: "webcarros-51901.firebaseapp.com",
  projectId: "webcarros-51901",
  storageBucket: "webcarros-51901.appspot.com",
  messagingSenderId: "44420686296",
  appId: "1:44420686296:web:c0a29c5ba759a5006e12ad",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
