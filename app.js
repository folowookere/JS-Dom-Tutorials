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
    
    
    //Append to the document
    li.appendChild(bookNameSpan);
    li.appendChild(deleteBtnSpan);
    list.appendChild(li);

});