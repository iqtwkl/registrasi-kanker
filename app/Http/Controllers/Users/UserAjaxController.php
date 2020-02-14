<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Modules\Users\Contracts\UserContract;
use Illuminate\Http\Request;

class UserAjaxController extends Controller
{
    private $userContract;

    public function __construct(UserContract $userContract)
    {
        $this->middleware('auth');
        $this->userContract = $userContract;
    }

    public function getAll(Request $request){
        $search = $request->input("search");
        $limit = $request->input('limit');
        $offset = $request->input('offset');
        $sort = $request->has('sort')?$request->input('sort'):array();

        $searchArr = ["name" => $search, "email" => $search];
        return $this->userContract->getAll($searchArr, $offset, $limit, $sort);
    }
}