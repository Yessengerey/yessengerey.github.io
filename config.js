// Unfortunately hiding API keys while hosting something on GitHub Pages is apparently impossible
// So please don't play around with the key below... :P

var config = {
  apiKey: "AIzaSyBRhsr89s30QX4idldlWs-tuDWeD_UAVtI",
  authDomain: "yessengerey-portfolio.firebaseapp.com",
  databaseURL: "https://yessengerey-portfolio.firebaseio.com",
  projectId: "yessengerey-portfolio",
  storageBucket: "gs://yessengerey-portfolio.appspot.com/",
  messagingSenderId: "602995473392"
};
firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref();
var firedb = firebase.firestore();
