<?php
namespace App\Modules\PemeriksaanPenunjang\Contracts;

use App\Http\Requests\PemeriksaanPenunjang\StoreRequest;
use App\Http\Requests\PemeriksaanPenunjang\UpdateRequest;

interface PemeriksaanPenunjangContract {
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}