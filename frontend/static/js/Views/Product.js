import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }
    async getHtml() {
        this.setTitle("Product");
        return await fetch('https://fakestoreapi.com/products/' + this.params["id"])
            .then(res => res.json())
            .then(product => { 
                return `
                        <div class="grid grid-sections-2 size-100 my-2">
                            
                                <img class="product-page-image my-3" src="${product.image}" alt="">
                            
                            <div>
                                <p class="product-page-title my-3">${product.title}</p>
                                <p class="product-page-price my-1">$${product.price}</h3>
                                <p id="add-to-cart-message" class="hidden" >Added to cart!</p>
                                <div class="flex flex-row my-2">
                                    <input class="product-page-input" type="number" value="1"/>
                                    <form id="add-to-cart" class="mx-1 my-1">
                                        <button id="add-to-cart-button" class="product-page-button ">Add To Cart</button>
                                    </form>
                                </div>
                                <div>
                                    <p class="product-page-price my-1">Product Description:</p>
                                    <p class="product-page-details">${product.description}</p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <script src="static/js/add-to-cart.js"></script>
                    `;
            }).catch(() =>{
                return null;
            });
    }

}