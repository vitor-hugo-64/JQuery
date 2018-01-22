$(function() {

    // QUANDO SE USA UM EVENTO NO FORMULÁRIO O EVENTO É EXECUTADO E EM SEGUIDA O FORMULÁRIO É ENVIADO
    // ENTÃO PARA PODER IMPEDIR QUE ESSE PADRÃO DE ENVIAR O FORMULÁRIO SEJA EXECUTADO É NECESSÁRIO ACESSAR UMA PROPRIEDADE INTERNA DO EVENTO
    // PARA PODER ACESSAR ESSA PROPRIEDADE INTERNA SE USA UMA VARIÁVEL NA FUNÇÃO, NESSE CASO FOI USADO A VARIÁVEL 'e'
    // preventDefault - É usado para impedir que o padrão de enviar o formulário depois de executar o evento seja executado
    $('#enviar').click(function(e) {

        if ($('#nome').val() == '') {
            e.preventDefault();
            alert('Informe Seu Nome!');
        } else {
            alert('Nome Cadastrado Com Sucesso!');
        }

    })
})