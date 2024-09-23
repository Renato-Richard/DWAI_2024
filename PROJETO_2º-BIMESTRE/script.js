// window.addEventListener('scroll', () => {
//     const items = document.querySelectorAll('li');
//     items.forEach((item) => {
//       const itemPosition = item.getBoundingClientRect().top;
//       item.style.opacity = 0;
//       if (itemPosition < window.innerHeight - 300) {
//         item.style.opacity = 1;
//       }
//     });
// });
// window.addEventListener('scroll', () => {
//     const items = document.querySelectorAll('form');
//     items.forEach((item) => {
//       const itemPosition = item.getBoundingClientRect().top;
//       item.style.opacity = 0;
//       if (itemPosition < window.innerHeight - 300) {
//         item.style.opacity = 1;
//       }
//     });
// });
// window.addEventListener('scroll', () => {
//     const items = document.querySelectorAll('h3');
//     items.forEach((item) => {
//       const itemPosition = item.getBoundingClientRect().top;
//       item.style.opacity = 0;
//       if (itemPosition < window.innerHeight - 300) {
//         item.style.opacity = 0.5;
//       }
//     });
// });

function handleScroll() {
  const items = document.querySelectorAll('li, form, h3');
  if (window.innerWidth > 360) {
      items.forEach((item) => {
          const itemPosition = item.getBoundingClientRect().top;
          item.style.opacity = 0;
          if (itemPosition < window.innerHeight - 300) {
              if (item.tagName === 'H3') {
                  item.style.opacity = 0.5;
              } else {
                  item.style.opacity = 1;
              }
          }
      });
  } else {
      items.forEach((item) => {
          item.style.opacity = 1;
      });
  }
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();