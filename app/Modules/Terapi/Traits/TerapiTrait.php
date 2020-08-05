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
        $val = '-';
        switch($this->b4) {
            case '1' : $val = 'Operasi + Radioterapi'; break;
            case '2' : $val = 'Radioterapi'; break;
            case '3' : $val = 'Kemoterapi'; break;
            case '4' : $val = 'Kemoradiasi'; break;
            case '5' : $val = 'Operasi'; break;
            default: $val = '-';
        }
        return $val;
    } 
    public function getB5(){
        $val = '-';
        switch($this->b5) {
            case '1' : $val = 'Cobalt'; break;
            case '2' : $val = '2D / 3D'; break;
            case '3' : $val = 'IMRT'; break;
            case '4' : $val = 'Linac'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->b14) {
            case '1' : $val = '3x'; break;
            case '2' : $val = '> 3x'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->b21) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22a(){
        $val = '-';
        switch($this->b22a) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22b(){
        $val = '-';
        switch($this->b22b) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22c(){
        $val = '-';
        switch($this->b22c) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22d(){
        $val = '-';
        switch($this->b22d) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22e(){
        $val = '-';
        switch($this->b22e) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22f(){
        $val = '-';
        switch($this->b22f) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22g(){
        $val = '-';
        switch($this->b22g) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22h(){
        $val = '-';
        switch($this->b22h) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22i(){
        $val = '-';
        switch($this->b22i) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22j(){
        $val = '-';
        switch($this->b22j) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22k(){
        $val = '-';
        switch($this->b22k) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22l(){
        $val = '-';
        switch($this->b22l) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22m(){
        $val = '-';
        switch($this->b22m) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22n(){
        $val = '-';
        switch($this->b22n) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22o(){
        $val = '-';
        switch($this->b22o) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22p(){
        $val = '-';
        switch($this->b22p) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22q(){
        $val = '-';
        switch($this->b22q) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22r(){
        $val = '-';
        switch($this->b22r) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22s(){
        $val = '-';
        switch($this->b22s) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22t(){
        $val = '-';
        switch($this->b22t) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22u(){
        $val = '-';
        switch($this->b22u) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22v(){
        $val = '-';
        switch($this->b22v) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB22_lainnya(){
        return $this->b22_lainnya;
    }
    public function getB23(){
        $val = '-';
        switch($this->b23) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB24(){
        $val = '-';
        switch($this->b22a) {
            case '1' : $val = 'Radikal'; break;
            case '2' : $val = 'Radikal Modifikasi'; break;            
            case '2' : $val = 'Selektif'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB25(){
        $val = '-';
        switch($this->b25) {
            case '1' : $val = '< 3 Bulan'; break;
            case '2' : $val = '6 Bulan'; break;            
            case '3' : $val = '> 12 Bulan'; break;            
            case '4' : $val = '3 - 6 Bulan'; break;            
            case '5' : $val = '12 Bulan'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB26(){
        return $this->b26;
    }
    public function getB27(){
        $val = '-';
        switch($this->b27) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB28(){
        $val = '-';
        switch($this->b28) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB29(){
        $val = '-';
        switch($this->b29) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getB30(){
        $val = '-';
        switch($this->b30) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->b36) {
            case '1' : $val = '3x'; break;
            case '2' : $val = '> 3x'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->b41) {
            case '1' : $val = '3x'; break;
            case '2' : $val = '> 3x'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->b46) {
            case '1' : $val = '6x'; break;
            case '2' : $val = '7x'; break;
            case '3' : $val = '12x'; break;
            case '4' : $val = '> 12x'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->b51) {
            case '1' : $val = '3x'; break;
            case '2' : $val = '6x'; break;    
            case '3' : $val = '> 6x'; break;        
            default: $val = '-';
        }
        return $val;
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