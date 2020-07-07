<?php
namespace App\Http\Controllers\Terapi;

use App\Http\Controllers\Controller;
use App\Http\Requests\Terapi\StoreRequest;
use App\Http\Requests\Terapi\UpdateRequest;
use App\Modules\Terapi\Contracts\TerapiContract;
use Illuminate\Http\Request;

class TerapiAjaxController extends Controller {

    private $terapiContract;

    public function __construct(TerapiContract $terapiContract)
    {
        $this->middleware("auth");
        $this->terapiContract = $terapiContract;
    }

    public function getAll(Request $request) {
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search];
        $sort = ['tglPeriksa', 'DESC'];
        $result = $this->terapiContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->terapiContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->terapiContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->terapiContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->terapiContract->remove($id);
    }
}