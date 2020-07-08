<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 7/7/2020
 * Time: 8:50 PM
 */

namespace App\Http\Controllers\KunjunganPasien;

use App\Http\Controllers\Controller;

class KunjunganPasienAjaxController extends Controller{
    public function __construct(){
        $this->middleware('auth');
    }
}