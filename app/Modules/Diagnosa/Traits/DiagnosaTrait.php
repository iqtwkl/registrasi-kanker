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
        $val = '-';
        switch($this->b1) {
            case '1' : $val = 'Ya'; break;
            case '2' : $val = 'Tidak'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getB2(){
        return $this->b2;
    }
    public function getB31(){
        $val = '-';
        switch($this->b31) {
            case '1' : $val = 'T1'; break;
            case '2' : $val = 'T2'; break;
            case '3' : $val = 'T3'; break;
            case '4' : $val = 'T4a'; break;
            case '5' : $val = 'T4b'; break;
            case '6' : $val = 'N1'; break;
            case '7' : $val = 'N2'; break;
            case '8' : $val = 'N2a'; break;
            case '9' : $val = 'N2b'; break;
            case '10' : $val = 'N3'; break;
            case '11' : $val = 'M0'; break;
            case '12' : $val = 'M1'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC1(){
        $val = '-';
        switch($this->c1) {
            case '1' : $val = 'Inverted Papiloma'; break;
            case '2' : $val = 'Angifibroma Nasofaring Belia'; break;
            case '3' : $val = 'Kista Brakialis'; break;
            case '4' : $val = 'Wegener’s Garnulomatosis'; break;
            case '5' : $val = 'Hemangioma'; break;
            case '6' : $val = 'Tumor Wartin'; break;
            case '7' : $val = 'Stroma Nodusa Non Toksik'; break;
            case '8' : $val = 'Kista Duktus Tiroglosus'; break;
            case '9' : $val = 'Papiloma'; break;
            case '10' : $val = 'Kista'; break;
            case '11' : $val = 'Ameloblastoma'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC2(){
        $val = '-';
        switch($this->c2) {
            case '1' : $val = 'Karsinoma Sinus Frontalis'; break;
            case '2' : $val = 'Angifibroma Nasofaring Belia'; break;
            case '3' : $val = 'Karsinoma Sinus Etmoidalis'; break;
            case '4' : $val = 'Karsinoma Sinus Maksilaris'; break;
            case '5' : $val = 'Karsinoma Sinus Spenoidalis'; break;
            case '6' : $val = 'Karsinoma Kavum Nasi'; break;
            case '7' : $val = 'Karsinoma Laring'; break;
            case '8' : $val = 'Karsinoma Tiroid'; break;
            case '9' : $val = 'Karsinoma Nasofaring'; break;
            case '10' : $val = 'Limfoma Non Hodgkin Kepala Leher'; break;
            case '11' : $val = 'Melanoma Maligna'; break;
            case '12' : $val = 'Karsinoma sinonasal'; break;
            case '13' : $val = 'Karsinoma Lidah'; break;
            case '14' : $val = 'Karsinoma Basis Lidah'; break;
            case '15' : $val = 'Karsinoma Orofaring'; break;
            case '16' : $val = 'Karsinoma Hipofaring'; break;
            case '17' : $val = 'Karsinoma Palatum'; break;
            case '18' : $val = 'Karsinoma Parotis'; break;
            case '19' : $val = 'Karsinoma Kelenjar Submandibular'; break;
            case '20' : $val = 'Karsinoma Trakheobronkhial'; break;
            case '21' : $val = 'Karsinoma 1/3 Proksimal Esofagus'; break;
            case '22' : $val = 'Karsinoma Kulit Kepala Leher'; break;
            case '23' : $val = 'Karsinoma Leher'; break;            
            case '24' : $val = 'Karsinoma Leher'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC3(){
        $val = '-';
        switch($this->c3) {
            case '1' : $val = 'Stadium In Situ'; break;
            case '2' : $val = 'Stadium I'; break;
            case '3' : $val = 'Stadium II'; break;
            case '4' : $val = 'Stadium IVa'; break;
            case '5' : $val = 'Stadium IVb'; break;
            case '6' : $val = 'Stadium IVc'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC4(){
        $val = '-';
        switch($this->c4) {
            case '1' : $val = 'Tis'; break;
            case '2' : $val = 'T1'; break;
            case '3' : $val = 'T2'; break;
            case '4' : $val = 'T3'; break;
            case '5' : $val = 'T4a'; break;
            case '6' : $val = 'T4b'; break;
            case '7' : $val = 'N1'; break;
            case '8' : $val = 'N2'; break;
            case '9' : $val = 'N3'; break;
            case '10' : $val = 'N4'; break;
            case '11' : $val = 'M0'; break;
            case '12' : $val = 'M1'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC5(){
        $val = '-';
        switch($this->c5) {
            case '1' : $val = 'Stadium 0'; break;
            case '2' : $val = 'Stadium I'; break;
            case '3' : $val = 'Stadium II'; break;
            case '4' : $val = 'Stadium IVa'; break;
            case '5' : $val = 'Stadium IVb'; break;
            case '6' : $val = 'Stadium IVc'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC6(){
        $val = '-';
        switch($this->c5) {
            case '1' : $val = 'Stadium I'; break;
            case '2' : $val = 'Stadium II'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC7(){
        $val = '-';
        switch($this->c7) {
            case '1' : $val = 'T1'; break;
            case '2' : $val = 'T2'; break;
            case '3' : $val = 'T3'; break;
            case '4' : $val = 'T4a'; break;
            case '5' : $val = 'T4b'; break;
            case '6' : $val = 'N0'; break;
            case '7' : $val = 'N1'; break;
            case '8' : $val = 'N1b'; break;
            case '9' : $val = 'Mo'; break;
            case '10' : $val = 'M1'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC8(){
        $val = '-';
        switch($this->c8) {
            case '1' : $val = 'Stadium I'; break;
            case '2' : $val = 'Stadium II'; break;
            case '3' : $val = 'Stadium III'; break;
            case '4' : $val = 'Stadium IVa'; break;
            case '5' : $val = 'Stadium IVb'; break;
            case '6' : $val = 'Stadium IVc'; break;
            default: $val = '-';
        }
        return $val;
    }

    public function getC9(){
        $val = '-';
        switch($this->c9) {
            case '1' : $val = 'T1'; break;
            case '2' : $val = 'T2'; break;
            case '3' : $val = 'T3'; break;
            case '4' : $val = 'T4a'; break;
            case '5' : $val = 'T4b'; break;
            case '6' : $val = 'N0'; break;
            case '7' : $val = 'N1'; break;
            case '8' : $val = 'N1b'; break;
            case '9' : $val = 'Mo'; break;
            case '10' : $val = 'M1'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC10(){
        $val = '-';
        switch($this->c10) {
            case '1' : $val = 'Stadium I'; break;
            case '2' : $val = 'Stadium II'; break;
            case '3' : $val = 'Stadium III'; break;
            case '4' : $val = 'Stadium IVa'; break;
            case '5' : $val = 'Stadium IVb'; break;
            case '6' : $val = 'Stadium IVc'; break;
            default: $val = '-';
        }
        return $val;
    }
    public function getC11(){
        $val = '-';
        switch($this->c11) {
            case '1' : $val = 'T4a'; break;
            case '2' : $val = 'T4b'; break;
            case '3' : $val = 'N0'; break;
            case '4' : $val = 'N1a'; break;
            case '5' : $val = 'N1b'; break;
            case '6' : $val = 'M0'; break;
            case '7' : $val = 'M1'; break;                        
            default: $val = '-';
        }
        return $val;
    }
    public function getC12(){
        $val = '-';
        switch($this->c12) {
            case '1' : $val = 'Stadium IVa'; break;
            case '2' : $val = 'Stadium IVb'; break;
            case '3' : $val = 'Stadium IVc'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC13(){
        $val = '-';
        switch($this->c13) {
            case '1' : $val = 'T3'; break;
            case '2' : $val = 'T4a'; break;
            case '3' : $val = 'T4b'; break;
            case '4' : $val = 'N0'; break;
            case '5' : $val = 'N'; break;
            case '6' : $val = 'M0'; break;
            case '7' : $val = 'M1'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC14(){
        $val = '-';
        switch($this->c14) {
            case '1' : $val = 'Stadium III'; break;
            case '2' : $val = 'Stadium IVa'; break;
            case '3' : $val = 'Stadium IVb'; break;
            case '4' : $val = 'Stadium IVc'; break;            
            default: $val = '-';
        }
        return $val;
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
        $val = '-';
        switch($this->c18) {
            case '1' : $val = 'T1'; break;
            case '2' : $val = 'T2'; break;
            case '3' : $val = 'T3'; break;
            case '4' : $val = 'T4a'; break;
            case '5' : $val = 'T4b'; break;
            case '6' : $val = 'N0'; break;
            case '7' : $val = 'N1'; break;
            case '8' : $val = 'N1b'; break;
            case '9' : $val = 'Mo'; break;
            case '10' : $val = 'M1'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC19(){
        $val = '-';
        switch($this->c19) {
            case '1' : $val = 'T3'; break;
            case '2' : $val = 'T4a'; break;
            case '3' : $val = 'T4b'; break;
            case '4' : $val = 'N0'; break;
            case '5' : $val = 'N'; break;
            case '6' : $val = 'M0'; break;
            case '7' : $val = 'M1'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC20(){
        $val = '-';
        switch($this->c20) {
            case '1' : $val = 'Stadium I'; break;
            case '2' : $val = 'Stadium II'; break;
            case '3' : $val = 'Stadium III'; break;
            case '4' : $val = 'Stadium IV'; break;            
            default: $val = '-';
        }
        return $val;
    }
    public function getC21(){
        return $this->c21;
    }
    public function getC22(){
        $val = '-';
        switch($this->c22) {
            case '1' : $val = 'Stadium Ia'; break;
            case '2' : $val = 'Stadium Ib'; break;
            case '3' : $val = 'Stadium IIa'; break;
            case '4' : $val = 'Stadium IIb'; break;
            case '5' : $val = 'Stadium IIc'; break;            
            case '6' : $val = 'Stadium IIIa'; break;            
            case '7' : $val = 'Stadium IIIb'; break;            
            default: $val = '-';
        }
        return $val;
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
