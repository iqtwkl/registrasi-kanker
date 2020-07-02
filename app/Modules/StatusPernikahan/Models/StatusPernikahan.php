<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:21
 */

namespace App\Modules\StatusPernikahan\Models;

use App\Modules\StatusPernikahan\Traits\StatusPernikahanTrait;
use Illuminate\Database\Eloquent\Model;

class StatusPernikahan extends Model implements IStatusPernikahan
{
    use StatusPernikahanTrait;

    protected $table = "status_perkawinan";

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
