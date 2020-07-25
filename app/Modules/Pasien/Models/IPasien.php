<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 16:35
 */

namespace App\Modules\Pasien\Models;

interface IPasien{
    public function getId();
    public function rumahSakit();
    public function getNoRekamMedis();
    public function getNama();
    public function getNamaOrangTua();
    public function getTempatLahir();
    public function getTanggalLahir();
    public function getPendidikan();
    public function getPekerjaan();
    public function getHamilOriginal();
    public function getHamil();
    public function getMenyusuiOriginal();
    public function getMenyusui();
    public function getRujuk();
    public function getAgama();
    public function getPerkawinan();
    public function getAnak();
    public function getKeturunan();
    public function getSuku();
    public function getAsing();
    public function getDaerah();
    public function getJalan();
    public function getRt();
    public function getRw();
    public function getNo();
    public function getKodeTelpon();
    public function getTelepon();
    public function getKelurahan();
    public function getKecamatan();
    public function getKabupaten();
    public function getProvinsi();
    public function getJalanO();
    public function getRtO();
    public function getRwO();
    public function getNoO();
    public function getKodeTelpO();
    public function getTelpO();
    public function getKelurahanO();
    public function getKecamatanO();
    public function getKabupatenO();
    public function getProvinsiO();
    public function getCreatedBy();
    public function getCreatedAt();
    public function getLastUpdatedBy();
    public function getUpdatedAt();
    public function pemeriksaanFisik();
    public function anamnesis();
    public function diagnosa();
    public function terapi();
    public function latestAnamnesis();
    public function latestDiagnosa();
    public function latestPemeriksaanFisik();
    public function latestTerapi();
}