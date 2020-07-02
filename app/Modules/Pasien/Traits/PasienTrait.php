<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:50
 */

namespace App\Modules\Pasien\Traits;

trait PasienTrait{
    public function getId(){
        return $this->id;
    }

    public function getKodeRs(){
        return $this->kode_rs;
    }

    public function getNoRekamMedis(){
        return $this->no_rekam_medis;
    }

    public function getIdRs(){
        return $this->id_rs;
    }

    public function getNama(){
        return $this->nama;
    }

    public function getNamaOrangTua(){ 
        return $this->nama_orang_tua; 
    } 
    
    public function getTempatLahir(){
        return $this->tempat_lahir;
    }

    public function getTanggalLahir(){
        return $this->tgl_lahir;
    }

    public function getPendidikan(){
        return $this->pendidikan;
    }

    public function getPekerjaan(){
        return $this->pekerjaan;
    }

    public function getHamil(){
        return $this->hamil;
    }

    public function getMenyusui(){
        return $this->menyusui;
    }

    public function getRujuk(){
        return $this->rujuk;
    }

    public function getAgama(){
        return $this->agama;
    }

    public function getPerkawinan(){
        return $this->perkawinan;
    }

    public function getAnak(){
        return $this->anak;
    }

    public function getKeturunan(){
        return $this->keturunan;
    }

    public function getSuku(){
        return $this->suku;
    }

    public function getAsing(){
        return $this->asing;
    }

    public function getDaerah(){
        return $this->daerah;
    }
    public function getJalan(){
        return $this->jalan;
    }

    public function getRt(){
        return $this->rt;
    }

    public function getRw(){
        return $this->rw;
    }

    public function getNo(){
        return $this->no;
    }

    public function getKodeTelpon(){
        return $this->kode_telp;
    }

    public function getTelepon(){
        return $this->telp;
    }

    public function getKelurahan(){
        return $this->kelurahan;

    }
    public function getKecamanatan(){
        return $this->kecamatan;
    }
    public function getKabupaten(){
        return $this->kabupaten;
    }

    public function getProvinsi(){
        return $this->provinsi;
    }

    public function getJalanO(){
        return $this->jalan_o;
    }

    public function getRtO(){
        return $this->rt_o;
    }

    public function getRwO(){
        return $this->rw_o;
    }

    public function getNoO(){
        return $this->no_o;
    }

    public function getKodeTelpO(){
        return $this->kode_telp_o;
    }

    public function getTelpO(){
        return $this->telp_o;
    }

    public function getKelurahanO(){
        return $this->kelurahan_o;
    }

    public function getKecamatanO(){
        return $this->kecamatan_o;
    }

    public function getKabupatenO(){
        return $this->kabupaten_o;
    }
    public function getProvinsiO(){
        return $this->provinsi_o;
    }

    public function getCreatedBy(){
        return $this->created_by;
    }

    public function getCreatedAt(){
        return $this->created_at;
    }

    public function getLastUpdatedBy(){
        return $this->last_updated_by;
    }

    public function getUpdatedAt(){
        return $this->updated_at;
    }

    public function getPemeriksaanFisik() {
        return $this->hasMany('App\Modules\PemeriksaanFisik\Model\PemeriksaanFisik');
    }
}