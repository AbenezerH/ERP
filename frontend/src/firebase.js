import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpjEfaukjMeqw0VB979ybTNs3teTqQN4o",
  authDomain: "erp-project-7a100.firebaseapp.com",
  projectId: "erp-project-7a100",
  storageBucket: "erp-project-7a100.appspot.com",
  messagingSenderId: "70181052691",
  appId: "1:70181052691:web:ad7539fc84b8cbb0717ae6"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
