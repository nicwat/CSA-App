var config = {
  apiKey: API_KEY,
  databaseURL: "https://tinder-of-csa.firebaseio.com",
  storageBucket: "tinder-of-csa.appspot.com"
};
firebase.initializeApp(config);

function initApp() {
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
}

window.onload = function() {
  initApp();
};

