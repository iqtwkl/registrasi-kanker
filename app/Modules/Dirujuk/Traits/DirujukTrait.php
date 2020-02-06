<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:17
 */

namespace App\Modules\Dirujuk\Traits;

trait DirujukTrait{
    public function getId(){
        return $this->id;
    }
    public function getNama(){
        return $this->nama;
    }
}