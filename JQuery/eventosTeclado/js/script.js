$(function() {

    // keydown - EVENTO QUE ACONTECE QUANDO UM TECLA É PRESSIONADA
    // keyup - EVENTO QUE ACONTECE QUANDO UMA TECLA DO TECLADO É SOLTA
    // keyCode - SERVE PARA VER QUAL É O NUMERO DA TECLA QUE FOI TECLADA, MAS ISSO SÓ FUNCIONA SE A VARIÁVEL DAS PROPRIEDADES DO EVENTO(e)
    // ESTIVER SENDO EXECUTADA DENTRO DE UM EVENTO DE TECLADO

    $('#nome').on('keydown', function(e) {

        alert('Tecla Apertada');

        alert(e.keyCode);

        if (e.keyCode == 13) {
            $('#botao').trigger('click');
        }

    });

    $('#email').on('keyup', function() {
        alert('Tecla Solta');
    });
});