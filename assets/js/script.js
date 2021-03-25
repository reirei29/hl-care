/* javascriptのコードを記載 */
jQuery(function($){
	$.fn.extend({
        scrollToMe: function() {
            if($(this).length){
                var top = $(this).offset().top - 100;
                $('html,body').animate({scrollTop: top}, 600);
            }
        },
        scrollToJustMe: function(){
            if($(this).length){
                var top = $(this).offset().top;
                $('html,body').animate({scrollTop: top}, 600);
            }
        }
    });

    $(document).ready(function() {
        $(".custom-tab a").off("click").on("click", function(){
            $(this).parent().parent().find("a").removeClass("active");
            $(this).addClass("active");
            $("#"+$(this).data("tab")).parent().children(".tab-content").hide();
            $("#"+$(this).data("tab")).show();
        });

        if($(this).scrollTop() > 1000) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }

        $(window).scroll(function(){
            if($(this).scrollTop() > 1000) {
                $('#to-top').fadeIn();
            } else {
                $('#to-top').fadeOut();
            }
        });

        $("#to-top").click(function () {
            $("html, body").animate({scrollTop: 0}, 300);
        });

        $(".nav-burger").off("click").on("click", function(){
            if($("body").hasClass("nav-open")) {
                $("body").removeClass("nav-open");
            } else {
                $("body").addClass("nav-open");
            }
        });

        $(".overlay").off("click").on("click", function(){
            $("body").removeClass("nav-open");
        });

        $(".subnav-opener").off("click").on("click", function(){
            if($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
                $(this).parent().children("ul").slideUp();
            } else {
                $(this).parent().addClass("active");
                $(this).parent().children("ul").slideDown();
            }
        });

        if($(".owl-image-carousel").length) {
            $(".owl-image-carousel").owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                dots: true,
                navRewind: true,
                loop: true,
                nav: true,
                navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
        }
    });
});