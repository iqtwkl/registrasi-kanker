<?php
namespace App\Modules\Terapi\Models;

use App\Modules\Terapi\Traits\TerapiTrait;
use Illuminate\Database\Eloquent\Model;

class Terapi extends Model implements ITerapi {
    use TerapiTrait;

    protected $table = "terapi";

    public $primaryKey = "id";

    public $incrementing = false;

    public $keyType = 'string';

    public $fillable = [
        "id",
        "idPasien",
        "kunjungan",
        "tglPeriksa",
        "medrec",
        "b1",
        "b1a",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9", 
        "b10", 
        "b11", 
        "b12", 
        "b13", 
        "b14", 
        "b15", 
        "b16", 
        "b17",
        "b18",
        "b19", 
        "b20", 
        "b21", 
        "b22a", 
        "b22b", 
        "b22c", 
        "b22d", 
        "b22e", 
        "b22f",
        "b22g",
        "b22h", 
        "b22i", 
        "b22j", 
        "b22k", 
        "b22l", 
        "b22m", 
        "b22n", 
        "b22o", 
        "b22p",
        "b22q",
        "b22r", 
        "b22s", 
        "b22t", 
        "b22u", 
        "b22v", 
        "b22_lainnya",
        "b23", 
        "b24", 
        "b25",
        "b26",
        "b27", 
        "b28", 
        "b29", 
        "b30", 
        "b31", 
        "b32", 
        "b33", 
        "b34", 
        "b35",
        "b36",
        "b37", 
        "b38", 
        "b39", 
        "b40", 
        "b41", 
        "b42", 
        "b43", 
        "b44", 
        "b45",
        "b46",
        "b47", 
        "b48", 
        "b49", 
        "b50", 
        "b51", 
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
}