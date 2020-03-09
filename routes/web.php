<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['prefix' => 'auth','namespace' => 'Auth'], function(){
    //Sign In User
    Route::get('login', ['middleware' => 'web', 'uses' => 'LoginController@index'])->name('login');
    Route::post('login', ['middleware' => 'web', 'uses' => 'LoginController@loginAction'])->name('login.action');
    Route::get('auth/logout', 'LoginController@logout')->name('logout');
});


Route::get('/', ['middleware' => 'web', 'uses' => 'Users\UserController@index'])->name('home');


Route::group(['prefix' => 'users','namespace' => 'Users'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'UserController@index'])->name('users');
});


///AJAX
Route::group(['prefix' => 'users-ajax','namespace' => 'Users'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'UserAjaxController@getAll'])->name('users.all');
});

Route::group(['prefix' => 'pasien-ajax','namespace' => 'Pasien'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PasienAjaxController@getAll'])->name('pasien.all');
});