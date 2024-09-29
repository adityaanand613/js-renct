const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Function to switch slides
function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    slides[currentIndex].classList.add('active');
}

// Automatically change slides every second
setInterval(showNextSlide, 1000);
