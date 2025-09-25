// const slider = document.querySelector('.education');
// let isDown = false;
// let startX = 0;
// let scrollStart = 0;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   startX = e.pageX;
//   scrollStart = slider.scrollLeft;
// });

// ['mouseup', 'mouseleave'].forEach(event => {
//   slider.addEventListener(event, () => isDown = false);
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   let move = e.pageX - startX;
//   slider.scrollLeft = scrollStart - move;
// });
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.education');
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  slider.addEventListener('mousedown', startDrag);
  ['mouseup', 'mouseleave'].forEach(event => slider.addEventListener(event, stopDrag));
  slider.addEventListener('mousemove', drag);

  slider.addEventListener('touchstart', startDragTouch, {passive: false});
  slider.addEventListener('touchend', stopDrag);
  slider.addEventListener('touchmove', dragTouch, {passive: false});

  function startDrag(e) {
    isDown = true;
    startX = e.pageX;
    scrollStart = slider.scrollLeft;
  }
  function startDragTouch(e) {
    isDown = true;
    startX = e.touches[0].clientX;
    scrollStart = slider.scrollLeft;
  }
  function stopDrag() {
    isDown = false;
  }
  function drag(e) {
    if (!isDown) return;
    e.preventDefault();
    const move = e.pageX - startX;
    slider.scrollLeft = scrollStart - move;
  }
  function dragTouch(e) {
    if (!isDown) return;
    e.preventDefault();
    const move = e.touches[0].clientX - startX;
    slider.scrollLeft = scrollStart - move;
  }
});
