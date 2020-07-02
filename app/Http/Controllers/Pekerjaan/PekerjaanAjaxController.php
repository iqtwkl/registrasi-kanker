<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:35 AM
 */

namespace App\Http\Controllers\Pekerjaan;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pekerjaan\StoreRequest;
use App\Http\Requests\Pekerjaan\UpdateRequest;
use App\Modules\Pekerjaan\Contracts\PekerjaanContract;
use Illuminate\Http\Request;

class PekerjaanAjaxController extends Controller
{
    private $pekerjaanContract;

    public function __construct(PekerjaanContract $pekerjaanContract)
    {
        $this->middleware('auth');
        $this->pekerjaanContract = $pekerjaanContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search, "email" => $search];
        $result = $this->pekerjaanContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->pekerjaanContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->pekerjaanContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->pekerjaanContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->pekerjaanContract->remove($id);
    }
}