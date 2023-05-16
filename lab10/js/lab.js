// Lab 10: Javascript Events and Forms
// Author: Jordan Wilson
// Date: 16 May 2023


// Event listener for button click
document.getElementById("my-button").addEventListener("click", function() {
    // Get the value from the input field
    var userName = document.getElementById("user-name").value;

    // Call the nameSort() or anagram() function and save the results
    var sortedName = nameSort(userName); // or var sortedName = anagram(userName);

    // Replace the HTML content of the output div with the results
    document.getElementById("output").innerHTML = sortedName;
});

// nameSort() function
function nameSort(name) {
    // Sort the characters in the name alphabetically
    var sortedName = name.toLowerCase().split("").sort().join("");

    // Return the sorted name
    return sortedName;
}

//use append child for task x 

//