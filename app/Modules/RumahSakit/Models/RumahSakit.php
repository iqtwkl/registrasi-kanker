<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:30
 */

namespace App\Modules\RumahSakit\Models;

use App\Modules\RumahSakit\Traits\RumahSakitTrait;
use Illuminate\Database\Eloquent\Model;

class RumahSakit extends Model implements IRumahSakit
{
    use RumahSakitTrait;

    protected $table = "rumah_sakit";

    public $primaryKey = "id";

    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'kode', 'nama', 'alamat'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
