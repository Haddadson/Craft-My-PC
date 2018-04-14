$(document).ready(function(){
    $("#start-button").click(function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("../../pages/components/initial-question.html");
    });
});