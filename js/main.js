const headerBurger = document.querySelector('.header-burger');
const headerLink = document.querySelectorAll('.header-link');
const headerBody = document.querySelector('.header-body');

headerBurger.addEventListener('click', function () {
  headerBody.classList.toggle('active');
  headerBurger.classList.toggle('active');
});

headerLink.forEach(function (item) {
  item.addEventListener('click', function () {
    headerBody.classList.remove('active');
    headerBurger.classList.remove('active');
  });
});
