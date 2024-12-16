$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
// Initialize WOW.js
new WOW({
    boxClass: 'wow',        // Class name for the animated elements
    animateClass: 'animate__animated', // Animate.css class
    offset: 100,            // Distance to the element when triggering animation
    mobile: true,           // Enable animations on mobile
    live: true              // Re-check animation on dynamically added elements
}).init();

// Shrink navbar on scroll
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("Navbar Shrunk");
    } else {
        $('.nav').removeClass('affix');
    }
});
document.querySelector(".navTrigger").addEventListener("click", function () {
    const navList = document.getElementById("mainListDiv");
    navList.classList.toggle("active");
});


// ===============================slide==================
// Open the modal and display the clicked image
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    
    modal.style.display = "block";
    modalImage.src = image.src; // Set the clicked image source to modal
    modalDescription.textContent = image.getAttribute("data-description"); // Set the description
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
// =================================================
