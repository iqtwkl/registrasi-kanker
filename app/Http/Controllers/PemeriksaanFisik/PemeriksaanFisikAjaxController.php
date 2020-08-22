<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:35 AM
 */

namespace App\Http\Controllers\PemeriksaanFisik;

use App\Http\Controllers\Controller;
use App\Http\Requests\PemeriksaanFisik\StoreRequest;
use App\Http\Requests\PemeriksaanFisik\UpdateRequest;
use App\Modules\PemeriksaanFisik\Contracts\PemeriksaanFisikContract;
use Illuminate\Http\Request;

class PemeriksaanFisikAjaxController extends Controller
{
    private $pemeriksaanFisikContract;

    public function __construct(PemeriksaanFisikContract $pemeriksaanFisikContract)
    {
        $this->middleware('auth');
        $this->pemeriksaanFisikContract = $pemeriksaanFisikContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search, "email" => $search];
        $sort = ['tglPeriksa', 'DESC'];
        $result = $this->pemeriksaanFisikContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->pemeriksaanFisikContract->getById($id);

        return response(['data' => $result]);
    }
    public function remove(Request $request){
        $id = $request->input("id");
        return $this->pemeriksaanFisikContract->remove($id);
    }
}