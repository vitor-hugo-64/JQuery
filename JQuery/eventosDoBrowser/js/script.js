$(function() {

    // scroll - É O EVENTO QUE SERÁ SEMPRE EXECUTADO QUANDO FOR FEITO UM SCROL NA PÁGINA
    $('.div').on('scroll', function() {
        $(this).toggleClass('scroll');
    })

    // resize - É O EVENTO QUE É EXECUTADO SEMPRE QUE O TAMANHO DA TELA MUDA
    // PRA FAZER ISSO É NECESSÁRIO SELECIONAR A JANELA( window ) COMO ESTÁ SENDO FEITO NO EXEMPLO
    $(window).on('resize', function() {
        alert("Mudou O Tamanho Da Tela!");
    })

})