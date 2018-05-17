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
  `cod_pc` Serial NOT NULL,
  `cod_config` Int(11) NOT NULL,
  `txt_descricao` Char(200) NOT NULL
)
;

CREATE INDEX `IX_Relationship1` ON `Mapeamento` (`cod_config`,`cod_pc`)
;

ALTER TABLE `Mapeamento` ADD PRIMARY KEY (`cod_escolha1`,`cod_escolha2`,`cod_escolha3`)
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


