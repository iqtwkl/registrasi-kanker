<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 8:41 AM
 */

namespace App\Modules\Anamnesis\Traits;

trait AnamnesisTrait{
    public function getId(){
        return $this->id;
    }

    public function getIdPasien(){
        return $this->id_pasien;
    }

    public function getKunjungan(){
        return $this->Kunjungan;
    }

    public function getTglPeriksa(){
        return $this->tgl_periksa;
    }

    public function pasien(){
        return $this->belongsTo('App\Modules\Pasien\Models\Pasien','id_pasien','id');
    }

    public function getAa1(){
        switch($this->aa1){
            case '1': $this->aa1 = 'Ya'; break;
            case '2': $this->aa1 = 'Tidak'; break;
            default: $this->aa1 = '-';
        }
        return $this->aa1;
    }

    public function getAa2(){
        switch($this->aa2){
            case '1': $this->aa2 = 'Kanan'; break;
            case '2': $this->aa2 = 'Kiri'; break;
            case '3': $this->aa2 = 'Bilateral'; break;
            default: $this->aa2 = '-';
        }
        return $this->aa2;
    }

    public function getAa3(){
        switch($this->aa3){
            case '1': $this->aa3 = '0 - 6 Bulan'; break;
            case '2': $this->aa3 = '6 - 12 Bulan'; break;
            case '3': $this->aa3 = '> 12 Bulan'; break;
            default: $this->aa3 = '-';
        }
        return $this->aa3;
    }

    public function getAb1(){
        switch($this->ab1){
            case '1': $this->ab1 = 'Ya'; break;
            case '2': $this->ab1 = 'Tidak'; break;
            default: $this->ab1 = '-';
        }
        return $this->ab1;
    }

    public function getAb2(){
        switch($this->ab2){
            case '1': $this->ab2 = 'Kanan'; break;
            case '2': $this->ab2 = 'Kiri'; break;
            case '3': $this->ab2 = 'Bilateral'; break;
            default: $this->ab2 = '-';
        }
        return $this->ab2;
    }

    public function getAb3(){
        switch($this->ab3){
            case '1': $this->ab3 = '0 - 6 Bulan'; break;
            case '2': $this->ab3 = '6 - 12 Bulan'; break;
            case '3': $this->ab3 = '> 12 Bulan'; break;
            default: $this->ab3 = '-';
        }
        return $this->ab3;
    }

    public function getAc1(){
        switch($this->ac1){
            case '1': $this->ac1 = 'Ya'; break;
            case '2': $this->ac1 = 'Tidak'; break;
            default: $this->ac1 = '-';
        }
        return $this->ac1;
    }

    public function getAc2(){
        switch($this->ac2){
            case '1': $this->ac2 = 'Kanan'; break;
            case '2': $this->ac2 = 'Kiri'; break;
            case '3': $this->ac2 = 'Bilateral'; break;
            default: $this->ac2 = '-';
        }
        return $this->ac2;
    }

    public function getAc3(){
        switch($this->ac3){
            case '1': $this->ac3 = '0 - 6 Bulan'; break;
            case '2': $this->ac3 = '6 - 12 Bulan'; break;
            case '3': $this->ac3 = '> 12 Bulan'; break;
            default: $this->ac3 = '-';
        }
        return $this->ac3;
    }

    public function getAd1(){
        switch($this->ad1){
            case '1': $this->ad1 = 'Ya'; break;
            case '2': $this->ad1 = 'Tidak'; break;
            default: $this->ad1 = '-';
        }
        return $this->ad1;
    }

    public function getAd2(){
        switch($this->ad2){
            case '1': $this->ad2 = 'Kanan'; break;
            case '2': $this->ad2 = 'Kiri'; break;
            case '3': $this->ad2 = 'Bilateral'; break;
            default: $this->ad2 = '-';
        }
        return $this->ad2;
    }

    public function getAd3(){
        switch($this->ad3){
            case '1': $this->ad3 = '0 - 6 Bulan'; break;
            case '2': $this->ad3 = '6 - 12 Bulan'; break;
            case '3': $this->ad3 = '> 12 Bulan'; break;
            default: $this->ad3 = '-';
        }
        return $this->ad3;
    }

    public function getAe1(){
        switch($this->ae1){
            case '1': $this->ae1 = 'Ya'; break;
            case '2': $this->ae1 = 'Tidak'; break;
            default: $this->ae1 = '-';
        }
        return $this->ae1;
    }

    public function getAe2(){
        return $this->ae2;
    }

    public function getAe3(){
        switch($this->ae3){
            case '1': $this->ae3 = ' 0 - 6 Bulan'; break;
            case '2': $this->ae3 = '6 - 12 Bulan'; break;
            case '3': $this->ae3 = '> 12 Bulan'; break;
            default: $this->ae3 = '-';
        }
        return $this->ae3;
    }

    public function getAf1(){
        switch($this->af1){
            case '1': $this->af1 = 'Ya'; break;
            case '2': $this->af1 = 'Tidak'; break;
            default: $this->af1 = '-';
        }
        return $this->af1;
    }

    public function getAf2(){
        switch($this->af2){
            case '1': $this->af2 = 'Kanan'; break;
            case '2': $this->af2 = 'Kiri'; break;
            case '3': $this->af2 = 'Bilateral'; break;
            default: $this->af2 = '-';
        }
        return $this->af2;
    }

    public function getAf3(){
        switch($this->af3){
            case '1': $this->af3 = '0 - 6 Bulan'; break;
            case '2': $this->af3 = '6 - 12 Bulan'; break;
            case '3': $this->af3 = '> 12 Bulan'; break;
            default: $this->af3 = '-';
        }
        return $this->af3;
    }

    public function getAg1(){
        switch($this->ag1){
            case '1': $this->ag1 = 'Ya'; break;
            case '2': $this->ag1 = 'Tidak'; break;
            default: $this->ag1 = '-';
        }
        return $this->ag1;
    }

    public function getAg2(){
        switch($this->ag2){
            case '1': $this->ag2 = 'Kanan'; break;
            case '2': $this->ag2 = 'Kiri'; break;
            case '3': $this->ag2 = 'Bilateral'; break;
            default: $this->ag2 = '-';
        }
        return $this->ag2;
    }

    public function getAg3(){
        switch($this->ag3){
            case '1': $this->ag3 = '0 - 6 Bulan'; break;
            case '2': $this->ag3 = '6 - 12 Bulan'; break;
            case '3': $this->ag3 = ' '; break;
            default: $this->ag3 = '-';
        }
        return $this->ag3;
    }

    public function getAh1(){
        return $this->ah1;
    }

    public function getAh2(){
        return $this->ah2;
    }

    public function getAh3(){
        return $this->ah3;
    }

    public function getAi1(){
        switch($this->ai1){
            case '1': $this->ai1 = 'Ya'; break;
            case '2': $this->ai1 = 'Tidak'; break;
            default: $this->ai1 = '-';
        }
        return $this->ai1;
    }

    public function getAi2(){
        switch($this->ai2){
            case '1': $this->ai2 = 'Kanan'; break;
            case '2': $this->ai2 = 'Kiri'; break;
            case '3': $this->ai2 = 'Bilateral'; break;
            default: $this->ai2 = '-';
        }
        return $this->ai2;
    }

    public function getAi3(){
        switch($this->ai3){
            case '1': $this->ai3 = '0 - 6 Bulan'; break;
            case '2': $this->ai3 = '6 - 12 Bulan'; break;
            case '3': $this->ai3 = '> 12 Bulan'; break;
            default: $this->ai3 = '-';
        }
        return $this->ai3;
    }

    public function getAj1(){
        switch($this->aj1){
            case '1': $this->aj1 = 'Ya'; break;
            case '2': $this->aj1 = 'Tidak'; break;
            default: $this->aj1 = '-';
        }
        return $this->aj1;
    }

    public function getAj2(){
        switch($this->aj2){
            case '1': $this->aj2 = 'Kanan'; break;
            case '2': $this->aj2 = 'Kiri'; break;
            case '3': $this->aj2 = 'Bilateral'; break;
            default: $this->aj2 = '-';
        }
        return $this->aj2;
    }

    public function getAj3(){
        switch($this->aj3){
            case '1': $this->aj3 = '0 - 6 Bulan'; break;
            case '2': $this->aj3 = '6 - 12 Bulan'; break;
            case '3': $this->aj3 = '> 12 Bulan'; break;
            default: $this->aj3 = '-';
        }
        return $this->aj3;
    }

    public function getAk1(){
        switch($this->ak1){
            case '1': $this->ak1 = 'Ya'; break;
            case '2': $this->ak1 = 'Tidak'; break;
            default: $this->ak1 = '-';
        }
        return $this->ak1;
    }

    public function getAk2(){
        switch($this->ak2){
            case '1': $this->ak2 = 'Kanan'; break;
            case '2': $this->ak2 = 'Kiri'; break;
            case '3': $this->ak2 = 'Bilateral'; break;
            default: $this->ak2 = '-';
        }
        return $this->ak2;
    }

    public function getAk3(){
        switch($this->ak3){
            case '1': $this->ak3 = '0 - 6 Bulan'; break;
            case '2': $this->ak3 = '6 - 12 Bulan'; break;
            case '3': $this->ak3 = '> 12 Bulan'; break;
            default: $this->ak3 = '-';
        }
        return $this->ak3;
    }

    public function getAl1(){
        switch($this->al1){
            case '1': $this->al1 = 'Ya'; break;
            case '2': $this->al1 = 'Tidak'; break;
            default: $this->al1 = '-';
        }
        return $this->al1;
    }

    public function getAl2(){
        return $this->al2;
    }

    public function getAl3(){
        switch($this->al3){
            case '1': $this->al3 = '0 - 6 Bulan'; break;
            case '2': $this->al3 = '6 - 12 Bulan'; break;
            case '3': $this->al3 = '> 12 Bulan'; break;
            default: $this->al3 = '-';
        }
        return $this->al3;
    }

    public function getAm1(){
        switch($this->am1){
            case '1': $this->am1 = 'Ya'; break;
            case '2': $this->am1 = 'Tidak'; break;
            default: $this->am1 = '-';
        }
        return $this->am1;
    }

    public function getAm2(){
        return $this->am2;
    }

    public function getAm21(){        
        return $this->am21 ? "N.1" : "";
    }

    public function getAm22(){
        return $this->am22 ? "N.2" : "";
    }

    public function getAm23(){
        return $this->am23 ? "N.3" : "";
    }

    public function getAm24(){        
        return $this->am24 ? "N.4" : "";
    }

    public function getAm25(){        
        return $this->am25 ? "N.5" : "";
    }

    public function getAm26(){        
        return $this->am26 ? "N.6" : "";
    }

    public function getAm27(){     
        return $this->am27 ? "N.7" : "";
    }

    public function getAm28(){        
        return $this->am28 ? "N.8" : "";
    }

    public function getAm29(){        
        return $this->am29 ? "N.9" : "";
    }

    public function getAm210(){        
        return $this->am210 ? "N.10" : "";
    }

    public function getAm211(){        
        return $this->am211 ? "N.11" : "";
    }

    public function getAm212(){        
        return $this->am212 ? "N.12" : "";
    }

    public function getAm3(){
        switch($this->am3){
            case '1': $this->am3 = '0 - 6 Bulan'; break;
            case '2': $this->am3 = '6 - 12 Bulan'; break;
            case '3': $this->am3 = '> 12 Bulan'; break;
            default: $this->am3 = '-';
        }
        return $this->am3;
    }

    public function getAn1(){        
        switch($this->an1){
            case '1': $this->an1 = 'Ya'; break;
            case '2': $this->an1 = 'Tidak'; break;
            default: $this->an1 = '-';
        }
        return $this->an1;
    }

    public function getAn2(){
        return $this->an2;
    }

    public function getAn3(){
        switch($this->an3){
            case '1': $this->an3 = '0 - 6 Bulan'; break;
            case '2': $this->an3 = '6 - 12 Bulan'; break;
            case '3': $this->an3 = '> 12 Bulan'; break;
            default: $this->an3 = '-';
        }
        return $this->an3;
    }

    public function getBa1(){
        switch($this->ba1){
            case '1': $this->ba1 = 'Ya'; break;
            case '2': $this->ba1 = 'Tidak'; break;
            default: $this->ba1 = '-';
        }
        return $this->ba1;
    }

