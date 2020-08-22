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
use App\Http\Requests\PemeriksaanFisik\StoreRequest;
use App\Http\Requests\PemeriksaanFisik\UpdateRequest;

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
        return view('pemeriksaan_fisik.create');
    }

    public function store(StoreRequest $request)
    {
        $data = [
            'nama_pasien' => $request->input("nama_pasien"),
            'id_pasien' => $request->input("id_pasien"),
            'medrec' => $request->input("medrec"),
            'kunjungan' => $request->input("kunjungan"),
            'tanggal_periksa' => $request->input("tanggal_periksa"),
            'td' => $request->input("td"),
            'mmhg' => $request->input("mmhg"),
            'nadi_menit' => $request->input("nadi_menit"),
            'tinggi_badan' => $request->input("tinggi_badan"),
            'berat_badan' => $request->input("berat_badan"),
            'kesadaran' => $request->input("kesadaran"),
            'ks1' => $request->input("ks1"),
            'ks66' => $request->input("ks66"),
            'sl1' => $request->input("sl1"),
            'sl1a' => $request->input("sl1a"),
            'sl3' => $request->input("sl3"),
            'sl3a' => $request->input("sl3a"),
            'sl2' => $request->input("s12"),
            'sl2a' => $request->input("s12a"),
            'sl4' => $request->input("s14"),
            'sl4a' => $request->input("s14a"),
            'sl5' => $request->input("s15"),
            'sl5a' => $request->input("s15a"),
            'sl6' => $request->input("s16"),
            'sl6a' => $request->input("s16a"),
            'sl24' => $request->input("s124"),
            'sl24a' => $request->input("s124a"),
            'sl7' => $request->input("s17"),
            'sl7a' => $request->input("s17a"),
            'sl8' => $request->input("s18"),
            'sl8a' => $request->input("s18a"),
            'sl9' => $request->input("s19"),
            'sl9a' => $request->input("s19a"),
            'sl10' => $request->input("s110"),
            'sl10a' => $request->input("s110a"),
            'ks30' => $request->input("ks30"),
            'ks31' => $request->input("ks31"),
            'ks32' => $request->input("ks32"),
            'ks34' => $request->input("ks34"),
            'ks36' => $request->input("ks36"),
            'ks38' => $request->input("ks38"),
            'ks42' => $request->input("ks42"),
            'ks60' => $request->input("ks60"),
            'ks64' => $request->input("ks64"),
            'ks20' => $request->input("ks20"),
            'ks21' => $request->input("ks21"),
            'ks18' => $request->input("ks18"),
            'ks19' => $request->input("ks19"),
            'ks22' => $request->input("ks22"),
            'ks23' => $request->input("ks23"),
            'ks62' => $request->input("ks62"),
            'ks63' => $request->input("js63"),
            'ks26' => $request->input("ks26"),
            'ks27' => $request->input("ks27"),
            'ks28' => $request->input("ks28"),
            'ks24' => $request->input("ks24"),
            'ks67' => $request->input("ks67"),
            'ks57' => $request->input("ks57"),
            'ks68' => $request->input("ks68"),
            'ks70' => $request->input("ks70"),
            'ks69a' => $request->input("ks69a"),
            'ks69b' => $request->input("ks69b"),
            'ks69c' => $request->input("ks69c"),
            'ks69d' => $request->input("ks69d"),
            'ks69e' => $request->input("ks69e"),
            'ks69f' => $request->input("ks69f"),
            'ks69g' => $request->input("ks69g"),
            'ks69h' => $request->input("ks69h"),
            'ks69i' => $request->input("ks69i"),
            'ks69j' => $request->input("ks69j"),
            'ks69k' => $request->input("ks69k"),
            'ks69l' => $request->input("ks69l"),
            'sl11' => $request->input("sl11"),
            'sl12' => $request->input("sl12"),
            'sl13' => $request->input("sl13"),
            'sl14' => $request->input("sl14"),
            'sl15' => $request->input("sl15"),
            'sl16' => $request->input("sl16"),
            'sl17' => $request->input("sl17"),
            'sl18' => $request->input("sl18"),
            'sl26' => $request->input("sl126"),
            'sl19' => $request->input("sl19"),
            'sl20' => $request->input("sl20"),
            'sl21' => $request->input("sl21"),
            'sl27' => $request->input("sl27"),
            'sl22' => $request->input("sl22"),
            'sl23' => $request->input("sl23"),
            'sl25' => $request->input("sl25"),
            'ks44' => $request->input("sl44"),
            'ks65' => $request->input("sl65"),
            'ks47' => $request->input("sl47"),
            'ks48' => $request->input("sl48"),
            'ks58' => $request->input("sl58"),
            'ks59' => $request->input("sl59"),
            'ks49' => $request->input("sl49"),
            'ks50' => $request->input("sl50"),
            'ks51' => $request->input("sl51"),
            'ks55' => $request->input("sl55"),
            'ks56' => $request->input("sl56"),
            'ks52' => $request->input("sl52"),
            'ks53' => $request->input("sl53"),
            'ks54' => $request->input("sl54")
        ];
        
        $this->pemeriksaanFisikContract->store($data);

        return redirect(route("pemeriksaan-fisik"));
    }   

    public function edit($id)
    {
        $pemeriksaanFisik = $this->pemeriksaanFisikContract->getById($id);
        return view('pemeriksaan_fisik.edit', compact('pemeriksaanFisik'));
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
            'td' => $request->input("td"),
            'mmhg' => $request->input("mmhg"),
            'nadi_menit' => $request->input("nadi_menit"),
            'tinggi_badan' => $request->input("tinggi_badan"),
            'berat_badan' => $request->input("berat_badan"),
            'kesadaran' => $request->input("kesadaran"),
            'ks1' => $request->input("ks1"),
            'ks66' => $request->input("ks66"),
            'sl1' => $request->input("sl1"),
            'sl1a' => $request->input("sl1a"),
            'sl3' => $request->input("sl3"),
            'sl3a' => $request->input("sl3a"),
            'sl2' => $request->input("s12"),
            'sl2a' => $request->input("s12a"),
            'sl4' => $request->input("s14"),
            'sl4a' => $request->input("s14a"),
            'sl5' => $request->input("s15"),
            'sl5a' => $request->input("s15a"),
            'sl6' => $request->input("s16"),
            'sl6a' => $request->input("s16a"),
            'sl24' => $request->input("s124"),
            'sl24a' => $request->input("s124a"),
            'sl7' => $request->input("s17"),
            'sl7a' => $request->input("s17a"),
            'sl8' => $request->input("s18"),
            'sl8a' => $request->input("s18a"),
            'sl9' => $request->input("s19"),
            'sl9a' => $request->input("s19a"),
            'sl10' => $request->input("s110"),
            'sl10a' => $request->input("s110a"),
            'ks30' => $request->input("ks30"),
            'ks31' => $request->input("ks31"),
            'ks32' => $request->input("ks32"),
            'ks34' => $request->input("ks34"),
            'ks36' => $request->input("ks36"),
            'ks38' => $request->input("ks38"),
            'ks42' => $request->input("ks42"),
            'ks60' => $request->input("ks60"),
            'ks64' => $request->input("ks64"),
            'ks20' => $request->input("ks20"),
            'ks21' => $request->input("ks21"),
            'ks18' => $request->input("ks18"),
            'ks19' => $request->input("ks19"),
            'ks22' => $request->input("ks22"),
            'ks23' => $request->input("ks23"),
            'ks62' => $request->input("ks62"),
            'ks63' => $request->input("js63"),
            'ks26' => $request->input("ks26"),
            'ks27' => $request->input("ks27"),
            'ks28' => $request->input("ks28"),
            'ks24' => $request->input("ks24"),
            'ks67' => $request->input("ks67"),
            'ks57' => $request->input("ks57"),
            'ks68' => $request->input("ks68"),
            'ks70' => $request->input("ks70"),
            'ks69a' => $request->input("ks69a"),
            'ks69b' => $request->input("ks69b"),
            'ks69c' => $request->input("ks69c"),
            'ks69d' => $request->input("ks69d"),
            'ks69e' => $request->input("ks69e"),
            'ks69f' => $request->input("ks69f"),
            'ks69g' => $request->input("ks69g"),
            'ks69h' => $request->input("ks69h"),
            'ks69i' => $request->input("ks69i"),
            'ks69j' => $request->input("ks69j"),
            'ks69k' => $request->input("ks69k"),
            'ks69l' => $request->input("ks69l"),
            'sl11' => $request->input("sl11"),
            'sl12' => $request->input("sl12"),
            'sl13' => $request->input("sl13"),
            'sl14' => $request->input("sl14"),
            'sl15' => $request->input("sl15"),
            'sl16' => $request->input("sl16"),
            'sl17' => $request->input("sl17"),
            'sl18' => $request->input("sl18"),
            'sl26' => $request->input("sl126"),
            'sl19' => $request->input("sl19"),
            'sl20' => $request->input("sl20"),
            'sl21' => $request->input("sl21"),
            'sl27' => $request->input("sl27"),
            'sl22' => $request->input("sl22"),
            'sl23' => $request->input("sl23"),
            'sl25' => $request->input("sl25"),
            'ks44' => $request->input("sl44"),
            'ks65' => $request->input("sl65"),
            'ks47' => $request->input("sl47"),
            'ks48' => $request->input("sl48"),
            'ks58' => $request->input("sl58"),
            'ks59' => $request->input("sl59"),
            'ks49' => $request->input("sl49"),
            'ks50' => $request->input("sl50"),
            'ks51' => $request->input("sl51"),
            'ks55' => $request->input("sl55"),
            'ks56' => $request->input("sl56"),
            'ks52' => $request->input("sl52"),
            'ks53' => $request->input("sl53"),
            'ks54' => $request->input("sl54")
        ];

        $this->pemeriksaanFisikContract->update($data, $id);

        return redirect(route("pemeriksaan-fisik"));
    }
}