<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:50
 */

namespace App\Modules\Pasien\Traits;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait PasienTrait{
    public function getId(){
        return $this->id;
    }

    public function rumahSakit(){
        return $this->belongsTo('App\Modules\RumahSakit\Models\RumahSakit', 'kode_rs', 'kode');
    }

    public function getKodeRs(){
        return $this->kode_rs;
    }

    public function getNoRekamMedis(){
        return $this->no_rekam_medis;
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

    public function getJenisKelamin(){
        return $this->jenis_kelamin;
    }

    public function getAnak(){
        return $this->anak;
    }

    public function getHamilOriginal(){
        return $this->hamil;
    }

    public function getHamil(){
        if ($this->hamil == 1) {
            $this->hamil = 'ya';
        } else if ($this->hamil == 2) {
            $this->hamil = 'tidak';
        } else {
            $this->hamil = '-';
        }
        return $this->hamil;
    }

    public function getMenyusuiOriginal(){
        return $this->menyusui;
    }

    public function getMenyusui(){
        if ($this->menyusui == 1) {
            $this->menyusui = 'ya';
        } else if ($this->menyusui == 2) {
            $this->menyusui = 'tidak';
        } else {
            $this->menyusui = '-';
        }
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

    public function getKeturunan(){
        return $this->keturunan;
    }

    public function getSuku(){
        return $this->suku;
    }

    public function getAsing(){
        $this->asing = $this->asing == '' ? 'WNI' : 'Asing';
        return $this->asing;
    }

    public function getAsingOriginal(){
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
    public function getKecamatan(){
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

    public function pemeriksaanFisik() {
        return $this->hasMany('App\Modules\PemeriksaanFisik\Models\PemeriksaanFisik', 'id_pasien', 'id')->orderBy('tglPeriksa');
    }

    public function pemeriksaanPenunjang() {
        return $this->hasMany('App\Modules\PemeriksaanPenunjang\Models\PemeriksaanPenunjang', 'id_pasien', 'id')->orderBy('tglPeriksa');
    }

    public function anamnesis() {
        return $this->hasMany('App\Modules\Anamnesis\Models\Anamnesis', 'id_pasien', 'id')->orderBy('tgl_periksa');
    }

    public function diagnosa() {
        return $this->hasMany('App\Modules\Diagnosa\Models\Diagnosa', 'id_pasien', 'id')->orderBy('tglPeriksa');
    }

    public function terapi() {
        return $this->hasMany('App\Modules\Terapi\Models\Terapi', 'id_pasien', 'id')->orderBy('tglPeriksa');
    }
    
    public function latestAnamnesis() {
        return $this->anamnesis()->first();
    }

    public function latestPemeriksaanFisik() {
        return $this->pemeriksaanFisik()->first();
    }

    public function latestPemeriksaanPenunjang() {
        return $this->pemeriksaanPenunjang()->first();
    }

    public function latestTerapi()
    {
        return $this->terapi()->first();
    }

    public function latestDiagnosa()
    {
        return $this->diagnosa()->first();
    }
}