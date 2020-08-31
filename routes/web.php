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


Route::get('/', ['middleware' => 'web', 'uses' => 'DashboardController@index'])->name('home');
Route::get('dashboard/pasien/report',['middleware' => 'web', 'uses' => 'DashboardController@reportPasien'])->name('dashboard.pasien.report');


Route::group(['prefix' => 'users','namespace' => 'Users'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'UserController@index'])->name('users');
    Route::get('find/{id}', ['middleware' => 'web', 'uses' => 'UserController@find'])->name('users.find');
});

Route::group(['prefix' => 'pasien','namespace' => 'Pasien'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'PasienController@index'])->name('pasien');
    Route::get('/find/{id}', ['middleware' => 'web', 'uses' => 'PasienController@find'])->name('pasien.find');
    Route::get('/create', ['middleware' => 'web', 'uses' => 'PasienController@create'])->name('pasien.create');
    Route::post('/store', ['middleware' => 'web', 'uses' => 'PasienController@store'])->name('pasien.store');
    Route::get('/edit/{id}', ['middleware' => 'web', 'uses' => 'PasienController@edit'])->name('pasien.edit');
    Route::post('/update', ['middleware' => 'web', 'uses' => 'PasienController@update'])->name('pasien.update');
});

Route::group(['prefix' => 'agama','namespace' => 'Agama'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'AgamaController@index'])->name('agama');
});

Route::group(['prefix' => 'anamnesis','namespace' => 'Anamnesis'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'AnamnesisController@index'])->name('anamnesis');
    Route::get('/find/{id}', ['middleware' => 'web', 'uses' => 'AnamnesisController@find'])->name('anamnesis.find');
    Route::get('/create', ['middleware' => 'web', 'uses' => 'AnamnesisController@create'])->name('anamnesis.create');
});

Route::group(['prefix' => 'dirujuk','namespace' => 'Dirujuk'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'DirujukController@index'])->name('dirujuk');
});

Route::group(['prefix' => 'pekerjaan','namespace' => 'Pekerjaan'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'PekerjaanController@index'])->name('pekerjaan');
});

Route::group(['prefix' => 'pemeriksaan-fisik','namespace' => 'PemeriksaanFisik'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikController@index'])->name('pemeriksaan-fisik');
    Route::get('/find/{id}', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikController@find'])->name('pemeriksaan-fisik.find');
    Route::get('/create', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikController@create'])->name('pemeriksaan-fisik.create');
    Route::post('/store', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikController@store'])->name('pemeriksaan-fisik.store');
    Route::get('/edit/{id}', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikController@create'])->name('pemeriksaan-fisik.edit');
    Route::post('/update', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikController@update'])->name('pemeriksaan-fisik.update');
});

Route::group(['prefix' => 'pendidikan','namespace' => 'Pendidikan'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'PendidikanController@index'])->name('pendidikan');
});

Route::group(['prefix' => 'rumah-sakit','namespace' => 'RumahSakit'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'RumahSakitController@index'])->name('rumah-sakit');
});

Route::group(['prefix' => 'status-pernikahan','namespace' => 'StatusPernikahan'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'StatusPernikahanController@index'])->name('status-pernikahan');
});

Route::group(['prefix' => 'pemeriksaan-penunjang','namespace' => 'PemeriksaanPenunjang'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangController@index'])->name('pemeriksaan-penunjang');
    Route::get('/find/{id}', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangController@find'])->name('pemeriksaan-Penunjang.find');
    Route::get('/create', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangController@create'])->name('pemeriksaan-penunjang.create');
    Route::post('/store', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangController@store'])->name('pemeriksaan-Penunjang.store');
    Route::get('/edit/{id}', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangController@create'])->name('pemeriksaan-Penunjang.edit');
    Route::post('/update', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangController@update'])->name('pemeriksaan-Penunjang.update');
});

Route::group(['prefix' => 'diagnosa','namespace' => 'Diagnosa'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'DiagnosaController@index'])->name('diagnosa');
    Route::get('/find/{id}', ['middleware' => 'web', 'uses' => 'DiagnosaController@find'])->name('diagnosa.view');
    Route::get('/create', ['middleware' => 'web', 'uses' => 'DiagnosaController@create'])->name('diagnosa.create');
    Route::post('/store', ['middleware' => 'web', 'uses' => 'DiagnosaController@store'])->name('diagnosa.store');
    Route::get('/edit/{id}', ['middleware' => 'web', 'uses' => 'DiagnosaController@create'])->name('diagnosa.edit');
    Route::post('/update', ['middleware' => 'web', 'uses' => 'DiagnosaController@update'])->name('diagnosa.update');
});

Route::group(['prefix' => 'terapi','namespace' => 'Terapi'], function(){
    Route::get('', ['middleware' => 'web', 'uses' => 'TerapiController@index'])->name('terapi');
    Route::get('/find/{id}', ['middleware' => 'web', 'uses' => 'TerapiController@find'])->name('terapi.view');
    Route::get('/create', ['middleware' => 'web', 'uses' => 'TerapiController@create'])->name('terapi.create');
    Route::post('/store', ['middleware' => 'web', 'uses' => 'TerapiController@store'])->name('terapi.store');
    Route::get('/edit/{id}', ['middleware' => 'web', 'uses' => 'TerapiController@create'])->name('terapi.edit');
    Route::post('/update', ['middleware' => 'web', 'uses' => 'TerapiController@update'])->name('terapi.update');
});

///AJAX
Route::group(['prefix' => 'users-ajax','namespace' => 'Users'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'UserAjaxController@getAll'])->name('users.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'UserAjaxController@getById'])->name('users.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'UserAjaxController@store'])->name('users.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'UserAjaxController@update'])->name('users.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'UserAjaxController@remove'])->name('users.remove');
});

