<?php
namespace App\Http\Controllers\PemeriksaanPenunjang;

use App\Http\Controllers\Controller;
use App\Modules\PemeriksaanPenunjang\Contracts\PemeriksaanPenunjangContract;
use App\Http\Requests\PemeriksaanPenunjang\StoreRequest;
use App\Http\Requests\PemeriksaanPenunjang\UpdateRequest;

class PemeriksaanPenunjangController extends Controller {
    private $pemeriksaanPenunjangContract;
    public function __construct(PemeriksaanPenunjangContract $pemeriksaanPenunjangContract)
    {
        $this->middleware('auth');
        $this->pemeriksaanPenunjangContract = $pemeriksaanPenunjangContract;
    }

    public function index(){
        return view('pemeriksaan_penunjang.index');
    }

    public function find($id){
        $pemeriksaanPenunjang = $this->pemeriksaanPenunjangContract->getById($id);
        $pasien = $pemeriksaanPenunjang->pasien()->first();
        return view('pemeriksaan_penunjang.view',['id' => $id, 'pasien' => $pasien, 'pemeriksaanPenunjang' => $pemeriksaanPenunjang]);
    }

    public function create()
    {
        return view('pemeriksaan_penunjang.create');
    }

    public function store(StoreRequest $request)
    {
        $data = [
            'nama_pasien' => $request->input("nama_pasien"),
            'id_pasien' => $request->input("id_pasien"),
            'medrec' => $request->input("medrec"),
            'kunjungan' => $request->input("kunjungan"),
            'tanggal_periksa' => $request->input("tanggal_periksa"),
            'a1' => $request->input("a1"),
            'a2' => $request->input("a2"),
            'a3' => $request->input("a3"),
            'a7' => $request->input("a7"),
            'a7a' => $request->input("a7a"),
            'a62' => $request->input("a62"),
            'a63' => $request->input("a63"),
            'a64' => $request->input("a64"),
            'a65' => $request->input("a65"),
            'a66' => $request->input("a66"),
            'a5' => $request->input("a5"),
            'a4a' => $request->input("a4a"),
            'a9' => $request->input("a9"),
            'a10' => $request->input("a10"),
            'a11' => $request->input("a11"),
            'a12' => $request->input("a12"),
            'a13' => $request->input("a13"),
            'a15' => $request->input("a15"),
            'a67' => $request->input("a67"),
            'a16' => $request->input("a16"),
            'a17' => $request->input("a17"),
            'a18' => $request->input("a18"),
            'a19' => $request->input("a19"),
            'a20' => $request->input("a20"),
            'a201' => $request->input("a201"),
            'a202' => $request->input("a202"),
            'a203' => $request->input("a203"),
            'a20a' => $request->input("a20a"),
            'a21' => $request->input("a21"),
            'a22' => $request->input("a22"),
            'a23' => $request->input("a23"),
            'a24' => $request->input("a24"),
            'a241' => $request->input("a241"),
            'a242' => $request->input("a242"),
            'a243' => $request->input("a243"),
            'a24a' => $request->input("a24a"),
            'a25' => $request->input("a25"),
            'a26' => $request->input("a26"),
            'a27' => $request->input("a27"),
            'a28' => $request->input("a28"),
            'a281' => $request->input("a281"),
            'a282' => $request->input("a282"),
            'a283' => $request->input("a283"),
            'a28a' => $request->input("a28a"),
            'a29' => $request->input("a29"),
            'a30' => $request->input("a30"),
            'a31' => $request->input("a31"),
            'a32' => $request->input("a32"),
            'a321' => $request->input("a321"),
            'a322' => $request->input("a322"),
            'a323' => $request->input("a323"),
            'a32a' => $request->input("a32a"),
            'a33' => $request->input("a33"),
            'a34' => $request->input("a34"),
            'a35' => $request->input("a35"),
            'a36' => $request->input("a36"),
            'a361' => $request->input("a361"),
            'a362' => $request->input("a362"),
            'a363' => $request->input("a363"),
            'a36a' => $request->input("a36a"),
            'a37' => $request->input("a37"),
            'a38' => $request->input("a38"),
            'a39' => $request->input("a39"),
            'a40' => $request->input("a40"),
            'a401' => $request->input("a401"),
            'a402' => $request->input("a402"),
            'a403' => $request->input("a403"),
            'a40a' => $request->input("a40a"),
            'a41' => $request->input("a41"),
            'a42' => $request->input("a42"),
            'a43' => $request->input("a43"),
            'a44' => $request->input("a44"),
            'a441' => $request->input("a441"),
            'a442' => $request->input("a442"),
            'a443' => $request->input("a443"),
            'a44a' => $request->input("a44a"),
            'a45' => $request->input("a45"),
            'a57' => $request->input("a57"),
            'a58' => $request->input("a48"),
            'a59' => $request->input("a49"),
            'a60' => $request->input("a60"),
            'a601' => $request->input("a601"),
            'a602' => $request->input("a602"),
            'a603' => $request->input("a603"),
            'a60a' => $request->input("a60a"),
            'a45a' => $request->input("a45a"),
            'a48' => $request->input("a48"),
            'a49' => $request->input("a49"),
            'a50' => $request->input("a50"),
            'a51' => $request->input("a51"),
            'a52' => $request->input("a52"),
            'a53' => $request->input("a53"),
            'a54' => $request->input("a54"),
            'a55' => $request->input("a55")
        ];

        $this->pemeriksaanPenunjangContract->store($data);

        return redirect(route("pemeriksaan-penunjang"));
    }

