$(".js-header").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"><img src="images/ico/left.svg" alt = "" ></button>',
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><img src="images/ico/right.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 879,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
$("#show-menu").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-more");
  $("body").addClass("show-menu");

  $("#show-more").hide();
  $("#show-menu").hide();
  $("#hide-menu").show();
  $("#logo").hide();
});

$("#hide-menu").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-menu");
  $("body").removeClass("show-more");

  $("#show-more").show();
  $("#show-menu").show();
  $("#hide-menu").hide();
  $("#logo").show();
});

$("#show-more").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-menu");
  $("body").addClass("show-more");

  $("#show-menu").hide();
  $("#show-more").hide();
  $("#hide-more").show();
  $("#logo").hide();
});

$("#hide-more").click(function (e) {
  e.preventDefault();
  $("body").removeClass("show-menu");
  $("body").removeClass("show-more");

  $("#show-menu").show();
  $("#show-more").show();
  $("#hide-more").hide();
  $("#logo").show();
});
