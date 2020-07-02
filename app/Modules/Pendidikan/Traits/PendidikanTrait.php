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

    public function getCreatedBy(){
        return $this->created_by;
    }

    public function getCreatedAt(){
        return $this->created_at;
    }

    public function getLastUpdatedBy(){
        return $this->last_updated_by;
    }

    public function getUpdatedAt(){
        return $this->updated_at;
    }
}