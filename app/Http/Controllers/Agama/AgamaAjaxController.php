<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:28 AM
 */

namespace App\Http\Controllers\Agama;

use App\Http\Controllers\Controller;
use App\Http\Requests\Agama\StoreRequest;
use App\Http\Requests\Agama\UpdateRequest;
use App\Modules\Agama\Contracts\AgamaContract;
use Illuminate\Http\Request;

class AgamaAjaxController extends Controller{
    /**
     * @var agamaContract
     */
    private $agamaContract;

    public function __construct(AgamaContract $agamaContract)
    {
        $this->middleware('auth');
        $this->agamaContract = $agamaContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["nama" => $search];
        return $this->agamaContract->getAll($searchArr, $offset, $limit, $sort);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->agamaContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->agamaContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->agamaContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->agamaContract->remove($id);
    }
}