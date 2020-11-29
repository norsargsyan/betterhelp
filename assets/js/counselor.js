
var page_info = {"counselor_earnings":{"5":7800,"6":9620,"7":11440,"8":13260,"9":15080,"10":16900,"11":18980,"12":21060,"13":23140,"14":25220,"15":27300,"16":29640,"17":31980,"18":34320,"19":36660,"20":39000,"21":41600,"22":44200,"23":46800,"24":49400,"25":52000,"26":54860,"27":57720,"28":60580,"29":63440,"30":66300,"31":69420,"32":72540,"33":75660,"34":78780,"35":81900,"36":85540,"37":89180,"38":92820,"39":96460,"40":100,"41":103740,"42":107380,"43":111020,"44":114660,"45":118300,"46":121940,"47":125580,"48":129220,"49":132860,"50":136500}};

var quiz_started = !1;

function submit_form() {
    $("#counselor_application_form").submit()
}
function submit_funnel_form() {
    $("#counselor-funnel").submit()
}
function set_bubble() {
    document.querySelectorAll(".range-wrap").forEach(function(wrap) {
        var range = wrap.querySelector(".range")
          , bubble = wrap.querySelector(".bubble");
        range.addEventListener("input", function() {
            get_bubble(range, bubble)
        }),
        get_bubble(range, bubble)
    })
}
function get_bubble(max, bubble) {
    var val = max.value
      , newVal = max.min || 0
      , max = max.max || 100
      , newVal = Number(100 * (val - newVal) / (max - newVal));
    bubble.innerHTML = val,
    bubble.style.left = "calc(" + newVal + "% + (" + (8 - .15 * newVal) + "px))"
}
function apply_fill(slider) {
    var bg = 100 * (slider.val() - slider.prop("min")) / (slider.prop("max") - slider.prop("min"))
      , bg = "linear-gradient(90deg, #4775AF " + bg + "%, #C5C5C5 " + (.1 + bg) + "%)";
    slider.css("background", bg)
}
$(document).ready(function() {
    page_info.counselor_earnings && ($("#earnings-amount").text("$" + page_info.counselor_earnings[40].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
    apply_fill($("#full-time-range"))),

    $(".counselor_question").removeClass("hidden"),

    $(".slider-next-button, .radio.slider-next-select").on("click", function(event) {
        event.preventDefault(),
        $("#counselor-question-slider").slick("slickNext")

    });
    var click_earnings_get_started = !1;
    $(".get-started-counselor-application, #counselor-earnings-btn").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $(".why-and-apply").offset().top - 60
      }, 500);
    });


    $("#counselor-earnings-btn","#counselor-earnings-btn").on("click", function() {
      event.preventDefault(),

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#counselor-funnel").offset().top - 90
        }, 1e3),
        click_earnings_get_started
    }),
    document.body.clientWidth <= 726 && $("#counselor-earning-desc").addClass("hidden");
    var body_width = document.body.clientWidth
      , get_started_button = $(".counselor-earnings-tooltip").data("text");
    $(".counselor-earnings-tooltip").tooltip({
        placement: body_width < 550 ? "right" : "top",
        title: "<div><strong>" + get_started_button + "</strong></div>",
        html: !0
    }),
    set_bubble(),
    $("#full-time-range").on("input", function() {
        apply_fill($("#full-time-range"))
    }),
    $("#part-time-range").on("input", function() {
        apply_fill($("#part-time-range"))
    }),
    $("#counselor-question-slider").slick({
        infinite: !1,
        adaptiveHeight: !0,
        arrows: !1,
        swipeToSlide: !1,
        draggable: !1,
        swipe: !1,
        touchMove: !1,
        speed: 400,
        accessibility: !1,
        mobileFirst: !0
    }),
    $(".testimonial-slider").slick({
        dots: !0,
        infinite: !1,
        adaptiveHeight: !0,
        arrows: !1,
        swipe: !0,
        swipeToSlide: !0,
        autoplay: !0,
        autoplaySpeed: 7e3
    });

});
