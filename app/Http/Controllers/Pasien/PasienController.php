<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 12/02/2020
 * Time: 18:16
 */

namespace App\Http\Controllers\Pasien;

use App\Http\Controllers\Controller;
use App\Modules\Pasien\Contracts\PasienContract;

class PasienController extends Controller
{
    private $pasienContract;

    public function __construct(PasienContract $pasienContract)
    {
        $this->middleware('auth');
        $this->pasienContract = $pasienContract;
    }

    public function index()
    {
        return view('pasien.index');
    }

    public function create()
    {
        return view('users.create');
    }

    public function find($id)
    {
        $data = $this->pasienContract->getById($id);
        return view('pasien.view',['id' => $id, 'profile' => $data]);
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