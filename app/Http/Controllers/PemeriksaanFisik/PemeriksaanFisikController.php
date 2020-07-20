<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:35 AM
 */

namespace App\Http\Controllers\PemeriksaanFisik;

use App\Http\Controllers\Controller;
use App\Modules\PemeriksaanFisik\Contracts\PemeriksaanFisikContract;

class PemeriksaanFisikController extends Controller
{
    private $pemeriksaanFisikContract;
    public function __construct(PemeriksaanFisikContract $pemeriksaanFisikContract)
    {
        $this->pemeriksaanFisikContract = $pemeriksaanFisikContract;
        $this->middleware('auth');
    }

    public function index(){
        return view('pemeriksaan_fisik.index');
    }

    public function find($id){
        $pemeriksaanFisik = $this->pemeriksaanFisikContract->getById($id);
        $pasien = $pemeriksaanFisik->pasien()->first();
        return view('pemeriksaan_fisik.view',['id' => $id, 'pasien' => $pasien, 'pemeriksaanFisik' => $pemeriksaanFisik]);
    }

    public function create()
    {
        return view('users.create');
    }

    public function store()
    {

    }

    public function edit()
    {
        return view('users.edit');
    }

    public function update()
    {

    }

    public function delete()
    {

    }
}