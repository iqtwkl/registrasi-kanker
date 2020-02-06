<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 13:39
 */

namespace App\Modules\Pendidikan\Repositories;

use App\Modules\Pendidikan\Models\Pendidikan;

class PendidikanRepository implements IPendidikanRepository{

    private $model;

    public function __construct(Pendidikan $model){
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
        $result = $this->model->whereRaw($condition)->orderByRaw($orderByRaw)->skip($skip)->take($limit);
        $count = $this->model->whereRaw($condition)->count();


        return response(["totalRecords" => $count, "data" => $result]);
    }

    public function getById($id){
        return $this->model->find($id);
    }

    public function store(array $data){
        return $this->model->create($data);
    }

    public function update(array $data, $id){
        return $this->model->find($id)->update($data);
    }

    public function remove($id){
        return $this->model->find($id)->forceDelete();
    }
}