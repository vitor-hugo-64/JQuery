$(function() {

    // SERVE PARA VOCE CLICAR EM DETERMINADO ELEMENTO E ACIONAR UMA SÉRIE DE OUTROS EVENTOS
    // ISSO É ACIONADO A PARTIR DO COMANDO 

    $('#todos').on('click', function() {
        $('#ler, #escrever, #desenhar').trigger('click');
    })

    $('#ler').on('click', function() {
        alert('Opção LER Marcado!');
    })

    $('#escrever').on('click', function() {
        alert('Opção ESCREVER Marcado!');
    })

    $('#desenhar').on('click', function() {
        alert('Opção DESENHAR Marcado!');
    })
})