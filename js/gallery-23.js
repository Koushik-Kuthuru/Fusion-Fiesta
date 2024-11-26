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
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop to first image
    }
    lightboxImg.src = images[currentImageIndex].src;
}