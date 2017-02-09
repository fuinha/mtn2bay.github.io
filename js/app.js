// Init animations
new WOW().init();

// Remove mdb waves effect
$('.no-waves').removeClass("waves-effect");
$('.no-waves').removeClass("waves-light");

// Nav scroll
$(".nav-link").on("click", function (){
	event.preventDefault();
	var target = $(this).attr("href");

	if (target == "#home") {
		$("html, body").animate({
	        scrollTop: $('body').offset().top
	    }, 1500, 'easeInOutSine');
	} else {
		$("html, body").animate({
	        scrollTop: $(target).offset().top -100
	    }, 1500, 'easeInOutSine');
	};

});

$(".modalToggle").on("click", function (){
	document.getElementById('iframeid').src += '';
});

// Easy as Pie plugin loaded using viewportChecker
$('.skill-pie').viewportChecker({
    offset: 0,                  // wait for the first 200 pixel of the element
                                      //to enter in the viewport
    callbackFunction: function(elem){
        $('.chart').easyPieChart({
	        animate: 4000,
	        easing: 'easeInOutCubic',
	        onStep: function (from, to, percent) {
	            $(this.el).find('.percent').text(Math.round(percent));
	        },
	        barColor: '#05D6AC', //FORCOLOR OF CHART
	        lineWidth: 5, //WIDTH OF STRIP OF SKILL CHART
	        size: 100, //WIDTH - HEIGHT OF SKILL CHART(SHOULD BE IN SQUARE) -  SHOUL BE EQUAL - Like 200px
        });
    }
});

// Profile img swipe functionality
$('#carousel-profile').on('swipeleft',function(){
	$('#carousel-profile').carousel('next');
});
$('#carousel-profile').on('swiperight',function(){
	$('#carousel-profile').carousel('prev');
});

//Example Work swipe functionality
$('#examples').on('swipeleft',function(){
	$('#work-carousel').carousel('next');
});
$('#examples').on('swiperight',function(){
	$('#work-carousel').carousel('prev');
});

// Init Google Maps
$(function init_map() {

    var var_location = new google.maps.LatLng(43.873032, -70.144720);

    var var_mapoptions = {
        center: var_location,
        mapTypeId: 'hybrid',
        zoom: 9
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Pownal"
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);
    	var_marker.setMap(var_map);

	google.maps.event.addDomListener(window, 'load', init_map);
});
