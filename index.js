var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // addEventListener it basically tells what to do when the click is detected
    var buttonInnerHtml = this.innerHTML;
    // this button helps to trigger the event basically it says that trigger the particular event listenner when this button is clicked
    // innerhtml is the property that reads the text inside the buttonInnerHtml
    makeSound(buttonInnerHtml);
    // this makesound function detects the click on the alphabets
    buttonAnimation(buttonInnerHtml);
  });

}
// till now we were listening to click events but now we will listen to keyboard events also
// we will use keypress for it
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  // this makesound function detects the alphabet key pressed and makes the sound acc to the event
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerHtml);

  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);//for querySelector synatx is .class thats wwhy dot
  activeButton.classList.add("pressed");// class list add to add new class
  // now to remove the properties in class pressed we will use timeout function
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
