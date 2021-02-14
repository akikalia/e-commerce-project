import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("404 Page Not Found");
        return `
        <div class="flex flex-column justify-center align-center size-100">
            <h1 class="l-text"><p class="xl-text">404 <del class="m-text">👽<del></p> 🛸Page Not Found Error👾</h1>
            <a href="#" class="white">
                <div class="product-page-button flex flex-column align-center justify-center">
                    Back to safety!
                </div>
            </a>
        </div>
        `;
    }
}