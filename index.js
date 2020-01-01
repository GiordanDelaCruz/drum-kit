/** OVERVIEW: This program plays different the different sounds of a drum based on whether a
  *           image is clicked or a certain key is pressed in JavaScript.
  *
  *  Note: This is a just a coding exercise/challenge for "The Complete 2020 Web Development
  *        Bootcamp Course" on Udemy by Angela Yu.
  */

/*************************************************************************************************/
/*                                    Instance Variables                                         */
/*************************************************************************************************/
var audioTom1, audioTom2, audioTom3, audioTom4, audioCrash, audioKickBass, audioSnare;
var pathOfDrums;
pathOfDrums = document.querySelectorAll(".drum");

/*************************************************************************************************/
/*                                         Methods                                               */
/*************************************************************************************************/

// Adding event listeners to play sound for particular keys which are pressed
document.addEventListener('keydown', function(event){
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

// Adding event listeners for buttons which are clicked
for(var i = 0; i <= pathOfDrums.length; i++){
  pathOfDrums[i].addEventListener("click", function(){

    var buttonClicked = this.textContent;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

/** This function produces a particular sound to play from a drum kit based
 *  on what key was pressed or which button was clicked.
 *
 * @param     key         The key that was pressed/clicked
 */
function makeSound(key){

  switch (key) {
    case "w":
      audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;
    case "a":
      audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;
    case "s":
      audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    case "d":
      audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;
    case "j":
      audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    case "k":
      audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "l":
      audioKickBass = new Audio("sounds/kick-bass.mp3");
      audioKickBass.play();
      break;
    default:
      console.log("The default case for pressing/clicking a key has been activated.");
  }
}

/** This function will add a class which enables the particular button that was pressed/clicked
 *  to have animation through adding a class.
 *
 * @param     currentKey          The key that was pressed/clicked
 */
function buttonAnimation(currentKey){
  var keyToAddAnimation = document.querySelector("." + currentKey);
  var delayInMilliseconds = 100; //0.1 second

  keyToAddAnimation.classList.add("pressed");

  setTimeout(function() {
    keyToAddAnimation.classList.remove("pressed");
  }, delayInMilliseconds);
}
