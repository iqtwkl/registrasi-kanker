<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/6/2020
 * Time: 12:31 AM
 */

namespace App\Http\Controllers\Dirujuk;

use App\Http\Controllers\Controller;

class DirujukController extends Controller{
    public function __construct(){
        $this->middleware('auth');
    }


    public function index()
    {
        return view('dirujuk.index');
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