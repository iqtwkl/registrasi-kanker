<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 04/02/2020
 * Time: 17:26
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRumahSakitTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rumah_sakit', function (Blueprint $table) {
            $table->integer("id");
            $table->string("kode");
            $table->string("nama");
            $table->text("alamat");
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
        Schema::dropIfExists('rumah_sakit');
    }
}