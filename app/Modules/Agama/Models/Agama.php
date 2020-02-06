<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:06
 */

namespace App\Modules\Agama\Models;

use App\Modules\Agama\Traits\AgamaTrait;
use Illuminate\Database\Eloquent\Model;

class Agama extends Model implements IAgama
{
    use AgamaTrait;

    protected $table = "agama";

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
