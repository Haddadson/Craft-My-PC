/*
Created: 16/05/2018
Modified: 16/05/2018
Model: MySQL 5.7
Database: MySQL 5.7
*/


-- Create tables section -------------------------------------------------

-- Table Mapeamento

CREATE TABLE `Mapeamento`
(
  `cod_escolha1` Int(1) NOT NULL,
  `cod_escolha2` Int(1) NOT NULL,
  `cod_escolha3` Int(1) NOT NULL,
  `cod_config` Int(11) NOT NULL,
  `cod_pc` Serial NOT NULL,
  `txt_descricao` Char(200) NOT NULL
)
;

ALTER TABLE `Mapeamento` ADD PRIMARY KEY (`cod_escolha1`,`cod_escolha2`,`cod_escolha3`,`cod_config`,`cod_pc`)
;

-- Table Computador

CREATE TABLE `Computador`
(
  `cod_pc` Serial NOT NULL,
  `cod_config` Int(11) NOT NULL,
  `qtd_armazenamento` Char(100) NOT NULL,
  `nom_placaMae` Char(100) NOT NULL,
  `nom_processador` Char(100) NOT NULL,
  `qtd_ram` Char(100) NOT NULL,
  `nom_placaVideo` Char(100) NOT NULL,
  `nom_fonte` Char(100) NOT NULL
)
;

ALTER TABLE `Computador` ADD PRIMARY KEY (`cod_config`,`cod_pc`)
;

-- Create foreign keys (relationships) section ------------------------------------------------- 


ALTER TABLE `Mapeamento` ADD CONSTRAINT `Relationship1` FOREIGN KEY (`cod_config`, `cod_pc`) REFERENCES `Computador` (`cod_config`, `cod_pc`) ON DELETE RESTRICT ON UPDATE RESTRICT
;



INSERT INTO `computador` (`cod_pc`, `cod_config`, `qtd_armazenamento`, `nom_placaMae`, `nom_processador`, `qtd_ram`, `nom_placaVideo`, `nom_fonte`) VALUES ('1', '11', 'Western Digital HDD Blue 500GB 3.5\" 7200RPM', 'Gigabyte GA-B75M-D3H', 'Intel Core i3-3210 3.2GHz Dual-Core', 'Kingston KVR16N11S6/2 2GB DDR3-1600', 'EVGA GeForce 210 1GB ', 'Cooler Master Elite Power 350W ATX12V');
INSERT INTO `computador` (`cod_pc`, `cod_config`, `qtd_armazenamento`, `nom_placaMae`, `nom_processador`, `qtd_ram`, `nom_placaVideo`, `nom_fonte`) VALUES (NULL, '11', 'Seagate HDD Desktop HDD 500GB 3.5\" 7200RPM 	', 'ASRock A320M-DGS Micro ATX AM4', 'AMD A8 9600 APU 3.1GHz Quad-Core', 'Corsair ValueSelect (Preto) 4GB (1x4GB) DDR4-2133', 'Gigabyte GeForce GTX 750 Ti 1GB GeForce 700 Series', 'Corsair CX430M 430W Certificado 80+ Bronze Modular ATX12V');
INSERT INTO `computador` (`cod_pc`, `cod_config`, `qtd_armazenamento`, `nom_placaMae`, `nom_processador`, `qtd_ram`, `nom_placaVideo`, `nom_fonte`) VALUES (NULL, '12', 'Intel SSD 750 Series 800GB PCI-E', 'Gigabyte GA-B75M-D3H Micro ATX LGA 1155', 'Intel Core i3-3210 3.2GHz Dual-Core', 'Multilaser Desktop (Verde) 4GB (1x4GB) DDR3-1600', 'Asus Radeon R7 250 1GB Radeon R7 200 Series', 'OnePower MP500W3-I 500W ATX');


INSERT INTO `mapeamento` (`cod_escolha1`, `cod_escolha2`, `cod_escolha3`, `cod_pc`, `cod_config`, `txt_descricao`) VALUES ('1', '1', '1', '1', '11', 'Você precisará de um computador muito simples, nada de grande porte, suportando apenas os jogos mais básicos para realizar a atividade de jogar.');

