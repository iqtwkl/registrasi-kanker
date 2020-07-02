<?php
/**
 * Created by PhpStorm.
 * User: Zuliansyah
 * Date: 4/3/2020
 * Time: 8:41 AM
 */

namespace App\Modules\Anamnesis\Services;

use App\Http\Requests\Anamnesis\StoreRequest;
use App\Http\Requests\Anamnesis\UpdateRequest;
use App\Modules\Anamnesis\Contracts\AnamnesisContract;
use App\Modules\Anamnesis\Repositories\IAnamnesisRepository;
use Illuminate\Support\Facades\Auth;

class AnamnesisService implements AnamnesisContract{

    private $repository;

    public function __construct(IAnamnesisRepository $repository){
        $this->repository = $repository;
    }

    public function getAll($search = array(), $offset = null, $limit = null, $sort = array()){
        return $this->repository->getAll($search, $offset, $limit, $sort);
    }

    public function getById($id){
        return $this->repository->getById($id);
    }

    public function store(StoreRequest $request){
        $data = [
            "id_pasien" => $request->input("id_pasien"),
            "kunjungan" => $request->input("kunjungan"),
            "tgl_periksa" => $request->input("tgl_periksa"),
            "medrec" => $request->input("medrec"),
            "aa1" => $request->input("aa1"),
            "aa2" => $request->input("aa2"),
            "aa3" => $request->input("aa3"),
            "ab1" => $request->input("ab1"),
            "ab2" => $request->input("ab2"),
            "ab3" => $request->input("ab3"),
            "ac1" => $request->input("ac1"),
            "ac2" => $request->input("ac2"),
            "ac3" => $request->input("ac3"),
            "ad1" => $request->input("ad1"),
            "ad2" => $request->input("ad2"),
            "ad3" => $request->input("ad3"),
            "ae1" => $request->input("ae1"),
            "ae2" => $request->input("ae2"),
            "ae3" => $request->input("ae3"),
            "af1" => $request->input("af1"),
            "af2" => $request->input("af2"),
            "af3" => $request->input("af3"),
            "ag1" => $request->input("ag1"),
            "ag2" => $request->input("ag2"),
            "ag3" => $request->input("ag3"),
            "ah1" => $request->input("ah1"),
            "ah2" => $request->input("ah2"),
            "ah3" => $request->input("ah3"),
            "ai1" => $request->input("ai1"),
            "ai2" => $request->input("ai2"),
            "ai3" => $request->input("ai3"),
            "aj1" => $request->input("aj1"),
            "aj2" => $request->input("aj2"),
            "aj3" => $request->input("aj3"),
            "ak1" => $request->input("ak1"),
            "ak2" => $request->input("ak2"),
            "ak3" => $request->input("ak3"),
            "al1" => $request->input("al1"),
            "al2" => $request->input("al2"),
            "al3" => $request->input("al3"),
            "am1" => $request->input("am1"),
            "am2" => $request->input("am2"),
            "am21" => $request->input("am21"),
            "am22" => $request->input("am22"),
            "am23" => $request->input("am23"),
            "am24" => $request->input("am24"),
            "am25" => $request->input("am25"),
            "am26" => $request->input("am26"),
            "am27" => $request->input("am27"),
            "am28" => $request->input("am28"),
            "am29" => $request->input("am29"),
            "am210" => $request->input("am210"),
            "am211" => $request->input("am211"),
            "am212" => $request->input("am212"),
            "am3" => $request->input("am3"),
            "an1" => $request->input("an1"),
            "an2" => $request->input("an2"),
            "ba1" => $request->input("ba1"),
            "ba2" => $request->input("ba2"),
            "ba3" => $request->input("ba3"),
            "bb1" => $request->input("bb1"),
            "bb2" => $request->input("bb2"),
            "bb3" => $request->input("bb3"),
            "bc1" => $request->input("bc1"),
            "bc2" => $request->input("bc2"),
            "bc3" => $request->input("bc3"),
            "bd1" => $request->input("bd1"),
            "bd2" => $request->input("bd2"),
            "bd3" => $request->input("bd3"),
            "be1" => $request->input("be1"),
            "be2" => $request->input("be2"),
            "be3" => $request->input("be3"),
            "bf1" => $request->input("bf1"),
            "bf2" => $request->input("bf2"),
            "bf3" => $request->input("bf3"),
            "bg1" => $request->input("bg1"),
            "bg2" => $request->input("bg2"),
            "bg3" => $request->input("bg3"),
            "bh1" => $request->input("bh1"),
            "bh2" => $request->input("bh2"),
            "bh3" => $request->input("bh3"),
            "bi1" => $request->input("bi1"),
            "bi2" => $request->input("bi2"),
            "bi3" => $request->input("bi3"),
            "bj1" => $request->input("bj1"),
            "bj2" => $request->input("bj2"),
            "bj3" => $request->input("bj3"),
            "bk1" => $request->input("bk1"),
            "bk2" => $request->input("bk2"),
            "bk3" => $request->input("bk3"),
            "ca1" => $request->input("ca1"),
            "ca2" => $request->input("ca2"),
            "ca3" => $request->input("ca3"),
            "cb1" => $request->input("cb1"),
            "cb2" => $request->input("cb2"),
            "cb3" => $request->input("cb3"),
            "cc1" => $request->input("cc1"),
            "cc2" => $request->input("cc2"),
            "cc3" => $request->input("cc3"),
            "cd1" => $request->input("cd1"),
            "cd2" => $request->input("cd2"),
            "cd3" => $request->input("cd3"),
            "ce1" => $request->input("ce1"),
            "ce2" => $request->input("ce2"),
            "ce3" => $request->input("ce3"),
            "cf1" => $request->input("cf1"),
            "cf2" => $request->input("cf2"),
            "cf3" => $request->input("cf3"),
            "cg1" => $request->input("cg1"),
            "cg2" => $request->input("cg2"),
            "cg3" => $request->input("cg3"),
            "ch1" => $request->input("ch1"),
            "ch2" => $request->input("ch2"),
            "ci1" => $request->input("ci1"),
            "ci2" => $request->input("ci2"),
            "ci3" => $request->input("ci3"),
            "da1" => $request->input("da1"),
            "da2" => $request->input("da2"),
            "da3" => $request->input("da3"),
            "db1" => $request->input("db1"),
            "db2" => $request->input("db2"),
            "db3" => $request->input("db3"),
            "dc1" => $request->input("dc1"),
            "dc2" => $request->input("dc2"),
            "dc3" => $request->input("dc3"),
            "dd1" => $request->input("dd1"),
            "dd2" => $request->input("dd2"),
            "dd3" => $request->input("dd3"),
            "de1" => $request->input("de1"),
            "de2" => $request->input("de2"),
            "de3" => $request->input("de3"),
            "df1" => $request->input("df1"),
            "df2" => $request->input("df2"),
            "df3" => $request->input("df3"),
            "dg1" => $request->input("dg1"),
            "dg2" => $request->input("dg2"),
            "dg3" => $request->input("dg3"),
            "dh1" => $request->input("dh1"),
            "dh2" => $request->input("dh2"),
            "di1" => $request->input("di1"),
            "di2" => $request->input("di2"),
            "dj1" => $request->input("dj1"),
            "dj2" => $request->input("dj2"),
            "dj3" => $request->input("dj3"),
            "ea1" => $request->input("ea1"),
            "ea2" => $request->input("ea2"),
            "ea3" => $request->input("ea3"),
            "eb1" => $request->input("eb1"),
            "eb2" => $request->input("eb2"),
            "eb3" => $request->input("eb3"),
            "ec1" => $request->input("ec1"),
            "ec2" => $request->input("ec2"),
            "ec3" => $request->input("ec3"),
            "ed1" => $request->input("ed1"),
            "ed2" => $request->input("ed2"),
            "ed3" => $request->input("ed3"),
            "ee1" => $request->input("ee1"),
            "ee2" => $request->input("ee2"),
            "ee3" => $request->input("ee3"),
            "ef1" => $request->input("ef1"),
            "ef2" => $request->input("ef2"),
            "ef3" => $request->input("ef3"),
            "ef2Lainnya" => $request->input("ef2Lainnya"),
            "eg1" => $request->input("eg1"),
            "eg2" => $request->input("eg2"),
            "eg3" => $request->input("eg3"),
            "eg4" => $request->input("eg4"),
            "eg5" => $request->input("eg5"),
            "eg6" => $request->input("eg6"),
            "egLainnya" => $request->input("egLainnya"),
            "fa1" => $request->input("fa1"),
            "fa2" => $request->input("fa2"),
            "fb1" => $request->input("fb1"),
            "fb2" => $request->input("fb2"),
            "fc1" => $request->input("fc1"),
            "fc2" => $request->input("fc2"),
            "fd1" => $request->input("fd1"),
            "fd2" => $request->input("fd2"),
            "fe1" => $request->input("fe1"),
            "fe2" => $request->input("fe2"),
            "ff1" => $request->input("ff1"),
            "ff2" => $request->input("ff2"),
            "fg1" => $request->input("fg1"),
            "fg2" => $request->input("fg2"),
            "fg3" => $request->input("fg3"),
            "fh1" => $request->input("fh1"),
            "fh2" => $request->input("fh2"),
            "fi1" => $request->input("fi1"),
            "fi2" => $request->input("fi2"),
            "ga1" => $request->input("ga1"),
            "ga2" => $request->input("ga2"),
            "ga3" => $request->input("ga3"),
            "gb1" => $request->input("gb1"),
            "gb2" => $request->input("gb2"),
            "gb3" => $request->input("gb3"),
            "gc1" => $request->input("gc1"),
            "gd1" => $request->input("gd1"),
            "gd2" => $request->input("gd2"),
            "ge1" => $request->input("ge1"),
            "ge2" => $request->input("ge2"),
            "ge3" => $request->input("ge3"),
            "gf1" => $request->input("gf1"),
            "gf2" => $request->input("gf2"),
            "gg1" => $request->input("gg1"),
            "gg2" => $request->input("gg2"),
            "gg2Lainnya" => $request->input("gg2Lainnya"),
            "gg3" => $request->input("gg3"),
            "gh1" => $request->input("gh1"),
            "gh2" => $request->input("gh2"),
            "ha1" => $request->input("ha1"),
            "ha2" => $request->input("ha2"),
            "ha3" => $request->input("ha3"),
            "hb1" => $request->input("hb1"),
            "hb2" => $request->input("hb2"),
            "hb3" => $request->input("hb3"),
            "hc1" => $request->input("hc1"),
            "hc2" => $request->input("hc2"),
            "hc3" => $request->input("hc3"),
            "hd1" => $request->input("hd1"),
            "hd2" => $request->input("hd2"),
            "hd3" => $request->input("hd3"),
            "he1" => $request->input("he1"),
            "he2" => $request->input("he2"),
            "he3" => $request->input("he3"),
            "hf1" => $request->input("hf1"),
            "hf2" => $request->input("hf2"),
            "hf3" => $request->input("hf3"),
            "hg1" => $request->input("hg1"),
            "hg2" => $request->input("hg2"),
            "hg3" => $request->input("hg3"),
            "hh1" => $request->input("hh1"),
            "hh2" => $request->input("hh2"),
            "hh3" => $request->input("hh3"),
            "hi1" => $request->input("hi1"),
            "hi2" => $request->input("hi2"),
            "hi3" => $request->input("hi3"),
            "hj1" => $request->input("hj1"),
            "hj2" => $request->input("hj2"),
            "hj3" => $request->input("hj3"),
            "ia1" => $request->input("ia1"),
            "ia2" => $request->input("ia2"),
            "ia3" => $request->input("ia3"),
            "ib1" => $request->input("ib1"),
            "ib2" => $request->input("ib2"),
            "ib3" => $request->input("ib3"),
            "ic1" => $request->input("ic1"),
            "ic2" => $request->input("ic2"),
            "ic3" => $request->input("ic3"),
            "id1" => $request->input("id1"),
            "id2" => $request->input("id2"),
            "id3" => $request->input("id3"),
            "ie1" => $request->input("ie1"),
            "ie2" => $request->input("ie2"),
            "ie3" => $request->input("ie3"),
            "if1" => $request->input("if1"),
            "if2" => $request->input("if2"),
            "if3" => $request->input("if3"),
            "ig1" => $request->input("ig1"),
            "ig2" => $request->input("ig2"),
            "ig3" => $request->input("ig3"),
            "ih1" => $request->input("ih1"),
            "ih2" => $request->input("ih2"),
            "ih3" => $request->input("ih3"),
            "ii1" => $request->input("ii1"),
            "ii2" => $request->input("ii2"),
            "ii3" => $request->input("ii3"),
            "ja1" => $request->input("ja1"),
            "ja2" => $request->input("ja2"),
            "ja2Lainnya" => $request->input("ja2Lainnya"),
            "ja3" => $request->input("ja3"),
            "ja3Lainnya" => $request->input("ja3Lainnya"),
            "ka1" => $request->input("ka1"),
            "ka2" => $request->input("ka2"),
            "ka3" => $request->input("ka3"),
            "ka4" => $request->input("ka4"),
            "kb1" => $request->input("kb1"),
            "kb2" => $request->input("kb2"),
            "kb3" => $request->input("kb3"),
            "kb4" => $request->input("kb4"),
            "kc1" => $request->input("kc1"),
            "kc2" => $request->input("kc2"),
            "kd1" => $request->input("kd1"),
            "kd2" => $request->input("kd2"),
            "kd3" => $request->input("kd3"),
            "ke1" => $request->input("ke1"),
            "ke2" => $request->input("ke2"),
            "kf1" => $request->input("kf1"),
            "kg1" => $request->input("kg1"),
            "kh1" => $request->input("kh1"),
            "La1" => $request->input("La1"),
            "La2" => $request->input("La2"),
            "La3" => $request->input("La3"),
            "La4" => $request->input("La4"),
            "laLainLain" => $request->input("laLainLain"),
            "lb1" => $request->input("lb1"),
            "lb2" => $request->input("lb2"),
            "lb3" => $request->input("lb3"),
            "ma1" => $request->input("ma1"),
            "ma2" => $request->input("ma2"),
            "mb1" => $request->input("mb1"),
            "mb2" => $request->input("mb2"),
            "mc1" => $request->input("mc1"),
            "mc2" => $request->input("mc2"),
            "mc3" => $request->input("mc3"),
            "md1" => $request->input("md1"),
            "md2" => $request->input("md2"),
            "me1" => $request->input("me1"),
            "me2" => $request->input("me2"),
            "me3" => $request->input("me3"),
            "mf1" => $request->input("mf1"),
            "mf2" => $request->input("mf2"),
            "na1" => $request->input("na1"),
            "na2" => $request->input("na2"),
            "nb1" => $request->input("nb1"),
            "nb2" => $request->input("nb2"),
            "nc1" => $request->input("nc1"),
            "nc2" => $request->input("nc2"),
            "nd1" => $request->input("nd1"),
            "nd2" => $request->input("nd2"),
            "nd3" => $request->input("nd3"),
            "ne1" => $request->input("ne1"),
            "ne2" => $request->input("ne2"),
            "oa1" => $request->input("oa1"),
            "oa2" => $request->input("oa2"),
            "ob1" => $request->input("ob1"),
            "ob2" => $request->input("ob2"),
            "oc1" => $request->input("oc1"),
            "oc2" => $request->input("oc2"),
            "od1" => $request->input("od1"),
            "od2" => $request->input("od2"),
            "oe1" => $request->input("oe1"),
            "oe2" => $request->input("oe2"),
            "pa1" => $request->input("pa1"),
            "pa2" => $request->input("pa2"),
            "pa2Lainnya" => $request->input("pa2Lainnya"),
            "pa3" => $request->input("pa3"),
            "pb1" => $request->input("pb1"),
            "pb2" => $request->input("pb2"),
            "pc1" => $request->input("pc1"),
            "pc2" => $request->input("pc2"),
            "pd1" => $request->input("pd1"),
            "pd2" => $request->input("pd2"),
            "pe1" => $request->input("pe1"),
            "pe2" => $request->input("pe2"),
            "qa1" => $request->input("qa1"),
            "qa2" => $request->input("qa2"),
            "qa2Lainnya" => $request->input("qa2Lainnya"),
            "qa3" => $request->input("qa3"),
            "qb1" => $request->input("qb1"),
            "qb2" => $request->input("qb2"),
            "qc1" => $request->input("qc1"),
            "qc2" => $request->input("qc2"),
            "qd1" => $request->input("qd1"),
            "qd2" => $request->input("qd2"),
            "qe1" => $request->input("qe1"),
            "qe2" => $request->input("qe2"),
            "ra1" => $request->input("ra1"),
            "ra2" => $request->input("ra2"),
            "rb1" => $request->input("rb1"),
            "rb2" => $request->input("rb2"),
            "rc1" => $request->input("rc1"),
            "rc2" => $request->input("rc2"),
            "rd1" => $request->input("rd1"),
            "rd2" => $request->input("rd2"),
            "re1" => $request->input("re1"),
            "re2" => $request->input("re2"),
            "rf1" => $request->input("rf1"),
            "rf2" => $request->input("rf2"),
            "sa1" => $request->input("sa1"),
            "sa2" => $request->input("sa2"),
            "sa3" => $request->input("sa3"),
            "sb1" => $request->input("sb1"),
            "sb2" => $request->input("sb2"),
            "sc1" => $request->input("sc1"),
            "sc2" => $request->input("sc2"),
            "sd1" => $request->input("sd1"),
            "sd2" => $request->input("sd2"),
            "sd3" => $request->input("sd3"),
            "sd4" => $request->input("sd4"),
            "se1" => $request->input("se1"),
            "se2" => $request->input("se2"),
            "ta1" => $request->input("ta1"),
            "ta2" => $request->input("ta2"),
            "tb1" => $request->input("tb1"),
            "tb2" => $request->input("tb2"),
            "tb21" => $request->input("tb21"),
            "tb22" => $request->input("tb22"),
            "tb23" => $request->input("tb23"),
            "tb24" => $request->input("tb24"),
            "tb25" => $request->input("tb25"),
            "tb25Lainnya" => $request->input("tb25Lainnya"),
            "tc1" => $request->input("tc1"),
            "tc1Lainnya" => $request->input("tc1Lainnya"),
            "tc2" => $request->input("tc2"),
            "la" => $request->input("la"),
            "created_by" => Auth::user()->getAuthIdentifier(),
            "last_updated_by" => Auth::user()->getAuthIdentifier()
        ];
        return $this->repository->store($data);
    }

