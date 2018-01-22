$(function() {

    /* DESSA FORMA SE SELECIONA TAGS */
    $('button')

    /* DESSA FORMA SE SELECIONA CLASSES */
    $('.classe1')

    /* DESSA FORMA SE SELECIONA IDS */
    $('#id')


    /*
        TODO ELEMENTO DA PÁGINA SELECIONADO RETORNA EM FORMA DE ARRAY
        E TAMBÉM É POSSIVEL COLOCAR UMA SELEÇÃO DENTRO DE UM 'IF' PARA VERIFICAR SE  O ELEMENTO 
        REALMENTE EXISTE
    */

    if ($('li').length > 0) {
        alert('Existe Lista Na Página!');
    }
});