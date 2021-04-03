import firebase from 'firebase/app'
import 'firebase/firestore'


        var firebaseConfig = {
          apiKey: "AIzaSyCb_oCEFmf9EJyUFKFAyd6O66Xfmk7YLoQ",
          authDomain: "emailgenerator-222ea.firebaseapp.com",
          projectId: "emailgenerator-222ea",
          storageBucket: "emailgenerator-222ea.appspot.com",
          messagingSenderId: "526744536175",
          appId: "1:526744536175:web:711c30e9f5fdd77809799a",
          measurementId: "G-XGEXGFV0EP"
        };
        
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();

export { projectFirestore }