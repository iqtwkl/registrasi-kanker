<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:05
 */

namespace App\Modules\Pekerjaan\Models;

interface IPekerjaan{
    public function getId();

    public function getNama();

    public function getCreatedBy();

    public function getCreatedAt();

    public function getLastUpdatedBy();

    public function getUpdatedAt();
}