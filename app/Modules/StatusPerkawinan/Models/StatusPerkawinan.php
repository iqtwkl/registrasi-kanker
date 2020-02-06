<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:21
 */

namespace App\Modules\StatusPerkawinan\Models;

use App\Modules\StatusPerkawinan\Traits\StatusPerkawinanTrait;
use Illuminate\Database\Eloquent\Model;

class StatusPerkawinan extends Model implements IStatusPerkawinan
{
    use StatusPerkawinanTrait;

    protected $table = "status_perkawinan";

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
