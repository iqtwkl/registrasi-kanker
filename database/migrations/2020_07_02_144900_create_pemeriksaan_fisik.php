<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePemeriksaanFisikTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pemeriksaan_fisik', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('id_pasien');
            $table->integer('kunjungan');
            $table->date('tglPeriksa');
            $table->integer("td");
            $table->integer("td2");
            $table->integer("nadi");
            $table->integer("tb");
            $table->integer("bb");
            $table->string("medrec");
            $table->string("kesadaran");
            $table->integer("ks1");
            $table->integer("ks2");
            $table->integer("ks3");
            $table->integer("ks4");
            $table->integer("ks5");
            $table->integer("ks6");
            $table->integer("ks7");
            $table->integer("ks8");
            $table->integer("ks9");
            $table->integer("ks10");
            $table->integer("ks11");
            $table->integer("ks12");
            $table->integer("ks13");
            $table->integer("ks14");
            $table->integer("ks15");
            $table->integer("ks16");
            $table->integer("ks17");
            $table->integer("ks18");
            $table->integer("ks19");
            $table->integer("ks20");
            $table->integer("ks21");
            $table->integer("ks22");
            $table->integer("ks23");
            $table->integer("ks24");
            $table->integer("ks25");
            $table->integer("ks26");
            $table->integer("ks27");
            $table->integer("ks28");
            $table->integer("ks29");
            $table->integer("ks30");
            $table->integer("ks31");
            $table->integer("ks32");
            $table->integer("ks33");
            $table->integer("ks34");
            $table->integer("ks35");
            $table->integer("ks36");
            $table->integer("ks37");
            $table->integer("ks38");
            $table->integer("ks39");
            $table->integer("ks40");
            $table->integer("ks41");
            $table->integer("ks42");
            $table->integer("ks43");
            $table->integer("ks44");
            $table->integer("ks45");
            $table->integer("ks46");
            $table->integer("ks47");
            $table->integer("ks48");
            $table->integer("ks49");
            $table->integer("ks50");
            $table->integer("ks51");
            $table->integer("ks52");
            $table->integer("ks53");
            $table->integer("ks54");
            $table->integer("ks55");
            $table->integer("ks56");
            $table->integer("ks57");
            $table->integer("ks58");
            $table->integer("ks59");
            $table->integer("ks60");
            $table->integer("ks61");
            $table->integer("ks62");
            $table->integer("ks63");
            $table->integer("ks64");
            $table->integer("ks65");
            $table->integer("ks66");
            $table->integer("ks67");
            $table->integer("ks68");
            $table->integer("ks69a");
            $table->integer("ks69b");
            $table->integer("ks69c");
            $table->integer("ks69d");
            $table->integer("ks69e");
            $table->integer("ks69f");
            $table->integer("ks69g");
            $table->integer("ks69h");
            $table->integer("ks69i");
            $table->integer("ks69j");
            $table->integer("ks69k");
            $table->integer("ks69l");
            $table->integer("ks70");
            $table->integer("sl1");
            $table->integer("sl1a");
            $table->integer("sl2");
            $table->integer("sl2a");
            $table->integer("sl3");
            $table->integer("sl3a");
            $table->integer("sl4");
            $table->integer("sl4a");
            $table->integer("sl5");
            $table->integer("sl5a");
            $table->integer("sl6");
            $table->integer("sl6a");
            $table->integer("sl7");
            $table->integer("sl7a");
            $table->integer("sl8");
            $table->integer("sl8a");
            $table->integer("sl9");
            $table->integer("sl9a");
            $table->integer("sl10");
            $table->integer("sl10a");
            $table->integer("sl11");
            $table->integer("sl12");
            $table->integer("sl13");
            $table->integer("sl14");
            $table->integer("sl15");
            $table->integer("sl16");
            $table->integer("sl17");
            $table->integer("sl18");
            $table->integer("sl19");
            $table->integer("sl20");
            $table->integer("sl21");
            $table->integer("sl22");
            $table->integer("sl23");
            $table->integer("sl24");
            $table->integer("sl24a");
            $table->integer("sl25");
            $table->integer("sl26");
            $table->integer("sl27");
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
        Schema::dropIfExists('pemeriksaan_fisik');
    }
}