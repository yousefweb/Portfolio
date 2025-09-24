document.addEventListener("DOMContentLoaded", () => {
  const eduItems = document.querySelectorAll("#education .edu-item");

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        eduItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
          } else {
            item.style.opacity = 0;
            item.style.transform = "translateY(50px)";
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  });
});
