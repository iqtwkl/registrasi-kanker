<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 10:35
 */

namespace App\Modules\Users\Models;

interface IUser{
    public function getId();

    public function getName();

    public function getEmail();

    public function getParent();

    public function getHakAkses();

    public function getCreatedBy();

    public function getCreatedAt();

    public function getLastUpdatedBy();

    public function getUpdatedAt();
}