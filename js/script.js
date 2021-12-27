import changeTheme from "./changeTheme.js";
import popupButtonScroll from "./popupButtonScroll.js";
import fixMenu from "./fixMenu.js";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
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
  $(".count-number").countUp();
  changeTheme();
  popupButtonScroll();
  fixMenu();
});
