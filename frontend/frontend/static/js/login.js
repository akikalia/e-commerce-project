loginForm = document.querySelector("#login-form");


loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    location.hash = "";

    document.querySelector("#authorize").style.display = "none";
});


