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
        $this->middleware('guest');
    }

    public function index(){
        return view('users.index');
    }
}