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
        })
    });
});