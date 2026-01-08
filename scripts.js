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

// Prompt input handler (only on main page)
document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.querySelector('.prompt-input');
    if (promptInput) {
        promptInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                alert('AI interface will be implemented in a separate subdomain. Your prompt: ' + this.value);
                this.value = '';
            }
        });
    }

    // Load footer
    loadFooter();

    // Footer link hover effects
    setTimeout(() => {
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                footerLinks.forEach(l => {
                    if (l !== this) {
                        l.style.opacity = '0.5';
                    } else {
                        l.classList.add('active');
                    }
                });
            });

            link.addEventListener('mouseleave', function() {
                footerLinks.forEach(l => {
                    l.style.opacity = '1';
                    l.classList.remove('active');
                });
            });
        });
    }, 100);
});

// Load Footer Function
function loadFooter() {
    const footerHTML = `
        <footer class="footer-section">
            <div class="footer-container">
                <div class="footer-left">
                    <div class="footer-logo-section">
                        <div class="footer-logo-text">BufaloAI</div>
                        <p class="footer-copyright">By Bufalo AI Laboratories<br>© BufaloAI 2026</p>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/bufaloaicommunity" target="_blank" class="social-icon" title="GitHub">
                            <img src="logos/icons8-github-50.png" alt="GitHub">
                        </a>
                        <a href="#" class="social-icon" title="X">
                            <img src="logos/icons8-x-100.png" alt="X">
                        </a>
                        <a href="#" class="social-icon" title="Instagram">
                            <img src="logos/icons8-instagram-100.png" alt="Instagram">
                        </a>
                        <a href="#" class="social-icon" title="LinkedIn">
                            <img src="logos/icons8-linkedin-100.png" alt="LinkedIn">
                        </a>
                    </div>
                </div>

                <div class="footer-right">
                    <div class="footer-column">
                        <h3>Main</h3>
                        <ul>
                            <li><a href="/" class="footer-link">Home</a></li>
                            <li><a href="/about" class="footer-link">About Us</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/news" class="footer-link">News & Research</a></li>
                            <li><a href="/team" class="footer-link">Our Team</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="/security" class="footer-link">Security</a></li>
                            <li><a href="/apply" class="footer-link">Apply Now</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}