<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:23
 */

namespace App\Modules\StatusPernikahan\Traits;

trait StatusPernikahanTrait{
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