    public function getBa2(){
        switch($this->ba2){
            case '1': $this->ba2 = 'Kanan'; break;
            case '2': $this->ba2 = 'Kiri'; break;
            case '3': $this->ba2 = 'Bilateral'; break;
            default: $this->ba2 = '-';
        }
        return $this->ba2;
    }

    public function getBa3(){
        switch($this->ba3){
            case '1': $this->ba3 = '0 - 6 Bulan'; break;
            case '2': $this->ba3 = '6 - 12 Bulan'; break;
            case '3': $this->ba3 = '> 12 Bulan'; break;
            default: $this->ba3 = '-';
        }
        return $this->ba3;
    }

    public function getBb1(){
        switch($this->bb1){
            case '1': $this->bb1 = 'Ya'; break;
            case '2': $this->bb1 = 'Tidak'; break;
            default: $this->bb1 = '-';
        }
        return $this->bb1;
    }

    public function getBb2(){
        switch($this->bb2){
            case '1': $this->bb2 = 'Kanan'; break;
            case '2': $this->bb2 = 'Kiri'; break;
            case '3': $this->bb2 = 'Bilateral'; break;
            default: $this->bb2 = '-';
        }
        return $this->bb2;
    }

    public function getBb3(){
        switch($this->bb3){
            case '1': $this->bb3 = ' 0 - 6 Bulan'; break;
            case '2': $this->bb3 = '6 - 12 Bulan'; break;
            case '3': $this->bb3 = '> 12 Bulan'; break;
            default: $this->bb3 = '-';
        }
        return $this->bb3;
    }

    public function getBc1(){
        switch($this->bc1){
            case '1': $this->bc1 = 'Ya'; break;
            case '2': $this->bc1 = 'Tidak'; break;
            default: $this->bc1 = '-';
        }
        return $this->bc1;
    }

    public function getBc2(){
        switch($this->bc2){
            case '1': $this->bc2 = 'Kanan'; break;
            case '2': $this->bc2 = 'Kiri'; break;
            case '3': $this->bc2 = 'Bilateral'; break;
            default: $this->bc2 = '-';
        }
        return $this->bc2;
    }

    public function getBc3(){
        switch($this->bc3){
            case '1': $this->bc3 = '0 - 6 Bulan'; break;
            case '2': $this->bc3 = '6 - 12 Bulan'; break;
            case '3': $this->bc3 = '> 12 Bulan'; break;
            default: $this->bc3 = '-';
        }
        return $this->bc3;
    }

    public function getBd1(){
        switch($this->bd1){
            case '1': $this->bd1 = 'Ya'; break;
            case '2': $this->bd1 = 'Tidak'; break;
            default: $this->bd1 = '-';
        }
        return $this->bd1;
    }

    public function getBd2(){
        switch($this->bd2){
            case '1': $this->bd2 = 'Kanan'; break;
            case '2': $this->bd2 = 'Kiri'; break;
            case '3': $this->bd2 = 'Bilateral'; break;
            default: $this->bd2 = '-';
        }
        return $this->bd2;
    }

    public function getBd3(){
        switch($this->bd3){
            case '1': $this->bd3 = '0 - 6 Bulan'; break;
            case '2': $this->bd3 = '6 - 12 Bulan'; break;
            case '3': $this->bd3 = '> 12 Bulan'; break;
            default: $this->bd3 = '-';
        }
        return $this->bd3;
    }

    public function getBe1(){
        switch($this->be1){
            case '1': $this->be1 = 'Ya'; break;
            case '2': $this->be1 = 'Tidak'; break;
            default: $this->be1 = '-';
        }
        return $this->be1;
    }

    public function getBe2(){
        switch($this->be2){
            case '1': $this->be2 = 'Kanan'; break;
            case '2': $this->be2 = 'Kiri'; break;
            case '3': $this->be2 = 'Bilateral'; break;
            default: $this->be2 = '-';
        }
        return $this->be2;
    }

    public function getBe3(){
        switch($this->be3){
            case '1': $this->be3 = '0 - 6 Bula'; break;
            case '2': $this->be3 = '6 - 12 Bulan'; break;
            case '3': $this->be3 = '> 12 Bulan'; break;
            default: $this->be3 = '-';
        }
        return $this->be3;
    }

    public function getBf1(){
        switch($this->bf1){
            case '1': $this->bf1 = 'Ya'; break;
            case '2': $this->bf1 = 'Tidak'; break;
            default: $this->bf1 = '-';
        }
        return $this->bf1;
    }

    public function getBf2(){
        switch($this->bf2){
            case '1': $this->bf2 = 'Kanan'; break;
            case '2': $this->bf2 = 'Kiri'; break;
            case '3': $this->bf2 = 'Bilateral'; break;
            default: $this->bf2 = '-';
        }
        return $this->bf2;
    }

    public function getBf3(){
        switch($this->bf3){
            case '1': $this->bf3 = '0 - 6 Bulan'; break;
            case '2': $this->bf3 = '6 - 12 Bulan'; break;
            case '3': $this->bf3 = '> 12 Bulan'; break;
            default: $this->bf3 = '-';
            }
        return $this->bf3;
    }

    public function getBg1(){
        switch($this->bg1){
            case '1': $this->bg1 = 'Ya'; break;
            case '2': $this->bg1 = 'Tidak'; break;
            default: $this->bg1 = '-';
        }
        return $this->bg1;
    }

    public function getBg2(){
        switch($this->bg2){
            case '1': $this->bg2 = 'Kanan'; break;
            case '2': $this->bg2 = 'Kiri'; break;
            case '3': $this->bg2 = 'Bilateral'; break;
            default: $this->bg2 = '-';
        }
        return $this->bg2;
    }

    public function getBg3(){
        switch($this->bg3){
            case '1': $this->bg3 = '0 - 6 Bulan'; break;
            case '2': $this->bg3 = '6 - 12 Bulan'; break;
            case '3': $this->bg3 = '> 12 Bulan'; break;
            default: $this->bg3 = '-';
        }
        return $this->bg3;
    }

    public function getBh1(){
        switch($this->bh1){
            case '1': $this->bh1 = 'Ya'; break;
            case '2': $this->bh1 = 'Tidak'; break;
            default: $this->bh1 = '-';
        }
        return $this->bh1;
    }

    public function getBh2(){
        switch($this->bh2){
            case '1': $this->bh2 = 'Kanan'; break;
            case '2': $this->bh2 = 'Kiri'; break;
            case '3': $this->bh2 = 'Bilateral'; break;
            default: $this->bh2 = '-';
        }
        return $this->bh2;
    }

    public function getBh3(){
        switch($this->bh3){
            case '1': $this->bh3 = '0 - 6 Bulan'; break;
            case '2': $this->bh3 = '6 - 12 Bulan'; break;
            case '3': $this->bh3 = '> 12 Bulan'; break;
            default: $this->bh3 = '-';
        }
        return $this->bh3;
    }

    public function getBi1(){
        switch($this->bi1){
            case '1': $this->bi1 = 'Ya'; break;
            case '2': $this->bi1 = 'Tidak'; break;
            default: $this->bi1 = '-';
        }
        return $this->bi1;
    }

    public function getBi2(){
        return $this->bi2;
    }

    public function getBi3(){
        switch($this->bi3){
            case '1': $this->bi3 = '0 - 6 Bulan'; break;
            case '2': $this->bi3 = '6 - 12 Bulan'; break;
            case '3': $this->bi3 = '> 12 Bulan'; break;
            default: $this->b13 = '-';
        }
        return $this->bi3;
    }

    public function getBj1(){
        switch($this->bj1){
            case '1': $this->bj1 = 'Ya'; break;
            case '2': $this->bj1 = 'Tidak'; break;
            default: $this->bj1 = '-';
        }
        return $this->bj1;
    }

    public function getBj2(){
        switch($this->bj2){
            case '1': $this->bj2 = 'Kanan'; break;
            case '2': $this->bj2 = 'Kiri'; break;
            case '3': $this->bj2 = 'Bilateral'; break;
            default: $this->bj2 = '-';
        }
        return $this->bj2;
    }

    public function getBj3(){
        switch($this->bj3){
            case '1': $this->bj3 = '0 - 6 Bulan'; break;
            case '2': $this->bj3 = '6 - 12 Bulan'; break;
            case '3': $this->bj3 = '> 12 Bulan'; break;
            default: $this->bj3 = '-';
        }
        return $this->bj3;
    }

    public function getBk1(){
        switch($this->bk1){
            case '1': $this->bk1 = 'Ya'; break;
            case '2': $this->bk1 = 'Tidak'; break;
            default: $this->bk1 = '-';
        }
        return $this->bk1;
    }

    public function getBk2(){
        switch($this->bk2){
            case '1': $this->bk2 = 'Kanan'; break;
            case '2': $this->bk2 = 'Kiri'; break;
            case '3': $this->bk2 = 'Bilateral'; break;
            default: $this->bk2 = '-';
        }
        return $this->bk2;
    }

    public function getBk3(){
        switch($this->bk3){
            case '1': $this->bk3 = '0 - 6 Bulan'; break;
            case '2': $this->bk3 = '6 - 12 Bulan'; break;
            case '3': $this->bk3 = '> 12 Bulan'; break;
            default: $this->bk3 = '-';
        }
        return $this->bk3;
    }

    public function getCa1(){
        switch($this->ca1){
            case '1': $this->ca1 = 'Ya'; break;
            case '2': $this->ca1 = 'Tidak'; break;
            default: $this->ca1 = '-';
        }
        return $this->ca1;
    }

    public function getCa2(){
        switch($this->ca2){
            case '1': $this->ca2 = 'Kanan'; break;
            case '2': $this->ca2 = 'Kiri'; break;
            case '3': $this->ca2 = 'Bilateral'; break;
            default: $this->ca2 = '-';
        }
        return $this->ca2;
    }

    public function getCa3(){
        switch($this->ca3){
            case '1': $this->ca3 = '0 - 6 Bulan'; break;
            case '2': $this->ca3 = '6 - 12 Bulan'; break;
            case '3': $this->ca3 = '> 12 Bulan'; break;
            default: $this->ca3 = '-';
        }
        return $this->ca3;
    }

    public function getCb1(){
        switch($this->cb1){
            case '1': $this->cb1 = 'Ya'; break;
            case '2': $this->cb1 = 'Tidak'; break;
            default: $this->cb1 = '-';
        }
        return $this->cb1;
    }

    public function getCb2(){
        switch($this->cb2){
            case '1': $this->cb2 = 'Kanan'; break;
            case '2': $this->cb2 = 'Kiri'; break;
            case '3': $this->cb2 = 'Bilateral'; break;
            default: $this->cb2 = '-';
        }
        return $this->cb2;
    }

    public function getCb3(){
        switch($this->cb3){
            case '1': $this->cb3 = '0 - 6 Bulan'; break;
            case '2': $this->cb3 = '6 - 12 Bulan'; break;
            case '3': $this->cb3 = '> 12 Bulan'; break;
            default: $this->cb3 = '-';
        }
        return $this->cb3;
    }

    public function getCc1(){
        switch($this->cc1){
            case '1': $this->cc1 = 'Ya'; break;
            case '2': $this->cc1 = 'Tidak'; break;
            default: $this->cc1 = '-';
        }
        return $this->cc1;
    }

    public function getCc2(){
        switch($this->cc2){
            case '1': $this->cc2 = 'Kanan'; break;
            case '2': $this->cc2 = 'Kiri'; break;
            case '3': $this->cc2 = 'Bilateral'; break;
            default: $this->cc2 = '-';
        }
        return $this->cc2;
    }

    public function getCc3(){
        switch($this->cc3){
            case '1': $this->cc3 = '0 - 6 Bulan'; break;
            case '2': $this->cc3 = '6 - 12 Bulan'; break;
            case '3': $this->cc3 = '> 12 Bulan'; break;
            default: $this->cc3 = '-';
        }
        return $this->cc3;
    }

    public function getCd1(){
        switch($this->cd1){
            case '1': $this->cd1 = 'Ya'; break;
            case '2': $this->cd1 = 'Tidak'; break;
            default: $this->cd1 = '-';
        }
        return $this->cd1;
    }

