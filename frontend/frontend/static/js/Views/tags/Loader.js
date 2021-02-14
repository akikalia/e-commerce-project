export default class {
    

    setTitle() {
        document.title = "Loading...";
    }

    getHtml() {
        this.setTitle()
        return `
            <div class="loader center "></div>
        `;
    }
}