<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 10:13 AM
 */

namespace App\Modules\PemeriksaanFisik\Traits;


trait PemeriksaanFisikTrait{
    public function getId(){
        return $this->id;
    }

    public function getIdPasien(){
        return $this->id_pasien;
    }

    public function pasien() {
        return $this->belongsTo('App\Modules\Pasien\Models\Pasien','id_pasien','id');
    }
    public function getKunjungan(){
        return $this->kunjungan;
    }

    public function getTglPeriksa(){
        return $this->tglPeriksa;
    }

    public function getTd(){
        return $this->td;
    }

    public function getTd2(){
        return $this->td2;
    }

    public function getNadi(){
        return $this->nadi;
    }

    public function getTb(){
        return $this->td;
    }

    public function getBb(){
        return $this->bb;
    }

    public function getMedrec(){
        return $this->medrec;
    }

    public function getKesadaran(){
        return $this->kesadaran;
    }

    public function getKs1(){
        $ks1 = '-';
        switch($this->ks1){
            case '1': $ks1 = '0 - Meninggal'; break;
            case '2': $ks1 = '10 - Penderita sampai pada keadaan terminal (moribund), proses kematian sedang berlangsung.'; break;
            case '3': $ks1 = '20 - Sangat terlihat sakit. Harus mendapatkan perawatan khusus di Rumah Sakit dan perawatan penunjang yang memadai.'; break;            
            case '4': $ks1 = '30 - Sangat tidak berdaya. Membutuhkan perawatan medis khusus di Rumah Sakit walaupun tidak dalam keadaan yang mengancam jiwa.'; break;
            case '5': $ks1 = '40 - Membutuhkan perhatian medis secara khusus dan pendampingan.'; break;
            case '6': $ks1 = '50 - Tidak dapat melakukan aktifitas sehari-hari. Sangat membutuhkan bantuan orang lain dan pengobatan medis.'; break;
            case '7': $ks1 = '60 - Tidak dapat melakukan aktifitas sehari-hari. Membutuhkan bantuan orang lain pada keadaan yang sangat sulit, sebagian besar keperluan diri dapat dipenuhi oleh diri sendiri.'; break;
            case '8': $ks1 = '70 - Tidak dapat melakukan aktifitas sehari-hari. Mampu menjaga keadaan diri sendiri (care for self).';
            case '9': $ks1 = '80 - Mampu melakukan aktifitas dengan usaha (effort). Didapatkan beberapa tanda gejala dari penyakit.'; break;
            case '10': $ks1 = '90 - Mampu melakukan aktifitas sehari-hari, Didapatkan tanda minimal dari gejala dan penyakit.'; break;
            case '11': $ks1 = '100 - Aktifitas normal, tidak ada keluhan, tidak didapatkan adanya penyakit.'; break;
            default: $ks1 = '-';
        }
        return $ks1;
    }

    public function getKs2(){
        return $this->ks2;
    }

    public function getKs3(){
        return $this->ks3;
    }

    public function getKs4(){
        return $this->ks4;
    }

    public function getKs5(){
        return $this->ks5;
    }

    public function getKs6(){
        return $this->ks6;
    }

    public function getKs7(){
        return $this->ks7;
    }

    public function getKs8(){
        return $this->ks8;
    }

    public function getKs9(){
        return $this->ks9;
    }

    public function getKs10(){
        return $this->ks10;
    }

    public function getKs11(){
        return $this->ks11;
    }

    public function getKs12(){
        return $this->ks12;
    }

    public function getKs13(){
        return $this->ks13;
    }

    public function getKs14(){
        return $this->ks14;
    }

    public function getKs15(){
        return $this->ks15;
    }

    public function getKs16(){
        return $this->ks16;
    }

    public function getKs17(){
        return $this->ks17;
    }

