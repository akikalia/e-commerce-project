import AbstractView from "./AbstractView.js";
import NotFound from "./NotFound.js";
import Products from "./Products.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Home");
        return await fetch('https://fakestoreapi.herokuapp.com/products')
            .then(result => result.json())
            .then(products => { 
                let res = `<div class="flex flex-row justify-center align-center"><div class="carousel">
                <div class="hide" id="carousel_source">
                    <a href="#categories/men%20clothing"><img src="https://fakestoreapi.herokuapp.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="001"></a>
                    <a href="#categories/jewelery"><img src="https://fakestoreapi.herokuapp.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="002"></a>
                    <a href="#categories/electronics"><img src="https://fakestoreapi.herokuapp.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="003"></a>
                    <a href="#categories/women%20clothing"><img src="https://fakestoreapi.herokuapp.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt="004"></a>
                </div>
                <div class="flex justify-center">
                    <ul class="carousel-tabs">
                        <li><i class="fas fa-circle"></i></li>
                        <li><i class="far fa-circle"></i></li>
                        <li><i class="far fa-circle"></i></li>
                        <li><i class="far fa-circle"></i></li>
                    </ul>
                </div>
                <div class="flex flex-row justify-center align-center">
                    <a id="carousel_dest" href="#categories/men%20clothing"><img class="carousel-image" src="https://fakestoreapi.herokuapp.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  alt="carousel"></a>
                </div>
                <input class="arrow-checkbox hide" type="checkbox" id="left-arrow-checkbox"/>
                <label for="left-arrow-checkbox">
                    <span class="arrow left-arrow"><i class="fas fa-chevron-left fa-3x"></i></span>                    
                </label>
                <input class="arrow-checkbox hide" type="checkbox" id="right-arrow-checkbox"/>
                <label for="right-arrow-checkbox">                  
                    <span class="arrow right-arrow"><i class="fas fa-chevron-right fa-3x"></i></span>
                </label>
                </div></div>
                <div class=" grid grid-products">`;
                
                products.forEach(product => {
                    let image = product.image.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/');
                    res += `
                    
                    <a class="list-item-product product" href="#products/${product.id}">
                        <img src="${image}" alt="${product.title}">
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