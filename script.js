$(document).ready(function() {
    $("#range").on("input", function(event) {
        var col_size = $(this).val();
        $(".row .col").each(function() {
            var size, size_as_text;
            switch (parseInt(col_size)) {
                case 1:
                    size = 2;
                    size_as_text = "XS";
                    break;
                case 2:
                    size = 3;
                    size_as_text = "S";
                    break;
                case 3:
                    size = 4;
                    size_as_text = "M";
                    break;
                case 4:
                    size = 6;
                    size_as_text = "L";
                    break;
                case 5:
                    size = 12;
                    size_as_text = "XL";
                    break;
            }
            $(this).removeClass().addClass("col col-" + size);
            $("#size").text(size_as_text);
        });
    });

    const parallax = $("#parallax");
    if (parallax.length) {
        let speed = 0.5;
        parallax.css({position: "relative", zIndex: 1});
        parallax.next().css({position: "relative", zIndex: 10});
        $(window).scroll(function() {
            let offsetY = $(window).scrollTop();
            parallax.css("top", offsetY * speed + "px");
        });
    }

    const hero = $('.wrapper-container');
    const text2 = $(".navbar");

    const tl = new TimelineMax();

    tl.fromTo(hero, 2, {x: "-100%"}, {x: "0%", ease: Power1.easeInOut})
      .fromTo(text2, 1, {y: "300%"}, {y: "0%", ease: Power1.easeInOut});

});




         

