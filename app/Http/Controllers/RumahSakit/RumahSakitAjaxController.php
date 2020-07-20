<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:36 AM
 */

namespace App\Http\Controllers\RumahSakit;

use App\Http\Controllers\Controller;
use App\Http\Requests\RumahSakit\StoreRequest;
use App\Http\Requests\RumahSakit\UpdateRequest;
use App\Modules\RumahSakit\Contracts\RumahSakitContract;
use Illuminate\Http\Request;

class RumahSakitAjaxController extends Controller
{
    private $rumahSakitContract;

    public function __construct(RumahSakitContract $rumahSakitContract)
    {
        $this->middleware('auth');
        $this->rumahSakitContract = $rumahSakitContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["nama" => $search, "kode" => $search];
        $result = $this->rumahSakitContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->rumahSakitContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->rumahSakitContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->rumahSakitContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->rumahSakitContract->remove($id);
    }
}