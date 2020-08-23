<?php
namespace App\Modules\PemeriksaanPenunjang\Services;

use App\Http\Requests\PemeriksaanPenunjang\StoreRequest;
use App\Http\Requests\PemeriksaanPenunjang\UpdateRequest;
use App\Modules\PemeriksaanPenunjang\Contracts\PemeriksaanPenunjangContract;
use App\Modules\PemeriksaanPenunjang\Repositories\IPemeriksaanPenunjangRepository;

class PemeriksaanPenunjangService implements PemeriksaanPenunjangContract{

    private $repository;

    public function __construct(IPemeriksaanPenunjangRepository $repository)
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

    public function store($data)
    {
        return $this->repository->store($data);
    }

    public function update($data, $id)
    {
        return $this->repository->update($data, $id);
    }

    public function remove($id) 
    {
        return $this->repository->remove($id);
    }
}