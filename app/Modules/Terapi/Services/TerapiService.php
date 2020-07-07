<?php
namespace App\Modules\Terapi\Services;

use App\Http\Requests\Terapi\StoreRequest;
use App\Http\Requests\Terapi\UpdateRequest;
use App\Modules\Terapi\Contracts\TerapiContract;
use App\Modules\Terapi\Repositories\ITerapiRepository;
use Illuminate\Contracts\Cache\Store;

class TerapiService implements TerapiContract{
    private $terapiRepository; 

    public function __construct(ITerapiRepository $terapiRepository)
    {
        $this->terapiRepository = $terapiRepository;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array())
    {
        return $this->terapiRepository->getAll($search, $offset, $limit, $sort);
    }

    public function getById($id)
    {
        return $this->terapiRepository->getById($id);
    }

    public function store(StoreRequest $request)
    {
        $data = [];
        return $this->terapiRepository->store($data);
    }

    public function update(UpdateRequest $request)
    {
        $id = $request->input("id");
        $data = [];
        return $this->terapiRepository->update($data, $id);
    }

    public function remove($id)
    {
        return $this->terapiRepository->remove($id);
    }
}