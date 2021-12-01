$(".navbar__menu").on("click", function() {
    $( ".navbar_slide" ).css( "display", "flex" );
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
});

$("#nav_close-btn").on("click", function() {
    $( ".navbar_slide" ).css( "display", "none" );
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
});