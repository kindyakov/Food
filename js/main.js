// ?Бургер и навигация=================================================================================================
const headerBurger = document.querySelector('.header-burger');
const headerLink = document.querySelectorAll('.header-link');
const headerBody = document.querySelector('.header-body');
const footerLink = document.querySelectorAll('.footer-link');
const messagLink = document.querySelectorAll('.messag-link');
// ?Модальное окно=====================================================================================================
const introBtn = document.querySelector('.intro-btn');
const modalWindow = document.querySelector('.modal-window');
const modalWindowContent = document.querySelector('.modal-window__content');
const close = document.querySelector('.modal-window__close');
const body = document.querySelector('body');
const header = document.querySelector('.header');
// ?===================================================================================================================
headerBurger.addEventListener('click', function () {
  headerBody.classList.toggle('active');
  headerBurger.classList.toggle('active');
  body.classList.toggle('lock');
});
headerLink.forEach(function (item) {
  item.addEventListener('click', function () {
    let headerLinkItem = item;

    headerLink.forEach(function (event) {
      event.classList.remove('active');
    });
    headerLinkItem.classList.add('active');
    headerBody.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
  });
});
// ?Отмена стандартного поведения ссылки===============================================================================
footerLink.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
  });
});

messagLink.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
// ?Модальное окно=====================================================================================================

introBtn.addEventListener('click', function () {
  modalWindow.classList.add('open');
  disableScroll();
});

close.addEventListener('click', function () {
  modalWindow.classList.remove('open');
  enableScroll();
});

// if (modalWindow.classList.contains('open')) {
//   document.documentElement.addEventListener('click', function (event) {
//     console.log('click');

//     if (!event.target.closest('.modal-window__content')) {
//       console.log('click2');
//        modalWindow.classList.remove('open');
//        enableScroll();
//     }
//   });
// }

// отмена скролла
window.disableScroll = function () {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbscrollY = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  padding-right: ${widthScroll}px;
`;
  header.style.cssText = `
  padding-right: ${widthScroll}px;
  `;
};
// Доабовление скрола
window.enableScroll = function () {
  document.body.style.cssText = ``;
  header.style.cssText = ``;
  window.scroll({ top: document.body.dbscrollY });
};

// ?Фиксированая шака и плавная прокрутка==============================================================================
$(function () {
  let header = $('.header');
  let headerH = header.height();
  let scrollPos = $(window).scrollTop('-200px');

  $(window).on('scroll load resize', function () {
    introH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > headerH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
  header.addClass('fixed');
});
$(document).ready(function () {
  $('.header-link').click(function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top + 'px',
      },
      { duration: 1000, esing: 'swing' }
    );
  });
});
// ?===================================================================================================================
const card = document.querySelectorAll('.card');

card.forEach(function (item) {
  item.addEventListener('click', function () {
    card.forEach(function (event) {
      event.classList.remove('card-click');
    });

    item.classList.add('card-click');
    console.log(item);
  });
});
