<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:46
 */


namespace App\Modules\RumahSakit\Services;

use App\Http\Requests\RumahSakit\StoreRequest;
use App\Http\Requests\RumahSakit\UpdateRequest;
use App\Modules\RumahSakit\Contracts\RumahSakitContract;
use App\Modules\RumahSakit\Repositories\IRumahSakitRepository;

class RumahSakitService implements RumahSakitContract{

    private $repository;

    public function __construct(IRumahSakitRepository $repository){
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