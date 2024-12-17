// DOM Elements
const layoutContainer = document.getElementById('layout-container');
const leftPanel = document.getElementById('left-panel');
const splitter = document.getElementById('splitter');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');

// Hamburger Button Functionality
hamburgerBtn.addEventListener('click', () => {
  leftPanel.classList.remove('hidden');
  hamburgerBtn.classList.add('hidden');
});

// Close Button Functionality
closeBtn.addEventListener('click', () => {
  leftPanel.classList.add('hidden');
  hamburgerBtn.classList.remove('hidden');
});

// Splitter Functionality
let isDragging = false;

splitter.addEventListener('mousedown', () => {
  isDragging = true;
  document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const containerRect = layoutContainer.getBoundingClientRect();
  const newWidth = e.clientX - containerRect.left;

  if (newWidth > 250 && newWidth < 400) {
    leftPanel.style.width = `${newWidth}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});