    public function getCd2(){
        switch($this->cd2){
            case '1': $this->cd2 = 'Kanan'; break;
            case '2': $this->cd2 = 'Kiri'; break;
            case '3': $this->cd2 = 'Bilateral'; break;
            default: $this->cd2 = '-';
        }
        return $this->cd2;
    }

    public function getCd3(){
        switch($this->cd3){
            case '1': $this->cd3 = '0 - 6 Bulan'; break;
            case '2': $this->cd3 = '6 - 12 Bulan'; break;
            case '3': $this->cd3 =  '> 12 Bulan'; break;
            default: $this->cd3 = '-';
        }
        return $this->cd3;
    }

    public function getCe1(){
        switch($this->ce1){
            case '1': $this->ce1 = 'Ya'; break;
            case '2': $this->ce1 = 'Tidak'; break;
            default: $this->ce1 = '-';
        }
        return $this->ce1;
    }

    public function getCe2(){
        switch($this->ce2){
            case '1': $this->ce2 = 'Kanan'; break;
            case '2': $this->ce2 = 'Kiri'; break;
            case '3': $this->ce2 = 'Bilateral'; break;
            default: $this->ce2 = '-';
        }
        return $this->ce2;
    }

    public function getCe3(){
        switch($this->ce3){
            case '1': $this->ce3 = '0 - 6 Bulan'; break;
            case '2': $this->ce3 = '6 - 12 Bulan'; break;
            case '3': $this->ce3 = '> 12 Bulan'; break;
            default: $this->ce3 = '-';
        }
        return $this->ce3;
    }

    public function getCf1(){
        switch($this->cf1){
            case '1': $this->cf1 = 'Ya'; break;
            case '2': $this->cf1 = 'Tidak'; break;
            default: $this->cf1 = '-';
        }
        return $this->cf1;
    }

    public function getCf2(){
        switch($this->cf2){
            case '1': $this->cf2 = 'Kanan'; break;
            case '2': $this->cf2 = 'Kiri'; break;
            case '3': $this->cf2 = 'Bilateral'; break;
            default: $this->cf2 = '-';
        }
        return $this->cf2;
    }

    public function getCf3(){
        switch($this->cf3){
            case '1': $this->cf3 = '0 - 6 Bulan'; break;
            case '2': $this->cf3 = '6 - 12 Bulan'; break;
            case '3': $this->cf3 = '> 12 Bulan'; break;
            default: $this->cf3 = '-';
        }
        return $this->cf3;
    }

    public function getCg1(){
        switch($this->cg1){
            case '1': $this->cg1 = 'Ya'; break;
            case '2': $this->cg1 = 'Tidak'; break;
            default: $this->cg1 = '-';
        }
        return $this->cg1;
    }

    public function getCg2(){
        switch($this->cg2){
            case '1': $this->cg2 = 'Kanan'; break;
            case '2': $this->cg2 = 'Kiri'; break;
            case '3': $this->cg2 = 'Bilateral'; break;
            default: $this->cg2 = '-';
        }
        return $this->cg2;
    }

    public function getCg3(){
        switch($this->cg3){
            case '1': $this->cg3 = '0 - 6 Bulan'; break;
            case '2': $this->cg3 = '6 - 12 Bulan'; break;
            case '3': $this->cg3 = '> 12 Bulan'; break;
            default: $this->cg3 = '-';
        }
        return $this->cg3;
    }

    public function getCh1(){
        switch($this->ch1){
            case '1': $this->ch1 = 'Ya'; break;
            case '2': $this->ch1 = 'Tidak'; break;
            default: $this->ch1 = '-';
        }
        return $this->ch1;
    }

    public function getCh2(){
        switch($this->ch2){
            case '1': $this->ch2 = 'Kanan'; break;
            case '2': $this->ch2 = 'Kiri'; break;
            case '3': $this->ch2 = 'Bilateral'; break;
            default: $this->ch2 = '-';
        }
        return $this->ch2;
    }

    public function getCi1(){
        switch($this->ci1){
            case '1': $this->ci1 = 'Ya'; break;
            case '2': $this->ci1 = 'Tidak'; break;
            default: $this->ci1 = '-';
        }
        return $this->ci1;
    }

    public function getCi2(){
        switch($this->ci2){
            case '1': $this->ci2 = 'Kanan'; break;
            case '2': $this->ci2 = 'Kiri'; break;
            case '3': $this->ci2 = 'Bilateral'; break;
            default: $this->ci2 = '-';
        }
        return $this->ci2;
    }

    public function getCi3(){
        switch($this->ci3){
            case '1': $this->ci3 = '0 - 6 Bulan'; break;
            case '2': $this->ci3 = '6 - 12 Bulan'; break;
            case '3': $this->ci3 = '> 12 Bulan'; break;
            default: $this->ci3 = '-';
        }
        return $this->ci3;
    }

    public function getDa1(){
        switch($this->da1){
            case '1': $this->da1 = 'Ya'; break;
            case '2': $this->da1 = 'Tidak'; break;
            default: $this->da1 = '-';
        }
        return $this->da1;
    }

    public function getDa2(){
        switch($this->da2){
            case '1': $this->da2 = 'Kanan'; break;
            case '2': $this->da2 = 'Kiri'; break;
            case '3': $this->da2 = 'Bilateral'; break;
            default: $this->da2 = '-';
        }
        return $this->da2;
    }

    public function getDa3(){
        switch($this->da3){
            case '1': $this->da3 = '0 - 6 Bulan'; break;
            case '2': $this->da3 = '6 - 12 Bulan'; break;
            case '3': $this->da3 = '> 12 Bulan'; break;
            default: $this->da3 = '-';
        }
        return $this->da3;
    }

    public function getDb1(){
        return $this->db1;
    }

    public function getDb2(){
        return $this->db2;
    }

    public function getDb3(){
        return $this->db3;
    }

    public function getDc1(){
        switch($this->dc1){
            case '1': $this->dc1 = 'Ya'; break;
            case '2': $this->dc1 = 'Tidak'; break;
            default: $this->dc1 = '-';
        }
        return $this->dc1;
    }

    public function getDc2(){
        switch($this->dc2){
            case '1': $this->dc2 = 'Kanan'; break;
            case '2': $this->dc2 = 'Kiri'; break;
            case '3': $this->dc2 = 'Bilateral'; break;
            default: $this->dc2 = '-';
        }
        return $this->dc2;
    }

    public function getDc3(){
        switch($this->dc3){
            case '1': $this->dc3 = '0 - 6 Bulan'; break;
            case '2': $this->dc3 = '6 - 12 Bulan'; break;
            case '3': $this->dc3 =  '> 12 Bulan'; break;
            default: $this->dc3 = '-';
        }
        return $this->dc3;
    }

    public function getDd1(){
        switch($this->dd1){
            case '1': $this->dd1 = 'Ya'; break;
            case '2': $this->dd1 = 'Tidak'; break;
            default: $this->dd1 = '-';
        }
        return $this->dd1;
    }

    public function getDd2(){
        return $this->dd2;
    }

    public function getDd3(){
        switch($this->dd3){
            case '1': $this->dd3 = '0 - 6 Bulan'; break;
            case '2': $this->dd3 = '6 - 12 Bulan'; break;
            case '3': $this->dd3 = '> 12 Bulan'; break;
            default: $this->dd3 = '-';
        }
        return $this->dd3;
    }

    public function getDe1(){
        switch($this->de1){
            case '1': $this->de1 = 'Ya'; break;
            case '2': $this->de1 = 'Tidak'; break;
            default: $this->de1 = '-';
        }
        return $this->de1;
    }

    public function getDe2(){
        return $this->de2;
    }

    public function getDe3(){
        switch($this->de3){
            case '1': $this->de3 = '0 - 6 Bulan'; break;
            case '2': $this->de3 = '6 - 12 Bulan'; break;
            case '3': $this->de3 = '> 12 Bulan'; break;
            default: $this->de3 = '-';
        }
        return $this->de3;
    }

    public function getDf1(){
        switch($this->df1){
            case '1': $this->df1 = 'Ya'; break;
            case '2': $this->df1 = 'Tidak'; break;
            default: $this->df1 = '-';
        }
        return $this->df1;
    }

    public function getDf2(){
        return $this->df2;
    }

    public function getDf3(){
        switch($this->df3){
            case '1': $this->df3 = '0 - 6 Bulan'; break;
            case '2': $this->df3 = '6 - 12 Bulan'; break;
            case '3': $this->df3 = '> 12 Bulan'; break;
            default: $this->df3 = '-';
        }
        return $this->df3;
    }

    public function getDg1(){
        return $this->dg1;
    }

    public function getDg2(){
        return $this->dg2;
    }

    public function getDg3(){
        return $this->dg3;
    }

    public function getDh1(){
        switch($this->dh1){
            case '1': $this->dh1 = 'Ya'; break;
            case '2': $this->dh1 = 'Tidak'; break;
            default: $this->dh1 = '-';
        }
        return $this->dh1;
    }

    public function getDh2(){
        switch($this->dh2){
            case '1': $this->dh2 = '0 - 6 Bulan'; break;
            case '2': $this->dh2 = '6 - 12 Bulan'; break;
            case '3': $this->dh2 = '-'; break;
            default: $this->dh2 = '-';
        }
        return $this->dh2;
    }

    public function getDi1(){
        switch($this->di1){
            case '1': $this->di1 = 'Ya'; break;
            case '2': $this->di1 = 'Tidak'; break;
            default: $this->di1 = '-';
        }
        return $this->di1;
    }

    public function getDi2(){
        switch($this->di2){
            case '1': $this->di2 = '0 - 6 Bulan'; break;
            case '2': $this->di2 = '6 - 12 Bulan'; break;
            case '3': $this->di2 = '-'; break;
            default: $this->di2 = '-';
        }
        return $this->di2;
    }

    public function getDj1(){
        switch($this->dj1){
            case '1': $this->dj1 = 'Ya'; break;
            case '2': $this->dj1 = 'Tidak'; break;
            default: $this->dj1 = '-';
        }
        return $this->dj1;
    }

    public function getDj2(){
        switch($this->dj2){
            case '1': $this->dj2 = 'Kanan'; break;
            case '2': $this->dj2 = 'Kiri'; break;
            case '3': $this->dj2 = 'Bilateral'; break;
            default: $this->dj2 = '-';
        }
        return $this->dj2;
    }

    public function getDj3(){
        switch($this->dj3){
            case '1': $this->dj3 = '0 - 6 Bulan'; break;
            case '2': $this->dj3 = '6 - 12 Bulan'; break;
            case '3': $this->dj3 = '> 12 Bulan'; break;
            default: $this->dj3 = '-';
        }
        return $this->dj3;
    }

    public function getEa1(){
        switch($this->Ea1){
            case '1': $this->Ea1 = 'Ya'; break;
            case '2': $this->Ea1 = 'Tidak'; break;
            default: $this->Ea1 = '-';
        }
        return $this->Ea1;
    }

    public function getEa2(){
        switch($this->Ea2){
            case '1': $this->Ea2 = 'Kanan'; break;
            case '2': $this->Ea2 = 'Kiri'; break;
            case '3': $this->Ea2 = 'Bilateral'; break;
            default: $this->Ea2 = '-';
        }
        return $this->Ea2;
    }

    public function getEa3(){
        switch($this->Ea3){
            case '1': $this->Ea3 = '0 - 6 Bulan'; break;
            case '2': $this->Ea3 = '6 - 12 Bulan'; break;
            case '3': $this->Ea3 = '> 12 Bulan'; break;
            default: $this->Ea3 = '-';
        }
        return $this->Ea3;
    }

    public function getEb1(){
        switch($this->Eb1){
            case '1': $this->Eb1 = 'Ya'; break;
            case '2': $this->Eb1 = 'Tidak'; break;
            default: $this->Eb1 = '-';
        }
        return $this->Eb1;
    }

    public function getEb2(){
        switch($this->Eb2){
            case '1': $this->Eb2 = 'Kanan'; break;
            case '2': $this->Eb2 = 'Kiri'; break;
            case '3': $this->Eb2 = 'Bilateral'; break;
            default: $this->Eb2 = '-';
        }
        return $this->Eb2;
    }

