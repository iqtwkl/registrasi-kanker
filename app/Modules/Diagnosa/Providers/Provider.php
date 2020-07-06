<?php
namespace App\Modules\Diagnosa\Providers;

use App\Modules\Diagnosa\Contracts\DiagnosaContract;
use App\Modules\Diagnosa\Repositories\DiagnosaRepository;
use App\Modules\Diagnosa\Repositories\IDiagnosaRepository;
use App\Modules\Diagnosa\Services\DiagnosaService;
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
            IDiagnosaRepository::class,
            DiagnosaRepository::class
        );
    }

    public function bindService() {
        $this->app->bind(
            DiagnosaContract::class,
            DiagnosaService::class
        );
    }
}