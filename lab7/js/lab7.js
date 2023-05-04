// create comment block

  // index.js - purpose and description here
  // Author: Jordan Wilson <jwilso17@ucsc.edu> Stephanie He <she100@ucsc.edu>
  // Date: 03 May 2023


// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.Sort();
  //join array back to string
  var nameSorted = sameArraySort.join('');
  console.log("nameSorted=",nameSorted);
  return nameSorted;

//output
document.writeln("Oh hey, I've fixed your name: ",sortUserName(), "</br>");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
  // convert userName string to an array
  var nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);
  // shuffle array with our shuffle function
  var shuffledArray = shuffledArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  var shuffledString = shuffledArray.join("");
  // shift to Title Case (like a name)
  var newName = toTitleCase(shuffledString);
  console.log("toTitleCase=", toTitleCase);
  // return array to a string
    return newName;
//output
    document.writeln("<div class='name'>" + randomName + "</div>")
}

  