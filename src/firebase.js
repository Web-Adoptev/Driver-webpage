import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACJ8gjQNTSLY1FRs6ePgMi1LI94w-WQdc",
  authDomain: "adopt-test-a18c6.firebaseapp.com",
  projectId: "adopt-test-a18c6",
  storageBucket: "adopt-test-a18c6.appspot.com",
  messagingSenderId: "717496644188",
  appId: "1:717496644188:web:a08066db6b1eb57161ec99",
  measurementId: "G-P04K1PFJZF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);




