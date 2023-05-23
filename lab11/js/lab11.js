//lab 11: Libraries & jQuery
//Author: Jordan Wilson
//Date: 17 May 2023 

//create buttons and append them to minor sections 
$("sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");

$(".highlight-button").click(fnction(){
    //use "this" to refer to button
$(this).parent().toggleClass("special");
})
   