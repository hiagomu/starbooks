import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const config = {
   apiKey: "AIzaSyCilfsdzxCma23TRwTXACANwfT2IV1UhpY",
   authDomain: "myproject-280405.firebaseapp.com",
   projectId: "myproject-280405",
   storageBucket: "myproject-280405.appspot.com",
   messagingSenderId: "506297006069",
   appId: "1:506297006069:web:3717d1a9ca7aa8875312bc"
};

const app = initializeApp(config);

const db = getFirestore(app);

const firebaseMethods = {app, db}

export default firebaseMethods;