    public function update(UpdateRequest $request){
        $id = $request->input("id");
        $data = [
            "id_pasien" => $request->input("id_pasien"),
            "kunjungan" => $request->input("kunjungan"),
            "tgl_periksa" => $request->input("tgl_periksa"),
            "medrec" => $request->input("medrec"),
            "aa1" => $request->input("aa1"),
            "aa2" => $request->input("aa2"),
            "aa3" => $request->input("aa3"),
            "ab1" => $request->input("ab1"),
            "ab2" => $request->input("ab2"),
            "ab3" => $request->input("ab3"),
            "ac1" => $request->input("ac1"),
            "ac2" => $request->input("ac2"),
            "ac3" => $request->input("ac3"),
            "ad1" => $request->input("ad1"),
            "ad2" => $request->input("ad2"),
            "ad3" => $request->input("ad3"),
            "ae1" => $request->input("ae1"),
            "ae2" => $request->input("ae2"),
            "ae3" => $request->input("ae3"),
            "af1" => $request->input("af1"),
            "af2" => $request->input("af2"),
            "af3" => $request->input("af3"),
            "ag1" => $request->input("ag1"),
            "ag2" => $request->input("ag2"),
            "ag3" => $request->input("ag3"),
            "ah1" => $request->input("ah1"),
            "ah2" => $request->input("ah2"),
            "ah3" => $request->input("ah3"),
            "ai1" => $request->input("ai1"),
            "ai2" => $request->input("ai2"),
            "ai3" => $request->input("ai3"),
            "aj1" => $request->input("aj1"),
            "aj2" => $request->input("aj2"),
            "aj3" => $request->input("aj3"),
            "ak1" => $request->input("ak1"),
            "ak2" => $request->input("ak2"),
            "ak3" => $request->input("ak3"),
            "al1" => $request->input("al1"),
            "al2" => $request->input("al2"),
            "al3" => $request->input("al3"),
            "am1" => $request->input("am1"),
            "am2" => $request->input("am2"),
            "am21" => $request->input("am21"),
            "am22" => $request->input("am22"),
            "am23" => $request->input("am23"),
            "am24" => $request->input("am24"),
            "am25" => $request->input("am25"),
            "am26" => $request->input("am26"),
            "am27" => $request->input("am27"),
            "am28" => $request->input("am28"),
            "am29" => $request->input("am29"),
            "am210" => $request->input("am210"),
            "am211" => $request->input("am211"),
            "am212" => $request->input("am212"),
            "am3" => $request->input("am3"),
            "an1" => $request->input("an1"),
            "an2" => $request->input("an2"),
            "ba1" => $request->input("ba1"),
            "ba2" => $request->input("ba2"),
            "ba3" => $request->input("ba3"),
            "bb1" => $request->input("bb1"),
            "bb2" => $request->input("bb2"),
            "bb3" => $request->input("bb3"),
            "bc1" => $request->input("bc1"),
            "bc2" => $request->input("bc2"),
            "bc3" => $request->input("bc3"),
            "bd1" => $request->input("bd1"),
            "bd2" => $request->input("bd2"),
            "bd3" => $request->input("bd3"),
            "be1" => $request->input("be1"),
            "be2" => $request->input("be2"),
            "be3" => $request->input("be3"),
            "bf1" => $request->input("bf1"),
            "bf2" => $request->input("bf2"),
            "bf3" => $request->input("bf3"),
            "bg1" => $request->input("bg1"),
            "bg2" => $request->input("bg2"),
            "bg3" => $request->input("bg3"),
            "bh1" => $request->input("bh1"),
            "bh2" => $request->input("bh2"),
            "bh3" => $request->input("bh3"),
            "bi1" => $request->input("bi1"),
            "bi2" => $request->input("bi2"),
            "bi3" => $request->input("bi3"),
            "bj1" => $request->input("bj1"),
            "bj2" => $request->input("bj2"),
            "bj3" => $request->input("bj3"),
            "bk1" => $request->input("bk1"),
            "bk2" => $request->input("bk2"),
            "bk3" => $request->input("bk3"),
            "ca1" => $request->input("ca1"),
            "ca2" => $request->input("ca2"),
            "ca3" => $request->input("ca3"),
            "cb1" => $request->input("cb1"),
            "cb2" => $request->input("cb2"),
            "cb3" => $request->input("cb3"),
            "cc1" => $request->input("cc1"),
            "cc2" => $request->input("cc2"),
            "cc3" => $request->input("cc3"),
            "cd1" => $request->input("cd1"),
            "cd2" => $request->input("cd2"),
            "cd3" => $request->input("cd3"),
            "ce1" => $request->input("ce1"),
            "ce2" => $request->input("ce2"),
            "ce3" => $request->input("ce3"),
            "cf1" => $request->input("cf1"),
            "cf2" => $request->input("cf2"),
            "cf3" => $request->input("cf3"),
            "cg1" => $request->input("cg1"),
            "cg2" => $request->input("cg2"),
            "cg3" => $request->input("cg3"),
            "ch1" => $request->input("ch1"),
            "ch2" => $request->input("ch2"),
            "ci1" => $request->input("ci1"),
            "ci2" => $request->input("ci2"),
            "ci3" => $request->input("ci3"),
            "da1" => $request->input("da1"),
            "da2" => $request->input("da2"),
            "da3" => $request->input("da3"),
            "db1" => $request->input("db1"),
            "db2" => $request->input("db2"),
            "db3" => $request->input("db3"),
            "dc1" => $request->input("dc1"),
            "dc2" => $request->input("dc2"),
            "dc3" => $request->input("dc3"),
            "dd1" => $request->input("dd1"),
            "dd2" => $request->input("dd2"),
            "dd3" => $request->input("dd3"),
            "de1" => $request->input("de1"),
            "de2" => $request->input("de2"),
            "de3" => $request->input("de3"),
            "df1" => $request->input("df1"),
            "df2" => $request->input("df2"),
            "df3" => $request->input("df3"),
            "dg1" => $request->input("dg1"),
            "dg2" => $request->input("dg2"),
            "dg3" => $request->input("dg3"),
            "dh1" => $request->input("dh1"),
            "dh2" => $request->input("dh2"),
            "di1" => $request->input("di1"),
            "di2" => $request->input("di2"),
            "dj1" => $request->input("dj1"),
            "dj2" => $request->input("dj2"),
            "dj3" => $request->input("dj3"),
            "ea1" => $request->input("ea1"),
            "ea2" => $request->input("ea2"),
            "ea3" => $request->input("ea3"),
            "eb1" => $request->input("eb1"),
            "eb2" => $request->input("eb2"),
            "eb3" => $request->input("eb3"),
            "ec1" => $request->input("ec1"),
            "ec2" => $request->input("ec2"),
            "ec3" => $request->input("ec3"),
            "ed1" => $request->input("ed1"),
            "ed2" => $request->input("ed2"),
            "ed3" => $request->input("ed3"),
            "ee1" => $request->input("ee1"),
            "ee2" => $request->input("ee2"),
            "ee3" => $request->input("ee3"),
            "ef1" => $request->input("ef1"),
            "ef2" => $request->input("ef2"),
            "ef3" => $request->input("ef3"),
            "ef2Lainnya" => $request->input("ef2Lainnya"),
            "eg1" => $request->input("eg1"),
            "eg2" => $request->input("eg2"),
            "eg3" => $request->input("eg3"),
            "eg4" => $request->input("eg4"),
            "eg5" => $request->input("eg5"),
            "eg6" => $request->input("eg6"),
            "egLainnya" => $request->input("egLainnya"),
            "fa1" => $request->input("fa1"),
            "fa2" => $request->input("fa2"),
            "fb1" => $request->input("fb1"),
            "fb2" => $request->input("fb2"),
            "fc1" => $request->input("fc1"),
            "fc2" => $request->input("fc2"),
            "fd1" => $request->input("fd1"),
            "fd2" => $request->input("fd2"),
            "fe1" => $request->input("fe1"),
            "fe2" => $request->input("fe2"),
            "ff1" => $request->input("ff1"),
            "ff2" => $request->input("ff2"),
            "fg1" => $request->input("fg1"),
            "fg2" => $request->input("fg2"),
            "fg3" => $request->input("fg3"),
            "fh1" => $request->input("fh1"),
            "fh2" => $request->input("fh2"),
            "fi1" => $request->input("fi1"),
            "fi2" => $request->input("fi2"),
            "ga1" => $request->input("ga1"),
            "ga2" => $request->input("ga2"),
            "ga3" => $request->input("ga3"),
            "gb1" => $request->input("gb1"),
            "gb2" => $request->input("gb2"),
            "gb3" => $request->input("gb3"),
            "gc1" => $request->input("gc1"),
            "gd1" => $request->input("gd1"),
            "gd2" => $request->input("gd2"),
            "ge1" => $request->input("ge1"),
            "ge2" => $request->input("ge2"),
            "ge3" => $request->input("ge3"),
            "gf1" => $request->input("gf1"),
            "gf2" => $request->input("gf2"),
            "gg1" => $request->input("gg1"),
            "gg2" => $request->input("gg2"),
            "gg2Lainnya" => $request->input("gg2Lainnya"),
            "gg3" => $request->input("gg3"),
            "gh1" => $request->input("gh1"),
            "gh2" => $request->input("gh2"),
            "ha1" => $request->input("ha1"),
            "ha2" => $request->input("ha2"),
            "ha3" => $request->input("ha3"),
            "hb1" => $request->input("hb1"),
            "hb2" => $request->input("hb2"),
            "hb3" => $request->input("hb3"),
            "hc1" => $request->input("hc1"),
            "hc2" => $request->input("hc2"),
            "hc3" => $request->input("hc3"),
            "hd1" => $request->input("hd1"),
            "hd2" => $request->input("hd2"),
            "hd3" => $request->input("hd3"),
            "he1" => $request->input("he1"),
            "he2" => $request->input("he2"),
            "he3" => $request->input("he3"),
            "hf1" => $request->input("hf1"),
            "hf2" => $request->input("hf2"),
            "hf3" => $request->input("hf3"),
            "hg1" => $request->input("hg1"),
            "hg2" => $request->input("hg2"),
            "hg3" => $request->input("hg3"),
            "hh1" => $request->input("hh1"),
            "hh2" => $request->input("hh2"),
            "hh3" => $request->input("hh3"),
            "hi1" => $request->input("hi1"),
            "hi2" => $request->input("hi2"),
            "hi3" => $request->input("hi3"),
            "hj1" => $request->input("hj1"),
            "hj2" => $request->input("hj2"),
            "hj3" => $request->input("hj3"),
            "ia1" => $request->input("ia1"),
            "ia2" => $request->input("ia2"),
            "ia3" => $request->input("ia3"),
            "ib1" => $request->input("ib1"),
            "ib2" => $request->input("ib2"),
            "ib3" => $request->input("ib3"),
            "ic1" => $request->input("ic1"),
            "ic2" => $request->input("ic2"),
            "ic3" => $request->input("ic3"),
            "id1" => $request->input("id1"),
            "id2" => $request->input("id2"),
            "id3" => $request->input("id3"),
            "ie1" => $request->input("ie1"),
            "ie2" => $request->input("ie2"),
            "ie3" => $request->input("ie3"),
            "if1" => $request->input("if1"),
            "if2" => $request->input("if2"),
            "if3" => $request->input("if3"),
            "ig1" => $request->input("ig1"),
            "ig2" => $request->input("ig2"),
            "ig3" => $request->input("ig3"),
            "ih1" => $request->input("ih1"),
            "ih2" => $request->input("ih2"),
            "ih3" => $request->input("ih3"),
            "ii1" => $request->input("ii1"),
            "ii2" => $request->input("ii2"),
            "ii3" => $request->input("ii3"),
            "ja1" => $request->input("ja1"),
            "ja2" => $request->input("ja2"),
            "ja2Lainnya" => $request->input("ja2Lainnya"),
            "ja3" => $request->input("ja3"),
            "ja3Lainnya" => $request->input("ja3Lainnya"),
            "ka1" => $request->input("ka1"),
            "ka2" => $request->input("ka2"),
            "ka3" => $request->input("ka3"),
            "ka4" => $request->input("ka4"),
            "kb1" => $request->input("kb1"),
            "kb2" => $request->input("kb2"),
            "kb3" => $request->input("kb3"),
            "kb4" => $request->input("kb4"),
            "kc1" => $request->input("kc1"),
            "kc2" => $request->input("kc2"),
            "kd1" => $request->input("kd1"),
            "kd2" => $request->input("kd2"),
            "kd3" => $request->input("kd3"),
            "ke1" => $request->input("ke1"),
            "ke2" => $request->input("ke2"),
            "kf1" => $request->input("kf1"),
            "kg1" => $request->input("kg1"),
            "kh1" => $request->input("kh1"),
            "La1" => $request->input("La1"),
            "La2" => $request->input("La2"),
            "La3" => $request->input("La3"),
            "La4" => $request->input("La4"),
            "laLainLain" => $request->input("laLainLain"),
            "lb1" => $request->input("lb1"),
            "lb2" => $request->input("lb2"),
            "lb3" => $request->input("lb3"),
            "ma1" => $request->input("ma1"),
            "ma2" => $request->input("ma2"),
            "mb1" => $request->input("mb1"),
            "mb2" => $request->input("mb2"),
            "mc1" => $request->input("mc1"),
            "mc2" => $request->input("mc2"),
            "mc3" => $request->input("mc3"),
            "md1" => $request->input("md1"),
            "md2" => $request->input("md2"),
            "me1" => $request->input("me1"),
            "me2" => $request->input("me2"),
            "me3" => $request->input("me3"),
            "mf1" => $request->input("mf1"),
            "mf2" => $request->input("mf2"),
            "na1" => $request->input("na1"),
            "na2" => $request->input("na2"),
            "nb1" => $request->input("nb1"),
            "nb2" => $request->input("nb2"),
            "nc1" => $request->input("nc1"),
            "nc2" => $request->input("nc2"),
            "nd1" => $request->input("nd1"),
            "nd2" => $request->input("nd2"),
            "nd3" => $request->input("nd3"),
            "ne1" => $request->input("ne1"),
            "ne2" => $request->input("ne2"),
            "oa1" => $request->input("oa1"),
            "oa2" => $request->input("oa2"),
            "ob1" => $request->input("ob1"),
            "ob2" => $request->input("ob2"),
            "oc1" => $request->input("oc1"),
            "oc2" => $request->input("oc2"),
            "od1" => $request->input("od1"),
            "od2" => $request->input("od2"),
            "oe1" => $request->input("oe1"),
            "oe2" => $request->input("oe2"),
            "pa1" => $request->input("pa1"),
            "pa2" => $request->input("pa2"),
            "pa2Lainnya" => $request->input("pa2Lainnya"),
            "pa3" => $request->input("pa3"),
            "pb1" => $request->input("pb1"),
            "pb2" => $request->input("pb2"),
            "pc1" => $request->input("pc1"),
            "pc2" => $request->input("pc2"),
            "pd1" => $request->input("pd1"),
            "pd2" => $request->input("pd2"),
            "pe1" => $request->input("pe1"),
            "pe2" => $request->input("pe2"),
            "qa1" => $request->input("qa1"),
            "qa2" => $request->input("qa2"),
            "qa2Lainnya" => $request->input("qa2Lainnya"),
            "qa3" => $request->input("qa3"),
            "qb1" => $request->input("qb1"),
            "qb2" => $request->input("qb2"),
            "qc1" => $request->input("qc1"),
            "qc2" => $request->input("qc2"),
            "qd1" => $request->input("qd1"),
            "qd2" => $request->input("qd2"),
            "qe1" => $request->input("qe1"),
            "qe2" => $request->input("qe2"),
            "ra1" => $request->input("ra1"),
            "ra2" => $request->input("ra2"),
            "rb1" => $request->input("rb1"),
            "rb2" => $request->input("rb2"),
            "rc1" => $request->input("rc1"),
            "rc2" => $request->input("rc2"),
            "rd1" => $request->input("rd1"),
            "rd2" => $request->input("rd2"),
            "re1" => $request->input("re1"),
            "re2" => $request->input("re2"),
            "rf1" => $request->input("rf1"),
            "rf2" => $request->input("rf2"),
            "sa1" => $request->input("sa1"),
            "sa2" => $request->input("sa2"),
            "sa3" => $request->input("sa3"),
            "sb1" => $request->input("sb1"),
            "sb2" => $request->input("sb2"),
            "sc1" => $request->input("sc1"),
            "sc2" => $request->input("sc2"),
            "sd1" => $request->input("sd1"),
            "sd2" => $request->input("sd2"),
            "sd3" => $request->input("sd3"),
            "sd4" => $request->input("sd4"),
            "se1" => $request->input("se1"),
            "se2" => $request->input("se2"),
            "ta1" => $request->input("ta1"),
            "ta2" => $request->input("ta2"),
            "tb1" => $request->input("tb1"),
            "tb2" => $request->input("tb2"),
            "tb21" => $request->input("tb21"),
            "tb22" => $request->input("tb22"),
            "tb23" => $request->input("tb23"),
            "tb24" => $request->input("tb24"),
            "tb25" => $request->input("tb25"),
            "tb25Lainnya" => $request->input("tb25Lainnya"),
            "tc1" => $request->input("tc1"),
            "tc1Lainnya" => $request->input("tc1Lainnya"),
            "tc2" => $request->input("tc2"),
            "la" => $request->input("la"),
            "last_updated_by" => Auth::user()->getAuthIdentifier()
        ];
        return $this->repository->update($data, $id);
    }

    public function remove($id){
        return $this->repository->remove($id);
    }
}