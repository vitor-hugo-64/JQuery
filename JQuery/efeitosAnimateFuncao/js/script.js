$(function() {

    // animate - É USADO PARA CRIAR UM DETERMINADO EFEITO A PARTIR DE PROPRIEDADES CSS
    // {} - O QUE FICA DENTRO DAS CHAVES É AS PROPRIEDADES CSS
    // duration - DURAÇÃO DA ANIMAÇÃO
    // complete - É EXECUTADO QUANDO A ANIMAÇÃO TERMINA
    // start - É EXECUTADO QUANDO A ANIMAÇÃO COMEÇA
    // step - É EXECUTADO TODA VEZ QUE UMA ETAPA DA ANIMAÇÃO É CONCLUÍDA
    // MUITAS VEZES PODE SER USADO UM ANIMATE DENTRO DE UM FUNÇÃO QUE SERÁ EXECUTADA DEPOIS QUE A ANIMAÇÃO PRINCIPAL TERMINAR

    $('#efeito').on('click', function() {
        $('.quadrado').animate({
            'margin-left': '1.5%',
            'border-radius': '75px'
        }, {
            'duration': 1500,
            'complete': function() {

                $('.quadrado').animate({
                    'margin-left': '0%',
                    'border-radius': '0px'
                }, 1500);
            },
            'start': function() {
                console.log('Iniciou!');
            },
            'step': function() {
                console.log('Etapa!');
            }
        });
    });

});