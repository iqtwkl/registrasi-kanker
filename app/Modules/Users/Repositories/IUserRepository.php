<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:48
 */

namespace App\Modules\Users\Repositories;

interface IUserRepository{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(array $data);
    public function update(array $data, $id);
    public function remove($id);
}