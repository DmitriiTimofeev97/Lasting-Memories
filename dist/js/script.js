//Скрипт прокрутки страницы к началу 

const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});