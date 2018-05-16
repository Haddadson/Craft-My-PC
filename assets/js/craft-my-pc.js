$(document).ready(function(){

    $("#start-button").on('click', function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/initial-question.html");
        $('#craft-pc-section').removeClass('craft-pc-img');
        $('#craft-pc-section').addClass('craft-pc-background');
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

	//Resultados   

   $("#conteudo-incluso").on('click','#pesado-fraco' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("bom, com um hardware dedicado para jogos, mas sem necessitar de grandes investimento");
	        $("#tipo-resultado").text("jogar");
        });
    });

   $("#conteudo-incluso").on('click','#pesado-medio' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("muito bom, porém não excelente, com uma placa de vídeo dedicada e processador de alta qualidade");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#pesado-forte' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("excelente, totalmente dedicado para jogos com a melhor placa de vídeo e processador disponíveis");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#medio-fraco' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("razoável, com peças de pequeno porte, sem muita dedicação");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#medio-medio' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("mediano, ele suportará jogos com gráficos bons, mas não tão recentes");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#medio-forte' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("mediano para bom, suportando jogos com gráficos bons, lançados recentemente");
	        $("#tipo-resultado").text("jogar");
        });

    });

     $("#conteudo-incluso").on('click','#leve-fraco' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("muito simples, nada de grande porte, suportando apenas os jogos mais básicos");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#leve-medio' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("simples, exigindo algumas peças básicas para suportar jogos leves");
	        $("#tipo-resultado").text("jogar");
        });

    });
   $("#conteudo-incluso").on('click','#leve-forte' ,function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("razoavelmente simples, com uma placa de vídeo dedicada de pequeno porte");
	        $("#tipo-resultado").text("jogar");
        });

    });


});

	