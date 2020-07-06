<?php
namespace App\Modules\Diagnosa\Traits;


/**
 * 
 */
trait DiagnosaTrait
{
    public function getId(){
        return $this->id;
    }
    public function getIdPasien(){
        return $this->id_pasien;
    }
    public function pasien(){
        return $this->belongsTo('App\Modules\Pasien\Models\Pasien','id_pasien','id');
    }
    public function getKunjungan(){
        return $this->kunjungan;
    }
    public function getTglPeriksa(){
        return $this->tglPeriksa;
    }
    public function getMedrec(){
        return $this->medrec;
    }
    public function getB1(){
        return $this->b1;
    }
    public function getB2(){
        return $this->b2;
    }
    public function getB31(){
        return $this->b31;
    }
    public function getC1(){
        return $this->c1;
    }
    public function getC2(){
        return $this->c2;
    }
    public function getC3(){
        return $this->c3;
    }
    public function getC4(){
        return $this->c4;
    }
    public function getC5(){
        return $this->c5;
    }
    public function getC6(){
        return $this->c6;
    }
    public function getC7(){
        return $this->c7;
    }
    public function getC8(){
        return $this->c8;
    }
    public function getC9(){
        return $this->c9;
    }
    public function getC10(){
        return $this->c10;
    }
    public function getC11(){
        return $this->c11;
    }
    public function getC12(){
        return $this->c12;
    }
    public function getC13(){
        return $this->c13;
    }
    public function getC14(){
        return $this->c14;
    }
    public function getC15(){
        return $this->c15;
    }
    public function getC16(){
        return $this->c16;
    }
    public function getC17(){
        return $this->c17;
    }
    public function getC18(){
        return $this->c18;
    }
    public function getC19(){
        return $this->c19;
    }
    public function getC20(){
        return $this->c20;
    }
    public function getC21(){
        return $this->c21;
    }
    public function getC22(){
        return $this->c22;
    }
    public function getCreatedBy(){
        return $this->created_by;
    }
    public function getCreatedAt(){
        return $this->create_at;
    }
    public function getLastUpdatedBy(){
        return $this->last_updated_by;
    }
    public function getUpdatedAt(){
        return $this->updated_at;
    }
}
