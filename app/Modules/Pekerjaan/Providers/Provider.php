<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:45
 */

namespace App\Modules\Pekerjaan\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Pekerjaan\Repositories\IPekerjaanRepository;
use App\Modules\Pekerjaan\Repositories\PekerjaanRepository;
use App\Modules\Pekerjaan\Contracts\PekerjaanContract;
use App\Modules\Pekerjaan\Services\PekerjaanService;

class PekerjaanProvider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IPekerjaanRepository::class,
            PekerjaanRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            PekerjaanContract::class,
            PekerjaanService::class
        );
    }
}