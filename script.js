document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.padding = '15px 0';
        }
    });
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigating to: ${link.getAttribute('href')}`);
        });
    });
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Registering...';
            submitBtn.style.backgroundColor = '#2ecc71'; 
            
            setTimeout(() => {
                alert(`Thank you, ${name}! Your interest in IDR has been registered.`);
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = ''; 
                contactForm.reset();
            }, 1000);
        });
    }
});