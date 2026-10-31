// Scroll reveal animation

const revealElements = document.querySelectorAll(
  ".section-heading, .about-grid, .event-card, .team-card, .contact-box"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(element => {
  observer.observe(element);
});
// Animated statistics counter

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = Number(counter.dataset.target);
      const duration = 1500;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        counter.textContent = Math.floor(
          target * progress
        );

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(counter);
    }
  });
}, {
  threshold: 0.5
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});
