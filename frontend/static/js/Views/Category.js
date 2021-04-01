import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Category");
        return await fetch('https://fakestoreapi.herokuapp.com/products/category/' + this.params["id"])
            .then(res => res.json())
            .then(products => { 
                let title = this.params["id"].replace(/%20/g, " ");
                let res = `
                
                <div class="flex flex-row justify-center align-center m-1"><p class="l-text">${title.charAt(0).toUpperCase() + title.slice(1)}</p></div>
                <div class=" grid  grid-products">`;
                
                products.forEach(product => {
                    let image = product.image.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/');
                    res += `
                    <a class="list-item-product product " href="#products/${product.id}">
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