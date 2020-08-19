<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Pasien;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pasien\StoreRequest;
use App\Http\Requests\Pasien\UpdateRequest;
use App\Modules\Pasien\Contracts\PasienContract;
use App\Modules\RumahSakit\Contracts\RumahSakitContract;

class PasienController extends Controller
{
    private $pasienContract;
    private $rumahSakitContract;

    public function __construct(PasienContract $pasienContract, RumahSakitContract $rumahSakitContract)
    {
        $this->middleware('auth');
        $this->pasienContract = $pasienContract;
        $this->rumahSakitContract = $rumahSakitContract;
    }

    public function index()
    {
        return view('pasien.index');
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

    public function create()
    {
        $listRs = $this->rumahSakitContract->all();
        return view('pasien.create', compact('listRs'));
    }

    public function store(StoreRequest $request)
    {
        $request = $this->pasienContract->store($request->all());
    }

    public function edit($id)
    {
        $pasien = $this->pasienContract->getById($id);
        return view('pasien.edit', compact('pasien'));
    }

    public function update(UpdateRequest $request)
    {
        $request = $this->update($request->all());


    }

    public function delete()
    {

    }
}