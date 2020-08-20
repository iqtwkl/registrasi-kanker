<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:32
 */

namespace App\Modules\Dirujuk\Contracts;

use App\Http\Requests\Dirujuk\StoreRequest;
use App\Http\Requests\Dirujuk\UpdateRequest;

interface DirujukContract{
    public function all();
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}