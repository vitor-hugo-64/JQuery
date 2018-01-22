$(function() {

    // TODOS OS EFEITOS DE APARECER E DESAPARECER SÃO FEITOS PORQUE AS FUNÇÕES JQUERY ADICIONAM UM CSS NO ELEMENTO, QUE É O 'display: none;'

    // show - FAZ UM DETERMINADO ELEMENTO APARECER
    $('#aparecer').on('click', function() {
        $('#1').show('slow');
    });
    // hide - FAZ UM DETERMINADO ELEMENTO DESAPARECER
    $('#desaparecer').on('click', function() {
        $('#2').hide('fast');
    });

    // PARA PODER ALTERNAR COM UM MESMO BOTÃO É NECESSÁRIO USAR O TOGGLE
    $('#alternar').on('mouseover', function() {
        $('#3').toggle();
    });

    $('#alternar').on('mouseout', function() {
        $('#3').toggle();
    });

});