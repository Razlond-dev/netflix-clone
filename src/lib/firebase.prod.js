import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVQxYiLrysFWtBPCKxsclBlOsp26OG_ho",
  authDomain: "netflix-clone-7525e.firebaseapp.com",
  databaseURL: "https://netflix-clone-7525e.firebaseio.com",
  projectId: "netflix-clone-7525e",
  storageBucket: "netflix-clone-7525e.appspot.com",
  messagingSenderId: "290541321201",
  appId: "1:290541321201:web:5b0fe49731efb404e16250",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
