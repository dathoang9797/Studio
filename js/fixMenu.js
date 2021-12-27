const fixMenuHeader = () => {
  $(window).on("scroll", function () {
    const scroll = $(window).scrollTop();
    console.log(scroll)
    if (scroll >= 80) {
      $("#header__menu").addClass("header__menu__fixed--top ");
    } else {
      $("#header__menu").removeClass("header__menu__fixed--top ");
    }
  });
};
export default fixMenuHeader;
