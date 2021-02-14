

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    location.hash = "search/" + document.querySelector("#search-value").value;
});