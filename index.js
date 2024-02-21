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

// document.getElementById("add-card-button").addEventListener("click",()=>{
// 	document.getElementById("add-card-form").classList.toggle("visible");
// });
// document.getElementById("add-card-confirm-button").addEventListener("click",()=>{
// 	document.getElementById("add-card-form").classList.toggle("visible");
// 	// code to add new card.....
// });