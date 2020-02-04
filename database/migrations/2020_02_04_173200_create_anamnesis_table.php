<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 04/02/2020
 * Time: 17:32
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
            $table->uuid("id");
            $table->string("id_pasien");
	        $table->string("nama_pasien");
	        $table->integer("Kunjungan");
	        $table->date("tgl_periksa");
	        $table->string("medrec");
	        $table->integer("Aa1");
            $table->integer("Aa2");
            $table->integer("Aa3");
            $table->integer("Ab1");
            $table->integer("Ab2");
            $table->integer("Ab3");
            $table->integer("Ac1");
            $table->integer("Ac2");
            $table->integer("Ac3");
            $table->integer("Ad1");
            $table->integer("Ad2");
            $table->integer("Ad3");
            $table->integer("Ae1");
            $table->integer("Ae2");
            $table->integer("Ae3");
            $table->integer("Af1");
            $table->integer("Af2");
            $table->integer("Af3");
            $table->integer("Ag1");
            $table->integer("Ag2");
            $table->integer("Ag3");
            $table->integer("Ah1");
            $table->integer("Ah2");
            $table->integer("Ah3");
            $table->integer("Ai1");
            $table->integer("Ai2");
            $table->integer("Ai3");
            $table->integer("Aj1");
            $table->integer("Aj2");
            $table->integer("Aj3");
            $table->integer("Ak1");
            $table->integer("Ak2");
            $table->integer("Ak3");
            $table->integer("Al1");
            $table->integer("Al2");
            $table->integer("Al3");
            $table->integer("Am1");
            $table->integer("Am2");
            $table->integer("Am21");
            $table->integer("Am22");
            $table->integer("Am23");
            $table->integer("Am24");
            $table->integer("Am25");
            $table->integer("Am26");
            $table->integer("Am27");
            $table->integer("Am28");
            $table->integer("Am29");
            $table->integer("Am210");
            $table->integer("Am211");
            $table->integer("Am212");
            $table->integer("Am3");
            $table->integer("An1");
            $table->integer("An2");
            $table->integer("Ba1");
            $table->integer("Ba2");
            $table->integer("Ba3");
            $table->integer("Bb1");
            $table->integer("Bb2");
            $table->integer("Bb3");
            $table->integer("Bc1");
            $table->integer("Bc2");
            $table->integer("Bc3");
            $table->integer("Bd1");
            $table->integer("Bd2");
            $table->integer("Bd3");
            $table->integer("Be1");
            $table->integer("Be2");
            $table->integer("Be3");
            $table->integer("Bf1");
            $table->integer("Bf2");
            $table->integer("Bf3");
            $table->integer("Bg1");
            $table->integer("Bg2");
            $table->integer("Bg3");
            $table->integer("Bh1");
            $table->integer("Bh2");
            $table->integer("Bh3");
            $table->integer("Bi1");
            $table->integer("Bi2");
            $table->integer("Bi3");
            $table->integer("Bj1");
            $table->integer("Bj2");
            $table->integer("Bj3");
            $table->integer("Bk1");
            $table->integer("Bk2");
            $table->integer("Bk3");
            $table->integer("Ca1");
            $table->integer("Ca2");
            $table->integer("Ca3");
            $table->integer("Cb1");
            $table->integer("Cb2");
            $table->integer("Cb3");
            $table->integer("Cc1");
            $table->integer("Cc2");
            $table->integer("Cc3");
            $table->integer("Cd1");
            $table->integer("Cd2");
            $table->integer("Cd3");
            $table->integer("Ce1");
            $table->integer("Ce2");
            $table->integer("Ce3");
            $table->integer("Cf1");
            $table->integer("Cf2");
            $table->integer("Cf3");
            $table->integer("Cg1");
            $table->integer("Cg2");
            $table->integer("Cg3");
            $table->integer("Ch1");
            $table->integer("Ch2");
            $table->integer("Ci1");
            $table->integer("Ci2");
            $table->integer("Ci3");
            $table->integer("Da1");
            $table->integer("Da2");
            $table->integer("Da3");
            $table->integer("Db1");
            $table->integer("Db2");
            $table->integer("Db3");
            $table->integer("Dc1");
            $table->integer("Dc2");
            $table->integer("Dc3");
            $table->integer("Dd1");
            $table->integer("Dd2");
            $table->integer("Dd3");
            $table->integer("De1");
            $table->integer("De2");
            $table->integer("De3");
            $table->integer("Df1");
            $table->integer("Df2");
            $table->integer("Df3");
            $table->integer("Dg1");
            $table->integer("Dg2");
            $table->integer("Dg3");
            $table->integer("Dh1");
            $table->integer("Dh2");
            $table->integer("Di1");
            $table->integer("Di2");
            $table->integer("Dj1");
            $table->integer("Dj2");
            $table->integer("Dj3");
            $table->integer("Ea1");
            $table->integer("Ea2");
            $table->integer("Ea3");
            $table->integer("Eb1");
            $table->integer("Eb2");
            $table->integer("Eb3");
            $table->integer("Ec1");
            $table->integer("Ec2");
            $table->integer("Ec3");
            $table->integer("Ed1");
            $table->integer("Ed2");
            $table->integer("Ed3");
            $table->integer("Ee1");
            $table->integer("Ee2");
            $table->integer("Ee3");
            $table->integer("Ef1");
            $table->integer("Ef2");
            $table->integer("Ef3");
            $table->integer("Ef2Lainnya");
            $table->integer("Eg1");
            $table->integer("Eg2");
            $table->integer("Eg3");
            $table->integer("Eg4");
            $table->integer("Eg5");
            $table->integer("Eg6");
            $table->integer("EgLainnya");
            $table->integer("Fa1");
            $table->integer("Fa2");
            $table->integer("Fb1");
            $table->integer("Fb2");
            $table->integer("Fc1");
            $table->integer("Fc2");
            $table->integer("Fd1");
            $table->integer("Fd2");
            $table->integer("Fe1");
            $table->integer("Fe2");
            $table->integer("Ff1");
            $table->integer("Ff2");
            $table->integer("Fg1");
            $table->integer("Fg2");
            $table->integer("Fg3");
            $table->integer("Fh1");
            $table->integer("Fh2");
            $table->integer("Fi1");
            $table->integer("Fi2");
            $table->integer("Ga1");
            $table->integer("Ga2");
            $table->integer("Ga3");
            $table->integer("Gb1");
            $table->integer("Gb2");
            $table->integer("Gb3");
            $table->integer("Gc1");
            $table->integer("Gd1");
            $table->integer("Gd2");
            $table->integer("Ge1");
            $table->integer("Ge2");
            $table->integer("Ge3");
            $table->integer("Gf1");
            $table->integer("Gf2");
            $table->integer("Gg1");
            $table->integer("Gg2");
            $table->integer("Gg2Lainnya");
            $table->integer("Gg3");
            $table->integer("Gh1");
            $table->integer("Gh2");
            $table->integer("Ha1");
            $table->integer("Ha2");
            $table->integer("Ha3");
            $table->integer("Hb1");
            $table->integer("Hb2");
            $table->integer("Hb3");
            $table->integer("Hc1");
            $table->integer("Hc2");
            $table->integer("Hc3");
            $table->integer("Hd1");
            $table->integer("Hd2");
            $table->integer("Hd3");
            $table->integer("He1");
            $table->integer("He2");
            $table->integer("He3");
            $table->integer("Hf1");
            $table->integer("Hf2");
            $table->integer("Hf3");
            $table->integer("Hg1");
            $table->integer("Hg2");
            $table->integer("Hg3");
            $table->integer("Hh1");
            $table->integer("Hh2");
            $table->integer("Hh3");
            $table->integer("Hi1");
            $table->integer("Hi2");
            $table->integer("Hi3");
            $table->integer("Hj1");
            $table->integer("Hj2");
            $table->integer("Hj3");
            $table->integer("Ia1");
            $table->integer("Ia2");
            $table->integer("Ia3");
            $table->integer("Ib1");
            $table->integer("Ib2");
            $table->integer("Ib3");
            $table->integer("Ic1");
            $table->integer("Ic2");
            $table->integer("Ic3");
            $table->integer("Id1");
            $table->integer("Id2");
            $table->integer("Id3");
            $table->integer("Ie1");
            $table->integer("Ie2");
            $table->integer("Ie3");
            $table->integer("If1");
            $table->integer("If2");
            $table->integer("If3");
            $table->integer("Ig1");
            $table->integer("Ig2");
            $table->integer("Ig3");
            $table->integer("Ih1");
            $table->integer("Ih2");
            $table->integer("Ih3");
            $table->integer("Ii1");
            $table->integer("Ii2");
            $table->integer("Ii3");
            $table->integer("Ja1");
            $table->integer("Ja2");
            $table->integer("Ja2Lainnya");
            $table->integer("Ja3");
            $table->integer("Ja3Lainnya");
            $table->integer("Ka1");
            $table->integer("Ka2");
            $table->integer("Ka3");
            $table->integer("Ka4");
            $table->integer("Kb1");
            $table->integer("Kb2");
            $table->integer("Kb3");
            $table->integer("Kb4");
            $table->integer("Kc1");
            $table->integer("Kc2");
            $table->integer("Kd1");
            $table->integer("Kd2");
            $table->integer("Kd3");
            $table->integer("Ke1");
            $table->integer("Ke2");
            $table->integer("Kf1");
            $table->integer("Kg1");
            $table->integer("Kh1");
            $table->integer("La1");
            $table->integer("La2");
            $table->integer("La3");
            $table->integer("La4");
            $table->integer("LaLainLain");
            $table->integer("Lb1");
            $table->integer("Lb2");
            $table->integer("Lb3");
            $table->integer("Ma1");
            $table->integer("Ma2");
            $table->integer("Mb1");
            $table->integer("Mb2");
            $table->integer("Mc1");
            $table->integer("Mc2");
            $table->integer("Mc3");
            $table->integer("Md1");
            $table->integer("Md2");
            $table->integer("Me1");
            $table->integer("Me2");
            $table->integer("Me3");
            $table->integer("Mf1");
            $table->integer("Mf2");
            $table->integer("Na1");
            $table->integer("Na2");
            $table->integer("Nb1");
            $table->integer("Nb2");
            $table->integer("Nc1");
            $table->integer("Nc2");
            $table->integer("Nd1");
            $table->integer("Nd2");
            $table->integer("Nd3");
            $table->integer("Ne1");
            $table->integer("Ne2");
            $table->integer("Oa1");
            $table->integer("Oa2");
            $table->integer("Ob1");
            $table->integer("Ob2");
            $table->integer("Oc1");
            $table->integer("Oc2");
            $table->integer("Od1");
            $table->integer("Od2");
            $table->integer("Oe1");
            $table->integer("Oe2");
            $table->integer("Pa1");
            $table->integer("Pa2");
            $table->integer("Pa2Lainnya");
            $table->integer("Pa3");
            $table->integer("Pb1");
            $table->integer("Pb2");
            $table->integer("Pc1");
            $table->integer("Pc2");
            $table->integer("Pd1");
            $table->integer("Pd2");
            $table->integer("Pe1");
            $table->integer("Pe2");
            $table->integer("Qa1");
            $table->integer("Qa2");
            $table->integer("Qa2Lainnya");
            $table->integer("Qa3");
            $table->integer("Qb1");
            $table->integer("Qb2");
            $table->integer("Qc1");
            $table->integer("Qc2");
            $table->integer("Qd1");
            $table->integer("Qd2");
            $table->integer("Qe1");
            $table->integer("Qe2");
            $table->integer("Ra1");
            $table->integer("Ra2");
            $table->integer("Rb1");
            $table->integer("Rb2");
            $table->integer("Rc1");
            $table->integer("Rc2");
            $table->integer("Rd1");
            $table->integer("Rd2");
            $table->integer("Re1");
            $table->integer("Re2");
            $table->integer("Rf1");
            $table->integer("Rf2");
            $table->integer("Sa1");
            $table->integer("Sa2");
            $table->integer("Sa3");
            $table->integer("Sb1");
            $table->integer("Sb2");
            $table->integer("Sc1");
            $table->integer("Sc2");
            $table->integer("Sd1");
            $table->integer("Sd2");
            $table->integer("Sd3");
            $table->integer("Sd4");
            $table->integer("Se1");
            $table->integer("Se2");
            $table->integer("Ta1");
            $table->integer("Ta2");
            $table->integer("Tb1");
            $table->integer("Tb2");
            $table->integer("Tb21");
            $table->integer("Tb22");
            $table->integer("Tb23");
            $table->integer("Tb24");
            $table->integer("Tb25");
            $table->integer("Tb25Lainnya");
            $table->integer("Tc1");
            $table->integer("Tc1Lainnya");
            $table->integer("Tc2");
            $table->integer("La");
            $table->string("user_id");
            $table->date("Modified");
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