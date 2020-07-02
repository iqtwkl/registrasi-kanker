<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 8:40 AM
 */

namespace App\Modules\Anamnesis\Repositories;

interface IAnamnesisRepository{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(array $data);
    public function update(array $data, $id);
    public function remove($id);
}