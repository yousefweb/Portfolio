const slider = document.querySelector('.education');
let isDown = false;
let startX;
let scrollLeft;

function startDrag(e) {
  isDown = true;// Slider JS (Drag with mouse & touch)
const slider = document.querySelector('.education');
let isDown = false;
let startX;
let scrollLeft;

function startDrag(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
}

function stopDrag() {
  isDown = false;
  slider.classList.remove('active');
}

function moveDrag(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX;
  const walk = (x - startX) * 1; // سرعة السحب
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', moveDrag);
slider.addEventListener('mouseup', stopDrag);
slider.addEventListener('mouseleave', stopDrag);

slider.addEventListener('touchstart', startDrag, { passive: false });
slider.addEventListener('touchmove', moveDrag, { passive: false });
slider.addEventListener('touchend', stopDrag);

  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
}

function stopDrag() {
  isDown = false;
  slider.classList.remove('active');
}

function moveDrag(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX;
  const walk = (x - startX) * 1; // سرعة السحب
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', moveDrag);
slider.addEventListener('mouseup', stopDrag);
slider.addEventListener('mouseleave', stopDrag);

slider.addEventListener('touchstart', startDrag, { passive: false });
slider.addEventListener('touchmove', moveDrag, { passive: false });
slider.addEventListener('touchend', stopDrag);



