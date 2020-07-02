<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:45
 */

namespace App\Modules\Users\Providers;

use Illuminate\Support\ServiceProvider;

use App\Modules\Users\Repositories\IUserRepository;
use App\Modules\Users\Repositories\UserRepository;
use App\Modules\Users\Contracts\UserContract;
use App\Modules\Users\Services\UserService;

class Provider extends ServiceProvider{
    public function boot(){

    }

    public function register(){
        $this->bindRepository();
        $this->bindService();
    }

    public function bindRepository(){
        $this->app->bind(
            IUserRepository::class,
            UserRepository::class
        );
    }

    public function bindService(){
        $this->app->bind(
            UserContract::class,
            UserService::class
        );
    }
}