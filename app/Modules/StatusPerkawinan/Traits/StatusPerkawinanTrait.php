<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:23
 */

namespace App\Modules\StatusPerkawinan\Traits;

trait StatusPerkawinanTrait{
    public function getId(){
        return $this->id;
    }
    public function getNama(){
        return $this->nama;
    }
}