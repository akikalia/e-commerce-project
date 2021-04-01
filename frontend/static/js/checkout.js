
document.querySelector("#checkout").addEventListener("submit", async (e)=>{
    e.preventDefault();
    let button = document.querySelector("#checkout-button");
    let before = button.innerHTML;
    let message = document.querySelector("#checkout-message");
    message.style.display = "none";
    button.innerHTML = "";
    let tag = document.createElement("div");
    tag.className = "button-loader";
    button.appendChild(tag);
    await fetch('https://fakestoreapi.herokuapp.com/carts/7',{
            method:"PUT",
            //todo get elements and values
            body:JSON.stringify(
                {
                    userId:3,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>{
         
            });
    //after fetch 
    button.innerHTML = before;
    message.style.display = "block";
    setTimeout(()=>{
        message.style.display = "none";
    }, 3000)
});

