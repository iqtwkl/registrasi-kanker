<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 05/02/2020
 * Time: 17:32
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKunjunganPasienTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kunjungan_pasien', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('id_pasien');
            $table->string('kunjungan_ke');
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
        Schema::dropIfExists('kunjungan_pasien');
    }
}