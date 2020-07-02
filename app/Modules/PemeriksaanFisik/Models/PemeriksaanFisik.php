<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 10:09 AM
 */

namespace App\Modules\PemeriksaanFisik\Models;

use App\Modules\PemeriksaanFisik\Traits\PemeriksaanFisikTrait;
use Illuminate\Database\Eloquent\Model;

class PemeriksaanFisik extends Model implements IPemeriksaanFisik{
    use PemeriksaanFisikTrait;

    protected $table = "pemeriksaan_fisik";

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
        "td",
        "td2",
        "nadi",
        "tb",
        "bb",
        "medrec",
        "kesadaran",
        "ks1",
        "ks2",
        "ks3",
        "ks4",
        "ks5",
        "ks6",
        "ks7",
        "ks8",
        "ks9",
        "ks10",
        "ks11",
        "ks12",
        "ks13",
        "ks14",
        "ks15",
        "ks16",
        "ks17",
        "ks18",
        "ks19",
        "ks20",
        "ks21",
        "ks22",
        "ks23",
        "ks24",
        "ks25",
        "ks26",
        "ks27",
        "ks28",
        "ks29",
        "ks30",
        "ks31",
        "ks32",
        "ks33",
        "ks34",
        "ks35",
        "ks36",
        "ks37",
        "ks38",
        "ks39",
        "ks40",
        "ks41",
        "ks42",
        "ks43",
        "ks44",
        "ks45",
        "ks46",
        "ks47",
        "ks48",
        "ks49",
        "ks50",
        "ks51",
        "ks52",
        "ks53",
        "ks54",
        "ks55",
        "ks56",
        "ks57",
        "ks58",
        "ks59",
        "ks60",
        "ks61",
        "ks62",
        "ks63",
        "ks64",
        "ks65",
        "ks66",
        "ks67",
        "ks68",
        "ks69a",
        "ks69b",
        "ks69c",
        "ks69d",
        "ks69e",
        "ks69f",
        "ks69g",
        "ks69h",
        "ks69i",
        "ks69j",
        "ks69k",
        "ks69l",
        "ks70",
        "sl1",
        "sl1a",
        "sl2",
        "sl2a",
        "sl3",
        "sl3a",
        "sl4",
        "sl4a",
        "sl5",
        "sl5a",
        "sl6",
        "sl6a",
        "sl7",
        "sl7a",
        "sl8",
        "sl8a",
        "sl9",
        "sl9a",
        "sl10",
        "sl10a",
        "sl11",
        "sl12",
        "sl13",
        "sl14",
        "sl15",
        "sl16",
        "sl17",
        "sl18",
        "sl19",
        "sl20",
        "sl21",
        "sl22",
        "sl23",
        "sl24",
        "sl24a",
        "sl25",
        "sl26",
        "sl27",
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