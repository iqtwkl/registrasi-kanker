<?php

use Illuminate\Database\Seeder;

class AnamnesisWebTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = json_decode(file_get_contents(storage_path('database/anamnesis.json')));
        foreach($contents as $content) {
            DB::table('anamnesis')->insert([
                "id"=> $content->id_anamnesis,
                "id_pasien"=> $content->id_pasien,
                "nama_pasien"=> $content->nama_pasien,
                "Kunjungan"=> $content->kunjungan,
                "tgl_periksa"=> $content->tgl_periksa,
                "medrec"=> $content->medrec,
                "Aa1"=> intval($content->aa1),
                "Aa2"=> intval($content->aa2),
                "Aa3"=> intval($content->aa3),
                "Ab1"=> intval($content->ab1),
                "Ab2"=> intval($content->ab2),
                "Ab3"=> intval($content->ab3),
                "Ac1"=> intval($content->ac1),
                "Ac2"=> intval($content->ac2),
                "Ac3"=> intval($content->ac3),
                "Ad1"=> intval($content->ad1),
                "Ad2"=> intval($content->ad2),
                "Ad3"=> intval($content->ad3),
                "Ae1"=> intval($content->ae1),
                "Ae2"=> intval($content->ae2),
                "Ae3"=> intval($content->ae3),
                "Af1"=> intval($content->af1),
                "Af2"=> intval($content->af2),
                "Af3"=> intval($content->af3),
                "Ag1"=> intval($content->ag1),
                "Ag2"=> intval($content->ag2),
                "Ag3"=> intval($content->ag3),
                "Ah1"=> intval($content->ah1),
                "Ah2"=> intval($content->ah2),
                "Ah3"=> intval($content->ah3),
                "Ai1"=> intval($content->ai1),
                "Ai2"=> intval($content->ai2),
                "Ai3"=> intval($content->ai3),
                "Aj1"=> intval($content->aj1),
                "Aj2"=> intval($content->aj2),
                "Aj3"=> intval($content->aj3),
                "Ak1"=> intval($content->ak1),
                "Ak2"=> intval($content->ak2),
                "Ak3"=> intval($content->ak3),
                "Al1"=> intval($content->al1),
                "Al2"=> intval($content->al2),
                "Al3"=> intval($content->al3),
                "Am1"=> intval($content->am1),
                "Am2"=> intval($content->am2),
                "Am21"=> intval($content->am21),
                "Am22"=> intval($content->am22),
                "Am23"=> intval($content->am23),
                "Am24"=> intval($content->am24),
                "Am25"=> intval($content->am25),
                "Am26"=> intval($content->am26),
                "Am27"=> intval($content->am27),
                "Am28"=> intval($content->am28),
                "Am29"=> intval($content->am29),
                "Am210"=> intval($content->am210),
                "Am211"=> intval($content->am211),
                "Am212"=> intval($content->am212),
                "Am3"=> intval($content->am3),
                "An1"=> intval($content->an1),
                "An2"=> intval($content->an2),
                "Ba1"=> intval($content->ba1),
                "Ba2"=> intval($content->ba2),
                "Ba3"=> intval($content->ba3),
                "Bb1"=> intval($content->bb1),
                "Bb2"=> intval($content->bb2),
                "Bb3"=> intval($content->bb3),
                "Bc1"=> intval($content->bc1),
                "Bc2"=> intval($content->bc2),
                "Bc3"=>intval($content->bc3),
                "Bd1"=> intval($content->bd1),
                "Bd2"=> intval($content->bd2),
                "Bd3"=> intval($content->bd3),
                "Be1"=> intval($content->be1),
                "Be2"=> intval($content->be2),
                "Be3"=> intval($content->be3),
                "Bf1"=> intval($content->bf1),
                "Bf2"=> intval($content->bf1),
                "Bf3"=> intval($content->bf3),
                "Bg1"=> intval($content->bg1),
                "Bg2"=> intval($content->bg2),
                "Bg3"=> intval($content->bg3),
                "Bh1"=> intval($content->bh1),
                "Bh2"=> intval($content->bh2),
                "Bh3"=> intval($content->bh3),
                "Bi1"=> intval($content->bi1),
                "Bi2"=> intval($content->bi2),
                "Bi3"=> intval($content->bi3),
                "Bj1"=> intval($content->bj1),
                "Bj2"=> intval($content->bj2),
                "Bj3"=> intval($content->bj3),
                "Bk1"=> intval($content->bk1),
                "Bk2"=> intval($content->bk2),
                "Bk3"=> intval($content->bk3),
                "Ca1"=> intval($content->ca1),
                "Ca2"=> intval($content->ca2),
                "Ca3"=> intval($content->ca3),
                "Cb1"=> intval($content->cb1),
                "Cb2"=> intval($content->cb2),
                "Cb3"=> intval($content->cb3),
                "Cc1"=> intval($content->cc1),
                "Cc2"=> intval($content->cc2),
                "Cc3"=> intval($content->cc3),
                "Cd1"=> intval($content->cd1),
                "Cd2"=> intval($content->cd2),
                "Cd3"=> intval($content->cd3),
                "Ce1"=> intval($content->ce1),
                "Ce2"=> intval($content->ce2),
                "Ce3"=> intval($content->ce3),
                "Cf1"=> intval($content->cf1),
                "Cf2"=> intval($content->cf2),
                "Cf3"=> intval($content->cf3),
                "Cg1"=> intval($content->cg1),
                "Cg2"=> intval($content->cg2),
                "Cg3"=> intval($content->cg3),
                "Ch1"=> intval($content->ch1),
                "Ch2"=> intval($content->ch2),
                "Ci1"=> intval($content->ci1),
                "Ci2"=> intval($content->ci2),
                "Ci3"=> intval($content->ci3),
                "Da1"=> intval($content->da1),
                "Da2"=> intval($content->da2),
                "Da3"=> intval($content->da3),
                "Db1"=> intval($content->db1),
                "Db2"=> intval($content->db2),
                "Db3"=> intval($content->db3),
                "Dc1"=> intval($content->dc1),
                "Dc2"=> intval($content->dc2),
                "Dc3"=> intval($content->dc3),
                "Dd1"=> intval($content->dd1),
                "Dd2"=> intval($content->dd2),
                "Dd3"=> intval($content->dd3),
                "De1"=> intval($content->de1),
                "De2"=> intval($content->de2),
                "De3"=> intval($content->de3),
                "Df1"=> intval($content->df1),
                "Df2"=> intval($content->df2),
                "Df3"=> intval($content->df3),
                "Dg1"=> intval($content->dg1),
                "Dg2"=> intval($content->dg2),
                "Dg3"=> intval($content->dg3),
                "Dh1"=> intval($content->dh1),
                "Dh2"=> intval($content->dh2),
                "Di1"=> intval($content->di1),
                "Di2"=> intval($content->di2),
                "Dj1"=> intval($content->dj1),
                "Dj2"=> intval($content->dj2),
                "Dj3"=> intval($content->dj3),
                "Ea1"=> intval($content->Ea1),
                "Ea2"=> intval($content->Ea2),
                "Ea3"=> intval($content->Ea3),
                "Eb1"=> intval($content->Eb1),
                "Eb2"=> intval($content->Eb2),
                "Eb3"=> intval($content->Eb3),
                "Ec1"=> intval($content->Ec1),
                "Ec2"=> intval($content->Ec2),
                "Ec3"=> intval($content->Ec3),
                "Ed1"=> intval($content->Ed1),
                "Ed2"=> intval($content->Ed2),
                "Ed3"=> intval($content->Ed3),
                "Ee1"=> intval($content->Ee1),
                "Ee2"=> intval($content->Ee2),
                "Ee3"=> intval($content->Ee3),
                "Ef1"=> intval($content->Ef1),
                "Ef2"=> intval($content->Ef2),
                "Ef3"=> intval($content->Ef3),
                "Ef2Lainnya"=> intval($content->Ef2Lainnya),
                "Eg1"=> intval($content->Eg1),
                "Eg2"=> intval($content->Eg2),
                "Eg3"=> intval($content->Eg3),
                "Eg4"=> intval($content->Eg4),
                "Eg5"=> intval($content->Eg5),
                "Eg6"=> intval($content->Eg6),
                "EgLainnya"=> intval($content->EgLainnya),
                "Fa1"=> intval($content->Fa1),
                "Fa2"=> intval($content->Fa2),
                "Fb1"=> intval($content->Fb1),
                "Fb2"=> intval($content->Fb2),
                "Fc1"=> intval($content->Fc1),
                "Fc2"=> intval($content->Fc2),
                "Fd1"=> intval($content->Fd1),
                "Fd2"=> intval($content->Fd2),
                "Fe1"=> intval($content->Fe1),
                "Fe2"=> intval($content->Fe2),
                "Ff1"=> intval($content->Ff1),
                "Ff2"=> intval($content->Ff2),
                "Fg1"=> intval($content->Fg1),
                "Fg2"=> intval($content->Fg2),
                "Fg3"=> intval($content->Fg3),
                "Fh1"=> intval($content->Fh1),
                "Fh2"=> intval($content->Fh2),
                "Fi1"=> intval($content->Fi1),
                "Fi2"=> intval($content->Fi2),
                "Ga1"=> intval($content->Ga1),
                "Ga2"=> intval($content->Ga2),
                "Ga3"=> intval($content->Ga3),
                "Gb1"=> intval($content->Gb1),
                "Gb2"=> intval($content->Gb2),
                "Gb3"=> intval($content->Gb3),
                "Gc1"=> intval($content->Gc1),
                "Gd1"=> intval($content->Gd1),
                "Gd2"=> intval($content->Gd2),
                "Ge1"=> intval($content->Ge1),
                "Ge2"=> intval($content->Ge2),
                "Ge3"=> intval($content->Ge3),
                "Gf1"=> intval($content->Gf1),
                "Gf2"=> intval($content->Gf2),
                "Gg1"=> intval($content->Gg1),
                "Gg2"=> intval($content->Gg2),
                "Gg2Lainnya"=> intval($content->Gg2Lainnya),
                "Gg3"=> intval($content->Gg3),
                "Gh1"=> intval($content->Gh1),
                "Gh2"=> intval($content->Gh2),
                "Ha1"=> intval($content->Ha1),
                "Ha2"=> intval($content->Ha2),
                "Ha3"=> intval($content->Ha3),
                "Hb1"=> intval($content->Hb1),
                "Hb2"=> intval($content->Hb2),
                "Hb2"=> intval($content->Hb2),
                "Hb2"=> intval($content->Hb2),
                "Hb2"=> intval($content->Hb2),
                "Hb2"=> intval($content->Hb2),
                "Hb3"=> intval($content->Hb3),
                "Hc1"=> intval($content->Hc1),
                "Hc2"=> intval($content->Hc2),
                "Hc3"=> intval($content->Hc3),
                "Hd1"=> intval($content->Hd1),
                "Hd2"=> intval($content->Hd2),
                "Hd3"=> intval($content->Hd3),
                "He1"=> intval($content->He1),
                "He2"=> intval($content->He2),
                "He3"=> intval($content->He3),
                "Hf1"=> intval($content->Hf1),
                "Hf2"=> intval($content->Hf2),
                "Hf3"=> intval($content->Hf3),
                "Hg1"=> intval($content->Hg1),
                "Hg2"=> intval($content->Hg2),
                "Hg3"=> intval($content->Hg3),
                "Hh1"=> intval($content->Hh1),
                "Hh2"=> intval($content->Hh2),
                "Hh3"=> intval($content->Hh3),
                "Hi1"=> intval($content->Hi1),
                "Hi2"=> intval($content->Hi2),
                "Hi3"=> intval($content->Hi3),
                "Hj1"=> intval($content->Hj1),
                "Hj2"=> intval($content->Hj2),
                "Hj3"=> intval($content->Hj3),
                "Ia1"=> intval($content->Ia1),
                "Ia2"=> intval($content->Ia2),
                "Ia3"=> intval($content->Ia3),
                "Ib1"=> intval($content->Ib1),
                "Ib2"=> intval($content->Ib2),
                "Ib3"=> intval($content->Ib3),
                "Ic1"=> intval($content->Ic1),
                "Ic2"=> intval($content->Ic2),
                "Ic3"=> intval($content->Ic3),
                "Id1"=> intval($content->Id1),
                "Id2"=> intval($content->Id2),
                "Id3"=> intval($content->Id3),
                "Ie1"=> intval($content->Ie1),
                "Ie2"=> intval($content->Ie2),
                "Ie3"=> intval($content->Ie3),
                "If1"=> intval($content->If1),
                "If2"=> intval($content->If2),
                "If3"=> intval($content->If3),
                "Ig1"=> intval($content->Ig1),
                "Ig2"=> intval($content->Ig2),
                "Ig3"=> intval($content->Ig3),
                "Ih1"=> intval($content->Ih1),
                "Ih2"=> intval($content->Ih2),
                "Ih3"=> intval($content->Ih3),
                "Ii1"=> intval($content->Ii1),
                "Ii2"=> intval($content->Ii2),
                "Ii3"=> intval($content->Ii3),
                "Ja1"=> intval($content->Ja1),
                "Ja2"=> intval($content->Ja2),
                "Ja2Lainnya"=> intval($content->Ja2Lainnya),
                "Ja3"=> intval($content->Ja3),
                "Ja3Lainnya"=> intval($content->Ja3Lainnya),
                "Ka1"=> intval($content->Ka1),
                "Ka2"=> intval($content->Ka2),
                "Ka3"=> intval($content->Ka3),
                "Ka4"=> intval($content->Ka4),
                "Kb1"=> intval($content->Kb1),
                "Kb2"=> intval($content->Kb2),
                "Kb3"=> intval($content->Kb3),
                "Kb4"=> intval($content->Kb4),
                "Kc1"=> intval($content->Kc1),
                "Kc2"=> intval($content->Kc2),
                "Kd1"=> intval($content->Kd1),
                "Kd2"=> intval($content->Kd2),
                "Kd3"=> intval($content->Kd3),
                "Ke1"=> intval($content->Ke1),
                "Ke2"=> intval($content->Ke2),
                "Kf1"=> intval($content->Kf1),
                "Kg1"=> intval($content->Kg1),
                "Kh1"=> intval($content->Kh1),
                "La1"=> intval($content->La1),
                "La2"=> intval($content->La2),
                "La3"=> intval($content->La3),
                "La4"=> intval($content->La4),
                "LaLainLain"=> intval($content->LaLainLain),
                "Lb1"=> intval($content->Lb1),
                "Lb2"=> intval($content->Lb2),
                "Lb3"=> intval($content->Lb3),
                "Ma1"=> intval($content->Ma1),
                "Ma2"=> intval($content->Ma2),
                "Mb1"=> intval($content->Mb1),
                "Mb2"=> intval($content->Mb2),
                "Mc1"=> intval($content->Mc1),
                "Mc2"=> intval($content->Mc2),
                "Mc3"=> intval($content->Mc3),
                "Md1"=> intval($content->Md1),
                "Md2"=> intval($content->Md2),
                "Me1"=> intval($content->Me1),
                "Me2"=> intval($content->Me2),
                "Me3"=> intval($content->Me3),
                "Mf1"=> intval($content->Mf1),
                "Mf2"=> intval($content->Mf2),
                "Na1"=> intval($content->Na1),
                "Na2"=> intval($content->Na2),
                "Nb1"=> intval($content->Nb1),
                "Nb2"=> intval($content->Nb2),
                "Nc1"=> intval($content->Nc1),
                "Nc2"=> intval($content->Nc2),
                "Nd1"=> intval($content->Nd1),
                "Nd2"=> intval($content->Nd2),
                "Nd3"=> intval($content->Nd3),
                "Ne1"=> intval($content->Ne1),
                "Ne2"=> intval($content->Ne2),
                "Oa1"=> intval($content->Oa1),
                "Oa2"=> intval($content->Oa2),
                "Ob1"=> intval($content->Ob1),
                "Ob2"=> intval($content->Ob2),
                "Oc1"=> intval($content->Oc1),
                "Oc2"=> intval($content->Oc2),
                "Od1"=> intval($content->Od1),
                "Od2"=> intval($content->Od2),
                "Oe1"=> intval($content->Oe1),
                "Oe2"=> intval($content->Oe2),
                "Pa1"=> intval($content->Pa1),
                "Pa2"=> intval($content->Pa2),
                "Pa2Lainnya"=> intval($content->Pa2Lainnya),
                "Pa3"=> intval($content->Pa3),
                "Pb1"=> intval($content->Pb1),
                "Pb2"=> intval($content->Pb2),
                "Pc1"=> intval($content->Pc1),
                "Pc2"=> intval($content->Pc2),
                "Pd1"=> intval($content->Pd1),
                "Pd2"=> intval($content->Pd2),
                "Pe1"=> intval($content->Pe1),
                "Pe2"=> intval($content->Pe2),
                "Qa1"=> intval($content->Qa1),
                "Qa2"=> intval($content->Qa2),
                "Qa2Lainnya"=> intval($content->Qa2Lainnya),
                "Qa3"=>  intval($content->Qa3),
                "Qb1"=>  intval($content->Qb1),
                "Qb2"=>  intval($content->Qb2),
                "Qc1"=>  intval($content->Qc1),
                "Qc2"=>  intval($content->Qc2),
                "Qd1"=>  intval($content->Qd1),
                "Qd2"=>  intval($content->Qd2),
                "Qe1"=>  intval($content->Qe1),
                "Qe2"=>  intval($content->Qe2),
                "Ra1"=>  intval($content->Ra1),
                "Ra2"=> intval($content->Ra2),
                "Rb1"=> intval($content->Rb1),
                "Rb2"=> intval($content->Rb2),
                "Rc1"=> intval($content->Rc1),
                "Rc2"=> intval($content->Rc2),
                "Rd1"=> intval($content->Rd1),
                "Rd2"=> intval($content->Rd2),
                "Re1"=> intval($content->Re1),
                "Re2"=> intval($content->Re2),
                "Rf1"=> intval($content->Rf1),
                "Rf2"=> intval($content->Rf2),
                "Sa1"=> intval($content->Sa1),
                "Sa2"=> intval($content->Sa2),
                "Sa3"=> intval($content->Sa3),
                "Sb1"=> intval($content->Sb1),
                "Sb2"=> intval($content->Sb2),
                "Sc1"=> intval($content->Sc1),
                "Sc2"=> intval($content->Sc2),
                "Sd1"=> intval($content->Sd1),
                "Sd2"=> intval($content->Sd2),
                "Sd3"=> intval($content->Sd3),
                "Sd4"=> intval($content->Sd4),
                "Se1"=> intval($content->Se1),
                "Se2"=> intval($content->Se2),
                "Ta1"=> intval($content->Ta1),
                "Ta2"=> intval($content->Ta2),
                "Tb1"=> intval($content->Tb1),
                "Tb2"=> intval($content->Tb2),
                "Tb21"=> intval($content->Tb21),
                "Tb22"=> intval($content->Tb22),
                "Tb23"=> intval($content->Tb23),
                "Tb24"=> intval($content->Tb24),
                "Tb25"=> intval($content->Tb25),
                "Tb25Lainnya"=> intval($content->Tb25Lainnya),
                "Tc1"=> intval($content->Tc1),
                "Tc1Lainnya"=> intval($content->Tc1Lainnya),
                "Tc2"=> intval($content->Tc2),
                "La"=> intval($content->La),
                "user_id"=> $content->user_id,
                "Modified"=> $content->modified,
            ]);
        }
    }
}
