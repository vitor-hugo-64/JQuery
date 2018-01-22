$(function() {

    // ISSO SE FAZ PARA SABER SE EXISTE UM DETERMINADO ELEMENTO
    // QUANDO SE SELECIONA UMA DETERMINADA TAG OU ELEMENTO, OS RESULTADOS RETORNAM EM FORMA DE ARRAY
    // E NA PRÁTICA UM ELEMENTO QUE NÃO EXISTE IRÁ RETORNAR UM ARRAY COM INDICE 0, OU SEJA, ESSE ARRAY EXISTE
    // PARA QUE POSSA REALMENTE VERIFICAR SE UM DETERMINADO ELEMENTO EXISTE É NECESSÁRIO USAR O 'length'
    // QUE VERIFICA A QUANTIDADE DE INDICES QUE UM ARRAY POSSUI
    // SE UM NUMERO DE INDICES DE UMA ARRAY FOR MAIOR QUE 0 ENTÃO ESSE ELEMENTO REALMENTE EXISTE

    if ($('#algo').length > 0) {
        alert("Elemento Existe!");
    } else {
        alert("Elemento Não Existe!");
    }


});