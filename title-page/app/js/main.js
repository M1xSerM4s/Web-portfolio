$(function () {
  $(".examples__content").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    nextArrow:
      '<img class="arrow arrow--right" src="images/icons/arrow-right.png" width="64" height="64" alt="arrow right icon">',
    prevArrow:
      '<img class="arrow arrow--left" src="images/icons/arrow-left.png" width="64" height="64" alt="arrow left icon">',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
