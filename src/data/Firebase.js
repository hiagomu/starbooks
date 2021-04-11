import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDFSBvklBv7YLhO1haIAT9oKB8DuJlYzo8",
   authDomain: "starbooks-c1d3a.firebaseapp.com",
   projectId: "starbooks-c1d3a",
   storageBucket: "starbooks-c1d3a.appspot.com",
   messagingSenderId: "227878414756",
   appId: "1:227878414756:web:ae91346914d6477a433931"
};

firebase.initializeApp(config);

export default firebase;