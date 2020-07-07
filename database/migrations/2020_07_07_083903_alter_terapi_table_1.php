<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTerapiTable1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('terapi', function (Blueprint $table) {
            $table->date("b2")->nullable()->change(); 
            $table->date("b6")->nullable()->change();
            $table->date("b7")->nullable()->change();
            $table->date("b10")->nullable()->change(); 
            $table->date("b11")->nullable()->change(); 
            $table->date("b15")->nullable()->change(); 
            $table->date("b16")->nullable()->change(); 
            $table->date("b32")->nullable()->change(); 
            $table->date("b33")->nullable()->change(); 
            $table->date("b37")->nullable()->change(); 
            $table->date("b38")->nullable()->change(); 
            $table->date("b42")->nullable()->change(); 
            $table->date("b43")->nullable()->change(); 
            $table->date("b47")->nullable()->change(); 
            $table->date("b48")->nullable()->change();                        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('terapi');
    }
}