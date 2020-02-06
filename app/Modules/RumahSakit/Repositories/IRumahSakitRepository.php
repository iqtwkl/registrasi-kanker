<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:48
 */

namespace App\Modules\RumahSakit\Repositories;

interface IRumahSakitRepository{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(array $data);
    public function update(array $data, $id);
    public function remove($id);
}