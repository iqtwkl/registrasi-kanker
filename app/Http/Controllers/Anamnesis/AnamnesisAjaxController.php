<?php


namespace App\Http\Controllers\Anamnesis;

use App\Http\Controllers\Controller;
use App\Modules\Anamnesis\Contracts\AnamnesisContract;
use Illuminate\Http\Request;

class AnamnesisAjaxController extends Controller
{
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

        $searchArr = ["nama" => $search, "no_rekam_medis" => $search];
        return $this->anamnesisContract->getAll($searchArr, $offset, $limit, $sort);
    }

}