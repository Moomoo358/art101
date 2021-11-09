/*
*Authors : Monique Salinas & Lokinah Khan
*Created : 8 November
*License : Public Domain
*/

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$("#challenges").append("<button id='g-button'>Button</button>");
$("#problems").append("<button id = 'p-button'>Button</button>");
$("#results").append("<button id='c-button'>Button</button>");

// Using jQuery, do the following for each button:
// Add a click event to each button
$("#g-button").click(function() {
  //action here
  $(this).parent().toggleClass("special");
});

$("#p-button").click(function() {
  //action here
  $(this).parent().toggleClass("special");
});

$("#c-button").click(function() {
  //action here
  $(this).parent().toggleClass("special");
});

// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button
