<?php  

$parametro0 = $_POST['param0'];
$parametro1 = $_POST['param1'];
$parametro2 = $_POST['param2'];

$link = mysqli_connect("localhost", "root", "");
if (!$link) {
    die('Could not connect: ' . mysqli_error($link));
}

mysqli_select_db("craft-my-pc", $link);
$sql = "SELECT pc.nom_placaMae, pc.nom_processador, pc.nom_placaVideo, pc.qtd_ram, pc.qtd_armazenamento, pc.nom_fonte from mapeamento map INNER JOIN computador pc ON map.cod_pc = pc.cod_pc AND map.cod_config = pc.cod_config			where map.cod_escolha1 = '".$parametro0."' and map.cod_escolha2 ='".$parametro1."'and map.cod_escolha3 ='".$parametro2."'";

$result = mssqli_query($sql); 
while ($results = mssqli_fetch_array($result)) {
    $nom_placaMae = $results['nom_placaMae'];
    $nom_processador = $results['nom_processador'];
    $nom_placaVideo = $results['nom_placaVideo'];
    $qtd_ram = $results['qtd_ram'];
    $qtd_armazenamento = $results['qtd_armazenamento'];
    $nom_fonte = $results['nom_fonte'];
}

?>