<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:45
 */


namespace App\Modules\Dirujuk\Services;

use App\Http\Requests\Dirujuk\StoreRequest;
use App\Http\Requests\Dirujuk\UpdateRequest;
use App\Modules\Dirujuk\Contracts\DirujukContract;
use App\Modules\Dirujuk\Repositories\IDirujukRepository;

class DirujukService implements DirujukContract{

    private $repository;

    public function __construct(IDirujukRepository $repository){
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