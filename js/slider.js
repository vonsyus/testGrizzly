$(document).ready(function() {
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        dots: true,
        autoWidth: true
    });

    $('#left').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('#right').click(function() {
        owl.trigger('next.owl.carousel');
    });
});