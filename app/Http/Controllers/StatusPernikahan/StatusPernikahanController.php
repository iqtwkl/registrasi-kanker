<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:37 AM
 */

namespace App\Http\Controllers\StatusPerkawinan;

use App\Http\Controllers\Controller;

class StatusPernikahanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('status_pernikahan.index');
    }

    public function find($id){
        dump($id);
    }
}