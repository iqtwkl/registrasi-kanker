<?php
namespace App\Modules\Diagnosa\Contracts;

use App\Http\Requests\Diagnosa\StoreRequest;
use App\Http\Requests\Diagnosa\UpdateRequest;

interface DiagnosaContract {
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}