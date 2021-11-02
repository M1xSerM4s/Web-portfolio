$(function () {
  $(".header__btn").on("click", function () {
    $(".menu").toggleClass("active");
    $(".header__top").toggleClass("active");
  });
});
