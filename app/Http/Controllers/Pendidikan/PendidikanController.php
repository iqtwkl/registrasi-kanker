<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:36 AM
 */

namespace App\Http\Controllers\Pendidikan;

use App\Http\Controllers\Controller;

class PendidikanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('pendidikan.index');
    }

    public function find($id){
        dump($id);
    }
}