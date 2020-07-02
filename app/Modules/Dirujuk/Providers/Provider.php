<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:44
 */

namespace App\Modules\Dirujuk\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Dirujuk\Repositories\IDirujukRepository;
use App\Modules\Dirujuk\Repositories\DirujukRepository;
use App\Modules\Dirujuk\Contracts\DirujukContract;
use App\Modules\Dirujuk\Services\DirujukService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IDirujukRepository::class,
            DirujukRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            DirujukContract::class,
            DirujukService::class
        );
    }
}