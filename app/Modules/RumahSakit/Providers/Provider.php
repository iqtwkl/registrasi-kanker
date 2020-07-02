<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 17:45
 */

namespace App\Modules\RumahSakit\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\RumahSakit\Repositories\IRumahSakitRepository;
use App\Modules\RumahSakit\Repositories\RumahSakitRepository;
use App\Modules\RumahSakit\Contracts\RumahSakitContract;
use App\Modules\RumahSakit\Services\RumahSakitService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IRumahSakitRepository::class,
            RumahSakitRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            RumahSakitContract::class,
            RumahSakitService::class
        );
    }
}