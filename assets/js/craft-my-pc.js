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

   $("#conteudo-incluso").on('click','#pesados' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-pesados.html");
    });

   $("#conteudo-incluso").on('click','#medios' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-medios.html");
    });

   $("#conteudo-incluso").on('click','#leves' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-leves.html");
    });

   

});

	