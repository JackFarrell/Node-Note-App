// Setting things up

document.addEventListener("DOMContentLoaded", function () {
  var audio = new Audio("Audio/audio.m4a");

  var audio1 = new Audio("audio_file.mp3");

  // Intro
  alert(
    "For maximum experience... please turn on your screen reader in settings!"
  );
  alert("Welcome to Jack Bot's 'brain' code! Here is Jack Bot...");

  // My stuff
  const favFood = "outlet";

  const favColor = "orange";

// The QUESTIONS/CONVERSATION
alert("Hello there! My name is Jack Bot!")
const yourName = prompt("What's your name? ")
alert("Hello " + yourName + "!")
const yourFavFood = prompt("What's your favorite food??? ")
alert(yourFavFood + "! That sounds sooooooo good! but because right now I am just a computer... my favorite food is a " + favFood + "!")
prompt("I love it when people take me around on an iPhone! I get to see the world! What's your favorite place to go see?")
alert("OOOOHH! That sounds so cool! My favorite trip was when my user <i>accidentally<i> flushed me down the toilet!")
  const favAnimal = "cat";

  const favFriend = "Jack Farrell";

  const favFriend = "You";

  const favDevice = "Macbook Air";

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

// The QUESTIONS/CONVERSATION
alert("Hello there! My name is Jack Bot!");
const yourName = prompt("What's your name? ");
alert("Hello " + yourName + "!");
const yourFavFood = prompt("What's your favorite food??? ");
alert(
  yourFavFood +
    "! That sounds sooooooo good! but because right now I am just a computer... my favorite food is an outlet!"
);
