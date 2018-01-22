$(function() {

    // O 'parent()' Serve Para Navegar Para O Elemento Pai Daquele Que Foi Selecionado!
    // Nesse caso a div que possui a classe 'site4' está dentro da div que possui a classe 'site'
    // E esse será o item selecionado
    $('.site4').parent();

    // O 'closest()' Serve Para Ir Para O Elemento Mais Próximo Que Tem Aquele Nome, mas com um porem
    // ele só vai para fora e não procura elementos para dentro das tags
    $('.site9').closest('.site');

    // O 'find' Serve Para Procurar Elementos Para Dentro das Tags, e pode ser usado quantas vezes quiser, da mesma forma como o parent
    // ou closest
    $('.site2').find('.site3').find('.site8');

    // também podem ser usados em conjunto
    $('.site9').closest('.site').find('.site5')

    // Também pode se selecionar um determinada tag a partir do eq
    $('div').eq(2);

});