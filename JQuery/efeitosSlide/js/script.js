$(function() {

    // slideDown - FAZ UM DETERMINADO ELEMENTO APARECER
    $('#aparecer').on('click', function() {
        $('#1').slideDown('fast');
    });
    // slideUp - FAZ UM DETERMINADO ELEMENTO DESAPARECER
    $('#desaparecer').on('click', function() {
        $('#2').slideUp('slow');
    });

    // PARA PODER ALTERNAR COM UM MESMO BOTÃO É NECESSÁRIO USAR O 'slideToggle'
    $('#alternar').on('mouseover', function() {
        $('#3').slideToggle();
    });

    $('#alternar').on('mouseout', function() {
        $('#3').slideToggle();
    });

});