import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6D7rjN1SHB2lDvW-0mKNeHdKft6vZ1NM",
  authDomain: "food-delivery-app-iion.firebaseapp.com",
  databaseURL: "https://food-delivery-app-iion-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-iion",
  storageBucket: "food-delivery-app-iion.appspot.app",
  messagingSenderId: "562641908943",
  appId: "1:562641908943:web:dca5f9f4ece63bab65f3ba",
};

export const app = initializeApp(firebaseConfig);
