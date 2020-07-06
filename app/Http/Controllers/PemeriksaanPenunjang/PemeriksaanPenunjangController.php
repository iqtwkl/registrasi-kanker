<?php
namespace App\Http\Controllers\PemeriksaanPenunjang;

use App\Http\Controllers\Controller;

class PemeriksaanPenunjangController extends Controller {
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('pemeriksaan_penunjang.index');
    }

    public function find($id){
        dump($id);
    }
}