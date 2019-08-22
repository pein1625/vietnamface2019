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

//=require _common.js