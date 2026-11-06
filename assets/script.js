const bannerImage = document.querySelector("#banner .banner-img");
const bannerText = document.querySelector("#banner p");
const previousButton = document.querySelector("#banner button.arrow_left");
const nextButton = document.querySelector("#banner button.arrow_right");

// Define the slides data
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialize the current slide index
let currentSlideIndex = 0;
// Select all the dots
const dots = document.querySelectorAll("#banner .dots .dot");
// Function to update the banner image, text, and dots based on the current slide index
function showSlide() {
    const slide = slides[currentSlideIndex];
    bannerImage.src = `./assets/images/slideshow/${slide.image}`;
    bannerText.innerHTML = slide.tagLine;

	dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentSlideIndex);
	});
}
// Add event listeners to the previous and next buttons
previousButton.addEventListener("click", () => {
	// Update the current slide index to the previous slide, wrapping around if necessary
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide();
});
// Add event listener to the next button
nextButton.addEventListener("click", () => {
	// Update the current slide index to the next slide, wrapping around if necessary
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide();
});



showSlide();