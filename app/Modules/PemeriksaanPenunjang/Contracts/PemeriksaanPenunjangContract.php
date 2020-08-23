<?php
namespace App\Modules\PemeriksaanPenunjang\Contracts;

use App\Http\Requests\PemeriksaanPenunjang\StoreRequest;
use App\Http\Requests\PemeriksaanPenunjang\UpdateRequest;

interface PemeriksaanPenunjangContract {
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store($data);
    public function update($data, $id);
    public function remove($id);
}