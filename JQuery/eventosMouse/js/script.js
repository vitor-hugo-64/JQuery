$(document).ready(function() {

    // QUANDO O MOUSE É PRESSIONADO
    $('button').on('mousedown', function() {
        console.log('Mouse Foi Apertado!');
    });

    // QUANDO O MOUSE É SOLTO
    $('button').on('mouseup', function() {
        console.log('Mouse Foi Solto!');
    });

    // QUAND0 O MOUSE É CLICADO
    $('button').on('click', function() {
        console.log('Mouse Foi Clicado!');
    })

    // QUANDO O MOUSE É PASSADO EM CIMA DE DETERMINADO OBJETO
    $('button').on('mouseover', function() {
        console.log('Mouse Passou Está Em Cima!');
    });

    // QUANDO O MOUSE SAI DE CIMA DE DETERMINADO OBJETO
    $('button').on('mouseout', function() {
        console.log('Mouse Saiu De Cima');
    })

    // QUANDO É DADO UM DUPLO CLICK
    $('button').on('dblclick', function() {
        console.log('Mouse Foi Duplamente Clicado!');
    });

});