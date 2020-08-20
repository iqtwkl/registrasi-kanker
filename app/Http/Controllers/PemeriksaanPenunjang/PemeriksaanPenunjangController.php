<?php
namespace App\Http\Controllers\PemeriksaanPenunjang;

use App\Http\Controllers\Controller;
use App\Modules\PemeriksaanPenunjang\Contracts\PemeriksaanPenunjangContract;

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

    public function store()
    {

    }

    public function edit()
    {
        return view('pemeriksaan_penunjang.edit');
    }

    public function update()
    {

    }

    public function delete()
    {

    }
}