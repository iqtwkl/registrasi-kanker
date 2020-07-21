<?php
namespace App\Http\Controllers\Diagnosa;

use App\Http\Controllers\Controller;
use App\Modules\Diagnosa\Contracts\DiagnosaContract;

class DiagnosaController extends Controller {
    private $diagnosaContract;
    public function __construct(DiagnosaContract $diagnosaContract)
    {
        $this->middleware('auth');
        $this->diagnosaContract = $diagnosaContract;
    }

    public function index(){
        return view('diagnosa.index');
    }

    public function find($id){
        $diagnosa = $this->diagnosaContract->getById($id);
        $pasien = $diagnosa->pasien()->first();
        return view('diagnosa.view',['id' => $id, 'pasien' => $pasien, 'diagnosa' => $diagnosa]);
    }
}
