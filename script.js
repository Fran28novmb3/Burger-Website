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

// Specials Page Script
document.addEventListener("DOMContentLoaded", () => {
  const specialsGrid = document.getElementById("specials-grid");

  // Sample specials data (replace with your actual daily specials)
  const todaySpecialsData = [
    {
      id: 101,
      name: "Double Trouble Burger",
      description:
        "Two juicy beef patties, double cheese, crispy bacon, and our signature sauce.",
      price: 10.99,
      image: "assets/Specials-images/food-1.jpg",
      likes: 15,
      endTime: "2025-04-12T20:00:00",
    },
    {
      id: 102,
      name: "Garlic Parmesan Fries",
      description:
        "Our classic fries tossed in garlic butter and grated Parmesan cheese.",
      price: 4.99,
      image: "assets/Specials-images/food-2.jpg",
      likes: 22,
      endTime: null,
    },
    {
      id: 103,
      name: "Mango Tango Shake",
      description: "A refreshing blend of mango, yogurt, and a hint of lime.",
      price: 5.99,
      image: "assets/Specials-images/food-3.jpg",
      likes: 8,
      endTime: "2025-04-13T12:00:00",
    },
    {
      id: 104,
      name: "Spicy BBQ Wings (6 pcs)",
      description:
        "Crispy chicken wings coated in our homemade spicy BBQ sauce.",
      price: 7.49,
      image: "assets/Specials-images/food-4.jpg",
      likes: 18,
      endTime: null,
    },
  ];

  function displaySpecials(specials) {
    specialsGrid.innerHTML = "";
    specials.forEach((special) => {
      const specialCard = document.createElement("div");
      specialCard.classList.add("special-card");
      specialCard.innerHTML = `
                <div class="special-image-wrapper">
                    <img src="${special.image}" alt="${special.name}">
                </div>
                <div class="special-details">
                    <span class="limited-time">Limited Time</span>
                    <h3 class="special-name">${special.name}</h3>
                    <p class="special-description">${special.description}</p>
                    <div class="special-price-like">
                        <span class="special-price">$${special.price.toFixed(
                          2
                        )}</span>
                        <button class="like-button" data-special-id="${
                          special.id
                        }">
                            <i class="ri-heart-line"></i> <span>${
                              special.likes
                            }</span>
                        </button>
                    </div>
                    ${
                      special.endTime
                        ? `<p class="countdown-timer" data-end-time="${special.endTime}" id="countdown-${special.id}"></p>`
                        : ""
                    }
                </div>
            `;
      specialsGrid.appendChild(specialCard);
    });

    addLikeButtonListeners();
    startTimers();
  }

  function addLikeButtonListeners() {
    const likeButtons = document.querySelectorAll(".like-button");
    likeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const specialId = parseInt(this.dataset.specialId);
        const special = todaySpecialsData.find((s) => s.id === specialId);
        if (special) {
          special.likes++;
          this.querySelector("span").textContent = special.likes;
          this.classList.add("liked");
        }
      });
    });
  }

  function startTimers() {
    const timers = document.querySelectorAll(".countdown-timer");
    timers.forEach((timer) => {
      const endTime = new Date(timer.dataset.endTime).getTime();
      const specialId = timer.id.split("-")[1];

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
          clearInterval(interval);
          timer.textContent = "Offer Expired!";
          const likeButton = document.querySelector(
            `.like-button[data-special-id="${specialId}"]`
          );
          if (likeButton) {
            likeButton.disabled = true;
            likeButton.classList.add("disabled");
          }
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.textContent = `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }, 1000);
    });
  }
  displaySpecials(todaySpecialsData);
});

// Events Page Script
document.addEventListener("DOMContentLoaded", () => {
  const eventsGrid = document.getElementById("events-grid");
  const filterButtons = document.querySelectorAll(".events-filter .filter-btn");

  // Sample events data (replace with your actual event data)
  const allEventsData = [
    {
      id: 201,
      name: "Live Acoustic Night",
      date: "April 19, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Main Dining Area",
      description:
        "Enjoy a relaxing evening with live acoustic music while you dine.",
      image: "assets/Events-images/food-2.jpg",
      interested: 15,
      status: "upcoming",
    },
    {
      id: 202,
      name: "Burger Workshop",
      date: "April 26, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Back Kitchen Area",
      description:
        "Learn the secrets to crafting the perfect gourmet burger with our chef.",
      image: "assets/Events-images/food-1.jpg",
      interested: 28,
      status: "upcoming",
    },
    {
      id: 203,
      name: "Customer Appreciation Day",
      date: "April 05, 2025",
      time: "All Day",
      location: "All Areas",
      description:
        "Special discounts and giveaways to thank our loyal customers.",
      image: "customer-appreciation-optimized.jpg",
      interested: 45,
      status: "past",
    },
    {
      id: 204,
      name: "Halloween Burger Bash",
      date: "October 31, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Decorated Dining Area",
      description: "A spooky night with themed burgers, costumes, and fun!",
      image: "halloween-burger-optimized.jpg",
      interested: 32,
      status: "past",
    },
  ];

  let currentEvents = allEventsData.filter(
    (event) => event.status === "upcoming"
  ); // Initial display

  function displayEvents(events) {
    eventsGrid.innerHTML = "";
    if (events.length === 0) {
      eventsGrid.innerHTML = "<p>No events to display.</p>";
      return;
    }
    events.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");
      eventCard.innerHTML = `
                <div class="event-image-wrapper">
                    <img src="${event.image}" alt="${event.name}">
                </div>
                <div class="event-details">
                    <h3 class="event-name">${event.name}</h3>
                    <p class="event-date-time"><i class="ri-calendar-line"></i> ${event.date} <i class="ri-time-line"></i> ${event.time}</p>
                    <p class="event-location"><i class="ri-map-pin-line"></i> ${event.location}</p>
                    <p class="event-description">${event.description}</p>
                    <div class="event-actions">
                        <button class="interest-button" data-event-id="${event.id}">
                            <i class="ri-heart-line"></i> Interested
                        </button>
                        <span class="interested-count">${event.interested} people</span>
                        <a href="#" class="view-details-link">View Details</a>
                    </div>
                </div>
            `;
      eventsGrid.appendChild(eventCard);
    });
    addInterestButtonListeners();
  }

  function filterEvents(status) {
    currentEvents = allEventsData.filter((event) => event.status === status);
    displayEvents(currentEvents);
  }

  function addInterestButtonListeners() {
    const interestButtons = document.querySelectorAll(".interest-button");
    interestButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const eventId = parseInt(this.dataset.eventId);
        const event = allEventsData.find((e) => e.id === eventId);
        if (event) {
          event.interested++;
          const interestedCountSpan = this.nextElementSibling;
          if (
            interestedCountSpan &&
            interestedCountSpan.classList.contains("interested-count")
          ) {
            interestedCountSpan.textContent = `${event.interested} people`;
          }
          this.classList.add("interested");
          this.disabled = true;
          this.innerHTML = '<i class="ri-heart-fill"></i> Interested';
        }
      });
    });
  }

  displayEvents(currentEvents);

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter;
      filterEvents(filter);

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Contact Page Style
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const submissionMessage = document.getElementById("submissionMessage");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter your message.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    return isValid;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submissionMessage.textContent = "";

    if (validateForm()) {
      console.log("Form submitted:", {
        name: nameInput.value,
        email: emailInput.value,
        subject: document.getElementById("subject").value,
        message: messageInput.value,
      });

      submissionMessage.textContent =
        "Your message has been sent successfully!";
      submissionMessage.className = "submission-message success";
      contactForm.reset();
    } else {
      submissionMessage.textContent = "Please correct the errors in the form.";
      submissionMessage.className = "submission-message error";
    }
  });

  nameInput.addEventListener("input", () => {
    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
    } else {
      nameError.textContent = "";
    }
  });

  emailInput.addEventListener("input", () => {
    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email address.";
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }
  });

  messageInput.addEventListener("input", () => {
    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter your message.";
    } else {
      messageError.textContent = "";
    }
  });
});
