window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('li');
    items.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      item.style.opacity = 0;
      if (itemPosition < window.innerHeight - 300) {
        item.style.opacity = 1;
      }
    });
});
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('form');
    items.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      item.style.opacity = 0;
      if (itemPosition < window.innerHeight - 300) {
        item.style.opacity = 1;
      }
    });
});
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('h3');
    items.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      item.style.opacity = 0;
      if (itemPosition < window.innerHeight - 300) {
        item.style.opacity = 0.5;
      }
    });
});