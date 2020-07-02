<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:31 AM
 */

namespace App\Http\Controllers\Dirujuk;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dirujuk\StoreRequest;
use App\Http\Requests\Dirujuk\UpdateRequest;
use App\Modules\Dirujuk\Contracts\DirujukContract;
use Illuminate\Http\Request;

class DirujukAjaxController extends Controller{
    /**
     * @var dirujukContract
     */
    private $dirujukContract;

    public function __construct(DirujukContract $dirujukContract)
    {
        $this->middleware('auth');
        $this->dirujukContract = $dirujukContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["nama" => $search, "no_rekam_medis" => $search];
        return $this->dirujukContract->getAll($searchArr, $offset, $limit, $sort);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->dirujukContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->dirujukContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->dirujukContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->dirujukContract->remove($id);
    }
}