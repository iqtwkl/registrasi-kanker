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
        $filter = [];
        if(count($search) > 0) {
            foreach ($search as $key => $value) {
                if (in_array($key,['nama', 'email'])) {
                    if (!empty($value) && trim($value) != '') {
                        $filter[] = " (LOWER(".$key.") like '%" . strtolower($value) . "%') ";
                    }
                }
            }
        }

        if(count($filter) > 0){
            $condition .= " and (";
            $i=0;
            foreach($filter as $k => $item){
                if($i > 0){
                    $condition .= " or ";
                }
                $condition .= $item;
                $i++;
            }
            $condition .= ")  ";
        }

        $orderByRaw = ' 1 asc';
        if(count($sort) > 0) {
            foreach ($sort as $key => $value) {
                $orderByRaw = ' '.$key.' '.$value;
            }
        }

        $skip = intval($limit) * intval($offset);
        $result = $this->model->query()->whereRaw($condition)->orderByRaw($orderByRaw)->skip($skip)->take($limit)->get();
        $count = $this->model->query()->selectRaw("count(*) as jml")->whereRaw($condition)->get("jml");


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