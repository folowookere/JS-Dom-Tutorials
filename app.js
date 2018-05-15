const list = document.querySelector("#book-list ul");
//adding event listener to ul instead to delete books
list.addEventListener("click", function(e){
    if(e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//Add new books to list

const addForm = document.forms["add-book"]

addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;
    
    //Create elements
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
    
    //Attributes - Lesson 14 (all done in console)
    
    //     var book = document.querySelector("li:first-child .name")
    // undefined
    // book
    // <span data-cloud9-id="76" class="name">Name of the Wind</span>
    // book.getAttribute("class")
    // "name"
    // book
    // <span data-cloud9-id="76" class="name">Name of the Wind</span>
    // book.setAttribute("class", "name-2")
    // undefined
    // book
    // <span data-cloud9-id="76" class="name-2">Name of the Wind</span>
    // book.hasAttribute("class")
    // true
    // book.hasAttribute("href")
    // false
    // book.removeAttribute("class");
    // undefined
    // book
    // <span data-cloud9-id="76">Name of the Wind</span>
    // book.setAttribute("class", "name")
    // undefined
    // book
    // <span data-cloud9-id="76" class="name">Name of the Wind</span>
});