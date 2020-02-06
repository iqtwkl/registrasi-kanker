<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:45
 */

namespace App\Modules\Agama\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Agama\Repositories\IAgamaRepository;
use App\Modules\Agama\Repositories\AgamaRepository;
use App\Modules\Agama\Contracts\AgamaContract;
use App\Modules\Agama\Services\AgamaService;

class AgamaProvider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IAgamaRepository::class,
            AgamaRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            AgamaContract::class,
            AgamaService::class
        );
    }
}