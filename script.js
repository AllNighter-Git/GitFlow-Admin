// Initialize AOS (Animate On Scroll)
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
            
            // Language Switcher
            const languageBtn = document.getElementById('languageBtn');
            const languageDropdown = document.getElementById('languageDropdown');
            
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
            });
            
            // Language selection
            const languageLinks = document.querySelectorAll('#languageDropdown a');
            languageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const selectedLang = this.getAttribute('data-lang');
                    languageBtn.innerHTML = `<i class="fas fa-globe mr-2"></i> ${this.textContent} <i class="fas fa-chevron-down ml-1 text-xs"></i>`;
                    languageDropdown.classList.remove('show');
                    
                    // In a real implementation, you would change the language here
                    console.log(`Language changed to: ${selectedLang}`);
                });
            });
            
            // Testimonial Slider
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.nav-dot');
            let currentSlide = 0;
            
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Auto-advance slides every 5 seconds
            setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
            
            // Form submission
            const demoForm = document.getElementById('demoForm');
            demoForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                
                // In a real implementation, you would send this data to a server
                console.log('Form submitted:', data);
                
                // Show success message
                alert('Thank you for your request! We will contact you soon.');
                this.reset();
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });