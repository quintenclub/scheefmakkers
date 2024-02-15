document.querySelectorAll('a[href^="#"]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
