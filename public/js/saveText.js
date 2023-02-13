var text = document.getElementById("text-field");
var data = document.getElementById("last-update");
var message = document.getElementById("message");

firebase.database().ref().on("value", function (snapshot) {
  text.value = snapshot.val().text || "";
  data.innerHTML = snapshot.val().data || "";

  message.textContent = "Carregado com sucesso!";
  message.style.opacity = 1;
  setTimeout(function () {
    message.style.opacity = 0;
  }, 2000);

})

text.addEventListener("input", function () {
  var insertText = text.value;
  var nowDate = new Date().toLocaleString();
  firebase.database().ref().update({
    text: insertText,
    data: nowDate
  });
});