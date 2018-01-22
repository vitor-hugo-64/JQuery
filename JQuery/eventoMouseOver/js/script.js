$(function() {

    // mouseover - É o evento que acontece quando se passa o mouse em cima de um determinado elemento
    $('button').mouseover(function() {
        $(this).addClass('quadrado2');
    });

    $('div').mouseover(function() {
        $(this).addClass('quadrado2');
    });

    // mouseout - É o evento que acontece quando se tira o mouse de cima de um determinado elemento
    $('button').mouseout(function() {
        $(this).removeClass('quadrado2');
    });

    $('div').mouseout(function() {
        $(this).removeClass('quadrado2');
    });

    // hover - É a junção dos dois
    // Nesse se usa dois parametros separados por virgula, o primeiro é quando o mouse estiver em cima do elemento e o segundo é quando o mouse sair de cima
    $('button').hover(function() {
        $(this).toggleClass('quadrado2');
    }, function() {
        $(this).toggleClass('quadrado2');
    })

})