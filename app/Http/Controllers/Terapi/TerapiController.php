<?php
namespace App\Http\Controllers\Terapi;

use App\Http\Controllers\Controller;
use App\Http\Requests\Terapi\StoreRequest;
use App\Http\Requests\Terapi\UpdateRequest;
use App\Modules\Terapi\Contracts\TerapiContract;

class TerapiController extends Controller{
    private $terapiContract;
    public function __construct(TerapiContract $terapiContract)
    {
        $this->middleware('auth');
        $this->terapiContract = $terapiContract;
    }

    public function index(){
        return view('terapi.index');
    }

    public function find($id){
        $terapi = $this->terapiContract->getById($id);
        $pasien = $terapi->pasien()->first();
        return view('terapi.view', ['id' => $id, 'pasien' => $pasien, 'terapi' => $terapi]);
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
            'tanggal_periksa' => $request->input("kunjungan"),
            'b4' => $request->input("b4"),
            'b5' => $request->input("b5"),
            'b6' => $request->input("b6"),
            'b7' => $request->input("b7"),
            'b8' => $request->input("b8"),
            'b9' => $request->input("b9"),
            'b32' => $request->input("b32"),
            'b33' => $request->input("b33"),
            'b34' => $request->input("b34"),
            'b35' => $request->input("b35"),
            'b36' => $request->input("b36"),
            'b10' => $request->input("b10"),
            'b11' => $request->input("b11"),
            'b12' => $request->input("b12"),
            'b13' => $request->input("b13"),
            'b14' => $request->input("b14"),
            'b37' => $request->input("b37"),
            'b38' => $request->input("b38"),
            'b39' => $request->input("b39"),
            'b40' => $request->input("b40"),
            'b41' => $request->input("b41"),
            'b47' => $request->input("b47"),
            'b48' => $request->input("b48"),
            'b49' => $request->input("b49"),
            'b50' => $request->input("b50"),
            'b51' => $request->input("b51"),
            'b42' => $request->input("b42"),
            'b43' => $request->input("b43"),
            'b44' => $request->input("b44"),
            'b45' => $request->input("b45"),
            'b46' => $request->input("b46"),
            'b21' => $request->input("b21"),
            'b22a' => $request->input("b22a"),
            'b22b' => $request->input("b22b"),
            'b22c' => $request->input("b22c"),
            'b22d' => $request->input("b22d"),
            'b22i' => $request->input("b22i"),
            'b22e' => $request->input("b22e"),
            'b22f' => $request->input("b22f"),
            'b22g' => $request->input("b22g"),
            'b22h' => $request->input("b22h"),
            'b22j' => $request->input("b22j"),
            'b22k' => $request->input("b22k"),
            'b22p' => $request->input("b22p"),
            'b22u' => $request->input("b22u"),
            'b22v' => $request->input("b22v"),
            'b22_lainnya' => $request->input("b22_lainnya"),
            'b23' => $request->input("b23"),
            'b24' => $request->input("b24"),
            'b25' => $request->input("b25"),
            'b26' => $request->input("b26"),
            'b27' => $request->input("b27"),
            'b28' => $request->input("b28"),
            'b29' => $request->input("b29"),
            'b30' => $request->input("b30")
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
            'tanggal_periksa' => $request->input("kunjungan"),
            'b4' => $request->input("b4"),
            'b5' => $request->input("b5"),
            'b6' => $request->input("b6"),
            'b7' => $request->input("b7"),
            'b8' => $request->input("b8"),
            'b9' => $request->input("b9"),
            'b32' => $request->input("b32"),
            'b33' => $request->input("b33"),
            'b34' => $request->input("b34"),
            'b35' => $request->input("b35"),
            'b36' => $request->input("b36"),
            'b10' => $request->input("b10"),
            'b11' => $request->input("b11"),
            'b12' => $request->input("b12"),
            'b13' => $request->input("b13"),
            'b14' => $request->input("b14"),
            'b37' => $request->input("b37"),
            'b38' => $request->input("b38"),
            'b39' => $request->input("b39"),
            'b40' => $request->input("b40"),
            'b41' => $request->input("b41"),
            'b47' => $request->input("b47"),
            'b48' => $request->input("b48"),
            'b49' => $request->input("b49"),
            'b50' => $request->input("b50"),
            'b51' => $request->input("b51"),
            'b42' => $request->input("b42"),
            'b43' => $request->input("b43"),
            'b44' => $request->input("b44"),
            'b45' => $request->input("b45"),
            'b46' => $request->input("b46"),
            'b21' => $request->input("b21"),
            'b22a' => $request->input("b22a"),
            'b22b' => $request->input("b22b"),
            'b22c' => $request->input("b22c"),
            'b22d' => $request->input("b22d"),
            'b22i' => $request->input("b22i"),
            'b22e' => $request->input("b22e"),
            'b22f' => $request->input("b22f"),
            'b22g' => $request->input("b22g"),
            'b22h' => $request->input("b22h"),
            'b22j' => $request->input("b22j"),
            'b22k' => $request->input("b22k"),
            'b22p' => $request->input("b22p"),
            'b22u' => $request->input("b22u"),
            'b22v' => $request->input("b22v"),
            'b22_lainnya' => $request->input("b22_lainnya"),
            'b23' => $request->input("b23"),
            'b24' => $request->input("b24"),
            'b25' => $request->input("b25"),
            'b26' => $request->input("b26"),
            'b27' => $request->input("b27"),
            'b28' => $request->input("b28"),
            'b29' => $request->input("b29"),
            'b30' => $request->input("b30")
        ];
        $this->terapiContract->update($data, $id);

        return redirect(route("terapi"));
    }
}