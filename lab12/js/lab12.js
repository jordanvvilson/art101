/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 3 October
 * License: Public Domain
 */



// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
if (mod == 0) {
  return "anus"
}
else if (mod == 1) {
  return "bum"
}
else if (mod == 2) {
  return "rear"
}
else if (mod == 3) {
  return "bottom"
}
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
// get value from input field
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
newText = "<p> The sorting hat has sorted you into " + house + "</p>";
document.getElementById("output").innerHTML = newText;
})




