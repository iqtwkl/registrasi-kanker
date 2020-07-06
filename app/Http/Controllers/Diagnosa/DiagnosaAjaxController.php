<?php
namespace App\Http\Controllers\Diagnosa;

use App\Http\Controllers\Controller;
use App\Http\Requests\Diagnosa\StoreRequest;
use App\Http\Requests\Diagnosa\UpdateRequest;
use App\Modules\Diagnosa\Contracts\DiagnosaContract;
use Illuminate\Http\Request;

class DiagnosaAjaxController extends Controller{
    private $diagnosaContract;

    public function __construct(DiagnosaContract $diagnosaContract)
    {
        $this->middleware('auth');
        $this->diagnosaContract = $diagnosaContract;
    }

    public function getAll(Request $request) {
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search];
        $sort = ['tglPeriksa', 'DESC'];
        $result = $this->diagnosaContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->diagnosaContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->diagnosaContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->diagnosaContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->diagnosaContract->remove($id);
    }
}
