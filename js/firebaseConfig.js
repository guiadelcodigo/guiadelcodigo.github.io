    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    //importacion de google analitics
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBvpTEoYImQC7O1wKUCAoaOHkh-kXFkQsw",
      authDomain: "laguiadelcodigo.firebaseapp.com",
      projectId: "laguiadelcodigo",
      storageBucket: "laguiadelcodigo.appspot.com",
      messagingSenderId: "1061405957671",
      appId: "1:1061405957671:web:3f761a985507d26be67802",
      measurementId: "G-XN8R91S3LG"
    };
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig); 
    //Initialize google analitics
    export const analytics = getAnalytics(app);
    console.log(app)
    console.log(analytics)