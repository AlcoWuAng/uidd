$(document).ready(function () {
    $("#more-btn").click(function () {

        $(".info2").animate({ top: "150px" }, 200);

        $(".info").css({"position":"fixed" });

    	$(window).on('scroll', function () {
		    var pixs = $(document).scrollTop()
		    pixs = pixs / 10;
		    $(".infoimg").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
		});
    });

});