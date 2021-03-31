jQuery(function($){
    $("body").append('<div id="modalDetailImage" class="modal"><span class="close">&times;</span><img class="modal-content"></div>');

    $(".modal-detail-image").on("click", function(){
        $("#modalDetailImage").css("display", "block");
        $("#modalDetailImage > img").attr("src", $(this).attr("src"));
    });

    $("#modalDetailImage .close").on("click", function(){
        $("#modalDetailImage").css("display", "none");
    });
});