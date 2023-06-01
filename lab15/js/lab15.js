//Author: Jordan Wilon + Siena Dudas
//Date 31 May 2023
//Lab 15: AJAX
//shoutout to alvarotrigo.com, kanye.rest api, and chatgpt for helping me find my errors

$(document).ready(function() {
  // Add click event to the button
  $("#activate").click(function() {
    fetchQuote();
  });
});

// Fetch and display a Kanye West quote
function fetchQuote() {
  $.ajax({
     // The URL for the request (from the api docs)
    url: "https://api.kanye.rest/",
    //get request
    method: "GET",
    dataType: "json",
    success: function(response) {
      var quote = response.quote;
      displayQuote(quote);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  })
}

// Function to display the quote in the output div
function displayQuote(quote) {
  $("#output").text(quote);
}



