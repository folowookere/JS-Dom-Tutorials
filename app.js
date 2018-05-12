var buttons = document.querySelectorAll("#book-list ul li");

//Deleting li elements after delete button is clicked
Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function(e) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
});

const link = document.querySelector("#page-banner a");

link.addEventListener("click", function(e){
    e.preventDefault();
    console.log("navigation to", e.target.textContent, "was prevented");
})