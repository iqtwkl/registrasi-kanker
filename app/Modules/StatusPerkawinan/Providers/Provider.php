<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 14:37
 */

namespace App\Modules\StatusPerkawinan\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\StatusPerkawinan\Repositories\IStatusPerkawinanRepository;
use App\Modules\StatusPerkawinan\Repositories\StatusPerkawinanRepository;
use App\Modules\StatusPerkawinan\Contracts\StatusPerkawinanContract;
use App\Modules\StatusPerkawinan\Services\StatusPerkawinanService;

class StatusPerkawinanProvider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IStatusPerkawinanRepository::class,
            StatusPerkawinanRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            StatusPerkawinanContract::class,
            StatusPerkawinanService::class
        );
    }
}