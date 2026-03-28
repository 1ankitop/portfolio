document.addEventListener("DOMContentLoaded", () => {
    
    const hiddenElements = document.querySelectorAll('.hidden');

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            if (entry.isIntersecting) {
                
                entry.target.classList.add('show');
            } else {
                
            }
        });
    }, {
        threshold: 0.15 
    });

    
    hiddenElements.forEach((el) => observer.observe(el));
});
