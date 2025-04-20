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

// Menu Page Script
document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menu-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Sample menu data (replace with your actual data, perhaps fetched from an API)
  const menuItemsData = [
    {
      id: 1,
      name: "Classic Burger",
      description: "Juicy beef patty, lettuce, tomato, onion, special sauce.",
      price: 7.99,
      category: "burgers",
      image: "assets/Menu-images/food-1.jpg",
    },
    {
      id: 2,
      name: "Spicy Chicken Burger",
      description: "Crispy chicken fillet, spicy mayo, pickles, coleslaw.",
      price: 8.49,
      category: "burgers",
      image: "assets/Menu-images/food-2.jpg",
    },
    {
      id: 3,
      name: "Fries",
      description: "Golden and crispy french fries, seasoned to perfection.",
      price: 2.99,
      category: "sides",
      image: "assets/Menu-images/food-3.jpg",
    },
    {
      id: 4,
      name: "Onion Rings",
      description: "Thick-cut onion rings, battered and fried until golden.",
      price: 3.49,
      category: "sides",
      image: "assets/Menu-images/food-4.jpg",
    },
    {
      id: 5,
      name: "Cola",
      description: "Refreshing carbonated cola beverage.",
      price: 1.99,
      category: "drinks",
      image: "assets/Menu-images/food-5.jpg",
    },
    {
      id: 6,
      name: "Lemonade",
      description: "Freshly squeezed lemonade, sweet and tangy.",
      price: 2.49,
      category: "drinks",
      image: "assets/Menu-images/food-6.jpg",
    },
    {
      id: 7,
      name: "Chocolate Brownie",
      description: "Rich and fudgy chocolate brownie, served warm.",
      price: 4.99,
      category: "desserts",
      image: "assets/Menu-images/food-7.jpg",
    },
    {
      id: 8,
      name: "Ice Cream Sundae",
      description:
        "Vanilla ice cream with chocolate sauce, whipped cream, and a cherry.",
      price: 5.49,
      category: "desserts",
      image: "assets/Menu-images/food-8.jpg",
    },
    {
      id: 9,
      name: "Veggie Burger",
      description: "Plant-based patty, avocado, sprouts, tomato, vegan mayo.",
      price: 8.99,
      category: "burgers",
      image: "assets/Menu-images/food-9.jpg",
    },
    {
      id: 10,
      name: "Sweet Potato Fries",
      description: "Crispy sweet potato fries with a hint of sea salt.",
      price: 3.99,
      category: "sides",
      image: "assets/Menu-images/food-10.jpg",
    },
  ];

  function displayMenuItems(items) {
    menuGrid.innerHTML = "";
    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      menuItem.innerHTML = `
                <div class="item-image-wrapper">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <p class="item-price">$${item.price.toFixed(2)}</p>
                    <button class="add-to-order-btn" data-item-id="${
                      item.id
                    }">Add to Order</button>
                </div>
            `;
      menuGrid.appendChild(menuItem);
    });

    const addToOrderButtons = document.querySelectorAll(".add-to-order-btn");
    addToOrderButtons.forEach((button) => {
      button.addEventListener("click", handleAddToOrder);
    });
  }

  function filterMenuItems(category) {
    if (category === "all") {
      displayMenuItems(menuItemsData);
    } else {
      const filteredItems = menuItemsData.filter(
        (item) => item.category === category
      );
      displayMenuItems(filteredItems);
    }
  }

  displayMenuItems(menuItemsData);

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.category;
      filterMenuItems(category);

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  function handleAddToOrder(event) {
    const itemId = event.target.dataset.itemId;
    console.log(`Item ${itemId} added to order (simulated).`);
    alert(
      `"${
        menuItemsData.find((item) => item.id === parseInt(itemId)).name
      }" added to your order (simulation).`
    );
  }
});
