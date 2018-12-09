$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,

        }
    );
});

$(document).ready(function(){
    $("#toggleMenu").click(function(){
    $(".spMenu_toggle").slideToggle();
    });
});

$(window).load(function(){
    $('img.listImage').click(function(){
    var img_src = $(this).attr('src');
    $('#displayImage img').attr('src', img_src);
    });
});