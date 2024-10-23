import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBvpTEoYImQC7O1wKUCAoaOHkh-kXFkQsw",
    authDomain: "laguiadelcodigo.firebaseapp.com",
    projectId: "laguiadelcodigo",
    storageBucket: "laguiadelcodigo.appspot.com",
    messagingSenderId: "1061405957671",
    appId: "1:1061405957671:web:3f761a985507d26be67802",
    measurementId: "G-XN8R91S3LG"
  };
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

console.log("Conexión a Firebase establecida correctamente.");