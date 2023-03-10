<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:28 AM
 */

namespace App\Http\Controllers\Agama;

use App\Http\Controllers\Controller;
use App\Http\Requests\Agama\StoreRequest;
use App\Http\Requests\Agama\UpdateRequest;

class AgamaController extends Controller{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index()
    {
        return view('agama.index');
    }
}