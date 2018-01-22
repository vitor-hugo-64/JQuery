$(function() {

    /*

        html - Serve Para Mudar O Texto Dentro Da Tag Reconhecendo Tags HTML Também, Ou Se O Parenteses Estiver Vazio Ele Só Retorna O Que Tem Dentro Da Tag
        find - Serve Para Encontrar Uma Determinada Tag Dentro Da Tag ou etc.
        addClass - Serve Para Adicionar Um Determinado Estilo Na Tag Selecionada.
        text - Serve Para Colocar Texto, Mas Sem Considerar As Tags HTML
        width - Serve Para Trocar o tamanho da imagem, o mesmo serve para o heigth
        val - Serve Para Colocar Texto Dentro De Input
        after - Serve Para Inserir Um Trecho De Código Depois Do Elemento Selecionado! Para Inserir Antes Do Elemento É Só Substituir 'After' Por 'Before'
        append - Serve Para Colocar Um Item Novo Em Determinado Conjunto(listas, ou tags que estão dentro de uma div com classe), para adicionar antes é só trocar o append por prepend
        remove - Serve Para Remover Um Item
        
    */

    $('#div').html("Texto Mudado <strong>Com</strong> Sucesso!");

    $('#div').text("Texto Texto");

    $('#div2').find('h1').addClass('estilo');

    $('li span.2').html('Texto Mudado Agora!');

    $('li').find('div').addClass('classe5');

    $('img.1').width('450');

    $('input').val('Olá Mundo');

    $('input').after('<span>Olá Mundo!</span>');

    $('ol').append('<li>Item 15</li>');

    $('div a').remove();

});