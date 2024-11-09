class App {
  constructor() {
    this.initializeComponents();
    this.updateCopyrightYear();
  }

  initializeComponents() {
    this.navbarManager = new NavbarManager();
    this.themeManager = new ThemeManager();
    this.mobileMenu = new MobileMenu();
    this.languageModal = new LanguageModal();
    this.projectsManager = new ProjectsManager();
    this.scrollReveal = new ScrollReveal();
  }

  updateCopyrightYear() {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Initialize BlogManager if filter buttons exist
    if (document.querySelector(".filter-btn")) {
      this.blogManager = new BlogManager();
    }
  }
}

class ThemeManager {
  constructor() {
    this.darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.themeToggle = document.getElementById("themeToggle");
    this.darkIcon = document.getElementById("darkIcon");
    this.lightIcon = document.getElementById("lightIcon");
    this.init();
  }

  init() {
    this.updateTheme(this.darkModeMediaQuery);
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.darkModeMediaQuery.addEventListener("change", (e) =>
      this.updateTheme(e)
    );
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
  }

  updateTheme(e) {
    if (e.matches) {
      document.documentElement.classList.add("dark");
      this.lightIcon.classList.remove("hidden");
      this.darkIcon.classList.add("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      this.lightIcon.classList.add("hidden");
      this.darkIcon.classList.remove("hidden");
    }
  }

  toggleTheme() {
    document.documentElement.classList.toggle("dark");
    this.darkIcon.classList.toggle("hidden");
    this.lightIcon.classList.toggle("hidden");
  }
}

class MobileMenu {
  constructor() {
    this.menuButton = document.getElementById("mobileMenuBtn");
    this.hamburgerLines = this.menuButton.querySelector(".hamburger-lines");
    this.menu = document.getElementById("mobileMenu");
    this.isOpen = false;
    this.init();
  }

  init() {
    this.menuButton.addEventListener("click", () => this.toggleMenu());
    document.addEventListener("click", (e) => {
      if (
        !this.menu.contains(e.target) &&
        !this.menuButton.contains(e.target) &&
        this.isOpen
      ) {
        this.toggleMenu();
      }
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;

    // Toggle hamburger animation
    this.hamburgerLines.classList.toggle("hamburger-active");

    // Toggle menu visibility with animation
    if (this.isOpen) {
      this.menu.style.display = "block";
      // Use RAF to ensure the transition works
      requestAnimationFrame(() => {
        this.menu.classList.add("active");
      });
    } else {
      this.menu.classList.remove("active");
      // Wait for transition before hiding
      setTimeout(() => {
        this.menu.style.display = "none";
      }, 300); // Match this with your transition duration
    }

    this.menuButton.setAttribute("aria-expanded", this.isOpen);
  }
}

class NavbarManager {
  constructor() {
    this.navbar = document.querySelector("nav");
    this.lastScroll = 0;
    this.init();
  }

  init() {
    // Initial check for scroll position
    this.handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const currentScroll = window.pageYOffset;

    // Add or remove sticky class based on scroll position
    if (currentScroll > 0) {
      this.navbar.classList.add("sticky", "shadow-effect");
    } else {
      this.navbar.classList.remove("sticky", "shadow-effect");
    }

    this.lastScroll = currentScroll;
  }
}

class LanguageModal {
  constructor() {
    this.modal = document.getElementById("langModal");
    this.desktopLangBtn = document.getElementById("langBtn");
    this.mobileLangBtn = document.getElementById("mobileLangBtn");
    this.closeBtn = this.modal.querySelector(".modal-close");
    this.modalContent = this.modal.querySelector(".relative"); // Get modal content
    this.isOpen = false;
    this.init();
  }

  init() {
    // Open modal buttons
    if (this.desktopLangBtn) {
      this.desktopLangBtn.addEventListener("click", () => this.openModal());
    }

    if (this.mobileLangBtn) {
      this.mobileLangBtn.addEventListener("click", () => this.openModal());
    }

    // Close button click
    this.closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.closeModal();
    });

    // Click outside to close
    this.modal.addEventListener("click", (e) => {
      // Check if click is outside modal content
      if (!this.modalContent.contains(e.target)) {
        this.closeModal();
      }
    });

    // Prevent clicks inside modal from bubbling
    this.modalContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Escape key to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeModal();
      }
    });
  }

  openModal() {
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      const menuBtn = document.getElementById("mobileMenuBtn");
      const hamburgerLines = menuBtn.querySelector(".hamburger-lines");
      hamburgerLines.classList.remove("hamburger-active");
      mobileMenu.classList.remove("active");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }

    this.isOpen = true;
    this.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Trigger animation
    requestAnimationFrame(() => {
      this.modal.classList.add("active");
      // Add focus trap
      this.trapFocus();
    });
  }

  closeModal() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.modal.classList.remove("active");

    setTimeout(() => {
      this.modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  }

  // Trap focus within modal for accessibility
  trapFocus() {
    const focusableElements = this.modalContent.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element
    firstFocusable?.focus();

    this.modalContent.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    });
  }
}

class ProjectsManager {
  constructor() {
    // DOM Elements
    this.filterBtns = document.querySelectorAll(".filter-btn");
    this.projectCards = document.querySelectorAll(".project-card");

    // State
    this.currentFilter = "all";

    this.init();
  }

  init() {
    // Add click event listeners to filter buttons
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        this.handleFilter(btn.dataset.filter)
      );
    });
  }

  handleFilter(filter) {
    // Update current filter
    this.currentFilter = filter;

    // Update active state of filter buttons
    this.filterBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    // Filter projects
    this.projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (this.currentFilter === "all" || category === this.currentFilter) {
        card.classList.remove("hidden");
        card.classList.add("animate-fade-in");
      } else {
        card.classList.add("hidden");
        card.classList.remove("animate-fade-in");
      }
    });
  }
}

class BlogManager {
  constructor() {
    this.filterBtns = document.querySelectorAll(".filter-btn");
    this.blogCards = document.querySelectorAll(".blog-card");
    this.currentFilter = "all";
    this.isAnimating = false;

    this.init();
  }

  init() {
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (this.isAnimating) return;

        this.filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        if (filter !== this.currentFilter) {
          this.handleFilter(filter);
        }
      });
    });
  }

  handleFilter(filter) {
    this.currentFilter = filter;
    this.isAnimating = true;

    this.blogCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      if (shouldShow) {
        card.style.opacity = "0";
        card.classList.remove("hidden");
        setTimeout(() => {
          card.style.transition = "opacity 0.3s ease";
          card.style.opacity = "1";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transition = "opacity 0.3s ease";
        card.addEventListener(
          "transitionend",
          () => {
            if (
              this.currentFilter !== "all" &&
              category !== this.currentFilter
            ) {
              card.classList.add("hidden");
            }
          },
          { once: true }
        );
      }
    });

    setTimeout(() => {
      this.isAnimating = false;
    }, 350);
  }
}

class ScrollReveal {
  constructor() {
    this.sections = document.querySelectorAll(".scroll-reveal-section");
    this.init();
  }

  init() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, options);

    this.sections.forEach((section) => {
      observer.observe(section);
    });
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
