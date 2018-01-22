$(function() {

    // click - É O Evento Quando Se Clica Em Determinado Elemento!
    // toggleClass - Serve Para Alternar Uma Classe, Nesse Caso Se O Elemento Já Estiver Com A Classe Ele Irá Remove-la Mas Se Ele Não Tiver A Classe Ele Irá Adicionala

    $('.btn').click(function() {
        $('h1').toggleClass('fundo');
    });

});