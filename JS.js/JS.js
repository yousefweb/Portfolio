const slider = document.querySelector('.education');
let isDown = false;
let startX = 0;
let scrollStart = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollStart = slider.scrollLeft;
});

['mouseup', 'mouseleave'].forEach(event => {
  slider.addEventListener(event, () => isDown = false);
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  let move = e.pageX - startX;
  slider.scrollLeft = scrollStart - move;
});
