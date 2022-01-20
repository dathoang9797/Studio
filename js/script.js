$(document).ready(function () {
  const changeTheme = () => {
    let showOrHide = true;
    const sun = $('.gg-sun');
    const moon = $('.gg-moon');
    $('.mode-container').click(function () {
      if (showOrHide) {
        sun.removeClass('d-none');
        sun.addClass('d-block');
        moon.removeClass('d-block');
        moon.addClass('d-none');
        $('html').attr('data-theme', 'dark');
      } else {
        sun.addClass('d-none');
        sun.removeClass('d-block');
        moon.removeClass('d-none');
        moon.addClass('d-block');
        $('html').attr('data-theme', 'light');
      }
      showOrHide = !showOrHide;
    });
  };

  const fixMenuHeader = () => {
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      if (scroll >= 80) {
        $('#header__menu').addClass('header__menu__fixed--top ');
      } else {
        $('#header__menu').removeClass('header__menu__fixed--top ');
      }
    });
  };

  const toggleButtonScroll = function () {
    $(window).scroll(function () {
      $('.movetop').toggleClass('active ', this.scrollY > 0);
    });
  };

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
        nav: false,
      },
      667: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
  $('.count-number').countUp();
  changeTheme();
  toggleButtonScroll();
  fixMenuHeader();

  const iconClose = $('.services__feature__icon-close');
  const iconBurrger = $('.services__feature__icon-expand');
  const buttonToggle = $('.navbar-toggler-services__feature__icon');
  buttonToggle.click(function () {
    const getAttributeExpanded = $('.navbar-toggler').attr('aria-expanded');
    if (getAttributeExpanded === 'true') {
      iconClose.css('display', 'none');
      iconBurrger.css('display', 'inline-block');
    } else {
      iconBurrger.css('display', 'none');
      iconClose.css('display', 'inline-block');
    }
  });
});
