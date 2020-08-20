<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:25
 */

namespace App\Modules\StatusPernikahan\Contracts;

use App\Http\Requests\StatusPernikahan\StoreRequest;
use App\Http\Requests\StatusPernikahan\UpdateRequest;

interface StatusPernikahanContract{
    public function all();
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}