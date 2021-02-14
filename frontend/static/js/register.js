
registrationForm = document.querySelector("#registration-form");


registrationForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    location.hash = "";

    document.querySelector("#authorize").style.display = "none";
});
