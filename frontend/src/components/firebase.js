// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/compat/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyDG-LuoD6Sci95oPn2Vg9Xft71uY3lOvvk",
// 	authDomain: "kalingablogging.firebaseapp.com",
// 	projectId: "kalingablogging",
// 	storageBucket: "kalingablogging.appspot.com",
// 	messagingSenderId: "609820150737",
// 	appId: "1:609820150737:web:d654668a4aafd51d84eef0",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const storage = firebase.storage();
// export const database = firebase.database();
// export default firebase;


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQfzVOiN9YFt6gB_xoE-2risFr7KXYrBA",
  authDomain: "blogg-blitz.firebaseapp.com",
  projectId: "blogg-blitz",
  storageBucket: "blogg-blitz.firebasestorage.app",
  messagingSenderId: "620589090303",
  appId: "1:620589090303:web:0a51751323698c3b7b53ca",
  measurementId: "G-KKFYDZPS17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const database = firebase.database();
export default firebase;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAxfLVdRWjAx1am9Ra2NoUx5ExF6li6G-s",
//   authDomain: "blog-blitz-d0d1d.firebaseapp.com",
//   projectId: "blog-blitz-d0d1d",
//   storageBucket: "blog-blitz-d0d1d.firebasestorage.app",
//   messagingSenderId: "74428097580",
//   appId: "1:74428097580:web:1ef39df62ee016e0935d89",
//   measurementId: "G-VK5YZWWNM6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);