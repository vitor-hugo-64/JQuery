$(function() {

    // PARA ADICIONAR UM EVENTO É PRECISO USAR OU O 'bind' OU O 'on'
    $('button').on('click', function() {
        alert('Ola Mundo!');
    });

    // PARA REMOVER UM EVENTO PODE SER USADO O 'unbind' OU O 'off'
    $('button').off('click');

})