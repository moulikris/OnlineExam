function login() {
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {

    var email = document.getElementById("useremail").value;
    var password = document.getElementById("password").value;
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.href = "homepage.html";
    } else {
      // No user is signed in.
    }
  });
