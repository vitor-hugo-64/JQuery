$(function() {

    // serialize - SERVE PARA JUNTAR TODAS AS INFORMAÇÕES DO SEU FORMULÁRIO EM UMA VARIÁVEL PARA DEPOIS PODER ENVIAR
    // PARA QUE O METODO SERIALIZE FUNCIONE É NECESSÁRIO QUE CADA INPUT TENHA A TAG 'name'

    $('#formulario').on('submit', function(e) {
        e.preventDefault();

        var txt = $(this).serialize();
        console.log(txt);
    });

});