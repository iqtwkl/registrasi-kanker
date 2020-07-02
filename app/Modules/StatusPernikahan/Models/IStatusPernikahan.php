<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:22
 */

namespace App\Modules\StatusPernikahan\Models;

interface IStatusPernikahan{
    public function getId();

    public function getNama();

    public function getCreatedBy();

    public function getCreatedAt();

    public function getLastUpdatedBy();

    public function getUpdatedAt();
}