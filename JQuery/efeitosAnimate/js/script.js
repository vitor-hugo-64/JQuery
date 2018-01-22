$(function() {

    // animate - É USADO PARA CRIAR UM DETERMINADO EFEITO A PARTIR DE PROPRIEDADES CSS
    // {} - O QUE FICA DENTRO DAS CHAVES É AS PROPRIEDADES CSS
    // O QUE FICA DEPOIS DA VIRGULA É O TEMPO QUE EFEITO IRÁ LEVAR PARA CONCLUIR EM MILISEGUNDOS

    $('#efeito').on('click', function() {
        $('.quadrado').animate({
            'margin-left': '1.5%',
            'border-radius': '75px'
        }, 1000);
    });

});