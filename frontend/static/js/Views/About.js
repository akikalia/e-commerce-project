import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("About");
        return `
            <h1>About</h1>
        `;
    }
}