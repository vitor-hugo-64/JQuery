$(function() {

    // DESSA FORMA SE VERIFICA SE DETERMINADO ELEMENTO POSSUI DETERMINADA CLASSE
    $('div').hasClass('1');

    if ($('div').hasClass('1')) {
        alert("Tem Classe!");
    } else {
        alert("Não Tem Classe!");
    }

    if ($('div').hasClass('2')) {
        alert("Tem Classe!");
    } else {
        alert("Não Tem Classe!");
    }
});