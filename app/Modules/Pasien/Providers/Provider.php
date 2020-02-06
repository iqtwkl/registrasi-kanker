<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:45
 */

namespace App\Modules\Pasiens\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Pasien\Repositories\IPasienRepository;
use App\Modules\Pasien\Repositories\PasienRepository;
use App\Modules\Pasien\Contracts\PasienContract;
use App\Modules\Pasien\Services\PasienService;

class PasiensProvider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IPasienRepository::class,
            PasienRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            PasienContract::class,
            PasienService::class
        );
    }
}