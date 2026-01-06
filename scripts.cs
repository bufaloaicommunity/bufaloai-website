// Toggle Navigation
function toggleNav() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Close nav when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.getElementById('navbar');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (!navbar.contains(event.target) && !navToggle.contains(event.target)) {
        navbar.classList.remove('active');
    }
});