import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Categories");
        return await fetch('https://fakestoreapi.herokuapp.com/products/categories')
            .then(res => res.json())
            .then(categories => { 
                let res = `
                <div class="flex flex-row justify-center align-center m-1"><p class="l-text">All Categories</p></div>
        
                <div class=" grid  grid-products">`;
                categories.forEach(category => {
                    res += `
                    <a class="list-item-product product height-quater" href="#categories/${category}">
                        <p class="list-item-product-price">${category}</p>
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