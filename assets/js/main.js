// js for making the navbar sticky

document.addEventListener('DOMContentLoaded', function() {
// When the event DOMContentLoaded occurs, it is safe to access the DOM

        // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbarMain");
var banner = document.getElementById("banner");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + banner.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
})