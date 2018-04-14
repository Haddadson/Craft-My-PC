$(document).ready(function(){
    $("#start-button").click(function(){
        $("#conteudo-incluso").empty();
        $("#conteudo-incluso").load("../Craft-My-PC/pages/components/initial-question.html");
    });
});