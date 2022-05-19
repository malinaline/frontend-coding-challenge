import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHnI9tkAXTnoQ1CZ0bsb-rlCgAfOGFcQw",
  authDomain: "fir-user-reg-auth-5df2c.firebaseapp.com",
  projectId: "fir-user-reg-auth-5df2c",
  storageBucket: "fir-user-reg-auth-5df2c.appspot.com",
  messagingSenderId: "848990871429",
  appId: "1:848990871429:web:caf62be4ef5a905a93eeec"
};



// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
