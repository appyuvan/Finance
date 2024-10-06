import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     // Replace this with your actual Firebase configuration
     apiKey: "AIzaSyCber0l-tx8Qywn-XZSVMuuinoilmsfj0w",
  authDomain: "finance-d782d.firebaseapp.com",
  projectId: "finance-d782d",
  storageBucket: "finance-d782d.appspot.com",
  messagingSenderId: "35494295043",
  appId: "1:35494295043:web:632ab0f658143220924036"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);