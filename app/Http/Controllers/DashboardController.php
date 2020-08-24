<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Pasien\Contracts\PasienContract;
use Illuminate\Http\Response;

class DashboardController extends Controller
{
    private $pasienContract;
    public function __construct(PasienContract $pasienContract)
    {
        $this->middleware('auth');
        $this->pasienContract = $pasienContract;
    }

    public function index(){
        return view('dashboard');
    }

    public function reportPasien() {
        return response()->json([
            'all' => $this->pasienContract->countAll(),
            'new' => $this->pasienContract->countThisMonth()
        ]);
    }

    public function reportTerapi() {
        return response()->json([
            'all' => 1000,
            'new' => 10
        ]);
    }

    public function reportDiagnosa() {
        return response()->json([
            'all' => 1000,
            'new' => 10
        ]);
    }

    public function reportPemeriksaanFIsik() {
        return response()->json([
            'all' => 1000,
            'new' => 10
        ]);
    }

}