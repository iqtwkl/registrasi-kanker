<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 8:39 AM
 */

namespace App\Modules\Anamnesis\Contracts;

use App\Http\Requests\Anamnesis\StoreRequest;
use App\Http\Requests\Anamnesis\UpdateRequest;

interface AnamnesisContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}