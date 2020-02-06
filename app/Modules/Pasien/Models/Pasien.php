<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:30
 */

namespace App\Modules\Pasien\Models;

use App\Modules\Pasien\Traits\PasienTrait;
use Illuminate\Database\Eloquent\Model;

class Pasien extends Model implements IPasien
{
    use PasienTrait;

    protected $table = "pasien";

    public $primaryKey = "id";

    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'kode_rs', 'no_rekam_medis', 'id_rs', 'nama', 'nama_orang_tua', 'tempat_lahir', 'tgl_lahir', 'pendidikan', 'pekerjaan', 'hamil', 'menyusui',
        'rujuk', 'agama', 'perkawinan', 'anak', 'keturunan', 'suku', 'asing', 'daerah', 'jalan', 'rt', 'rw', 'no', 'kode_telp', 'telp', 'kelurahan',
        'kecamatan', 'provinsi', 'kabupaten', 'jalan_o', 'rt_o', 'rw_o', 'no_o', 'kode_telp_o', 'telp_o',
        'kelurahan_o', 'kecamatan_o', 'provinsi_o', 'kabupaten_o'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
