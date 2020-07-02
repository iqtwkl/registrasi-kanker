<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:35
 */

namespace App\Modules\RumahSakit\Models;

interface IRumahSakit{
    public function getId();
    public function getKodeRs();
    public function getNama();
    public function getAlamat();
    public function getCreatedAt();
    public function getCreatedBy();
    public function getUpdatedAt();
    public function getLastUpdatedBy();
}