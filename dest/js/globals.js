// navbar mobile toggle
$(function () {
  var $body = $('html, body');

  $('.js-navbar-open').on('click', function () {
    $('.js-navbar').addClass('is-show');
    $body.addClass('overflow-hidden');
  });

  $('.js-navbar-close').on('click', function () {
    $('.js-navbar').removeClass('is-show');
    $body.removeClass('overflow-hidden');
  });
});

// menu toggle
$(function () {
  $('.menu-toggle').on('click', function () {
    $(this).toggleClass('active').siblings('.menu-sub').slideToggle();
  });
});

// banner-slider
$(function () {
  addSwiper('.banner-slider', {
    pagination: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 800,
    loop: true
  });
});

// testimonial-slider
$(function () {
  addSwiper('.testimonial-slider', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    speed: 800,
    autoHeight: true
  });
});

// logo slider
$(function () {
  addSwiper('.logo-slider', {
    slidesPerView: 5,
    allowTouchMove: false,
    breakpoints: {
      1199: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      }
    }
  });
});

// swiper template
function addSwiper(selector, options = {}) {
  return Array.from(document.querySelectorAll(selector), function (item) {
    var $sliderContainer = $(item),
        $sliderEl = $sliderContainer.find('.swiper-container');

    if (options.navigation) {
      $sliderContainer.addClass('has-nav');
      options.navigation = {
        prevEl: $sliderContainer.find(selector + '__prev'),
        nextEl: $sliderContainer.find(selector + '__next')
      };
    }

    if (options.pagination) {
      $sliderContainer.addClass('has-pagination');
      options.pagination = {
        el: $sliderContainer.find(selector + '__pagination'),
        clickable: true
      };
    }

    return new Swiper($sliderEl, options);
  });
}

// register scroll to next form
$(function () {
  $('.js-scroll-to-next-form').on('click', function () {
    var offset = $('.js-next-form').offset().top;

    $('html, body').animate({
      scrollTop: offset
    }, 1000);

    $('.js-next-form-first-input').focus();
  });
});

$(function () {
  if (window.location.href.indexOf('#partner') != -1 && $('#partner').length) {
    $('html, body').animate({
      scrollTop: $('#partner').offset().top - $('.header__wrapper').outerHeight()
    }, 300);
  }
});

// menu scroll to section
$(function () {
  $('.js-menu-scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this).data('target');
    var headerHeight = $('.header__wrapper').outerHeight();

    if (!$(target).length) {
      window.location.href = $(this).attr('href');
    }

    $('.js-navbar').removeClass('is-show');
    $('body').removeClass('overflow-hidden');

    $('html, body').animate({
      scrollTop: $(target).offset().top - headerHeight
    }, 1000);
  });
});