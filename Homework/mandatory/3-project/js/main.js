

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




// ## Part 2

// Just below the buttons, there's a form called **Register with us**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character

// For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click **Submit** it should:

// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

// **Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault


var submitbttnEl = document.querySelector("form.btn.btn-primary");
submitbttnEl.addEventListener("click", function() {
var formFieldsEls = document.querySelectorAll(".form-control")
    for (let i = 0; i < formFieldsEls.length; i++) { 
     var allFormFieldsEls = formFieldsEls[i];
     if (allFormFieldsEls.length === 0) {
         formFieldsEls.style.borderColor = "red";
        
     } 
     else {
         alert (" Thank you for filling in this form!");
     }

     }
    });


console.log(submitbttnEl);
