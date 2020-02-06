<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:27
 */


namespace App\Modules\StatusPerkawinan\Services;

use App\Http\Requests\StatusPerkawinan\StoreRequest;
use App\Http\Requests\StatusPerkawinan\UpdateRequest;
use App\Modules\StatusPerkawinan\Contracts\StatusPerkawinanContract;
use App\Modules\StatusPerkawinan\Repositories\IStatusPerkawinanRepository;

class StatusPerkawinanService implements StatusPerkawinanContract{

    private $repository;

    public function __construct(IStatusPerkawinanRepository $repository){
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