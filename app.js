// select book-list id
var bookList = document.getElementById("book-list")


// //select page-banner id
var banner = document.getElementById("page-banner")


// //select all elements with tag li
var lis = document.getElementsByTagName("li");

// //cycle through titles and show them in the console
for (i = 0; i < titles.length; i++) {
	console.log(titles[i])
}

//select all elements with title class
var titles = document.getElementsByClassName("title");


Array.from(titles).forEach(function(item) {
 console.log(item);   
})