<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:02
 */

namespace App\Modules\Pekerjaan\Contracts;

use App\Http\Requests\Pekerjaan\StoreRequest;
use App\Http\Requests\Pekerjaan\UpdateRequest;

interface PekerjaanContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}