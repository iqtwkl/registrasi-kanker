<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:50
 */

namespace App\Modules\RumahSakit\Traits;

trait RumahSakitTrait{
    public function getId(){
        return $this->id;
    }

    public function getKodeRs(){
        return $this->kode;
    }

    public function getNama(){
        return $this->nama;
    }

    public function getAlamat(){
        return $this->alamat;
    }

    public function getCreatedAt(){
        return $this->created_at;
    }

    public function getCreatedBy(){
        return $this->created_by;
    }

    public function getUpdatedAt(){
        return $this->updated_at;
    }

    public function getLastUpdatedBy(){
        return $this->last_updated_by;
    }
}