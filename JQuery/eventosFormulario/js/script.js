$(function() {

    // submit - EVENTO QUE ACONTECE QUANDO O FORMULÁRIO É SUBMETIDO
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        alert('Formulário Submetido!');
    });

    // select - ACONTECE QUANDO UM TEXTO DE ALGUM CAMPO DE TEXTO É SELECIONADO
    $('#nome, #email, #idade').on('select', function() {
        alert('Conteúdo Selecionado!');
    });

    // focus - QUANDO UMA CAIXA DE TEXTO É FOCADA
    $('#nome, #email, #idade').on('focus', function() {
        $(this).addClass('fundo');
    });

    // blur - QUANDO UMA CAIXA DE TEXTO É DESFOCADA
    $('#nome, #email, #idade').on('blur', function() {
        $(this).removeClass('fundo');
    });

    // change - QUANDO O CONTEUDO DE ALGUM INPUT É ALTERADO
    $('#nome, #email, #idade').on('change', function() {
        $(this).addClass('alterado');
    })

});