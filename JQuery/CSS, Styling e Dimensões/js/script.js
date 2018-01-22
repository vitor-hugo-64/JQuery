$(function() {

    //ADICIONA UMA CLASSE NA TAG SELECIANADA
    $('label').addClass('fundo');
    $('body').addClass('fundo');

    //REMOVE UMA CLASSE DA TAG
    $('body').removeClass('fundo');

    // hasClass - VERIFICA SE DETERMINADA TAG TEM UMA CLASSE
    if ($('label').hasClass('fundo')) {
        alert('Tem A Classe');
    } else {
        alert('Não Tem A Classe!');
    }

    //ADICIONA UM CSS EM DETERMINADO ELEMENTO
    $('label').css('color', 'red');

    $('button').css('color', 'blue').css('background', 'gray').css('border', '1px solid red');

});