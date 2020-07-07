<?php
namespace App\Http\Controllers\Terapi;

use App\Http\Controllers\Controller;

class TerapiController extends Controller{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('terapi.index');
    }

    public function find($id){
        dump($id);
    }
}