<?php
namespace App\Modules\Terapi\Providers;

use App\Modules\Terapi\Contracts\TerapiContract;
use App\Modules\Terapi\Repositories\ITerapiRepository;
use App\Modules\Terapi\Repositories\TerapiRepository;
use App\Modules\Terapi\Services\TerapiService;
use Illuminate\Support\ServiceProvider;

class Provider extends ServiceProvider {
    public function boot() {

    }

    public function register()
    {
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository() {
        $this->app->bind(
            ITerapiRepository::class,
            TerapiRepository::class
        );
    }

    public function bindService() {
        $this->app->bind(
            TerapiContract::class,
            TerapiService::class
        );
    }
}