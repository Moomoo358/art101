/*
*Authors : Monique Salinas
*Created : 29 November
*License : Public Domain
*/

//apiEndpoint = https://bts-quotes-api.herokuapp.com/quote/random
var myUrl = "http://numbersapi.com/random/year";

$("#activate").click(function(){
  $.ajax({
    // The URL for the request
    url: myUrl,
    // The data to send (will be converted to a query string)
    // data: { },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    // dataType : "json",
    // If the request succeeds
    success: function(data) {
      // turn data object into string just so we can display it
      // and look at it and understand WTF is going on.
      // var textData = JSON.stringify(data);
      // let's build up a string to display on our page
      // var str = "";
      // let's get the individual values from data object
      // var imageURL = data.img;
      // var title = data.title;
      // var alt = data.alt;
      // building our string for display using HTML
      // str += "<h2>" + title + "</h1>";
      // str += "<img src='" + imageURL + "' title='" + alt + "'>"
      // put our html string on our page using our helper function
      // putTextOnPage(str);
      // on the console, we can see whaz up
      console.log(data);
      $("#output").text(data);
    },

  // If the request fails
  error: function( jqXHR, textStatus, errorThrown ) {
    //console.log(errorThrown + " Status:" + status );

  console.log("Error:" , textStatus, errorThrown);
  }
})
})
