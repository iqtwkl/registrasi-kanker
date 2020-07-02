<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:36 AM
 */

namespace App\Http\Controllers\RumahSakit;

use App\Http\Controllers\Controller;

class RumahSakitController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('rumah_sakit.index');
    }

    public function find($id){
        dump($id);
    }
}