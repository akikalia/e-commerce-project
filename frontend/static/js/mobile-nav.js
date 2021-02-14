function changeState(item){
    if(item.style.display == "block")
        item.style.display = "none";
    else
        item.style.display = "block";
}

let checkbox = document.getElementById("hamburger-checkbox");
let menu = document.getElementById("hamburger-navbar");
checkbox.onchange = function(){
    if(menu.style.display == "block")
        menu.style.display = "none";
    else
        menu.style.display = "block";
}



let search = document.getElementsByClassName("search-form")[0];
let header = document.getElementById("header");
let button = document.getElementById("search-mobile-button");
let flag = true

button.addEventListener("click", function(){
    if (flag)
        header.appendChild(search).style.display = "none";
    flag = false;

    if(search.style.display == "block")
        search.style.display = "none";
    else
        search.style.display = "block";
}, false);