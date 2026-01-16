/* --- Toggle Navbar on Mobile --- */
let menuIcon = document.querySelector('.menu-btn');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    // Toggle menu visibility
    navbar.classList.toggle('active');
};

/* --- Close Menu when Scrolling --- */
window.onscroll = () => {
    navbar.classList.remove('active');
};

/* --- Typing Animation --- */
// Note: This relies on the Typed.js library linked in the HTML
const typed = new Typed('.typing-text', {
    strings: ['Web Developer', 'Fintech Enthusiast', 'Future Manager', 'Coder'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