Route::group(['prefix' => 'pasien-ajax','namespace' => 'Pasien'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PasienAjaxController@getAll'])->name('pasien-ajax.all');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'PasienAjaxController@remove'])->name('pasien-ajax.remove');
});

Route::group(['prefix' => 'agama-ajax','namespace' => 'Agama'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'AgamaAjaxController@getAll'])->name('agama.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'AgamaAjaxController@getById'])->name('agama.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'AgamaAjaxController@store'])->name('agama.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'AgamaAjaxController@update'])->name('agama.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'AgamaAjaxController@remove'])->name('agama.remove');
});

Route::group(['prefix' => 'anamnesis-ajax','namespace' => 'Anamnesis'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'AnamnesisAjaxController@getAll'])->name('anamnesis.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'AnamnesisAjaxController@getById'])->name('anamnesis.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'AnamnesisAjaxController@store'])->name('anamnesis.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'AnamnesisAjaxController@update'])->name('anamnesis.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'AnamnesisAjaxController@remove'])->name('anamnesis.remove');
});

Route::group(['prefix' => 'dirujuk-ajax','namespace' => 'Dirujuk'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'DirujukAjaxController@getAll'])->name('dirujuk.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'DirujukAjaxController@getById'])->name('dirujuk.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'DirujukAjaxController@store'])->name('dirujuk.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'DirujukAjaxController@update'])->name('dirujuk.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'DirujukAjaxController@remove'])->name('dirujuk.remove');
});

Route::group(['prefix' => 'pekerjaan-ajax','namespace' => 'Pekerjaan'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PekerjaanAjaxController@getAll'])->name('pekerjaan.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'PekerjaanAjaxController@getById'])->name('pekerjaan.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'PekerjaanAjaxController@store'])->name('pekerjaan.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'PekerjaanAjaxController@update'])->name('pekerjaan.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'PekerjaanAjaxController@remove'])->name('pekerjaan.remove');
});

Route::group(['prefix' => 'pemeriksaan-fisik-ajax','namespace' => 'PemeriksaanFisik'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikAjaxController@getAll'])->name('pemeriksaan-fisik-ajax.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikAjaxController@getById'])->name('pemeriksaan-fisik-ajax.getById');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'PemeriksaanFisikAjaxController@remove'])->name('pemeriksaan-fisik-ajax.remove');
});

Route::group(['prefix' => 'pendidikan-ajax','namespace' => 'Pendidikan'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PendidikanAjaxController@getAll'])->name('pendidikan.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'PendidikanAjaxController@getById'])->name('pendidikan.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'PendidikanAjaxController@store'])->name('pendidikan.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'PendidikanAjaxController@update'])->name('pendidikan.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'PendidikanAjaxController@remove'])->name('pendidikan.remove');
});

Route::group(['prefix' => 'rumah-sakit-ajax','namespace' => 'RumahSakit'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'RumahSakitAjaxController@getAll'])->name('rumah-sakit.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'RumahSakitAjaxController@getById'])->name('rumah-sakit.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'RumahSakitAjaxController@store'])->name('rumah-sakit.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'RumahSakitAjaxController@update'])->name('rumah-sakit.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'RumahSakitAjaxController@remove'])->name('rumah-sakit.remove');
});

Route::group(['prefix' => 'status-pernikahan-ajax','namespace' => 'StatusPernikahan'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'StatusPernikahanAjaxController@getAll'])->name('status-pernikahan.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'StatusPernikahanAjaxController@getById'])->name('status-pernikahan.getById');
    Route::post('store', ['middleware' => 'web', 'uses' => 'StatusPernikahanAjaxController@store'])->name('status-pernikahan.store');
    Route::post('update', ['middleware' => 'web', 'uses' => 'StatusPernikahanAjaxController@update'])->name('status-pernikahan.update');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'StatusPernikahanAjaxController@remove'])->name('status-pernikahan-ajax.remove');
});

Route::group(['prefix' => 'pemeriksaan-penunjang-ajax','namespace' => 'PemeriksaanPenunjang'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangAjaxController@getAll'])->name('pemeriksaan-penunjang-ajax.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangAjaxController@getById'])->name('pemeriksaan-penunjang-ajax.getById');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'PemeriksaanPenunjangAjaxController@remove'])->name('pemeriksaan-penunjang-ajax.remove');
});

Route::group(['prefix' => 'diagnosa-ajax','namespace' => 'Diagnosa'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'DiagnosaAjaxController@getAll'])->name('diagnosa-ajax.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'DiagnosaAjaxController@getById'])->name('diagnosa-ajax.getById');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'DiagnosaAjaxController@remove'])->name('diagnosa-ajax.remove');
});

Route::group(['prefix' => 'terapi-ajax','namespace' => 'Terapi'], function(){
    Route::post('list', ['middleware' => 'web', 'uses' => 'TerapiAjaxController@getAll'])->name('terapi-ajax.all');
    Route::post('getById', ['middleware' => 'web', 'uses' => 'TerapiAjaxController@getById'])->name('terapi-ajax.getById');
    Route::post('remove', ['middleware' => 'web', 'uses' => 'TerapiAjaxController@remove'])->name('terapi-ajax.remove');
});

Route::group(['prefix' => 'migration-data','namespace' => 'MigrationData'], function(){
    Route::get('pasien', ['middleware' => 'web', 'uses' => 'MigrationDataController@pasien'])->name('migration-data.pasien');
});