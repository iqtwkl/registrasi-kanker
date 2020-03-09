<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except(['logout', 'getLogout']);
    }

    public function index(){
        return view('auth.login');
    }

    public function loginAction(LoginRequest $request){
        $email = $request->input("email");
        $password = $request->input("password");

        $credentials = [
            'email' => $email,
            'password' => $password
        ];

        if(Auth::attempt($credentials)){
            return redirect(route("users"));
        }

        $errors = [];
        $errors[] = trans("validation.login_failed_errors");
        return back()->withErrors($errors);
    }
}
