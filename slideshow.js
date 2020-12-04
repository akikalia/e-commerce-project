let i = 0;
let images;
let time = 3000;
let dest;
let flagReset;
let tabs;

images = document.getElementById("carousel_source").children;
dest = document.getElementById("carousel_dest");
leftArrow = document.getElementsByClassName("left-arrow")[0];
rightArrow = document.getElementsByClassName("right-arrow")[0];
tabs = document.getElementsByClassName("carousel-tabs")[0].children;

leftArrow.addEventListener("click", left);

rightArrow.addEventListener("click", right);

//changes to previous image
function left(){
    flagReset = true;
    remove();
    i--;
    change();
}

//changes to next image
function right(){
    flagReset = true;
    remove();
    i++;
    change();
}

//removes current tab
function remove(){
    if (i < 0){
        i = images.length-1;
    }
    i %= images.length;
    tabs[i].children[0].classList.remove("fas");
    tabs[i].children[0].classList.add("far");
}

// changes image to i 
function change(){
    if (i < 0){
        i = images.length-1;
    }
    i %= images.length;
    dest.src = images[i].src;
    tabs[i].children[0].classList.remove("far");
    tabs[i].children[0].classList.add("fas");
}

//changes image to i+1 if user input flag was not triggered
function changeTimed(){
    if (flagReset){
        flagReset = false;   
    }else{
        remove();
        i++;
        change();
    }
    setTimeout(changeTimed, time);
}

//launches countdown change 
window.onload = setTimeout(changeTimed, time);