    public function getEb3(){
        switch($this->Eb3){
            case '1': $this->Eb3 = '0 - 6 Bulan'; break;
            case '2': $this->Eb3 = '6 - 12 Bulan'; break;
            case '3': $this->Eb3 = '> 12 Bulan'; break;
            default: $this->Eb3 = '-';
        }
        return $this->Eb3;
    }

    public function getEc1(){
        switch($this->Ec1){
            case '1': $this->Ec1 = 'Ya'; break;
            case '2': $this->Ec1 = 'Tidak'; break;
            default: $this->Ec1 = '-';
        }
        return $this->Ec1;
    }

    public function getEc2(){
        switch($this->Ec2){
            case '1': $this->Ec2 = 'Kanan'; break;
            case '2': $this->Ec2 = 'Kiri'; break;
            case '3': $this->Ec2 = 'Bilateral'; break;
            default: $this->Ec2 = '-';
        }
        return $this->Ec2;
    }

    public function getEc3(){
        switch($this->Ec3){
            case '1': $this->Ec3 = '0 - 6 Bulan'; break;
            case '2': $this->Ec3 = '6 - 12 Bulan'; break;
            case '3': $this->Ec3 = '> 12 Bulan'; break;
            default: $this->Ec3 = '-';
        }
        return $this->Ec3;
    }

    public function getEd1(){
        switch($this->Ed1){
            case '1': $this->Ed1 = 'Ya'; break;
            case '2': $this->Ed1 = 'Tidak'; break;
            default: $this->Ed1 = '-';
        }
        return $this->Ed1;
    }

    public function getEd2(){
        switch($this->Ed2){
            case '1': $this->Ed2 = 'Kanan'; break;
            case '2': $this->Ed2 = 'Kiri'; break;
            case '3': $this->Ed2 = 'Bilateral'; break;
            default: $this->Ed2 = '-';
        }
        return $this->Ed2;
    }

    public function getEd3(){
        switch($this->Ed3){
            case '1': $this->Ed3 = '0 - 6 Bulan'; break;
            case '2': $this->Ed3 = '6 - 12 Bulan'; break;
            case '3': $this->Ed3 = '> 12 Bulan'; break;
            default: $this->Ed3 = '-';
        }
        return $this->Ed3;
    }

    public function getEe1(){
        switch($this->Ee1){
            case '1': $this->Ee1 = 'Ya'; break;
            case '2': $this->Ee1 = 'Tidak'; break;
            default: $this->Ee1 = '-';
        }
        return $this->Ee1;
    }

    public function getEe2(){
        return $this->Ee2;
    }

    public function getEe3(){
        switch($this->Ee3){
            case '1': $this->Ee3 = '0 - 6 Bulan'; break;
            case '2': $this->Ee3 = '6 - 12 Bulan'; break;
            case '3': $this->Ee3 = '> 12 Bulan'; break;
            default: $this->Ee3 = '-';
        }
        return $this->Ee3;
    }

    public function getEf1(){
        switch($this->Ef1){
            case '1': $this->Ef1 = 'Ya'; break;
            case '2': $this->Ef1 = 'Tidak'; break;
            default: $this->Ef1 = '-';
        }
        return $this->Ef1;
    }

    public function getEf2(){
        return $this->Ef2;
    }

    public function getEf3(){
        switch($this->Ef3){
            case '1': $this->Ef3 = '0 - 6 Bulan'; break;
            case '2': $this->Ef3 = '6 - 12 Bulan'; break;
            case '3': $this->Ef3 = '> 12 Bulan'; break;
            default: $this->Ef3 = '-';
        }
        return $this->Ef3;
    }

    public function getEf2Lainnya(){
        return $this->Ef2Lainnya;
    }

    public function getEg1(){
        switch($this->Eg1){
            case '1': $this->Eg1 = 'Ya'; break;
            case '2': $this->Eg1 = 'Tidak'; break;
            default: $this->Eg1 = '-';
        }
        return $this->Eg1;
    }

    public function getEg2(){
        switch($this->Eg2){
            case '1': $this->Eg2 = 'Kanan'; break;
            case '2': $this->Eg2 = 'Kiri'; break;
            case '3': $this->Eg2 = 'Bilateral'; break;
            default: $this->Eg2 = '-';
        }
        return $this->Eg2;
    }

    public function getEg3(){
        switch($this->Eg3){
            case '1': $this->Eg3 = '0 - 6 Bulan'; break;
            case '2': $this->Eg3 = '6 - 12 Bulan'; break;
            case '3': $this->Eg3 = '> 12 Bulan'; break;
            default: $this->Eg3 = '-';
        }
        return $this->Eg3;
    }

    public function getEg4(){
        return $this->Eg4;
    }

    public function getEg5(){
        return $this->Eg5;
    }

    public function getEg6(){
        return $this->Eg6;
    }

    public function getEgLainnya(){
        return $this->EgLainnya;
    }

    public function getFa1(){
        switch($this->Fa1){
            case '1': $this->Fa1 = 'Ya'; break;
            case '2': $this->Fa1 = 'Tidak'; break;
            default: $this->Fa1 = '-';
        }
        return $this->Fa1;
    }

    public function getFa2(){
        switch($this->Fa2){
            case '1': $this->Fa2 = '0 - 6 Bulan'; break;
            case '2': $this->Fa2 = '6 - 12 Bulan'; break;
            case '3': $this->Fa2 = '> 12 Bulan'; break;
            default: $this->Fa2 = '-';
        }
        return $this->Fa2;
    }

    public function getFb1(){
        switch($this->Fb1){
            case '1': $this->Fb1 = 'Ya'; break;
            case '2': $this->Fb1 = 'Tidak'; break;
            default: $this->Fb1 = '-';
        }
        return $this->Fb1;
    }

    public function getFb2(){
        switch($this->Fb2){
            case '1': $this->Fb2 = '0 - 6 Bulan'; break;
            case '2': $this->Fb2 = '6 - 12 Bulan'; break;
            case '3': $this->Fb2 = '> 12 Bulan'; break;
            default: $this->Fb2 = '-';
        }
        return $this->Fb2;
    }
    public function getFc1(){
        switch($this->Fc1){
            case '1': $this->Fc1 = 'Ya'; break;
            case '2': $this->Fc1 = 'Tidak'; break;
            default: $this->Fc1 = '-';
        }
        return $this->Fc1;
    }

    public function getFc2(){
        switch($this->Fc2){
            case '1': $this->Fc2 = '0 - 6 Bulan'; break;
            case '2': $this->Fc2 = '6 - 12 Bulan'; break;
            case '3': $this->Fc2 = '> 12 Bulan'; break;
            default: $this->Fc2 = '-';
        }
        return $this->Fc2;
    }
    
    public function getFd1(){
        switch($this->Fd1){
            case '1': $this->Fd1 = 'Ya'; break;
            case '2': $this->Fd1 = 'Tidak'; break;
            default: $this->Fd1 = '-';
        }
        return $this->Fd1;
    }

    public function getFd2(){
        switch($this->Fd2){
            case '1': $this->Fd2 = '0 - 6 Bulan'; break;
            case '2': $this->Fd2 = '6 - 12 Bulan'; break;
            case '3': $this->Fd2 = '> 12 Bulan'; break;
            default: $this->Fd2 = '-';
        }
        return $this->Fd2;
    }

    public function getFe1(){
        switch($this->Fe1){
            case '1': $this->Fe1 = 'Ya'; break;
            case '2': $this->Fe1 = 'Tidak'; break;
            default: $this->Fe1 = '-';
        }
        return $this->Fe1;
    }

    public function getFe2(){
        switch($this->Fe2){
            case '1': $this->Fe2 = '0 - 6 Bulan'; break;
            case '2': $this->Fe2 = '6 - 12 Bulan'; break;
            case '3': $this->Fe2 = '> 12 Bulan'; break;
            default: $this->Fe2 = '-';
        }
        return $this->Fe2;
    }

    public function getFf1(){
        switch($this->Ff1){
            case '1': $this->Ff1 = 'Ya'; break;
            case '2': $this->Ff1 = 'Tidak'; break;
            default: $this->Ff1 = '-';
        }
        return $this->Ff1;
    }

    public function getFf2(){
        switch($this->Ff2){
            case '1': $this->Ff2 = '0 - 6 Bulan'; break;
            case '2': $this->Ff2 = '6 - 12 Bulan'; break;
            case '3': $this->Ff2 = '> 12 Bulan'; break;
            default: $this->Ff2 = '-';
        }
        return $this->Ff2;
    }

    public function getFg1(){
        switch($this->Fg1){
            case '1': $this->Fg1 = 'Ya'; break;
            case '2': $this->Fg1 = 'Tidak'; break;
            default: $this->Fg1 = '-';
        }
        return $this->Fg1;
    }

    public function getFg2(){
        switch($this->Fg2){
            case '1': $this->Fg2 = '0 - 6 Bulan'; break;
            case '2': $this->Fg2 = '6 - 12 Bulan'; break;
            case '3': $this->Fg2 = '> 12 Bulan'; break;
            default: $this->Fg2 = '-';
        }
        return $this->Fg2;
    }

    public function getFg3(){        
        switch($this->Fg3){
            case '1': $this->Fg3 = 'Kanan'; break;
            case '2': $this->Fg3 = 'Kiri'; break;
            case '3': $this->Fg3 = 'Bilateral'; break;
            default: $this->Fg3 = '-';
        }
        return $this->Fg3;
    }

    public function getFh1(){
        switch($this->Fh1){
            case '1': $this->Fh1 = 'Ya'; break;
            case '2': $this->Fh1 = 'Tidak'; break;
            default: $this->Fh1 = '-';
        }
        return $this->Fh1;
    }

    public function getFh2(){
        switch($this->Fh2){
            case '1': $this->Fh2 = '0 - 6 Bulan'; break;
            case '2': $this->Fh2 = '6 - 12 Bulan'; break;
            case '3': $this->Fh2 = '> 12 Bulan'; break;
            default: $this->Fh2 = '-';
        }
        return $this->Fh2;
    }

    public function getFi1(){
        return $this->Fi1;
    }

    public function getFi2(){
        return $this->Fi2;
    }

    public function getGa1(){
        switch($this->Ga1){
            case '1': $this->Ga1 = 'Ya'; break;
            case '2': $this->Ga1 = 'Tidak'; break;
            default: $this->Ga1 = '-';
        }
        return $this->Ga1;
    }

    public function getGa2(){
        switch($this->Ga2){
            case '1': $this->Ga2 = 'Kanan'; break;
            case '2': $this->Ga2 = 'Kiri'; break;
            case '3': $this->Ga2 = 'Bilateral'; break;
            default: $this->Ga2 = '-';
        }
        return $this->Ga2;
    }

    public function getGa3(){
        switch($this->Ga3){
            case '1': $this->Ga3 = '0 - 6 Bulan'; break;
            case '2': $this->Ga3 = '6 - 12 Bulan'; break;
            case '3': $this->Ga3 = '> 12 Bulan'; break;
            default: $this->Ga3 = '-';
        }
        return $this->Ga3;
    }

    public function getGb1(){
        switch($this->Gb1){
            case '1': $this->Gb1 = 'Ya'; break;
            case '2': $this->Gb1 = 'Tidak'; break;
            default: $this->Gb1 = '-';
        }
        return $this->Gb1;
    }

    public function getGb2(){
        switch($this->Gb2){
            case '1': $this->Gb2 = 'Kanan'; break;
            case '2': $this->Gb2 = 'Kiri'; break;
            case '3': $this->Gb2 = 'Bilateral'; break;
            default: $this->Gb2 = '-';
        }
        return $this->Gb2;
    }

    public function getGb3(){
        switch($this->Gb3){
            case '1': $this->Gb3 = '0 - 6 Bulan'; break;
            case '2': $this->Gb3 = '6 - 12 Bulan'; break;
            case '3': $this->Gb3 = '> 12 Bulan'; break;
            default: $this->Gb3 = '-';
        }
        return $this->Gb3;
    }

    public function getGc1(){
        return $this->Gc1;
    }

    public function getGd1(){
        switch($this->Gd1){
            case '1': $this->Gd1 = 'Ya'; break;
            case '2': $this->Gd1 = 'Tidak'; break;
            default: $this->Gd1 = '-';
        }
        return $this->Gd1;
    }

