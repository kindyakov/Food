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
