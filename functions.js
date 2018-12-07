// For editionizer drop down

// let intersectioner = document.getElementById('intersection');
// intersectioner.addEventListener('mouseover', function() {
    
// })

// For search button drop down
const itsDown = document.getElementsByClassName(".itsDown");
const itsUp = document.getElementsByClassName(".itsUp");
const moneyDeepNav = document.getElementsByClassName(".moneyDeepNav");
const deepSearch = document.getElementsByClassName(".deepSearch");
const searchButton = document.getElementsByClassName(".search-button");
const hmbButton = document.getElementsByClassName(".hmb-button");


// function dropDown() {
//     if (itsUp.classList) { 
//         moneyDeepNav.classList.toggle("itsUp");
//     } else {
//         // For IE9
//         var classes = moneyDeepNav.className.split(" ");
//         var i = classes.indexOf("itsDown");
    
//         if (i >= 0) 
//             classes.splice(i, 1);
//         else 
//             classes.push("itsDown");
//             element.className = classes.join(" "); 
//     }
// }

// searchButton.addEventListener('click', (dropDown) => {
//     deepSearch.classList.toggle('itsDown');
//   });

function dropDown() {
    var element = document.i("moneyDeepNav");
    element.classList.add("itsDown");
 }

// Search functionality

// hamburger drop down

