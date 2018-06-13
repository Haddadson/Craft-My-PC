function cria(element){
    return document.createElement(element);
}


function geraResultado (data) {
    let html ="";

    if(data == [] || data.length == 0){
        html += `<div class = 'card pc-item justify-content-md-center'>Infelizmente nosso banco ainda não possui máquinas para este modelo de computador 🙁</div>`;
    } else {
        html += `<h4 class="descricao-final">`+data[0].txt_descricao+`</h4>`;
        for(let i in data){
            html += `<div class = 'card pc-final justify-content-md-center'>`;
            html += `<p class = 'text-dark num-pc-final'><span class="font-weight-bold">Opção `+(parseInt(i)+1)+`</span></p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Placa Mãe:</span> `+data[i].nom_placaMae+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Processador:</span> `+data[i].nom_processador+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Placa de vídeo:</span> `+data[i].nom_placaVideo+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Armazenamento:</span> `+data[i].qtd_armazenamento+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Memória RAM:</span> `+data[i].qtd_ram+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="font-weight-bold">Fonte:</span> `+data[i].nom_fonte+`</p>`;
            html += `<p class = 'text-dark pc-item-final'><span class="tomato font-weight-bold">Preço estimado:</span> R$`+data[i].vlr_preco+`,00</p>`;
            html += `</div><br><br>`
        }
        if(data.length == 1){
            html += `<div class="disclaimer"><p class="disclaimer-text">O item acima é apenas uma sugestão. <br>Assim, sinta-se à vontade para utilizar outras peças em nosso setup e encontrar um preço adequado para você 😊</p></div>`;
        } else if (data.length > 1){
            html += `<div class="disclaimer"><p class="disclaimer-text">Os itens acima são apenas uma sugestão. <br>Assim, sinta-se à vontade para utilizar outras peças em nossos setups e encontrar um preço adequado para você 😊</p></div>`;
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


   //Escolha Inicial
   $("#conteudo-incluso").on('click','#jogos' ,function(){
        craftPcVar[0] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-question1.html");
    });

    $("#conteudo-incluso").on('click','#trabalho' ,function(){
        craftPcVar[0] = 3;
     $("#conteudo-incluso").empty();
     $("#conteudo-incluso").load("components/trabalho-question1.html");
    });

   $("#conteudo-incluso").on('click','#estudo' ,function(){
        craftPcVar[0] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/estudos-question1.html");
    });


   //Escolhas 2 - JOGOS
   $("#conteudo-incluso").on('click','#jogos-pesados' ,function(){
        craftPcVar[1] = 3;  
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-pesados.html");
    });

   $("#conteudo-incluso").on('click','#jogos-medios' ,function(){
        craftPcVar[1] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-medios.html");
    });

   $("#conteudo-incluso").on('click','#jogos-leves' ,function(){
        craftPcVar[1] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/jogos-leves.html");
    });

   //Escolhas 2 - ESTUDOS
   $("#conteudo-incluso").on('click','#estudos-pesados' ,function(){
        craftPcVar[1] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/estudos-pesados.html");
    });

   $("#conteudo-incluso").on('click','#estudos-medios' ,function(){
        craftPcVar[1] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/estudos-medios.html");
   });

   $("#conteudo-incluso").on('click','#estudos-leves' ,function(){
        craftPcVar[1] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/estudos-leves.html");
   });


   //Escolhas 2 - TRABALHOS
   $("#conteudo-incluso").on('click','#trabalho-pesados' ,function(){
        craftPcVar[1] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/trabalho-pesados.html");
    });

   $("#conteudo-incluso").on('click','#trabalho-medios' ,function(){
        craftPcVar[1] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/trabalho-medios.html");
   });

   $("#conteudo-incluso").on('click','#trabalho-leves' ,function(){
        craftPcVar[1] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/trabalho-leves.html");
   });    

    
   //Escolhas FINAIS - JOGOS
   $("#conteudo-incluso").on('click','#jogos-pesado-fraco' ,function(){
        craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");


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

   $("#conteudo-incluso").on('click','#jogos-pesado-medio' ,function(){
        craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");


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

   $("#conteudo-incluso").on('click','#jogos-pesado-forte' ,function(){
        craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

   $("#conteudo-incluso").on('click','#jogos-medio-fraco' ,function(){
        craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

   $("#conteudo-incluso").on('click','#jogos-medio-medio' ,function(){
        craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

   $("#conteudo-incluso").on('click','#jogos-medio-forte' ,function(){
        craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

    $("#conteudo-incluso").on('click','#jogos-leve-fraco' ,function(){
        craftPcVar[2] = 1;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

    $("#conteudo-incluso").on('click','#jogos-leve-medio' ,function(){
        craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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
    $("#conteudo-incluso").on('click','#jogos-leve-forte' ,function(){
        craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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


    //Escolhas FINAIS - ESTUDOS
    $("#conteudo-incluso").on('click','#estudos-pesado-fraco' ,function(){
         craftPcVar[2] = 1;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");


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

    $("#conteudo-incluso").on('click','#estudos-pesado-medio' ,function(){
         craftPcVar[2] = 2;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");


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

    $("#conteudo-incluso").on('click','#estudos-pesado-forte' ,function(){
         craftPcVar[2] = 3;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

    $("#conteudo-incluso").on('click','#estudos-medio-fraco' ,function(){
         craftPcVar[2] = 1;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

    $("#conteudo-incluso").on('click','#estudos-medio-medio' ,function(){
         craftPcVar[2] = 2;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

    $("#conteudo-incluso").on('click','#estudos-medio-forte' ,function(){
         craftPcVar[2] = 3;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

     $("#conteudo-incluso").on('click','#estudos-leve-fraco' ,function(){
         craftPcVar[2] = 1;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

     $("#conteudo-incluso").on('click','#estudos-leve-medio' ,function(){
        craftPcVar[2] = 2;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

     $("#conteudo-incluso").on('click','#estudos-leve-forte' ,function(){
        craftPcVar[2] = 3;
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("components/resultado.html");

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

     //Escolhas FINAIS - TRABALHO
     $("#conteudo-incluso").on('click','#trabalho-pesado-fraco' ,function(){
          craftPcVar[2] = 1;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");


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

     $("#conteudo-incluso").on('click','#trabalho-pesado-medio' ,function(){
          craftPcVar[2] = 2;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");


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

     $("#conteudo-incluso").on('click','#trabalho-pesado-forte' ,function(){
          craftPcVar[2] = 3;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");

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

     $("#conteudo-incluso").on('click','#trabalho-medio-fraco' ,function(){
          craftPcVar[2] = 1;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");

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

     $("#conteudo-incluso").on('click','#trabalho-medio-medio' ,function(){
          craftPcVar[2] = 2;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");

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

     $("#conteudo-incluso").on('click','#trabalho-medio-forte' ,function(){
          craftPcVar[2] = 3;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");

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

      $("#conteudo-incluso").on('click','#trabalho-leve-fraco' ,function(){
          craftPcVar[2] = 1;
          $("#conteudo-incluso").empty();
          $("#conteudo-incluso").load("components/resultado.html");

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

      $("#conteudo-incluso").on('click','#trabalho-leve-medio' ,function(){
         craftPcVar[2] = 2;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

      $("#conteudo-incluso").on('click','#trabalho-leve-forte' ,function(){
         craftPcVar[2] = 3;
         $("#conteudo-incluso").empty();
         $("#conteudo-incluso").load("components/resultado.html");

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

    