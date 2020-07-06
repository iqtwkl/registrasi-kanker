<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiagnosaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnosa', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('id_pasien');
            $table->integer('kunjungan');
            $table->date('tglPeriksa');
            $table->string("medrec");
            $table->string("b1"); 
            $table->date("b2"); 
            $table->string("b31");
            $table->string("c1"); 
            $table->string("c2"); 
            $table->string("c3"); 
            $table->string("c4"); 
            $table->string("c5"); 
            $table->string("c6"); 
            $table->string("c7"); 
            $table->string("c8"); 
            $table->string("c9"); 
            $table->string("c10");
            $table->string("c11");
            $table->string("c12");
            $table->string("c13");
            $table->string("c14");
            $table->string("c15");
            $table->string("c16");
            $table->string("c17");
            $table->string("c18");
            $table->string("c19");
            $table->string("c20");
            $table->string("c21");
            $table->string("c22");
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