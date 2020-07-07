<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTerapiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terapi', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('id_pasien');
            $table->integer('kunjungan');
            $table->date('tglPeriksa');
            $table->string("medrec");
            $table->string("b1"); 
            $table->string("b1a"); 
            $table->date("b2"); 
            $table->string("b3");
            $table->string("b4");
            $table->string("b5");
            $table->date("b6");
            $table->date("b7");
            $table->string("b8");
            $table->string("b9"); 
            $table->date("b10"); 
            $table->date("b11"); 
            $table->string("b12"); 
            $table->string("b13"); 
            $table->string("b14"); 
            $table->date("b15"); 
            $table->date("b16"); 
            $table->string("b17");
            $table->string("b18");
            $table->string("b19"); 
            $table->string("b20"); 
            $table->string("b21"); 
            $table->string("b22a"); 
            $table->string("b22b"); 
            $table->string("b22c"); 
            $table->string("b22d"); 
            $table->string("b22e"); 
            $table->string("b22f");
            $table->string("b22g");
            $table->string("b22h"); 
            $table->string("b22i"); 
            $table->string("b22j"); 
            $table->string("b22k"); 
            $table->string("b22l"); 
            $table->string("b22m"); 
            $table->string("b22n"); 
            $table->string("b22o"); 
            $table->string("b22p");
            $table->string("b22q");
            $table->string("b22r"); 
            $table->string("b22s"); 
            $table->string("b22t"); 
            $table->string("b22u"); 
            $table->string("b22v"); 
            $table->string("b22_lainnya"); 
            $table->string("b23"); 
            $table->string("b24"); 
            $table->string("b25");
            $table->date("b26");
            $table->string("b27"); 
            $table->string("b28"); 
            $table->string("b29"); 
            $table->string("b30"); 
            $table->string("b31"); 
            $table->date("b32"); 
            $table->date("b33"); 
            $table->string("b34"); 
            $table->string("b35");
            $table->string("b36");
            $table->date("b37"); 
            $table->date("b38"); 
            $table->string("b39"); 
            $table->string("b40"); 
            $table->string("b41"); 
            $table->date("b42"); 
            $table->date("b43"); 
            $table->string("b44"); 
            $table->string("b45");
            $table->string("b46");
            $table->date("b47"); 
            $table->date("b48"); 
            $table->string("b49"); 
            $table->string("b50"); 
            $table->string("b51"); 
            $table->string("sl1"); 
            $table->string("sl2"); 
            $table->string("sl3"); 
            $table->string("sl4");
            $table->string("sl5");
            $table->string("sl6"); 
            $table->string("sl7"); 
            $table->string("sl8"); 
            $table->string("sl9"); 
            $table->string("sl10");                          
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
        Schema::dropIfExists('diagnosa');
    }
}