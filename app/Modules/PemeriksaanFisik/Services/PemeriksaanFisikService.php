<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 10:12 AM
 */

namespace App\Modules\PemeriksaanFisik\Services;

use App\Http\Requests\PemeriksaanFisik\StoreRequest;
use App\Http\Requests\PemeriksaanFisik\UpdateRequest;
use App\Modules\PemeriksaanFisik\Contracts\PemeriksaanFisikContract;
use App\Modules\PemeriksaanFisik\Repositories\IPemeriksaanFisikRepository;

class PemeriksaanFisikService implements PemeriksaanFisikContract{

    private $repository;

    public function __construct(IPemeriksaanFisikRepository $repository){
        $this->repository = $repository;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array()){
        return $this->repository->getAll($search, $offset, $limit, $sort);
    }

    public function getById($id){
        return $this->repository->getById($id);
    }

    public function store(StoreRequest $request){
        $data = [];
        return $this->repository->store($data);
    }

    public function update(UpdateRequest $request){
        $id = $request->input("id");
        $data = [];
        return $this->repository->update($data, $id);
    }

    public function remove($id){
        return $this->repository->remove($id);
    }
}