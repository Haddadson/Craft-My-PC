<?php  

$parametro0 = $_REQUEST['param0'];
$parametro1 = $_REQUEST['param1'];
$parametro2 = $_REQUEST['param2'];

require_once 'conexao.php';


$sql = "SELECT map.txt_descricao, pc.nom_placaMae, pc.nom_processador, pc.nom_placaVideo, pc.qtd_ram, pc.qtd_armazenamento, pc.nom_fonte, pc.vlr_preco from mapeamento map INNER JOIN computador pc ON map.cod_pc = pc.cod_pc AND map.cod_config = pc.cod_config where map.cod_escolha1 = '".$parametro0."' and map.cod_escolha2 ='".$parametro1."'and map.cod_escolha3 ='".$parametro2."'";
$dados = [];

$p_sql = Conexao::getInstance()->prepare($sql);
try {
    $execute = $p_sql->execute();
    $dados = $p_sql->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($dados));
} catch (PDOException $e) {
    echo ($e->getMessage());
}

?>