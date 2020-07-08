<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:35 AM
 */

namespace App\Http\Controllers\Pekerjaan;

use App\Http\Controllers\Controller;

class PekerjaanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('pekerjaan.index');
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