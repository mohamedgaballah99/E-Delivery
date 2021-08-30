import "../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
$(document).ready(function() {
  $(".loading").fadeOut();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $(".top").css({
        visibility: "visible"
      });
    } else {
      $(".top").css({
        visibility: "hidden"
      });
    }
  });
  $(".top").click(function() {
    $("html,body").animate({ scrollTop: 0 }, "fast");
  });
});
