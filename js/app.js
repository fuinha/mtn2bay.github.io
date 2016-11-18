// init animations
new WOW().init();

// nav scroll
$(".nav-link").on("click", function (){
	event.preventDefault();
	var target = $(this).attr("href");

	$("html, body").animate({
        scrollTop: $(target).offset().top -100
    }, 2000, 'swing');
});

// Easy as Pie plugin - load when in view
$('.skill-pie').viewportChecker({
    offset: 200,                  // wait for the first 200 pixel of the element 
                                      //to enter in the viewport
    callbackFunction: function(elem){
        setTimeout(function(){
            $('.chart').easyPieChart({
	        animate: 5000,
	        easing: 'easeOutBounce',
	        onStep: function (from, to, percent) {
	            $(this.el).find('.percent').text(Math.round(percent));
	        },
	        barColor: '#05D6AC', //FORCOLOR OF CHART
	        lineWidth: 5, //WIDTH OF STRIP OF SKILL CHART
	        size: 100, //WIDTH - HEIGHT OF SKILL CHART(SHOULD BE IN SQUARE) -  SHOUL BE EQUAL - Like 200px 
	        });
        },500);
    }
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