$(function() {

    // fadeIn - FAZ UM DETERMINADO ELEMENTO APARECER
    $('#aparecer').on('click', function() {
        $('#1').fadeIn('slow');
    });
    // fadeOut - FAZ UM DETERMINADO ELEMENTO DESAPARECER
    $('#desaparecer').on('click', function() {
        $('#2').fadeOut('slow');
    });

    // PARA PODER ALTERNAR COM UM MESMO BOTÃO É NECESSÁRIO USAR O 'dadeToggle'
    $('#alternar').on('mouseover', function() {
        $('#3').fadeToggle();
    });

    $('#alternar').on('mouseout', function() {
        $('#3').fadeToggle();
    });

});