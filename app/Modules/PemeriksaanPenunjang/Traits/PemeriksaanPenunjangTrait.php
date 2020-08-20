<?php

namespace App\Modules\PemeriksaanPenunjang\Traits;


trait PemeriksaanPenunjangTrait {

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
        return $this->tgl_periksa;
    }
    public function getA1(){
        return $this->a1;
    }
    public function getA2(){
        return $this->a2;
    }
    public function getA3(){
        return $this->a3;
    }
    public function getA4(){
        return $this->a4;
    }
    public function getA4a(){
        return $this->a4a;
    }
    public function getA5(){
        return $this->a5;
    }
    public function getA6(){
        return $this->a6;
    }
    public function getA7(){
        $val = '-';
        switch($this->a7) {
            case '1' : $val = 'Non Hodgkin Limfoma Maligna'; break;
            case '2' : $val = 'Karsinoma Tidak Berkeratin'; break;
            case '3' : $val = 'Tidak Berdiferensiasi'; break;
            case '4' : $val = 'T/NK Cell Lymphoma'; break;
            case '5' : $val = 'Adenocystic Carcinoma'; break;
            case '6' : $val = 'Karsinoma Sel Skuamosa'; break;
            case '7' : $val = 'Neuroendokrin'; break;
            case '8' : $val = 'Rhabdomyosarcoma'; break;
            case '9' : $val = 'AdenoCarsinoma'; break;
            case '10' : $val = 'Karsinoma Sel Basal'; break;
            case '11' : $val = ' Melanoma Maligna'; break;
            case '12' : $val = 'Polymorphous Low-Grade AdenoCarcinoma'; break;
            case '13' : $val = 'Mucoepidermoid Carcinoma'; break;
            case '14' : $val = 'Hemangioma'; break;
            case '15' : $val = 'Small Cell Carcinoma'; break;
            case '16' : $val = 'Atypical Carcinoid'; break;
            case '17' : $val = 'Chondrosarcoma'; break;
            case '18' : $val = 'Spindle Cell  Carcinoma'; break;
            case '19' : $val = 'Rhabdomyosarcoma'; break;
            case '20' : $val = 'Pleomorfik Adenoma'; break;
            case '21' : $val = 'Granular Cell Tumor'; break;
            case '22' : $val = 'Fibrus Histiositoma'; break;
            case '24' : $val = 'Chondroma'; break;
            case '25' : $val = 'Chondroblastoma'; break;
            case '26' : $val = 'Schwanoma'; break;
            case '27' : $val = 'Paraganglioma'; break;
            case '28' : $val = 'Hemangioendotelioma'; break;
            case '29' : $val = 'Vascular Malformation'; break;
            case '30' : $val = 'Struma Uninodusa Non Toksika'; break;
            case '31' : $val = 'Struma Multinodusa Non Toksika'; break;
            case '32' : $val = 'Papilari Carcinoma Tiroid'; break;
            case '33' : $val = 'Folikuler Carcinoma Tiroid'; break;
            case '34' : $val = 'Medulare Carcinoma Tiroid'; break;
            case '35' : $val = 'Anaplastic Carcinoma Tiroid'; break;
            case '36' : $val = 'Kista Duktus Tiroglosus'; break;
            case '37' : $val = 'Tumor Warthin'; break;
            case '38' : $val = 'Karsinoma Sel Asinik'; break;
            case '39' : $val = 'Kista Brankial : Tipe I'; break;
            case '39' : $val = 'Kista Brankial : Tipe II'; break;
            case '39' : $val = 'Kista Brankial : Tipe III'; break;
            case '39' : $val = 'Kista Brankial : Tipe IV'; break;
            case '40' : $val = ' Wegener’s Granulomatosis (WG)'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getA7a(){
        return $this->a7a;
    }
    public function getA8(){
        return $this->a8;
    }
    public function getA9(){
        return $this->a9;
    }
    public function getA10(){
        return $this->a10;
    }
    public function getA11(){
        return $this->a11;
    }
    public function getA12(){
        $val = '-';
        switch($this->a12) {
            case '1' : $val = 'Kanan'; break;
            case '2' : $val = 'Kiri'; break;
            case '3' : $val = 'Bilateral'; break;
            default: $val= '-';
        }
        return $val;
    }
    public function getA13(){
        $val = '-';
        switch($this->a13) {
            case '1' : $val = 'Kanan'; break;
            case '2' : $val = 'Kiri'; break;
            case '3' : $val = 'Bilateral'; break;
            default: $val= '-';
        }
        return $val;
    }
    public function getA14(){
        return $this->a14;
    }
    public function getA15(){
        $val = '-';
        switch($this->a15){            
            case '1': $val = 'Level Ia'; break;            
            case '2': $val = 'Level Ib'; break;            
            case '3': $val = 'Level IIa'; break;            
            case '4': $val = 'Level IIb'; break;            
            case '5': $val = 'Level III'; break;            
            case '6': $val = 'Level IV'; break;            
            case '7': $val = 'Level Va'; break;            
            case '8': $val = 'Level Vb'; break;            
            case '9': $val = 'Level VI'; break;            
            default: $val = '-';        
        }
        return $val;
    }
    public function getA16(){
        return $this->a16;
    }
    public function getA16a(){
        return $this->a16a;
    }
    public function getA17(){
        return $this->a17;
    }
    public function getA18(){
        return $this->a18;
    }
    public function getA19(){
        return $this->a19;
    }
    public function getA20(){
        return $this->a20;
    }
    public function getA201(){
        return $this->a201;
    }
    public function getA202(){
        return $this->a202;
    }
    public function getA203(){
        return $this->a203;
    }
    public function getA20a(){
        return $this->a20a;
    }
    public function getA21(){
        return $this->a21;
    }
    public function getA22(){
        return $this->a22;
    }
    public function getA23(){
        return $this->a23;
    }
    public function getA24(){
        return $this->a24;
    }
    public function getA241(){
        return $this->a241;
    }
    public function getA242(){
        return $this->a242;
    }
    public function getA243(){
        return $this->a243;
    }
    public function getA24a(){
        return $this->a24a;
    }
    public function getA25(){
        return $this->a25;
    }
    public function getA26(){
        return $this->a26;
    }
    public function getA27(){
        return $this->a27;
    }
    public function getA28(){
        return $this->a28;
    }
    public function getA281(){
        return $this->a281;
    }
    public function getA282(){
        return $this->a282;
    }
    public function getA283(){
        return $this->a283;
    }
    public function getA28a(){
        return $this->a28a;
    }
    public function getA29(){
        return $this->a29;
    }
    public function getA30(){
        return $this->a30;
    }
    public function getA31(){
        return $this->a31;
    }
    public function getA32(){
        return $this->a32;
    }
    public function getA321(){
        return $this->a321;
    }
    public function getA322(){
        return $this->a322;
    }
    public function getA323(){
        return $this->a323;
    }
    public function getA32a(){
        return $this->a32a;
    }
    public function getA33(){
        return $this->a33;
    }
    public function getA34(){
        return $this->a34;
    }
    public function getA35(){
        return $this->a35;
    }
    public function getA36(){
        return $this->a36;
    }
    public function getA361(){
        return $this->a361;
    }
    public function getA362(){
        return $this->a362;
    }
    public function getA363(){
        return $this->a363;
    }
    public function getA36a(){
        return $this->a36a;
    }
    public function getA37(){
        return $this->a37;
    }
    public function getA38(){
        return $this->a38;
    }
    public function getA39(){
        return $this->a39;
    }
    public function getA40(){
        return $this->a40;
    }
    public function getA401(){
        return $this->a401;
    }
    public function getA402(){
        return $this->a402;
    }
    public function getA403(){
        return $this->a403;
    }
    public function getA40a(){
        return $this->a40a;
    }
    public function getA41(){
        return $this->a41;
    }
    public function getA42(){
        return $this->a42;
    }
    public function getA43(){
        return $this->a43;
    }
    public function getA44(){
        return $this->a44;
    }
    public function getA441(){
        return $this->a441;
    }
    public function getA442(){
        return $this->a442;
    }
    public function getA443(){
        return $this->a443;
    }
    public function getA44a(){
        return $this->a44a;
    }
    public function getA45(){
        return $this->a45;
    }
    public function getA45a(){
        return $this->a45a;
    }
    public function getA46(){
        return $this->a46;
    }
    public function getA47(){
        return $this->a47;
    }
    public function getA48(){
        return $this->a48;
    }
    public function getA49(){
        return $this->a49;
    }
    public function getA50(){
        return $this->a50;
    }
    public function getA51(){
        $val = '-';
        switch($this->a51){            
            case '1': $val = 'Normal'; break;            
            case '2': $val = 'Tuli Sensorineural'; break;            
            case '3': $val = 'Tuli Konduktif'; break;            
            case '4': $val = 'Tuli Campuran'; break;                               
            default: $val = '-';        
        }
        return $val;
    }
    public function getA52(){
        $val = '-';
        switch($this->a52){            
            case '1': $val = 'Normal'; break;            
            case '2': $val = 'Tuli Sensorineural'; break;            
            case '3': $val = 'Tuli Konduktif'; break;            
            case '4': $val = 'Tuli Campuran'; break;                               
            default: $val = '-';        
        }
        return $val;
    }
    public function getA53(){
        return $this->a53;
    }
    public function getA54(){
        $val = '-';
        switch($this->a54){            
            case '1': $val = 'Tipe A'; break;            
            case '2': $val = 'Tipe B'; break;            
            case '3': $val = 'Tipe C'; break;            
            case '4': $val = 'Tipe Ad'; break;                               
            case '5': $val = 'Tipe As'; break;                               
            default: $val = '-';        
        }
        return $val;
    }
    public function getA55(){
        $val = '-';
        switch($this->a55){            
            case '1': $val = 'Tipe A'; break;            
            case '2': $val = 'Tipe B'; break;            
            case '3': $val = 'Tipe C'; break;            
            case '4': $val = 'Tipe Ad'; break;                               
            case '5': $val = 'Tipe As'; break;                               
            default: $val = '-';        
        }
        return $val;
    }
    public function getA56(){
        return $this->a56;
    }
    public function getA57(){
        return $this->a57;
    }
    public function getA58(){
        return $this->a58;
    }
    public function getA59(){
        return $this->a59;
    }
    public function getA60(){
        return $this->a60;
    }
    public function getA601(){
        return $this->a601;
    }
    public function getA602(){
        return $this->a602;
    }
    public function getA603(){
        return $this->a603;
    }
    public function getA61(){
        return $this->a61;
    }
    public function getA62(){
        return $this->a62;
    }
    public function getA63(){
        return $this->a63;
    }
    public function getA64(){
        return $this->a64;
    }
    public function getA65(){
        return $this->a65;
    }
    public function getA66(){
        return $this->a66;
    }
    public function getA67(){
        return $this->a67;
    }
    public function getSl1(){
        return $this->s11;
    }
    public function getSl2(){
        return $this->s12;
    }
    public function getSl3(){
        return $this->s13;
    }
    public function getSl4(){
        return $this->s14;
    }
    public function getSl5(){
        return $this->s15;
    }
    public function getSl6(){
        return $this->s16;
    }
    public function getSl7(){
        return $this->s17;
    }
    public function getSl8(){
        return $this->s18;
    }
    public function getSl9(){
        return $this->s19;
    }
    public function getSl10(){
        return $this->s110;
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