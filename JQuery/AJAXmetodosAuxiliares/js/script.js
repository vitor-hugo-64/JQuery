$(function() {

    // load - É UM METODO AUXILIAR DO AJAX QUE SERVE PARA FAZER UMA REQUISIÇÃO SIMPLES
    // get - SERVE PARA FAZER UMA REQUISIÇÃO VIA GET: O PRIMEIRO PARAMETRO INFORMADO É O NOME DO ARQUIVO QUE SERÁ REQUISITADO
    // E O SEGUNDO É A FUNÇÃO QUE SERÁ EXECUTADA COM AQUELE ARQUIVO, PARA PODER ARMAZENAR OS DADOS DO DETERMINADO ARQUIVO É NECESSÁRIO
    // CRIAR UMA VARIÁVEL QUE NESSE CASO É A VARIÁVEL 'v'  E EM SEGUIDA A VARIÁVEL É INSERIDA ATRAVÉS DE 'html()'
    // PARA OS METODOS DE POST SERVE A MESMA COISA

    $('#1').on('click', function() {
        $('.caixa').load('1.html');
    });

    $('#2').on('click', function() {
        $.get('2.html', function(v) {
            $('.caixa').html(v);
        });
    });

    $('#3').on('click', function() {
        $.post('3.html', function(v) {
            $('.caixa').html(v);
        });
    });

});