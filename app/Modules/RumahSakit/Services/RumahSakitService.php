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
use Illuminate\Support\Facades\Auth;

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
        $data = [
            'kode' => $request->input('kode'),
            'nama' => $request->input('nama'),
            'alamat' => $request->input('alamat'),
            'created_by' => Auth::user()->getAuthIdentifier(),
            'last_updated_by' => Auth::user()->getAuthIdentifier()
        ];
        return $this->repository->store($data);
    }

    public function update(UpdateRequest $request){
        $id = $request->input("id");
        $data = [
            'kode' => $request->input('kode'),
            'nama' => $request->input('nama'),
            'alamat' => $request->input('alamat'),
            'last_updated_by' => Auth::user()->getAuthIdentifier()
        ];
        return $this->repository->update($data, $id);
    }

    public function remove($id){
        return $this->repository->remove($id);
    }
}