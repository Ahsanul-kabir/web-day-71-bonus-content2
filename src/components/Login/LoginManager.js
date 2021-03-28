import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramwork = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            // console.log(res);
            const { displayName, photoURL, email } = res.user;
            // console.log(displayName,email,photoURL);
            const signInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signInUser
            // console.log(displayName,email,photoURL);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            var credential = result.credential;
            var user = result.user;
            user.success = true;
            return user;
            // console.log('Fb User After Sign In', user);
            var accessToken = credential.accessToken;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
}

export const handleSignOut = () => {

    return firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignIn: '',
                name: '',
                photo: '',
                password: '',
                email: '',
                success: false
            }
            return signOutUser;
            // console.log(res);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
            // console.log(res)
        })
        .catch((error) => {
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            // return newUserInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
            // console.log('Sign in user info', res.user);
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(function () {
        console.log("user name update successfully");
    }).catch(function (error) {
        console.log('error');
    });
}






















// const LoginManager = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default LoginManager;