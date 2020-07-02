<?php
<<<<<<< HEAD

=======
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 7:33 PM
 */
>>>>>>> origin/zul

namespace App\Http\Controllers\Anamnesis;

use App\Http\Controllers\Controller;
<<<<<<< HEAD
use App\Modules\Anamnesis\Contracts\AnamnesisContract;
use Illuminate\Http\Request;

class AnamnesisAjaxController extends Controller
{
=======
use App\Http\Requests\Anamnesis\StoreRequest;
use App\Http\Requests\Anamnesis\UpdateRequest;
use App\Modules\Anamnesis\Contracts\AnamnesisContract;
use Illuminate\Http\Request;

class AnamnesisAjaxController extends Controller{
>>>>>>> origin/zul
    /**
     * @var AnamnesisContract
     */
    private $anamnesisContract;

    public function __construct(AnamnesisContract $anamnesisContract)
    {
        $this->middleware('auth');
        $this->anamnesisContract = $anamnesisContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

<<<<<<< HEAD
        $searchArr = ["nama" => $search, "no_rekam_medis" => $search];
        return $this->anamnesisContract->getAll($searchArr, $offset, $limit, $sort);
    }

=======
        $searchArr = ["nama" => $search];
        return $this->anamnesisContract->getAll($searchArr, $offset, $limit, $sort);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->anamnesisContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->anamnesisContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->anamnesisContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->anamnesisContract->remove($id);
    }
>>>>>>> origin/zul
}