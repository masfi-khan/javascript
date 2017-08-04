var wordsList = [];                                                             //variable for a list

function init() {                                                               // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;                       //disable "check this password" button from HTML by returning its element attribute
    wordsList = data.split('\n');                                               //input words from wordsFile into wordsList every time there is a new line
    document.getElementById("btnSubmit").disabled = false;                      //enable button
  });
}

window.onload = init;                                                           //run the function on browser

function checkPassword() {
  var password = document.getElementById("pw").value;
  alert(password);
  for (i in wordsList) {
    if (password == i){
      alert("Weak password! Choose again.") = true;
    }
   //else {alert("Strong password!") = false;}
}
}
