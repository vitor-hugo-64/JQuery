$(function() {

    /* 
        eq - Função Que Permite Pegar Uma Item De Uma Lista Pelo Numero Da Ordem, A Contagem Começa Em 0
    */

    // PEGA O ELEMENTO SELECIONADO E ATRIBUI EM UMA VARIÁVEL
    // DESSA FORMA TODA VEZ QUE FOR FEITO UMA ALTERAÇÃO PODE SE USAR O NOME DA VARIÁVEL
    var item = $('ol li').eq(1);

    item.html('Item Alterado!');

});