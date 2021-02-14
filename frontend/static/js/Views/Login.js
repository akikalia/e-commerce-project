import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Login");
        return `
                <div class="flex flex-column align-center">
                    <div class="checkout-box flex flex-column justify-center align-center my-3 p-3">
                        <div class="hidden">Problem signing in!</div>
                        <form class="form flex flex-column " id="login-form">
                            <p class="l-text my-1">Login</p>
                            <input class="border my-1" type="text" placeholder="Username">
                            <input class="border my-1" type="password" class="" autofocus placeholder="Password">
                            <button class="product-page-button my-1" type="submit">Sign in</button>
                            <a href="#register">Don't have an account? Create account</a>
                        </form>
                        
                    </div>
                    <script src="static/js/login.js"></script>
                </div>
        `;
    }
}