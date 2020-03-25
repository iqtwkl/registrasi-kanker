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
    Route::get('logout', ['middleware' => 'web', 'uses' => 'LoginController@logout'])->name('logout');
});


Route::get('/', ['middleware' => 'web', 'uses' => 'Users\UserController@index'])->name('home');


Route::group(['prefix' => 'users','namespace' => 'Users'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'UserController@index'])->name('users');
    Route::get('find/{id}', ['middleware' => 'web', 'uses' => 'UserController@find'])->name('users.find');
});

Route::group(['prefix' => 'pasien','namespace' => 'Pasien'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'PasienController@index'])->name('pasien');
});

Route::group(['prefix' => 'anamnesis','namespace' => 'Anamnesis'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'AnamnesisController@index'])->name('anamnesis');
});

Route::group(['prefix' => 'rs','namespace' => 'RS'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'RSController@index'])->name('rs');
});

///AJAX
Route::group(['prefix' => 'users-ajax','namespace' => 'Users'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'UserAjaxController@getAll'])->name('users.all');
});

Route::group(['prefix' => 'pasien-ajax','namespace' => 'Pasien'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PasienAjaxController@getAll'])->name('pasien.all');
});

Route::group(['prefix' => 'rs-ajax','namespace' => 'RS'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'RSAjaxController@getAll'])->name('rs.all');
});

Route::group(['prefix' => 'anamnesis-ajax','namespace' => 'Anamnesis'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'AnamnesisAjaxController@getAll'])->name('anamnesis.all');
});