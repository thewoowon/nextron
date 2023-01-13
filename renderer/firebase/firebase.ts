// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMvbN4wszUhXzvWzVEzMDkUC_DuyF1STY",
  authDomain: "nextron-e3046.firebaseapp.com",
  projectId: "nextron-e3046",
  storageBucket: "nextron-e3046.appspot.com",
  messagingSenderId: "355881816053",
  appId: "1:355881816053:web:15608e6116083b943e5abc",
  measurementId: "G-LYX01P6Y90",
  databaseURL:"https://nextron-e3046-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);