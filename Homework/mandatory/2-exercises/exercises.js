/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="main">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
let allPeople = "";

function exerciseOne(arrayOfPeople) {
  let main = document.querySelector("#main");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let person = arrayOfPeople[i];
    allPeople =
      allPeople + "<h1>" + person.name + "</h1><h2>" + person.job + "</h2>";
    console.log(allPeople);
  }
  main.innerHTML = allPeople;
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

let shoppingList = "";

function exerciseTwo(shopping) {
  //Write your code in here
  let main = document.querySelector("#main");
  for (let i = 0; i < shopping.length; i++) {
    let shoppingItem = shopping[i];
    shoppingList = shoppingList + "<ul>" + shoppingItem + "</ul>";
    console.log(shoppingList);
  }
  main.innerHTML = allPeople + shoppingList;
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
  //Write your code in here
  const main = document.querySelector("#main");
  let ul = document.createElement("ul");

  let bookImages = [
    "https://m.media-amazon.com/images/I/51Dl6lXXesL.jpg",
    "https://m.media-amazon.com/images/I/51qZx6I191L.jpg",
    "https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg",
  ];

  let bookSource = [
    "https://www.amazon.com/-/es/Design-Everyday-Things-Revised-Expanded/dp/B07L5Y9HND/ref=sr_1_1?__mk_es_US=ÅMÅŽÕÑ&crid=18ZT10TMED33U&dchild=1&keywords=the+design+of+everyday+things&qid=1588529108&s=audible&sprefix=the+desi%2Caudible%2C263&sr=1-1",
    "https://www.amazon.com/-/es/Most-Human-Talking-Computers-Teaches/dp/B004Q3LONY/ref=sr_1_1?__mk_es_US=ÅMÅŽÕÑ&dchild=1&keywords=The+Most+Human+Human+-+Brian+Christian&qid=1588528460&s=books&sr=1-1",
    "https://www.amazon.com/-/es/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833FBNHV/ref=sr_1_1?__mk_es_US=ÅMÅŽÕÑ&dchild=1&keywords=The+Pragmatic+Programmer+-+Andrew+Hunt%5C&qid=1588529233&s=audible&sr=1-1",
  ];

  for (let i = 0; i < books.length; i++) {
    var book = books[i];
    let li = document.createElement("li");
    ul.appendChild(li);
    let p = document.createElement("p");
    p.innerHTML = book.title + " - " + book.author;
    let imgBook = document.createElement("img");
    imgBook.src = bookImages[i];
    let buyBook = document.createElement("a");
    buyBook.href = li.appendChild(p);
    buyBook.href = bookSource[i];
    imgBook.appendChild(buyBook);
    li.appendChild(imgBook);

    if (book.alreadyRead) {
      li.classList.add("alreadyRead");
    } else {
      li.classList.add("notRead");
    }
  }
  main.appendChild(ul);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
