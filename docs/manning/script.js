// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myNavigation").classList.toggle("show");
      document.getElementById("myDIV").style.WebkitTransition = "all 1s"; // Code for Safari 3.1 to 6.0
      document.getElementById("myDIV").style.transition = "all 1s";       // Standard syntax
}
