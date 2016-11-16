$(".nav-link").click(function (){
	var target = $(this).attr("href");
	console.log(target);
    $("html, body").animate({
        scrollTop: $(target).offset().top -50
    }, 2000);
});