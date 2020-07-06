<?php
namespace App\Modules\PemeriksaanPenunjang\Models;

use App\Modules\PemeriksaanPenunjang\Traits\PemeriksaanPenunjangTrait;
use Illuminate\Database\Eloquent\Model;

class PemeriksaanPenunjang extends Model implements IPemeriksaanPenunjang {
    use PemeriksaanPenunjangTrait;

    protected $table = "pemeriksaan_penunjang";

    public $primaryKey = "id";

    public $incrementing = false;

    public $keyType = 'string';

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "id",
        "idPasien",
        "kunjungan",
        "tglPeriksa",
        "medrec",
        "a1", 	
        "a2", 	
        "a3", 	
        "a4", 	
        "a4a",	
        "a5", 	
        "a6", 	
        "a7", 	
        "a7a",	
        "a8", 	
        "a9", 	
        "a10",	
        "a11",	
        "a12",	
        "a13",	
        "a14",	
        "a15",	
        "a16",	
        "a16a",
        "a17", 
        "a18", 
        "a19", 
        "a20", 
        "a201",
        "a202",
        "a203",
        "a20a",
        "a21", 
        "a22", 
        "a23", 
        "a24", 
        "a241",
        "a242",
        "a243",
        "a24a",
        "a25", 
        "a26", 
        "a27", 
        "a28", 
        "a281",
        "a282",
        "a283",
        "a28a",
        "a29", 
        "a30", 
        "a31", 
        "a32", 
        "a321",
        "a322",
        "a323",
        "a32a",
        "a33", 
        "a34", 
        "a35", 
        "a36", 
        "a361",
        "a362",
        "a363",
        "a36a",
        "a37", 
        "a38", 
        "a39", 
        "a40", 
        "a401",
        "a402",
        "a403",
        "a40a",
        "a41", 
        "a42", 
        "a43", 
        "a44", 
        "a441",
        "a442",
        "a443",
        "a44a",
        "a45", 
        "a45a",
        "a46", 
        "a47", 
        "a48", 
        "a49", 
        "a50", 
        "a51", 
        "a52", 
        "a53", 
        "a54", 
        "a55", 
        "a56", 
        "a57", 
        "a58", 
        "a59", 
        "a60", 
        "a601",
        "a602",
        "a603",
        "a61", 
        "a62", 
        "a63", 
        "a64", 
        "a65", 
        "a66", 
        "a67", 
        "sl1", 
        "sl2", 
        "sl3", 
        "sl4", 
        "sl5", 
        "sl6", 
        "sl7", 
        "sl8", 
        "sl9", 
        "sl10",
        "created_by",
        "last_updated_by"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

}