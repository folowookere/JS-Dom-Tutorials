var books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach(function(book){
    book.textContent += " (book title)";
});

const bookList = document.querySelector("#book-list");

// Uncomment line 10 to see entire book list replaced
// bookList.innerHTML = "<h2> Books and more books.</h2>";

//Append text to html, will show at end of html
bookList.innerHTML += "<p>This is how you add html</p>";