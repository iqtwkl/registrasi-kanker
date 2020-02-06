<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:44
 */

namespace App\Modules\RumahSakit\Contracts;

use App\Http\Requests\RumahSakit\StoreRequest;
use App\Http\Requests\RumahSakit\UpdateRequest;

interface RumahSakitContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}