const slider = document.querySelector('.education');
let isDown = false;
let startX = 0;
let scrollStart = 0;

// ---- Mouse Events ----
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active'); // optional for styling
  startX = e.pageX;
  scrollStart = slider.scrollLeft;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const move = e.pageX - startX;
  slider.scrollLeft = scrollStart - move;
});

slider.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
  isDown = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const move = e.touches[0].pageX - startX;
  slider.scrollLeft = scrollStart - move;
});

slider.style.cursor = 'grab';
