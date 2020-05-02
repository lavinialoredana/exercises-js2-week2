

// /When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
// */

//  var alertButton = document.querySelector("#alertBtn");
//  alertButton.addEventListener("click", alertSomething);

//  function alertSomething() {
//      alert( "Thanks for visiting Bikes for Refugees!");
//  }





// Clicking on the buttons should change the "theme" of the website:

// - When clicking **blue** it should change:

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`



var jumbotronEl = document.querySelector(".jumbotron");
var donateBikeEl = document.querySelector(".btn.btn-primary.btn-lrg");
var volunteerEL = document.querySelector(".btn.btn-secondary.btn-lrg");


function blue() {
var blueBttnEl = document.querySelector("#blueBtn");
blueBttnEl.addEventListener("click", function() {
    jumbotronEl.style.backgroundColor = "#588fbd";
    donateBikeEl.style.backgroundColor = "#ffa500";
    volunteerEL.style.backgroundColor = "black";
    volunteerEL.style.color = "white";

});


}

blue(); 


// When clicking **orange** it should change:

// - **Jumbotron** background color to `#f0ad4e`
// - **Donate a bike** button background color to `#5751fd`
// - **Volunteer** button background color to `#31b0d5` and text color to `white`


function orange() {
    var orangeEl = document.querySelector("#orangeBtn") 
    orangeEl.addEventListener("click", function() {
    jumbotronEl.style.backgroundColor = "#f0ad4e";
    donateBikeEl.style.backgroundColor = "#5751fd";
    volunteerEL.style.backgroundColor = "black";
    volunteerEL.style.color = "white";

    });
}




orange();


// When clicking **green** it should change:
// - **Jumbotron** background color to `#87ca8a`
// - **Donate a bike** button background color to `black`
// - **Volunteer** button background color to `#8c9c08`


function green() {
    var greenEl = document.querySelector("#greenBtn");
    greenEl.addEventListener("click", function() {
        jumbotronEl.style.backgroundColor = "#87ca8a";
        donateBikeEl.style.backgroundColor = "black";
        volunteerEL.style.backgroundColor = "#8c9c08";
      
    });
}

green();