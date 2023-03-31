// First, select the button element
const button = document.querySelector("#new");

// Next, add an event listener to the button that listens for a click event
button.addEventListener("click", function() {
  const textarea = document.querySelector("#file");

  textarea.value = "";
});