    public function getGd2(){
        switch($this->Gd2){
            case '1': $this->Gd2 = '0 - 6 Bulan'; break;
            case '2': $this->Gd2 = '6 - 12 Bulan'; break;
            case '3': $this->Gd2 = '> 12 Bulan'; break;
            default: $this->Gd2 = '-';
        }
        return $this->Gd2;
    }

    public function getGe1(){
        switch($this->Ge1){
            case '1': $this->Ge1 = 'Ya'; break;
            case '2': $this->Ge1 = 'Tidak'; break;
            default: $this->Ge1 = '-';
        }
        return $this->Ge1;
    }

    public function getGe2(){
        switch($this->Ge2){
            case '1': $this->Ge2 = 'Kanan'; break;
            case '2': $this->Ge2 = 'Kiri'; break;
            case '3': $this->Ge2 = 'Bilateral'; break;
            default: $this->Ge2 = '-';
        }
        return $this->Ge2;
    }

    public function getGe3(){
        switch($this->Ge3){
            case '1': $this->Ge3 = '0 - 6 Bulan'; break;
            case '2': $this->Ge3 = '6 - 12 Bulan'; break;
            case '3': $this->Ge3 = '> 12 Bulan'; break;
            default: $this->Ge3 = '-';
        }
        return $this->Ge3;
    }

    public function getGf1(){
        return $this->Gf1;
    }

    public function getGf2(){
        return $this->Gf2;
    }

    public function getGg1(){
        switch($this->Gg1){
            case '1': $this->Gg1 = 'Ya'; break;
            case '2': $this->Gg1 = 'Tidak'; break;
            default: $this->Gg1 = '-';
        }
        return $this->Gg1;
    }

    public function getGg2(){
        switch($this->Gg2){
            case '1': $this->Gg2 = 'Kanan'; break;
            case '2': $this->Gg2 = 'Kiri'; break;
            case '3': $this->Gg2 = 'Bilateral'; break;
            case '4': $this->Gg2 = 'Lainnya'; break;
            default: $this->Gg2 = '-';
        }
        return $this->Gg2;
    }

    public function getGg2Lainnya(){
        return $this->Gg2Lainnya;
    }

        public function getGg3(){
        switch($this->Gg3){
            case '1': $this->Gg3 = '0 - 6 Bulan'; break;
            case '2': $this->Gg3 = '6 - 12 Bulan'; break;
            case '3': $this->Gg3 = '> 12 Bulan'; break;
            default: $this->Gg3 = '-';
        }
        return $this->Gg3;
    }


    public function getGh1(){
        switch($this->Gh1){
            case '1': $this->Gh1 = 'Ya'; break;
            case '2': $this->Gh1 = 'Tidak'; break;
            default: $this->Gh1 = '-';
        }
        return $this->Gh1;
    }

    public function getGh2(){
        switch($this->Gh2){
            case '1': $this->Gh2 = '0 - 6 Bulan'; break;
            case '2': $this->Gh2 = '6 - 12 Bulan'; break;
            case '3': $this->Gh2 = '> 12 Bulan'; break;
            default: $this->Gh2 = '-';
        }
        return $this->Gh2;
    }

    public function getHa1(){
        return $this->Ha1;
    }

    public function getHa2(){
        return $this->Ha2;
    }

    public function getHa3(){
        return $this->Ha3;
    }

    public function getHb1(){
        return $this->Hb1;
    }

    public function getHb2(){
        return $this->Hb2;
    }

    public function getHb3(){
        return $this->Hb3;
    }

    public function getHc1(){
        return $this->Hc1;
    }

    public function getHc2(){
        return $this->Hc2;
    }

    public function getHc3(){
        return $this->Hc3;
    }

    public function getHd1(){
        return $this->Hd1;
    }

    public function getHd2(){
        return $this->Hd2;
    }

    public function getHd3(){
        return $this->Hd3;
    }

    public function getHe1(){
        return $this->He1;
    }

    public function getHe2(){
        return $this->He2;
    }

    public function getHe3(){
        return $this->He3;
    }

    public function getHf1(){
        return $this->Hf1;
    }

    public function getHf2(){
        return $this->Hf2;
    }

    public function getHf3(){
        return $this->Hf3;
    }

    public function getHg1(){
        return $this->Hg1;
    }

    public function getHg2(){
        return $this->Hg2;
    }

    public function getHg3(){
        return $this->Hg3;
    }

    public function getHh1(){
        return $this->Hh1;
    }

    public function getHh2(){
        return $this->Hh2;
    }

    public function getHh3(){
        return $this->Hh3;
    }

    public function getHi1(){
        return $this->Hi1;
    }

    public function getHi2(){
        return $this->Hi2;
    }

    public function getHi3(){
        return $this->Hi3;
    }

    public function getHj1(){
        return $this->Hj1;
    }

    public function getHj2(){
        return $this->Hj2;
    }

    public function getHj3(){
        return $this->Hj3;
    }

    public function getIa1(){
        switch($this->Ia1){
            case '1': $this->Ia1 = 'Ya'; break;
            case '2': $this->Ia1 = 'Tidak'; break;
            default: $this->Ia1 = '-';
        }
        return $this->Ia1;
    }

    public function getIa2(){
        switch($this->Ia2){
            case '1': $this->Ia2 = 'Kanan'; break;
            case '2': $this->Ia2 = 'Kiri'; break;
            case '3': $this->Ia2 = 'Bilateral'; break;
            default: $this->Ia2 = '-';
        }
        return $this->Ia2;
    }

    public function getIa3(){
        switch($this->Ia3){
            case '1': $this->Ia3 = '0 - 6 Bulan'; break;
            case '2': $this->Ia3 = '6 - 12 Bulan'; break;
            case '3': $this->Ia3 = '> 12 Bulan'; break;
            default: $this->Ia3 = '-';
        }
        return $this->Ia3;
    }

    public function getIb1(){
        switch($this->Ib1){
            case '1': $this->Ib1 = 'Ya'; break;
            case '2': $this->Ib1 = 'Tidak'; break;
            default: $this->Ib1 = '-';
        }
        return $this->Ib1;
    }

    public function getIb2(){
        switch($this->Ib2){
            case '1': $this->Ib2 = 'Kanan'; break;
            case '2': $this->Ib2 = 'Kiri'; break;
            case '3': $this->Ib2 = 'Bilateral'; break;
            default: $this->Ib2 = '-';
        }
        return $this->Ib2;
    }

    public function getIb3(){
        switch($this->Ib3){
            case '1': $this->Ib3 = '0 - 6 Bulan'; break;
            case '2': $this->Ib3 = '6 - 12 Bulan'; break;
            case '3': $this->Ib3 = '> 12 Bulan'; break;
            default: $this->Ib3 = '-';
        }
        return $this->Ib3;
    }

    public function getIc1(){
        switch($this->Ic1){
            case '1': $this->Ic1 = 'Ya'; break;
            case '2': $this->Ic1 = 'Tidak'; break;
            default: $this->Ic1 = '-';
        }
        return $this->Ic1;
    }

    public function getIc2(){
        switch($this->Ic2){
            case '1': $this->Ic2 = 'Kanan'; break;
            case '2': $this->Ic2 = 'Kiri'; break;
            case '3': $this->Ic2 = 'Bilateral'; break;
            default: $this->Ic2 = '-';
        }
        return $this->Ic2;
    }

    public function getIc3(){
        switch($this->Ic3){
            case '1': $this->Ic3 = '0 - 6 Bulan'; break;
            case '2': $this->Ic3 = '6 - 12 Bulan'; break;
            case '3': $this->Ic3 = '> 12 Bulan'; break;
            default: $this->Ic3 = '-';
        }
        return $this->Ic3;
    }

    public function getId1(){
        switch($this->Id1){
            case '1': $this->Id1 = 'Ya'; break;
            case '2': $this->Id1 = 'Tidak'; break;
            default: $this->Id1 = '-';
        }
        return $this->Id1;
    }

    public function getId2(){
        switch($this->Id2){
            case '1': $this->Id2 = 'Kanan'; break;
            case '2': $this->Id2 = 'Kiri'; break;
            case '3': $this->Id2 = 'Bilateral'; break;
            default: $this->Id2 = '-';
        }
        return $this->Id2;
    }

    public function getId3(){
        switch($this->Id3){
            case '1': $this->Id3 = '0 - 6 Bulan'; break;
            case '2': $this->Id3 = '6 - 12 Bulan'; break;
            case '3': $this->Id3 = '> 12 Bulan'; break;
            default: $this->Id3 = '-';
        }
        return $this->Id3;
    }

    public function getIe1(){
        switch($this->Ie1){
            case '1': $this->Ie1 = 'Ya'; break;
            case '2': $this->Ie1 = 'Tidak'; break;
            default: $this->Ie1 = '-';
        }
        return $this->Ie1;
    }

    public function getIe2(){
        switch($this->Ie2){
            case '1': $this->Ie2 = 'Kanan'; break;
            case '2': $this->Ie2 = 'Kiri'; break;
            case '3': $this->Ie2 = 'Bilateral'; break;
            default: $this->Ie2 = '-';
        }
        return $this->Ie2;
    }

    public function getIe3(){
        switch($this->Ie3){
            case '1': $this->Ie3 = '0 - 6 Bulan'; break;
            case '2': $this->Ie3 = '6 - 12 Bulan'; break;
            case '3': $this->Ie3 = '> 12 Bulan'; break;
            default: $this->Ie3 = '-';
        }
        return $this->Ie3;
    }

    public function getIf1(){
        switch($this->If1){
            case '1': $this->If1 = 'Ya'; break;
            case '2': $this->If1 = 'Tidak'; break;
            default: $this->If1 = '-';
        }
        return $this->If1;
    }

    public function getIf2(){
        switch($this->If2){
            case '1': $this->If2 = 'Kanan'; break;
            case '2': $this->If2 = 'Kiri'; break;
            case '3': $this->If2 = 'Bilateral'; break;
            default: $this->If2 = '-';
        }
        return $this->If2;
    }

    public function getIf3(){
        switch($this->If3){
            case '1': $this->If3 = '0 - 6 Bulan'; break;
            case '2': $this->If3 = '6 - 12 Bulan'; break;
            case '3': $this->If3 = '> 12 Bulan'; break;
            default: $this->If3 = '-';
        }
        return $this->If3;
    }

    public function getIg1(){
        switch($this->Ig1){
            case '1': $this->Ig1 = 'Ya'; break;
            case '2': $this->Ig1 = 'Tidak'; break;
            default: $this->Ig1 = '-';
        }
        return $this->Ig1;
    }

    public function getIg2(){
        switch($this->Ig2){
            case '1': $this->Ig2 = 'Kanan'; break;
            case '2': $this->Ig2 = 'Kiri'; break;
            case '3': $this->Ig2 = 'Bilateral'; break;
            default: $this->Ig2 = '-';
        }
        return $this->Ig2;
    }

    public function getIg3(){
        switch($this->Ig3){
            case '1': $this->Ig3 = '0 - 6 Bulan'; break;
            case '2': $this->Ig3 = '6 - 12 Bulan'; break;
            case '3': $this->Ig3 = '> 12 Bulan'; break;
            default: $this->Ig3 = '-';
        }
        return $this->Ig3;
    }

    public function getIh1(){
        switch($this->Ih1){
            case '1': $this->Ih1 = 'Ya'; break;
            case '2': $this->Ih1 = 'Tidak'; break;
            default: $this->Ih1 = '-';
        }
        return $this->Ih1;
    }

    public function getIh2(){
        switch($this->Ih2){
            case '1': $this->Ih2 = 'Kanan'; break;
            case '2': $this->Ih2 = 'Kiri'; break;
            case '3': $this->Ih2 = 'Bilateral'; break;
            default: $this->Ih2 = '-';
        }
        return $this->Ih2;
    }

    public function getIh3(){
        switch($this->Ih3){
            case '1': $this->Ih3 = '0 - 6 Bulan'; break;
            case '2': $this->Ih3 = '6 - 12 Bulan'; break;
            case '3': $this->Ih3 = '> 12 Bulan'; break;
            default: $this->Ih3 = '-';
        }
        return $this->Ih3;
    }

