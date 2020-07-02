<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:37 AM
 */

namespace App\Http\Controllers\StatusPernikahan;

use App\Http\Controllers\Controller;
use App\Http\Requests\StatusPernikahan\StoreRequest;
use App\Http\Requests\StatusPernikahan\UpdateRequest;
use App\Modules\StatusPernikahan\Contracts\StatusPernikahanContract;
use Illuminate\Http\Request;

class StatusPernikahanAjaxController extends Controller
{
    private $statusPernikahanContract;

    public function __construct(StatusPernikahanContract $statusPernikahanContract)
    {
        $this->middleware('auth');
        $this->statusPernikahanContract = $statusPernikahanContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search, "email" => $search];
        $result = $this->statusPernikahanContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->statusPernikahanContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->statusPernikahanContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->statusPernikahanContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->statusPernikahanContract->remove($id);
    }
}