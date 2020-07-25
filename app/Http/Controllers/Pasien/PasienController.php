<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Pasien;

use App\Http\Controllers\Controller;
use App\Modules\Pasien\Contracts\PasienContract;

class PasienController extends Controller
{
    private $pasienContract;

    public function __construct(PasienContract $pasienContract)
    {
        $this->middleware('auth');
        $this->pasienContract = $pasienContract;
    }

    public function index()
    {
        return view('pasien.index');
    }

    public function create()
    {
        return view('pasien.create');
    }

    public function find($id)
    {
        $pasien = $this->pasienContract->getById($id);
        $anamnesis = $pasien->latestAnamnesis();
        $pemeriksaanFisik = $pasien->latestPemeriksaanFisik();
        $diagnosa = $pasien->latestDiagnosa();
        $terapi = $pasien->latestTerapi();
        return view('pasien.view',['id' => $id, 'pasien' => $pasien, 'anamnesis' => $anamnesis, 
            'pemeriksaanFisik'=> $pemeriksaanFisik, 'diagnosa' => $diagnosa, 'terapi' => $terapi]);
    }

    public function store()
    {

    }

    public function edit($id)
    {
        $pasien = $this->pasienContract->getById($id);
        return view('pasien.edit', compact('pasien'));
    }

    public function update()
    {

    }

    public function delete()
    {

    }
}