    public function getIi1(){
        switch($this->Ii1){
            case '1': $this->Ii1 = 'Ya'; break;
            case '2': $this->Ii1 = 'Tidak'; break;
            default: $this->Ii1 = '-';
        }
        return $this->Ii1;
    }

    public function getIi2(){
        switch($this->Ii2){
            case '1': $this->Ii2 = 'Kanan'; break;
            case '2': $this->Ii2 = 'Kiri'; break;
            case '3': $this->Ii2 = 'Bilateral'; break;
            default: $this->Ii2 = '-';
        }
        return $this->Ii2;
    }

    public function getIi3(){
        switch($this->Ii3){
            case '1': $this->Ii3 = '0 - 6 Bulan'; break;
            case '2': $this->Ii3 = '6 - 12 Bulan'; break;
            case '3': $this->Ii3 = '> 12 Bulan'; break;
            default: $this->Ii3 = '-';
        }
        return $this->Ii3;
    }

    public function getJa1(){
        switch($this->Ja1){
            case '1': $this->Ja1 = 'Ya'; break;
            case '2': $this->Ja1 = 'Tidak'; break;
            default: $this->Ja1 = '-';
        }
        return $this->Ja1;
    }

    public function getJa2(){
        switch($this->Ja2){
            case '1': $this->Ja2 = 'Sama'; break;
            case '2': $this->Ja2 = 'Ca Cervix'; break;
            case '3': $this->Ja2 = 'Ca Mammae'; break;
            case '4': $this->Ja2 = 'Ca Prostat'; break;
            case '5': $this->Ja2 = 'Ca Paru'; break;
            case '6': $this->Ja2 = 'Ca Kolon'; break;
            case '7': $this->Ja2 = 'Ca Lainnya'; break;
            default: $this->Ja2 = '-';
        }
        return $this->Ja2;
    }

    public function getJa2Lainnya(){
        return $this->Ja2Lainnya;
    }

    public function getJa3(){
        switch($this->Ja3){
            case '1': $this->Ja3 = '> 12 Bulan'; break;
            case '2': $this->Ja3 = '> 12 Bulan'; break;
            case '3': $this->Ja3 = '> 12 Bulan'; break;
            case '4': $this->Ja3 = '> 12 Bulan'; break;
            case '5': $this->Ja3 = '> 12 Bulan'; break;
            case '6': $this->Ja3 = '> 12 Bulan'; break;
            case '7': $this->Ja3 = '> 12 Bulan'; break;
            case '8': $this->Ja3 = '> 12 Bulan'; break;
            default: $this->Ja3 = '-';
        }
        return $this->Ja3;
    }

    public function getJa3Lainnya(){
        return $this->Ja3Lainnya;
    }

    public function getKa1(){
        if($this->Ka1 == '1') {
            $this->Ka1 = 'Ya';
        } else if($this->Ka1 == '2') {
            $this->Ka1 = 'Tidak';
        }
        return $this->Ka1;
    }

    public function getKa2(){
        if($this->Ka2 == '1') {
            $this->Ka2 = '1-3X / Minggu';
        } else if($this->Ka2 == '2') {
            $this->Ka2 = '3-7X / Minggu';
        } else if($this->Ka2 == '3') {
            $this->Ka2 = '7X / Minggu';
        } else {
            $this->Ka2 = '-';
        }
        return $this->Ka2;
    }

    public function getKa3(){
        if($this->Ka3 == '1') {
            $this->Ka3 = '0-12 Bulan';
        } else if($this->Ka3 == '2') {
            $this->Ka3 = '12-60 Bulan';
        } else if($this->Ka3 == '3') {
            $this->Ka3 = 'Labih Dari 60 Bulan';
        } else {
            $this->Ka3 = '-';
        }
        return $this->Ka3;
    }

    public function getKa4(){
        if($this->Ka4 == '1') {
            $this->Ka4 = 'Kurang Dari 1 Gelas/Hari';
        } else if($this->Ka4 == '2') {
            $this->Ka4 = 'Lebih Dari 1 Gelas/Hari';
        } else {
            $this->Ka4 = '-';
        }
        return $this->Ka4;
    }

    public function getKb1(){
        if($this->Kb1 == '1') {
            $this->Kb1 = 'Ya';
        } else if($this->Kb1 == '2') {
            $this->Kb1 = 'Tidak';
        } else {
            $this->Kb1 = '-';
        }
        return $this->Kb1;
    }

    public function getKb2(){
        if($this->Kb2 == '1') {
            $this->Kb2 = '1-3X / Minggu';
        } else if($this->Kb2 == '2') {
            $this->Kb2 = '3-7X / Minggu';
        } else if($this->Kb2 == '3') {
            $this->Kb2 = '7X / Minggu';
        } else {
            $this->Kb2 = '-';
        }
        return $this->Kb2;
    }

    public function getKb3(){
        if($this->Kb3 == '1') {
            $this->Kb3 = '0-12 Bulan';
        } else if($this->Kb3 == '2') {
            $this->Kb3 = '12-60 Bulan';
        } else if($this->Kb3 == '3') {
            $this->Kb3 = 'Labih Dari 60 Bulan';
        } else {
            $this->Kb3 = '-';
        }
        return $this->Kb3;
    }

    public function getKb4(){
        if($this->Kb4 == '1') {
            $this->Kb4 = '0-12 Batang/hari';
        } else if($this->Kb4 == '2') {
            $this->Kb4 = '10-24 Batang/hari';
        } else if($this->Kb4 == '3') {
            $this->Kb4 = 'Labih Dari 24 Batang/hari';
        } else {
            $this->Kb4 = '-';
        }
        return $this->Kb4;
    }

    public function getKc1(){
        if($this->Kc1 == '1') {
            $this->Kc1 = 'Ya';
        } else if($this->Kc1 == '2') {
            $this->Kc1 = 'Tidak';
        } else {
            $this->Kc1 = '-';
        }
        return $this->Kc1;
    }

    public function getKc2(){
        if($this->Kc2 == '1') {
            $this->Kc2 = '1-3X / Minggu';
        } else if($this->Kc2 == '2') {
            $this->Kc2 = '3-7X / Minggu';
        } else if($this->Kc2 == '3') {
            $this->Kc2 = '7X / Minggu';
        } else {
            $this->Kc2 = '-';
        }
        return $this->Kc2;
    }

    public function getKd1(){
        if($this->Kd1 == '1') {
            $this->Kd1 = 'Ya';
        } else if($this->Kd1 == '2') {
            $this->Kd1 = 'Tidak';
        } else { $this->Kd1 = '-'; }
        return $this->Kd1;
    }

    public function getKd2(){
        if($this->Kd2 == '1') {
            $this->Kd2 = '1-3X / Minggu';
        } else if($this->Kd2 == '2') {
            $this->Kd2 = '3-7X / Minggu';
        } else if($this->Kd2 == '3') {
            $this->Kd2 = '7X / Minggu';
        } else { $this->Kd2 = '-'; }
        return $this->Kd2;
    }

    public function getKd3(){
        if($this->Kb3 == '1') {
            $this->Kb3 = '0-12 Bulan';
        } else if($this->Kb3 == '2') {
            $this->Kb3 = '12-60 Bulan';
        } else if($this->Kb3 == '3') {
            $this->Kb3 = 'Labih Dari 60 Bulan';
        } else { $this->Kb3 = '-'; }
        return $this->Kd3;
    }

    public function getKe1(){
        if($this->Ke1 == '1') {
            $this->Ke1 = 'Ya';
        } else if($this->Ke1 == '2') {
            $this->Ke1 = 'Tidak';
        } else { $this->Ke1 = '-'; }
        return $this->Ke1;
    }

    public function getKe2(){
        if($this->Ke2 == '1') {
            $this->Ke2 = '1-3X / Minggu';
        } else if($this->Ke2 == '2') {
            $this->Ke2 = '3-7X / Minggu';
        } else if($this->Ke2 == '3') {
            $this->Ke2 = '7X / Minggu';
        } else { $this->Ke2 = '-'; }
        return $this->Ke2;
    }

    public function getKf1(){
        if($this->Kf1 == '1') {
            $this->Kf1 = 'Ya';
        } else if($this->Kf1 == '2') {
            $this->Kf1 = 'Tidak';
        }else { $this->Kf1 = '-'; }
        return $this->Kf1;
    }

    public function getKg1(){
        if($this->Kg1 == '1') {
            $this->Kg1 = 'Ya';
        } else if($this->Kg1 == '2') {
            $this->Kg1 = 'Tidak';
        }else { $this->Kg1 = '-'; }
        return $this->Kg1;
    }

    public function getKh1(){
        switch($this->Kh1) { 
            case '1': $this->Kh1 = 'Mie Kemasan'; break;
            case '2': $this->Kh1 = 'Mie Kaleng'; break;
            case '3': $this->Kh1 = 'Minuman Kemasan'; break;
            case '4': $this->Kh1 = 'Makanan Panggang/Bakar'; break;
            default: $this->Kh1 = '-';
        }
        return $this->Kh1;
    }

    public function getLa(){
        if($this->La == '1') {
            $this->La = 'Ya';
        } else if($this->La == '2') {
            $this->La = 'Tidak';
        }else { $this->La = '-'; }
        return $this->La;
    }

    public function getLa1(){
        if($this->La1 == '1') {
            $this->La1 = 'Ya';
        } else if($this->La1 == '2') {
            $this->La1 = 'Tidak';
        }else { $this->La1 = '-'; }
        return $this->La1;
    }

    public function getLa2(){
        return $this->La2;
    }

    public function getLa3(){
        switch($this->La3){
            case '1': $this->La3 = '0 - 6 Bulan'; break;
            case '2': $this->La3 = ' 6 - 12 Bulan'; break;
            case '3': $this->La3 = '> 12 Bulan'; break;
            default: $this->La3 = '-';
        }
        return $this->La3;
    }

    public function getLa4(){
        return $this->La4;
    }

    public function getLaLainLain(){
        return $this->LaLainLain;
    }

    public function getLb1(){
        switch($this->Lb1){
            case '1': $this->Lb1 = 'Kemerahan'; break;
            case '2': $this->Lb1 = 'Luka Borok'; break;
            case '3': $this->Lb1 = 'Lesi Krusta'; break;
            default: $this->Lb1 = '-';
        }
        return $this->Lb1;
    }

    public function getLb2(){
        return $this->Lb2;
    }

    public function getLb3(){
        return $this->Lb3;
    }

    public function getMa1(){
        switch($this->Ma1){
            case '1': $this->Ma1 = 'Ya'; break;
            case '2': $this->Ma1 = 'Tidak'; break;
            default: $this->Ma1 = '-';
        }
        return $this->Ma1;
    }

    public function getMa2(){
        switch($this->Ma2){
            case '1': $this->Ma2 = '0 - 6 Bulan'; break;
            case '2': $this->Ma2 = '6 - 12 Bulan'; break;
            case '3': $this->Ma2 = '> 12 Bulan'; break;
            default: $this->Ma2 = '-';
        }
        return $this->Ma2;
    }

    public function getMb1(){
        switch($this->Mb1){
            case '1': $this->Mb1 = 'Ya'; break;
            case '2': $this->Mb1 = 'Tidak'; break;
            default: $this->Mb1 = '-';
        }
        return $this->Mb1;
    }

    public function getMb2(){
        switch($this->Mb2){
            case '1': $this->Mb2 = '0 - 6 Bulan'; break;
            case '2': $this->Mb2 = '6 - 12 Bulan'; break;
            case '3': $this->Mb2 = '> 12 Bulan'; break;
            default: $this->Mb2 = '-';
        }
        return $this->Mb2;
    }

    public function getMc1(){
        switch($this->Mc1){
            case '1': $this->Mc1 = 'Ya'; break;
            case '2': $this->Mc1 = 'Tidak'; break;
            default: $this->Mc1 = '-';
        }
        return $this->Mc1;
    }

    public function getMc2(){
        switch($this->Mc2){
            case '1': $this->Mc2 = 'Kanan'; break;
            case '2': $this->Mc2 = 'Kiri'; break;
            case '3': $this->Mc2 = 'Bilateral'; break;
            default: $this->Mc2 = '-';
        }
        return $this->Mc2;
    }

