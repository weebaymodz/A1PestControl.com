document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize EmailJS
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
            .then(() => {
                alert('Thank you for your message. We will get back to you soon!');
                contactForm.reset();
            }, (error) => {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS error:', error);
            });
    });

    // Simple animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Sticky navigation
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function() {
        stickyNavbar();
        scrollFunction();
    };

    // Back to top button
    const backToTopButton = document.getElementById("back-to-top");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener("click", function(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});
