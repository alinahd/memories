let flippedImages = [false, false, false, false]; 

function flipImage(image) {
    const inner = image.querySelector('.flip-image-inner');
    inner.classList.toggle('flipped');  

    const imageIndex = Array.from(image.parentNode.children).indexOf(image);
    
    if (imageIndex < 4) {
        flippedImages[imageIndex] = !flippedImages[imageIndex];  
    }

  
    if (flippedImages.every(state => state === true)) {
        showTitle();
    } else {
        hideTitle();
    }
}

function showTitle() {
    const titleContainer = document.getElementById('title-container');
    titleContainer.style.display = 'flex';  
    setTimeout(() => {
        titleContainer.style.opacity = 1;  
        titleContainer.style.transform = 'scale(1)';  
    }, 50);
}

function hideTitle() {
    const titleContainer = document.getElementById('title-container');
    titleContainer.style.opacity = 0; 
    titleContainer.style.transform = 'scale(0)';  
}
