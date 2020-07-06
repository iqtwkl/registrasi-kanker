<?php
namespace App\Http\Controllers\Diagnosa;

use App\Http\Controllers\Controller;

class DiagnosaController extends Controller {
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('diagnosa.index');
    }

    public function find($id){
        dump($id);
    }
}
