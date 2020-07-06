<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPemeriksaanPenunjangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pemeriksaan_penunjang', function (Blueprint $table) {            
            $table->text("a20a")->change(); 
            $table->text("a24a")->change(); 
            $table->text("a28a")->change(); 
            $table->text("a32a")->change();  
            $table->text("a36a")->change(); 
            $table->text("a40a")->change(); 
            $table->text("a44a")->change(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pemeriksaan_penunjang');
    }
}