        // Initialize Lucide icons
        lucide.createIcons();
        // Carousel functionality
        let currentSlide = 0;
        const totalSlides = 3;
        const carousel = document.getElementById('carousel');
        const dots = document.querySelectorAll('#dots button');
        const counter = document.getElementById('counter');
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
                        
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.className = 'w-3 h-3 rounded-full bg-[#C0C0C0] scale-125 shadow-lg shadow-[#C0C0C0]/50 transition-all duration-500 hover:scale-150';
                } else {
                    dot.className = 'w-3 h-3 rounded-full bg-[#A0A0A0] hover:bg-[#C0C0C0]/50 transition-all duration-500 hover:scale-150';
                }
            });
                        
            // Update counter
            counter.textContent = `${currentSlide + 1} de ${totalSlides}`;
        }
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        // Event listeners
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        // Auto-advance carousel
        setInterval(nextSlide, 5000);
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
