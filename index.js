const fs = require("fs");
cards = {}

document.getElementById("search").addEventListener("keyup",function(event) {
	if (event.keyCode ==13){document.getElementById("search-button").click();}
});
document.getElementById("search-button").addEventListener("click",()=>{
	var search_query = document.getElementById("search").value;
	if (search_query.trim().length >0) {
		document.getElementById("search").value= "";
		if (search_query.endsWith("/")){
			search_query = "https://"+search_query;
		} else{
			search_query = "https://www.google.com/search?q="+search_query;
		}
		window.open (search_query, "_newtab" );
	}
});
document.getElementById("search").focus();


// Read users.json file 
fs.readFile("cards.json", function(err, data) { 
    
    // Check for errors 
    if (err) throw err; 

    // Converting to JSON 
    cards = JSON.parse(data);
});

let user =
{
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
};

// STEP 3: Writing to a file 
fs.writeFile(
    "cards.json",
    JSON.stringify(user),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    }); 

// document.getElementById("add-card-button").addEventListener("click",()=>{
// 	document.getElementById("add-card-form").classList.toggle("visible");
// });
// document.getElementById("add-card-confirm-button").addEventListener("click",()=>{
// 	document.getElementById("add-card-form").classList.toggle("visible");
// 	// code to add new card.....
// });