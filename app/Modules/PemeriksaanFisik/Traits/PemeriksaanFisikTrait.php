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
        return $this->tgl_periksa;
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
        return $this->ks1;
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
        return $this->ks18;
    }

    public function getKs19(){
        return $this->ks19;
    }

    public function getKs20(){
        return $this->ks20;
    }

    public function getKs21(){
        return $this->ks21;
    }

    public function getKs22(){
        return $this->ks22;
    }

    public function getKs23(){
        return $this->ks23;
    }

    public function getKs24(){
        return $this->ks24;
    }

    public function getKs25(){
        return $this->ks25;
    }

    public function getKs26(){
        return $this->ks26;
    }

    public function getKs27(){
        return $this->ks27;
    }

    public function getKs28(){
        return $this->ks28;
    }

    public function getKs29(){
        return $this->ks29;
    }

    public function getKs30(){
        return $this->ks30;
    }

    public function getKs31(){
        return $this->ks31;
    }

    public function getKs32(){
        return $this->ks32;
    }

    public function getKs33(){
        return $this->ks33;
    }

    public function getKs34(){
        return $this->ks34;
    }

    public function getKs35(){
        return $this->ks35;
    }

    public function getKs36(){
        return $this->ks36;
    }

    public function getKs37(){
        return $this->ks37;
    }

    public function getKs38(){
        return $this->ks38;
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
        return $this->ks42;
    }

    public function getKs43(){
        return $this->ks43;
    }

    public function getKs44(){
        return $this->ks44;
    }

    public function getKs45(){
        return $this->ks45;
    }

    public function getKs46(){
        return $this->ks46;
    }

    public function getKs47(){
        return $this->ks47;
    }

    public function getKs48(){
        return $this->ks48;
    }

    public function getKs49(){
        return $this->ks49;
    }

    public function getKs50(){
        return $this->ks50;
    }

    public function getKs51(){
        return $this->ks51;
    }

    public function getKs52(){
        return $this->ks52;
    }

    public function getKs53(){
        return $this->ks53;
    }

    public function getKs54(){
        return $this->ks54;
    }

    public function getKs55(){
        return $this->ks55;
    }

    public function getKs56(){
        return $this->ks56;
    }

    public function getKs57(){
        return $this->ks57;
    }

    public function getKs58(){
        return $this->ks58;
    }

    public function getKs59(){
        return $this->ks59;
    }

    public function getKs60(){
        return $this->ks60;
    }

    public function getKs61(){
        return $this->ks61;
    }

    public function getKs62(){
        return $this->ks62;
    }

    public function getKs63(){
        return $this->ks63;
    }

    public function getKs64(){
        return $this->ks64;
    }

    public function getKs65(){
        return $this->ks65;
    }

    public function getKs66(){
        return $this->ks66;
    }

    public function getKs67(){
        return $this->ks67;
    }

    public function getKs68(){
        return $this->ks68;
    }

    public function getKs69a(){
        return $this->ks69a;
    }

    public function getKs69b(){
        return $this->ks69b;
    }

    public function getKs69c(){
        return $this->ks69c;
    }

    public function getKs69d(){
        return $this->ks69d;
    }

    public function getKs69e(){
        return $this->ks69e;
    }

    public function getKs69f(){
        return $this->ks69f;
    }

    public function getKs69g(){
        return $this->ks69g;
    }

    public function getKs69h(){
        return $this->ks69h;
    }

    public function getKs69i(){
        return $this->ks69i;
    }

    public function getKs69j(){
        return $this->ks69j;
    }

    public function getKs69k(){
        return $this->ks69k;
    }

    public function getKs69l(){
        return $this->ks69l;
    }

    public function getKs70(){
        return $this->ks70;
    }

    public function getSl1(){
        return $this->sl1;
    }

    public function getSl1a(){
        return $this->sl1a;
    }

    public function getSl2(){
        return $this->sl2;
    }

    public function getSl2a(){
        return $this->sl2a;
    }

    public function getSl3(){
        return $this->sl3;
    }

    public function getSl3a(){
        return $this->sl3a;
    }

    public function getSl4(){
        return $this->sl4;
    }

    public function getSl4a(){
        return $this->sl4a;
    }

    public function getSl5(){
        return $this->sl5;
    }

    public function getSl5a(){
        return $this->sl5a;
    }

    public function getSl6(){
        return $this->sl6;
    }

    public function getSl6a(){
        return $this->sl6a;
    }

    public function getSl7(){
        return $this->sl7;
    }

    public function getSl7a(){
        return $this->sl7a;
    }

    public function getSl8(){
        return $this->sl8;
    }

    public function getSl8a(){
        return $this->sl8a;
    }

    public function getSl9(){
        return $this->sl9;
    }

    public function getSl9a(){
        return $this->sl9a;
    }

    public function getSl10(){
        return $this->sl10;
    }

    public function getSl10a(){
        return $this->sl0a;
    }

    public function getSl11(){
        return $this->sl11;
    }

    public function getSl12(){
        return $this->sl12;
    }

    public function getSl13(){
        return $this->sl13;
    }

    public function getSl14(){
        return $this->sl14;
    }

    public function getSl15(){
        return $this->sl15;
    }

    public function getSl16(){
        return $this->sl16;
    }

    public function getSl17(){
        return $this->sl17;
    }

    public function getSl18(){
        return $this->sl18;
    }

    public function getSl19(){
        return $this->sl19;
    }

    public function getSl20(){
        return $this->sl20;
    }

    public function getSl21(){
        return $this->sl21;
    }

    public function getSl22(){
        return $this->sl22;
    }

    public function getSl23(){
        return $this->sl23;
    }

    public function getSl24(){
        return $this->sl24;
    }

    public function getSl24a(){
        return $this->sl24a;
    }

    public function getSl25(){
        return $this->sl25;
    }

    public function getSl26(){
        return $this->sl26;
    }

    public function getSl27(){
        return $this->sl27;
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