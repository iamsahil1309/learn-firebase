
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCQRJAngzSgIACQh_CZLyNf4f9HCch-V7g",
  authDomain: "learn-71757.firebaseapp.com",
  projectId: "learn-71757",
  storageBucket: "learn-71757.appspot.com",
  messagingSenderId: "881165869061",
  appId: "1:881165869061:web:4ba88e19697ddd4071fc6c",
  databseURL : "https://learn-71757-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
