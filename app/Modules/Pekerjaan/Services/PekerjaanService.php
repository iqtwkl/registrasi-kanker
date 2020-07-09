<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:15
 */


namespace App\Modules\Pekerjaan\Services;

use App\Http\Requests\Pekerjaan\StoreRequest;
use App\Http\Requests\Pekerjaan\UpdateRequest;
use App\Modules\Pekerjaan\Contracts\PekerjaanContract;
use App\Modules\Pekerjaan\Repositories\IPekerjaanRepository;
use Illuminate\Support\Facades\Auth;

class PekerjaanService implements PekerjaanContract{

    private $repository;

    public function __construct(IPekerjaanRepository $repository){
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