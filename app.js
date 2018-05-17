const list = document.querySelector("#book-list ul");

//Delete Books
//adding event listener to ul instead to delete books
list.addEventListener("click", function(e){
    if(e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// //Querying the forms
// document.forms
// document.forms ["add-book"];


//Add new books to list

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e){
    e.preventDefault();
    

//Create elements
const value = addForm.querySelector("input[type='text']").value;
const li = document.createElement("li");
const bookNameSpan = document.createElement("span");
const deleteBtnSpan = document.createElement("span");


//Add content
deleteBtnSpan.textContent = "delete";
bookNameSpan.textContent = value;

//Add classes to elements
bookNameSpan.classList.add("name");
deleteBtnSpan.classList.add("delete");

//Append to the document
li.appendChild(bookNameSpan);
li.appendChild(deleteBtnSpan);
list.appendChild(li);
});

//change attributes
// .getAttribute .setAttribute .hasAttribute .removeAttribute

// Hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener ("change", function(e) {
   if (hideBox.checked) {
       list.style.display = "none";
   } else {
       list.style.display = "initial";
   }
});

//Filter books with search bar
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});