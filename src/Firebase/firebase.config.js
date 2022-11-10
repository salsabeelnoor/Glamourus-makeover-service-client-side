// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCn8HdaUqlYAHA2K4JYqBC9p4T60WzzV9k",
//   authDomain: "bridal-makeover-client.firebaseapp.com",
//   projectId: "bridal-makeover-client",
//   storageBucket: "bridal-makeover-client.appspot.com",
//   messagingSenderId: "954200156599",
//   appId: "1:954200156599:web:ffef93eff4e36f21ec6032",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
