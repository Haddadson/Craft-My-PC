function cria(element){
    return document.createElement(element);
}


function geraResultado (data) {
    let descricao, nomePlacaMae, nomePlacaVideo, nomeProcessador, nomeHD, nomeFonte, nomeRAM;
    let divItem, divConteudo;
    let html ="";

    if(data == [] || data.length == 0){
        html += `<div class = 'card pc-item'>Infelizmente nosso banco ainda não possui máquinas para este modelo de computador 🙁</div>`;
    } else {
        for(let i in data){
            html += `<div class = 'card'>`
            for(let key in data[i]){
                 html += `<div>`+data[i][key]+`</div>`;
            }
            html +=`</div><br><brOU<br><br>`;       
        }
        
    }



    $('#resultado').html(html);


    // divItem = cria('div');
    // divItem.className = "item";

    // divConteudo = cria('div');
    // divConteudo.className = "carousel-content";

    // descricao = cria('p');
    // descricao.className = "conteudo-final";
    // descricao.innerHTML = data.txt_descricao;

    // nomePlacaMae = cria('p');
    // nomePlacaMae.innerHTML = 'Placa mãe: ' + data.nom_placaMae;

    // nomePlacaVideo = cria('p');
    // nomePlacaVideo.innerHTML = 'Placa de vídeo: ' + data.nom_placaVideo;

    // nomeProcessador = cria('p');
    // nomeProcessador.innerHTML = 'Processador: ' + data.nom_processador;

    // nomeHD = cria('p');
    // nomeHD.innerHTML = 'HD (Armazenamento): ' + data.qtd_armazenamento;

    // nomeRAM = cria('p');
    // nomeRAM.innerHTML = 'Memória: ' + data.qtd_ram;

    // nomeFonte = cria('p');
    // nomeFonte.innerHTML = 'Fonte: ' + data.nom_fonte;



    // divConteudo.appendChild(descricao);
    // divConteudo.appendChild(nomePlacaMae);
    // divConteudo.appendChild(nomePlacaVideo);
    // divConteudo.appendChild(nomeProcessador);   
    // divConteudo.appendChild(nomeHD);
    // divConteudo.appendChild(nomeFonte);
    // divConteudo.appendChild(nomeRAM);

    // divItem.appendChild(divConteudo);
    // document.querySelector('#resultado').appendChild(divItem);
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

	