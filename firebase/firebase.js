import { initializeApp } from "firebase/app"
import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase } from "firebase/database"
const fireabseConfig = {
 apiKey:'AIzaSyDEb5BIlLZMP4vVsZDnPIdY6Bsvr2nxAjw',
 authDomain:"react-native-7a531.firebaseapp.com",
 databaseURL: 'https://react-native-7a531-default-rtdb.asia-southeast1.firebasedatabase.app/',
projectId:'react-native-7a531',
storageBucket:'react-native-7a531.appspot.com',
messagingSenderId:'272719833616',
appId:'1:272719833616:android:f1505208ef5d9c1088f895'
}
const app = initializeApp(fireabseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()

export{
    auth,firebaseDatabase,createUserWithEmailAndPassword
}
 