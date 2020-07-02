<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:37
 */

namespace App\Modules\StatusPernikahan\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\StatusPernikahan\Repositories\IStatusPernikahanRepository;
use App\Modules\StatusPernikahan\Repositories\StatusPernikahanRepository;
use App\Modules\StatusPernikahan\Contracts\StatusPernikahanContract;
use App\Modules\StatusPernikahan\Services\StatusPernikahanService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IStatusPernikahanRepository::class,
            StatusPernikahanRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            StatusPernikahanContract::class,
            StatusPernikahanService::class
        );
    }
}