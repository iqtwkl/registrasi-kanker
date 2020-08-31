<?php
namespace App\Http\Controllers\Diagnosa;

use App\Http\Controllers\Controller;
use App\Http\Requests\Diagnosa\StoreRequest;
use App\Http\Requests\Diagnosa\UpdateRequest;
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


    public function create(){
        return view("terapi.create");
    }

    public function store(StoreRequest $request){
        $data = [
            'nama_pasien' => $request->input("nama_pasien"),
            'id_pasien' => $request->input("id_pasien"),
            'medrec' => $request->input("medrec"),
            'kunjungan' => $request->input("kunjungan"),
            'tanggal_periksa' => $request->input("tanggal_periksa"),
            'b1' => $request->input("b1"),
            'b2' => $request->input("b2"),
            'c1' => $request->input("c1"),
            'c16' => $request->input("c16"),
            'c2' => $request->input("c2"),
            'c17' => $request->input("c17"),
            'b31' => $request->input("c31"),
            'c3' => $request->input("c3"),
            'c4' => $request->input("c4"),
            'c5' => $request->input("c5"),
            'c18' => $request->input("c18"),
            'c6' => $request->input("c6"),
            'c7' => $request->input("c7"),
            'c8' => $request->input("c8"),
            'c9' => $request->input("c9"),
            'c10' => $request->input("c10"),
            'c11' => $request->input("c11"),
            'c12' => $request->input("c12"),
            'c13' => $request->input("c13"),
            'c14' => $request->input("c14"),
            'c19' => $request->input("c19"),
            'c20' => $request->input("c20"),
            'c22' => $request->input("c22"),
            'c15' => $request->input("c15")
        ];
        $this->terapiContract->store($data);

        return redirect(route("terapi"));
    }

    public function edit($id){
        $terapi = $this->terapiContract->getById($id);

        return view("terapi.create", compact("terapi"));
    }

    public function update(UpdateRequest $request){
        $id = $request->input("id");
        $data = [
            'nama_pasien' => $request->input("nama_pasien"),
            'id_pasien' => $request->input("id_pasien"),
            'medrec' => $request->input("medrec"),
            'kunjungan' => $request->input("kunjungan"),
            'tanggal_periksa' => $request->input("tanggal_periksa"),
            'b1' => $request->input("b1"),
            'b2' => $request->input("b2"),
            'c1' => $request->input("c1"),
            'c16' => $request->input("c16"),
            'c2' => $request->input("c2"),
            'c17' => $request->input("c17"),
            'b31' => $request->input("c31"),
            'c3' => $request->input("c3"),
            'c4' => $request->input("c4"),
            'c5' => $request->input("c5"),
            'c18' => $request->input("c18"),
            'c6' => $request->input("c6"),
            'c7' => $request->input("c7"),
            'c8' => $request->input("c8"),
            'c9' => $request->input("c9"),
            'c10' => $request->input("c10"),
            'c11' => $request->input("c11"),
            'c12' => $request->input("c12"),
            'c13' => $request->input("c13"),
            'c14' => $request->input("c14"),
            'c19' => $request->input("c19"),
            'c20' => $request->input("c20"),
            'c22' => $request->input("c22"),
            'c15' => $request->input("c15")
        ];
        $this->terapiContract->update($data, $id);

        return redirect(route("terapi"));
    }
}
