
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgfq4FW6GytmbIXMDInXqrihavFWhq91I",
  authDomain: "react-authorization-dev.firebaseapp.com",
  projectId: "react-authorization-dev",
  storageBucket: "react-authorization-dev.appspot.com",
  messagingSenderId: "129420436403",
  appId: "1:129420436403:web:9c2e7ddb7d6652d3d9e1c6"
  }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};