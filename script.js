// Setting things up

document.addEventListener("DOMContentLoaded", function () {
  var audio = new Audio("Audio/audio.m4a");

  var audio1 = new Audio("audio_file.mp3");
  // Intro
  alert("Welcome to Jack Bot's 'brain' code! Here is Jack Bot...");

  // My stuff
  const favFood = "outlet";

  const favColor = "orange";

  const favAnimal = "cat";

  const favFriend = "Jack Farrell";

  // The QUESTIONS/CONVERSATION
  alert("Hello there! My name is Jack Bot!");
  const yourName = prompt("What's your name? ");
  if (!yourName) {
    alert("You need to put in a name");
    prompt("What's your name? ");
  } else {
    alert("Hello " + yourName + "!");
  }
});
