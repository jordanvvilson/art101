// create comment block

  // index.js - purpose and description here
  // Author: Jordan Wilson <jwilso17@ucsc.edu>
  // Date: 03 May 2023


// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.Sort('');
  //join array back to string
  var nameSorted = sameArraySort.join('');
  console.log("nameSorted=",nameSorted);
  return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");

  