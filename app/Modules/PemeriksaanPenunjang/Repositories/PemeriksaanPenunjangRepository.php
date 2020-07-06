<?php
namespace App\Modules\PemeriksaanPenunjang\Repositories;

use App\Modules\PemeriksaanPenunjang\Models\PemeriksaanPenunjang;

class PemeriksaanPenunjangRepository implements IPemeriksaanPenunjangRepository {
    
    private $model;

    public function __construct(PemeriksaanPenunjang $model)
    {
        $this->model = $model;
    }
    
    public function getAll($search = array(), $offset = null, $limit = null, $sort = array())
    {
        $condition = "1=1";
        $filter = [];
        if(count($search) > 0) {
            foreach ($search as $key => $value) {
                if (in_array($key,['nama'])) {
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
        $result = $this->model->query()->whereRaw($condition)->orderByRaw($orderByRaw)->skip($skip)->take($limit)->with('pasien:id,nama')->get();
        $count = $this->model->query()->selectRaw("count(*) as total")->whereRaw($condition)->first();


        return ["totalRecords" => $count->total, "data" => $result];
    }

    public function getById($id)
    {
        return $this->model->find($id);
    }

    public function store(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        return $this->model->where('id',$id)->update($data);
    }

    public function remove($id)
    {
        return $this->model->destroy($id);
    }
}