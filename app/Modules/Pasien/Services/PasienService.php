<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:46
 */


namespace App\Modules\Pasien\Services;

use App\Http\Requests\Pasien\StoreRequest;
use App\Http\Requests\Pasien\UpdateRequest;
use App\Modules\Pasien\Contracts\PasienContract;
use App\Modules\Pasien\Repositories\IPasienRepository;

class PasienService implements PasienContract{

    private $repository;

    public function __construct(IPasienRepository $repository){
        $this->repository = $repository;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array()){
        return $this->repository->getAll($search, $offset, $limit, $sort);
    }

    public function getById($id){
        return $this->repository->getById($id);
    }

    public function store($data){
        return $this->repository->store($data);
    }

    public function update($data, $id){
        return $this->repository->update($data, $id);
    }

    public function remove($id){
        return $this->repository->remove($id);
    }
}