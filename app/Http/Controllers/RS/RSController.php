<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\RS;

use App\Http\Controllers\Controller;

class RSController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('rs.index');
    }
}