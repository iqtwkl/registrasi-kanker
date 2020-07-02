<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 10:10 AM
 */

namespace App\Modules\PemeriksaanFisik\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\PemeriksaanFisik\Repositories\IPemeriksaanFisikRepository;
use App\Modules\PemeriksaanFisik\Repositories\PemeriksaanFisikRepository;
use App\Modules\PemeriksaanFisik\Contracts\PemeriksaanFisikContract;
use App\Modules\PemeriksaanFisik\Services\PemeriksaanFisikService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IPemeriksaanFisikRepository::class,
            PemeriksaanFisikRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            PemeriksaanFisikContract::class,
            PemeriksaanFisikService::class
        );
    }
}