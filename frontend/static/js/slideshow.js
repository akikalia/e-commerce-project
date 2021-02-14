
var i = 0;
var images;
var dest;
var flagReset = false;
var tabs;
var changes = 0;
var lastChanged = Date.now();

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
    dest.firstChild.src = images[i].firstChild.src;
    dest.href = images[i].href;
    tabs[i].children[0].classList.remove("far");
    tabs[i].children[0].classList.add("fas");
}

//changes image to i+1 if user input flag was not triggered, stops after few changes 
function changeTimed(){
    if (location.hash != "" || changes > 5 || (Date.now() - lastChanged) < 2900){
        return;
    }
    if (flagReset){
        flagReset = false;   
    }else{
        remove();
        i++;
        change();
    }
    timer = setTimeout(changeTimed, 3000);
}

function runCarousel(){
    changes++;
    images = document.getElementById("carousel_source").children;
    dest = document.getElementById("carousel_dest");
    tabs = document.getElementsByClassName("carousel-tabs")[0].children;
    
    document.getElementsByClassName("left-arrow")[0].addEventListener("click", left);
    
    document.getElementsByClassName("right-arrow")[0].addEventListener("click", right);
    
    timer = setTimeout(changeTimed, 3000);

}

runCarousel()
//launches countdown change 
// window.onload = setTimeout(changeTimed, time);
