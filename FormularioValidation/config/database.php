<?php

class DataBase
{
    private  $hostname = "localhost";
    private $dataBase = "tiendaonline";
    private $username = "root";
    private $password = "";
    private $charset = "utf8";

    function conectar()
    {
        try {
            $conection = "mysql:host=" . $this->hostname . ";dbname=" . $this->dataBase . ";charset=" . $this->charset;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false
            ];

            $pdo = new pdo($conection, $this->username, $this->password, $options);
            return $pdo;
        } catch (PDOException $e) {
            echo 'ERROR EN LA CONEXION ' . $e->getMessage();
            exit;
        }
    }
}
