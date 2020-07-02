<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:36
 */

namespace App\Modules\Dirujuk\Models;

use App\Modules\Dirujuk\Traits\DirujukTrait;
use Illuminate\Database\Eloquent\Model;

class Dirujuk extends Model implements IDirujuk
{
    use DirujukTrait;

    protected $table = "dirujuk";

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
