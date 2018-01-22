$(function() {

    // ajax - SERVE PARA FAZER UMA REQUISIÇÃO AJAX
    // OS DADOS DA REQUISIÇÃO SÃO TODOS INFORMADOS DENTRO DE '{}' E SEGUEM A SEGUINTE ORDEM
    // type = TIPO DE ENVIO(GET OU POST)
    // url = O NOME DO ARQUIVO QUE FARÁ USO DOS DADOS DO FORMULÁRIO
    // data = O NOME DA VARIÁVEL QUE ARMAZENA OS DADOS OBTIDOS POR SERIALIZE
    // EM SEGUIDA VEM A FUNÇÃO QUE SERÁ EXECUTADA CASO OS ARQUIVO SEJA REQUISITADO COM SUCESSO!
    // DEPOIS VEM A FUNÇÃO QUE SERÁ EXECUTADA EM CASO DE ERRO

    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        var dados = $(this).serialize();
        console.log(dados);

        $.ajax({
            type: 'POST',
            url: 'conta.php',
            data: dados,
            success: function(resultado) {
                $('#resultado').val(resultado);
            },
            error: function() {
                alert('Occoreu Um Erro!');
            }
        });
    });
});