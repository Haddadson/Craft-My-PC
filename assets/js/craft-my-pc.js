$(document).ready(function(){
    $("#start-button").on('click', function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/initial-question.html");
        $(".craft-intro").remove();
    });

   $("#conteudo-incluso").on('click','#jogo' ,function(){
            $("#conteudo-incluso").empty();
            $("#conteudo-incluso").load("components/jogos-question1.html");
    });

});

	