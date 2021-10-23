$(document).ready(function () {
  $(".slider-item").slick({
    prevArrow:
      '<img src="images/arrow-left-big.svg"  class="slider-item__arrow slider-item__arrow--left" alt="back slide">',
    nextArrow:
      '<img src="images/arrow-right-big.svg"  class="slider-item__arrow slider-item__arrow--right" alt="next slide">',
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".tabs-panel__item").on("click", function (e) {
    e.preventDefault();

    $(".tabs-panel__item").removeClass("tabs-panel__item--active");
    $(this).addClass("tabs-panel__item--active");

    $(".tabs-panel__content").removeClass("tabs-panel__content--active");
    $($(this).attr("href")).addClass("tabs-panel__content--active");
  });

  $(".news__titles-item").on("click", function (e) {
    e.preventDefault();

    $(".news__titles-item").removeClass("news__titles-item--active");
    $(this).addClass("news__titles-item--active");

    $(".article__box").removeClass("article__box--active");
    $($(this).find("a.news__title-link").attr("href")).addClass(
      "article__box--active"
    );
  });

  $(".menu-adaptive__burger-btn").on("click", function () {
    $(".menu-adaptive__list").toggleClass("menu-adaptive__list--active");
    $(".menu-adaptive__salons-list").removeClass(
      "menu-adaptive__salons-list--active"
    );
  });

  $(".menu-adaptive__salons-hover-link").on("click", function () {
    $(".menu-adaptive__salons-list").toggleClass(
      "menu-adaptive__salons-list--active"
    );
  });
});
