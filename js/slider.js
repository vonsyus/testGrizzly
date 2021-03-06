$(document).ready(function() {
    let owl1 = $('#owl1');
    owl1.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        responsive: {
            0: {
                autoWidth: false            
            },
            1170: {
                autoWidth: true
            }
        }
    });

    $('#left1').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    $('#right1').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    let owl2 = $('#owl2');
    owl2.owlCarousel({
        loop: false,
        margin: 22,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            1170: {
                items: 3,
                slideBy: 3
            }
        }
    });

    $('#left2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    $('#right2').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    let owl3 = $('#owl3');
    owl3.owlCarousel({
        loop: false,
        margin: 20,
        items: 2,
        slideBy: 2
    });

    $('#left3').click(function() {
        owl3.trigger('prev.owl.carousel');
    });

    $('#right3').click(function() {
        owl3.trigger('next.owl.carousel');
    });

    let owl4 = $('#owl4');
    owl4.owlCarousel({
        loop: false,
        margin: 20,
        items: 1
    });
});