<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:35 AM
 */

namespace App\Http\Controllers\PemeriksaanFisik;

use App\Http\Controllers\Controller;

class PemeriksaanFisikController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('pemeriksaan_fisik.index');
    }

    public function find($id){
        dump($id);
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