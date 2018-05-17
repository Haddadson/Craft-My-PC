$(document).ready(function(){
	let craftPcVar = new Array();
	let urlBusca = 'backend.php';

    $("#start-button").on('click', function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/initial-question.html");
        $('#craft-pc-section').removeClass('craft-pc-img');
        $('#craft-pc-section').addClass('craft-pc-background');
        $(".craft-intro").remove();
    });

   $("#conteudo-incluso").on('click','#jogo' ,function(){
   		craftPcVar[0] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-question1.html");
    });

   $("#conteudo-incluso").on('click','#pesados' ,function(){
   		craftPcVar[1] = 3;	
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-pesados.html");
    });

   $("#conteudo-incluso").on('click','#medios' ,function(){
   		craftPcVar[1] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-medios.html");
    });

   $("#conteudo-incluso").on('click','#leves' ,function(){
   		craftPcVar[1] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-leves.html");
    });

	//Resultados   

   $("#conteudo-incluso").on('click','#pesado-fraco' ,function(){
   		craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("bom, com um hardware dedicado para jogos, mas sem necessitar de grandes investimento");
	        $("#tipo-resultado").text("jogar");
        });
    });

   $("#conteudo-incluso").on('click','#pesado-medio' ,function(){
   		craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("muito bom, porém não excelente, com uma placa de vídeo dedicada e processador de alta qualidade");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#pesado-forte' ,function(){
   		craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("excelente, totalmente dedicado para jogos com a melhor placa de vídeo e processador disponíveis");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#medio-fraco' ,function(){
   		craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("razoável, com peças de pequeno porte, sem muita dedicação");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#medio-medio' ,function(){
   		craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("mediano, ele suportará jogos com gráficos bons, mas não tão recentes");
	        $("#tipo-resultado").text("jogar");
        });

    });

   $("#conteudo-incluso").on('click','#medio-forte' ,function(){
   		craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("mediano para bom, suportando jogos com gráficos bons, lançados recentemente");
	        $("#tipo-resultado").text("jogar");
        });

    });

     $("#conteudo-incluso").on('click','#leve-fraco' ,function(){
     		craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("muito simples, nada de grande porte, suportando apenas os jogos mais básicos");
	        $("#tipo-resultado").text("jogar");
        });

        $.ajax({
             type: 'POST',
             url: urlBusca,
             async: true,
             cache: false,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

             complete: function(data) {
             },
             success: function(jsonData) {
                    $('#'+resultView).html(construirTabela(jsonData));   
             }
 		});
    });

   $("#conteudo-incluso").on('click','#leve-medio' ,function(){
   		craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("simples, exigindo algumas peças básicas para suportar jogos leves");
	        $("#tipo-resultado").text("jogar");
        });

    });
   $("#conteudo-incluso").on('click','#leve-forte' ,function(){
   		craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        $("#resultado").text("razoavelmente simples, com uma placa de vídeo dedicada de pequeno porte");
	        $("#tipo-resultado").text("jogar");
        });

    });


});

	