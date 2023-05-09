// index.js - purpose and description here
// Author: Jordan Wilson
// Date: 27 April 2023

// Define Variables
var myTransport = [ "car" , "bike" , "walking" , "bus" ];

//Create an object for my main ride
var myMainRide

var myMainRide = {
    make: "Ford",
    model: "Taurus", 
    color: "rusty",
    year: 1995, 
    age: function() {
        return 2023 - this.year;
    }
}

//output
document.writeln("My modes of transportation are:", myTransport, "</br>");
//write object into document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


