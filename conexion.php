<?php

class conexion {


    private $con;

    public function __construct() {
        
    }

    public function conectar() {
        if ($this->con = new mysqli("piscina.db.12846778.hostedresource.com", "piscina", "MarioBross14!", "piscina")) {
                return true;
        }
    }

    public function getcon() {
        return $this->con;
    }

}
