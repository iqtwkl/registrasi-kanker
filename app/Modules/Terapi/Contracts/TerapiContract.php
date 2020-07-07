<?php
namespace App\Modules\Terapi\Contracts;

use App\Http\Requests\Terapi\StoreRequest;
use App\Http\Requests\Terapi\UpdateRequest;

interface TerapiContract {
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}