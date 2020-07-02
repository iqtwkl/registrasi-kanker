<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 04/02/2020
 * Time: 17:12
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePasienTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pasien', function (Blueprint $table) {
            $table->uuid("id");
            $table->string("kode_rs");
            $table->string("no_rekam_medis");
            $table->string("id_rs");
            $table->string("nama");
            $table->string("nama_orang_tua");
            $table->string("tempat_lahir");
            $table->date("tgl_lahir");
            //addAttributeUsia
            $table->string("pendidikan");
            $table->string("pekerjaan");
            $table->string("hamil");
            $table->string("menyusui");
            $table->string("rujuk");
            $table->string("agama");
            $table->string("perkawinan");
            $table->string("anak");
            $table->string("keturunan");
            $table->string("suku");
            $table->string("asing");
            $table->string("daerah");
            $table->string("jalan");
            $table->string("rt");
            $table->string("rw");
            $table->string("no");
            $table->string("kode_telp");
            $table->string("telp");
            $table->string("kelurahan");
            $table->string("kecamatan");
            $table->string("provinsi");
            $table->string("kabupaten");
            $table->string("jalan_o");
            $table->string("rt_o");
            $table->string("rw_o");
            $table->string("no_o");
            $table->string("kode_telp_o");
            $table->string("telp_o");
            $table->string("kelurahan_o");
            $table->string("kecamatan_o");
            $table->string("provinsi_o");
            $table->string("kabupaten_o");
            $table->timestamps();
            $table->string('created_by', 36);
            $table->string('last_updated_by', 36);
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pasien');
    }
}