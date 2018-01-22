$(function() {

    // '.html()' QUANDO OS PARENTESES ESTÃO VAZIOS SE PODE USAR PARA PEGAR DETERMINADO CONTEUDO DE UMA TAG
    // A FUNÇÃO 'trim' SERVE PARA TIRAR OS ESPAÇOS EM BRANCO EXECIVOS QUE SE TEM EM UM DETERMINADO CONTEÚDO
    var valor = $('#algo').html();

    $.trim(valor);

    // each - Serve Para Passa Um Determinado Comando Por Todos Os Elementos Do Tipo De Tag Ou Elemento Que Está Selecionado!
    $('li').each(function() {
        alert($('this').html());
    });

    var nome = 'Vitor';
    var idade = 15;

    // SERVE PARA VER O TIPO DA VARIÁVEL QUE ESTÁ SELECIONADO!
    $.type(nome);

    // SERVE PARA VERIFICAR SE UMA VARIÁVEL É NUMÉRICA
    $.isNumeric(idade);

    if ($.isNumeric(idade)) {
        alert('É Um Número!');
    } else {
        alert('Não É Um Número!');
    }
});