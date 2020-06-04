$(document).ready(function(){
  const animal = prompt("Which animal would you like to learn about: cat, bird or dog?");
  if (animal === "cat") {
    $(".catContainer").show();
  } else if (animal === "bird") {
    (".birdContainer").show();
  } else if (animal === "dog") {
    $(".dogContainer").show();
  } else {
    alert("Please enter either cat, bird, or dog!")
  }
  
});