    public function getMc3(){
        switch($this->Mc3){
            case '1': $this->Mc3 = '0 - 6 Bulan'; break;
            case '2': $this->Mc3 = '6 - 12 Bulan'; break;
            case '3': $this->Mc3 = '> 12 Bulan'; break;
            default: $this->Mc3 = '-';
        }
        return $this->Mc3;
    }

    public function getMd1(){
        switch($this->Md1){
            case '1': $this->Md1 = 'Ya'; break;
            case '2': $this->Md1 = 'Tidak'; break;
            default: $this->Md1 = '-';
        }
        return $this->Md1;
    }

    public function getMd2(){
        switch($this->Md2){
            case '1': $this->Md2 = '0 - 6 Bulan'; break;
            case '2': $this->Md2 = '6 - 12 Bulan'; break;
            case '3': $this->Md2 = '> 12 Bulan'; break;
            default: $this->Md2 = '-';
        }
        return $this->Md2;
    }

    public function getMe1(){
        switch($this->Me1){
            case '1': $this->Me1 = 'Ya'; break;
            case '2': $this->Me1 = 'Tidak'; break;
            default: $this->Me1 = '-';
        }
        return $this->Me1;
    }

    public function getMe2(){
        switch($this->Me2){
            case '1': $this->Me2 = 'Kanan'; break;
            case '2': $this->Me2 = 'Kiri'; break;
            case '3': $this->Me2 = 'Bilateral'; break;
            default: $this->Me2 = '-';
        }
        return $this->Me2;
    }

    public function getMe3(){
        switch($this->Me3){
            case '1': $this->Me3 = '0 - 6 Bulan'; break;
            case '2': $this->Me3 = '6 - 12 Bulan'; break;
            case '3': $this->Me3 = '> 12 Bulan'; break;
            default: $this->Me3 = '-';
        }
        return $this->Me3;
    }

    public function getMf1(){
        switch($this->Mf1){
            case '1': $this->Mf1 = 'Ya'; break;
            case '2': $this->Mf1 = 'Tidak'; break;
            default: $this->Mf1 = '-';
        }
        return $this->Mf1;
    }

    public function getMf2(){
        switch($this->Mf2){
            case '1': $this->Mf2 = '0 - 6 Bulan'; break;
            case '2': $this->Mf2 = '6 - 12 Bulan'; break;
            case '3': $this->Mf2 = '> 12 Bulan'; break;
            default: $this->Mf2 = '-';
        }
        return $this->Mf2;
    }

    public function getNa1(){
        switch($this->Na1){
            case '1': $this->Na1 = 'Ya'; break;
            case '2': $this->Na1 = 'Tidak'; break;
            default: $this->Na1 = '-';
        }
        return $this->Na1;
    }

    public function getNa2(){
        switch($this->Na2){
            case '1': $this->Na2 = '0 - 6 Bulan'; break;
            case '2': $this->Na2 = '6 - 12 Bulan'; break;
            case '3': $this->Na2 = '> 12 Bulan'; break;
            default: $this->Na2 = '-';
        }
        return $this->Na2;
    }

    public function getNb1(){
        switch($this->Nb1){
            case '1': $this->Nb1 = 'Ya'; break;
            case '2': $this->Nb1 = 'Tidak'; break;
            default: $this->Nb1 = '-';
        }
        return $this->Nb1;
    }

    public function getNb2(){
        switch($this->Nb2){
            case '1': $this->Nb2 = '0 - 6 Bulan'; break;
            case '2': $this->Nb2 = '6 - 12 Bulan'; break;
            case '3': $this->Nb2 = '> 12 Bulan'; break;
            default: $this->Nb2 = '-';
        }
        return $this->Nb2;
    }

    public function getNc1(){
        switch($this->Nc1){
            case '1': $this->Nc1 = 'Ya'; break;
            case '2': $this->Nc1 = 'Tidak'; break;
            default: $this->Nc1 = '-';
        }
        return $this->Nc1;
    }

    public function getNc2(){
        switch($this->Nc2){
            case '1': $this->Nc2 = '0 - 6 Bulan'; break;
            case '2': $this->Nc2 = '6 - 12 Bulan'; break;
            case '3': $this->Nc2 = '> 12 Bulan'; break;
            default: $this->Nc2 = '-';
        }
        return $this->Nc2;
    }

    public function getNd1(){
        switch($this->Nd1){
            case '1': $this->Nd1 = 'Ya'; break;
            case '2': $this->Nd1 = 'Tidak'; break;
            default: $this->Nd1 = '-';
        }
        return $this->Nd1;
    }

    public function getNd2(){
        switch($this->Nd2){
            case '1': $this->Nd2 = 'Kanan'; break;
            case '2': $this->Nd2 = 'Kiri'; break;
            case '3': $this->Nd2 = 'Bilateral'; break;
            default: $this->Nd2 = '-';
        }
        return $this->Nd2;
    }

    public function getNd3(){
        switch($this->Nd3){
            case '1': $this->Nd3 = '0 - 6 Bulan'; break;
            case '2': $this->Nd3 = '6 - 12 Bulan'; break;
            case '3': $this->Nd3 = '> 12 Bulan'; break;
            default: $this->Nd3 = '-';
        }
        return $this->Nd3;
    }

    public function getNe1(){
        switch($this->Ne1){
            case '1': $this->Ne1 = 'Ya'; break;
            case '2': $this->Ne1 = 'Tidak'; break;
            default: $this->Ne1 = '-';
        }
        return $this->Ne1;
    }

    public function getNe2(){
        switch($this->Ne2){
            case '1': $this->Ne2 = '0 - 6 Bulan'; break;
            case '2': $this->Ne2 = '6 - 12 Bulan'; break;
            case '3': $this->Ne2 = '> 12 Bulan'; break;
            default: $this->Ne2 = '-';
        }
        return $this->Ne2;
    }

    public function getOa1(){
        switch($this->Oa1){
            case '1': $this->Oa1 = 'Ya'; break;
            case '2': $this->Oa1 = 'Tidak'; break;
            default: $this->Oa1 = '-';
        }
        return $this->Oa1;
    }

    public function getOa2(){
        switch($this->Oa2){
            case '1': $this->Oa2 = '0 - 6 Bulan'; break;
            case '2': $this->Oa2 = '6 - 12 Bulan'; break;
            case '3': $this->Oa2 = '> 12 Bulan'; break;
            default: $this->Oa2 = '-';
        }
        return $this->Oa2;
    }

    public function getOb1(){
        switch($this->Ob1){
            case '1': $this->Ob1 = 'Ya'; break;
            case '2': $this->Ob1 = 'Tidak'; break;
            default: $this->Ob1 = '-';
        }
        return $this->Ob1;
    }

    public function getOb2(){
        switch($this->Ob2){
            case '1': $this->Ob2 = '0 - 6 Bulan'; break;
            case '2': $this->Ob2 = '6 - 12 Bulan'; break;
            case '3': $this->Ob2 = '> 12 Bulan'; break;
            default: $this->Ob2 = '-';
        }
        return $this->Ob2;
    }

    public function getOc1(){
        switch($this->Oc1){
            case '1': $this->Oc1 = 'Ya'; break;
            case '2': $this->Oc1 = 'Tidak'; break;
            default: $this->Oc1 = '-';
        }
        return $this->Oc1;
    }

    public function getOc2(){
        switch($this->Oc2){
            case '1': $this->Oc2 = '0 - 6 Bulan'; break;
            case '2': $this->Oc2 = '6 - 12 Bulan'; break;
            case '3': $this->Oc2 = '> 12 Bulan'; break;
            default: $this->Oc2 = '-';
        }
        return $this->Oc2;
    }
    public function getOd1(){
        switch($this->Od1){
            case '1': $this->Od1 = 'Ya'; break;
            case '2': $this->Od1 = 'Tidak'; break;
            default: $this->Od1 = '-';
        }
        return $this->Od1;
    }

    public function getOd2(){
        switch($this->Od2){
            case '1': $this->Od2 = '0 - 6 Bulan'; break;
            case '2': $this->Od2 = '6 - 12 Bulan'; break;
            case '3': $this->Od2 = '> 12 Bulan'; break;
            default: $this->Od2 = '-';
        }
        return $this->Od2;
    }

    public function getOe1(){
        switch($this->Oe1){
            case '1': $this->Oe1 = 'Ya'; break;
            case '2': $this->Oe1 = 'Tidak'; break;
            default: $this->Oe1 = '-';
        }
        return $this->Oe1;
    }

    public function getOe2(){
        switch($this->Oe2){
            case '1': $this->Oe2 = '0 - 6 Bulan'; break;
            case '2': $this->Oe2 = '6 - 12 Bulan'; break;
            case '3': $this->Oe2 = '> 12 Bulan'; break;
            default: $this->Oe2 = '-';
        }
        return $this->Oe2;
    }

    public function getPa1(){
        switch($this->Pa1){
            case '1': $this->Pa1 = 'Ya'; break;
            case '2': $this->Pa1 = 'Tidak'; break;
            default: $this->Pa1 = '-';
        }
        return $this->Pa1;
    }

    public function getPa2(){
        switch($this->Pa2){
            case '1': $this->Pa2 = 'Kanan'; break;
            case '2': $this->Pa2 = 'Kiri'; break;
            case '3': $this->Pa2 = 'Bilateral'; break;
            case '4': $this->Pa2 = 'Lainnya'; break;
            default: $this->Pa2 = '-';
        }
        return $this->Pa2;
    }

    public function getPa2Lainnya(){
        return $this->Pa2Lainnya;
    }

    public function getPa3(){
        switch($this->Pa3){
            case '1': $this->Pa3 = '0 - 6 Bulan'; break;
            case '2': $this->Pa3 = '6 - 12 Bulan'; break;
            case '3': $this->Pa3 = '> 12 Bulan'; break;
            default: $this->Pa3 = '-';
        }
        return $this->Pa3;
    }

    public function getPb1(){
        return $this->Pb1;
    }

    public function getPb2(){
        return $this->Pb2;
    }

    public function getPc1(){
        return $this->Pc1;
    }

    public function getPc2(){
        return $this->Pc2;
    }

    public function getPd1(){
        switch($this->Pd1){
            case '1': $this->Pd1 = 'Ya'; break;
            case '2': $this->Pd1 = 'Tidak'; break;
            default: $this->Pd1 = '-';
        }
        return $this->Pd1;
    }

    public function getPd2(){
        switch($this->Pd2){
            case '1': $this->Pd2 = '0 - 6 Bulan'; break;
            case '2': $this->Pd2 = '6 - 12 Bulan'; break;
            case '3': $this->Pd2 = '> 12 Bulan'; break;
            default: $this->Pd2 = '-';
        }
        return $this->Pd2;
    }

    public function getPe1(){
        switch($this->Pe1){
            case '1': $this->Pe1 = 'Ya'; break;
            case '2': $this->Pe1 = 'Tidak'; break;
            default: $this->Pe1 = '-';
        }
        return $this->Pe1;
    }

    public function getPe2(){
        switch($this->Pe2){
            case '1': $this->Pe2 = '0 - 6 Bulan'; break;
            case '2': $this->Pe2 = '6 - 12 Bulan'; break;
            case '3': $this->Pe2 = '> 12 Bulan'; break;
            default: $this->Pe2 = '-';
        }
        return $this->Pe2;
    }

    public function getQa1(){
        switch($this->Qa1){
            case '1': $this->Qa1 = 'Ya'; break;
            case '2': $this->Qa1 = 'Tidak'; break;
            default: $this->Qa1 = '-';
        }
        return $this->Qa1;
    }

    public function getQa2(){
        switch($this->Qa2){
            case '1': $this->Qa2 = 'Kanan'; break;
            case '2': $this->Qa2 = 'Kiri'; break;
            case '3': $this->Qa2 = 'Bilateral'; break;
            case '4': $this->Qa2 = 'Lainnya'; break;
            default: $this->Qa2 = '-';
        }
        return $this->Qa2;
    }

    public function getQa2Lainnya(){
        return $this->Qa2Lainnya;
    }

    public function getQa3(){
        return $this->Qa3;
    }

    public function getQb1(){
        return $this->Qb1;
    }

    public function getQb2(){
        return $this->Qb2;
    }

    public function getQc1(){
        return $this->Qc1;
    }

