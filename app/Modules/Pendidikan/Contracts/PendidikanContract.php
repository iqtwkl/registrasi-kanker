<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:33
 */

namespace App\Modules\Pendidikan\Contracts;

use App\Http\Requests\Pendidikan\StoreRequest;
use App\Http\Requests\Pendidikan\UpdateRequest;

interface PendidikanContract{
    public function all();
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}