/*
*Author : Monique Salinas
*Created : 25 October
*License : Public Domain
*/

// sortUserName - a function that takes user input and sorts the letters
// of their name

function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that I could have done this in a signle line
    // userName.toLower().split("").sort().join("")
    return nameSorted;
}

// output
document.writeln("oh hey, I've fixed your name: ",
      sortUserName(), "</br>");
