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
});

Route::group(['prefix' => 'users','namespace' => 'Users'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'UserController@index'])->name('user');
});