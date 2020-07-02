<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 10:50
 */

namespace App\Modules\Users\Traits;

trait UserTrait{
    public function getId(){
        return $this->id;
    }

    public function getName(){
        return $this->name;
    }

    public function getEmail(){
        return $this->email;
    }

    public function getParent(){
        return $this->parent;
    }

    public function getHakAkses(){
        return $this->hak_akses;
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