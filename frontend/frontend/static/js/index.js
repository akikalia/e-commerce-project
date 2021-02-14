import Home from "./Views/Home.js";
import Cart from "./Views/Cart.js";
import Category from "./Views/Category.js";
import Categories from "./Views/Categories.js";
import Products from "./Views/Products.js";
import Product from "./Views/Product.js";
import Search from "./Views/Search.js";
import Login from "./Views/Login.js";
import Register from "./Views/Register.js";
import About from "./Views/About.js";
import NotFound from "./Views/NotFound.js";
import Loader from "./Views/tags/Loader.js";


// login / registration 
var loginForm;
var registrationForm;

const pathToRegex = path => new RegExp("^"+ path
.replace(/\//g, "\\/")
.replace(/:\w+/g, "(.+)") + "$")

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};



const router = async () => {
    const routes = [
        { path: "", view: Home },
        { path: "#cart", view: Cart },
        { path: "#categories", view: Categories },
        { path: "#categories/:id", view: Category },
        { path: "#products", view: Products },
        { path: "#products/:id", view: Product },
        { path: "#search/:name", view: Search },
        { path: "#login", view: Login },
        { path: "#register", view: Register },
        { path: "#about-us", view: About },
        // { path: "/login", view: Login },
        // { path: "/Register", view: Register },
        // { path: "/account", view: Account },
        // { path: "/404", view: NotFound },
    ];

    let matches = routes.map(route => {
        return {
            route: route,
            result: location.hash.match(pathToRegex(route.path))
        };
    });
    console.log(location.hash);
    let match = matches.find(match => match.result !== null);
    if (!match){
        match = {
            route: { path: "#404", view: NotFound },
            result: location.hash
        };
    }
    let view  = new match.route.view(getParams(match));
    
    let viewTag = document.querySelector("#view")
    viewTag.innerHTML = (new Loader()).getHtml();
    console.log(match.route.path);
    
    let res = await view.getHtml();
    if (!res){
        res = (new NotFound).getHtml();
    }
    viewTag.innerHTML = res;
    Array.from(viewTag.querySelectorAll("script")).forEach(( script)=>{
        var tag = document.createElement("script");
        tag.src = script.src;
        viewTag.appendChild(tag);
        // eval(script);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    router();
});


document.addEventListener("onhashchange", ()=>{
    console.log("hash change!")
    history.pushState(nil, nil, url)
    router();
});

window.addEventListener("popstate", ()=>{
    router();
});


