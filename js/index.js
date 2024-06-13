import { addPrevNextBtnsClickHandlers } from "./embla-carousel-arrow-buttons.js";
import { addDotBtnsAndClickHandlers } from "./embla-carousel-dot-buttons.js";

// Toggle Mobile Sidebar
const mobileSidebar = document.getElementById("mobile-sidebar");
const mobileSidebarTogglers = document.querySelectorAll(
  "[data-mobile-sidebar-toggler]"
);

mobileSidebarTogglers.forEach((item) =>
  item.addEventListener("click", () => mobileSidebar.classList.toggle("show"))
);

document
  .getElementById("mobile-sheet")
  .addEventListener("click", (e) => e.stopPropagation());

// Active Nav link
const handleHashChange = () => {
  const hash = window.location.hash.slice(1) || "home";
  const previousActiveLinks = document.querySelectorAll("[data-nav-link]");

  previousActiveLinks.forEach((item) => item.classList.remove("active"));

  const newActiveLink = document.querySelectorAll(`[data-nav-link=${hash}]`);
  newActiveLink.forEach((item) => item.classList.add("active"));

  if (mobileSidebar.classList.contains("show")) {
    mobileSidebar.classList.remove("show");
  }
};

window.addEventListener("DOMContentLoaded", handleHashChange);
window.addEventListener("hashchange", handleHashChange);

// Embla Carousel

const emblaNode = document.querySelector(".embla");
const options = { loop: true };
const plugins = [EmblaCarouselAutoplay({ stopOnInteraction: false })];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi);
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi);

emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
