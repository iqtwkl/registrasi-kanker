/**
 * Created by User2 on 4/7/2020.
 */
/**
 * Created by User2 on 4/7/2020.
 */
/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function(){
    var configs = {
        columns:[
            {
                title: 'ID',
                field: 'id',
                columnType: {
                    type: 'field'
                }
            },
            {
                title: 'Nama',
                field: 'nama_pasien',
                columnType: {
                    type: 'field'
                }
            },
            [
                {
                    title: 'Action',
                    field: 'Edit',
                    columnType: {
                        type: 'modal',
                        target: 'modal-edit-anamnesis',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                },
                {
                    title: 'Action',
                    field: 'Delete',
                    columnType: {
                        type: 'modal',
                        target: 'modal-delete-anamnesis',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-anamnesis').hasClass('js-data-anamnesis')) {
        dataTable.init(".js-data-anamnesis", configs);
    }

    $('#modal-create-anamnesis').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var id_pasienElement = formElement.find('#id_pasien');
        var kunjunganElement = formElement.find('#kunjungan');
        var tgl_periksaElement = formElement.find('#tgl_periksa');
        var medrecElement = formElement.find('#medrec');
        var aa1Element = formElement.find('#aa1');
        var aa2Element = formElement.find('#aa2');
        var aa3Element = formElement.find('#aa3');
        var ab1Element = formElement.find('#ab1');
        var ab2Element = formElement.find('#ab2');
        var ab3Element = formElement.find('#ab3');
        var ac1Element = formElement.find('#ac1');
        var ac2Element = formElement.find('#ac2');
        var ac3Element = formElement.find('#ac3');
        var ad1Element = formElement.find('#ad1');
        var ad2Element = formElement.find('#ad2');
        var ad3Element = formElement.find('#ad3');
        var ae1Element = formElement.find('#ae1');
        var ae2Element = formElement.find('#ae2');
        var ae3Element = formElement.find('#ae3');
        var af1Element = formElement.find('#af1');
        var af2Element = formElement.find('#af2');
        var af3Element = formElement.find('#af3');
        var ag1Element = formElement.find('#ag1');
        var ag2Element = formElement.find('#ag2');
        var ag3Element = formElement.find('#ag3');
        var ah1Element = formElement.find('#ah1');
        var ah2Element = formElement.find('#ah2');
        var ah3Element = formElement.find('#ah3');
        var ai1Element = formElement.find('#ai1');
        var ai2Element = formElement.find('#ai2');
        var ai3Element = formElement.find('#ai3');
        var aj1Element = formElement.find('#aj1');
        var aj2Element = formElement.find('#aj2');
        var aj3Element = formElement.find('#aj3');
        var ak1Element = formElement.find('#ak1');
        var ak2Element = formElement.find('#ak2');
        var ak3Element = formElement.find('#ak3');
        var al1Element = formElement.find('#al1');
        var al2Element = formElement.find('#al2');
        var al3Element = formElement.find('#al3');
        var am1Element = formElement.find('#am1');
        var am2Element = formElement.find('#am2');
        var am21Element = formElement.find('#am21');
        var am22Element = formElement.find('#am22');
        var am23Element = formElement.find('#am23');
        var am24Element = formElement.find('#am24');
        var am25Element = formElement.find('#am25');
        var am26Element = formElement.find('#am26');
        var am27Element = formElement.find('#am27');
        var am28Element = formElement.find('#am28');
        var am29Element = formElement.find('#am29');
        var am210Element = formElement.find('#am210');
        var am211Element = formElement.find('#am211');
        var am212Element = formElement.find('#am212');
        var am3Element = formElement.find('#am3');
        var an1Element = formElement.find('#an1');
        var an2Element = formElement.find('#an2');
        var ba1Element = formElement.find('#ba1');
        var ba2Element = formElement.find('#ba2');
        var ba3Element = formElement.find('#ba3');
        var bb1Element = formElement.find('#bb1');
        var bb2Element = formElement.find('#bb2');
        var bb3Element = formElement.find('#bb3');
        var bc1Element = formElement.find('#bc1');
        var bc2Element = formElement.find('#bc2');
        var bc3Element = formElement.find('#bc3');
        var bd1Element = formElement.find('#bd1');
        var bd2Element = formElement.find('#bd2');
        var bd3Element = formElement.find('#bd3');
        var be1Element = formElement.find('#be1');
        var be2Element = formElement.find('#be2');
        var be3Element = formElement.find('#be3');
        var bf1Element = formElement.find('#bf1');
        var bf2Element = formElement.find('#bf2');
        var bf3Element = formElement.find('#bf3');
        var bg1Element = formElement.find('#bg1');
        var bg2Element = formElement.find('#bg2');
        var bg3Element = formElement.find('#bg3');
        var bh1Element = formElement.find('#bh1');
        var bh2Element = formElement.find('#bh2');
        var bh3Element = formElement.find('#bh3');
        var bi1Element = formElement.find('#bi1');
        var bi2Element = formElement.find('#bi2');
        var bi3Element = formElement.find('#bi3');
        var bj1Element = formElement.find('#bj1');
        var bj2Element = formElement.find('#bj2');
        var bj3Element = formElement.find('#bj3');
        var bk1Element = formElement.find('#bk1');
        var bk2Element = formElement.find('#bk2');
        var bk3Element = formElement.find('#bk3');
        var ca1Element = formElement.find('#ca1');
        var ca2Element = formElement.find('#ca2');
        var ca3Element = formElement.find('#ca3');
        var cb1Element = formElement.find('#cb1');
        var cb2Element = formElement.find('#cb2');
        var cb3Element = formElement.find('#cb3');
        var cc1Element = formElement.find('#cc1');
        var cc2Element = formElement.find('#cc2');
        var cc3Element = formElement.find('#cc3');
        var cd1Element = formElement.find('#cd1');
        var cd2Element = formElement.find('#cd2');
        var cd3Element = formElement.find('#cd3');
        var ce1Element = formElement.find('#ce1');
        var ce2Element = formElement.find('#ce2');
        var ce3Element = formElement.find('#ce3');
        var cf1Element = formElement.find('#cf1');
        var cf2Element = formElement.find('#cf2');
        var cf3Element = formElement.find('#cf3');
        var cg1Element = formElement.find('#cg1');
        var cg2Element = formElement.find('#cg2');
        var cg3Element = formElement.find('#cg3');
        var ch1Element = formElement.find('#ch1');
        var ch2Element = formElement.find('#ch2');
        var ci1Element = formElement.find('#ci1');
        var ci2Element = formElement.find('#ci2');
        var ci3Element = formElement.find('#ci3');
        var da1Element = formElement.find('#da1');
        var da2Element = formElement.find('#da2');
        var da3Element = formElement.find('#da3');
        var db1Element = formElement.find('#db1');
        var db2Element = formElement.find('#db2');
        var db3Element = formElement.find('#db3');
        var dc1Element = formElement.find('#dc1');
        var dc2Element = formElement.find('#dc2');
        var dc3Element = formElement.find('#dc3');
        var dd1Element = formElement.find('#dd1');
        var dd2Element = formElement.find('#dd2');
        var dd3Element = formElement.find('#dd3');
        var de1Element = formElement.find('#de1');
        var de2Element = formElement.find('#de2');
        var de3Element = formElement.find('#de3');
        var df1Element = formElement.find('#df1');
        var df2Element = formElement.find('#df2');
        var df3Element = formElement.find('#df3');
        var dg1Element = formElement.find('#dg1');
        var dg2Element = formElement.find('#dg2');
        var dg3Element = formElement.find('#dg3');
        var dh1Element = formElement.find('#dh1');
        var dh2Element = formElement.find('#dh2');
        var di1Element = formElement.find('#di1');
        var di2Element = formElement.find('#di2');
        var dj1Element = formElement.find('#dj1');
        var dj2Element = formElement.find('#dj2');
        var dj3Element = formElement.find('#dj3');
        var Ea1Element = formElement.find('#Ea1');
        var Ea2Element = formElement.find('#Ea2');
        var Ea3Element = formElement.find('#Ea3');
        var Eb1Element = formElement.find('#Eb1');
        var Eb2Element = formElement.find('#Eb2');
        var Eb3Element = formElement.find('#Eb3');
        var Ec1Element = formElement.find('#Ec1');
        var Ec2Element = formElement.find('#Ec2');
        var Ec3Element = formElement.find('#Ec3');
        var Ed1Element = formElement.find('#Ed1');
        var Ed2Element = formElement.find('#Ed2');
        var Ed3Element = formElement.find('#Ed3');
        var Ee1Element = formElement.find('#Ee1');
        var Ee2Element = formElement.find('#Ee2');
        var Ee3Element = formElement.find('#Ee3');
        var Ef1Element = formElement.find('#Ef1');
        var Ef2Element = formElement.find('#Ef2');
        var Ef3Element = formElement.find('#Ef3');
        var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
        var Eg1Element = formElement.find('#Eg1');
        var Eg2Element = formElement.find('#Eg2');
        var Eg3Element = formElement.find('#Eg3');
        var Eg4Element = formElement.find('#Eg4');
        var Eg5Element = formElement.find('#Eg5');
        var Eg6Element = formElement.find('#Eg6');
        var EgLainnyaElement = formElement.find('#EgLainnya');
        var Fa1Element = formElement.find('#Fa1');
        var Fa2Element = formElement.find('#Fa2');
        var Fb1Element = formElement.find('#Fb1');
        var Fb2Element = formElement.find('#Fb2');
        var Fc1Element = formElement.find('#Fc1');
        var Fc2Element = formElement.find('#Fc2');
        var Fd1Element = formElement.find('#Fd1');
        var Fd2Element = formElement.find('#Fd2');
        var Fe1Element = formElement.find('#Fe1');
        var Fe2Element = formElement.find('#Fe2');
        var Ff1Element = formElement.find('#Ff1');
        var Ff2Element = formElement.find('#Ff2');
        var Fg1Element = formElement.find('#Fg1');
        var Fg2Element = formElement.find('#Fg2');
        var Fg3Element = formElement.find('#Fg3');
        var Fh1Element = formElement.find('#Fh1');
        var Fh2Element = formElement.find('#Fh2');
        var Fi1Element = formElement.find('#Fi1');
        var Fi2Element = formElement.find('#Fi2');
        var Ga1Element = formElement.find('#Ga1');
        var Ga2Element = formElement.find('#Ga2');
        var Ga3Element = formElement.find('#Ga3');
        var Gb1Element = formElement.find('#Gb1');
        var Gb2Element = formElement.find('#Gb2');
        var Gb3Element = formElement.find('#Gb3');
        var Gc1Element = formElement.find('#Gc1');
        var Gd1Element = formElement.find('#Gd1');
        var Gd2Element = formElement.find('#Gd2');
        var Ge1Element = formElement.find('#Ge1');
        var Ge2Element = formElement.find('#Ge2');
        var Ge3Element = formElement.find('#Ge3');
        var Gf1Element = formElement.find('#Gf1');
        var Gf2Element = formElement.find('#Gf2');
        var Gg1Element = formElement.find('#Gg1');
        var Gg2Element = formElement.find('#Gg2');
        var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
        var Gg3Element = formElement.find('#Gg3');
        var Gh1Element = formElement.find('#Gh1');
        var Gh2Element = formElement.find('#Gh2');
        var Ha1Element = formElement.find('#Ha1');
        var Ha2Element = formElement.find('#Ha2');
        var Ha3Element = formElement.find('#Ha3');
        var Hb1Element = formElement.find('#Hb1');
        var Hb2Element = formElement.find('#Hb2');
        var Hb3Element = formElement.find('#Hb3');
        var Hc1Element = formElement.find('#Hc1');
        var Hc2Element = formElement.find('#Hc2');
        var Hc3Element = formElement.find('#Hc3');
        var Hd1Element = formElement.find('#Hd1');
        var Hd2Element = formElement.find('#Hd2');
        var Hd3Element = formElement.find('#Hd3');
        var He1Element = formElement.find('#He1');
        var He2Element = formElement.find('#He2');
        var He3Element = formElement.find('#He3');
        var Hf1Element = formElement.find('#Hf1');
        var Hf2Element = formElement.find('#Hf2');
        var Hf3Element = formElement.find('#Hf3');
        var Hg1Element = formElement.find('#Hg1');
        var Hg2Element = formElement.find('#Hg2');
        var Hg3Element = formElement.find('#Hg3');
        var Hh1Element = formElement.find('#Hh1');
        var Hh2Element = formElement.find('#Hh2');
        var Hh3Element = formElement.find('#Hh3');
        var Hi1Element = formElement.find('#Hi1');
        var Hi2Element = formElement.find('#Hi2');
        var Hi3Element = formElement.find('#Hi3');
        var Hj1Element = formElement.find('#Hj1');
        var Hj2Element = formElement.find('#Hj2');
        var Hj3Element = formElement.find('#Hj3');
        var Ia1Element = formElement.find('#Ia1');
        var Ia2Element = formElement.find('#Ia2');
        var Ia3Element = formElement.find('#Ia3');
        var Ib1Element = formElement.find('#Ib1');
        var Ib2Element = formElement.find('#Ib2');
        var Ib3Element = formElement.find('#Ib3');
        var Ic1Element = formElement.find('#Ic1');
        var Ic2Element = formElement.find('#Ic2');
        var Ic3Element = formElement.find('#Ic3');
        var Id1Element = formElement.find('#Id1');
        var Id2Element = formElement.find('#Id2');
        var Id3Element = formElement.find('#Id3');
        var Ie1Element = formElement.find('#Ie1');
        var Ie2Element = formElement.find('#Ie2');
        var Ie3Element = formElement.find('#Ie3');
        var If1Element = formElement.find('#If1');
        var If2Element = formElement.find('#If2');
        var If3Element = formElement.find('#If3');
        var Ig1Element = formElement.find('#Ig1');
        var Ig2Element = formElement.find('#Ig2');
        var Ig3Element = formElement.find('#Ig3');
        var Ih1Element = formElement.find('#Ih1');
        var Ih2Element = formElement.find('#Ih2');
        var Ih3Element = formElement.find('#Ih3');
        var Ii1Element = formElement.find('#Ii1');
        var Ii2Element = formElement.find('#Ii2');
        var Ii3Element = formElement.find('#Ii3');
        var Ja1Element = formElement.find('#Ja1');
        var Ja2Element = formElement.find('#Ja2');
        var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
        var Ja3Element = formElement.find('#Ja3');
        var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
        var Ka1Element = formElement.find('#Ka1');
        var Ka2Element = formElement.find('#Ka2');
        var Ka3Element = formElement.find('#Ka3');
        var Ka4Element = formElement.find('#Ka4');
        var Kb1Element = formElement.find('#Kb1');
        var Kb2Element = formElement.find('#Kb2');
        var Kb3Element = formElement.find('#Kb3');
        var Kb4Element = formElement.find('#Kb4');
        var Kc1Element = formElement.find('#Kc1');
        var Kc2Element = formElement.find('#Kc2');
        var Kd1Element = formElement.find('#Kd1');
        var Kd2Element = formElement.find('#Kd2');
        var Kd3Element = formElement.find('#Kd3');
        var Ke1Element = formElement.find('#Ke1');
        var Ke2Element = formElement.find('#Ke2');
        var Kf1Element = formElement.find('#Kf1');
        var Kg1Element = formElement.find('#Kg1');
        var Kh1Element = formElement.find('#Kh1');
        var La1Element = formElement.find('#La1');
        var La2Element = formElement.find('#La2');
        var La3Element = formElement.find('#La3');
        var La4Element = formElement.find('#La4');
        var LaLainLainElement = formElement.find('#LaLainLain');
        var Lb1Element = formElement.find('#Lb1');
        var Lb2Element = formElement.find('#Lb2');
        var Lb3Element = formElement.find('#Lb3');
        var Ma1Element = formElement.find('#Ma1');
        var Ma2Element = formElement.find('#Ma2');
        var Mb1Element = formElement.find('#Mb1');
        var Mb2Element = formElement.find('#Mb2');
        var Mc1Element = formElement.find('#Mc1');
        var Mc2Element = formElement.find('#Mc2');
        var Mc3Element = formElement.find('#Mc3');
        var Md1Element = formElement.find('#Md1');
        var Md2Element = formElement.find('#Md2');
        var Me1Element = formElement.find('#Me1');
        var Me2Element = formElement.find('#Me2');
        var Me3Element = formElement.find('#Me3');
        var Mf1Element = formElement.find('#Mf1');
        var Mf2Element = formElement.find('#Mf2');
        var Na1Element = formElement.find('#Na1');
        var Na2Element = formElement.find('#Na2');
        var Nb1Element = formElement.find('#Nb1');
        var Nb2Element = formElement.find('#Nb2');
        var Nc1Element = formElement.find('#Nc1');
        var Nc2Element = formElement.find('#Nc2');
        var Nd1Element = formElement.find('#Nd1');
        var Nd2Element = formElement.find('#Nd2');
        var Nd3Element = formElement.find('#Nd3');
        var Ne1Element = formElement.find('#Ne1');
        var Ne2Element = formElement.find('#Ne2');
        var Oa1Element = formElement.find('#Oa1');
        var Oa2Element = formElement.find('#Oa2');
        var Ob1Element = formElement.find('#Ob1');
        var Ob2Element = formElement.find('#Ob2');
        var Oc1Element = formElement.find('#Oc1');
        var Oc2Element = formElement.find('#Oc2');
        var Od1Element = formElement.find('#Od1');
        var Od2Element = formElement.find('#Od2');
        var Oe1Element = formElement.find('#Oe1');
        var Oe2Element = formElement.find('#Oe2');
        var Pa1Element = formElement.find('#Pa1');
        var Pa2Element = formElement.find('#Pa2');
        var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
        var Pa3Element = formElement.find('#Pa3');
        var Pb1Element = formElement.find('#Pb1');
        var Pb2Element = formElement.find('#Pb2');
        var Pc1Element = formElement.find('#Pc1');
        var Pc2Element = formElement.find('#Pc2');
        var Pd1Element = formElement.find('#Pd1');
        var Pd2Element = formElement.find('#Pd2');
        var Pe1Element = formElement.find('#Pe1');
        var Pe2Element = formElement.find('#Pe2');
        var Qa1Element = formElement.find('#Qa1');
        var Qa2Element = formElement.find('#Qa2');
        var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
        var Qa3Element = formElement.find('#Qa3');
        var Qb1Element = formElement.find('#Qb1');
        var Qb2Element = formElement.find('#Qb2');
        var Qc1Element = formElement.find('#Qc1');
        var Qc2Element = formElement.find('#Qc2');
        var Qd1Element = formElement.find('#Qd1');
        var Qd2Element = formElement.find('#Qd2');
        var Qe1Element = formElement.find('#Qe1');
        var Qe2Element = formElement.find('#Qe2');
        var Ra1Element = formElement.find('#Ra1');
        var Ra2Element = formElement.find('#Ra2');
        var Rb1Element = formElement.find('#Rb1');
        var Rb2Element = formElement.find('#Rb2');
        var Rc1Element = formElement.find('#Rc1');
        var Rc2Element = formElement.find('#Rc2');
        var Rd1Element = formElement.find('#Rd1');
        var Rd2Element = formElement.find('#Rd2');
        var Re1Element = formElement.find('#Re1');
        var Re2Element = formElement.find('#Re2');
        var Rf1Element = formElement.find('#Rf1');
        var Rf2Element = formElement.find('#Rf2');
        var Sa1Element = formElement.find('#Sa1');
        var Sa2Element = formElement.find('#Sa2');
        var Sa3Element = formElement.find('#Sa3');
        var Sb1Element = formElement.find('#Sb1');
        var Sb2Element = formElement.find('#Sb2');
        var Sc1Element = formElement.find('#Sc1');
        var Sc2Element = formElement.find('#Sc2');
        var Sd1Element = formElement.find('#Sd1');
        var Sd2Element = formElement.find('#Sd2');
        var Sd3Element = formElement.find('#Sd3');
        var Sd4Element = formElement.find('#Sd4');
        var Se1Element = formElement.find('#Se1');
        var Se2Element = formElement.find('#Se2');
        var Ta1Element = formElement.find('#Ta1');
        var Ta2Element = formElement.find('#Ta2');
        var Tb1Element = formElement.find('#Tb1');
        var Tb2Element = formElement.find('#Tb2');
        var Tb21Element = formElement.find('#Tb21');
        var Tb22Element = formElement.find('#Tb22');
        var Tb23Element = formElement.find('#Tb23');
        var Tb24Element = formElement.find('#Tb24');
        var Tb25Element = formElement.find('#Tb25');
        var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
        var Tc1Element = formElement.find('#Tc1');
        var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
        var Tc2Element = formElement.find('#Tc2');
        var LaElement = formElement.find('#La');
        idElement.val("");
        id_pasienElement.val("");
        kunjunganElement.val("");
        tgl_periksaElement.val("");
        medrecElement.val("");
        aa1Element.val("");
        aa2Element.val("");
        aa3Element.val("");
        ab1Element.val("");
        ab2Element.val("");
        ab3Element.val("");
        ac1Element.val("");
        ac2Element.val("");
        ac3Element.val("");
        ad1Element.val("");
        ad2Element.val("");
        ad3Element.val("");
        ae1Element.val("");
        ae2Element.val("");
        ae3Element.val("");
        af1Element.val("");
        af2Element.val("");
        af3Element.val("");
        ag1Element.val("");
        ag2Element.val("");
        ag3Element.val("");
        ah1Element.val("");
        ah2Element.val("");
        ah3Element.val("");
        ai1Element.val("");
        ai2Element.val("");
        ai3Element.val("");
        aj1Element.val("");
        aj2Element.val("");
        aj3Element.val("");
        ak1Element.val("");
        ak2Element.val("");
        ak3Element.val("");
        al1Element.val("");
        al2Element.val("");
        al3Element.val("");
        am1Element.val("");
        am2Element.val("");
        am21Element.val("");
        am22Element.val("");
        am23Element.val("");
        am24Element.val("");
        am25Element.val("");
        am26Element.val("");
        am27Element.val("");
        am28Element.val("");
        am29Element.val("");
        am210Element.val("");
        am211Element.val("");
        am212Element.val("");
        am3Element.val("");
        an1Element.val("");
        an2Element.val("");
        ba1Element.val("");
        ba2Element.val("");
        ba3Element.val("");
        bb1Element.val("");
        bb2Element.val("");
        bb3Element.val("");
        bc1Element.val("");
        bc2Element.val("");
        bc3Element.val("");
        bd1Element.val("");
        bd2Element.val("");
        bd3Element.val("");
        be1Element.val("");
        be2Element.val("");
        be3Element.val("");
        bf1Element.val("");
        bf2Element.val("");
        bf3Element.val("");
        bg1Element.val("");
        bg2Element.val("");
        bg3Element.val("");
        bh1Element.val("");
        bh2Element.val("");
        bh3Element.val("");
        bi1Element.val("");
        bi2Element.val("");
        bi3Element.val("");
        bj1Element.val("");
        bj2Element.val("");
        bj3Element.val("");
        bk1Element.val("");
        bk2Element.val("");
        bk3Element.val("");
        ca1Element.val("");
        ca2Element.val("");
        ca3Element.val("");
        cb1Element.val("");
        cb2Element.val("");
        cb3Element.val("");
        cc1Element.val("");
        cc2Element.val("");
        cc3Element.val("");
        cd1Element.val("");
        cd2Element.val("");
        cd3Element.val("");
        ce1Element.val("");
        ce2Element.val("");
        ce3Element.val("");
        cf1Element.val("");
        cf2Element.val("");
        cf3Element.val("");
        cg1Element.val("");
        cg2Element.val("");
        cg3Element.val("");
        ch1Element.val("");
        ch2Element.val("");
        ci1Element.val("");
        ci2Element.val("");
        ci3Element.val("");
        da1Element.val("");
        da2Element.val("");
        da3Element.val("");
        db1Element.val("");
        db2Element.val("");
        db3Element.val("");
        dc1Element.val("");
        dc2Element.val("");
        dc3Element.val("");
        dd1Element.val("");
        dd2Element.val("");
        dd3Element.val("");
        de1Element.val("");
        de2Element.val("");
        de3Element.val("");
        df1Element.val("");
        df2Element.val("");
        df3Element.val("");
        dg1Element.val("");
        dg2Element.val("");
        dg3Element.val("");
        dh1Element.val("");
        dh2Element.val("");
        di1Element.val("");
        di2Element.val("");
        dj1Element.val("");
        dj2Element.val("");
        dj3Element.val("");
        Ea1Element.val("");
        Ea2Element.val("");
        Ea3Element.val("");
        Eb1Element.val("");
        Eb2Element.val("");
        Eb3Element.val("");
        Ec1Element.val("");
        Ec2Element.val("");
        Ec3Element.val("");
        Ed1Element.val("");
        Ed2Element.val("");
        Ed3Element.val("");
        Ee1Element.val("");
        Ee2Element.val("");
        Ee3Element.val("");
        Ef1Element.val("");
        Ef2Element.val("");
        Ef3Element.val("");
        Ef2LainnyaElement.val("");
        Eg1Element.val("");
        Eg2Element.val("");
        Eg3Element.val("");
        Eg4Element.val("");
        Eg5Element.val("");
        Eg6Element.val("");
        EgLainnyaElement.val("");
        Fa1Element.val("");
        Fa2Element.val("");
        Fb1Element.val("");
        Fb2Element.val("");
        Fc1Element.val("");
        Fc2Element.val("");
        Fd1Element.val("");
        Fd2Element.val("");
        Fe1Element.val("");
        Fe2Element.val("");
        Ff1Element.val("");
        Ff2Element.val("");
        Fg1Element.val("");
        Fg2Element.val("");
        Fg3Element.val("");
        Fh1Element.val("");
        Fh2Element.val("");
        Fi1Element.val("");
        Fi2Element.val("");
        Ga1Element.val("");
        Ga2Element.val("");
        Ga3Element.val("");
        Gb1Element.val("");
        Gb2Element.val("");
        Gb3Element.val("");
        Gc1Element.val("");
        Gd1Element.val("");
        Gd2Element.val("");
        Ge1Element.val("");
        Ge2Element.val("");
        Ge3Element.val("");
        Gf1Element.val("");
        Gf2Element.val("");
        Gg1Element.val("");
        Gg2Element.val("");
        Gg2LainnyaElement.val("");
        Gg3Element.val("");
        Gh1Element.val("");
        Gh2Element.val("");
        Ha1Element.val("");
        Ha2Element.val("");
        Ha3Element.val("");
        Hb1Element.val("");
        Hb2Element.val("");
        Hb3Element.val("");
        Hc1Element.val("");
        Hc2Element.val("");
        Hc3Element.val("");
        Hd1Element.val("");
        Hd2Element.val("");
        Hd3Element.val("");
        He1Element.val("");
        He2Element.val("");
        He3Element.val("");
        Hf1Element.val("");
        Hf2Element.val("");
        Hf3Element.val("");
        Hg1Element.val("");
        Hg2Element.val("");
        Hg3Element.val("");
        Hh1Element.val("");
        Hh2Element.val("");
        Hh3Element.val("");
        Hi1Element.val("");
        Hi2Element.val("");
        Hi3Element.val("");
        Hj1Element.val("");
        Hj2Element.val("");
        Hj3Element.val("");
        Ia1Element.val("");
        Ia2Element.val("");
        Ia3Element.val("");
        Ib1Element.val("");
        Ib2Element.val("");
        Ib3Element.val("");
        Ic1Element.val("");
        Ic2Element.val("");
        Ic3Element.val("");
        Id1Element.val("");
        Id2Element.val("");
        Id3Element.val("");
        Ie1Element.val("");
        Ie2Element.val("");
        Ie3Element.val("");
        If1Element.val("");
        If2Element.val("");
        If3Element.val("");
        Ig1Element.val("");
        Ig2Element.val("");
        Ig3Element.val("");
        Ih1Element.val("");
        Ih2Element.val("");
        Ih3Element.val("");
        Ii1Element.val("");
        Ii2Element.val("");
        Ii3Element.val("");
        Ja1Element.val("");
        Ja2Element.val("");
        Ja2LainnyaElement.val("");
        Ja3Element.val("");
        Ja3LainnyaElement.val("");
        Ka1Element.val("");
        Ka2Element.val("");
        Ka3Element.val("");
        Ka4Element.val("");
        Kb1Element.val("");
        Kb2Element.val("");
        Kb3Element.val("");
        Kb4Element.val("");
        Kc1Element.val("");
        Kc2Element.val("");
        Kd1Element.val("");
        Kd2Element.val("");
        Kd3Element.val("");
        Ke1Element.val("");
        Ke2Element.val("");
        Kf1Element.val("");
        Kg1Element.val("");
        Kh1Element.val("");
        La1Element.val("");
        La2Element.val("");
        La3Element.val("");
        La4Element.val("");
        LaLainLainElement.val("");
        Lb1Element.val("");
        Lb2Element.val("");
        Lb3Element.val("");
        Ma1Element.val("");
        Ma2Element.val("");
        Mb1Element.val("");
        Mb2Element.val("");
        Mc1Element.val("");
        Mc2Element.val("");
        Mc3Element.val("");
        Md1Element.val("");
        Md2Element.val("");
        Me1Element.val("");
        Me2Element.val("");
        Me3Element.val("");
        Mf1Element.val("");
        Mf2Element.val("");
        Na1Element.val("");
        Na2Element.val("");
        Nb1Element.val("");
        Nb2Element.val("");
        Nc1Element.val("");
        Nc2Element.val("");
        Nd1Element.val("");
        Nd2Element.val("");
        Nd3Element.val("");
        Ne1Element.val("");
        Ne2Element.val("");
        Oa1Element.val("");
        Oa2Element.val("");
        Ob1Element.val("");
        Ob2Element.val("");
        Oc1Element.val("");
        Oc2Element.val("");
        Od1Element.val("");
        Od2Element.val("");
        Oe1Element.val("");
        Oe2Element.val("");
        Pa1Element.val("");
        Pa2Element.val("");
        Pa2LainnyaElement.val("");
        Pa3Element.val("");
        Pb1Element.val("");
        Pb2Element.val("");
        Pc1Element.val("");
        Pc2Element.val("");
        Pd1Element.val("");
        Pd2Element.val("");
        Pe1Element.val("");
        Pe2Element.val("");
        Qa1Element.val("");
        Qa2Element.val("");
        Qa2LainnyaElement.val("");
        Qa3Element.val("");
        Qb1Element.val("");
        Qb2Element.val("");
        Qc1Element.val("");
        Qc2Element.val("");
        Qd1Element.val("");
        Qd2Element.val("");
        Qe1Element.val("");
        Qe2Element.val("");
        Ra1Element.val("");
        Ra2Element.val("");
        Rb1Element.val("");
        Rb2Element.val("");
        Rc1Element.val("");
        Rc2Element.val("");
        Rd1Element.val("");
        Rd2Element.val("");
        Re1Element.val("");
        Re2Element.val("");
        Rf1Element.val("");
        Rf2Element.val("");
        Sa1Element.val("");
        Sa2Element.val("");
        Sa3Element.val("");
        Sb1Element.val("");
        Sb2Element.val("");
        Sc1Element.val("");
        Sc2Element.val("");
        Sd1Element.val("");
        Sd2Element.val("");
        Sd3Element.val("");
        Sd4Element.val("");
        Se1Element.val("");
        Se2Element.val("");
        Ta1Element.val("");
        Ta2Element.val("");
        Tb1Element.val("");
        Tb2Element.val("");
        Tb21Element.val("");
        Tb22Element.val("");
        Tb23Element.val("");
        Tb24Element.val("");
        Tb25Element.val("");
        Tb25LainnyaElement.val("");
        Tc1Element.val("");
        Tc1LainnyaElement.val("");
        Tc2Element.val("");
        LaElement.val("");
    });

    $(".js-anamnesis-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-anamnesis');
		//var idElement = formElement.find('input#id');
        var id_pasienElement = formElement.find('#id_pasien');
        var kunjunganElement = formElement.find('#kunjungan');
        var tgl_periksaElement = formElement.find('#tgl_periksa');
        var medrecElement = formElement.find('#medrec');
        var aa1Element = formElement.find('#aa1');
        var aa2Element = formElement.find('#aa2');
        var aa3Element = formElement.find('#aa3');
        var ab1Element = formElement.find('#ab1');
        var ab2Element = formElement.find('#ab2');
        var ab3Element = formElement.find('#ab3');
        var ac1Element = formElement.find('#ac1');
        var ac2Element = formElement.find('#ac2');
        var ac3Element = formElement.find('#ac3');
        var ad1Element = formElement.find('#ad1');
        var ad2Element = formElement.find('#ad2');
        var ad3Element = formElement.find('#ad3');
        var ae1Element = formElement.find('#ae1');
        var ae2Element = formElement.find('#ae2');
        var ae3Element = formElement.find('#ae3');
        var af1Element = formElement.find('#af1');
        var af2Element = formElement.find('#af2');
        var af3Element = formElement.find('#af3');
        var ag1Element = formElement.find('#ag1');
        var ag2Element = formElement.find('#ag2');
        var ag3Element = formElement.find('#ag3');
        var ah1Element = formElement.find('#ah1');
        var ah2Element = formElement.find('#ah2');
        var ah3Element = formElement.find('#ah3');
        var ai1Element = formElement.find('#ai1');
        var ai2Element = formElement.find('#ai2');
        var ai3Element = formElement.find('#ai3');
        var aj1Element = formElement.find('#aj1');
        var aj2Element = formElement.find('#aj2');
        var aj3Element = formElement.find('#aj3');
        var ak1Element = formElement.find('#ak1');
        var ak2Element = formElement.find('#ak2');
        var ak3Element = formElement.find('#ak3');
        var al1Element = formElement.find('#al1');
        var al2Element = formElement.find('#al2');
        var al3Element = formElement.find('#al3');
        var am1Element = formElement.find('#am1');
        var am2Element = formElement.find('#am2');
        var am21Element = formElement.find('#am21');
        var am22Element = formElement.find('#am22');
        var am23Element = formElement.find('#am23');
        var am24Element = formElement.find('#am24');
        var am25Element = formElement.find('#am25');
        var am26Element = formElement.find('#am26');
        var am27Element = formElement.find('#am27');
        var am28Element = formElement.find('#am28');
        var am29Element = formElement.find('#am29');
        var am210Element = formElement.find('#am210');
        var am211Element = formElement.find('#am211');
        var am212Element = formElement.find('#am212');
        var am3Element = formElement.find('#am3');
        var an1Element = formElement.find('#an1');
        var an2Element = formElement.find('#an2');
        var ba1Element = formElement.find('#ba1');
        var ba2Element = formElement.find('#ba2');
        var ba3Element = formElement.find('#ba3');
        var bb1Element = formElement.find('#bb1');
        var bb2Element = formElement.find('#bb2');
        var bb3Element = formElement.find('#bb3');
        var bc1Element = formElement.find('#bc1');
        var bc2Element = formElement.find('#bc2');
        var bc3Element = formElement.find('#bc3');
        var bd1Element = formElement.find('#bd1');
        var bd2Element = formElement.find('#bd2');
        var bd3Element = formElement.find('#bd3');
        var be1Element = formElement.find('#be1');
        var be2Element = formElement.find('#be2');
        var be3Element = formElement.find('#be3');
        var bf1Element = formElement.find('#bf1');
        var bf2Element = formElement.find('#bf2');
        var bf3Element = formElement.find('#bf3');
        var bg1Element = formElement.find('#bg1');
        var bg2Element = formElement.find('#bg2');
        var bg3Element = formElement.find('#bg3');
        var bh1Element = formElement.find('#bh1');
        var bh2Element = formElement.find('#bh2');
        var bh3Element = formElement.find('#bh3');
        var bi1Element = formElement.find('#bi1');
        var bi2Element = formElement.find('#bi2');
        var bi3Element = formElement.find('#bi3');
        var bj1Element = formElement.find('#bj1');
        var bj2Element = formElement.find('#bj2');
        var bj3Element = formElement.find('#bj3');
        var bk1Element = formElement.find('#bk1');
        var bk2Element = formElement.find('#bk2');
        var bk3Element = formElement.find('#bk3');
        var ca1Element = formElement.find('#ca1');
        var ca2Element = formElement.find('#ca2');
        var ca3Element = formElement.find('#ca3');
        var cb1Element = formElement.find('#cb1');
        var cb2Element = formElement.find('#cb2');
        var cb3Element = formElement.find('#cb3');
        var cc1Element = formElement.find('#cc1');
        var cc2Element = formElement.find('#cc2');
        var cc3Element = formElement.find('#cc3');
        var cd1Element = formElement.find('#cd1');
        var cd2Element = formElement.find('#cd2');
        var cd3Element = formElement.find('#cd3');
        var ce1Element = formElement.find('#ce1');
        var ce2Element = formElement.find('#ce2');
        var ce3Element = formElement.find('#ce3');
        var cf1Element = formElement.find('#cf1');
        var cf2Element = formElement.find('#cf2');
        var cf3Element = formElement.find('#cf3');
        var cg1Element = formElement.find('#cg1');
        var cg2Element = formElement.find('#cg2');
        var cg3Element = formElement.find('#cg3');
        var ch1Element = formElement.find('#ch1');
        var ch2Element = formElement.find('#ch2');
        var ci1Element = formElement.find('#ci1');
        var ci2Element = formElement.find('#ci2');
        var ci3Element = formElement.find('#ci3');
        var da1Element = formElement.find('#da1');
        var da2Element = formElement.find('#da2');
        var da3Element = formElement.find('#da3');
        var db1Element = formElement.find('#db1');
        var db2Element = formElement.find('#db2');
        var db3Element = formElement.find('#db3');
        var dc1Element = formElement.find('#dc1');
        var dc2Element = formElement.find('#dc2');
        var dc3Element = formElement.find('#dc3');
        var dd1Element = formElement.find('#dd1');
        var dd2Element = formElement.find('#dd2');
        var dd3Element = formElement.find('#dd3');
        var de1Element = formElement.find('#de1');
        var de2Element = formElement.find('#de2');
        var de3Element = formElement.find('#de3');
        var df1Element = formElement.find('#df1');
        var df2Element = formElement.find('#df2');
        var df3Element = formElement.find('#df3');
        var dg1Element = formElement.find('#dg1');
        var dg2Element = formElement.find('#dg2');
        var dg3Element = formElement.find('#dg3');
        var dh1Element = formElement.find('#dh1');
        var dh2Element = formElement.find('#dh2');
        var di1Element = formElement.find('#di1');
        var di2Element = formElement.find('#di2');
        var dj1Element = formElement.find('#dj1');
        var dj2Element = formElement.find('#dj2');
        var dj3Element = formElement.find('#dj3');
        var Ea1Element = formElement.find('#Ea1');
        var Ea2Element = formElement.find('#Ea2');
        var Ea3Element = formElement.find('#Ea3');
        var Eb1Element = formElement.find('#Eb1');
        var Eb2Element = formElement.find('#Eb2');
        var Eb3Element = formElement.find('#Eb3');
        var Ec1Element = formElement.find('#Ec1');
        var Ec2Element = formElement.find('#Ec2');
        var Ec3Element = formElement.find('#Ec3');
        var Ed1Element = formElement.find('#Ed1');
        var Ed2Element = formElement.find('#Ed2');
        var Ed3Element = formElement.find('#Ed3');
        var Ee1Element = formElement.find('#Ee1');
        var Ee2Element = formElement.find('#Ee2');
        var Ee3Element = formElement.find('#Ee3');
        var Ef1Element = formElement.find('#Ef1');
        var Ef2Element = formElement.find('#Ef2');
        var Ef3Element = formElement.find('#Ef3');
        var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
        var Eg1Element = formElement.find('#Eg1');
        var Eg2Element = formElement.find('#Eg2');
        var Eg3Element = formElement.find('#Eg3');
        var Eg4Element = formElement.find('#Eg4');
        var Eg5Element = formElement.find('#Eg5');
        var Eg6Element = formElement.find('#Eg6');
        var EgLainnyaElement = formElement.find('#EgLainnya');
        var Fa1Element = formElement.find('#Fa1');
        var Fa2Element = formElement.find('#Fa2');
        var Fb1Element = formElement.find('#Fb1');
        var Fb2Element = formElement.find('#Fb2');
        var Fc1Element = formElement.find('#Fc1');
        var Fc2Element = formElement.find('#Fc2');
        var Fd1Element = formElement.find('#Fd1');
        var Fd2Element = formElement.find('#Fd2');
        var Fe1Element = formElement.find('#Fe1');
        var Fe2Element = formElement.find('#Fe2');
        var Ff1Element = formElement.find('#Ff1');
        var Ff2Element = formElement.find('#Ff2');
        var Fg1Element = formElement.find('#Fg1');
        var Fg2Element = formElement.find('#Fg2');
        var Fg3Element = formElement.find('#Fg3');
        var Fh1Element = formElement.find('#Fh1');
        var Fh2Element = formElement.find('#Fh2');
        var Fi1Element = formElement.find('#Fi1');
        var Fi2Element = formElement.find('#Fi2');
        var Ga1Element = formElement.find('#Ga1');
        var Ga2Element = formElement.find('#Ga2');
        var Ga3Element = formElement.find('#Ga3');
        var Gb1Element = formElement.find('#Gb1');
        var Gb2Element = formElement.find('#Gb2');
        var Gb3Element = formElement.find('#Gb3');
        var Gc1Element = formElement.find('#Gc1');
        var Gd1Element = formElement.find('#Gd1');
        var Gd2Element = formElement.find('#Gd2');
        var Ge1Element = formElement.find('#Ge1');
        var Ge2Element = formElement.find('#Ge2');
        var Ge3Element = formElement.find('#Ge3');
        var Gf1Element = formElement.find('#Gf1');
        var Gf2Element = formElement.find('#Gf2');
        var Gg1Element = formElement.find('#Gg1');
        var Gg2Element = formElement.find('#Gg2');
        var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
        var Gg3Element = formElement.find('#Gg3');
        var Gh1Element = formElement.find('#Gh1');
        var Gh2Element = formElement.find('#Gh2');
        var Ha1Element = formElement.find('#Ha1');
        var Ha2Element = formElement.find('#Ha2');
        var Ha3Element = formElement.find('#Ha3');
        var Hb1Element = formElement.find('#Hb1');
        var Hb2Element = formElement.find('#Hb2');
        var Hb3Element = formElement.find('#Hb3');
        var Hc1Element = formElement.find('#Hc1');
        var Hc2Element = formElement.find('#Hc2');
        var Hc3Element = formElement.find('#Hc3');
        var Hd1Element = formElement.find('#Hd1');
        var Hd2Element = formElement.find('#Hd2');
        var Hd3Element = formElement.find('#Hd3');
        var He1Element = formElement.find('#He1');
        var He2Element = formElement.find('#He2');
        var He3Element = formElement.find('#He3');
        var Hf1Element = formElement.find('#Hf1');
        var Hf2Element = formElement.find('#Hf2');
        var Hf3Element = formElement.find('#Hf3');
        var Hg1Element = formElement.find('#Hg1');
        var Hg2Element = formElement.find('#Hg2');
        var Hg3Element = formElement.find('#Hg3');
        var Hh1Element = formElement.find('#Hh1');
        var Hh2Element = formElement.find('#Hh2');
        var Hh3Element = formElement.find('#Hh3');
        var Hi1Element = formElement.find('#Hi1');
        var Hi2Element = formElement.find('#Hi2');
        var Hi3Element = formElement.find('#Hi3');
        var Hj1Element = formElement.find('#Hj1');
        var Hj2Element = formElement.find('#Hj2');
        var Hj3Element = formElement.find('#Hj3');
        var Ia1Element = formElement.find('#Ia1');
        var Ia2Element = formElement.find('#Ia2');
        var Ia3Element = formElement.find('#Ia3');
        var Ib1Element = formElement.find('#Ib1');
        var Ib2Element = formElement.find('#Ib2');
        var Ib3Element = formElement.find('#Ib3');
        var Ic1Element = formElement.find('#Ic1');
        var Ic2Element = formElement.find('#Ic2');
        var Ic3Element = formElement.find('#Ic3');
        var Id1Element = formElement.find('#Id1');
        var Id2Element = formElement.find('#Id2');
        var Id3Element = formElement.find('#Id3');
        var Ie1Element = formElement.find('#Ie1');
        var Ie2Element = formElement.find('#Ie2');
        var Ie3Element = formElement.find('#Ie3');
        var If1Element = formElement.find('#If1');
        var If2Element = formElement.find('#If2');
        var If3Element = formElement.find('#If3');
        var Ig1Element = formElement.find('#Ig1');
        var Ig2Element = formElement.find('#Ig2');
        var Ig3Element = formElement.find('#Ig3');
        var Ih1Element = formElement.find('#Ih1');
        var Ih2Element = formElement.find('#Ih2');
        var Ih3Element = formElement.find('#Ih3');
        var Ii1Element = formElement.find('#Ii1');
        var Ii2Element = formElement.find('#Ii2');
        var Ii3Element = formElement.find('#Ii3');
        var Ja1Element = formElement.find('#Ja1');
        var Ja2Element = formElement.find('#Ja2');
        var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
        var Ja3Element = formElement.find('#Ja3');
        var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
        var Ka1Element = formElement.find('#Ka1');
        var Ka2Element = formElement.find('#Ka2');
        var Ka3Element = formElement.find('#Ka3');
        var Ka4Element = formElement.find('#Ka4');
        var Kb1Element = formElement.find('#Kb1');
        var Kb2Element = formElement.find('#Kb2');
        var Kb3Element = formElement.find('#Kb3');
        var Kb4Element = formElement.find('#Kb4');
        var Kc1Element = formElement.find('#Kc1');
        var Kc2Element = formElement.find('#Kc2');
        var Kd1Element = formElement.find('#Kd1');
        var Kd2Element = formElement.find('#Kd2');
        var Kd3Element = formElement.find('#Kd3');
        var Ke1Element = formElement.find('#Ke1');
        var Ke2Element = formElement.find('#Ke2');
        var Kf1Element = formElement.find('#Kf1');
        var Kg1Element = formElement.find('#Kg1');
        var Kh1Element = formElement.find('#Kh1');
        var La1Element = formElement.find('#La1');
        var La2Element = formElement.find('#La2');
        var La3Element = formElement.find('#La3');
        var La4Element = formElement.find('#La4');
        var LaLainLainElement = formElement.find('#LaLainLain');
        var Lb1Element = formElement.find('#Lb1');
        var Lb2Element = formElement.find('#Lb2');
        var Lb3Element = formElement.find('#Lb3');
        var Ma1Element = formElement.find('#Ma1');
        var Ma2Element = formElement.find('#Ma2');
        var Mb1Element = formElement.find('#Mb1');
        var Mb2Element = formElement.find('#Mb2');
        var Mc1Element = formElement.find('#Mc1');
        var Mc2Element = formElement.find('#Mc2');
        var Mc3Element = formElement.find('#Mc3');
        var Md1Element = formElement.find('#Md1');
        var Md2Element = formElement.find('#Md2');
        var Me1Element = formElement.find('#Me1');
        var Me2Element = formElement.find('#Me2');
        var Me3Element = formElement.find('#Me3');
        var Mf1Element = formElement.find('#Mf1');
        var Mf2Element = formElement.find('#Mf2');
        var Na1Element = formElement.find('#Na1');
        var Na2Element = formElement.find('#Na2');
        var Nb1Element = formElement.find('#Nb1');
        var Nb2Element = formElement.find('#Nb2');
        var Nc1Element = formElement.find('#Nc1');
        var Nc2Element = formElement.find('#Nc2');
        var Nd1Element = formElement.find('#Nd1');
        var Nd2Element = formElement.find('#Nd2');
        var Nd3Element = formElement.find('#Nd3');
        var Ne1Element = formElement.find('#Ne1');
        var Ne2Element = formElement.find('#Ne2');
        var Oa1Element = formElement.find('#Oa1');
        var Oa2Element = formElement.find('#Oa2');
        var Ob1Element = formElement.find('#Ob1');
        var Ob2Element = formElement.find('#Ob2');
        var Oc1Element = formElement.find('#Oc1');
        var Oc2Element = formElement.find('#Oc2');
        var Od1Element = formElement.find('#Od1');
        var Od2Element = formElement.find('#Od2');
        var Oe1Element = formElement.find('#Oe1');
        var Oe2Element = formElement.find('#Oe2');
        var Pa1Element = formElement.find('#Pa1');
        var Pa2Element = formElement.find('#Pa2');
        var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
        var Pa3Element = formElement.find('#Pa3');
        var Pb1Element = formElement.find('#Pb1');
        var Pb2Element = formElement.find('#Pb2');
        var Pc1Element = formElement.find('#Pc1');
        var Pc2Element = formElement.find('#Pc2');
        var Pd1Element = formElement.find('#Pd1');
        var Pd2Element = formElement.find('#Pd2');
        var Pe1Element = formElement.find('#Pe1');
        var Pe2Element = formElement.find('#Pe2');
        var Qa1Element = formElement.find('#Qa1');
        var Qa2Element = formElement.find('#Qa2');
        var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
        var Qa3Element = formElement.find('#Qa3');
        var Qb1Element = formElement.find('#Qb1');
        var Qb2Element = formElement.find('#Qb2');
        var Qc1Element = formElement.find('#Qc1');
        var Qc2Element = formElement.find('#Qc2');
        var Qd1Element = formElement.find('#Qd1');
        var Qd2Element = formElement.find('#Qd2');
        var Qe1Element = formElement.find('#Qe1');
        var Qe2Element = formElement.find('#Qe2');
        var Ra1Element = formElement.find('#Ra1');
        var Ra2Element = formElement.find('#Ra2');
        var Rb1Element = formElement.find('#Rb1');
        var Rb2Element = formElement.find('#Rb2');
        var Rc1Element = formElement.find('#Rc1');
        var Rc2Element = formElement.find('#Rc2');
        var Rd1Element = formElement.find('#Rd1');
        var Rd2Element = formElement.find('#Rd2');
        var Re1Element = formElement.find('#Re1');
        var Re2Element = formElement.find('#Re2');
        var Rf1Element = formElement.find('#Rf1');
        var Rf2Element = formElement.find('#Rf2');
        var Sa1Element = formElement.find('#Sa1');
        var Sa2Element = formElement.find('#Sa2');
        var Sa3Element = formElement.find('#Sa3');
        var Sb1Element = formElement.find('#Sb1');
        var Sb2Element = formElement.find('#Sb2');
        var Sc1Element = formElement.find('#Sc1');
        var Sc2Element = formElement.find('#Sc2');
        var Sd1Element = formElement.find('#Sd1');
        var Sd2Element = formElement.find('#Sd2');
        var Sd3Element = formElement.find('#Sd3');
        var Sd4Element = formElement.find('#Sd4');
        var Se1Element = formElement.find('#Se1');
        var Se2Element = formElement.find('#Se2');
        var Ta1Element = formElement.find('#Ta1');
        var Ta2Element = formElement.find('#Ta2');
        var Tb1Element = formElement.find('#Tb1');
        var Tb2Element = formElement.find('#Tb2');
        var Tb21Element = formElement.find('#Tb21');
        var Tb22Element = formElement.find('#Tb22');
        var Tb23Element = formElement.find('#Tb23');
        var Tb24Element = formElement.find('#Tb24');
        var Tb25Element = formElement.find('#Tb25');
        var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
        var Tc1Element = formElement.find('#Tc1');
        var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
        var Tc2Element = formElement.find('#Tc2');
        var LaElement = formElement.find('#La');
        var _id_pasien	=	id_pasienElement.val();
        var _kunjungan	=	kunjunganElement.val();
        var _tgl_periksa	=	tgl_periksaElement.val();
        var _medrec	=	medrecElement.val();
        var _aa1	=	aa1Element.val();
        var _aa2	=	aa2Element.val();
        var _aa3	=	aa3Element.val();
        var _ab1	=	ab1Element.val();
        var _ab2	=	ab2Element.val();
        var _ab3	=	ab3Element.val();
        var _ac1	=	ac1Element.val();
        var _ac2	=	ac2Element.val();
        var _ac3	=	ac3Element.val();
        var _ad1	=	ad1Element.val();
        var _ad2	=	ad2Element.val();
        var _ad3	=	ad3Element.val();
        var _ae1	=	ae1Element.val();
        var _ae2	=	ae2Element.val();
        var _ae3	=	ae3Element.val();
        var _af1	=	af1Element.val();
        var _af2	=	af2Element.val();
        var _af3	=	af3Element.val();
        var _ag1	=	ag1Element.val();
        var _ag2	=	ag2Element.val();
        var _ag3	=	ag3Element.val();
        var _ah1	=	ah1Element.val();
        var _ah2	=	ah2Element.val();
        var _ah3	=	ah3Element.val();
        var _ai1	=	ai1Element.val();
        var _ai2	=	ai2Element.val();
        var _ai3	=	ai3Element.val();
        var _aj1	=	aj1Element.val();
        var _aj2	=	aj2Element.val();
        var _aj3	=	aj3Element.val();
        var _ak1	=	ak1Element.val();
        var _ak2	=	ak2Element.val();
        var _ak3	=	ak3Element.val();
        var _al1	=	al1Element.val();
        var _al2	=	al2Element.val();
        var _al3	=	al3Element.val();
        var _am1	=	am1Element.val();
        var _am2	=	am2Element.val();
        var _am21	=	am21Element.val();
        var _am22	=	am22Element.val();
        var _am23	=	am23Element.val();
        var _am24	=	am24Element.val();
        var _am25	=	am25Element.val();
        var _am26	=	am26Element.val();
        var _am27	=	am27Element.val();
        var _am28	=	am28Element.val();
        var _am29	=	am29Element.val();
        var _am210	=	am210Element.val();
        var _am211	=	am211Element.val();
        var _am212	=	am212Element.val();
        var _am3	=	am3Element.val();
        var _an1	=	an1Element.val();
        var _an2	=	an2Element.val();
        var _ba1	=	ba1Element.val();
        var _ba2	=	ba2Element.val();
        var _ba3	=	ba3Element.val();
        var _bb1	=	bb1Element.val();
        var _bb2	=	bb2Element.val();
        var _bb3	=	bb3Element.val();
        var _bc1	=	bc1Element.val();
        var _bc2	=	bc2Element.val();
        var _bc3	=	bc3Element.val();
        var _bd1	=	bd1Element.val();
        var _bd2	=	bd2Element.val();
        var _bd3	=	bd3Element.val();
        var _be1	=	be1Element.val();
        var _be2	=	be2Element.val();
        var _be3	=	be3Element.val();
        var _bf1	=	bf1Element.val();
        var _bf2	=	bf2Element.val();
        var _bf3	=	bf3Element.val();
        var _bg1	=	bg1Element.val();
        var _bg2	=	bg2Element.val();
        var _bg3	=	bg3Element.val();
        var _bh1	=	bh1Element.val();
        var _bh2	=	bh2Element.val();
        var _bh3	=	bh3Element.val();
        var _bi1	=	bi1Element.val();
        var _bi2	=	bi2Element.val();
        var _bi3	=	bi3Element.val();
        var _bj1	=	bj1Element.val();
        var _bj2	=	bj2Element.val();
        var _bj3	=	bj3Element.val();
        var _bk1	=	bk1Element.val();
        var _bk2	=	bk2Element.val();
        var _bk3	=	bk3Element.val();
        var _ca1	=	ca1Element.val();
        var _ca2	=	ca2Element.val();
        var _ca3	=	ca3Element.val();
        var _cb1	=	cb1Element.val();
        var _cb2	=	cb2Element.val();
        var _cb3	=	cb3Element.val();
        var _cc1	=	cc1Element.val();
        var _cc2	=	cc2Element.val();
        var _cc3	=	cc3Element.val();
        var _cd1	=	cd1Element.val();
        var _cd2	=	cd2Element.val();
        var _cd3	=	cd3Element.val();
        var _ce1	=	ce1Element.val();
        var _ce2	=	ce2Element.val();
        var _ce3	=	ce3Element.val();
        var _cf1	=	cf1Element.val();
        var _cf2	=	cf2Element.val();
        var _cf3	=	cf3Element.val();
        var _cg1	=	cg1Element.val();
        var _cg2	=	cg2Element.val();
        var _cg3	=	cg3Element.val();
        var _ch1	=	ch1Element.val();
        var _ch2	=	ch2Element.val();
        var _ci1	=	ci1Element.val();
        var _ci2	=	ci2Element.val();
        var _ci3	=	ci3Element.val();
        var _da1	=	da1Element.val();
        var _da2	=	da2Element.val();
        var _da3	=	da3Element.val();
        var _db1	=	db1Element.val();
        var _db2	=	db2Element.val();
        var _db3	=	db3Element.val();
        var _dc1	=	dc1Element.val();
        var _dc2	=	dc2Element.val();
        var _dc3	=	dc3Element.val();
        var _dd1	=	dd1Element.val();
        var _dd2	=	dd2Element.val();
        var _dd3	=	dd3Element.val();
        var _de1	=	de1Element.val();
        var _de2	=	de2Element.val();
        var _de3	=	de3Element.val();
        var _df1	=	df1Element.val();
        var _df2	=	df2Element.val();
        var _df3	=	df3Element.val();
        var _dg1	=	dg1Element.val();
        var _dg2	=	dg2Element.val();
        var _dg3	=	dg3Element.val();
        var _dh1	=	dh1Element.val();
        var _dh2	=	dh2Element.val();
        var _di1	=	di1Element.val();
        var _di2	=	di2Element.val();
        var _dj1	=	dj1Element.val();
        var _dj2	=	dj2Element.val();
        var _dj3	=	dj3Element.val();
        var _Ea1	=	Ea1Element.val();
        var _Ea2	=	Ea2Element.val();
        var _Ea3	=	Ea3Element.val();
        var _Eb1	=	Eb1Element.val();
        var _Eb2	=	Eb2Element.val();
        var _Eb3	=	Eb3Element.val();
        var _Ec1	=	Ec1Element.val();
        var _Ec2	=	Ec2Element.val();
        var _Ec3	=	Ec3Element.val();
        var _Ed1	=	Ed1Element.val();
        var _Ed2	=	Ed2Element.val();
        var _Ed3	=	Ed3Element.val();
        var _Ee1	=	Ee1Element.val();
        var _Ee2	=	Ee2Element.val();
        var _Ee3	=	Ee3Element.val();
        var _Ef1	=	Ef1Element.val();
        var _Ef2	=	Ef2Element.val();
        var _Ef3	=	Ef3Element.val();
        var _Ef2Lainnya	=	Ef2LainnyaElement.val();
        var _Eg1	=	Eg1Element.val();
        var _Eg2	=	Eg2Element.val();
        var _Eg3	=	Eg3Element.val();
        var _Eg4	=	Eg4Element.val();
        var _Eg5	=	Eg5Element.val();
        var _Eg6	=	Eg6Element.val();
        var _EgLainnya	=	EgLainnyaElement.val();
        var _Fa1	=	Fa1Element.val();
        var _Fa2	=	Fa2Element.val();
        var _Fb1	=	Fb1Element.val();
        var _Fb2	=	Fb2Element.val();
        var _Fc1	=	Fc1Element.val();
        var _Fc2	=	Fc2Element.val();
        var _Fd1	=	Fd1Element.val();
        var _Fd2	=	Fd2Element.val();
        var _Fe1	=	Fe1Element.val();
        var _Fe2	=	Fe2Element.val();
        var _Ff1	=	Ff1Element.val();
        var _Ff2	=	Ff2Element.val();
        var _Fg1	=	Fg1Element.val();
        var _Fg2	=	Fg2Element.val();
        var _Fg3	=	Fg3Element.val();
        var _Fh1	=	Fh1Element.val();
        var _Fh2	=	Fh2Element.val();
        var _Fi1	=	Fi1Element.val();
        var _Fi2	=	Fi2Element.val();
        var _Ga1	=	Ga1Element.val();
        var _Ga2	=	Ga2Element.val();
        var _Ga3	=	Ga3Element.val();
        var _Gb1	=	Gb1Element.val();
        var _Gb2	=	Gb2Element.val();
        var _Gb3	=	Gb3Element.val();
        var _Gc1	=	Gc1Element.val();
        var _Gd1	=	Gd1Element.val();
        var _Gd2	=	Gd2Element.val();
        var _Ge1	=	Ge1Element.val();
        var _Ge2	=	Ge2Element.val();
        var _Ge3	=	Ge3Element.val();
        var _Gf1	=	Gf1Element.val();
        var _Gf2	=	Gf2Element.val();
        var _Gg1	=	Gg1Element.val();
        var _Gg2	=	Gg2Element.val();
        var _Gg2Lainnya	=	Gg2LainnyaElement.val();
        var _Gg3	=	Gg3Element.val();
        var _Gh1	=	Gh1Element.val();
        var _Gh2	=	Gh2Element.val();
        var _Ha1	=	Ha1Element.val();
        var _Ha2	=	Ha2Element.val();
        var _Ha3	=	Ha3Element.val();
        var _Hb1	=	Hb1Element.val();
        var _Hb2	=	Hb2Element.val();
        var _Hb3	=	Hb3Element.val();
        var _Hc1	=	Hc1Element.val();
        var _Hc2	=	Hc2Element.val();
        var _Hc3	=	Hc3Element.val();
        var _Hd1	=	Hd1Element.val();
        var _Hd2	=	Hd2Element.val();
        var _Hd3	=	Hd3Element.val();
        var _He1	=	He1Element.val();
        var _He2	=	He2Element.val();
        var _He3	=	He3Element.val();
        var _Hf1	=	Hf1Element.val();
        var _Hf2	=	Hf2Element.val();
        var _Hf3	=	Hf3Element.val();
        var _Hg1	=	Hg1Element.val();
        var _Hg2	=	Hg2Element.val();
        var _Hg3	=	Hg3Element.val();
        var _Hh1	=	Hh1Element.val();
        var _Hh2	=	Hh2Element.val();
        var _Hh3	=	Hh3Element.val();
        var _Hi1	=	Hi1Element.val();
        var _Hi2	=	Hi2Element.val();
        var _Hi3	=	Hi3Element.val();
        var _Hj1	=	Hj1Element.val();
        var _Hj2	=	Hj2Element.val();
        var _Hj3	=	Hj3Element.val();
        var _Ia1	=	Ia1Element.val();
        var _Ia2	=	Ia2Element.val();
        var _Ia3	=	Ia3Element.val();
        var _Ib1	=	Ib1Element.val();
        var _Ib2	=	Ib2Element.val();
        var _Ib3	=	Ib3Element.val();
        var _Ic1	=	Ic1Element.val();
        var _Ic2	=	Ic2Element.val();
        var _Ic3	=	Ic3Element.val();
        var _Id1	=	Id1Element.val();
        var _Id2	=	Id2Element.val();
        var _Id3	=	Id3Element.val();
        var _Ie1	=	Ie1Element.val();
        var _Ie2	=	Ie2Element.val();
        var _Ie3	=	Ie3Element.val();
        var _If1	=	If1Element.val();
        var _If2	=	If2Element.val();
        var _If3	=	If3Element.val();
        var _Ig1	=	Ig1Element.val();
        var _Ig2	=	Ig2Element.val();
        var _Ig3	=	Ig3Element.val();
        var _Ih1	=	Ih1Element.val();
        var _Ih2	=	Ih2Element.val();
        var _Ih3	=	Ih3Element.val();
        var _Ii1	=	Ii1Element.val();
        var _Ii2	=	Ii2Element.val();
        var _Ii3	=	Ii3Element.val();
        var _Ja1	=	Ja1Element.val();
        var _Ja2	=	Ja2Element.val();
        var _Ja2Lainnya	=	Ja2LainnyaElement.val();
        var _Ja3	=	Ja3Element.val();
        var _Ja3Lainnya	=	Ja3LainnyaElement.val();
        var _Ka1	=	Ka1Element.val();
        var _Ka2	=	Ka2Element.val();
        var _Ka3	=	Ka3Element.val();
        var _Ka4	=	Ka4Element.val();
        var _Kb1	=	Kb1Element.val();
        var _Kb2	=	Kb2Element.val();
        var _Kb3	=	Kb3Element.val();
        var _Kb4	=	Kb4Element.val();
        var _Kc1	=	Kc1Element.val();
        var _Kc2	=	Kc2Element.val();
        var _Kd1	=	Kd1Element.val();
        var _Kd2	=	Kd2Element.val();
        var _Kd3	=	Kd3Element.val();
        var _Ke1	=	Ke1Element.val();
        var _Ke2	=	Ke2Element.val();
        var _Kf1	=	Kf1Element.val();
        var _Kg1	=	Kg1Element.val();
        var _Kh1	=	Kh1Element.val();
        var _La1	=	La1Element.val();
        var _La2	=	La2Element.val();
        var _La3	=	La3Element.val();
        var _La4	=	La4Element.val();
        var _LaLainLain	=	LaLainLainElement.val();
        var _Lb1	=	Lb1Element.val();
        var _Lb2	=	Lb2Element.val();
        var _Lb3	=	Lb3Element.val();
        var _Ma1	=	Ma1Element.val();
        var _Ma2	=	Ma2Element.val();
        var _Mb1	=	Mb1Element.val();
        var _Mb2	=	Mb2Element.val();
        var _Mc1	=	Mc1Element.val();
        var _Mc2	=	Mc2Element.val();
        var _Mc3	=	Mc3Element.val();
        var _Md1	=	Md1Element.val();
        var _Md2	=	Md2Element.val();
        var _Me1	=	Me1Element.val();
        var _Me2	=	Me2Element.val();
        var _Me3	=	Me3Element.val();
        var _Mf1	=	Mf1Element.val();
        var _Mf2	=	Mf2Element.val();
        var _Na1	=	Na1Element.val();
        var _Na2	=	Na2Element.val();
        var _Nb1	=	Nb1Element.val();
        var _Nb2	=	Nb2Element.val();
        var _Nc1	=	Nc1Element.val();
        var _Nc2	=	Nc2Element.val();
        var _Nd1	=	Nd1Element.val();
        var _Nd2	=	Nd2Element.val();
        var _Nd3	=	Nd3Element.val();
        var _Ne1	=	Ne1Element.val();
        var _Ne2	=	Ne2Element.val();
        var _Oa1	=	Oa1Element.val();
        var _Oa2	=	Oa2Element.val();
        var _Ob1	=	Ob1Element.val();
        var _Ob2	=	Ob2Element.val();
        var _Oc1	=	Oc1Element.val();
        var _Oc2	=	Oc2Element.val();
        var _Od1	=	Od1Element.val();
        var _Od2	=	Od2Element.val();
        var _Oe1	=	Oe1Element.val();
        var _Oe2	=	Oe2Element.val();
        var _Pa1	=	Pa1Element.val();
        var _Pa2	=	Pa2Element.val();
        var _Pa2Lainnya	=	Pa2LainnyaElement.val();
        var _Pa3	=	Pa3Element.val();
        var _Pb1	=	Pb1Element.val();
        var _Pb2	=	Pb2Element.val();
        var _Pc1	=	Pc1Element.val();
        var _Pc2	=	Pc2Element.val();
        var _Pd1	=	Pd1Element.val();
        var _Pd2	=	Pd2Element.val();
        var _Pe1	=	Pe1Element.val();
        var _Pe2	=	Pe2Element.val();
        var _Qa1	=	Qa1Element.val();
        var _Qa2	=	Qa2Element.val();
        var _Qa2Lainnya	=	Qa2LainnyaElement.val();
        var _Qa3	=	Qa3Element.val();
        var _Qb1	=	Qb1Element.val();
        var _Qb2	=	Qb2Element.val();
        var _Qc1	=	Qc1Element.val();
        var _Qc2	=	Qc2Element.val();
        var _Qd1	=	Qd1Element.val();
        var _Qd2	=	Qd2Element.val();
        var _Qe1	=	Qe1Element.val();
        var _Qe2	=	Qe2Element.val();
        var _Ra1	=	Ra1Element.val();
        var _Ra2	=	Ra2Element.val();
        var _Rb1	=	Rb1Element.val();
        var _Rb2	=	Rb2Element.val();
        var _Rc1	=	Rc1Element.val();
        var _Rc2	=	Rc2Element.val();
        var _Rd1	=	Rd1Element.val();
        var _Rd2	=	Rd2Element.val();
        var _Re1	=	Re1Element.val();
        var _Re2	=	Re2Element.val();
        var _Rf1	=	Rf1Element.val();
        var _Rf2	=	Rf2Element.val();
        var _Sa1	=	Sa1Element.val();
        var _Sa2	=	Sa2Element.val();
        var _Sa3	=	Sa3Element.val();
        var _Sb1	=	Sb1Element.val();
        var _Sb2	=	Sb2Element.val();
        var _Sc1	=	Sc1Element.val();
        var _Sc2	=	Sc2Element.val();
        var _Sd1	=	Sd1Element.val();
        var _Sd2	=	Sd2Element.val();
        var _Sd3	=	Sd3Element.val();
        var _Sd4	=	Sd4Element.val();
        var _Se1	=	Se1Element.val();
        var _Se2	=	Se2Element.val();
        var _Ta1	=	Ta1Element.val();
        var _Ta2	=	Ta2Element.val();
        var _Tb1	=	Tb1Element.val();
        var _Tb2	=	Tb2Element.val();
        var _Tb21	=	Tb21Element.val();
        var _Tb22	=	Tb22Element.val();
        var _Tb23	=	Tb23Element.val();
        var _Tb24	=	Tb24Element.val();
        var _Tb25	=	Tb25Element.val();
        var _Tb25Lainnya	=	Tb25LainnyaElement.val();
        var _Tc1	=	Tc1Element.val();
        var _Tc1Lainnya	=	Tc1LainnyaElement.val();
        var _Tc2	=	Tc2Element.val();
        var _La	=	LaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {
                id_pasien : _id_pasien,
                kunjungan : _kunjungan,
                tgl_periksa : _tgl_periksa,
                medrec : _medrec,
                aa1 : _aa1,
                aa2 : _aa2,
                aa3 : _aa3,
                ab1 : _ab1,
                ab2 : _ab2,
                ab3 : _ab3,
                ac1 : _ac1,
                ac2 : _ac2,
                ac3 : _ac3,
                ad1 : _ad1,
                ad2 : _ad2,
                ad3 : _ad3,
                ae1 : _ae1,
                ae2 : _ae2,
                ae3 : _ae3,
                af1 : _af1,
                af2 : _af2,
                af3 : _af3,
                ag1 : _ag1,
                ag2 : _ag2,
                ag3 : _ag3,
                ah1 : _ah1,
                ah2 : _ah2,
                ah3 : _ah3,
                ai1 : _ai1,
                ai2 : _ai2,
                ai3 : _ai3,
                aj1 : _aj1,
                aj2 : _aj2,
                aj3 : _aj3,
                ak1 : _ak1,
                ak2 : _ak2,
                ak3 : _ak3,
                al1 : _al1,
                al2 : _al2,
                al3 : _al3,
                am1 : _am1,
                am2 : _am2,
                am21 : _am21,
                am22 : _am22,
                am23 : _am23,
                am24 : _am24,
                am25 : _am25,
                am26 : _am26,
                am27 : _am27,
                am28 : _am28,
                am29 : _am29,
                am210 : _am210,
                am211 : _am211,
                am212 : _am212,
                am3 : _am3,
                an1 : _an1,
                an2 : _an2,
                ba1 : _ba1,
                ba2 : _ba2,
                ba3 : _ba3,
                bb1 : _bb1,
                bb2 : _bb2,
                bb3 : _bb3,
                bc1 : _bc1,
                bc2 : _bc2,
                bc3 : _bc3,
                bd1 : _bd1,
                bd2 : _bd2,
                bd3 : _bd3,
                be1 : _be1,
                be2 : _be2,
                be3 : _be3,
                bf1 : _bf1,
                bf2 : _bf2,
                bf3 : _bf3,
                bg1 : _bg1,
                bg2 : _bg2,
                bg3 : _bg3,
                bh1 : _bh1,
                bh2 : _bh2,
                bh3 : _bh3,
                bi1 : _bi1,
                bi2 : _bi2,
                bi3 : _bi3,
                bj1 : _bj1,
                bj2 : _bj2,
                bj3 : _bj3,
                bk1 : _bk1,
                bk2 : _bk2,
                bk3 : _bk3,
                ca1 : _ca1,
                ca2 : _ca2,
                ca3 : _ca3,
                cb1 : _cb1,
                cb2 : _cb2,
                cb3 : _cb3,
                cc1 : _cc1,
                cc2 : _cc2,
                cc3 : _cc3,
                cd1 : _cd1,
                cd2 : _cd2,
                cd3 : _cd3,
                ce1 : _ce1,
                ce2 : _ce2,
                ce3 : _ce3,
                cf1 : _cf1,
                cf2 : _cf2,
                cf3 : _cf3,
                cg1 : _cg1,
                cg2 : _cg2,
                cg3 : _cg3,
                ch1 : _ch1,
                ch2 : _ch2,
                ci1 : _ci1,
                ci2 : _ci2,
                ci3 : _ci3,
                da1 : _da1,
                da2 : _da2,
                da3 : _da3,
                db1 : _db1,
                db2 : _db2,
                db3 : _db3,
                dc1 : _dc1,
                dc2 : _dc2,
                dc3 : _dc3,
                dd1 : _dd1,
                dd2 : _dd2,
                dd3 : _dd3,
                de1 : _de1,
                de2 : _de2,
                de3 : _de3,
                df1 : _df1,
                df2 : _df2,
                df3 : _df3,
                dg1 : _dg1,
                dg2 : _dg2,
                dg3 : _dg3,
                dh1 : _dh1,
                dh2 : _dh2,
                di1 : _di1,
                di2 : _di2,
                dj1 : _dj1,
                dj2 : _dj2,
                dj3 : _dj3,
                ea1 : _Ea1,
                ea2 : _Ea2,
                ea3 : _Ea3,
                eb1 : _Eb1,
                eb2 : _Eb2,
                eb3 : _Eb3,
                ec1 : _Ec1,
                ec2 : _Ec2,
                ec3 : _Ec3,
                ed1 : _Ed1,
                ed2 : _Ed2,
                ed3 : _Ed3,
                ee1 : _Ee1,
                ee2 : _Ee2,
                ee3 : _Ee3,
                ef1 : _Ef1,
                ef2 : _Ef2,
                ef3 : _Ef3,
                ef2Lainnya : _Ef2Lainnya,
                eg1 : _Eg1,
                eg2 : _Eg2,
                eg3 : _Eg3,
                eg4 : _Eg4,
                eg5 : _Eg5,
                eg6 : _Eg6,
                egLainnya : _EgLainnya,
                fa1 : _Fa1,
                fa2 : _Fa2,
                fb1 : _Fb1,
                fb2 : _Fb2,
                fc1 : _Fc1,
                fc2 : _Fc2,
                fd1 : _Fd1,
                fd2 : _Fd2,
                fe1 : _Fe1,
                fe2 : _Fe2,
                ff1 : _Ff1,
                ff2 : _Ff2,
                fg1 : _Fg1,
                fg2 : _Fg2,
                fg3 : _Fg3,
                fh1 : _Fh1,
                fh2 : _Fh2,
                fi1 : _Fi1,
                fi2 : _Fi2,
                ga1 : _Ga1,
                ga2 : _Ga2,
                ga3 : _Ga3,
                gb1 : _Gb1,
                gb2 : _Gb2,
                gb3 : _Gb3,
                gc1 : _Gc1,
                gd1 : _Gd1,
                gd2 : _Gd2,
                ge1 : _Ge1,
                ge2 : _Ge2,
                ge3 : _Ge3,
                gf1 : _Gf1,
                gf2 : _Gf2,
                gg1 : _Gg1,
                gg2 : _Gg2,
                gg2Lainnya : _Gg2Lainnya,
                gg3 : _Gg3,
                gh1 : _Gh1,
                gh2 : _Gh2,
                ha1 : _Ha1,
                ha2 : _Ha2,
                ha3 : _Ha3,
                hb1 : _Hb1,
                hb2 : _Hb2,
                hb3 : _Hb3,
                hc1 : _Hc1,
                hc2 : _Hc2,
                hc3 : _Hc3,
                hd1 : _Hd1,
                hd2 : _Hd2,
                hd3 : _Hd3,
                he1 : _He1,
                he2 : _He2,
                he3 : _He3,
                hf1 : _Hf1,
                hf2 : _Hf2,
                hf3 : _Hf3,
                hg1 : _Hg1,
                hg2 : _Hg2,
                hg3 : _Hg3,
                hh1 : _Hh1,
                hh2 : _Hh2,
                hh3 : _Hh3,
                hi1 : _Hi1,
                hi2 : _Hi2,
                hi3 : _Hi3,
                hj1 : _Hj1,
                hj2 : _Hj2,
                hj3 : _Hj3,
                ia1 : _Ia1,
                ia2 : _Ia2,
                ia3 : _Ia3,
                ib1 : _Ib1,
                ib2 : _Ib2,
                ib3 : _Ib3,
                ic1 : _Ic1,
                ic2 : _Ic2,
                ic3 : _Ic3,
                id1 : _Id1,
                id2 : _Id2,
                id3 : _Id3,
                ie1 : _Ie1,
                ie2 : _Ie2,
                ie3 : _Ie3,
                if1 : _If1,
                if2 : _If2,
                if3 : _If3,
                ig1 : _Ig1,
                ig2 : _Ig2,
                ig3 : _Ig3,
                ih1 : _Ih1,
                ih2 : _Ih2,
                ih3 : _Ih3,
                ii1 : _Ii1,
                ii2 : _Ii2,
                ii3 : _Ii3,
                ja1 : _Ja1,
                ja2 : _Ja2,
                ja2Lainnya : _Ja2Lainnya,
                ja3 : _Ja3,
                ja3Lainnya : _Ja3Lainnya,
                ka1 : _Ka1,
                ka2 : _Ka2,
                ka3 : _Ka3,
                ka4 : _Ka4,
                kb1 : _Kb1,
                kb2 : _Kb2,
                kb3 : _Kb3,
                kb4 : _Kb4,
                kc1 : _Kc1,
                kc2 : _Kc2,
                kd1 : _Kd1,
                kd2 : _Kd2,
                kd3 : _Kd3,
                ke1 : _Ke1,
                ke2 : _Ke2,
                kf1 : _Kf1,
                kg1 : _Kg1,
                kh1 : _Kh1,
                la1 : _La1,
                la2 : _La2,
                la3 : _La3,
                la4 : _La4,
                laLainLain : _LaLainLain,
                lb1 : _Lb1,
                lb2 : _Lb2,
                lb3 : _Lb3,
                ma1 : _Ma1,
                ma2 : _Ma2,
                mb1 : _Mb1,
                mb2 : _Mb2,
                mc1 : _Mc1,
                mc2 : _Mc2,
                mc3 : _Mc3,
                md1 : _Md1,
                md2 : _Md2,
                me1 : _Me1,
                me2 : _Me2,
                me3 : _Me3,
                mf1 : _Mf1,
                mf2 : _Mf2,
                na1 : _Na1,
                na2 : _Na2,
                nb1 : _Nb1,
                nb2 : _Nb2,
                nc1 : _Nc1,
                nc2 : _Nc2,
                nd1 : _Nd1,
                nd2 : _Nd2,
                nd3 : _Nd3,
                ne1 : _Ne1,
                ne2 : _Ne2,
                oa1 : _Oa1,
                oa2 : _Oa2,
                ob1 : _Ob1,
                ob2 : _Ob2,
                oc1 : _Oc1,
                oc2 : _Oc2,
                od1 : _Od1,
                od2 : _Od2,
                oe1 : _Oe1,
                oe2 : _Oe2,
                pa1 : _Pa1,
                pa2 : _Pa2,
                pa2Lainnya : _Pa2Lainnya,
                pa3 : _Pa3,
                pb1 : _Pb1,
                pb2 : _Pb2,
                pc1 : _Pc1,
                pc2 : _Pc2,
                pd1 : _Pd1,
                pd2 : _Pd2,
                pe1 : _Pe1,
                pe2 : _Pe2,
                qa1 : _Qa1,
                qa2 : _Qa2,
                qa2Lainnya : _Qa2Lainnya,
                qa3 : _Qa3,
                qb1 : _Qb1,
                qb2 : _Qb2,
                qc1 : _Qc1,
                qc2 : _Qc2,
                qd1 : _Qd1,
                qd2 : _Qd2,
                qe1 : _Qe1,
                qe2 : _Qe2,
                ra1 : _Ra1,
                ra2 : _Ra2,
                rb1 : _Rb1,
                rb2 : _Rb2,
                rc1 : _Rc1,
                rc2 : _Rc2,
                rd1 : _Rd1,
                rd2 : _Rd2,
                re1 : _Re1,
                re2 : _Re2,
                rf1 : _Rf1,
                rf2 : _Rf2,
                sa1 : _Sa1,
                sa2 : _Sa2,
                sa3 : _Sa3,
                sb1 : _Sb1,
                sb2 : _Sb2,
                sc1 : _Sc1,
                sc2 : _Sc2,
                sd1 : _Sd1,
                sd2 : _Sd2,
                sd3 : _Sd3,
                sd4 : _Sd4,
                se1 : _Se1,
                se2 : _Se2,
                ta1 : _Ta1,
                ta2 : _Ta2,
                tb1 : _Tb1,
                tb2 : _Tb2,
                tb21 : _Tb21,
                tb22 : _Tb22,
                tb23 : _Tb23,
                tb24 : _Tb24,
                tb25 : _Tb25,
                tb25Lainnya : _Tb25Lainnya,
                tc1 : _Tc1,
                tc1Lainnya : _Tc1Lainnya,
                tc2 : _Tc2,
                la : _La,
				_token: _token
			}
        })
		.done(function(_return){
			$("#modal-create-anamnesis").modal("hide");
			ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-anamnesis');
		});
    });

    $('#modal-edit-anamnesis').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');
        var formElement = $(this);
		var idElement = formElement.find('input#id');
        var id_pasienElement = formElement.find('#id_pasien');
        var kunjunganElement = formElement.find('#kunjungan');
        var tgl_periksaElement = formElement.find('#tgl_periksa');
        var medrecElement = formElement.find('#medrec');
        var aa1Element = formElement.find('#aa1');
        var aa2Element = formElement.find('#aa2');
        var aa3Element = formElement.find('#aa3');
        var ab1Element = formElement.find('#ab1');
        var ab2Element = formElement.find('#ab2');
        var ab3Element = formElement.find('#ab3');
        var ac1Element = formElement.find('#ac1');
        var ac2Element = formElement.find('#ac2');
        var ac3Element = formElement.find('#ac3');
        var ad1Element = formElement.find('#ad1');
        var ad2Element = formElement.find('#ad2');
        var ad3Element = formElement.find('#ad3');
        var ae1Element = formElement.find('#ae1');
        var ae2Element = formElement.find('#ae2');
        var ae3Element = formElement.find('#ae3');
        var af1Element = formElement.find('#af1');
        var af2Element = formElement.find('#af2');
        var af3Element = formElement.find('#af3');
        var ag1Element = formElement.find('#ag1');
        var ag2Element = formElement.find('#ag2');
        var ag3Element = formElement.find('#ag3');
        var ah1Element = formElement.find('#ah1');
        var ah2Element = formElement.find('#ah2');
        var ah3Element = formElement.find('#ah3');
        var ai1Element = formElement.find('#ai1');
        var ai2Element = formElement.find('#ai2');
        var ai3Element = formElement.find('#ai3');
        var aj1Element = formElement.find('#aj1');
        var aj2Element = formElement.find('#aj2');
        var aj3Element = formElement.find('#aj3');
        var ak1Element = formElement.find('#ak1');
        var ak2Element = formElement.find('#ak2');
        var ak3Element = formElement.find('#ak3');
        var al1Element = formElement.find('#al1');
        var al2Element = formElement.find('#al2');
        var al3Element = formElement.find('#al3');
        var am1Element = formElement.find('#am1');
        var am2Element = formElement.find('#am2');
        var am21Element = formElement.find('#am21');
        var am22Element = formElement.find('#am22');
        var am23Element = formElement.find('#am23');
        var am24Element = formElement.find('#am24');
        var am25Element = formElement.find('#am25');
        var am26Element = formElement.find('#am26');
        var am27Element = formElement.find('#am27');
        var am28Element = formElement.find('#am28');
        var am29Element = formElement.find('#am29');
        var am210Element = formElement.find('#am210');
        var am211Element = formElement.find('#am211');
        var am212Element = formElement.find('#am212');
        var am3Element = formElement.find('#am3');
        var an1Element = formElement.find('#an1');
        var an2Element = formElement.find('#an2');
        var ba1Element = formElement.find('#ba1');
        var ba2Element = formElement.find('#ba2');
        var ba3Element = formElement.find('#ba3');
        var bb1Element = formElement.find('#bb1');
        var bb2Element = formElement.find('#bb2');
        var bb3Element = formElement.find('#bb3');
        var bc1Element = formElement.find('#bc1');
        var bc2Element = formElement.find('#bc2');
        var bc3Element = formElement.find('#bc3');
        var bd1Element = formElement.find('#bd1');
        var bd2Element = formElement.find('#bd2');
        var bd3Element = formElement.find('#bd3');
        var be1Element = formElement.find('#be1');
        var be2Element = formElement.find('#be2');
        var be3Element = formElement.find('#be3');
        var bf1Element = formElement.find('#bf1');
        var bf2Element = formElement.find('#bf2');
        var bf3Element = formElement.find('#bf3');
        var bg1Element = formElement.find('#bg1');
        var bg2Element = formElement.find('#bg2');
        var bg3Element = formElement.find('#bg3');
        var bh1Element = formElement.find('#bh1');
        var bh2Element = formElement.find('#bh2');
        var bh3Element = formElement.find('#bh3');
        var bi1Element = formElement.find('#bi1');
        var bi2Element = formElement.find('#bi2');
        var bi3Element = formElement.find('#bi3');
        var bj1Element = formElement.find('#bj1');
        var bj2Element = formElement.find('#bj2');
        var bj3Element = formElement.find('#bj3');
        var bk1Element = formElement.find('#bk1');
        var bk2Element = formElement.find('#bk2');
        var bk3Element = formElement.find('#bk3');
        var ca1Element = formElement.find('#ca1');
        var ca2Element = formElement.find('#ca2');
        var ca3Element = formElement.find('#ca3');
        var cb1Element = formElement.find('#cb1');
        var cb2Element = formElement.find('#cb2');
        var cb3Element = formElement.find('#cb3');
        var cc1Element = formElement.find('#cc1');
        var cc2Element = formElement.find('#cc2');
        var cc3Element = formElement.find('#cc3');
        var cd1Element = formElement.find('#cd1');
        var cd2Element = formElement.find('#cd2');
        var cd3Element = formElement.find('#cd3');
        var ce1Element = formElement.find('#ce1');
        var ce2Element = formElement.find('#ce2');
        var ce3Element = formElement.find('#ce3');
        var cf1Element = formElement.find('#cf1');
        var cf2Element = formElement.find('#cf2');
        var cf3Element = formElement.find('#cf3');
        var cg1Element = formElement.find('#cg1');
        var cg2Element = formElement.find('#cg2');
        var cg3Element = formElement.find('#cg3');
        var ch1Element = formElement.find('#ch1');
        var ch2Element = formElement.find('#ch2');
        var ci1Element = formElement.find('#ci1');
        var ci2Element = formElement.find('#ci2');
        var ci3Element = formElement.find('#ci3');
        var da1Element = formElement.find('#da1');
        var da2Element = formElement.find('#da2');
        var da3Element = formElement.find('#da3');
        var db1Element = formElement.find('#db1');
        var db2Element = formElement.find('#db2');
        var db3Element = formElement.find('#db3');
        var dc1Element = formElement.find('#dc1');
        var dc2Element = formElement.find('#dc2');
        var dc3Element = formElement.find('#dc3');
        var dd1Element = formElement.find('#dd1');
        var dd2Element = formElement.find('#dd2');
        var dd3Element = formElement.find('#dd3');
        var de1Element = formElement.find('#de1');
        var de2Element = formElement.find('#de2');
        var de3Element = formElement.find('#de3');
        var df1Element = formElement.find('#df1');
        var df2Element = formElement.find('#df2');
        var df3Element = formElement.find('#df3');
        var dg1Element = formElement.find('#dg1');
        var dg2Element = formElement.find('#dg2');
        var dg3Element = formElement.find('#dg3');
        var dh1Element = formElement.find('#dh1');
        var dh2Element = formElement.find('#dh2');
        var di1Element = formElement.find('#di1');
        var di2Element = formElement.find('#di2');
        var dj1Element = formElement.find('#dj1');
        var dj2Element = formElement.find('#dj2');
        var dj3Element = formElement.find('#dj3');
        var Ea1Element = formElement.find('#Ea1');
        var Ea2Element = formElement.find('#Ea2');
        var Ea3Element = formElement.find('#Ea3');
        var Eb1Element = formElement.find('#Eb1');
        var Eb2Element = formElement.find('#Eb2');
        var Eb3Element = formElement.find('#Eb3');
        var Ec1Element = formElement.find('#Ec1');
        var Ec2Element = formElement.find('#Ec2');
        var Ec3Element = formElement.find('#Ec3');
        var Ed1Element = formElement.find('#Ed1');
        var Ed2Element = formElement.find('#Ed2');
        var Ed3Element = formElement.find('#Ed3');
        var Ee1Element = formElement.find('#Ee1');
        var Ee2Element = formElement.find('#Ee2');
        var Ee3Element = formElement.find('#Ee3');
        var Ef1Element = formElement.find('#Ef1');
        var Ef2Element = formElement.find('#Ef2');
        var Ef3Element = formElement.find('#Ef3');
        var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
        var Eg1Element = formElement.find('#Eg1');
        var Eg2Element = formElement.find('#Eg2');
        var Eg3Element = formElement.find('#Eg3');
        var Eg4Element = formElement.find('#Eg4');
        var Eg5Element = formElement.find('#Eg5');
        var Eg6Element = formElement.find('#Eg6');
        var EgLainnyaElement = formElement.find('#EgLainnya');
        var Fa1Element = formElement.find('#Fa1');
        var Fa2Element = formElement.find('#Fa2');
        var Fb1Element = formElement.find('#Fb1');
        var Fb2Element = formElement.find('#Fb2');
        var Fc1Element = formElement.find('#Fc1');
        var Fc2Element = formElement.find('#Fc2');
        var Fd1Element = formElement.find('#Fd1');
        var Fd2Element = formElement.find('#Fd2');
        var Fe1Element = formElement.find('#Fe1');
        var Fe2Element = formElement.find('#Fe2');
        var Ff1Element = formElement.find('#Ff1');
        var Ff2Element = formElement.find('#Ff2');
        var Fg1Element = formElement.find('#Fg1');
        var Fg2Element = formElement.find('#Fg2');
        var Fg3Element = formElement.find('#Fg3');
        var Fh1Element = formElement.find('#Fh1');
        var Fh2Element = formElement.find('#Fh2');
        var Fi1Element = formElement.find('#Fi1');
        var Fi2Element = formElement.find('#Fi2');
        var Ga1Element = formElement.find('#Ga1');
        var Ga2Element = formElement.find('#Ga2');
        var Ga3Element = formElement.find('#Ga3');
        var Gb1Element = formElement.find('#Gb1');
        var Gb2Element = formElement.find('#Gb2');
        var Gb3Element = formElement.find('#Gb3');
        var Gc1Element = formElement.find('#Gc1');
        var Gd1Element = formElement.find('#Gd1');
        var Gd2Element = formElement.find('#Gd2');
        var Ge1Element = formElement.find('#Ge1');
        var Ge2Element = formElement.find('#Ge2');
        var Ge3Element = formElement.find('#Ge3');
        var Gf1Element = formElement.find('#Gf1');
        var Gf2Element = formElement.find('#Gf2');
        var Gg1Element = formElement.find('#Gg1');
        var Gg2Element = formElement.find('#Gg2');
        var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
        var Gg3Element = formElement.find('#Gg3');
        var Gh1Element = formElement.find('#Gh1');
        var Gh2Element = formElement.find('#Gh2');
        var Ha1Element = formElement.find('#Ha1');
        var Ha2Element = formElement.find('#Ha2');
        var Ha3Element = formElement.find('#Ha3');
        var Hb1Element = formElement.find('#Hb1');
        var Hb2Element = formElement.find('#Hb2');
        var Hb3Element = formElement.find('#Hb3');
        var Hc1Element = formElement.find('#Hc1');
        var Hc2Element = formElement.find('#Hc2');
        var Hc3Element = formElement.find('#Hc3');
        var Hd1Element = formElement.find('#Hd1');
        var Hd2Element = formElement.find('#Hd2');
        var Hd3Element = formElement.find('#Hd3');
        var He1Element = formElement.find('#He1');
        var He2Element = formElement.find('#He2');
        var He3Element = formElement.find('#He3');
        var Hf1Element = formElement.find('#Hf1');
        var Hf2Element = formElement.find('#Hf2');
        var Hf3Element = formElement.find('#Hf3');
        var Hg1Element = formElement.find('#Hg1');
        var Hg2Element = formElement.find('#Hg2');
        var Hg3Element = formElement.find('#Hg3');
        var Hh1Element = formElement.find('#Hh1');
        var Hh2Element = formElement.find('#Hh2');
        var Hh3Element = formElement.find('#Hh3');
        var Hi1Element = formElement.find('#Hi1');
        var Hi2Element = formElement.find('#Hi2');
        var Hi3Element = formElement.find('#Hi3');
        var Hj1Element = formElement.find('#Hj1');
        var Hj2Element = formElement.find('#Hj2');
        var Hj3Element = formElement.find('#Hj3');
        var Ia1Element = formElement.find('#Ia1');
        var Ia2Element = formElement.find('#Ia2');
        var Ia3Element = formElement.find('#Ia3');
        var Ib1Element = formElement.find('#Ib1');
        var Ib2Element = formElement.find('#Ib2');
        var Ib3Element = formElement.find('#Ib3');
        var Ic1Element = formElement.find('#Ic1');
        var Ic2Element = formElement.find('#Ic2');
        var Ic3Element = formElement.find('#Ic3');
        var Id1Element = formElement.find('#Id1');
        var Id2Element = formElement.find('#Id2');
        var Id3Element = formElement.find('#Id3');
        var Ie1Element = formElement.find('#Ie1');
        var Ie2Element = formElement.find('#Ie2');
        var Ie3Element = formElement.find('#Ie3');
        var If1Element = formElement.find('#If1');
        var If2Element = formElement.find('#If2');
        var If3Element = formElement.find('#If3');
        var Ig1Element = formElement.find('#Ig1');
        var Ig2Element = formElement.find('#Ig2');
        var Ig3Element = formElement.find('#Ig3');
        var Ih1Element = formElement.find('#Ih1');
        var Ih2Element = formElement.find('#Ih2');
        var Ih3Element = formElement.find('#Ih3');
        var Ii1Element = formElement.find('#Ii1');
        var Ii2Element = formElement.find('#Ii2');
        var Ii3Element = formElement.find('#Ii3');
        var Ja1Element = formElement.find('#Ja1');
        var Ja2Element = formElement.find('#Ja2');
        var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
        var Ja3Element = formElement.find('#Ja3');
        var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
        var Ka1Element = formElement.find('#Ka1');
        var Ka2Element = formElement.find('#Ka2');
        var Ka3Element = formElement.find('#Ka3');
        var Ka4Element = formElement.find('#Ka4');
        var Kb1Element = formElement.find('#Kb1');
        var Kb2Element = formElement.find('#Kb2');
        var Kb3Element = formElement.find('#Kb3');
        var Kb4Element = formElement.find('#Kb4');
        var Kc1Element = formElement.find('#Kc1');
        var Kc2Element = formElement.find('#Kc2');
        var Kd1Element = formElement.find('#Kd1');
        var Kd2Element = formElement.find('#Kd2');
        var Kd3Element = formElement.find('#Kd3');
        var Ke1Element = formElement.find('#Ke1');
        var Ke2Element = formElement.find('#Ke2');
        var Kf1Element = formElement.find('#Kf1');
        var Kg1Element = formElement.find('#Kg1');
        var Kh1Element = formElement.find('#Kh1');
        var La1Element = formElement.find('#La1');
        var La2Element = formElement.find('#La2');
        var La3Element = formElement.find('#La3');
        var La4Element = formElement.find('#La4');
        var LaLainLainElement = formElement.find('#LaLainLain');
        var Lb1Element = formElement.find('#Lb1');
        var Lb2Element = formElement.find('#Lb2');
        var Lb3Element = formElement.find('#Lb3');
        var Ma1Element = formElement.find('#Ma1');
        var Ma2Element = formElement.find('#Ma2');
        var Mb1Element = formElement.find('#Mb1');
        var Mb2Element = formElement.find('#Mb2');
        var Mc1Element = formElement.find('#Mc1');
        var Mc2Element = formElement.find('#Mc2');
        var Mc3Element = formElement.find('#Mc3');
        var Md1Element = formElement.find('#Md1');
        var Md2Element = formElement.find('#Md2');
        var Me1Element = formElement.find('#Me1');
        var Me2Element = formElement.find('#Me2');
        var Me3Element = formElement.find('#Me3');
        var Mf1Element = formElement.find('#Mf1');
        var Mf2Element = formElement.find('#Mf2');
        var Na1Element = formElement.find('#Na1');
        var Na2Element = formElement.find('#Na2');
        var Nb1Element = formElement.find('#Nb1');
        var Nb2Element = formElement.find('#Nb2');
        var Nc1Element = formElement.find('#Nc1');
        var Nc2Element = formElement.find('#Nc2');
        var Nd1Element = formElement.find('#Nd1');
        var Nd2Element = formElement.find('#Nd2');
        var Nd3Element = formElement.find('#Nd3');
        var Ne1Element = formElement.find('#Ne1');
        var Ne2Element = formElement.find('#Ne2');
        var Oa1Element = formElement.find('#Oa1');
        var Oa2Element = formElement.find('#Oa2');
        var Ob1Element = formElement.find('#Ob1');
        var Ob2Element = formElement.find('#Ob2');
        var Oc1Element = formElement.find('#Oc1');
        var Oc2Element = formElement.find('#Oc2');
        var Od1Element = formElement.find('#Od1');
        var Od2Element = formElement.find('#Od2');
        var Oe1Element = formElement.find('#Oe1');
        var Oe2Element = formElement.find('#Oe2');
        var Pa1Element = formElement.find('#Pa1');
        var Pa2Element = formElement.find('#Pa2');
        var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
        var Pa3Element = formElement.find('#Pa3');
        var Pb1Element = formElement.find('#Pb1');
        var Pb2Element = formElement.find('#Pb2');
        var Pc1Element = formElement.find('#Pc1');
        var Pc2Element = formElement.find('#Pc2');
        var Pd1Element = formElement.find('#Pd1');
        var Pd2Element = formElement.find('#Pd2');
        var Pe1Element = formElement.find('#Pe1');
        var Pe2Element = formElement.find('#Pe2');
        var Qa1Element = formElement.find('#Qa1');
        var Qa2Element = formElement.find('#Qa2');
        var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
        var Qa3Element = formElement.find('#Qa3');
        var Qb1Element = formElement.find('#Qb1');
        var Qb2Element = formElement.find('#Qb2');
        var Qc1Element = formElement.find('#Qc1');
        var Qc2Element = formElement.find('#Qc2');
        var Qd1Element = formElement.find('#Qd1');
        var Qd2Element = formElement.find('#Qd2');
        var Qe1Element = formElement.find('#Qe1');
        var Qe2Element = formElement.find('#Qe2');
        var Ra1Element = formElement.find('#Ra1');
        var Ra2Element = formElement.find('#Ra2');
        var Rb1Element = formElement.find('#Rb1');
        var Rb2Element = formElement.find('#Rb2');
        var Rc1Element = formElement.find('#Rc1');
        var Rc2Element = formElement.find('#Rc2');
        var Rd1Element = formElement.find('#Rd1');
        var Rd2Element = formElement.find('#Rd2');
        var Re1Element = formElement.find('#Re1');
        var Re2Element = formElement.find('#Re2');
        var Rf1Element = formElement.find('#Rf1');
        var Rf2Element = formElement.find('#Rf2');
        var Sa1Element = formElement.find('#Sa1');
        var Sa2Element = formElement.find('#Sa2');
        var Sa3Element = formElement.find('#Sa3');
        var Sb1Element = formElement.find('#Sb1');
        var Sb2Element = formElement.find('#Sb2');
        var Sc1Element = formElement.find('#Sc1');
        var Sc2Element = formElement.find('#Sc2');
        var Sd1Element = formElement.find('#Sd1');
        var Sd2Element = formElement.find('#Sd2');
        var Sd3Element = formElement.find('#Sd3');
        var Sd4Element = formElement.find('#Sd4');
        var Se1Element = formElement.find('#Se1');
        var Se2Element = formElement.find('#Se2');
        var Ta1Element = formElement.find('#Ta1');
        var Ta2Element = formElement.find('#Ta2');
        var Tb1Element = formElement.find('#Tb1');
        var Tb2Element = formElement.find('#Tb2');
        var Tb21Element = formElement.find('#Tb21');
        var Tb22Element = formElement.find('#Tb22');
        var Tb23Element = formElement.find('#Tb23');
        var Tb24Element = formElement.find('#Tb24');
        var Tb25Element = formElement.find('#Tb25');
        var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
        var Tc1Element = formElement.find('#Tc1');
        var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
        var Tc2Element = formElement.find('#Tc2');
        var LaElement = formElement.find('#La');
        idElement.val("");
        id_pasienElement.val("");
        kunjunganElement.val("");
        tgl_periksaElement.val("");
        medrecElement.val("");
        aa1Element.val("");
        aa2Element.val("");
        aa3Element.val("");
        ab1Element.val("");
        ab2Element.val("");
        ab3Element.val("");
        ac1Element.val("");
        ac2Element.val("");
        ac3Element.val("");
        ad1Element.val("");
        ad2Element.val("");
        ad3Element.val("");
        ae1Element.val("");
        ae2Element.val("");
        ae3Element.val("");
        af1Element.val("");
        af2Element.val("");
        af3Element.val("");
        ag1Element.val("");
        ag2Element.val("");
        ag3Element.val("");
        ah1Element.val("");
        ah2Element.val("");
        ah3Element.val("");
        ai1Element.val("");
        ai2Element.val("");
        ai3Element.val("");
        aj1Element.val("");
        aj2Element.val("");
        aj3Element.val("");
        ak1Element.val("");
        ak2Element.val("");
        ak3Element.val("");
        al1Element.val("");
        al2Element.val("");
        al3Element.val("");
        am1Element.val("");
        am2Element.val("");
        am21Element.val("");
        am22Element.val("");
        am23Element.val("");
        am24Element.val("");
        am25Element.val("");
        am26Element.val("");
        am27Element.val("");
        am28Element.val("");
        am29Element.val("");
        am210Element.val("");
        am211Element.val("");
        am212Element.val("");
        am3Element.val("");
        an1Element.val("");
        an2Element.val("");
        ba1Element.val("");
        ba2Element.val("");
        ba3Element.val("");
        bb1Element.val("");
        bb2Element.val("");
        bb3Element.val("");
        bc1Element.val("");
        bc2Element.val("");
        bc3Element.val("");
        bd1Element.val("");
        bd2Element.val("");
        bd3Element.val("");
        be1Element.val("");
        be2Element.val("");
        be3Element.val("");
        bf1Element.val("");
        bf2Element.val("");
        bf3Element.val("");
        bg1Element.val("");
        bg2Element.val("");
        bg3Element.val("");
        bh1Element.val("");
        bh2Element.val("");
        bh3Element.val("");
        bi1Element.val("");
        bi2Element.val("");
        bi3Element.val("");
        bj1Element.val("");
        bj2Element.val("");
        bj3Element.val("");
        bk1Element.val("");
        bk2Element.val("");
        bk3Element.val("");
        ca1Element.val("");
        ca2Element.val("");
        ca3Element.val("");
        cb1Element.val("");
        cb2Element.val("");
        cb3Element.val("");
        cc1Element.val("");
        cc2Element.val("");
        cc3Element.val("");
        cd1Element.val("");
        cd2Element.val("");
        cd3Element.val("");
        ce1Element.val("");
        ce2Element.val("");
        ce3Element.val("");
        cf1Element.val("");
        cf2Element.val("");
        cf3Element.val("");
        cg1Element.val("");
        cg2Element.val("");
        cg3Element.val("");
        ch1Element.val("");
        ch2Element.val("");
        ci1Element.val("");
        ci2Element.val("");
        ci3Element.val("");
        da1Element.val("");
        da2Element.val("");
        da3Element.val("");
        db1Element.val("");
        db2Element.val("");
        db3Element.val("");
        dc1Element.val("");
        dc2Element.val("");
        dc3Element.val("");
        dd1Element.val("");
        dd2Element.val("");
        dd3Element.val("");
        de1Element.val("");
        de2Element.val("");
        de3Element.val("");
        df1Element.val("");
        df2Element.val("");
        df3Element.val("");
        dg1Element.val("");
        dg2Element.val("");
        dg3Element.val("");
        dh1Element.val("");
        dh2Element.val("");
        di1Element.val("");
        di2Element.val("");
        dj1Element.val("");
        dj2Element.val("");
        dj3Element.val("");
        Ea1Element.val("");
        Ea2Element.val("");
        Ea3Element.val("");
        Eb1Element.val("");
        Eb2Element.val("");
        Eb3Element.val("");
        Ec1Element.val("");
        Ec2Element.val("");
        Ec3Element.val("");
        Ed1Element.val("");
        Ed2Element.val("");
        Ed3Element.val("");
        Ee1Element.val("");
        Ee2Element.val("");
        Ee3Element.val("");
        Ef1Element.val("");
        Ef2Element.val("");
        Ef3Element.val("");
        Ef2LainnyaElement.val("");
        Eg1Element.val("");
        Eg2Element.val("");
        Eg3Element.val("");
        Eg4Element.val("");
        Eg5Element.val("");
        Eg6Element.val("");
        EgLainnyaElement.val("");
        Fa1Element.val("");
        Fa2Element.val("");
        Fb1Element.val("");
        Fb2Element.val("");
        Fc1Element.val("");
        Fc2Element.val("");
        Fd1Element.val("");
        Fd2Element.val("");
        Fe1Element.val("");
        Fe2Element.val("");
        Ff1Element.val("");
        Ff2Element.val("");
        Fg1Element.val("");
        Fg2Element.val("");
        Fg3Element.val("");
        Fh1Element.val("");
        Fh2Element.val("");
        Fi1Element.val("");
        Fi2Element.val("");
        Ga1Element.val("");
        Ga2Element.val("");
        Ga3Element.val("");
        Gb1Element.val("");
        Gb2Element.val("");
        Gb3Element.val("");
        Gc1Element.val("");
        Gd1Element.val("");
        Gd2Element.val("");
        Ge1Element.val("");
        Ge2Element.val("");
        Ge3Element.val("");
        Gf1Element.val("");
        Gf2Element.val("");
        Gg1Element.val("");
        Gg2Element.val("");
        Gg2LainnyaElement.val("");
        Gg3Element.val("");
        Gh1Element.val("");
        Gh2Element.val("");
        Ha1Element.val("");
        Ha2Element.val("");
        Ha3Element.val("");
        Hb1Element.val("");
        Hb2Element.val("");
        Hb3Element.val("");
        Hc1Element.val("");
        Hc2Element.val("");
        Hc3Element.val("");
        Hd1Element.val("");
        Hd2Element.val("");
        Hd3Element.val("");
        He1Element.val("");
        He2Element.val("");
        He3Element.val("");
        Hf1Element.val("");
        Hf2Element.val("");
        Hf3Element.val("");
        Hg1Element.val("");
        Hg2Element.val("");
        Hg3Element.val("");
        Hh1Element.val("");
        Hh2Element.val("");
        Hh3Element.val("");
        Hi1Element.val("");
        Hi2Element.val("");
        Hi3Element.val("");
        Hj1Element.val("");
        Hj2Element.val("");
        Hj3Element.val("");
        Ia1Element.val("");
        Ia2Element.val("");
        Ia3Element.val("");
        Ib1Element.val("");
        Ib2Element.val("");
        Ib3Element.val("");
        Ic1Element.val("");
        Ic2Element.val("");
        Ic3Element.val("");
        Id1Element.val("");
        Id2Element.val("");
        Id3Element.val("");
        Ie1Element.val("");
        Ie2Element.val("");
        Ie3Element.val("");
        If1Element.val("");
        If2Element.val("");
        If3Element.val("");
        Ig1Element.val("");
        Ig2Element.val("");
        Ig3Element.val("");
        Ih1Element.val("");
        Ih2Element.val("");
        Ih3Element.val("");
        Ii1Element.val("");
        Ii2Element.val("");
        Ii3Element.val("");
        Ja1Element.val("");
        Ja2Element.val("");
        Ja2LainnyaElement.val("");
        Ja3Element.val("");
        Ja3LainnyaElement.val("");
        Ka1Element.val("");
        Ka2Element.val("");
        Ka3Element.val("");
        Ka4Element.val("");
        Kb1Element.val("");
        Kb2Element.val("");
        Kb3Element.val("");
        Kb4Element.val("");
        Kc1Element.val("");
        Kc2Element.val("");
        Kd1Element.val("");
        Kd2Element.val("");
        Kd3Element.val("");
        Ke1Element.val("");
        Ke2Element.val("");
        Kf1Element.val("");
        Kg1Element.val("");
        Kh1Element.val("");
        La1Element.val("");
        La2Element.val("");
        La3Element.val("");
        La4Element.val("");
        LaLainLainElement.val("");
        Lb1Element.val("");
        Lb2Element.val("");
        Lb3Element.val("");
        Ma1Element.val("");
        Ma2Element.val("");
        Mb1Element.val("");
        Mb2Element.val("");
        Mc1Element.val("");
        Mc2Element.val("");
        Mc3Element.val("");
        Md1Element.val("");
        Md2Element.val("");
        Me1Element.val("");
        Me2Element.val("");
        Me3Element.val("");
        Mf1Element.val("");
        Mf2Element.val("");
        Na1Element.val("");
        Na2Element.val("");
        Nb1Element.val("");
        Nb2Element.val("");
        Nc1Element.val("");
        Nc2Element.val("");
        Nd1Element.val("");
        Nd2Element.val("");
        Nd3Element.val("");
        Ne1Element.val("");
        Ne2Element.val("");
        Oa1Element.val("");
        Oa2Element.val("");
        Ob1Element.val("");
        Ob2Element.val("");
        Oc1Element.val("");
        Oc2Element.val("");
        Od1Element.val("");
        Od2Element.val("");
        Oe1Element.val("");
        Oe2Element.val("");
        Pa1Element.val("");
        Pa2Element.val("");
        Pa2LainnyaElement.val("");
        Pa3Element.val("");
        Pb1Element.val("");
        Pb2Element.val("");
        Pc1Element.val("");
        Pc2Element.val("");
        Pd1Element.val("");
        Pd2Element.val("");
        Pe1Element.val("");
        Pe2Element.val("");
        Qa1Element.val("");
        Qa2Element.val("");
        Qa2LainnyaElement.val("");
        Qa3Element.val("");
        Qb1Element.val("");
        Qb2Element.val("");
        Qc1Element.val("");
        Qc2Element.val("");
        Qd1Element.val("");
        Qd2Element.val("");
        Qe1Element.val("");
        Qe2Element.val("");
        Ra1Element.val("");
        Ra2Element.val("");
        Rb1Element.val("");
        Rb2Element.val("");
        Rc1Element.val("");
        Rc2Element.val("");
        Rd1Element.val("");
        Rd2Element.val("");
        Re1Element.val("");
        Re2Element.val("");
        Rf1Element.val("");
        Rf2Element.val("");
        Sa1Element.val("");
        Sa2Element.val("");
        Sa3Element.val("");
        Sb1Element.val("");
        Sb2Element.val("");
        Sc1Element.val("");
        Sc2Element.val("");
        Sd1Element.val("");
        Sd2Element.val("");
        Sd3Element.val("");
        Sd4Element.val("");
        Se1Element.val("");
        Se2Element.val("");
        Ta1Element.val("");
        Ta2Element.val("");
        Tb1Element.val("");
        Tb2Element.val("");
        Tb21Element.val("");
        Tb22Element.val("");
        Tb23Element.val("");
        Tb24Element.val("");
        Tb25Element.val("");
        Tb25LainnyaElement.val("");
        Tc1Element.val("");
        Tc1LainnyaElement.val("");
        Tc2Element.val("");
        LaElement.val("");

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
		.done(function(_return){
			idElement.val(_return.data.id);
			id_pasienElement.val(_return.data.id_pasien);
			kunjunganElement.val(_return.data.kunjungan);
			tgl_periksaElement.val(_return.data.tgl_periksa);
			medrecElement.val(_return.data.medrec);
			aa1Element.val(_return.data.aa1);
			aa2Element.val(_return.data.aa2);
			aa3Element.val(_return.data.aa3);
			ab1Element.val(_return.data.ab1);
			ab2Element.val(_return.data.ab2);
			ab3Element.val(_return.data.ab3);
			ac1Element.val(_return.data.ac1);
			ac2Element.val(_return.data.ac2);
			ac3Element.val(_return.data.ac3);
			ad1Element.val(_return.data.ad1);
			ad2Element.val(_return.data.ad2);
			ad3Element.val(_return.data.ad3);
			ae1Element.val(_return.data.ae1);
			ae2Element.val(_return.data.ae2);
			ae3Element.val(_return.data.ae3);
			af1Element.val(_return.data.af1);
			af2Element.val(_return.data.af2);
			af3Element.val(_return.data.af3);
			ag1Element.val(_return.data.ag1);
			ag2Element.val(_return.data.ag2);
			ag3Element.val(_return.data.ag3);
			ah1Element.val(_return.data.ah1);
			ah2Element.val(_return.data.ah2);
			ah3Element.val(_return.data.ah3);
			ai1Element.val(_return.data.ai1);
			ai2Element.val(_return.data.ai2);
			ai3Element.val(_return.data.ai3);
			aj1Element.val(_return.data.aj1);
			aj2Element.val(_return.data.aj2);
			aj3Element.val(_return.data.aj3);
			ak1Element.val(_return.data.ak1);
			ak2Element.val(_return.data.ak2);
			ak3Element.val(_return.data.ak3);
			al1Element.val(_return.data.al1);
			al2Element.val(_return.data.al2);
			al3Element.val(_return.data.al3);
			am1Element.val(_return.data.am1);
			am2Element.val(_return.data.am2);
			am21Element.val(_return.data.am21);
			am22Element.val(_return.data.am22);
			am23Element.val(_return.data.am23);
			am24Element.val(_return.data.am24);
			am25Element.val(_return.data.am25);
			am26Element.val(_return.data.am26);
			am27Element.val(_return.data.am27);
			am28Element.val(_return.data.am28);
			am29Element.val(_return.data.am29);
			am210Element.val(_return.data.am210);
			am211Element.val(_return.data.am211);
			am212Element.val(_return.data.am212);
			am3Element.val(_return.data.am3);
			an1Element.val(_return.data.an1);
			an2Element.val(_return.data.an2);
			ba1Element.val(_return.data.ba1);
			ba2Element.val(_return.data.ba2);
			ba3Element.val(_return.data.ba3);
			bb1Element.val(_return.data.bb1);
			bb2Element.val(_return.data.bb2);
			bb3Element.val(_return.data.bb3);
			bc1Element.val(_return.data.bc1);
			bc2Element.val(_return.data.bc2);
			bc3Element.val(_return.data.bc3);
			bd1Element.val(_return.data.bd1);
			bd2Element.val(_return.data.bd2);
			bd3Element.val(_return.data.bd3);
			be1Element.val(_return.data.be1);
			be2Element.val(_return.data.be2);
			be3Element.val(_return.data.be3);
			bf1Element.val(_return.data.bf1);
			bf2Element.val(_return.data.bf2);
			bf3Element.val(_return.data.bf3);
			bg1Element.val(_return.data.bg1);
			bg2Element.val(_return.data.bg2);
			bg3Element.val(_return.data.bg3);
			bh1Element.val(_return.data.bh1);
			bh2Element.val(_return.data.bh2);
			bh3Element.val(_return.data.bh3);
			bi1Element.val(_return.data.bi1);
			bi2Element.val(_return.data.bi2);
			bi3Element.val(_return.data.bi3);
			bj1Element.val(_return.data.bj1);
			bj2Element.val(_return.data.bj2);
			bj3Element.val(_return.data.bj3);
			bk1Element.val(_return.data.bk1);
			bk2Element.val(_return.data.bk2);
			bk3Element.val(_return.data.bk3);
			ca1Element.val(_return.data.ca1);
			ca2Element.val(_return.data.ca2);
			ca3Element.val(_return.data.ca3);
			cb1Element.val(_return.data.cb1);
			cb2Element.val(_return.data.cb2);
			cb3Element.val(_return.data.cb3);
			cc1Element.val(_return.data.cc1);
			cc2Element.val(_return.data.cc2);
			cc3Element.val(_return.data.cc3);
			cd1Element.val(_return.data.cd1);
			cd2Element.val(_return.data.cd2);
			cd3Element.val(_return.data.cd3);
			ce1Element.val(_return.data.ce1);
			ce2Element.val(_return.data.ce2);
			ce3Element.val(_return.data.ce3);
			cf1Element.val(_return.data.cf1);
			cf2Element.val(_return.data.cf2);
			cf3Element.val(_return.data.cf3);
			cg1Element.val(_return.data.cg1);
			cg2Element.val(_return.data.cg2);
			cg3Element.val(_return.data.cg3);
			ch1Element.val(_return.data.ch1);
			ch2Element.val(_return.data.ch2);
			ci1Element.val(_return.data.ci1);
			ci2Element.val(_return.data.ci2);
			ci3Element.val(_return.data.ci3);
			da1Element.val(_return.data.da1);
			da2Element.val(_return.data.da2);
			da3Element.val(_return.data.da3);
			db1Element.val(_return.data.db1);
			db2Element.val(_return.data.db2);
			db3Element.val(_return.data.db3);
			dc1Element.val(_return.data.dc1);
			dc2Element.val(_return.data.dc2);
			dc3Element.val(_return.data.dc3);
			dd1Element.val(_return.data.dd1);
			dd2Element.val(_return.data.dd2);
			dd3Element.val(_return.data.dd3);
			de1Element.val(_return.data.de1);
			de2Element.val(_return.data.de2);
			de3Element.val(_return.data.de3);
			df1Element.val(_return.data.df1);
			df2Element.val(_return.data.df2);
			df3Element.val(_return.data.df3);
			dg1Element.val(_return.data.dg1);
			dg2Element.val(_return.data.dg2);
			dg3Element.val(_return.data.dg3);
			dh1Element.val(_return.data.dh1);
			dh2Element.val(_return.data.dh2);
			di1Element.val(_return.data.di1);
			di2Element.val(_return.data.di2);
			dj1Element.val(_return.data.dj1);
			dj2Element.val(_return.data.dj2);
			dj3Element.val(_return.data.dj3);
			Ea1Element.val(_return.data.Ea1);
			Ea2Element.val(_return.data.Ea2);
			Ea3Element.val(_return.data.Ea3);
			Eb1Element.val(_return.data.Eb1);
			Eb2Element.val(_return.data.Eb2);
			Eb3Element.val(_return.data.Eb3);
			Ec1Element.val(_return.data.Ec1);
			Ec2Element.val(_return.data.Ec2);
			Ec3Element.val(_return.data.Ec3);
			Ed1Element.val(_return.data.Ed1);
			Ed2Element.val(_return.data.Ed2);
			Ed3Element.val(_return.data.Ed3);
			Ee1Element.val(_return.data.Ee1);
			Ee2Element.val(_return.data.Ee2);
			Ee3Element.val(_return.data.Ee3);
			Ef1Element.val(_return.data.Ef1);
			Ef2Element.val(_return.data.Ef2);
			Ef3Element.val(_return.data.Ef3);
			Ef2LainnyaElement.val(_return.data.Ef2Lainnya);
			Eg1Element.val(_return.data.Eg1);
			Eg2Element.val(_return.data.Eg2);
			Eg3Element.val(_return.data.Eg3);
			Eg4Element.val(_return.data.Eg4);
			Eg5Element.val(_return.data.Eg5);
			Eg6Element.val(_return.data.Eg6);
			EgLainnyaElement.val(_return.data.EgLainnya);
			Fa1Element.val(_return.data.Fa1);
			Fa2Element.val(_return.data.Fa2);
			Fb1Element.val(_return.data.Fb1);
			Fb2Element.val(_return.data.Fb2);
			Fc1Element.val(_return.data.Fc1);
			Fc2Element.val(_return.data.Fc2);
			Fd1Element.val(_return.data.Fd1);
			Fd2Element.val(_return.data.Fd2);
			Fe1Element.val(_return.data.Fe1);
			Fe2Element.val(_return.data.Fe2);
			Ff1Element.val(_return.data.Ff1);
			Ff2Element.val(_return.data.Ff2);
			Fg1Element.val(_return.data.Fg1);
			Fg2Element.val(_return.data.Fg2);
			Fg3Element.val(_return.data.Fg3);
			Fh1Element.val(_return.data.Fh1);
			Fh2Element.val(_return.data.Fh2);
			Fi1Element.val(_return.data.Fi1);
			Fi2Element.val(_return.data.Fi2);
			Ga1Element.val(_return.data.Ga1);
			Ga2Element.val(_return.data.Ga2);
			Ga3Element.val(_return.data.Ga3);
			Gb1Element.val(_return.data.Gb1);
			Gb2Element.val(_return.data.Gb2);
			Gb3Element.val(_return.data.Gb3);
			Gc1Element.val(_return.data.Gc1);
			Gd1Element.val(_return.data.Gd1);
			Gd2Element.val(_return.data.Gd2);
			Ge1Element.val(_return.data.Ge1);
			Ge2Element.val(_return.data.Ge2);
			Ge3Element.val(_return.data.Ge3);
			Gf1Element.val(_return.data.Gf1);
			Gf2Element.val(_return.data.Gf2);
			Gg1Element.val(_return.data.Gg1);
			Gg2Element.val(_return.data.Gg2);
			Gg2LainnyaElement.val(_return.data.Gg2Lainnya);
			Gg3Element.val(_return.data.Gg3);
			Gh1Element.val(_return.data.Gh1);
			Gh2Element.val(_return.data.Gh2);
			Ha1Element.val(_return.data.Ha1);
			Ha2Element.val(_return.data.Ha2);
			Ha3Element.val(_return.data.Ha3);
			Hb1Element.val(_return.data.Hb1);
			Hb2Element.val(_return.data.Hb2);
			Hb3Element.val(_return.data.Hb3);
			Hc1Element.val(_return.data.Hc1);
			Hc2Element.val(_return.data.Hc2);
			Hc3Element.val(_return.data.Hc3);
			Hd1Element.val(_return.data.Hd1);
			Hd2Element.val(_return.data.Hd2);
			Hd3Element.val(_return.data.Hd3);
			He1Element.val(_return.data.He1);
			He2Element.val(_return.data.He2);
			He3Element.val(_return.data.He3);
			Hf1Element.val(_return.data.Hf1);
			Hf2Element.val(_return.data.Hf2);
			Hf3Element.val(_return.data.Hf3);
			Hg1Element.val(_return.data.Hg1);
			Hg2Element.val(_return.data.Hg2);
			Hg3Element.val(_return.data.Hg3);
			Hh1Element.val(_return.data.Hh1);
			Hh2Element.val(_return.data.Hh2);
			Hh3Element.val(_return.data.Hh3);
			Hi1Element.val(_return.data.Hi1);
			Hi2Element.val(_return.data.Hi2);
			Hi3Element.val(_return.data.Hi3);
			Hj1Element.val(_return.data.Hj1);
			Hj2Element.val(_return.data.Hj2);
			Hj3Element.val(_return.data.Hj3);
			Ia1Element.val(_return.data.Ia1);
			Ia2Element.val(_return.data.Ia2);
			Ia3Element.val(_return.data.Ia3);
			Ib1Element.val(_return.data.Ib1);
			Ib2Element.val(_return.data.Ib2);
			Ib3Element.val(_return.data.Ib3);
			Ic1Element.val(_return.data.Ic1);
			Ic2Element.val(_return.data.Ic2);
			Ic3Element.val(_return.data.Ic3);
			Id1Element.val(_return.data.Id1);
			Id2Element.val(_return.data.Id2);
			Id3Element.val(_return.data.Id3);
			Ie1Element.val(_return.data.Ie1);
			Ie2Element.val(_return.data.Ie2);
			Ie3Element.val(_return.data.Ie3);
			If1Element.val(_return.data.If1);
			If2Element.val(_return.data.If2);
			If3Element.val(_return.data.If3);
			Ig1Element.val(_return.data.Ig1);
			Ig2Element.val(_return.data.Ig2);
			Ig3Element.val(_return.data.Ig3);
			Ih1Element.val(_return.data.Ih1);
			Ih2Element.val(_return.data.Ih2);
			Ih3Element.val(_return.data.Ih3);
			Ii1Element.val(_return.data.Ii1);
			Ii2Element.val(_return.data.Ii2);
			Ii3Element.val(_return.data.Ii3);
			Ja1Element.val(_return.data.Ja1);
			Ja2Element.val(_return.data.Ja2);
			Ja2LainnyaElement.val(_return.data.Ja2Lainnya);
			Ja3Element.val(_return.data.Ja3);
			Ja3LainnyaElement.val(_return.data.Ja3Lainnya);
			Ka1Element.val(_return.data.Ka1);
			Ka2Element.val(_return.data.Ka2);
			Ka3Element.val(_return.data.Ka3);
			Ka4Element.val(_return.data.Ka4);
			Kb1Element.val(_return.data.Kb1);
			Kb2Element.val(_return.data.Kb2);
			Kb3Element.val(_return.data.Kb3);
			Kb4Element.val(_return.data.Kb4);
			Kc1Element.val(_return.data.Kc1);
			Kc2Element.val(_return.data.Kc2);
			Kd1Element.val(_return.data.Kd1);
			Kd2Element.val(_return.data.Kd2);
			Kd3Element.val(_return.data.Kd3);
			Ke1Element.val(_return.data.Ke1);
			Ke2Element.val(_return.data.Ke2);
			Kf1Element.val(_return.data.Kf1);
			Kg1Element.val(_return.data.Kg1);
			Kh1Element.val(_return.data.Kh1);
			La1Element.val(_return.data.La1);
			La2Element.val(_return.data.La2);
			La3Element.val(_return.data.La3);
			La4Element.val(_return.data.La4);
			LaLainLainElement.val(_return.data.LaLainLain);
			Lb1Element.val(_return.data.Lb1);
			Lb2Element.val(_return.data.Lb2);
			Lb3Element.val(_return.data.Lb3);
			Ma1Element.val(_return.data.Ma1);
			Ma2Element.val(_return.data.Ma2);
			Mb1Element.val(_return.data.Mb1);
			Mb2Element.val(_return.data.Mb2);
			Mc1Element.val(_return.data.Mc1);
			Mc2Element.val(_return.data.Mc2);
			Mc3Element.val(_return.data.Mc3);
			Md1Element.val(_return.data.Md1);
			Md2Element.val(_return.data.Md2);
			Me1Element.val(_return.data.Me1);
			Me2Element.val(_return.data.Me2);
			Me3Element.val(_return.data.Me3);
			Mf1Element.val(_return.data.Mf1);
			Mf2Element.val(_return.data.Mf2);
			Na1Element.val(_return.data.Na1);
			Na2Element.val(_return.data.Na2);
			Nb1Element.val(_return.data.Nb1);
			Nb2Element.val(_return.data.Nb2);
			Nc1Element.val(_return.data.Nc1);
			Nc2Element.val(_return.data.Nc2);
			Nd1Element.val(_return.data.Nd1);
			Nd2Element.val(_return.data.Nd2);
			Nd3Element.val(_return.data.Nd3);
			Ne1Element.val(_return.data.Ne1);
			Ne2Element.val(_return.data.Ne2);
			Oa1Element.val(_return.data.Oa1);
			Oa2Element.val(_return.data.Oa2);
			Ob1Element.val(_return.data.Ob1);
			Ob2Element.val(_return.data.Ob2);
			Oc1Element.val(_return.data.Oc1);
			Oc2Element.val(_return.data.Oc2);
			Od1Element.val(_return.data.Od1);
			Od2Element.val(_return.data.Od2);
			Oe1Element.val(_return.data.Oe1);
			Oe2Element.val(_return.data.Oe2);
			Pa1Element.val(_return.data.Pa1);
			Pa2Element.val(_return.data.Pa2);
			Pa2LainnyaElement.val(_return.data.Pa2Lainnya);
			Pa3Element.val(_return.data.Pa3);
			Pb1Element.val(_return.data.Pb1);
			Pb2Element.val(_return.data.Pb2);
			Pc1Element.val(_return.data.Pc1);
			Pc2Element.val(_return.data.Pc2);
			Pd1Element.val(_return.data.Pd1);
			Pd2Element.val(_return.data.Pd2);
			Pe1Element.val(_return.data.Pe1);
			Pe2Element.val(_return.data.Pe2);
			Qa1Element.val(_return.data.Qa1);
			Qa2Element.val(_return.data.Qa2);
			Qa2LainnyaElement.val(_return.data.Qa2Lainnya);
			Qa3Element.val(_return.data.Qa3);
			Qb1Element.val(_return.data.Qb1);
			Qb2Element.val(_return.data.Qb2);
			Qc1Element.val(_return.data.Qc1);
			Qc2Element.val(_return.data.Qc2);
			Qd1Element.val(_return.data.Qd1);
			Qd2Element.val(_return.data.Qd2);
			Qe1Element.val(_return.data.Qe1);
			Qe2Element.val(_return.data.Qe2);
			Ra1Element.val(_return.data.Ra1);
			Ra2Element.val(_return.data.Ra2);
			Rb1Element.val(_return.data.Rb1);
			Rb2Element.val(_return.data.Rb2);
			Rc1Element.val(_return.data.Rc1);
			Rc2Element.val(_return.data.Rc2);
			Rd1Element.val(_return.data.Rd1);
			Rd2Element.val(_return.data.Rd2);
			Re1Element.val(_return.data.Re1);
			Re2Element.val(_return.data.Re2);
			Rf1Element.val(_return.data.Rf1);
			Rf2Element.val(_return.data.Rf2);
			Sa1Element.val(_return.data.Sa1);
			Sa2Element.val(_return.data.Sa2);
			Sa3Element.val(_return.data.Sa3);
			Sb1Element.val(_return.data.Sb1);
			Sb2Element.val(_return.data.Sb2);
			Sc1Element.val(_return.data.Sc1);
			Sc2Element.val(_return.data.Sc2);
			Sd1Element.val(_return.data.Sd1);
			Sd2Element.val(_return.data.Sd2);
			Sd3Element.val(_return.data.Sd3);
			Sd4Element.val(_return.data.Sd4);
			Se1Element.val(_return.data.Se1);
			Se2Element.val(_return.data.Se2);
			Ta1Element.val(_return.data.Ta1);
			Ta2Element.val(_return.data.Ta2);
			Tb1Element.val(_return.data.Tb1);
			Tb2Element.val(_return.data.Tb2);
			Tb21Element.val(_return.data.Tb21);
			Tb22Element.val(_return.data.Tb22);
			Tb23Element.val(_return.data.Tb23);
			Tb24Element.val(_return.data.Tb24);
			Tb25Element.val(_return.data.Tb25);
			Tb25LainnyaElement.val(_return.data.Tb25Lainnya);
			Tc1Element.val(_return.data.Tc1);
			Tc1LainnyaElement.val(_return.data.Tc1Lainnya);
			Tc2Element.val(_return.data.Tc2);
			LaElement.val(_return.data.La);
		});
    });

    $(".js-anamnesis-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-anamnesis');
        var idElement = formElement.find('input#id');
        var id_pasienElement = formElement.find('#id_pasien');
        var kunjunganElement = formElement.find('#kunjungan');
        var tgl_periksaElement = formElement.find('#tgl_periksa');
        var medrecElement = formElement.find('#medrec');
        var aa1Element = formElement.find('#aa1');
        var aa2Element = formElement.find('#aa2');
        var aa3Element = formElement.find('#aa3');
        var ab1Element = formElement.find('#ab1');
        var ab2Element = formElement.find('#ab2');
        var ab3Element = formElement.find('#ab3');
        var ac1Element = formElement.find('#ac1');
        var ac2Element = formElement.find('#ac2');
        var ac3Element = formElement.find('#ac3');
        var ad1Element = formElement.find('#ad1');
        var ad2Element = formElement.find('#ad2');
        var ad3Element = formElement.find('#ad3');
        var ae1Element = formElement.find('#ae1');
        var ae2Element = formElement.find('#ae2');
        var ae3Element = formElement.find('#ae3');
        var af1Element = formElement.find('#af1');
        var af2Element = formElement.find('#af2');
        var af3Element = formElement.find('#af3');
        var ag1Element = formElement.find('#ag1');
        var ag2Element = formElement.find('#ag2');
        var ag3Element = formElement.find('#ag3');
        var ah1Element = formElement.find('#ah1');
        var ah2Element = formElement.find('#ah2');
        var ah3Element = formElement.find('#ah3');
        var ai1Element = formElement.find('#ai1');
        var ai2Element = formElement.find('#ai2');
        var ai3Element = formElement.find('#ai3');
        var aj1Element = formElement.find('#aj1');
        var aj2Element = formElement.find('#aj2');
        var aj3Element = formElement.find('#aj3');
        var ak1Element = formElement.find('#ak1');
        var ak2Element = formElement.find('#ak2');
        var ak3Element = formElement.find('#ak3');
        var al1Element = formElement.find('#al1');
        var al2Element = formElement.find('#al2');
        var al3Element = formElement.find('#al3');
        var am1Element = formElement.find('#am1');
        var am2Element = formElement.find('#am2');
        var am21Element = formElement.find('#am21');
        var am22Element = formElement.find('#am22');
        var am23Element = formElement.find('#am23');
        var am24Element = formElement.find('#am24');
        var am25Element = formElement.find('#am25');
        var am26Element = formElement.find('#am26');
        var am27Element = formElement.find('#am27');
        var am28Element = formElement.find('#am28');
        var am29Element = formElement.find('#am29');
        var am210Element = formElement.find('#am210');
        var am211Element = formElement.find('#am211');
        var am212Element = formElement.find('#am212');
        var am3Element = formElement.find('#am3');
        var an1Element = formElement.find('#an1');
        var an2Element = formElement.find('#an2');
        var ba1Element = formElement.find('#ba1');
        var ba2Element = formElement.find('#ba2');
        var ba3Element = formElement.find('#ba3');
        var bb1Element = formElement.find('#bb1');
        var bb2Element = formElement.find('#bb2');
        var bb3Element = formElement.find('#bb3');
        var bc1Element = formElement.find('#bc1');
        var bc2Element = formElement.find('#bc2');
        var bc3Element = formElement.find('#bc3');
        var bd1Element = formElement.find('#bd1');
        var bd2Element = formElement.find('#bd2');
        var bd3Element = formElement.find('#bd3');
        var be1Element = formElement.find('#be1');
        var be2Element = formElement.find('#be2');
        var be3Element = formElement.find('#be3');
        var bf1Element = formElement.find('#bf1');
        var bf2Element = formElement.find('#bf2');
        var bf3Element = formElement.find('#bf3');
        var bg1Element = formElement.find('#bg1');
        var bg2Element = formElement.find('#bg2');
        var bg3Element = formElement.find('#bg3');
        var bh1Element = formElement.find('#bh1');
        var bh2Element = formElement.find('#bh2');
        var bh3Element = formElement.find('#bh3');
        var bi1Element = formElement.find('#bi1');
        var bi2Element = formElement.find('#bi2');
        var bi3Element = formElement.find('#bi3');
        var bj1Element = formElement.find('#bj1');
        var bj2Element = formElement.find('#bj2');
        var bj3Element = formElement.find('#bj3');
        var bk1Element = formElement.find('#bk1');
        var bk2Element = formElement.find('#bk2');
        var bk3Element = formElement.find('#bk3');
        var ca1Element = formElement.find('#ca1');
        var ca2Element = formElement.find('#ca2');
        var ca3Element = formElement.find('#ca3');
        var cb1Element = formElement.find('#cb1');
        var cb2Element = formElement.find('#cb2');
        var cb3Element = formElement.find('#cb3');
        var cc1Element = formElement.find('#cc1');
        var cc2Element = formElement.find('#cc2');
        var cc3Element = formElement.find('#cc3');
        var cd1Element = formElement.find('#cd1');
        var cd2Element = formElement.find('#cd2');
        var cd3Element = formElement.find('#cd3');
        var ce1Element = formElement.find('#ce1');
        var ce2Element = formElement.find('#ce2');
        var ce3Element = formElement.find('#ce3');
        var cf1Element = formElement.find('#cf1');
        var cf2Element = formElement.find('#cf2');
        var cf3Element = formElement.find('#cf3');
        var cg1Element = formElement.find('#cg1');
        var cg2Element = formElement.find('#cg2');
        var cg3Element = formElement.find('#cg3');
        var ch1Element = formElement.find('#ch1');
        var ch2Element = formElement.find('#ch2');
        var ci1Element = formElement.find('#ci1');
        var ci2Element = formElement.find('#ci2');
        var ci3Element = formElement.find('#ci3');
        var da1Element = formElement.find('#da1');
        var da2Element = formElement.find('#da2');
        var da3Element = formElement.find('#da3');
        var db1Element = formElement.find('#db1');
        var db2Element = formElement.find('#db2');
        var db3Element = formElement.find('#db3');
        var dc1Element = formElement.find('#dc1');
        var dc2Element = formElement.find('#dc2');
        var dc3Element = formElement.find('#dc3');
        var dd1Element = formElement.find('#dd1');
        var dd2Element = formElement.find('#dd2');
        var dd3Element = formElement.find('#dd3');
        var de1Element = formElement.find('#de1');
        var de2Element = formElement.find('#de2');
        var de3Element = formElement.find('#de3');
        var df1Element = formElement.find('#df1');
        var df2Element = formElement.find('#df2');
        var df3Element = formElement.find('#df3');
        var dg1Element = formElement.find('#dg1');
        var dg2Element = formElement.find('#dg2');
        var dg3Element = formElement.find('#dg3');
        var dh1Element = formElement.find('#dh1');
        var dh2Element = formElement.find('#dh2');
        var di1Element = formElement.find('#di1');
        var di2Element = formElement.find('#di2');
        var dj1Element = formElement.find('#dj1');
        var dj2Element = formElement.find('#dj2');
        var dj3Element = formElement.find('#dj3');
        var Ea1Element = formElement.find('#Ea1');
        var Ea2Element = formElement.find('#Ea2');
        var Ea3Element = formElement.find('#Ea3');
        var Eb1Element = formElement.find('#Eb1');
        var Eb2Element = formElement.find('#Eb2');
        var Eb3Element = formElement.find('#Eb3');
        var Ec1Element = formElement.find('#Ec1');
        var Ec2Element = formElement.find('#Ec2');
        var Ec3Element = formElement.find('#Ec3');
        var Ed1Element = formElement.find('#Ed1');
        var Ed2Element = formElement.find('#Ed2');
        var Ed3Element = formElement.find('#Ed3');
        var Ee1Element = formElement.find('#Ee1');
        var Ee2Element = formElement.find('#Ee2');
        var Ee3Element = formElement.find('#Ee3');
        var Ef1Element = formElement.find('#Ef1');
        var Ef2Element = formElement.find('#Ef2');
        var Ef3Element = formElement.find('#Ef3');
        var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
        var Eg1Element = formElement.find('#Eg1');
        var Eg2Element = formElement.find('#Eg2');
        var Eg3Element = formElement.find('#Eg3');
        var Eg4Element = formElement.find('#Eg4');
        var Eg5Element = formElement.find('#Eg5');
        var Eg6Element = formElement.find('#Eg6');
        var EgLainnyaElement = formElement.find('#EgLainnya');
        var Fa1Element = formElement.find('#Fa1');
        var Fa2Element = formElement.find('#Fa2');
        var Fb1Element = formElement.find('#Fb1');
        var Fb2Element = formElement.find('#Fb2');
        var Fc1Element = formElement.find('#Fc1');
        var Fc2Element = formElement.find('#Fc2');
        var Fd1Element = formElement.find('#Fd1');
        var Fd2Element = formElement.find('#Fd2');
        var Fe1Element = formElement.find('#Fe1');
        var Fe2Element = formElement.find('#Fe2');
        var Ff1Element = formElement.find('#Ff1');
        var Ff2Element = formElement.find('#Ff2');
        var Fg1Element = formElement.find('#Fg1');
        var Fg2Element = formElement.find('#Fg2');
        var Fg3Element = formElement.find('#Fg3');
        var Fh1Element = formElement.find('#Fh1');
        var Fh2Element = formElement.find('#Fh2');
        var Fi1Element = formElement.find('#Fi1');
        var Fi2Element = formElement.find('#Fi2');
        var Ga1Element = formElement.find('#Ga1');
        var Ga2Element = formElement.find('#Ga2');
        var Ga3Element = formElement.find('#Ga3');
        var Gb1Element = formElement.find('#Gb1');
        var Gb2Element = formElement.find('#Gb2');
        var Gb3Element = formElement.find('#Gb3');
        var Gc1Element = formElement.find('#Gc1');
        var Gd1Element = formElement.find('#Gd1');
        var Gd2Element = formElement.find('#Gd2');
        var Ge1Element = formElement.find('#Ge1');
        var Ge2Element = formElement.find('#Ge2');
        var Ge3Element = formElement.find('#Ge3');
        var Gf1Element = formElement.find('#Gf1');
        var Gf2Element = formElement.find('#Gf2');
        var Gg1Element = formElement.find('#Gg1');
        var Gg2Element = formElement.find('#Gg2');
        var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
        var Gg3Element = formElement.find('#Gg3');
        var Gh1Element = formElement.find('#Gh1');
        var Gh2Element = formElement.find('#Gh2');
        var Ha1Element = formElement.find('#Ha1');
        var Ha2Element = formElement.find('#Ha2');
        var Ha3Element = formElement.find('#Ha3');
        var Hb1Element = formElement.find('#Hb1');
        var Hb2Element = formElement.find('#Hb2');
        var Hb3Element = formElement.find('#Hb3');
        var Hc1Element = formElement.find('#Hc1');
        var Hc2Element = formElement.find('#Hc2');
        var Hc3Element = formElement.find('#Hc3');
        var Hd1Element = formElement.find('#Hd1');
        var Hd2Element = formElement.find('#Hd2');
        var Hd3Element = formElement.find('#Hd3');
        var He1Element = formElement.find('#He1');
        var He2Element = formElement.find('#He2');
        var He3Element = formElement.find('#He3');
        var Hf1Element = formElement.find('#Hf1');
        var Hf2Element = formElement.find('#Hf2');
        var Hf3Element = formElement.find('#Hf3');
        var Hg1Element = formElement.find('#Hg1');
        var Hg2Element = formElement.find('#Hg2');
        var Hg3Element = formElement.find('#Hg3');
        var Hh1Element = formElement.find('#Hh1');
        var Hh2Element = formElement.find('#Hh2');
        var Hh3Element = formElement.find('#Hh3');
        var Hi1Element = formElement.find('#Hi1');
        var Hi2Element = formElement.find('#Hi2');
        var Hi3Element = formElement.find('#Hi3');
        var Hj1Element = formElement.find('#Hj1');
        var Hj2Element = formElement.find('#Hj2');
        var Hj3Element = formElement.find('#Hj3');
        var Ia1Element = formElement.find('#Ia1');
        var Ia2Element = formElement.find('#Ia2');
        var Ia3Element = formElement.find('#Ia3');
        var Ib1Element = formElement.find('#Ib1');
        var Ib2Element = formElement.find('#Ib2');
        var Ib3Element = formElement.find('#Ib3');
        var Ic1Element = formElement.find('#Ic1');
        var Ic2Element = formElement.find('#Ic2');
        var Ic3Element = formElement.find('#Ic3');
        var Id1Element = formElement.find('#Id1');
        var Id2Element = formElement.find('#Id2');
        var Id3Element = formElement.find('#Id3');
        var Ie1Element = formElement.find('#Ie1');
        var Ie2Element = formElement.find('#Ie2');
        var Ie3Element = formElement.find('#Ie3');
        var If1Element = formElement.find('#If1');
        var If2Element = formElement.find('#If2');
        var If3Element = formElement.find('#If3');
        var Ig1Element = formElement.find('#Ig1');
        var Ig2Element = formElement.find('#Ig2');
        var Ig3Element = formElement.find('#Ig3');
        var Ih1Element = formElement.find('#Ih1');
        var Ih2Element = formElement.find('#Ih2');
        var Ih3Element = formElement.find('#Ih3');
        var Ii1Element = formElement.find('#Ii1');
        var Ii2Element = formElement.find('#Ii2');
        var Ii3Element = formElement.find('#Ii3');
        var Ja1Element = formElement.find('#Ja1');
        var Ja2Element = formElement.find('#Ja2');
        var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
        var Ja3Element = formElement.find('#Ja3');
        var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
        var Ka1Element = formElement.find('#Ka1');
        var Ka2Element = formElement.find('#Ka2');
        var Ka3Element = formElement.find('#Ka3');
        var Ka4Element = formElement.find('#Ka4');
        var Kb1Element = formElement.find('#Kb1');
        var Kb2Element = formElement.find('#Kb2');
        var Kb3Element = formElement.find('#Kb3');
        var Kb4Element = formElement.find('#Kb4');
        var Kc1Element = formElement.find('#Kc1');
        var Kc2Element = formElement.find('#Kc2');
        var Kd1Element = formElement.find('#Kd1');
        var Kd2Element = formElement.find('#Kd2');
        var Kd3Element = formElement.find('#Kd3');
        var Ke1Element = formElement.find('#Ke1');
        var Ke2Element = formElement.find('#Ke2');
        var Kf1Element = formElement.find('#Kf1');
        var Kg1Element = formElement.find('#Kg1');
        var Kh1Element = formElement.find('#Kh1');
        var La1Element = formElement.find('#La1');
        var La2Element = formElement.find('#La2');
        var La3Element = formElement.find('#La3');
        var La4Element = formElement.find('#La4');
        var LaLainLainElement = formElement.find('#LaLainLain');
        var Lb1Element = formElement.find('#Lb1');
        var Lb2Element = formElement.find('#Lb2');
        var Lb3Element = formElement.find('#Lb3');
        var Ma1Element = formElement.find('#Ma1');
        var Ma2Element = formElement.find('#Ma2');
        var Mb1Element = formElement.find('#Mb1');
        var Mb2Element = formElement.find('#Mb2');
        var Mc1Element = formElement.find('#Mc1');
        var Mc2Element = formElement.find('#Mc2');
        var Mc3Element = formElement.find('#Mc3');
        var Md1Element = formElement.find('#Md1');
        var Md2Element = formElement.find('#Md2');
        var Me1Element = formElement.find('#Me1');
        var Me2Element = formElement.find('#Me2');
        var Me3Element = formElement.find('#Me3');
        var Mf1Element = formElement.find('#Mf1');
        var Mf2Element = formElement.find('#Mf2');
        var Na1Element = formElement.find('#Na1');
        var Na2Element = formElement.find('#Na2');
        var Nb1Element = formElement.find('#Nb1');
        var Nb2Element = formElement.find('#Nb2');
        var Nc1Element = formElement.find('#Nc1');
        var Nc2Element = formElement.find('#Nc2');
        var Nd1Element = formElement.find('#Nd1');
        var Nd2Element = formElement.find('#Nd2');
        var Nd3Element = formElement.find('#Nd3');
        var Ne1Element = formElement.find('#Ne1');
        var Ne2Element = formElement.find('#Ne2');
        var Oa1Element = formElement.find('#Oa1');
        var Oa2Element = formElement.find('#Oa2');
        var Ob1Element = formElement.find('#Ob1');
        var Ob2Element = formElement.find('#Ob2');
        var Oc1Element = formElement.find('#Oc1');
        var Oc2Element = formElement.find('#Oc2');
        var Od1Element = formElement.find('#Od1');
        var Od2Element = formElement.find('#Od2');
        var Oe1Element = formElement.find('#Oe1');
        var Oe2Element = formElement.find('#Oe2');
        var Pa1Element = formElement.find('#Pa1');
        var Pa2Element = formElement.find('#Pa2');
        var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
        var Pa3Element = formElement.find('#Pa3');
        var Pb1Element = formElement.find('#Pb1');
        var Pb2Element = formElement.find('#Pb2');
        var Pc1Element = formElement.find('#Pc1');
        var Pc2Element = formElement.find('#Pc2');
        var Pd1Element = formElement.find('#Pd1');
        var Pd2Element = formElement.find('#Pd2');
        var Pe1Element = formElement.find('#Pe1');
        var Pe2Element = formElement.find('#Pe2');
        var Qa1Element = formElement.find('#Qa1');
        var Qa2Element = formElement.find('#Qa2');
        var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
        var Qa3Element = formElement.find('#Qa3');
        var Qb1Element = formElement.find('#Qb1');
        var Qb2Element = formElement.find('#Qb2');
        var Qc1Element = formElement.find('#Qc1');
        var Qc2Element = formElement.find('#Qc2');
        var Qd1Element = formElement.find('#Qd1');
        var Qd2Element = formElement.find('#Qd2');
        var Qe1Element = formElement.find('#Qe1');
        var Qe2Element = formElement.find('#Qe2');
        var Ra1Element = formElement.find('#Ra1');
        var Ra2Element = formElement.find('#Ra2');
        var Rb1Element = formElement.find('#Rb1');
        var Rb2Element = formElement.find('#Rb2');
        var Rc1Element = formElement.find('#Rc1');
        var Rc2Element = formElement.find('#Rc2');
        var Rd1Element = formElement.find('#Rd1');
        var Rd2Element = formElement.find('#Rd2');
        var Re1Element = formElement.find('#Re1');
        var Re2Element = formElement.find('#Re2');
        var Rf1Element = formElement.find('#Rf1');
        var Rf2Element = formElement.find('#Rf2');
        var Sa1Element = formElement.find('#Sa1');
        var Sa2Element = formElement.find('#Sa2');
        var Sa3Element = formElement.find('#Sa3');
        var Sb1Element = formElement.find('#Sb1');
        var Sb2Element = formElement.find('#Sb2');
        var Sc1Element = formElement.find('#Sc1');
        var Sc2Element = formElement.find('#Sc2');
        var Sd1Element = formElement.find('#Sd1');
        var Sd2Element = formElement.find('#Sd2');
        var Sd3Element = formElement.find('#Sd3');
        var Sd4Element = formElement.find('#Sd4');
        var Se1Element = formElement.find('#Se1');
        var Se2Element = formElement.find('#Se2');
        var Ta1Element = formElement.find('#Ta1');
        var Ta2Element = formElement.find('#Ta2');
        var Tb1Element = formElement.find('#Tb1');
        var Tb2Element = formElement.find('#Tb2');
        var Tb21Element = formElement.find('#Tb21');
        var Tb22Element = formElement.find('#Tb22');
        var Tb23Element = formElement.find('#Tb23');
        var Tb24Element = formElement.find('#Tb24');
        var Tb25Element = formElement.find('#Tb25');
        var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
        var Tc1Element = formElement.find('#Tc1');
        var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
        var Tc2Element = formElement.find('#Tc2');
        var LaElement = formElement.find('#La');
        var _id = idElement.val();
        var _id_pasien	=	id_pasienElement.val();
        var _kunjungan	=	kunjunganElement.val();
        var _tgl_periksa	=	tgl_periksaElement.val();
        var _medrec	=	medrecElement.val();
        var _aa1	=	aa1Element.val();
        var _aa2	=	aa2Element.val();
        var _aa3	=	aa3Element.val();
        var _ab1	=	ab1Element.val();
        var _ab2	=	ab2Element.val();
        var _ab3	=	ab3Element.val();
        var _ac1	=	ac1Element.val();
        var _ac2	=	ac2Element.val();
        var _ac3	=	ac3Element.val();
        var _ad1	=	ad1Element.val();
        var _ad2	=	ad2Element.val();
        var _ad3	=	ad3Element.val();
        var _ae1	=	ae1Element.val();
        var _ae2	=	ae2Element.val();
        var _ae3	=	ae3Element.val();
        var _af1	=	af1Element.val();
        var _af2	=	af2Element.val();
        var _af3	=	af3Element.val();
        var _ag1	=	ag1Element.val();
        var _ag2	=	ag2Element.val();
        var _ag3	=	ag3Element.val();
        var _ah1	=	ah1Element.val();
        var _ah2	=	ah2Element.val();
        var _ah3	=	ah3Element.val();
        var _ai1	=	ai1Element.val();
        var _ai2	=	ai2Element.val();
        var _ai3	=	ai3Element.val();
        var _aj1	=	aj1Element.val();
        var _aj2	=	aj2Element.val();
        var _aj3	=	aj3Element.val();
        var _ak1	=	ak1Element.val();
        var _ak2	=	ak2Element.val();
        var _ak3	=	ak3Element.val();
        var _al1	=	al1Element.val();
        var _al2	=	al2Element.val();
        var _al3	=	al3Element.val();
        var _am1	=	am1Element.val();
        var _am2	=	am2Element.val();
        var _am21	=	am21Element.val();
        var _am22	=	am22Element.val();
        var _am23	=	am23Element.val();
        var _am24	=	am24Element.val();
        var _am25	=	am25Element.val();
        var _am26	=	am26Element.val();
        var _am27	=	am27Element.val();
        var _am28	=	am28Element.val();
        var _am29	=	am29Element.val();
        var _am210	=	am210Element.val();
        var _am211	=	am211Element.val();
        var _am212	=	am212Element.val();
        var _am3	=	am3Element.val();
        var _an1	=	an1Element.val();
        var _an2	=	an2Element.val();
        var _ba1	=	ba1Element.val();
        var _ba2	=	ba2Element.val();
        var _ba3	=	ba3Element.val();
        var _bb1	=	bb1Element.val();
        var _bb2	=	bb2Element.val();
        var _bb3	=	bb3Element.val();
        var _bc1	=	bc1Element.val();
        var _bc2	=	bc2Element.val();
        var _bc3	=	bc3Element.val();
        var _bd1	=	bd1Element.val();
        var _bd2	=	bd2Element.val();
        var _bd3	=	bd3Element.val();
        var _be1	=	be1Element.val();
        var _be2	=	be2Element.val();
        var _be3	=	be3Element.val();
        var _bf1	=	bf1Element.val();
        var _bf2	=	bf2Element.val();
        var _bf3	=	bf3Element.val();
        var _bg1	=	bg1Element.val();
        var _bg2	=	bg2Element.val();
        var _bg3	=	bg3Element.val();
        var _bh1	=	bh1Element.val();
        var _bh2	=	bh2Element.val();
        var _bh3	=	bh3Element.val();
        var _bi1	=	bi1Element.val();
        var _bi2	=	bi2Element.val();
        var _bi3	=	bi3Element.val();
        var _bj1	=	bj1Element.val();
        var _bj2	=	bj2Element.val();
        var _bj3	=	bj3Element.val();
        var _bk1	=	bk1Element.val();
        var _bk2	=	bk2Element.val();
        var _bk3	=	bk3Element.val();
        var _ca1	=	ca1Element.val();
        var _ca2	=	ca2Element.val();
        var _ca3	=	ca3Element.val();
        var _cb1	=	cb1Element.val();
        var _cb2	=	cb2Element.val();
        var _cb3	=	cb3Element.val();
        var _cc1	=	cc1Element.val();
        var _cc2	=	cc2Element.val();
        var _cc3	=	cc3Element.val();
        var _cd1	=	cd1Element.val();
        var _cd2	=	cd2Element.val();
        var _cd3	=	cd3Element.val();
        var _ce1	=	ce1Element.val();
        var _ce2	=	ce2Element.val();
        var _ce3	=	ce3Element.val();
        var _cf1	=	cf1Element.val();
        var _cf2	=	cf2Element.val();
        var _cf3	=	cf3Element.val();
        var _cg1	=	cg1Element.val();
        var _cg2	=	cg2Element.val();
        var _cg3	=	cg3Element.val();
        var _ch1	=	ch1Element.val();
        var _ch2	=	ch2Element.val();
        var _ci1	=	ci1Element.val();
        var _ci2	=	ci2Element.val();
        var _ci3	=	ci3Element.val();
        var _da1	=	da1Element.val();
        var _da2	=	da2Element.val();
        var _da3	=	da3Element.val();
        var _db1	=	db1Element.val();
        var _db2	=	db2Element.val();
        var _db3	=	db3Element.val();
        var _dc1	=	dc1Element.val();
        var _dc2	=	dc2Element.val();
        var _dc3	=	dc3Element.val();
        var _dd1	=	dd1Element.val();
        var _dd2	=	dd2Element.val();
        var _dd3	=	dd3Element.val();
        var _de1	=	de1Element.val();
        var _de2	=	de2Element.val();
        var _de3	=	de3Element.val();
        var _df1	=	df1Element.val();
        var _df2	=	df2Element.val();
        var _df3	=	df3Element.val();
        var _dg1	=	dg1Element.val();
        var _dg2	=	dg2Element.val();
        var _dg3	=	dg3Element.val();
        var _dh1	=	dh1Element.val();
        var _dh2	=	dh2Element.val();
        var _di1	=	di1Element.val();
        var _di2	=	di2Element.val();
        var _dj1	=	dj1Element.val();
        var _dj2	=	dj2Element.val();
        var _dj3	=	dj3Element.val();
        var _Ea1	=	Ea1Element.val();
        var _Ea2	=	Ea2Element.val();
        var _Ea3	=	Ea3Element.val();
        var _Eb1	=	Eb1Element.val();
        var _Eb2	=	Eb2Element.val();
        var _Eb3	=	Eb3Element.val();
        var _Ec1	=	Ec1Element.val();
        var _Ec2	=	Ec2Element.val();
        var _Ec3	=	Ec3Element.val();
        var _Ed1	=	Ed1Element.val();
        var _Ed2	=	Ed2Element.val();
        var _Ed3	=	Ed3Element.val();
        var _Ee1	=	Ee1Element.val();
        var _Ee2	=	Ee2Element.val();
        var _Ee3	=	Ee3Element.val();
        var _Ef1	=	Ef1Element.val();
        var _Ef2	=	Ef2Element.val();
        var _Ef3	=	Ef3Element.val();
        var _Ef2Lainnya	=	Ef2LainnyaElement.val();
        var _Eg1	=	Eg1Element.val();
        var _Eg2	=	Eg2Element.val();
        var _Eg3	=	Eg3Element.val();
        var _Eg4	=	Eg4Element.val();
        var _Eg5	=	Eg5Element.val();
        var _Eg6	=	Eg6Element.val();
        var _EgLainnya	=	EgLainnyaElement.val();
        var _Fa1	=	Fa1Element.val();
        var _Fa2	=	Fa2Element.val();
        var _Fb1	=	Fb1Element.val();
        var _Fb2	=	Fb2Element.val();
        var _Fc1	=	Fc1Element.val();
        var _Fc2	=	Fc2Element.val();
        var _Fd1	=	Fd1Element.val();
        var _Fd2	=	Fd2Element.val();
        var _Fe1	=	Fe1Element.val();
        var _Fe2	=	Fe2Element.val();
        var _Ff1	=	Ff1Element.val();
        var _Ff2	=	Ff2Element.val();
        var _Fg1	=	Fg1Element.val();
        var _Fg2	=	Fg2Element.val();
        var _Fg3	=	Fg3Element.val();
        var _Fh1	=	Fh1Element.val();
        var _Fh2	=	Fh2Element.val();
        var _Fi1	=	Fi1Element.val();
        var _Fi2	=	Fi2Element.val();
        var _Ga1	=	Ga1Element.val();
        var _Ga2	=	Ga2Element.val();
        var _Ga3	=	Ga3Element.val();
        var _Gb1	=	Gb1Element.val();
        var _Gb2	=	Gb2Element.val();
        var _Gb3	=	Gb3Element.val();
        var _Gc1	=	Gc1Element.val();
        var _Gd1	=	Gd1Element.val();
        var _Gd2	=	Gd2Element.val();
        var _Ge1	=	Ge1Element.val();
        var _Ge2	=	Ge2Element.val();
        var _Ge3	=	Ge3Element.val();
        var _Gf1	=	Gf1Element.val();
        var _Gf2	=	Gf2Element.val();
        var _Gg1	=	Gg1Element.val();
        var _Gg2	=	Gg2Element.val();
        var _Gg2Lainnya	=	Gg2LainnyaElement.val();
        var _Gg3	=	Gg3Element.val();
        var _Gh1	=	Gh1Element.val();
        var _Gh2	=	Gh2Element.val();
        var _Ha1	=	Ha1Element.val();
        var _Ha2	=	Ha2Element.val();
        var _Ha3	=	Ha3Element.val();
        var _Hb1	=	Hb1Element.val();
        var _Hb2	=	Hb2Element.val();
        var _Hb3	=	Hb3Element.val();
        var _Hc1	=	Hc1Element.val();
        var _Hc2	=	Hc2Element.val();
        var _Hc3	=	Hc3Element.val();
        var _Hd1	=	Hd1Element.val();
        var _Hd2	=	Hd2Element.val();
        var _Hd3	=	Hd3Element.val();
        var _He1	=	He1Element.val();
        var _He2	=	He2Element.val();
        var _He3	=	He3Element.val();
        var _Hf1	=	Hf1Element.val();
        var _Hf2	=	Hf2Element.val();
        var _Hf3	=	Hf3Element.val();
        var _Hg1	=	Hg1Element.val();
        var _Hg2	=	Hg2Element.val();
        var _Hg3	=	Hg3Element.val();
        var _Hh1	=	Hh1Element.val();
        var _Hh2	=	Hh2Element.val();
        var _Hh3	=	Hh3Element.val();
        var _Hi1	=	Hi1Element.val();
        var _Hi2	=	Hi2Element.val();
        var _Hi3	=	Hi3Element.val();
        var _Hj1	=	Hj1Element.val();
        var _Hj2	=	Hj2Element.val();
        var _Hj3	=	Hj3Element.val();
        var _Ia1	=	Ia1Element.val();
        var _Ia2	=	Ia2Element.val();
        var _Ia3	=	Ia3Element.val();
        var _Ib1	=	Ib1Element.val();
        var _Ib2	=	Ib2Element.val();
        var _Ib3	=	Ib3Element.val();
        var _Ic1	=	Ic1Element.val();
        var _Ic2	=	Ic2Element.val();
        var _Ic3	=	Ic3Element.val();
        var _Id1	=	Id1Element.val();
        var _Id2	=	Id2Element.val();
        var _Id3	=	Id3Element.val();
        var _Ie1	=	Ie1Element.val();
        var _Ie2	=	Ie2Element.val();
        var _Ie3	=	Ie3Element.val();
        var _If1	=	If1Element.val();
        var _If2	=	If2Element.val();
        var _If3	=	If3Element.val();
        var _Ig1	=	Ig1Element.val();
        var _Ig2	=	Ig2Element.val();
        var _Ig3	=	Ig3Element.val();
        var _Ih1	=	Ih1Element.val();
        var _Ih2	=	Ih2Element.val();
        var _Ih3	=	Ih3Element.val();
        var _Ii1	=	Ii1Element.val();
        var _Ii2	=	Ii2Element.val();
        var _Ii3	=	Ii3Element.val();
        var _Ja1	=	Ja1Element.val();
        var _Ja2	=	Ja2Element.val();
        var _Ja2Lainnya	=	Ja2LainnyaElement.val();
        var _Ja3	=	Ja3Element.val();
        var _Ja3Lainnya	=	Ja3LainnyaElement.val();
        var _Ka1	=	Ka1Element.val();
        var _Ka2	=	Ka2Element.val();
        var _Ka3	=	Ka3Element.val();
        var _Ka4	=	Ka4Element.val();
        var _Kb1	=	Kb1Element.val();
        var _Kb2	=	Kb2Element.val();
        var _Kb3	=	Kb3Element.val();
        var _Kb4	=	Kb4Element.val();
        var _Kc1	=	Kc1Element.val();
        var _Kc2	=	Kc2Element.val();
        var _Kd1	=	Kd1Element.val();
        var _Kd2	=	Kd2Element.val();
        var _Kd3	=	Kd3Element.val();
        var _Ke1	=	Ke1Element.val();
        var _Ke2	=	Ke2Element.val();
        var _Kf1	=	Kf1Element.val();
        var _Kg1	=	Kg1Element.val();
        var _Kh1	=	Kh1Element.val();
        var _La1	=	La1Element.val();
        var _La2	=	La2Element.val();
        var _La3	=	La3Element.val();
        var _La4	=	La4Element.val();
        var _LaLainLain	=	LaLainLainElement.val();
        var _Lb1	=	Lb1Element.val();
        var _Lb2	=	Lb2Element.val();
        var _Lb3	=	Lb3Element.val();
        var _Ma1	=	Ma1Element.val();
        var _Ma2	=	Ma2Element.val();
        var _Mb1	=	Mb1Element.val();
        var _Mb2	=	Mb2Element.val();
        var _Mc1	=	Mc1Element.val();
        var _Mc2	=	Mc2Element.val();
        var _Mc3	=	Mc3Element.val();
        var _Md1	=	Md1Element.val();
        var _Md2	=	Md2Element.val();
        var _Me1	=	Me1Element.val();
        var _Me2	=	Me2Element.val();
        var _Me3	=	Me3Element.val();
        var _Mf1	=	Mf1Element.val();
        var _Mf2	=	Mf2Element.val();
        var _Na1	=	Na1Element.val();
        var _Na2	=	Na2Element.val();
        var _Nb1	=	Nb1Element.val();
        var _Nb2	=	Nb2Element.val();
        var _Nc1	=	Nc1Element.val();
        var _Nc2	=	Nc2Element.val();
        var _Nd1	=	Nd1Element.val();
        var _Nd2	=	Nd2Element.val();
        var _Nd3	=	Nd3Element.val();
        var _Ne1	=	Ne1Element.val();
        var _Ne2	=	Ne2Element.val();
        var _Oa1	=	Oa1Element.val();
        var _Oa2	=	Oa2Element.val();
        var _Ob1	=	Ob1Element.val();
        var _Ob2	=	Ob2Element.val();
        var _Oc1	=	Oc1Element.val();
        var _Oc2	=	Oc2Element.val();
        var _Od1	=	Od1Element.val();
        var _Od2	=	Od2Element.val();
        var _Oe1	=	Oe1Element.val();
        var _Oe2	=	Oe2Element.val();
        var _Pa1	=	Pa1Element.val();
        var _Pa2	=	Pa2Element.val();
        var _Pa2Lainnya	=	Pa2LainnyaElement.val();
        var _Pa3	=	Pa3Element.val();
        var _Pb1	=	Pb1Element.val();
        var _Pb2	=	Pb2Element.val();
        var _Pc1	=	Pc1Element.val();
        var _Pc2	=	Pc2Element.val();
        var _Pd1	=	Pd1Element.val();
        var _Pd2	=	Pd2Element.val();
        var _Pe1	=	Pe1Element.val();
        var _Pe2	=	Pe2Element.val();
        var _Qa1	=	Qa1Element.val();
        var _Qa2	=	Qa2Element.val();
        var _Qa2Lainnya	=	Qa2LainnyaElement.val();
        var _Qa3	=	Qa3Element.val();
        var _Qb1	=	Qb1Element.val();
        var _Qb2	=	Qb2Element.val();
        var _Qc1	=	Qc1Element.val();
        var _Qc2	=	Qc2Element.val();
        var _Qd1	=	Qd1Element.val();
        var _Qd2	=	Qd2Element.val();
        var _Qe1	=	Qe1Element.val();
        var _Qe2	=	Qe2Element.val();
        var _Ra1	=	Ra1Element.val();
        var _Ra2	=	Ra2Element.val();
        var _Rb1	=	Rb1Element.val();
        var _Rb2	=	Rb2Element.val();
        var _Rc1	=	Rc1Element.val();
        var _Rc2	=	Rc2Element.val();
        var _Rd1	=	Rd1Element.val();
        var _Rd2	=	Rd2Element.val();
        var _Re1	=	Re1Element.val();
        var _Re2	=	Re2Element.val();
        var _Rf1	=	Rf1Element.val();
        var _Rf2	=	Rf2Element.val();
        var _Sa1	=	Sa1Element.val();
        var _Sa2	=	Sa2Element.val();
        var _Sa3	=	Sa3Element.val();
        var _Sb1	=	Sb1Element.val();
        var _Sb2	=	Sb2Element.val();
        var _Sc1	=	Sc1Element.val();
        var _Sc2	=	Sc2Element.val();
        var _Sd1	=	Sd1Element.val();
        var _Sd2	=	Sd2Element.val();
        var _Sd3	=	Sd3Element.val();
        var _Sd4	=	Sd4Element.val();
        var _Se1	=	Se1Element.val();
        var _Se2	=	Se2Element.val();
        var _Ta1	=	Ta1Element.val();
        var _Ta2	=	Ta2Element.val();
        var _Tb1	=	Tb1Element.val();
        var _Tb2	=	Tb2Element.val();
        var _Tb21	=	Tb21Element.val();
        var _Tb22	=	Tb22Element.val();
        var _Tb23	=	Tb23Element.val();
        var _Tb24	=	Tb24Element.val();
        var _Tb25	=	Tb25Element.val();
        var _Tb25Lainnya	=	Tb25LainnyaElement.val();
        var _Tc1	=	Tc1Element.val();
        var _Tc1Lainnya	=	Tc1LainnyaElement.val();
        var _Tc2	=	Tc2Element.val();
        var _La	=	LaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {
				id: _id,
                id_pasien : _id_pasien,
                kunjungan : _kunjungan,
                tgl_periksa : _tgl_periksa,
                medrec : _medrec,
                aa1 : _aa1,
                aa2 : _aa2,
                aa3 : _aa3,
                ab1 : _ab1,
                ab2 : _ab2,
                ab3 : _ab3,
                ac1 : _ac1,
                ac2 : _ac2,
                ac3 : _ac3,
                ad1 : _ad1,
                ad2 : _ad2,
                ad3 : _ad3,
                ae1 : _ae1,
                ae2 : _ae2,
                ae3 : _ae3,
                af1 : _af1,
                af2 : _af2,
                af3 : _af3,
                ag1 : _ag1,
                ag2 : _ag2,
                ag3 : _ag3,
                ah1 : _ah1,
                ah2 : _ah2,
                ah3 : _ah3,
                ai1 : _ai1,
                ai2 : _ai2,
                ai3 : _ai3,
                aj1 : _aj1,
                aj2 : _aj2,
                aj3 : _aj3,
                ak1 : _ak1,
                ak2 : _ak2,
                ak3 : _ak3,
                al1 : _al1,
                al2 : _al2,
                al3 : _al3,
                am1 : _am1,
                am2 : _am2,
                am21 : _am21,
                am22 : _am22,
                am23 : _am23,
                am24 : _am24,
                am25 : _am25,
                am26 : _am26,
                am27 : _am27,
                am28 : _am28,
                am29 : _am29,
                am210 : _am210,
                am211 : _am211,
                am212 : _am212,
                am3 : _am3,
                an1 : _an1,
                an2 : _an2,
                ba1 : _ba1,
                ba2 : _ba2,
                ba3 : _ba3,
                bb1 : _bb1,
                bb2 : _bb2,
                bb3 : _bb3,
                bc1 : _bc1,
                bc2 : _bc2,
                bc3 : _bc3,
                bd1 : _bd1,
                bd2 : _bd2,
                bd3 : _bd3,
                be1 : _be1,
                be2 : _be2,
                be3 : _be3,
                bf1 : _bf1,
                bf2 : _bf2,
                bf3 : _bf3,
                bg1 : _bg1,
                bg2 : _bg2,
                bg3 : _bg3,
                bh1 : _bh1,
                bh2 : _bh2,
                bh3 : _bh3,
                bi1 : _bi1,
                bi2 : _bi2,
                bi3 : _bi3,
                bj1 : _bj1,
                bj2 : _bj2,
                bj3 : _bj3,
                bk1 : _bk1,
                bk2 : _bk2,
                bk3 : _bk3,
                ca1 : _ca1,
                ca2 : _ca2,
                ca3 : _ca3,
                cb1 : _cb1,
                cb2 : _cb2,
                cb3 : _cb3,
                cc1 : _cc1,
                cc2 : _cc2,
                cc3 : _cc3,
                cd1 : _cd1,
                cd2 : _cd2,
                cd3 : _cd3,
                ce1 : _ce1,
                ce2 : _ce2,
                ce3 : _ce3,
                cf1 : _cf1,
                cf2 : _cf2,
                cf3 : _cf3,
                cg1 : _cg1,
                cg2 : _cg2,
                cg3 : _cg3,
                ch1 : _ch1,
                ch2 : _ch2,
                ci1 : _ci1,
                ci2 : _ci2,
                ci3 : _ci3,
                da1 : _da1,
                da2 : _da2,
                da3 : _da3,
                db1 : _db1,
                db2 : _db2,
                db3 : _db3,
                dc1 : _dc1,
                dc2 : _dc2,
                dc3 : _dc3,
                dd1 : _dd1,
                dd2 : _dd2,
                dd3 : _dd3,
                de1 : _de1,
                de2 : _de2,
                de3 : _de3,
                df1 : _df1,
                df2 : _df2,
                df3 : _df3,
                dg1 : _dg1,
                dg2 : _dg2,
                dg3 : _dg3,
                dh1 : _dh1,
                dh2 : _dh2,
                di1 : _di1,
                di2 : _di2,
                dj1 : _dj1,
                dj2 : _dj2,
                dj3 : _dj3,
                ea1 : _Ea1,
                ea2 : _Ea2,
                ea3 : _Ea3,
                eb1 : _Eb1,
                eb2 : _Eb2,
                eb3 : _Eb3,
                ec1 : _Ec1,
                ec2 : _Ec2,
                ec3 : _Ec3,
                ed1 : _Ed1,
                ed2 : _Ed2,
                ed3 : _Ed3,
                ee1 : _Ee1,
                ee2 : _Ee2,
                ee3 : _Ee3,
                ef1 : _Ef1,
                ef2 : _Ef2,
                ef3 : _Ef3,
                ef2Lainnya : _Ef2Lainnya,
                eg1 : _Eg1,
                eg2 : _Eg2,
                eg3 : _Eg3,
                eg4 : _Eg4,
                eg5 : _Eg5,
                eg6 : _Eg6,
                egLainnya : _EgLainnya,
                fa1 : _Fa1,
                fa2 : _Fa2,
                fb1 : _Fb1,
                fb2 : _Fb2,
                fc1 : _Fc1,
                fc2 : _Fc2,
                fd1 : _Fd1,
                fd2 : _Fd2,
                fe1 : _Fe1,
                fe2 : _Fe2,
                ff1 : _Ff1,
                ff2 : _Ff2,
                fg1 : _Fg1,
                fg2 : _Fg2,
                fg3 : _Fg3,
                fh1 : _Fh1,
                fh2 : _Fh2,
                fi1 : _Fi1,
                fi2 : _Fi2,
                ga1 : _Ga1,
                ga2 : _Ga2,
                ga3 : _Ga3,
                gb1 : _Gb1,
                gb2 : _Gb2,
                gb3 : _Gb3,
                gc1 : _Gc1,
                gd1 : _Gd1,
                gd2 : _Gd2,
                ge1 : _Ge1,
                ge2 : _Ge2,
                ge3 : _Ge3,
                gf1 : _Gf1,
                gf2 : _Gf2,
                gg1 : _Gg1,
                gg2 : _Gg2,
                gg2Lainnya : _Gg2Lainnya,
                gg3 : _Gg3,
                gh1 : _Gh1,
                gh2 : _Gh2,
                ha1 : _Ha1,
                ha2 : _Ha2,
                ha3 : _Ha3,
                hb1 : _Hb1,
                hb2 : _Hb2,
                hb3 : _Hb3,
                hc1 : _Hc1,
                hc2 : _Hc2,
                hc3 : _Hc3,
                hd1 : _Hd1,
                hd2 : _Hd2,
                hd3 : _Hd3,
                he1 : _He1,
                he2 : _He2,
                he3 : _He3,
                hf1 : _Hf1,
                hf2 : _Hf2,
                hf3 : _Hf3,
                hg1 : _Hg1,
                hg2 : _Hg2,
                hg3 : _Hg3,
                hh1 : _Hh1,
                hh2 : _Hh2,
                hh3 : _Hh3,
                hi1 : _Hi1,
                hi2 : _Hi2,
                hi3 : _Hi3,
                hj1 : _Hj1,
                hj2 : _Hj2,
                hj3 : _Hj3,
                ia1 : _Ia1,
                ia2 : _Ia2,
                ia3 : _Ia3,
                ib1 : _Ib1,
                ib2 : _Ib2,
                ib3 : _Ib3,
                ic1 : _Ic1,
                ic2 : _Ic2,
                ic3 : _Ic3,
                id1 : _Id1,
                id2 : _Id2,
                id3 : _Id3,
                ie1 : _Ie1,
                ie2 : _Ie2,
                ie3 : _Ie3,
                if1 : _If1,
                if2 : _If2,
                if3 : _If3,
                ig1 : _Ig1,
                ig2 : _Ig2,
                ig3 : _Ig3,
                ih1 : _Ih1,
                ih2 : _Ih2,
                ih3 : _Ih3,
                ii1 : _Ii1,
                ii2 : _Ii2,
                ii3 : _Ii3,
                ja1 : _Ja1,
                ja2 : _Ja2,
                ja2Lainnya : _Ja2Lainnya,
                ja3 : _Ja3,
                ja3Lainnya : _Ja3Lainnya,
                ka1 : _Ka1,
                ka2 : _Ka2,
                ka3 : _Ka3,
                ka4 : _Ka4,
                kb1 : _Kb1,
                kb2 : _Kb2,
                kb3 : _Kb3,
                kb4 : _Kb4,
                kc1 : _Kc1,
                kc2 : _Kc2,
                kd1 : _Kd1,
                kd2 : _Kd2,
                kd3 : _Kd3,
                ke1 : _Ke1,
                ke2 : _Ke2,
                kf1 : _Kf1,
                kg1 : _Kg1,
                kh1 : _Kh1,
                la1 : _La1,
                la2 : _La2,
                la3 : _La3,
                la4 : _La4,
                laLainLain : _LaLainLain,
                lb1 : _Lb1,
                lb2 : _Lb2,
                lb3 : _Lb3,
                ma1 : _Ma1,
                ma2 : _Ma2,
                mb1 : _Mb1,
                mb2 : _Mb2,
                mc1 : _Mc1,
                mc2 : _Mc2,
                mc3 : _Mc3,
                md1 : _Md1,
                md2 : _Md2,
                me1 : _Me1,
                me2 : _Me2,
                me3 : _Me3,
                mf1 : _Mf1,
                mf2 : _Mf2,
                na1 : _Na1,
                na2 : _Na2,
                nb1 : _Nb1,
                nb2 : _Nb2,
                nc1 : _Nc1,
                nc2 : _Nc2,
                nd1 : _Nd1,
                nd2 : _Nd2,
                nd3 : _Nd3,
                ne1 : _Ne1,
                ne2 : _Ne2,
                oa1 : _Oa1,
                oa2 : _Oa2,
                ob1 : _Ob1,
                ob2 : _Ob2,
                oc1 : _Oc1,
                oc2 : _Oc2,
                od1 : _Od1,
                od2 : _Od2,
                oe1 : _Oe1,
                oe2 : _Oe2,
                pa1 : _Pa1,
                pa2 : _Pa2,
                pa2Lainnya : _Pa2Lainnya,
                pa3 : _Pa3,
                pb1 : _Pb1,
                pb2 : _Pb2,
                pc1 : _Pc1,
                pc2 : _Pc2,
                pd1 : _Pd1,
                pd2 : _Pd2,
                pe1 : _Pe1,
                pe2 : _Pe2,
                qa1 : _Qa1,
                qa2 : _Qa2,
                qa2Lainnya : _Qa2Lainnya,
                qa3 : _Qa3,
                qb1 : _Qb1,
                qb2 : _Qb2,
                qc1 : _Qc1,
                qc2 : _Qc2,
                qd1 : _Qd1,
                qd2 : _Qd2,
                qe1 : _Qe1,
                qe2 : _Qe2,
                ra1 : _Ra1,
                ra2 : _Ra2,
                rb1 : _Rb1,
                rb2 : _Rb2,
                rc1 : _Rc1,
                rc2 : _Rc2,
                rd1 : _Rd1,
                rd2 : _Rd2,
                re1 : _Re1,
                re2 : _Re2,
                rf1 : _Rf1,
                rf2 : _Rf2,
                sa1 : _Sa1,
                sa2 : _Sa2,
                sa3 : _Sa3,
                sb1 : _Sb1,
                sb2 : _Sb2,
                sc1 : _Sc1,
                sc2 : _Sc2,
                sd1 : _Sd1,
                sd2 : _Sd2,
                sd3 : _Sd3,
                sd4 : _Sd4,
                se1 : _Se1,
                se2 : _Se2,
                ta1 : _Ta1,
                ta2 : _Ta2,
                tb1 : _Tb1,
                tb2 : _Tb2,
                tb21 : _Tb21,
                tb22 : _Tb22,
                tb23 : _Tb23,
                tb24 : _Tb24,
                tb25 : _Tb25,
                tb25Lainnya : _Tb25Lainnya,
                tc1 : _Tc1,
                tc1Lainnya : _Tc1Lainnya,
                tc2 : _Tc2,
                la : _La,
                _token: _token
			}
		})
		.done(function(_return){
			$("#modal-edit-anamnesis").modal("hide");
			ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-anamnesis');
		});
    });

    $('#modal-delete-anamnesis').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-anamnesis-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-anamnesis').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
            .done(function(_return){
                $("#modal-delete-anamnesis").modal("hide");
                ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-anamnesis');
            });
    });
});