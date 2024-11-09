



// // 
// // Select the menu icon element by its ID
// const menuIcon = document.getElementById('menu-icon');

// // Select the container element inside the header
// const container = document.querySelector('header .container');

// // Toggle the 'active' class on the container and icon when the menu icon is clicked
// menuIcon.addEventListener('click', () => {
//     menuIcon.classList.toggle("bx-x"); // Toggles icon appearance (e.g., close icon)
//     container.classList.toggle("active"); // Toggles container menu visibility
// });

// // Remove active classes on scroll
// window.onscroll = () => {
//     menuIcon.classList.remove("bx-x");
//     container.classList.remove("active");
// };
// Initialize ScrollReveal with settings
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Reveal elements with ScrollReveal and appropriate selectors
sr.reveal('header .container', { delay: 200, origin: 'top' });
sr.reveal('.nature', { delay: 300, origin: 'top' });
sr.reveal('.Actualites .container, .Agenda .container, .pludunn-map .container', { delay: 200, origin: 'top' });

