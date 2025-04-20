// Mobile Navigation
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".nav-links");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 700,
  delay: 200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false,
};

// Hero Section
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

// Featured Creations Section
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

// Build Your Dream Burger Section
document.addEventListener("DOMContentLoaded", () => {
  const ingredientInputs = document.querySelectorAll(
    '.build-options-grid input[type="radio"], .build-options-grid input[type="checkbox"]'
  );
  const previewArea = document.querySelector(".preview-area");
  const selectedIngredients = {};
  function updateBurgerPreview() {
    let previewText = "Your Dream Burger: ";
    const selectedBreads = document.querySelector(
      'input[name="bread"]:checked'
    );
    const selectedPatty = document.querySelector('input[name="patty"]:checked');
    const selectedCheeses = Array.from(
      document.querySelectorAll('input[name="cheese"]:checked')
    ).map((cb) => cb.value);
    const selectedToppings = Array.from(
      document.querySelectorAll('input[name="topping"]:checked')
    ).map((cb) => cb.value);
    const selectedSauce = document.querySelector('input[name="sauce"]:checked');

    selectedIngredients["bread"] = selectedBreads ? selectedBreads.value : null;
    selectedIngredients["patty"] = selectedPatty ? selectedPatty.value : null;
    selectedIngredients["cheese"] = selectedCheeses;
    selectedIngredients["toppings"] = selectedToppings;
    selectedIngredients["sauce"] = selectedSauce ? selectedSauce.value : null;

    if (selectedBreads) previewText += selectedBreads.value + " bun, ";
    if (selectedPatty) previewText += selectedPatty.value + " patty, ";
    if (selectedCheeses.length > 0)
      previewText += selectedCheeses.join(", ") + ", ";
    if (selectedToppings.length > 0)
      previewText += selectedToppings.join(", ") + ", ";
    if (selectedSauce) previewText += selectedSauce.value + " sauce";

    if (previewText === "Your Dream Burger: ") {
      previewArea.textContent = "Select your ingredients above!";
    } else {
      previewArea.textContent = previewText.replace(/,\s*$/, "");
    }
  }

  if (ingredientInputs && previewArea) {
    ingredientInputs.forEach((input) => {
      input.addEventListener("change", updateBurgerPreview);
    });
    updateBurgerPreview();
  }
});
ScrollReveal().reveal(".section-title[data-scroll-reveal='build-title']", {
  ...scrollRevealOption,
  origin: "top",
  delay: 200,
});
ScrollReveal().reveal(
  ".section-subtitle[data-scroll-reveal='build-subtitle']",
  { ...scrollRevealOption, origin: "top", delay: 300 }
);
ScrollReveal().reveal(".build-category:nth-child(1)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 400,
});
ScrollReveal().reveal(".build-category:nth-child(2)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});
ScrollReveal().reveal(".build-category:nth-child(3)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 600,
});
ScrollReveal().reveal(".build-category:nth-child(4)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 700,
});
ScrollReveal().reveal(".build-category:nth-child(5)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 800,
});
ScrollReveal().reveal(".build-preview", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

// Why Different Section
ScrollReveal().reveal(
  ".section-title[data-scroll-reveal='why-different-title']",
  { ...scrollRevealOption, origin: "top", delay: 200 }
);
ScrollReveal().reveal(
  ".section-subtitle[data-scroll-reveal='why-different-subtitle']",
  { ...scrollRevealOption, origin: "top", delay: 300 }
);
ScrollReveal().reveal(".why-different-card:nth-child(1)", {
  ...scrollRevealOption,
  origin: "left",
  delay: 400,
});
ScrollReveal().reveal(".why-different-card:nth-child(2)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});
ScrollReveal().reveal(".why-different-card:nth-child(3)", {
  ...scrollRevealOption,
  origin: "right",
  delay: 600,
});
ScrollReveal().reveal(".why-different-card:nth-child(4)", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 700,
});
ScrollReveal().reveal(".why-different-image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

// News & Offers Section
ScrollReveal().reveal(
  ".section-title[data-scroll-reveal='news-offers-title']",
  { ...scrollRevealOption, origin: "top", delay: 200 }
);
ScrollReveal().reveal(".news-column", {
  ...scrollRevealOption,
  origin: "left",
  delay: 400,
});
ScrollReveal().reveal(".offers-column", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

// About Us Section
ScrollReveal().reveal(".section-title[data-scroll-reveal='about-title']", {
  ...scrollRevealOption,
  origin: "top",
  delay: 200,
});
ScrollReveal().reveal(".about-image", {
  ...scrollRevealOption,
  origin: "left",
  delay: 400,
});
ScrollReveal().reveal(".about-content", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

// CTA Section
ScrollReveal().reveal(".cta-content", {
  ...scrollRevealOption,
  scale: 0.9,
  delay: 300,
});

// Footer
ScrollReveal().reveal(".footer-grid > div:nth-child(1)", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".footer-grid > div:nth-child(2)", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".footer-grid > div:nth-child(3)", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".footer-grid > div:nth-child(4)", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".footer-copyright", {
  ...scrollRevealOption,
  delay: 600,
});

// Build Your Dream Burger
const ingredientInputs = document.querySelectorAll(
  '.build-options input[type="radio"], .build-options input[type="checkbox"]'
);
const previewArea = document.querySelector(".preview-area");

if (ingredientInputs && previewArea) {
  ingredientInputs.forEach((input) => {
    input.addEventListener("change", updateBurgerPreview);
  });

  function updateBurgerPreview() {
    let previewText = "Your Dream Burger: ";
    const selectedBreads = document.querySelector(
      'input[name="bread"]:checked'
    );
    const selectedPatty = document.querySelector('input[name="patty"]:checked');
    const selectedCheeses = Array.from(
      document.querySelectorAll('input[name="cheese"]:checked')
    ).map((cb) => cb.value);
    const selectedToppings = Array.from(
      document.querySelectorAll('input[name="topping"]:checked')
    ).map((cb) => cb.value);
    const selectedSauce = document.querySelector('input[name="sauce"]:checked');

    if (selectedBreads) previewText += selectedBreads.value + " bun, ";
    if (selectedPatty) previewText += selectedPatty.value + " patty, ";
    if (selectedCheeses.length > 0)
      previewText += selectedCheeses.join(", ") + ", ";
    if (selectedToppings.length > 0)
      previewText += selectedToppings.join(", ") + ", ";
    if (selectedSauce) previewText += selectedSauce.value + " sauce";

    if (previewText === "Your Dream Burger: ") {
      previewArea.textContent = "Select your ingredients above!";
    } else {
      previewArea.textContent = previewText.replace(/,\s*$/, "");
    }
  }
}
