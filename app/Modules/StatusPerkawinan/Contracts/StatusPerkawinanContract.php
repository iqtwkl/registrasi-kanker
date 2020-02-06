<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:25
 */

namespace App\Modules\StatusPerkawinan\Contracts;

use App\Http\Requests\StatusPerkawinan\StoreRequest;
use App\Http\Requests\StatusPerkawinan\UpdateRequest;

interface StatusPerkawinanContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}