<?php
namespace App\Http\Controllers\PemeriksaanPenunjang;

use App\Http\Controllers\Controller;
use App\Http\Requests\PemeriksaanPenunjang\StoreRequest;
use App\Http\Requests\PemeriksaanPenunjang\UpdateRequest;
use App\Modules\PemeriksaanPenunjang\Contracts\PemeriksaanPenunjangContract;
use Illuminate\Http\Request;

class PemeriksaanPenunjangAjaxController extends Controller {
    private $pemeriksaanPenunjangContract;

    public function __construct(PemeriksaanPenunjangContract $pemeriksaanPenunjangContract)
    {
        $this->middleware('auth');
        $this->pemeriksaanPenunjangContract = $pemeriksaanPenunjangContract;
    }

    public function getAll(Request $request) {
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search];
        $sort = ['tglPeriksa', 'DESC'];
        $result = $this->pemeriksaanPenunjangContract->getAll($searchArr, $offset, $limit, $sort);

        return response($result);
    }

    public function getById(Request $request){
        $id = $request->input("id");

        $result = $this->pemeriksaanPenunjangContract->getById($id);

        return response(['data' => $result]);
    }

    public function store(StoreRequest $request){
        return $this->pemeriksaanPenunjangContract->store($request);
    }

    public function update(UpdateRequest $request){
        return $this->pemeriksaanPenunjangContract->update($request);
    }

    public function remove(Request $request){
        $id = $request->input("id");
        return $this->pemeriksaanPenunjangContract->remove($id);
    }
}