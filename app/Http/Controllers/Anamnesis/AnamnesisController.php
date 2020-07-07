<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 7:33 PM
 */

namespace App\Http\Controllers\Anamnesis;

use App\Http\Controllers\Controller;

class AnamnesisController extends Controller{
    public function __construct(){
        $this->middleware('auth');
    }


    public function index()
    {
        return view('anamnesis.index');
    }

    public function create()
    {
        return view('users.create');
    }

    public function store()
    {

    }

    public function edit()
    {
        return view('users.edit');
    }

    public function update()
    {

    }

    public function delete()
    {

    }
}