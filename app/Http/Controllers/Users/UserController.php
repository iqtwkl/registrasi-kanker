<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 07/02/2020
 * Time: 15:06
 */

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('users.index');
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