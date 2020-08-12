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