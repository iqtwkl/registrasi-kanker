<?php
namespace App\Modules\Diagnosa\Models;

use App\Modules\Diagnosa\Traits\DiagnosaTrait;
use Illuminate\Database\Eloquent\Model;

class Diagnosa extends Model implements IDiagnosa{
    
    use DiagnosaTrait;

    protected $table = "diagnosa";

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
        "b1", 
        "b2", 
        "b31",
        "c1", 
        "c2", 
        "c3", 
        "c4", 
        "c5", 
        "c6", 
        "c7", 
        "c8", 
        "c9", 
        "c10",
        "c11",
        "c12",
        "c13",
        "c14",
        "c15",
        "c16",
        "c17",
        "c18",
        "c19",
        "c20",
        "c21",
        "c22",
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