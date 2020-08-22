<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 10:08 AM
 */

namespace App\Modules\PemeriksaanFisik\Contracts;

use App\Http\Requests\PemeriksaanFisik\StoreRequest;
use App\Http\Requests\PemeriksaanFisik\UpdateRequest;

interface PemeriksaanFisikContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store($data);
    public function update($data, $id);
    public function remove($id);
}