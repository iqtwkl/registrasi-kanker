<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:44
 */

namespace App\Modules\Pasien\Contracts;

use App\Http\Requests\Pasien\StoreRequest;
use App\Http\Requests\Pasien\UpdateRequest;

interface PasienContract{
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array());
    public function getById($id);
    public function store(StoreRequest $request);
    public function update(UpdateRequest $request);
    public function remove($id);
}