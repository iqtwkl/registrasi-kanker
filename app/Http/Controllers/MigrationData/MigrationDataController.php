<?php
/**
 * Created by PhpStorm.
 * User' => ' Zuliansyah
 * Date' => ' 8/20/2020
 * Time' => ' 9' => '34 PM
 */

namespace App\Http\Controllers\MigrationData;

use App\Http\Controllers\Controller;

class MigrationDataController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function pasien(){
        $link = "http://registrasi.kankertht-kepalaleher.info/pasien/get";
        $method = "post";
        $contents = json_decode(file_get_contents(storage_path('database/PasienData.json')));
        foreach($contents as $content) {
            //dump($content);
            print_r("INSERT INTO pasein (id, kode_rs, no_rekam_medis, nama, nama_orang_tua, tempat_lahir, tgl_lahir, pendidikan, pekerjaan) values ('".$content->id_pasien."', '".$content->kode_rs."', '".$content->noRekamMedis."', '".$content->nama_pasien."', '".$content->namaOrangTua."', '".$content->tempatLahir."', '".$content->tglLahir."', '".$this->getPendidikan($content->pendidikan)."', '".$content->pekerjaan."');");
            print_r("<br/>");
        }
    }

    public function getPendidikan($pendidikan){
        $retPendidikan = 0;
        if(!is_null($pendidikan) || ($pendidikan == '')){
            switch(strtolower($pendidikan)){
                case 's2/s3' : $retPendidikan = 1; break;
                case 'd3/s1' : $retPendidikan = 2; break;
                case 'sma' : $retPendidikan = 3; break;
                case 'smp' : $retPendidikan = 4; break;
                case 'sd' : $retPendidikan = 5; break;
                case 'tidak sekolah' : $retPendidikan = 6; break;
                default: $retPendidikan = 0;
            }
        }

        return $retPendidikan;
    }
}