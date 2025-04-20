// Mobile Navigation
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".nav-links");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Scroll Reveal Animations Configuration
const scrollRevealOption = {
  distance: "50px", // Adjust distance as needed
  origin: "bottom", // Default origin
  duration: 700, // Adjust duration as needed
  delay: 200, // Base delay
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false, // Keep animation on subsequent views if set to true
};

// Hero Section (Initial Load Animation)
ScrollReveal().reveal(".hero-image img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 300,
});
ScrollReveal().reveal(".hero-content", {
  ...scrollRevealOption,
  origin: "left",
  delay: 400,
});

// Featured Creations Section (Staggered reveal on scroll)
ScrollReveal().reveal(".section-title[data-scroll-reveal='featured-title']", {
  ...scrollRevealOption,
  origin: "top",
  delay: 200,
});
ScrollReveal().reveal(
  ".section-subtitle[data-scroll-reveal='featured-subtitle']",
  { ...scrollRevealOption, origin: "top", delay: 300 }
);
ScrollReveal().reveal(".featured-card:nth-child(1)", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".featured-card:nth-child(2)", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".featured-card:nth-child(3)", {
  ...scrollRevealOption,
  delay: 600,
});
