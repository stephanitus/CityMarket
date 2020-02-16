import firebase from 'firebase';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBYpGGKxGYECorO5MVoyuFitvUAxY2S2dE",
    authDomain: "citymarket-43a74.firebaseapp.com",
    databaseURL: "https://citymarket-43a74.firebaseio.com",
    projectId: "citymarket-43a74",
    storageBucket: "citymarket-43a74.appspot.com",
    messagingSenderId: "21237131162",
    appId: "1:21237131162:web:08acd66c6192c55f053c23"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
