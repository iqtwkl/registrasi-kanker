<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:44
 */

namespace App\Modules\Users\Contracts;

use App\Http\Requests\Users\StoreRequest;
use App\Http\Requests\Users\UpdatePasswordRequest;
use App\Http\Requests\Users\UpdateRequest;

interface UserContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function updatePassword(UpdatePasswordRequest $request);
    public function remove($id);
}