    public function getKs18(){
        $val = '-';
        switch($this->ks18){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs19(){
        $val = '-';
        switch($this->ks19){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs20(){
        $val = '-';
        switch($this->ks20){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs21(){
        $val = '-';
        switch($this->ks21){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs22(){
        $val = '-';
        switch($this->ks22){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            case '3': $val = 'Pergerakan Simetris'; break;                                                                                              
            case '4': $val = 'Pergerakan Asimetris'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs23(){
        $val = '-';
        switch($this->ks23){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            case '3': $val = 'Pergerakan Simetris'; break;                                                                                              
            case '4': $val = 'Pergerakan Asimetris'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs24(){
        $val = '-';
        switch($this->ks24){
            case '0': $val = 'Letak Tengah'; break;
            case '1': $val = 'Terdorong Ke Kiri'; break;
            case '2': $val = 'Terdorong Ke Kanan'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs25(){
        return $this->ks25;
    }

    public function getKs26(){
        $val = '-';
        switch($this->ks26){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs27(){
        $val = '-';
        switch($this->ks27){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs28(){
        $val = '-';
        switch($this->ks28){            
            case '1': $val = 'Terbuka'; break;
            case '2': $val = 'Tertutup'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs29(){
        return $this->ks29;
    }

    public function getKs30(){
        $val = '-';
        switch($this->ks30){
            case '0': $val = 'T0'; break;
            case '1': $val = 'T1'; break;
            case '2': $val = 'T2'; break;                                                
            case '3': $val = 'T3'; break;                                                
            case '4': $val = 'T4'; break;                                                
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs31(){
        $val = '-';
        switch($this->ks31){
            case '0': $val = 'T0'; break;
            case '1': $val = 'T1'; break;
            case '2': $val = 'T2'; break;                                                
            case '3': $val = 'T3'; break;                                                
            case '4': $val = 'T4'; break;                                                
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs32(){
        $val = '-';
        switch($this->ks32){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Bulging'; break;
            case '2': $val = 'Ulkus'; break;                                                
            case '3': $val = 'Destruksi'; break;                                                                                                            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs33(){
        $this->ks33;
    }

    public function getKs34(){
        $val = '-';
        switch($this->ks34){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Bulging'; break;
            case '2': $val = 'Infiltrasi Tumor'; break;                                                            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs35(){
        return $this->ks35;
    }

    public function getKs36(){
        $val = '-';
        switch($this->ks36){
            case '0': $val = 'Eritroplakia'; break;
            case '1': $val = 'Melanosis'; break;
            case '2': $val = 'Hiperpigmentasi'; break;                                                
            case '3': $val = 'Normal'; break;                                                                                                            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs37(){
        return $this->ks37;
    }

    public function getKs38(){
        $val = '-';
        switch($this->ks38){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs39(){
        return $this->ks39;
    }

    public function getKs40(){
        return $this->ks40;
    }

    public function getKs41(){
        return $this->ks41;
    }

    public function getKs42(){
        $val = '-';
        switch($this->ks42){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Maloklusi'; break;            
            case '2': $val = 'Karies Dentis'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs43(){
        return $this->ks43;
    }

    public function getKs44(){
        $val = '-';
        switch($this->ks44){            
            case '1': $val = 'Kiri'; break;            
            case '2': $val = 'Kanan'; break;            
            case '3': $val = 'Bilateral'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs45(){
        return $this->ks45;
    }

    public function getKs46(){
        return $this->ks46;
    }

    public function getKs47(){
        $val = '-';
        switch($this->ks47){            
            case '1': $val = 'Ya'; break;            
            case '2': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs48(){
        $val = '-';
        switch($this->ks48){            
            case '1': $val = 'Kiri'; break;            
            case '2': $val = 'Kanan'; break;            
            case '3': $val = 'Bilateral'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs49(){
        $val = '-';
        switch($this->ks49){            
            case '5': $val = 'Normal'; break;            
            case '1': $val = 'Unilateral'; break;            
            case '2': $val = 'Kiri'; break;            
            case '3': $val = 'Kanan'; break;            
            case '4': $val = 'Bilateral'; break;            
            case '6': $val = 'Ikut Bergerak Saat Menelan'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs50(){
        return $this->ks50;
    }

    public function getKs51(){
        $val = '-';
        switch($this->ks51){            
            case '1': $val = 'Ada'; break;            
            case '2': $val = 'Tidak Ada'; break;                     
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs52(){
        return $this->ks52;
    }

    public function getKs53(){
        $val = '-';
        switch($this->ks53){            
            case '1': $val = 'Keras'; break;            
            case '2': $val = 'Lunak'; break;            
            case '3': $val = 'Terfiksir'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs54(){
        $val = '-';
        switch($this->ks54){            
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

    public function getKs55(){
        $val = '-';
        switch($this->ks55){            
            case '1': $val = 'Kiri'; break;            
            case '2': $val = 'Kanan'; break;            
            case '3': $val = 'Bilateral'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs56(){
        $val = '-';
        switch($this->ks56){            
            case '1': $val = 'Soliter'; break;            
            case '2': $val = 'Multipel'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs57(){
        $val = '-';
        switch($this->ks57){            
            case '1': $val = 'Simetris'; break;            
            case '2': $val = 'Asimetris'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs58(){
        $val = '-';
        switch($this->ks58){            
            case '1': $val = 'Sentral'; break;            
            case '2': $val = 'Perifer'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs59(){
        $val = '-';
        switch($this->ks59){            
            case '1': $val = 'HB I'; break;            
            case '2': $val = 'HB II'; break;            
            case '3': $val = 'HB III'; break;            
            case '4': $val = 'HB IV'; break;            
            case '5': $val = 'HB V'; break;            
            case '6': $val = 'HB VI'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs60(){
        $val = '-';
        switch($this->ks60){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Hiperemis'; break;
            case '3': $val = 'Massa'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs61(){
        return $this->ks61;
    }

    public function getKs62(){
        $val = '-';
        switch($this->ks62){
            case '0': $val = 'Tenang'; break;
            case '1': $val = 'Hiperemis'; break;
            case '2': $val = 'Massa'; break;                        
            case '3': $val = 'Pergerakan Simetris'; break;                        
            case '4': $val = 'Pergerakan Asimetris'; break;                        
            case '5': $val = 'Parese'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs63(){
        $val = '-';
        switch($this->ks62){
            case '0': $val = 'Tenang'; break;
            case '1': $val = 'Hiperemis'; break;
            case '2': $val = 'Massa'; break;                        
            case '3': $val = 'Pergerakan Simetris'; break;                        
            case '4': $val = 'Pergerakan Asimetris'; break;                        
            case '5': $val = 'Parese'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs64(){
        $val = '-';
        switch($this->ks64){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Massa'; break;
            case '3': $val = 'Hipertrofi Grade I'; break;                        
            case '3': $val = 'Hipertrofi Grade II'; break;                        
            case '3': $val = 'Hipertrofi Grade III'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs65(){
        return $this->ks65;
    }

    public function getKs66(){
        $ks66 = '-';
        switch($this->ks66){
            case '1': $ks66 = '0 - Sepenuhnya aktif, dapat mengerjakan aktifitas sama seperti sebelum sakit tanpa ada hambatan'; break;
            case '2': $ks66 = '1 - Terdapat hambatan pada aktifitas fisik berat namun masih dapat berjalan dan mengerjakan pekerjaan ringan atau pekerjaan yang sifatnya tidak banyak berpindah tempat. contohnya, pekerjaan rumah ringan, pekerjaan kantor'; break;
            case '3': $ks66 = '2 - Dapat berjalan dan mengurus diri sendiri namun tidak dapat mengerjakan aktifitas lainnya. Jumlah aktivitas lebih dari 50%'; break;            
            case '4': $ks66 = '3 - Hanya dapat mengurus dirinya secara terbatas, kegiatannya terbatas di tempat tidur dan kursi lebih dari 50% dari jumlah aktivitas biasa'; break;
            case '5': $ks66 = '4 - Tidak dapat beraktifitas. Tidak dapat mengurus dirinya sendiri. Secara penuh terbatas pada tempat tidur'; break;
            case '6': $ks66 = '5 - Kematian'; break;    
            default: $ks66 = '-';        
        }
        return $ks66;
    }

    public function getKs67(){
        return $this->ks67;
    }

    public function getKs68(){
        $val = '-';
        switch($this->ks68){            
            case '1': $val = 'Ya'; break;            
            case '2': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69a(){
        $val = '-';
        switch($this->ks69a){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69b(){
        $val = '-';
        switch($this->ks69b){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69c(){
        $val = '-';
        switch($this->ks69c){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69d(){
        $val = '-';
        switch($this->ks69d){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69e(){
        $val = '-';
        switch($this->ks69e){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69f(){
        $val = '-';
        switch($this->ks69f){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69g(){
        $val = '-';
        switch($this->ks69g){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69h(){
        $val = '-';
        switch($this->ks69h){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69i(){
        $val = '-';
        switch($this->ks69i){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69j(){
        $val = '-';
        switch($this->ks69j){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69k(){
        $val = '-';
        switch($this->ks69k){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs69l(){
        $val = '-';
        switch($this->ks69l){            
            case '1': $val = 'Ya'; break;            
            case '0': $val = 'Tidak'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getKs70(){
        $val = '-';
        switch($this->ks70){            
            case '1': $val = 'Kiri'; break;            
            case '2': $val = 'Kanan'; break;            
            case '3': $val = 'Bilateral'; break;            
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl1(){
        $val = '-';
        switch($this->sl1){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Hiperemis'; break;
            case '3': $val = 'Lividae'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl1a(){
        $val = '-';
        switch($this->sl1a){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Hiperemis'; break;
            case '3': $val = 'Lividae'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl2(){
        $val = '-';
        switch($this->sl2){
            case '1': $val = 'Serous'; break;
            case '2': $val = 'Mukoid'; break;
            case '3': $val = 'Seromukoid'; break;                        
            case '4': $val = 'Purulen'; break;                        
            case '5': $val = 'Mukopurulen'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl2a(){
        $val = '-';
        switch($this->sl2a){
            case '1': $val = 'Serous'; break;
            case '2': $val = 'Mukoid'; break;
            case '3': $val = 'Seromukoid'; break;                        
            case '4': $val = 'Purulen'; break;                        
            case '5': $val = 'Mukopurulen'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl3(){
        $val = '-';
        switch($this->sl3){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl3a(){
        $val = '-';
        switch($this->sl3){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl4(){
        $val = '-';
        switch($this->sl4){
            case '1': $val = 'Intak'; break;
            case '2': $val = 'Perforasi'; break;
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl4a(){
        $val = '-';
        switch($this->sl4a){
            case '1': $val = 'Intak'; break;
            case '2': $val = 'Perforasi'; break;
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl5(){
        $val = '-';
        switch($this->sl5){
            case '1': $val = 'Sentral'; break;
            case '2': $val = 'Marginal'; break;
            case '3': $val = 'Total'; break;
            case '4': $val = 'Tidak Dapat Dinilai'; break;
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl5a(){
        $val = '-';
        switch($this->sl5a){
            case '1': $val = 'Sentral'; break;
            case '2': $val = 'Marginal'; break;
            case '3': $val = 'Total'; break;
            case '4': $val = 'Tidak Dapat Dinilai'; break;
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl6(){
        $val = '-';
        switch($this->sl6){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Hiperemis'; break;
            case '3': $val = 'Lividae'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl6a(){
        $val = '-';
        switch($this->sl6a){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Hiperemis'; break;
            case '3': $val = 'Lividae'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl7(){
        $val = '-';
        switch($this->sl7){
            case '1': $val = 'Serous'; break;
            case '2': $val = 'Mukoid'; break;
            case '3': $val = 'Seromukoid'; break;                        
            case '4': $val = 'Purulen'; break;                        
            case '5': $val = 'Mukopurulen'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl7a(){
        $val = '-';
        switch($this->sl7a){
            case '1': $val = 'Serous'; break;
            case '2': $val = 'Mukoid'; break;
            case '3': $val = 'Seromukoid'; break;                        
            case '4': $val = 'Purulen'; break;                        
            case '5': $val = 'Mukopurulen'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl8(){
        $val = '-';
        switch($this->sl8){
            case '1': $val = 'Eutrofi'; break;
            case '2': $val = 'Hipertrofi'; break;                                    
            case '3': $val = 'Atrofi'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl8a(){
        $val = '-';
        switch($this->sl8a){
            case '1': $val = 'Eutrofi'; break;
            case '2': $val = 'Hipertrofi'; break;                                    
            case '3': $val = 'Atrofi'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl9(){
        $val = '-';
        switch($this->sl9){
            case '1': $val = 'Tidak Ada Deviasi'; break;
            case '2': $val = 'Deviasi'; break;                                                
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl9a(){
        $val = '-';
        switch($this->sl9a){
            case '1': $val = 'Tidak Ada Deviasi'; break;
            case '2': $val = 'Deviasi'; break;                                                
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl10(){
        $val = '-';
        switch($this->sl10){
            case '1': $val = 'Normal'; break;
            case '2': $val = 'Menurun'; break;                                                
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl10a(){
        $val = '-';
        switch($this->sl10){
            case '1': $val = 'Normal'; break;
            case '2': $val = 'Menurun'; break;                                                
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl11(){
        $val = '-';
        switch($this->sl11){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Hiperemis'; break;
            case '3': $val = 'Lividae'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl12(){
        $val = '-';
        switch($this->sl12){
            case '0': $val = 'Normal'; break;
            case '1': $val = 'Tumor Eksofitik'; break;
            case '2': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl13(){
        $val = '-';
        switch($this->sl13){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl14(){
        $val = '-';
        switch($this->sl14){
            case '1': $val = 'Serous'; break;
            case '2': $val = 'Mukoid'; break;
            case '3': $val = 'Seromukoid'; break;                        
            case '4': $val = 'Purulen'; break;                        
            case '5': $val = 'Mukopurulen'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl15(){
        $val = '-';
        switch($this->sl15){
            case '1': $val = 'Eutrofi'; break;
            case '2': $val = 'Hipertrofi'; break;                                    
            case '3': $val = 'Atrofi'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl16(){
        $val = '-';
        switch($this->sl16){
            case '1': $val = 'Eutrofi'; break;
            case '2': $val = 'Hipertrofi'; break;                                    
            case '3': $val = 'Atrofi'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl17(){
        $val = '-';
        switch($this->sl17){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl18(){
        $val = '-';
        switch($this->sl18){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl19(){
        $val = '-';
        switch($this->sl19){
            case '1': $val = 'Serous'; break;
            case '2': $val = 'Mukoid'; break;
            case '3': $val = 'Seromukoid'; break;                        
            case '4': $val = 'Purulen'; break;                        
            case '5': $val = 'Mukopurulen'; break;                        
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl20(){
        $val = '-';
        switch($this->sl20){
            case '1': $val = 'Polip'; break;
            case '2': $val = 'Tumor Eksofitik'; break;
            case '3': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl21(){
        $val = '-';
        switch($this->sl21){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Tumor Eksofitik'; break;
            case '3': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl22(){
        $val = '-';
        switch($this->sl22){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Tumor Eksofitik'; break;
            case '3': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl23(){
        $val = '-';
        switch($this->sl23){
            case '1': $val = 'Normal'; break;
            case '2': $val = 'Tumor Eksofitik'; break;
            case '3': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl24(){
        $val = '-';
        switch($this->sl24){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl24a(){
        $val = '-';
        switch($this->sl24a){
            case '1': $val = 'Ada'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl25(){
        return $this->sl25;
    }

    public function getSl26(){
        $val = '-';
        switch($this->sl26){
            case '1': $val = 'Ya'; break;
            case '2': $val = 'Tidak'; break;                                    
            default: $val = '-';        
        }
        return $val;
    }

    public function getSl27(){
        $val = '-';
        switch($this->sl27){
            case '1': $val = 'Tenang'; break;
            case '2': $val = 'Tumor Eksofitik'; break;
            case '3': $val = 'Tumor Ulseratif'; break;                                                                                              
            default: $val = '-';        
        }
        return $val;
    }

    public function getCreatedAt(){
        return $this->created_at;
    }

    public function getUpdatedAt(){
        return $this->updated_at;
    }

    public function getCreatedBy(){
        return $this->created_by;
    }

    public function getLastUpdatedBy(){
        return $this->last_updated_by;
    }
}