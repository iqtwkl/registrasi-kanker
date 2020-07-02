<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:27
 */


namespace App\Modules\StatusPernikahan\Services;

use App\Http\Requests\StatusPernikahan\StoreRequest;
use App\Http\Requests\StatusPernikahan\UpdateRequest;
use App\Modules\StatusPernikahan\Contracts\StatusPernikahanContract;
use App\Modules\StatusPernikahan\Repositories\IStatusPernikahanRepository;

class StatusPernikahanService implements StatusPernikahanContract{

    private $repository;

    public function __construct(IStatusPernikahanRepository $repository){
        $this->repository = $repository;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array()){
        return $this->repository->getAll($search, $offset, $limit, $sort);
    }

    public function getById($id){
        return $this->repository->getById($id);
    }

    public function store(StoreRequest $request){
        $data = [
            'nama' => $request->input('nama'),
            'created_by' => Auth::user()->getAuthIdentifier(),
            'last_updated_by' => Auth::user()->getAuthIdentifier()
        ];
        return $this->repository->store($data);
    }

    public function update(UpdateRequest $request){
        $id = $request->input("id");
        $data = [
            'nama' => $request->input('nama'),
            'last_updated_by' => Auth::user()->getAuthIdentifier()
        ];
        return $this->repository->update($data, $id);
    }

    public function remove($id){
        return $this->repository->remove($id);
    }
}