<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePemeriksaanPenunjangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pemeriksaan_penunjang', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('id_pasien');
            $table->integer('kunjungan');
            $table->date('tglPeriksa');
            $table->string("medrec");
            $table->string("a1"); 	
            $table->string("a2"); 	
            $table->string("a3"); 	
            $table->string("a4"); 	
            $table->string("a4a");	
            $table->string("a5"); 	
            $table->string("a6"); 	
            $table->string("a7"); 	
            $table->string("a7a");	
            $table->string("a8"); 	
            $table->string("a9"); 	
            $table->string("a10");	
            $table->string("a11");	
            $table->string("a12");	
            $table->string("a13");	
            $table->string("a14");	
            $table->string("a15");	
            $table->string("a16");	
            $table->string("a16a"); 
            $table->string("a17"); 	
            $table->string("a18"); 	
            $table->string("a19"); 	
            $table->text("a20"); 	
            $table->text("a201"); 
            $table->text("a202"); 
            $table->text("a203"); 
            $table->string("a20a"); 
            $table->string("a21"); 	
            $table->string("a22"); 	
            $table->string("a23"); 	
            $table->text("a24"); 	
            $table->text("a241"); 
            $table->text("a242"); 
            $table->text("a243"); 
            $table->string("a24a"); 
            $table->string("a25"); 	
            $table->string("a26"); 	
            $table->string("a27"); 	
            $table->text("a28"); 	
            $table->text("a281"); 
            $table->text("a282"); 
            $table->text("a283"); 
            $table->string("a28a"); 
            $table->string("a29"); 	
            $table->string("a30"); 	
            $table->string("a31"); 	
            $table->text("a32"); 	
            $table->text("a321"); 
            $table->text("a322"); 
            $table->text("a323"); 
            $table->string("a32a"); 
            $table->string("a33"); 	
            $table->string("a34"); 	
            $table->string("a35"); 	
            $table->text("a36"); 	
            $table->text("a361"); 
            $table->text("a362"); 
            $table->text("a363"); 
            $table->string("a36a"); 
            $table->string("a37"); 	
            $table->string("a38"); 	
            $table->string("a39"); 	
            $table->text("a40"); 	
            $table->text("a401"); 
            $table->text("a402"); 
            $table->text("a403"); 
            $table->string("a40a"); 
            $table->string("a41"); 	
            $table->string("a42"); 	
            $table->string("a43"); 	
            $table->text("a44"); 	
            $table->text("a441"); 
            $table->text("a442"); 
            $table->text("a443"); 
            $table->string("a44a"); 
            $table->string("a45"); 	
            $table->string("a45a"); 
            $table->string("a46"); 	
            $table->string("a47"); 	
            $table->string("a48"); 	
            $table->string("a49"); 	
            $table->string("a50"); 	
            $table->string("a51"); 	
            $table->string("a52"); 	
            $table->string("a53"); 	
            $table->string("a54"); 	
            $table->string("a55"); 	
            $table->string("a56"); 	
            $table->string("a57"); 	
            $table->string("a58"); 	
            $table->string("a59"); 	
            $table->text("a60"); 	
            $table->text("a601");	
            $table->text("a602");	
            $table->text("a603");	
            $table->string("a61"); 	
            $table->string("a62"); 	
            $table->string("a63"); 	
            $table->string("a64"); 	
            $table->string("a65"); 	
            $table->string("a66"); 	
            $table->string("a67"); 	
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
        Schema::dropIfExists('pemeriksaan_penunjang');
    }
}