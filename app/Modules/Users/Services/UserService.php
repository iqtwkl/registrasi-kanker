<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:46
 */


namespace App\Modules\Users\Services;

use App\Http\Requests\Users\StoreRequest;
use App\Http\Requests\Users\UpdatePasswordRequest;
use App\Http\Requests\Users\UpdateRequest;
use App\Modules\Users\Contracts\UserContract;
use App\Modules\Users\Repositories\IUserRepository;

class UserService implements UserContract{

    private $repository;

    public function __construct(IUserRepository $repository){
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

    public function updatePassword(UpdatePasswordRequest $request)
    {
        $id = $request->input("id");
        $data = [];
        return $this->repository->update($data, $id);
    }


    public function remove($id){
        return $this->repository->remove($id);
    }
}