<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:17
 */

namespace App\Modules\Pekerjaan\Traits;

trait PekerjaanTrait{
    public function getId(){
        return $this->id;
    }
    public function getNama(){
        return $this->nama;
    }
}