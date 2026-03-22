document.addEventListener("DOMContentLoaded", () => {
const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const toggleBtn = item.querySelector(".toggle-btn");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("expanded");

      faqItems.forEach((el) => el.classList.remove("expanded"));
      if (!isActive) item.classList.add("expanded");
      toggleBtn.textContent = isActive ? "v" : "^";
    });
  });


  const tabButtons = document.querySelectorAll(".process-nav .nav-item");
  tabButtons.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabButtons.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
        t.setAttribute("tabindex", "-1");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", "0");

    });
  });

  tabButtons.forEach((tab) => {
    tab.addEventListener("keydown", (e) => {
      const currentIndex = Array.from(tabButtons).indexOf(tab);
      let nextIndex = currentIndex;

      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % tabButtons.length;
      } else if (e.key === "ArrowLeft") {
        nextIndex = currentIndex === 0 ? tabButtons.length - 1 : currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        tabButtons[nextIndex].focus();
      }
    });
  });


  const sliderPrev = document.querySelector(".applications-section .prev");
  const sliderNext = document.querySelector(".applications-section .next");

  if (sliderPrev && sliderNext) {
    const appCards = document.querySelectorAll(".applications-grid .app-card");

    let currentIndex = 0;

    const showCard = (index) => {
      appCards.forEach((card, i) => {
        card.style.display = i === index ? "block" : "none";
      });
    };

    sliderPrev.addEventListener("click", () => {
      currentIndex = currentIndex <= 0 ? appCards.length - 1 : currentIndex - 1;
      showCard(currentIndex);
    });

    sliderNext.addEventListener("click", () => {
      currentIndex = currentIndex >= appCards.length - 1 ? 0 : currentIndex + 1;
      showCard(currentIndex);
    });

    if (appCards.length > 0) {
      appCards.forEach((card, i) => {
        card.style.display = i === 0 ? "block" : "none";
      });
    }
  }


  const processSlider = document.querySelector(".process-section .image-slider");
  if (processSlider) {
    const img = processSlider.querySelector("img");
    const prev = processSlider.querySelector(".prev");
    const next = processSlider.querySelector(".next");

          const images = [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400?text=Step+1",
      "https://via.placeholder.com/600x400?text=Step+2",
    ];

    let imgIndex = 0;

    const updateImage = () => {
      img.src = images[imgIndex];
    };

    if (prev) {
      prev.addEventListener("click", () => {
        imgIndex = imgIndex <= 0 ? images.length - 1 : imgIndex - 1;
        updateImage();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        imgIndex = imgIndex >= images.length - 1 ? 0 : imgIndex + 1;
        updateImage();
      });
    }
  }


  const catalogueForm = document.querySelector(".catalogue-form");
  if (catalogueForm) {
    catalogueForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = catalogueForm.querySelector("input[type=email]");
      if (emailInput && emailInput.value.trim()) {
        alert(`Catalogue will be sent to: ${emailInput.value}`);
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }


  const quoteForm = document.querySelector(".quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = quoteForm.querySelector("input[placeholder='Full Name']");
      const company = quoteForm.querySelector("input[placeholder='Company Name']");
      const email = quoteForm.querySelector("input[placeholder='Email Address']");
      const phone = quoteForm.querySelector("input[placeholder='Phone Number']");

      if (
        name.value.trim() &&
        company.value.trim() &&
        email.value.trim() &&
        phone.value.trim()
      ) {
        alert("Quote request submitted successfully!");
      } else {
        alert("Please fill all fields.");
      }
    });
  }


  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const contactSection = document.getElementById("testimonials"); // or any contact section
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }


  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
