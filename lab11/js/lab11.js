//lab 11: Libraries & jQuery
//Author: Jordan Wilson
//Date: 17 May 2023 




$("#c-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){

  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){


  $(this).parent().toggleClass("special");
})

$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");