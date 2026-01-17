/* SOC PORTFOLIO SCRIPT 
    - Console Easter Egg
    - Active Link Highlighting (Edge Case Fixed)
*/

// 1. Console Easter Egg
console.log(
    "%c  SYSTEM SECURE  ", 
    "background: #00ff41; color: #000; font-size: 14px; font-weight: bold; padding: 4px; border-radius: 4px;"
);
console.log(
    "%c  No active threats detected. Portfolio integrity verified.", 
    "color: #888; font-family: monospace; font-size: 12px;"
);

// 2. Active Link Highlighter
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25 // Trigger when 25% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach((link) => link.classList.remove("active"));
                
                // Add active class to corresponding link
                // Uses the ID of the section to find the link with matching href
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});