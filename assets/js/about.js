$(document).ready(function() {
    var cells_per_row, container, cells, rows, SESSIONS_COUNT_RELOAD_INTERVAL = 5e3;
    function init() {
        var cell_width = container.width()
          , cell_width = cell_width / (cells_per_row = 991 <= cell_width ? 8 : 768 <= cell_width ? 6 : 480 <= cell_width ? 4 : 3);
        container.find("div").css({
            position: "relative",
            "float": "left",
            height: cell_width,
            width: cell_width
        }).find("img").css({
            position: "absolute",
            height: cell_width,
            width: cell_width
        });
        for (var i = 0; i < cells.length; i++)
            $(cells[i]).addClass("active").show(),
            cells_per_row * rows <= i && $(cells[i]).removeClass("active").hide()
    }
    $(".testimonial-slider").slick({
        dots: !0,
        infinite: !1,
        adaptiveHeight: !0,
        arrows: !1,
        swipe: !1,
        swipeToSlide: !1,
        autoplay: !0,
        autoplaySpeed: 7e3
    }),

    container = $(".counselor-grid"),
    cells = container.find("div"),
    rows = 3,
    init(),
    function rotate() {
        var rnd_active = $(cells[Math.floor(Math.random() * cells.filter(".active").length)])
          , rnd_inactive = $(cells[cells_per_row * rows + Math.floor(Math.random() * cells.filter(":not(.active)").length)])
          , tmp = rnd_active.find("img");
        rnd_inactive.find("img").hide().appendTo(rnd_active).fadeIn(500, function() {
            rnd_inactive.html(tmp)
        }),
        setTimeout(function() {
            rotate()
        }, 600)
    }(),
    $(window).on("resize", init),
    $(".image-carousel").each(function() {
        var images_visible, image_width, container = $(this), images_container = container.find(".images"), images = images_container.find("img"), next_btn = container.find(".carousel-control-next"), prev_btn = container.find(".carousel-control-prev"), animating = !1;
        function init() {
            var container_width = container.width();
            image_width = container_width / (images_visible = 991 <= container_width ? 3 : 480 <= container_width ? 2 : 1),
            container.find("img").css({
                width: image_width,
                "float": "left"
            })
        }
        $(prev_btn).on("click", function(left) {
            return left.preventDefault(),
            animating || (animating = !0,
            (left = parseInt(images_container.css("left"), 10)) <= 0 && (images.last().prependTo(images_container),
            images_container.css({
                left: left - image_width
            }),
            left = parseInt(images_container.css("left"), 10),
            images = images_container.find("img")),
            images_container.animate({
                left: left + image_width
            }, {
                complete: function() {
                    animating = !1
                }
            })),
            !1
        }),
        $(next_btn).on("click", function(e) {
            var left;
            return e.preventDefault(),
            animating || (animating = !0,
            left = parseInt(images_container.css("left"), 10),
            images_container.animate({
                left: left - image_width
            }, {
                complete: function() {
                    left > -(images.length - images_visible) * image_width && (images.first().appendTo(images_container),
                    left = parseInt(images_container.css("left"), 10),
                    images_container.css({
                        left: left + image_width
                    }),
                    images = images_container.find("img"),
                    animating = !1)
                }
            })),
            !1
        }),
        init(),
        $(window).on("resize", init)
    })
});
