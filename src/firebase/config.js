import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnb47kCtpHQxJtbDlNBd8xg21Kksgi6SE",
  authDomain: "crud-nectia.firebaseapp.com",
  projectId: "crud-nectia",
  storageBucket: "crud-nectia.appspot.com",
  messagingSenderId: "572639027215",
  appId: "1:572639027215:web:216c00061d315196fa837a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
