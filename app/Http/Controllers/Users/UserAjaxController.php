<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\StoreRequest;
use App\Http\Requests\Users\UpdateRequest;
use App\Modules\Users\Contracts\UserContract;
use Illuminate\Http\Request;

class UserAjaxController extends Controller
{
    private $userContract;

    public function __construct(UserContract $userContract)
    {
        $this->middleware('auth');
        $this->userContract = $userContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search, "email" => $search];
        $result = $this->userContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->userContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->userContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->userContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->userContract->remove($id);
    }
}