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
use App\Modules\Agama\Contracts\AgamaContract;
use App\Modules\Dirujuk\Contracts\DirujukContract;
use App\Modules\Pasien\Contracts\PasienContract;
use App\Modules\Pekerjaan\Contracts\PekerjaanContract;
use App\Modules\Pendidikan\Contracts\PendidikanContract;
use App\Modules\RumahSakit\Contracts\RumahSakitContract;
use App\Modules\StatusPernikahan\Contracts\StatusPernikahanContract;
use Illuminate\Support\Facades\Auth;

class PasienController extends Controller
{
    private $pasienContract;
    private $rumahSakitContract;
    private $agamaContract;
    private $dirujukContract;
    private $pekerjaanContract;
    private $pendidikanContract;
    private $statusPernikahanContract;

    public function __construct(
        PasienContract $pasienContract,
        RumahSakitContract $rumahSakitContract,
        AgamaContract $agamaContract,
        DirujukContract $dirujukContract,
        PekerjaanContract $pekerjaanContract,
        PendidikanContract $pendidikanContract,
        StatusPernikahanContract $statusPernikahanContract
    )
    {
        $this->middleware('auth');
        $this->pasienContract = $pasienContract;
        $this->rumahSakitContract = $rumahSakitContract;
        $this->agamaContract = $agamaContract;
        $this->dirujukContract = $dirujukContract;
        $this->pekerjaanContract = $pekerjaanContract;
        $this->pendidikanContract = $pendidikanContract;
        $this->statusPernikahanContract = $statusPernikahanContract;

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
        $pemeriksaanPenunjang = $pasien->latestPemeriksaanPenunjang();
        $diagnosa = $pasien->latestDiagnosa();
        $terapi = $pasien->latestTerapi();
        return view('pasien.view',['id' => $id, 'pasien' => $pasien, 'anamnesis' => $anamnesis, 
            'pemeriksaanFisik'=> $pemeriksaanFisik, 'diagnosa' => $diagnosa, 'terapi' => $terapi,'pemeriksaanPenunjang' => $pemeriksaanPenunjang]);
    }

    public function create()
    {
        $listRs = $this->rumahSakitContract->all();
        $listAgama = $this->agamaContract->all();
        $listPendidikan = $this->pendidikanContract->all();
        $listPekerjaan = $this->pekerjaanContract->all();
        $listPerkawinan = $this->statusPernikahanContract->all();
        $listDirujuk = $this->dirujukContract->all();
        $listJumlahAnak = [
            '1' => '1 - 2',
            '2' => '3 - 5',
            '3' => ' > 5'
        ];

        return view('pasien.create', compact('listRs', 'listAgama', 'listPendidikan', 'listPekerjaan', 'listPerkawinan', 'listDirujuk', 'listJumlahAnak'));
    }

    public function store(StoreRequest $request)
    {
        $date = str_replace('/', '-"', $request->input("tgl_lahir"));
        $newDate = date("Y-m-d", strtotime($date));

        $data = [
            "no_rekam_medis" => $request->input("no_rekam_medis"),
            "nama" => $request->input("nama"),
            "nama_orang_tua" => $request->input("nama_orang_tua"),
            "tempat_lahir" => $request->input("tempat_lahir"),
            "tgl_lahir" => $newDate,
            "usia" => $request->input("usia"),
            "pendidikan" =>  $request->input("pendidikan"),
            "pekerjaan" => $request->input("pekerjaan"),
            "suku" => $request->input("suku"),
            "jenis_kelamin" => $request->input("jenis_kelamin"),
            "hamil" => $request->input("hamil"),
            "menyusui" => $request->input("menyusui"),
            "asing" => $request->input("asing"),
            "kode_rs" => $request->input("kode_rs"),
            "agama" => $request->input("agama"),
            "rujuk" => $request->input("rujuk"),
            "perkawinan" => $request->input("perkawinan"),
            "anak" => $request->input("anak"),
            "jalan" => $request->input("jalan"),
            "rt" => $request->input("rt"),
            "rw" => $request->input("rw"),
            "kelurahan" => $request->input("kelurahan"),
            "kecamatan" => $request->input("kecamatan"),
            "kabupaten" => $request->input("kabupaten"),
            "provinsi" => $request->input("provinsi"),
            "telp" => $request->input("telp"),
            "handphone" => $request->input("handphone"),
            "created_by" => Auth::user()->getAuthIdentifier(),
            "last_updated_by" => Auth::user()->getAuthIdentifier()
        ];

        $this->pasienContract->store($data);

        return redirect(route("pasien"));
    }

    public function edit($id)
    {
        $pasien = $this->pasienContract->getById($id);

        $listRs = $this->rumahSakitContract->all();
        $listAgama = $this->agamaContract->all();
        $listPendidikan = $this->pendidikanContract->all();
        $listPekerjaan = $this->pekerjaanContract->all();
        $listPerkawinan = $this->statusPernikahanContract->all();
        $listDirujuk = $this->dirujukContract->all();
        $listJumlahAnak = [
            '1' => '1 - 2',
            '2' => '3 - 5',
            '3' => ' > 5'
        ];

        return view('pasien.edit', compact('pasien', 'listRs', 'listAgama', 'listPendidikan', 'listPekerjaan', 'listPerkawinan', 'listDirujuk', 'listJumlahAnak'));
    }

    public function update(UpdateRequest $request)
    {
        //$request = $this->update($request->all());


    }

    public function delete()
    {

    }
}