export const addDotBtnsAndClickHandlers = (emblaApi) => {
  const dotButtons = document.querySelectorAll("[data-embla-dot-button]");

  dotButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const activeDotButton = e.target.dataset.emblaDotButton;
      emblaApi.scrollTo(Number(activeDotButton));
    });
  });

  const toggleDotBtnsActive = () => {
    const previousActive = emblaApi.previousScrollSnap();
    const currentActive = emblaApi.selectedScrollSnap();

    const previousActiveButton = document.querySelector(
      `[data-embla-dot-button="${previousActive}"]`
    );

    const currentActiveButton = document.querySelector(
      `[data-embla-dot-button="${currentActive}"]`
    );

    previousActiveButton.classList.remove("active");
    currentActiveButton.classList.add("active");
  };

  emblaApi
    .on("init", toggleDotBtnsActive)
    .on("reInit", toggleDotBtnsActive)
    .on("select", toggleDotBtnsActive);
};
