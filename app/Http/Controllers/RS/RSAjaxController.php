<?php
namespace App\Http\Controllers\RS;

use App\Http\Controllers\Controller;
use App\Modules\RumahSakit\Contracts\RumahSakitContract;
use Illuminate\Http\Request;

class RSAjaxController extends Controller
{
    /**
     * @var RumahSakitContract
     */
    private $rsContract;

    public function __construct(RumahSakitContract $rsContract)
    {
        $this->middleware('auth');
        $this->rsContract = $rsContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["nama" => $search, "kode" => $search];
        return $this->rsContract->getAll($searchArr, $offset, $limit, $sort);
    }
}