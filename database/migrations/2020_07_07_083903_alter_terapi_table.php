<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTerapiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('terapi', function (Blueprint $table) {
            $table->string("b1")->nullable()->change(); 
            $table->string("b1a")->nullable()->change(); 
            $table->string("b3")->nullable()->change();
            $table->string("b4")->nullable()->change();
            $table->string("b5")->nullable()->change();
            $table->string("b8")->nullable()->change();
            $table->string("b9")->nullable()->change(); 
            $table->string("b12")->nullable()->change(); 
            $table->string("b13")->nullable()->change(); 
            $table->string("b14")->nullable()->change(); 
            $table->string("b17")->nullable()->change();
            $table->string("b18")->nullable()->change();
            $table->string("b19")->nullable()->change(); 
            $table->string("b20")->nullable()->change(); 
            $table->string("b21")->nullable()->change(); 
            $table->string("b22a")->nullable()->change(); 
            $table->string("b22b")->nullable()->change(); 
            $table->string("b22c")->nullable()->change(); 
            $table->string("b22d")->nullable()->change(); 
            $table->string("b22e")->nullable()->change(); 
            $table->string("b22f")->nullable()->change();
            $table->string("b22g")->nullable()->change();
            $table->string("b22h")->nullable()->change(); 
            $table->string("b22i")->nullable()->change(); 
            $table->string("b22j")->nullable()->change(); 
            $table->string("b22k")->nullable()->change(); 
            $table->string("b22l")->nullable()->change(); 
            $table->string("b22m")->nullable()->change(); 
            $table->string("b22n")->nullable()->change(); 
            $table->string("b22o")->nullable()->change(); 
            $table->string("b22p")->nullable()->change();
            $table->string("b22q")->nullable()->change();
            $table->string("b22r")->nullable()->change(); 
            $table->string("b22s")->nullable()->change(); 
            $table->string("b22t")->nullable()->change(); 
            $table->string("b22u")->nullable()->change(); 
            $table->string("b22v")->nullable()->change(); 
            $table->string("b22_lainnya")->nullable()->change(); 
            $table->string("b23")->nullable()->change(); 
            $table->string("b24")->nullable()->change(); 
            $table->string("b25")->nullable()->change();
            $table->string("b27")->nullable()->change(); 
            $table->string("b28")->nullable()->change(); 
            $table->string("b29")->nullable()->change(); 
            $table->string("b30")->nullable()->change(); 
            $table->string("b31")->nullable()->change(); 
            $table->string("b34")->nullable()->change(); 
            $table->string("b35")->nullable()->change();
            $table->string("b36")->nullable()->change();
            $table->string("b39")->nullable()->change(); 
            $table->string("b40")->nullable()->change(); 
            $table->string("b41")->nullable()->change(); 
            $table->string("b44")->nullable()->change(); 
            $table->string("b45")->nullable()->change();
            $table->string("b46")->nullable()->change();
            $table->string("b49")->nullable()->change(); 
            $table->string("b50")->nullable()->change(); 
            $table->string("b51")->nullable()->change(); 
            $table->string("sl1")->nullable()->change(); 
            $table->string("sl2")->nullable()->change(); 
            $table->string("sl3")->nullable()->change(); 
            $table->string("sl4")->nullable()->change();
            $table->string("sl5")->nullable()->change();
            $table->string("sl6")->nullable()->change(); 
            $table->string("sl7")->nullable()->change(); 
            $table->string("sl8")->nullable()->change(); 
            $table->string("sl9")->nullable()->change(); 
            $table->string("sl10")->nullable()->change();                          
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