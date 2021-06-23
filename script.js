// Setting things up
document.getElementById("helpText").style.display = "none"

// Help button
const help = document.getElementById("helpText")
function help() {
    document.getElementById("helpText").style.display = "block"
}

// Intro
alert("Welcome to Jack Bot's 'brain' code! Here is Jack Bot...")

// My stuff
const favFood = "outlet"

const favColor = "orange"

const favAnimal = "cat"

const favFriend = "Jack Farrell"


// The QUESTIONS/CONVERSATION
alert("Hello there! My name is Jack Bot!")
const yourName = prompt("What's your name? ")
alert("Hello " + yourName + "!")