const offlineMessage = document.getElementById('offline-message')


  firebase.database().ref(".info/connected").on("value", function(snapshot) {
    if (snapshot.val() == false) {
        offlineMessage.style.display = "block";
    } else {
        offlineMessage.style.display = "none";
    }
  });