<?php
namespace App\Modules\Terapi\Traits;


trait TerapiTrait {
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
    public function getB1a(){
        return $this->b1a;
    }
    public function getB2(){
        return $this->b2;
    } 
    public function getB3(){
        return $this->b3;
    } 
    public function getB4(){
        return $this->b4;
    } 
    public function getB5(){
        return $this->b5;
    } 
    public function getB6(){
        return $this->b6;
    } 
    public function getB7(){
        return $this->b7;
    } 
    public function getB8(){
        return $this->b8;
    } 
    public function getB9(){
        return $this->b9;
    } 
    public function getB10(){
        return $this->b10;
    }
    public function getB11(){
        return $this->b11;
    }
    public function getB12(){
        return $this->b12;
    }
    public function getB13(){
        return $this->b13;
    }
    public function getB14(){
        return $this->b14;
    }
    public function getB15(){
        return $this->b15;
    }
    public function getB16(){
        return $this->b16;
    }
    public function getB17(){
        return  $this->b17;
    }
    public function getB18(){
        return $this->b18;
    }
    public function getB19(){
        return $this->b19;
    }
    public function getB20(){
        return $this->b20;
    }
    public function getB21(){
        return $this->b21;
    }
    public function getB22a(){
        return $this->b22a;
    }
    public function getB22b(){
        return $this->b22b;
    }
    public function getB22c(){
        return $this->b22c;
    }
    public function getB22d(){
        return $this->b22d;
    }
    public function getB22e(){
        return $this->b22e;
    }
    public function getB22f(){
        return $this->b22f;
    }
    public function getB22g(){
        return $this->b22g;
    }
    public function getB22h(){
        return $this->b22h;
    }
    public function getB22i(){
        return $this->b22i;
    }
    public function getB22j(){
        return $this->b22j;
    }
    public function getB22k(){
        return $this->b22k;
    }
    public function getB22l(){
        return $this->b22l;
    }
    public function getB22m(){
        return $this->b22m;
    }
    public function getB22n(){
        return $this->b22n;
    }
    public function getB22o(){
        return $this->b22o;
    }
    public function getB22p(){
        return $this->b22p;
    }
    public function getB22q(){
        return $this->b22q;
    }
    public function getB22r(){
        return $this->b22r;
    }
    public function getB22s(){
        return $this->b22s;
    }
    public function getB22t(){
        return $this->b22t;
    }
    public function getB22u(){
        return $this->b22u;
    }
    public function getB22v(){
        return $this->b22v;
    }
    public function getB22_lainnya(){
        return $this->b22_lainnya;
    }
    public function getB23(){
        return $this->b23;
    }
    public function getB24(){
        return $this->b24;
    }
    public function getB25(){
        return $this->b25;
    }
    public function getB26(){
        return $this->b26;
    }
    public function getB27(){
        return $this->b27;
    }
    public function getB28(){
        return $this->b28;
    }
    public function getB29(){
        return $this->b29;
    }
    public function getB30(){
        return $this->b30;
    }
    public function getB31(){
        return $this->b31;
    }
    public function getB32(){
        return $this->b32;
    }
    public function getB33(){
        return $this->b33;
    }
    public function getB34(){
        return $this->b34;
    }
    public function getB35(){
        return $this->b35;
    }
    public function getB36(){
        return $this->b36;
    }
    public function getB37(){
        return $this->b37;
    }
    public function getB38(){
        return $this->b38;
    }
    public function getB39(){
        return $this->b39;
    }
    public function getB40(){
        return $this->b40;
    }
    public function getB41(){
        return $this->b41;
    }
    public function getB42(){
        return $this->b42;
    }
    public function getB43(){
        return $this->b43;
    }
    public function getB44(){
        return $this->b44;
    }
    public function getB45(){
        return $this->b45;
    }
    public function getB46(){
        return $this->b46;
    }
    public function getB47(){
        return $this->b47;
    }
    public function getB48(){
        return $this->b48;
    }
    public function getB49(){
        return $this->b49;
    }
    public function getB50(){
        return $this->b50;
    }
    public function getB51(){
        return $this->b51;
    }
    public function getSl1(){
        return $this->S11;
    }
    public function getSl2(){
        return $this->S12;
    }
    public function getSl3(){
        return $this->S13;
    }
    public function getSl4(){
        return $this->S14;
    }
    public function getSl5(){
        return $this->S15;
    }
    public function getSl6(){
        return $this->S16;
    }
    public function getSl7(){
        return $this->S17;
    }
    public function getSl8(){
        return $this->S18;
    }
    public function getSl9(){
        return $this->S19;
    } 
    public function getSl10(){
        return $this->S110;
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