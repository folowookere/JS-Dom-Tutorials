//Delete books

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

//Create elements
const li = document.createElement("li");
const bookNameSpan = document.createElement("span");
const deleteBtnSpan = document.createElement("span");


});

// Hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener ("change", function(e) {
   if (hideBox.checked) {
       list.style.display = "none";
   } else {
       list.style.display = "initial";
   }
});

//Tabbed Content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", function(e){
    if(e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if (panel == targetPanel) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    }
});

