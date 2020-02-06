<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:17
 */

namespace App\Modules\Agama\Traits;

trait AgamaTrait{
    public function getId(){
        return $this->id;
    }
    public function getNama(){
        return $this->nama;
    }
}