
<script>
document.addEventListener('DOMContentLoaded', function() {
// When the event DOMContentLoaded occurs, it is safe to access the DOM

        // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var sidebar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = sidebar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky")
  } else {
    sidebar.classList.remove("sticky");
  }
}
})
</script>