$(document).foundation();

//***************************
//Header size fix
//***************************

var app = {};

var $fullHeight = $(".full-height");
var $headerContent = $(".header-content");

app.fullHeight = function () {
    var winHeight = $(window).height();

    $fullHeight.css("height", winHeight);

    var topMargin = (($fullHeight.height() - $(".top-bar").height()) - $headerContent.height()) / 2;
    $headerContent.css({"margin-top": topMargin + "px"});
};

app.fullHeight();
$(window).on("resize", app.fullHeight);

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

