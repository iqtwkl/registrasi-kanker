<?php
namespace App\Http\Controllers\Terapi;

use App\Http\Controllers\Controller;
use App\Modules\Terapi\Contracts\TerapiContract;

class TerapiController extends Controller{
    private $terapiContract;
    public function __construct(TerapiContract $terapiContract)
    {
        $this->middleware('auth');
        $this->terapiContract = $terapiContract;
    }

    public function index(){
        return view('terapi.index');
    }

    public function find($id){
        $terapi = $this->terapiContract->getById($id);
        $pasien = $terapi->pasien()->first();
        return view('terapi.view', ['id' => $id, 'pasien' => $pasien, 'terapi' => $terapi]);
    }
}