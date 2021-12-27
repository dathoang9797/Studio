const changeTheme = () => {
  let showOrHide = true;
  const sun = $(".gg-sun");
  const moon = $(".gg-moon");
  console.log(moon);
  $(".mode-container").click(function () {
    if (showOrHide) {
      sun.removeClass("d-none");
      sun.addClass("d-block");
      moon.removeClass("d-block");
      moon.addClass("d-none");
      $("html").attr("data-theme", "dark");
    } else {
      sun.addClass("d-none");
      sun.removeClass("d-block");
      moon.removeClass("d-none");
      moon.addClass("d-block");
      $("html").attr("data-theme", "light");
    }
    showOrHide = !showOrHide;
  });
};
export default changeTheme;
