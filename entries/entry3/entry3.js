document.addEventListener('DOMContentLoaded', () => {
    const dropletContainer = document.querySelector('.water-droplets');
    const numberOfDroplets = 55; 

    for (let i = 0; i < numberOfDroplets; i++) {
        createDroplet();
    }

    function createDroplet() {
        const droplet = document.createElement('div');
        droplet.classList.add('droplet');

        const randomLeft = Math.random() * window.innerWidth;
        droplet.style.left = `${randomLeft}px`;

        const randomDuration = Math.random() * 2 + 4; 
        droplet.style.animationDuration = `${randomDuration}s`;

        const randomDelay = Math.random() * 2; 
        droplet.style.animationDelay = `${randomDelay}s`;

        dropletContainer.appendChild(droplet);

        droplet.addEventListener('animationend', () => {
            droplet.remove();
        });
    }
});
