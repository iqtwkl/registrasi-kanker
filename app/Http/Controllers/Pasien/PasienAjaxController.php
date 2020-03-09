<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Pasien;

use App\Http\Controllers\Controller;
use App\Modules\Pasien\Contracts\PasienContract;
use Illuminate\Http\Request;

class PasienAjaxController extends Controller
{
    /**
     * @var PasienContract
     */
    private $pasienContract;

    public function __construct(PasienContract $pasienContract)
    {
        $this->middleware('auth');
        $this->pasienContract = $pasienContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["nama" => $search, "no_rekam_medis" => $search];
        return $this->pasienContract->getAll($searchArr, $offset, $limit, $sort);
    }

}