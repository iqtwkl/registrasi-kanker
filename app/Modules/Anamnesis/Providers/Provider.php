<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 8:40 AM
 */

namespace App\Modules\Anamnesis\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Anamnesis\Repositories\IAnamnesisRepository;
use App\Modules\Anamnesis\Repositories\AnamnesisRepository;
use App\Modules\Anamnesis\Contracts\AnamnesisContract;
use App\Modules\Anamnesis\Services\AnamnesisService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IAnamnesisRepository::class,
            AnamnesisRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            AnamnesisContract::class,
            AnamnesisService::class
        );
    }
}