/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

    

*/

// var pNodes = document.querySelectorAll("p");
// console.log(pNodes);

// var firstDivnode= document.querySelector("div");
// console.log(firstDivnode);

// var idJumbotron = document.querySelector("#jumbotron-text");
// console.log(idJumbotron);

// var pPrimarycontent = document.querySelectorAll(".primary-content");
// console.log(pPrimarycontent);
// var pPrimarycontentNodes = pPrimarycontent.querySelectorAll("p");
// console.log(pPrimarycontentNodes);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

//  var alertButton = document.querySelector("#alertBtn");
//  alertButton.addEventListener("click", alertSomething);

//  function alertSomething() {
//      alert( "Thanks for visiting Bikes for Refugees!");
//  }

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


// var backgroundColorchange = document.querySelector("body");
// backgroundColorchange.style.backgroundColor = "olive";

// TO FINISH AFTER CLASS


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph in the Learn more section should be added below the buttons that says "Read more below."
*/

var myElement = document.querySelector("#mainArticles");
var  addTextButton = document.querySelector( "#addTextBtn");
addTextButton.addEventListener("click", addtext);

function addtext() {
   var paragraph =  document.createElement("p");
    myElement.appendChild(paragraph);
    paragraph.innerText = "Read more below.";

}







/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var allLinks = document.querySelectorAll("a");
var largerLinksBttn = document.querySelector("#largerLinksBtn");
largerLinksBttn.addEventListener("click", increasetext);

function increasetext() {
    for (var i = 0; i < allLinks.length; i++) { 
        allLinks[i].style.fontSize = "20px"
        allLinks[i].style.color = "pink";
    }
   
}


// // /*
// Task 6
// ======
// When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
// Also clear the text inside the input field
// // *