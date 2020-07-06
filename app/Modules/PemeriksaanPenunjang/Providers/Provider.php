<?php
namespace App\Modules\PemeriksaanPenunjang\Providers;

use App\Modules\PemeriksaanPenunjang\Contracts\PemeriksaanPenunjangContract;
use App\Modules\PemeriksaanPenunjang\Repositories\IPemeriksaanPenunjangRepository;
use App\Modules\PemeriksaanPenunjang\Repositories\PemeriksaanPenunjangRepository;
use App\Modules\PemeriksaanPenunjang\Services\PemeriksaanPenunjangService;
use Illuminate\Support\ServiceProvider;

class Provider extends ServiceProvider {

    public function boot() {

    }

    public function register() {
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository() {
        $this->app->bind(
            IPemeriksaanPenunjangRepository::class,
            PemeriksaanPenunjangRepository::class
        );
    }

    public function bindService() {
        $this->app->bind(
            PemeriksaanPenunjangContract::class,
            PemeriksaanPenunjangService::class
        );
    }
}