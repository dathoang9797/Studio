const toggleButtonScroll = function () {
  $(window).scroll(function () {
    $(".movetop").toggleClass("active ", this.scrollY > 0);
  });
};

export default toggleButtonScroll;
