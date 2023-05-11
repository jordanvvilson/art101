// Lab 9: Javascript for the web
// Author:  Jordan Wilson
// Date: 9 May 2023



 // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
 var outputEl = document.getElementById("output");
 console.log("outputEl: ", outputEl);
 
 // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
 var new1El = document.createElement("p");

 // Change the html attribute of new1El to say "something new.""
 new1El.innerHTML = "Something new.";
 new1El.id = "new-one";

 // Create a new element with document.createElement("p") and assign it to a variable new1El
 var new2El = document.createElement("p");
 new1El.id = "new-two";

 // Change the html attribute of new1El to say "something else.""
 new2El.innerHTML = "Something else.";

 // Append both new elements one at a time using appendChild() (step 3)
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 // Get the button element
var myButton = document.getElementById("myButton");

// Add click event listener to the button
myButton.addEventListener("click", function() {
  // Redirect to the YouTube video URL
  window.location.href = "https://www.youtube.com/watch?v=WikXzhXxyoQ";
});






