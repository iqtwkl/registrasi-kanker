<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 8/20/2020
 * Time: 5:51 PM
 */


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPasienTable1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pasien', function (Blueprint $table) {
            $table->string("nama_orang_tua")->nullable()->change();
            $table->string("tempat_lahir")->nullable()->change();
            $table->string("pendidikan")->nullable()->change(); 
            $table->string("pekerjaan")->nullable()->change(); 
            $table->string("hamil")->nullable()->change(); 
            $table->string("menyusui")->nullable()->change(); 
            $table->string("rujuk")->nullable()->change(); 
            $table->string("agama")->nullable()->change(); 
            $table->string("perkawinan")->nullable()->change(); 
            $table->string("anak")->nullable()->change(); 
            $table->string("keturunan")->nullable()->change(); 
            $table->string("suku")->nullable()->change(); 
            $table->string("asing")->nullable()->change(); 
            $table->string("daerah")->nullable()->change(); 
            $table->string("jalan")->nullable()->change(); 
            $table->string("rt")->nullable()->change(); 
            $table->string("rw")->nullable()->change(); 
            $table->string("no")->nullable()->change(); 
            $table->string("kode_telp")->nullable()->change(); 
            $table->string("telp")->nullable()->change(); 
            $table->string("kelurahan")->nullable()->change(); 
            $table->string("kecamatan")->nullable()->change(); 
            $table->string("provinsi")->nullable()->change(); 
            $table->string("kabupaten")->nullable()->change(); 
            $table->string("jalan_o")->nullable()->change(); 
            $table->string("rt_o")->nullable()->change(); 
            $table->string("rw_o")->nullable()->change(); 
            $table->string("no_o")->nullable()->change(); 
            $table->string("kode_telp_o")->nullable()->change(); 
            $table->string("telp_o")->nullable()->change(); 
            $table->string("kelurahan_o")->nullable()->change(); 
            $table->string("kecamatan_o")->nullable()->change(); 
            $table->string("provinsi_o")->nullable()->change(); 
            $table->string("kabupaten_o")->nullable()->change(); 
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