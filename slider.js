const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

let currentIndex = 0;
let startX = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let isDragging = false;

// Clone slides for seamless looping
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

carouselContainer.appendChild(firstClone);
carouselContainer.insertBefore(lastClone, slides[0]);

// Adjust container to start at the first "real" slide
carouselContainer.style.transform = `translateX(-100%)`;

function moveToNextSlide() {
    currentIndex++;
    carouselContainer.style.transition = 'transform 0.5s ease-in-out';
    carouselContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

    if (currentIndex === totalSlides) {
        setTimeout(() => {
            carouselContainer.style.transition = 'none';
            currentIndex = 0;
            carouselContainer.style.transform = `translateX(-100%)`;
        }, 500); // Wait for the animation to complete
    }
}

function moveToPreviousSlide() {
    currentIndex--;
    carouselContainer.style.transition = 'transform 0.5s ease-in-out';
    carouselContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

    if (currentIndex < 0) {
        setTimeout(() => {
            carouselContainer.style.transition = 'none';
            currentIndex = totalSlides - 1;
            carouselContainer.style.transform = `translateX(-${totalSlides * 100}%)`;
        }, 500); // Wait for the animation to complete
    }
}

// Handle touch events for manual sliding
carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    carouselContainer.style.transition = 'none';
});

carouselContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = previousTranslate + deltaX;
    carouselContainer.style.transform = `translateX(${currentTranslate}px)`;
});

carouselContainer.addEventListener('touchend', () => {
    isDragging = false;
    const movedBy = currentTranslate - previousTranslate;

    if (movedBy < -50) moveToNextSlide();
    else if (movedBy > 50) moveToPreviousSlide();
    else carouselContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

    previousTranslate = -currentIndex * carouselContainer.clientWidth;
});

// Automatic sliding
setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds</script>


