<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:30
 */

namespace App\Modules\Pendidikan\Traits;

trait PendidikanTrait{
    public function getId(){
        return $this->id;
    }
    public function getNama(){
        return $this->nama;
    }
}