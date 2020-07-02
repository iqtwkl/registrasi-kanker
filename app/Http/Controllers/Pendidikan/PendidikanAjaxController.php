<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:36 AM
 */

namespace App\Http\Controllers\Pendidikan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pendidikan\StoreRequest;
use App\Http\Requests\Pendidikan\UpdateRequest;
use App\Modules\Pendidikan\Contracts\PendidikanContract;
use Illuminate\Http\Request;

class PendidikanAjaxController extends Controller
{
    private $pendidikanContract;

    public function __construct(PendidikanContract $pendidikanContract)
    {
        $this->middleware('auth');
        $this->pendidikanContract = $pendidikanContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search, "email" => $search];
        $result = $this->pendidikanContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->pendidikanContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->pendidikanContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->pendidikanContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->pendidikanContract->remove($id);
    }
}