$(document).foundation();

//***************************
//Header size fix
//***************************

var app = {};

var $fullHeight = $(".full-height");
var $adjustWidth = $(".full-width");
var $headerContent = $(".header-content");

app.fullHeight = function () {
    var winHeight = $(window).height();

    $fullHeight.css("height", winHeight);

    var topMargin = (($fullHeight.height() - $(".top-bar").height()) - $headerContent.height()) / 2;
    $headerContent.css({"margin-top": topMargin + "px"});
};

app.fullHeight();
$(window).on("resize", app.fullHeight);

app.fullWidth = function(){
    var winWidth = $(window).width() /2.4;

    $adjustWidth.css("height", winWidth);

    console.log(winWidth);
};

app.fullWidth();
$(window).on("resize", app.fullWidth);


//***************************
//Mouseout function
//***************************
$headerContent.mouseover(function(){
    $(".container").addClass("active");
});

$headerContent.mouseout(function(){
    $(".container").removeClass("active");
});

$('img.arrow').click(function () {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 800);
});

//***************************
//Map Initialization
//***************************

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var myLatlng = new google.maps.LatLng(19.066444, 72.823092);
    var styles = [
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
    var mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3 id="firstHeading" class="firstHeading">Cama House</h3>'+
        '<div id="bodyContent">'+
        '<p>117 Pali Hill Bandra, Mumbai 400021</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Cama House'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    map.setOptions({styles: styles});
}

google.maps.event.addDomListener(window, 'load', initialize);



