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
