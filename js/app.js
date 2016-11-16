$(".nav-link").click(function (){
	event.preventDefault();
	var target = $(this).attr("href");
	
    $("html, body").animate({
        scrollTop: $(target).offset().top -100
    }, 2500);
});