let currentImageIndex = 0;
const images = document.querySelectorAll('.container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    lightbox.style.display = 'block';
    lightboxImg.src = src;

    document.addEventListener('keydown', handleKeyDown);
}

function closeLightbox() {
    lightbox.style.display = 'none';

    document.removeEventListener('keydown', handleKeyDown);
}


function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(-1); 
    } else if (event.key === 'ArrowRight') {
        changeImage(1); 
    } else if (event.key === 'Escape') {
        closeLightbox(); 
    }
}


function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; 
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; 
    }
    lightboxImg.src = images[currentImageIndex].src;
}