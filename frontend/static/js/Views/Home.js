import AbstractView from "./AbstractView.js";
import NotFound from "./NotFound.js";
import Products from "./Products.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Home");
        return await fetch('https://fakestoreapi.com/products')
            .then(result => result.json())
            .then(products => { 
                let res = `<div class="carousel">
                <div class="hide" id="carousel_source">
                    <img src="static/resources/slideshow/001.jpg" alt="001">
                    <img src="static/resources/slideshow/002.jpg" alt="002">
                    <img src="static/resources/slideshow/003.jpg" alt="003">
                    <img src="static/resources/slideshow/004.jpg" alt="004">
                </div>
                <div class="flex justify-center">
                    <ul class="carousel-tabs">
                        <li><i class="fas fa-circle"></i></li>
                        <li><i class="far fa-circle"></i></li>
                        <li><i class="far fa-circle"></i></li>
                        <li><i class="far fa-circle"></i></li>
                    </ul>
                </div>
                <img class="carousel-image" src="static/resources/slideshow/001.jpg" id="carousel_dest" alt="carousel">
                <input class="arrow-checkbox hide" type="checkbox" id="left-arrow-checkbox"/>
                <label for="left-arrow-checkbox">
                    <span class="arrow left-arrow"><i class="fas fa-chevron-left fa-3x"></i></span>                    
                </label>
                <input class="arrow-checkbox hide" type="checkbox" id="right-arrow-checkbox"/>
                <label for="right-arrow-checkbox">                  
                    <span class="arrow right-arrow"><i class="fas fa-chevron-right fa-3x"></i></span>
                </label>
                </div>
                <div class=" grid grid-products">`;
                
                products.forEach(product => {
                    res += `
                    
                    <a class="list-item-product product" href="#products/${product.id}">
                        <img src="${product.image}" alt="${product.title}">
                        <p class="list-item-product-price">${product.price}$</p>
                        <p class="list-item-product-description">${product.title}</p>
                    </a>
                    `
                });
                res += `</div>
                <script src="static/js/slideshow.js"></script>`;

                return res;
            }).catch(() =>{
                return null;
            });
    }
}