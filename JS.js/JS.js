const slider = document.querySelector('.education');
let isDown = false;
let startX = 0;
let scrollStart = 0;

function getPageX(e) {
  // Support both mouse and touch
  return e.pageX || (e.touches && e.touches[0].pageX);
}

// Mouse Events
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = getPageX(e);
  scrollStart = slider.scrollLeft;
});

['mouseup', 'mouseleave'].forEach(event => {
  slider.addEventListener(event, () => isDown = false);
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const move = getPageX(e) - startX;
  slider.scrollLeft = scrollStart - move;
});

slider.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = getPageX(e);
  scrollStart = slider.scrollLeft;
}, { passive: true });

slider.addEventListener('touchend', () => {
  isDown = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const move = getPageX(e) - startX;
  slider.scrollLeft = scrollStart - move;
}, { passive: false });
