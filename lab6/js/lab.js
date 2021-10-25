/*
*Author : Monique Salinas <mnsalina@ucsc.edu>
*Created : 23 October
*License : Public Domain
*/

// Define variables
myTransport = ["walk", "Buick Verano", "rides from friends"];

myMainRide = {
    make: "Buick",
    model: "Verano",
    color: "White",
    year: 2012,
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
