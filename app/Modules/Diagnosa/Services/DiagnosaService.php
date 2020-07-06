<?php
namespace App\Modules\Diagnosa\Services;

use App\Http\Requests\Diagnosa\StoreRequest;
use App\Http\Requests\Diagnosa\UpdateRequest;
use App\Modules\Diagnosa\Contracts\DiagnosaContract;
use App\Modules\Diagnosa\Repositories\DiagnosaRepository;

class DiagnosaService implements DiagnosaContract{

    private $repository;

    public function __construct(DiagnosaRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array())
    {
        return $this->repository->getAll($search, $offset, $limit, $sort);
    }

    public function getById($id)
    {
        return $this->repository->getById($id);
    }

    public function store(StoreRequest $request)
    {
        $data = [];
        return $this->repository->store($data);
    }

    public function update(UpdateRequest $request)
    {
        $id = $request->input("id");
        $data = [];
        return $this->repository->update($data, $id);
    }

    public function remove($id)
    {
        return $this->repository->remove($id);
    }
}