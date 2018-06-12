function cria(element){
    return document.createElement(element);
}


function geraResultado (data) {
    console.log(data);
    let html ="";

    if(data == [] || data.length == 0){
        html += `<div class = 'card pc-item'>Infelizmente nosso banco ainda não possui máquinas para este modelo de computador 🙁</div>`;
    } else {
        html += `<h4 class="descricao-final">`+data[0].txt_descricao+`</h4>`;
        for(let i in data){
            html += `<div class = 'card pc-final'>`;
            html += `<p class = 'text-dark num-pc-final'><span class="font-weight-bold">Opção `+(parseInt(i)+1)+`</span></p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Placa Mãe:</span> `+data[i].nom_placaMae+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Processador:</span> `+data[i].nom_processador+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Placa de vídeo:</span> `+data[i].nom_placaVideo+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Armazenamento:</span> `+data[i].qtd_armazenamento+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Memória RAM:</span> `+data[i].qtd_ram+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Fonte:</span> `+data[i].nom_fonte+`</p>`;
            html +=`</div><br><brOU<br><br>`;       
        }
        
    }

    $('#resultado').html(html);

}



$(document).ready(function(){
	let craftPcVar = new Array();
	let urlBusca = '../backend.php';

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
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }
            }
        });
    });

   $("#conteudo-incluso").on('click','#pesado-medio' ,function(){
   		craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }
            }
        });

    });

   $("#conteudo-incluso").on('click','#pesado-forte' ,function(){
   		craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));
                    console.log(JSON.parse(data));   
                }
            }
        });

    });

   $("#conteudo-incluso").on('click','#medio-fraco' ,function(){
   		craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }   
            }
        });

    });

   $("#conteudo-incluso").on('click','#medio-medio' ,function(){
   		craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }
            }
        });

    });

   $("#conteudo-incluso").on('click','#medio-forte' ,function(){
   		craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }
            }
        });

    });

     $("#conteudo-incluso").on('click','#leve-fraco' ,function(){
     		craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });

        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},


            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                    console.log (JSON.parse(data));
                } else {
                    console.log ("teste");
                }
            }
 		});
    });

   $("#conteudo-incluso").on('click','#leve-medio' ,function(){
   		craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
            $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }
            }
        });

    });
   $("#conteudo-incluso").on('click','#leve-forte' ,function(){
   		craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html", function (){
	        
	        $("#tipo-resultado").text("jogar");
        });


        $.ajax({
             type: 'POST',
             url: urlBusca,
             data :{param0: craftPcVar[0], param1: craftPcVar[1], param2: craftPcVar[2]},

            success: function(data) {
                if(data != null){
                    geraResultado(JSON.parse(data));   
                }
            }
        });

    });


});

	