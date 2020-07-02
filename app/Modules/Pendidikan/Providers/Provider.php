<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:50
 */

namespace App\Modules\Pendidikan\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Pendidikan\Repositories\IPendidikanRepository;
use App\Modules\Pendidikan\Repositories\PendidikanRepository;
use App\Modules\Pendidikan\Contracts\PendidikanContract;
use App\Modules\Pendidikan\Services\PendidikanService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IPendidikanRepository::class,
            PendidikanRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            PendidikanContract::class,
            PendidikanService::class
        );
    }
}