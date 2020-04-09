$(function() {
    $('#accordion1').accordion({
        heightStyle: "fill",
        minHeight: 140,
        minWidth: 200,
    });

    $('#accordion2').accordion({
        heightStyle: "fill",
        maxHeight: 500,
        minWidth: 200,
    });

    $('#accordion3').accordion({
        heightStyle: "fill",
        maxHeight: 500,
        minWidth: 200,
    });

    $(window).resize(function() {
        $('#accordion1').accordion("refresh");
        $('#accordion2').accordion("refresh");
        $('#accordion3').accordion("refresh");
    });
});