    public function edit($id)
    {
        $pemeriksaanPenunjang = $this->pemeriksaanPenunjangContract->getById($id);
        return view('pemeriksaan_penunjang.edit', compact("pemeriksaanPenunjang"));
    }

    public function update(UpdateRequest $request)
    {
        $id = $request->input("id");
        $data = [
            'nama_pasien' => $request->input("nama_pasien"),
            'id_pasien' => $request->input("id_pasien"),
            'medrec' => $request->input("medrec"),
            'kunjungan' => $request->input("kunjungan"),
            'tanggal_periksa' => $request->input("tanggal_periksa"),
            'a1' => $request->input("a1"),
            'a2' => $request->input("a2"),
            'a3' => $request->input("a3"),
            'a7' => $request->input("a7"),
            'a7a' => $request->input("a7a"),
            'a62' => $request->input("a62"),
            'a63' => $request->input("a63"),
            'a64' => $request->input("a64"),
            'a65' => $request->input("a65"),
            'a66' => $request->input("a66"),
            'a5' => $request->input("a5"),
            'a4a' => $request->input("a4a"),
            'a9' => $request->input("a9"),
            'a10' => $request->input("a10"),
            'a11' => $request->input("a11"),
            'a12' => $request->input("a12"),
            'a13' => $request->input("a13"),
            'a15' => $request->input("a15"),
            'a67' => $request->input("a67"),
            'a16' => $request->input("a16"),
            'a17' => $request->input("a17"),
            'a18' => $request->input("a18"),
            'a19' => $request->input("a19"),
            'a20' => $request->input("a20"),
            'a201' => $request->input("a201"),
            'a202' => $request->input("a202"),
            'a203' => $request->input("a203"),
            'a20a' => $request->input("a20a"),
            'a21' => $request->input("a21"),
            'a22' => $request->input("a22"),
            'a23' => $request->input("a23"),
            'a24' => $request->input("a24"),
            'a241' => $request->input("a241"),
            'a242' => $request->input("a242"),
            'a243' => $request->input("a243"),
            'a24a' => $request->input("a24a"),
            'a25' => $request->input("a25"),
            'a26' => $request->input("a26"),
            'a27' => $request->input("a27"),
            'a28' => $request->input("a28"),
            'a281' => $request->input("a281"),
            'a282' => $request->input("a282"),
            'a283' => $request->input("a283"),
            'a28a' => $request->input("a28a"),
            'a29' => $request->input("a29"),
            'a30' => $request->input("a30"),
            'a31' => $request->input("a31"),
            'a32' => $request->input("a32"),
            'a321' => $request->input("a321"),
            'a322' => $request->input("a322"),
            'a323' => $request->input("a323"),
            'a32a' => $request->input("a32a"),
            'a33' => $request->input("a33"),
            'a34' => $request->input("a34"),
            'a35' => $request->input("a35"),
            'a36' => $request->input("a36"),
            'a361' => $request->input("a361"),
            'a362' => $request->input("a362"),
            'a363' => $request->input("a363"),
            'a36a' => $request->input("a36a"),
            'a37' => $request->input("a37"),
            'a38' => $request->input("a38"),
            'a39' => $request->input("a39"),
            'a40' => $request->input("a40"),
            'a401' => $request->input("a401"),
            'a402' => $request->input("a402"),
            'a403' => $request->input("a403"),
            'a40a' => $request->input("a40a"),
            'a41' => $request->input("a41"),
            'a42' => $request->input("a42"),
            'a43' => $request->input("a43"),
            'a44' => $request->input("a44"),
            'a441' => $request->input("a441"),
            'a442' => $request->input("a442"),
            'a443' => $request->input("a443"),
            'a44a' => $request->input("a44a"),
            'a45' => $request->input("a45"),
            'a57' => $request->input("a57"),
            'a58' => $request->input("a48"),
            'a59' => $request->input("a49"),
            'a60' => $request->input("a60"),
            'a601' => $request->input("a601"),
            'a602' => $request->input("a602"),
            'a603' => $request->input("a603"),
            'a60a' => $request->input("a60a"),
            'a45a' => $request->input("a45a"),
            'a48' => $request->input("a48"),
            'a49' => $request->input("a49"),
            'a50' => $request->input("a50"),
            'a51' => $request->input("a51"),
            'a52' => $request->input("a52"),
            'a53' => $request->input("a53"),
            'a54' => $request->input("a54"),
            'a55' => $request->input("a55")
        ];

        $this->pemeriksaanPenunjangContract->update($data, $id);

        return redirect(route("pemeriksaan-penunjang"));
    }
}