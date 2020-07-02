<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:06
 */

namespace App\Modules\Pekerjaan\Models;

use App\Modules\Pekerjaan\Traits\PekerjaanTrait;
use Illuminate\Database\Eloquent\Model;

class Pekerjaan extends Model implements IPekerjaan
{
    use PekerjaanTrait;

    protected $table = "pekerjaan";

    public $primaryKey = "id";

    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'nama', 'created_by', 'last_updated_by'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
