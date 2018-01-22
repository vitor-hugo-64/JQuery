$(function() {

    if ($('#pessoa').val() == 'fisica') {

        $('#cpf').removeAttr('disabled');
        $('#cnpj').attr('disabled', 'disabled');

    } else if ($('#pessoa').val() == 'juridica') {

        $('#cnpj').removeAttr('disabled');
        $('cpf').attr('disabled', 'disabled');

    } else {

        $('cpf').attr('disabled', 'disabled');
        $('#cnpj').attr('disabled', 'disabled');

    }

});