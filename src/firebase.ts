import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3n3bQOTuRbj8fuAg_9lDHWYVLo4TFnqw",
  authDomain: "chat-line-1c7b9.firebaseapp.com",
  projectId: "chat-line-1c7b9",
  storageBucket: "chat-line-1c7b9.appspot.com",
  messagingSenderId: "388648944074",
  appId: "1:388648944074:web:90b88f2d03fa7a5fc50f33",
  measurementId: "G-NK3K5R6VRW",
};

export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