    public function getQc2(){
        return $this->Qc2;
    }

    public function getQd1(){
        switch($this->Qd1){
            case '1': $this->Qd1 = 'Ya'; break;
            case '2': $this->Qd1 = 'Tidak'; break;
            default: $this->Qd1 = '-';
        }
        return $this->Qd1;
    }

    public function getQd2(){
        switch($this->Qd2){
            case '1': $this->Qd2 = '0 - 6 Bulan'; break;
            case '2': $this->Qd2 = '6 - 12 Bulan'; break;
            case '3': $this->Qd2 = '> 12 Bulan'; break;
            default: $this->Qd2 = '-';
        }
        return $this->Qd2;
    }

    public function getQe1(){
        switch($this->Qe1){
            case '1': $this->Qe1 = 'Ya'; break;
            case '2': $this->Qe1 = 'Tidak'; break;
            default: $this->Qe1 = '-';
        }
        return $this->Qe1;
    }

    public function getQe2(){
        switch($this->Qe2){
            case '1': $this->Qe2 = '0 - 6 Bulan'; break;
            case '2': $this->Qe2 = '6 - 12 Bulan'; break;
            case '3': $this->Qe2 = '> 12 Bulan'; break;
            default: $this->Qe2 = '-';
        }
        return $this->Qe2;
    }
    public function getRa1(){
        switch($this->Ra1){
            case '1': $this->Ra1 = 'Ya'; break;
            case '2': $this->Ra1 = 'Tidak'; break;
            default: $this->Ra1 = '-';
        }
        return $this->Ra1;
    }

    public function getRa2(){
        switch($this->Ra2){
            case '1': $this->Ra2 = '0 - 6 Bulan'; break;
            case '2': $this->Ra2 = '6 - 12 Bulan'; break;
            case '3': $this->Ra2 = '> 12 Bulan'; break;
            default: $this->Ra2 = '-';
        }
        return $this->Ra2;
    }

    public function getRb1(){
        switch($this->Rb1){
            case '1': $this->Rb1 = 'Ya'; break;
            case '2': $this->Rb1 = 'Tidak'; break;
            default: $this->Rb1 = '-';
        }
        return $this->Rb1;
    }

    public function getRb2(){
        switch($this->Rb2){
            case '1': $this->Rb2 = '0 - 6 Bulan'; break;
            case '2': $this->Rb2 = '6 - 12 Bulan'; break;
            case '3': $this->Rb2 = '> 12 Bulan'; break;
            default: $this->Rb2 = '-';
        }
        return $this->Rb2;
    }

    public function getRc1(){
        switch($this->Rc1){
            case '1': $this->Rc1 = 'Ya'; break;
            case '2': $this->Rc1 = 'Tidak'; break;
            default: $this->Rc1 = '-';
        }
        return $this->Rc1;
    }

    public function getRc2(){
        switch($this->Rc2){
            case '1': $this->Rc2 = '0 - 6 Bulan'; break;
            case '2': $this->Rc2 = '6 - 12 Bulan'; break;
            case '3': $this->Rc2 = '> 12 Bulan'; break;
            default: $this->Rc2 = '-';
        }
        return $this->Rc2;
    }

    public function getRd1(){
        switch($this->Rd1){
            case '1': $this->Rd1 = 'Ya'; break;
            case '2': $this->Rd1 = 'Tidak'; break;
            default: $this->Rd1 = '-';
        }
        return $this->Rd1;
    }

    public function getRd2(){
        switch($this->Rd2){
            case '1': $this->Rd2 = '0 - 6 Bulan'; break;
            case '2': $this->Rd2 = '6 - 12 Bulan'; break;
            case '3': $this->Rd2 = '> 12 Bulan'; break;
            default: $this->Rd2 = '-';
        }
        return $this->Rd2;
    }

    public function getRe1(){
        switch($this->Re1){
            case '1': $this->Re1 = 'Ya'; break;
            case '2': $this->Re1 = 'Tidak'; break;
            default: $this->Re1 = '-';
        }
        return $this->Re1;
    }

    public function getRe2(){
        switch($this->Re2){
            case '1': $this->Re2 = '0 - 6 Bulan'; break;
            case '2': $this->Re2 = '6 - 12 Bulan'; break;
            case '3': $this->Re2 = '> 12 Bulan'; break;
            default: $this->Re2 = '-';
        }
        return $this->Re2;
    }

    public function getRf1(){
        switch($this->Rf1){
            case '1': $this->Rf1 = 'Ya'; break;
            case '2': $this->Rf1 = 'Tidak'; break;
            default: $this->Rf1 = '-';
        }
        return $this->Rf1;
    }

    public function getRf2(){
        switch($this->Rf2){
            case '1': $this->Rf2 = '0 - 6 Bulan'; break;
            case '2': $this->Rf2 = '6 - 12 Bulan'; break;
            case '3': $this->Rf2 = '> 12 Bulan'; break;
            default: $this->Rf2 = '-';
        }
        return $this->Rf2;
    }

    public function getSa1(){
        switch($this->Sa1){
            case '1': $this->Sa1 = 'Ya'; break;
            case '2': $this->Sa1 = 'Tidak'; break;
            default: $this->Sa1 = '-';
        }
        return $this->Sa1;
    }

    public function getSa2(){
        switch($this->Sa2){
            case '1': $this->Sa2 = 'Kanan'; break;
            case '2': $this->Sa2 = 'Kiri'; break;
            case '3': $this->Sa2 = 'Bilateral'; break;
            default: $this->Sa2 = '-';
        }
        return $this->Sa2;
    }

    public function getSa3(){
        switch($this->Sa3){
            case '1': $this->Sa3 = '0 - 6 Bulan'; break;
            case '2': $this->Sa3 = '6 - 12 Bulan'; break;
            case '3': $this->Sa3 = '> 12 Bulan'; break;
            default: $this->Sa3 = '-';
        }
        return $this->Sa3;
    }

    public function getSb1(){
        switch($this->Sb1){
            case '1': $this->Sb1 = 'Ya'; break;
            case '2': $this->Sb1 = 'Tidak'; break;
            default: $this->Sb1 = '-';
        }
        return $this->Sb1;
    }

    public function getSb2(){
        switch($this->Sb2){
            case '1': $this->Sb2 = '0 - 6 Bulan'; break;
            case '2': $this->Sb2 = '6 - 12 Bulan'; break;
            case '3': $this->Sb2 = '> 12 Bulan'; break;
            default: $this->Sb2 = '-';
        }
        return $this->Sb2;
    }

    public function getSc1(){
        switch($this->Sc1){
            case '1': $this->Sc1 = 'Ya'; break;
            case '2': $this->Sc1 = 'Tidak'; break;
            default: $this->Sc1 = '-';
        }
        return $this->Sc1;
    }

    public function getSc2(){
        switch($this->Sc2){
            case '1': $this->Sc2 = '0 - 6 Bulan'; break;
            case '2': $this->Sc2 = '6 - 12 Bulan'; break;
            case '3': $this->Sc2 = '> 12 Bulan'; break;
            default: $this->Sc2 = '-';
        }
        return $this->Sc2;
    }

    public function getSd1(){
        switch($this->Sd1){
            case '1': $this->Sd1 = 'Ya'; break;
            case '2': $this->Sd1 = 'Tidak'; break;
            default: $this->Sd1 = '-';
        }
        return $this->Sd1;
    }

    public function getSd2(){
        switch($this->Sd2){
            case '1': $this->Sd2 = 'Kanan'; break;
            case '2': $this->Sd2 = 'Kiri'; break;
            case '3': $this->Sd2 = 'Bilateral'; break;
            default: $this->Sd2 = '-';
        }
        return $this->Sd2;
    }

    public function getSd3(){
        switch($this->Sd3){
            case '1': $this->Sd3 = 'Kanan'; break;
            case '2': $this->Sd3 = 'Kiri'; break;
            case '3': $this->Sd3 = 'Bilateral'; break;
            default: $this->Sd3 = '-';
        }
        return $this->Sd3;
    }

    public function getSd4(){
        switch($this->Sd4){
            case '1': $this->Sd4 = '0 - 6 Bulan'; break;
            case '2': $this->Sd4 = '6 - 12 Bulan'; break;
            case '3': $this->Sd4 = '> 12 Bulan'; break;
            default: $this->Sd4 = '-';
        }
        return $this->Sd4;
    }

   public function getSe1(){
        switch($this->Se1){
            case '1': $this->Se1 = 'Ya'; break;
            case '2': $this->Se1 = 'Tidak'; break;
            default: $this->Se1 = '-';
        }
        return $this->Se1;
    }

    public function getSe2(){
        switch($this->Se2){
            case '1': $this->Se2 = '0 - 6 Bulan'; break;
            case '2': $this->Se2 = '6 - 12 Bulan'; break;
            case '3': $this->Se2 = '> 12 Bulan'; break;
            default: $this->Se2 = '-';
        }
        return $this->Se2;
    }

    public function getTa1(){
        switch($this->Ta1){
            case '1': $this->Ta1 = 'Ya'; break;
            case '2': $this->Ta1 = 'Tidak'; break;
            default: $this->Ta1 = '-';
        }
        return $this->Ta1;
    }

    public function getTa2(){
        switch($this->Ta2){
            case '1': $this->Ta2 = '0 - 6 Bulan'; break;
            case '2': $this->Ta2 = '6 - 12 Bulan'; break;
            case '3': $this->Ta2 = '> 12 Bulan'; break;
            default: $this->Ta2 = '-';
        }
        return $this->Ta2;
    }

    public function getTb1(){
        switch($this->Tb1){
            case '1': $this->Tb1 = '< 6 Bulan'; break;
            case '2': $this->Tb1 = '> 6 Bulan'; break;
            default: $this->Tb1 = '-';
        }
        return $this->Tb1;
    }

    public function getTb2(){
        switch($this->Tb2){
            case '1': $this->Tb2 = 'Dokter Umum'; break;
            case '2': $this->Tb2 = 'Dokter THT-KL'; break;
            case '3': $this->Tb2 = 'Lainnya'; break;
            default: $this->Tb2 = '-';
        }
        return $this->Tb2;
    }

    public function getTb2Lainnya(){
        return $this->Tb2Lainnya;
    }

    public function getTb21(){
        switch($this->Tb21){
            case '1': $this->Tb21 = 'Ya'; break;
            case '2': $this->Tb21 = 'Tidak'; break;
            default: $this->Tb21 = '-';
        }
        return $this->Tb21;
    }

    public function getTb22(){
        switch($this->Tb22){
            case '1': $this->Tb22 = 'Ya'; break;
            case '2': $this->Tb22 = 'Tidak'; break;
            default: $this->Tb22 = '-';
        }
        return $this->Tb22;
    }

    public function getTb23(){
        switch($this->Tb23){
            case '1': $this->Tb23 = 'Ya'; break;
            case '2': $this->Tb23 = 'Tidak'; break;
            default: $this->Tb23 = '-';
        }
        return $this->Tb23;
    }

    public function getTb24(){
        switch($this->Tb24){
            case '1': $this->Tb24 = 'Ya'; break;
            case '2': $this->Tb24 = 'Tidak'; break;
            default: $this->Tb24 = '-';
        }
        return $this->Tb24;
    }

    public function getTb25(){
        switch($this->Tb24){
            case '1': $this->Tb25 = 'Ya'; break;
            case '2': $this->Tb25 = 'Tidak'; break;
            default: $this->Tb25 = '-';
        }
        return $this->Tb25;
    }

    public function getTb25Lainnya(){
        return $this->Tb25Lainnya;
    }

    public function getTc1(){
        switch($this->Tc1){
            case '1': $this->Tc1 = 'Ya'; break;
            case '2': $this->Tc1 = 'Tidak'; break;
            default: $this->Tc1 = '-';
        }
        return $this->Tc1;
    }

    public function getTc1Lainnya(){
        return $this->Tc1Lainnya;
    }

    public function getTc2(){
        switch($this->Tc2){
            case '1': $this->Tc2 = '0 - 6 Bulan'; break;
            case '2': $this->Tc2 = '6 - 12 Bulan'; break;
            case '3': $this->Tc2 = '> 12 Bulan'; break;
            default: $this->Tc2 = '-';
        }
        return $this->Tc2;
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
}