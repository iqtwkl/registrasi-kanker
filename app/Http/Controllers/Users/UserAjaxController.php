<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;

class UserAjaxController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}