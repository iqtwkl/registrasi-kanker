<?php
namespace App\Modules\PemeriksaanPenunjang\Repositories;


interface IPemeriksaanPenunjangRepository {
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(array $data);
    public function update(array $data, $id);
    public function remove($id);
}