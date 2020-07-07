<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 7/7/2020
 * Time: 8:50 PM
 */

namespace App\Http\Controllers\KunjunganPasien;

use App\Http\Controllers\Controller;

class KunjunganPasienController extends Controller{
    public function __construct(){
        $this->middleware('auth');
    }


    public function index()
    {
        return view('kunjungan_pasien.index');
    }

    public function create()
    {
        return view('kunjungan_pasien.create');
    }

    public function store()
    {

    }

    public function edit()
    {
        return view('kunjungan_pasien.edit');
    }

    public function update()
    {

    }

    public function delete()
    {

    }
}