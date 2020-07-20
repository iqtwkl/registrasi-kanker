<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 7:33 PM
 */

namespace App\Http\Controllers\Anamnesis;

use App\Http\Controllers\Controller;
use App\Modules\Anamnesis\Contracts\AnamnesisContract;

class AnamnesisController extends Controller{
    private $anamnesisContract;

    public function __construct(AnamnesisContract $anamnesisContract){
        $this->anamnesisContract = $anamnesisContract;
        $this->middleware('auth');
    }


    public function index()
    {
        return view('anamnesis.index');
    }

    public function create()
    {
        return view('anamnesis.create');
    }

    public function store()
    {

    }

    public function edit()
    {
        return view('anamnesis.edit');
    }

    public function update()
    {

    }

    public function delete()
    {

    }

    public function find($id) 
    {
        $anamnesis = $this->anamnesisContract->getById($id);
        $pasien = $anamnesis->pasien()->first();
        return view('anamnesis.view',['id' => $id, 'pasien' => $pasien, 'anamnesis' => $anamnesis]);
    }
}