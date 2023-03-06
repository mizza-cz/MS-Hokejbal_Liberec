$(".hp-tabs-section .tab").on("click", function (event) {
  var id = $(this).attr("data-id");
  $(".hp-tabs-section").find(".tab-content").removeClass("tab-active").hide();
  $(".hp-tabs-section .tabs").find(".tab").removeClass("active");
  $(this).addClass("active");
  $("#" + id)
    .addClass("tab-active")
    .fadeIn();
  return false;
});

$(document).ready(function () {
  // You can override any of these options and then call...
  $(".filterizr-filter li").click(function () {
    var targetFilter = $(this).data("multifilter");
    if (targetFilter === "all") {
      $(".filterizr-filter li").removeClass("filtr-active");
      $(this).addClass("filtr-active");
      filterizd.filterizr("filter", "all");
      filterizd._fltr._toggledCategories = {};
    } else {
      $('.filterizr-filter li[data-multifilter="all"]').removeClass(
        "filtr-active"
      );
      $(this).toggleClass("filtr-active");
      filterizd.filterizr("toggleFilter", targetFilter);
    }
    if (!filterizd._fltr._multifilterModeOn()) {
      $('.filterizr-filter li[data-multifilter="all"]').addClass(
        "filtr-active"
      );
    }
  });

  var filterizd = $(".filtr-container").filterizr();
  // filterizd.filterizr('sort', 'title', 'asc');
});
