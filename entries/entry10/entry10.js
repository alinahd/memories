
function toggleImage(imageBox) {
    const visibleImage = imageBox.querySelector('.visible');
    const hiddenImage = imageBox.querySelector('.hidden');

    if (visibleImage.style.opacity !== "0") {
        visibleImage.style.opacity = "0";  
        hiddenImage.style.opacity = "1"; 
    } else {
        visibleImage.style.opacity = "1"; 
        hiddenImage.style.opacity = "0";  
    }
}
