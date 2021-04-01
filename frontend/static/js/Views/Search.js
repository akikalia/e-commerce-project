import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        //sadly no search option in fake commerce api (would fetch('https://fakestoreapi.herokuapp.com/search/' + this.params["name"]))
        this.setTitle("Search");
        return await fetch('https://fakestoreapi.herokuapp.com/products?limit=7')
            .then(result => result.json())
                //todo: search results 
            .then(products => { 
                let res = `
                
                <div class="flex flex-row justify-center align-center m-1"><p class="l-text">Search Results</p></div>
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
                res += `</div>`;

                return res;
            }).catch(() =>{
                return null;
            });
    }
}