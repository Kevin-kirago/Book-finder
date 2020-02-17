import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase credentials for my reads app
const firebaseConfig = {
	apiKey: "AIzaSyCJxVJcvxCZNmz2bY_SK1Sg0hi5f4kzp_U",
	authDomain: "myreads-d997c.firebaseapp.com",
	databaseURL: "https://myreads-d997c.firebaseio.com",
	projectId: "myreads-d997c",
	storageBucket: "myreads-d997c.appspot.com",
	messagingSenderId: "184329862698",
	appId: "1:184329862698:web:5ca2b93d80d28251440d53"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userData, additionalData) => {
	// check if user auth data exists
	if (!userData) return;

	// get item from firestore with equivalent
	const userRef = firestore.doc(`users/${userData.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { name, email } = userData;
		const createdAt = new Date();

		try {
			await userRef.set({
				name,
				email,
				createdAt,
				...additionalData
			});
		} catch (e) {
			console.log("error creating user", e);
		}
	}

	return userRef;
};

// initializing the authentication function from firebase
export const auth = firebase.auth();

export const firestore = firebase.firestore();

// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

// trigger google popup
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
