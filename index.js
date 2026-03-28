document.addEventListener("DOMContentLoaded", () => {
    // Select all sections that have the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the CSS animation
                entry.target.classList.add('show');
            } else {
                // Optional: remove the class if you want the animation to repeat when scrolling back up
                // entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    // Observe each hidden element
    hiddenElements.forEach((el) => observer.observe(el));
});