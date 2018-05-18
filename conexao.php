<?php

class Conexao {

    public static $instance;
    public static $conn;
    public static $postgre;


    
    //public static $instance1;

    private function __construct() {
        
    }

  #Conexao com mysql :: INFO GED

    public static function getInstance() {
        if (!isset(self::$instance)) {
            self::$instance = new PDO("mysql:host=localhost;port=3306;dbname=craft-my-pc", "root", "", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$instance->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
        }
        return self::$instance;
    }

}