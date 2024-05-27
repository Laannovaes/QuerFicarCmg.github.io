class LoveRequest {
    constructor() {
        this.noButton = document.getElementById('noButton');
        this.container = document.querySelector('.container');
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.noButton.addEventListener('mouseover', () => this.moveButton());
    }

    moveButton() {
        const containerRect = this.container.getBoundingClientRect();
        const buttonRect = this.noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        this.noButton.style.left = `${randomX}px`;
        this.noButton.style.top = `${randomY}px`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LoveRequest();
});
