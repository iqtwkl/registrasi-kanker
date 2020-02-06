<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:28
 */

namespace App\Modules\Pendidikan\Models;

use App\Modules\Pendidikan\Traits\PendidikanTrait;
use Illuminate\Database\Eloquent\Model;

class Pendidikan extends Model implements IPendidikan
{
    use PendidikanTrait;

    protected $table = "pendidikan";

    public $primaryKey = "id";

    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'nama'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
