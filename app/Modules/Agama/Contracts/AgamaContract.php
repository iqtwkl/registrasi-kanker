<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:02
 */

namespace App\Modules\Agama\Contracts;

use App\Http\Requests\Agama\StoreRequest;
use App\Http\Requests\Agama\UpdateRequest;

interface AgamaContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}