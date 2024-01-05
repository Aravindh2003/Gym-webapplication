const mobileToggleBtn = document.querySelector(".mobile-toggle-btn");
const nav = document.querySelector("nav");
const toggleIcon = document.querySelector(".mobile-toggle-btn i");
mobileToggleBtn.onclick = function () {
    nav.classList.toggle("active");
    toggleIcon.classList.toggle("fa-times");
}