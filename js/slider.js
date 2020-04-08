$(document).ready(function() {
    let owl1 = $('#owl1');
    owl1.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        autoWidth: true
    });

    $('#left1').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    $('#right1').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    let owl2 = $('#owl2');
    owl2.owlCarousel({
        items: 3,
        loop: false,
        margin: 22,
        slideBy: 3
    });

    $('#left2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    $('#right2').click(function() {
        owl2.trigger('next.owl.carousel');
    });
});