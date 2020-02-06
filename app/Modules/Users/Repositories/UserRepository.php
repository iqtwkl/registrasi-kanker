<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:45
 */

namespace App\Modules\Users\Repositories;

use App\Modules\Users\Models\User;

class UserRepository implements IUserRepository{

    private $model;

    public function __construct(User $model){
        $this->model = $model;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array()){
        $condition = "1=1";
        if(count($search) > 0) {
            foreach ($search as $key => $value) {
                if ($key == 'search_key') {
                    if (!empty($value) && trim($value) != '') {
                        $condition .= " and (LOWER(name) like '%" . strtolower($value) . "%') ";
                    }
                }
            }
        }

        $orderByRaw = ' 1 asc';
        if(count($sort) > 0) {
            foreach ($sort as $key => $value) {
                $orderByRaw = ' '.$key.' '.$value;
            }
        }

        $skip = intval($limit) * intval($offset);
        $result = $this->model->query()->whereRaw($condition)->orderByRaw($orderByRaw)->skip($skip)->take($limit);
        $count = $this->model->query()->whereRaw($condition)->count();


        return response(["totalRecords" => $count, "data" => $result]);
    }

    public function getById($id){
        return $this->model->query()->find($id);
    }

    public function store(array $data){
        return $this->model->query()->create($data);
    }

    public function update(array $data, $id){
        return $this->model->query()->find($id)->update($data);
    }

    public function remove($id){
        return $this->model->query()->find($id)->forceDelete();
    }
}