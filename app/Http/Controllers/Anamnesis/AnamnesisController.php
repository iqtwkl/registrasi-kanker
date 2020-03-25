<?php
namespace App\Http\Controllers\Anamnesis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnamnesisController extends Controller {
    public function __construct() {
        $this->middleware('auth');
    }

    public function index(){
        return view('anamnesis.index');
    }

    public function find(Request $request) {
        return 0;
    }
}