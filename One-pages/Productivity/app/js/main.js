$(function () {
  $(".productivity__slider").slick({
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    dots: true,
    draggable: false,
    dotsClass: "slider-dots",
  });

  $(".planning__slider").slick({
    dotsClass: "slider-dots",
    dots: true,
    draggable: false,
    prevArrow:
      '<svg class="planning__arrow planning__arrow--arrow-left" width="27" height="19" stroke="#A8B4E5"><use xlink:href="images/sprites/arrows.svg#arrow-left"></use></svg>',
    nextArrow:
      '<svg class="planning__arrow planning__arrow--arrow-right" width="27" height="19" stroke="#A8B4E5"><use xlink:href="images/sprites/arrows.svg#arrow-right"></use></svg>',
  });

  let testimonialsSlider = {
    arrows: false,
    dots: true,
    dotsClass: "slider-dots",
    draggable: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    fade: false,
  };

  if (window.innerWidth < 1440) {
    testimonialsSlider.slidesToShow = 1;
    testimonialsSlider.fade = true;
  }
  $(".testimonials__slider").slick(testimonialsSlider);
  let slidersCount = $(".testimonials__slider .slider-dots li").length;
  $(
    '.testimonials__slider div[data-slick-index="' + `${slidersCount}` + '"]'
  ).css({
    opacity: "0",
    "user-select": "none",
  });
  $(".plan__btn-see-features").on({
    mouseenter: function () {
      $(".plan__btn-view").toggleClass("plan__btn--connect");
    },
    mouseleave: function () {
      $(".plan__btn-view").toggleClass("plan__btn--connect");
    },
  });

  $(".get-started__read-doc").on({
    mouseenter: function () {
      $(".get-started__btn-view-price").toggleClass(
        "get-started__btn--connect"
      );
    },
    mouseleave: function () {
      $(".get-started__btn-view-price").toggleClass(
        "get-started__btn--connect"
      );
    },
  });

  $(".burger-menu").on("click", function () {
    $(".header__navigation").toggleClass("header__navigation--active");
    $(".productivity__inner").toggleClass("productivity__inner--active");
  });

  if (window.innerWidth > 768) {
    let bg = $(".mouse-parallax-bg");
    for (let i = 0; i < bg.length; i++) {
      window.addEventListener("mousemove", function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        $(".mouse-parallax-bg").css(
          "transform",
          "translate(-" + x * 50 + "px, -" + y * 50 + "px)"
        );
        // bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      });
    }
  }
});
