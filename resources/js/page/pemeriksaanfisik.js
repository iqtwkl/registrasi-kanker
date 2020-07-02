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
                field: ['pasien', 'nama'],
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
                        target: 'modal-edit-pemeriksaan-fisik',
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
                        target: 'modal-delete-pemeriksaan-fisik',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-pemeriksaan-fisik').hasClass('js-data-pemeriksaan-fisik')) {
        dataTable.init(".js-data-pemeriksaan-fisik", configs);
    }

    $('#modal-create-pemeriksaan-fisik').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find("#id");
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var tdElement = formElement.find("#td");
        var td2Element = formElement.find("#td2");
        var nadiElement = formElement.find("#nadi");
        var tbElement = formElement.find("#td");
        var bbElement = formElement.find("#bb");
        var medrecElement = formElement.find("#medrec");
        var kesadaranElement = formElement.find("#kesadaran");
        var ks1Element = formElement.find("#ks1");
        var ks2Element = formElement.find("#ks2");
        var ks3Element = formElement.find("#ks3");
        var ks4Element = formElement.find("#ks4");
        var ks5Element = formElement.find("#ks5");
        var ks6Element = formElement.find("#ks6");
        var ks7Element = formElement.find("#ks7");
        var ks8Element = formElement.find("#ks8");
        var ks9Element = formElement.find("#ks9");
        var ks10Element = formElement.find("#ks10");
        var ks11Element = formElement.find("#ks11");
        var ks12Element = formElement.find("#ks12");
        var ks13Element = formElement.find("#ks13");
        var ks14Element = formElement.find("#ks14");
        var ks15Element = formElement.find("#ks15");
        var ks16Element = formElement.find("#ks16");
        var ks17Element = formElement.find("#ks17");
        var ks18Element = formElement.find("#ks18");
        var ks19Element = formElement.find("#ks19");
        var ks20Element = formElement.find("#ks20");
        var ks21Element = formElement.find("#ks21");
        var ks22Element = formElement.find("#ks22");
        var ks23Element = formElement.find("#ks23");
        var ks24Element = formElement.find("#ks24");
        var ks25Element = formElement.find("#ks25");
        var ks26Element = formElement.find("#ks26");
        var ks27Element = formElement.find("#ks27");
        var ks28Element = formElement.find("#ks28");
        var ks29Element = formElement.find("#ks29");
        var ks30Element = formElement.find("#ks30");
        var ks31Element = formElement.find("#ks31");
        var ks32Element = formElement.find("#ks32");
        var ks33Element = formElement.find("#ks33");
        var ks34Element = formElement.find("#ks34");
        var ks35Element = formElement.find("#ks35");
        var ks36Element = formElement.find("#ks36");
        var ks37Element = formElement.find("#ks37");
        var ks38Element = formElement.find("#ks38");
        var ks39Element = formElement.find("#ks39");
        var ks40Element = formElement.find("#ks40");
        var ks41Element = formElement.find("#ks41");
        var ks42Element = formElement.find("#ks42");
        var ks43Element = formElement.find("#ks43");
        var ks44Element = formElement.find("#ks44");
        var ks45Element = formElement.find("#ks45");
        var ks46Element = formElement.find("#ks46");
        var ks47Element = formElement.find("#ks47");
        var ks48Element = formElement.find("#ks48");
        var ks49Element = formElement.find("#ks49");
        var ks50Element = formElement.find("#ks50");
        var ks51Element = formElement.find("#ks51");
        var ks52Element = formElement.find("#ks52");
        var ks53Element = formElement.find("#ks53");
        var ks54Element = formElement.find("#ks54");
        var ks55Element = formElement.find("#ks55");
        var ks56Element = formElement.find("#ks56");
        var ks57Element = formElement.find("#ks57");
        var ks58Element = formElement.find("#ks58");
        var ks59Element = formElement.find("#ks59");
        var ks60Element = formElement.find("#ks60");
        var ks61Element = formElement.find("#ks61");
        var ks62Element = formElement.find("#ks62");
        var ks63Element = formElement.find("#ks63");
        var ks64Element = formElement.find("#ks64");
        var ks65Element = formElement.find("#ks65");
        var ks66Element = formElement.find("#ks66");
        var ks67Element = formElement.find("#ks67");
        var ks68Element = formElement.find("#ks68");
        var ks69aElement = formElement.find("#ks69a");
        var ks69bElement = formElement.find("#ks69b");
        var ks69cElement = formElement.find("#ks69c");
        var ks69dElement = formElement.find("#ks69d");
        var ks69eElement = formElement.find("#ks69e");
        var ks69fElement = formElement.find("#ks69f");
        var ks69gElement = formElement.find("#ks69g");
        var ks69hElement = formElement.find("#ks69h");
        var ks69iElement = formElement.find("#ks69i");
        var ks69jElement = formElement.find("#ks69j");
        var ks69kElement = formElement.find("#ks69k");
        var ks69lElement = formElement.find("#ks69l");
        var ks70Element = formElement.find("#ks70");
        var sl1Element = formElement.find("#sl1");
        var sl1aElement = formElement.find("#sl1a");
        var sl2Element = formElement.find("#sl2");
        var sl2aElement = formElement.find("#sl2a");
        var sl3Element = formElement.find("#sl3");
        var sl3aElement = formElement.find("#sl3a");
        var sl4Element = formElement.find("#sl4");
        var sl4aElement = formElement.find("#sl4a");
        var sl5Element = formElement.find("#sl5");
        var sl5aElement = formElement.find("#sl5a");
        var sl6Element = formElement.find("#sl6");
        var sl6aElement = formElement.find("#sl6a");
        var sl7Element = formElement.find("#sl7");
        var sl7aElement = formElement.find("#sl7a");
        var sl8Element = formElement.find("#sl8");
        var sl8aElement = formElement.find("#sl8a");
        var sl9Element = formElement.find("#sl9");
        var sl9aElement = formElement.find("#sl9a");
        var sl10Element = formElement.find("#sl10");
        var sl10aElement = formElement.find("#sl0a");
        var sl11Element = formElement.find("#sl11");
        var sl12Element = formElement.find("#sl12");
        var sl13Element = formElement.find("#sl13");
        var sl14Element = formElement.find("#sl14");
        var sl15Element = formElement.find("#sl15");
        var sl16Element = formElement.find("#sl16");
        var sl17Element = formElement.find("#sl17");
        var sl18Element = formElement.find("#sl18");
        var sl19Element = formElement.find("#sl19");
        var sl20Element = formElement.find("#sl20");
        var sl21Element = formElement.find("#sl21");
        var sl22Element = formElement.find("#sl22");
        var sl23Element = formElement.find("#sl23");
        var sl24Element = formElement.find("#sl24");
        var sl24aElement = formElement.find("#sl24a");
        var sl25Element = formElement.find("#sl25");
        var sl26Element = formElement.find("#sl26");
        var sl27Element = formElement.find("#sl27");
        idElement.val("");
        idPasienElement.val("");
        kunjunganElement.val("");
        tglPeriksaElement.val("");
        tdElement.val("");
        td2Element.val("");
        nadiElement.val("");
        tbElement.val("");
        bbElement.val("");
        medrecElement.val("");
        kesadaranElement.val("");
        ks1Element.val("");
        ks2Element.val("");
        ks3Element.val("");
        ks4Element.val("");
        ks5Element.val("");
        ks6Element.val("");
        ks7Element.val("");
        ks8Element.val("");
        ks9Element.val("");
        ks10Element.val("");
        ks11Element.val("");
        ks12Element.val("");
        ks13Element.val("");
        ks14Element.val("");
        ks15Element.val("");
        ks16Element.val("");
        ks17Element.val("");
        ks18Element.val("");
        ks19Element.val("");
        ks20Element.val("");
        ks21Element.val("");
        ks22Element.val("");
        ks23Element.val("");
        ks24Element.val("");
        ks25Element.val("");
        ks26Element.val("");
        ks27Element.val("");
        ks28Element.val("");
        ks29Element.val("");
        ks30Element.val("");
        ks31Element.val("");
        ks32Element.val("");
        ks33Element.val("");
        ks34Element.val("");
        ks35Element.val("");
        ks36Element.val("");
        ks37Element.val("");
        ks38Element.val("");
        ks39Element.val("");
        ks40Element.val("");
        ks41Element.val("");
        ks42Element.val("");
        ks43Element.val("");
        ks44Element.val("");
        ks45Element.val("");
        ks46Element.val("");
        ks47Element.val("");
        ks48Element.val("");
        ks49Element.val("");
        ks50Element.val("");
        ks51Element.val("");
        ks52Element.val("");
        ks53Element.val("");
        ks54Element.val("");
        ks55Element.val("");
        ks56Element.val("");
        ks57Element.val("");
        ks58Element.val("");
        ks59Element.val("");
        ks60Element.val("");
        ks61Element.val("");
        ks62Element.val("");
        ks63Element.val("");
        ks64Element.val("");
        ks65Element.val("");
        ks66Element.val("");
        ks67Element.val("");
        ks68Element.val("");
        ks69aElement.val("");
        ks69bElement.val("");
        ks69cElement.val("");
        ks69dElement.val("");
        ks69eElement.val("");
        ks69fElement.val("");
        ks69gElement.val("");
        ks69hElement.val("");
        ks69iElement.val("");
        ks69jElement.val("");
        ks69kElement.val("");
        ks69lElement.val("");
        ks70Element.val("");
        sl1Element.val("");
        sl1aElement.val("");
        sl2Element.val("");
        sl2aElement.val("");
        sl3Element.val("");
        sl3aElement.val("");
        sl4Element.val("");
        sl4aElement.val("");
        sl5Element.val("");
        sl5aElement.val("");
        sl6Element.val("");
        sl6aElement.val("");
        sl7Element.val("");
        sl7aElement.val("");
        sl8Element.val("");
        sl8aElement.val("");
        sl9Element.val("");
        sl9aElement.val("");
        sl10Element.val("");
        sl10aElement.val("");
        sl11Element.val("");
        sl12Element.val("");
        sl13Element.val("");
        sl14Element.val("");
        sl15Element.val("");
        sl16Element.val("");
        sl17Element.val("");
        sl18Element.val("");
        sl19Element.val("");
        sl20Element.val("");
        sl21Element.val("");
        sl22Element.val("");
        sl23Element.val("");
        sl24Element.val("");
        sl24aElement.val("");
        sl25Element.val("");
        sl26Element.val("");
        sl27Element.val("");
    });

    $(".js-pemeriksaan-fisik-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-pemeriksaan-fisik');
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var tdElement = formElement.find("#td");
        var td2Element = formElement.find("#td2");
        var nadiElement = formElement.find("#nadi");
        var tbElement = formElement.find("#td");
        var bbElement = formElement.find("#bb");
        var medrecElement = formElement.find("#medrec");
        var kesadaranElement = formElement.find("#kesadaran");
        var ks1Element = formElement.find("#ks1");
        var ks2Element = formElement.find("#ks2");
        var ks3Element = formElement.find("#ks3");
        var ks4Element = formElement.find("#ks4");
        var ks5Element = formElement.find("#ks5");
        var ks6Element = formElement.find("#ks6");
        var ks7Element = formElement.find("#ks7");
        var ks8Element = formElement.find("#ks8");
        var ks9Element = formElement.find("#ks9");
        var ks10Element = formElement.find("#ks10");
        var ks11Element = formElement.find("#ks11");
        var ks12Element = formElement.find("#ks12");
        var ks13Element = formElement.find("#ks13");
        var ks14Element = formElement.find("#ks14");
        var ks15Element = formElement.find("#ks15");
        var ks16Element = formElement.find("#ks16");
        var ks17Element = formElement.find("#ks17");
        var ks18Element = formElement.find("#ks18");
        var ks19Element = formElement.find("#ks19");
        var ks20Element = formElement.find("#ks20");
        var ks21Element = formElement.find("#ks21");
        var ks22Element = formElement.find("#ks22");
        var ks23Element = formElement.find("#ks23");
        var ks24Element = formElement.find("#ks24");
        var ks25Element = formElement.find("#ks25");
        var ks26Element = formElement.find("#ks26");
        var ks27Element = formElement.find("#ks27");
        var ks28Element = formElement.find("#ks28");
        var ks29Element = formElement.find("#ks29");
        var ks30Element = formElement.find("#ks30");
        var ks31Element = formElement.find("#ks31");
        var ks32Element = formElement.find("#ks32");
        var ks33Element = formElement.find("#ks33");
        var ks34Element = formElement.find("#ks34");
        var ks35Element = formElement.find("#ks35");
        var ks36Element = formElement.find("#ks36");
        var ks37Element = formElement.find("#ks37");
        var ks38Element = formElement.find("#ks38");
        var ks39Element = formElement.find("#ks39");
        var ks40Element = formElement.find("#ks40");
        var ks41Element = formElement.find("#ks41");
        var ks42Element = formElement.find("#ks42");
        var ks43Element = formElement.find("#ks43");
        var ks44Element = formElement.find("#ks44");
        var ks45Element = formElement.find("#ks45");
        var ks46Element = formElement.find("#ks46");
        var ks47Element = formElement.find("#ks47");
        var ks48Element = formElement.find("#ks48");
        var ks49Element = formElement.find("#ks49");
        var ks50Element = formElement.find("#ks50");
        var ks51Element = formElement.find("#ks51");
        var ks52Element = formElement.find("#ks52");
        var ks53Element = formElement.find("#ks53");
        var ks54Element = formElement.find("#ks54");
        var ks55Element = formElement.find("#ks55");
        var ks56Element = formElement.find("#ks56");
        var ks57Element = formElement.find("#ks57");
        var ks58Element = formElement.find("#ks58");
        var ks59Element = formElement.find("#ks59");
        var ks60Element = formElement.find("#ks60");
        var ks61Element = formElement.find("#ks61");
        var ks62Element = formElement.find("#ks62");
        var ks63Element = formElement.find("#ks63");
        var ks64Element = formElement.find("#ks64");
        var ks65Element = formElement.find("#ks65");
        var ks66Element = formElement.find("#ks66");
        var ks67Element = formElement.find("#ks67");
        var ks68Element = formElement.find("#ks68");
        var ks69aElement = formElement.find("#ks69a");
        var ks69bElement = formElement.find("#ks69b");
        var ks69cElement = formElement.find("#ks69c");
        var ks69dElement = formElement.find("#ks69d");
        var ks69eElement = formElement.find("#ks69e");
        var ks69fElement = formElement.find("#ks69f");
        var ks69gElement = formElement.find("#ks69g");
        var ks69hElement = formElement.find("#ks69h");
        var ks69iElement = formElement.find("#ks69i");
        var ks69jElement = formElement.find("#ks69j");
        var ks69kElement = formElement.find("#ks69k");
        var ks69lElement = formElement.find("#ks69l");
        var ks70Element = formElement.find("#ks70");
        var sl1Element = formElement.find("#sl1");
        var sl1aElement = formElement.find("#sl1a");
        var sl2Element = formElement.find("#sl2");
        var sl2aElement = formElement.find("#sl2a");
        var sl3Element = formElement.find("#sl3");
        var sl3aElement = formElement.find("#sl3a");
        var sl4Element = formElement.find("#sl4");
        var sl4aElement = formElement.find("#sl4a");
        var sl5Element = formElement.find("#sl5");
        var sl5aElement = formElement.find("#sl5a");
        var sl6Element = formElement.find("#sl6");
        var sl6aElement = formElement.find("#sl6a");
        var sl7Element = formElement.find("#sl7");
        var sl7aElement = formElement.find("#sl7a");
        var sl8Element = formElement.find("#sl8");
        var sl8aElement = formElement.find("#sl8a");
        var sl9Element = formElement.find("#sl9");
        var sl9aElement = formElement.find("#sl9a");
        var sl10Element = formElement.find("#sl10");
        var sl10aElement = formElement.find("#sl0a");
        var sl11Element = formElement.find("#sl11");
        var sl12Element = formElement.find("#sl12");
        var sl13Element = formElement.find("#sl13");
        var sl14Element = formElement.find("#sl14");
        var sl15Element = formElement.find("#sl15");
        var sl16Element = formElement.find("#sl16");
        var sl17Element = formElement.find("#sl17");
        var sl18Element = formElement.find("#sl18");
        var sl19Element = formElement.find("#sl19");
        var sl20Element = formElement.find("#sl20");
        var sl21Element = formElement.find("#sl21");
        var sl22Element = formElement.find("#sl22");
        var sl23Element = formElement.find("#sl23");
        var sl24Element = formElement.find("#sl24");
        var sl24aElement = formElement.find("#sl24a");
        var sl25Element = formElement.find("#sl25");
        var sl26Element = formElement.find("#sl26");
        var sl27Element = formElement.find("#sl27");
        var _idPasien = idPasienElement.val();
        var _kunjungan = kunjunganElement.val();
        var _tglPeriksa = tglPeriksaElement.val();
        var _td = tdElement.val();
        var _td2 = td2Element.val();
        var _nadi = nadiElement.val();
        var _tb = tdElement.val();
        var _bb = bbElement.val();
        var _medrec = medrecElement.val();
        var _kesadaran = kesadaranElement.val();
        var _ks1 = ks1Element.val();
        var _ks2 = ks2Element.val();
        var _ks3 = ks3Element.val();
        var _ks4 = ks4Element.val();
        var _ks5 = ks5Element.val();
        var _ks6 = ks6Element.val();
        var _ks7 = ks7Element.val();
        var _ks8 = ks8Element.val();
        var _ks9 = ks9Element.val();
        var _ks10 = ks10Element.val();
        var _ks11 = ks11Element.val();
        var _ks12 = ks12Element.val();
        var _ks13 = ks13Element.val();
        var _ks14 = ks14Element.val();
        var _ks15 = ks15Element.val();
        var _ks16 = ks16Element.val();
        var _ks17 = ks17Element.val();
        var _ks18 = ks18Element.val();
        var _ks19 = ks19Element.val();
        var _ks20 = ks20Element.val();
        var _ks21 = ks21Element.val();
        var _ks22 = ks22Element.val();
        var _ks23 = ks23Element.val();
        var _ks24 = ks24Element.val();
        var _ks25 = ks25Element.val();
        var _ks26 = ks26Element.val();
        var _ks27 = ks27Element.val();
        var _ks28 = ks28Element.val();
        var _ks29 = ks29Element.val();
        var _ks30 = ks30Element.val();
        var _ks31 = ks31Element.val();
        var _ks32 = ks32Element.val();
        var _ks33 = ks33Element.val();
        var _ks34 = ks34Element.val();
        var _ks35 = ks35Element.val();
        var _ks36 = ks36Element.val();
        var _ks37 = ks37Element.val();
        var _ks38 = ks38Element.val();
        var _ks39 = ks39Element.val();
        var _ks40 = ks40Element.val();
        var _ks41 = ks41Element.val();
        var _ks42 = ks42Element.val();
        var _ks43 = ks43Element.val();
        var _ks44 = ks44Element.val();
        var _ks45 = ks45Element.val();
        var _ks46 = ks46Element.val();
        var _ks47 = ks47Element.val();
        var _ks48 = ks48Element.val();
        var _ks49 = ks49Element.val();
        var _ks50 = ks50Element.val();
        var _ks51 = ks51Element.val();
        var _ks52 = ks52Element.val();
        var _ks53 = ks53Element.val();
        var _ks54 = ks54Element.val();
        var _ks55 = ks55Element.val();
        var _ks56 = ks56Element.val();
        var _ks57 = ks57Element.val();
        var _ks58 = ks58Element.val();
        var _ks59 = ks59Element.val();
        var _ks60 = ks60Element.val();
        var _ks61 = ks61Element.val();
        var _ks62 = ks62Element.val();
        var _ks63 = ks63Element.val();
        var _ks64 = ks64Element.val();
        var _ks65 = ks65Element.val();
        var _ks66 = ks66Element.val();
        var _ks67 = ks67Element.val();
        var _ks68 = ks68Element.val();
        var _ks69a = ks69aElement.val();
        var _ks69b = ks69bElement.val();
        var _ks69c = ks69cElement.val();
        var _ks69d = ks69dElement.val();
        var _ks69e = ks69eElement.val();
        var _ks69f = ks69fElement.val();
        var _ks69g = ks69gElement.val();
        var _ks69h = ks69hElement.val();
        var _ks69i = ks69iElement.val();
        var _ks69j = ks69jElement.val();
        var _ks69k = ks69kElement.val();
        var _ks69l = ks69lElement.val();
        var _ks70 = ks70Element.val();
        var _sl1 = sl1Element.val();
        var _sl1a = sl1aElement.val();
        var _sl2 = sl2Element.val();
        var _sl2a = sl2aElement.val();
        var _sl3 = sl3Element.val();
        var _sl3a = sl3aElement.val();
        var _sl4 = sl4Element.val();
        var _sl4a = sl4aElement.val();
        var _sl5 = sl5Element.val();
        var _sl5a = sl5aElement.val();
        var _sl6 = sl6Element.val();
        var _sl6a = sl6aElement.val();
        var _sl7 = sl7Element.val();
        var _sl7a = sl7aElement.val();
        var _sl8 = sl8Element.val();
        var _sl8a = sl8aElement.val();
        var _sl9 = sl9Element.val();
        var _sl9a = sl9aElement.val();
        var _sl10 = sl10Element.val();
        var _sl10a = sl10aElement.val();
        var _sl11 = sl11Element.val();
        var _sl12 = sl12Element.val();
        var _sl13 = sl13Element.val();
        var _sl14 = sl14Element.val();
        var _sl15 = sl15Element.val();
        var _sl16 = sl16Element.val();
        var _sl17 = sl17Element.val();
        var _sl18 = sl18Element.val();
        var _sl19 = sl19Element.val();
        var _sl20 = sl20Element.val();
        var _sl21 = sl21Element.val();
        var _sl22 = sl22Element.val();
        var _sl23 = sl23Element.val();
        var _sl24 = sl24Element.val();
        var _sl24a = sl24aElement.val();
        var _sl25 = sl25Element.val();
        var _sl26 = sl26Element.val();
        var _sl27 = sl27Element.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {
                idPasien : _idPasien,
                kunjungan : _kunjungan,
                tglPeriksa : _tglPeriksa,
                td : _td,
                td2 : _td2,
                nadi : _nadi,
                tb : _td,
                bb : _bb,
                medrec : _medrec,
                kesadaran : _kesadaran,
                ks1 : _ks1,
                ks2 : _ks2,
                ks3 : _ks3,
                ks4 : _ks4,
                ks5 : _ks5,
                ks6 : _ks6,
                ks7 : _ks7,
                ks8 : _ks8,
                ks9 : _ks9,
                ks10 : _ks10,
                ks11 : _ks11,
                ks12 : _ks12,
                ks13 : _ks13,
                ks14 : _ks14,
                ks15 : _ks15,
                ks16 : _ks16,
                ks17 : _ks17,
                ks18 : _ks18,
                ks19 : _ks19,
                ks20 : _ks20,
                ks21 : _ks21,
                ks22 : _ks22,
                ks23 : _ks23,
                ks24 : _ks24,
                ks25 : _ks25,
                ks26 : _ks26,
                ks27 : _ks27,
                ks28 : _ks28,
                ks29 : _ks29,
                ks30 : _ks30,
                ks31 : _ks31,
                ks32 : _ks32,
                ks33 : _ks33,
                ks34 : _ks34,
                ks35 : _ks35,
                ks36 : _ks36,
                ks37 : _ks37,
                ks38 : _ks38,
                ks39 : _ks39,
                ks40 : _ks40,
                ks41 : _ks41,
                ks42 : _ks42,
                ks43 : _ks43,
                ks44 : _ks44,
                ks45 : _ks45,
                ks46 : _ks46,
                ks47 : _ks47,
                ks48 : _ks48,
                ks49 : _ks49,
                ks50 : _ks50,
                ks51 : _ks51,
                ks52 : _ks52,
                ks53 : _ks53,
                ks54 : _ks54,
                ks55 : _ks55,
                ks56 : _ks56,
                ks57 : _ks57,
                ks58 : _ks58,
                ks59 : _ks59,
                ks60 : _ks60,
                ks61 : _ks61,
                ks62 : _ks62,
                ks63 : _ks63,
                ks64 : _ks64,
                ks65 : _ks65,
                ks66 : _ks66,
                ks67 : _ks67,
                ks68 : _ks68,
                ks69a : _ks69a,
                ks69b : _ks69b,
                ks69c : _ks69c,
                ks69d : _ks69d,
                ks69e : _ks69e,
                ks69f : _ks69f,
                ks69g : _ks69g,
                ks69h : _ks69h,
                ks69i : _ks69i,
                ks69j : _ks69j,
                ks69k : _ks69k,
                ks69l : _ks69l,
                ks70 : _ks70,
                sl1 : _sl1,
                sl1a : _sl1a,
                sl2 : _sl2,
                sl2a : _sl2a,
                sl3 : _sl3,
                sl3a : _sl3a,
                sl4 : _sl4,
                sl4a : _sl4a,
                sl5 : _sl5,
                sl5a : _sl5a,
                sl6 : _sl6,
                sl6a : _sl6a,
                sl7 : _sl7,
                sl7a : _sl7a,
                sl8 : _sl8,
                sl8a : _sl8a,
                sl9 : _sl9,
                sl9a : _sl9a,
                sl10 : _sl10,
                sl10a : _sl10a,
                sl11 : _sl11,
                sl12 : _sl12,
                sl13 : _sl13,
                sl14 : _sl14,
                sl15 : _sl15,
                sl16 : _sl16,
                sl17 : _sl17,
                sl18 : _sl18,
                sl19 : _sl19,
                sl20 : _sl20,
                sl21 : _sl21,
                sl22 : _sl22,
                sl23 : _sl23,
                sl24 : _sl24,
                sl24a : _sl24a,
                sl25 : _sl25,
                sl26 : _sl26,
                sl27 : _sl27,
                _token: _token
            }
        })
        .done(function(_return){
                $("#modal-create-pemeriksaan-fisik").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pemeriksaan-fisik');
        });
    });

    $('#modal-edit-pemeriksaan-fisik').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');
        var formElement = $(this);
        var idElement = formElement.find("#id");
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var tdElement = formElement.find("#td");
        var td2Element = formElement.find("#td2");
        var nadiElement = formElement.find("#nadi");
        var tbElement = formElement.find("#td");
        var bbElement = formElement.find("#bb");
        var medrecElement = formElement.find("#medrec");
        var kesadaranElement = formElement.find("#kesadaran");
        var ks1Element = formElement.find("#ks1");
        var ks2Element = formElement.find("#ks2");
        var ks3Element = formElement.find("#ks3");
        var ks4Element = formElement.find("#ks4");
        var ks5Element = formElement.find("#ks5");
        var ks6Element = formElement.find("#ks6");
        var ks7Element = formElement.find("#ks7");
        var ks8Element = formElement.find("#ks8");
        var ks9Element = formElement.find("#ks9");
        var ks10Element = formElement.find("#ks10");
        var ks11Element = formElement.find("#ks11");
        var ks12Element = formElement.find("#ks12");
        var ks13Element = formElement.find("#ks13");
        var ks14Element = formElement.find("#ks14");
        var ks15Element = formElement.find("#ks15");
        var ks16Element = formElement.find("#ks16");
        var ks17Element = formElement.find("#ks17");
        var ks18Element = formElement.find("#ks18");
        var ks19Element = formElement.find("#ks19");
        var ks20Element = formElement.find("#ks20");
        var ks21Element = formElement.find("#ks21");
        var ks22Element = formElement.find("#ks22");
        var ks23Element = formElement.find("#ks23");
        var ks24Element = formElement.find("#ks24");
        var ks25Element = formElement.find("#ks25");
        var ks26Element = formElement.find("#ks26");
        var ks27Element = formElement.find("#ks27");
        var ks28Element = formElement.find("#ks28");
        var ks29Element = formElement.find("#ks29");
        var ks30Element = formElement.find("#ks30");
        var ks31Element = formElement.find("#ks31");
        var ks32Element = formElement.find("#ks32");
        var ks33Element = formElement.find("#ks33");
        var ks34Element = formElement.find("#ks34");
        var ks35Element = formElement.find("#ks35");
        var ks36Element = formElement.find("#ks36");
        var ks37Element = formElement.find("#ks37");
        var ks38Element = formElement.find("#ks38");
        var ks39Element = formElement.find("#ks39");
        var ks40Element = formElement.find("#ks40");
        var ks41Element = formElement.find("#ks41");
        var ks42Element = formElement.find("#ks42");
        var ks43Element = formElement.find("#ks43");
        var ks44Element = formElement.find("#ks44");
        var ks45Element = formElement.find("#ks45");
        var ks46Element = formElement.find("#ks46");
        var ks47Element = formElement.find("#ks47");
        var ks48Element = formElement.find("#ks48");
        var ks49Element = formElement.find("#ks49");
        var ks50Element = formElement.find("#ks50");
        var ks51Element = formElement.find("#ks51");
        var ks52Element = formElement.find("#ks52");
        var ks53Element = formElement.find("#ks53");
        var ks54Element = formElement.find("#ks54");
        var ks55Element = formElement.find("#ks55");
        var ks56Element = formElement.find("#ks56");
        var ks57Element = formElement.find("#ks57");
        var ks58Element = formElement.find("#ks58");
        var ks59Element = formElement.find("#ks59");
        var ks60Element = formElement.find("#ks60");
        var ks61Element = formElement.find("#ks61");
        var ks62Element = formElement.find("#ks62");
        var ks63Element = formElement.find("#ks63");
        var ks64Element = formElement.find("#ks64");
        var ks65Element = formElement.find("#ks65");
        var ks66Element = formElement.find("#ks66");
        var ks67Element = formElement.find("#ks67");
        var ks68Element = formElement.find("#ks68");
        var ks69aElement = formElement.find("#ks69a");
        var ks69bElement = formElement.find("#ks69b");
        var ks69cElement = formElement.find("#ks69c");
        var ks69dElement = formElement.find("#ks69d");
        var ks69eElement = formElement.find("#ks69e");
        var ks69fElement = formElement.find("#ks69f");
        var ks69gElement = formElement.find("#ks69g");
        var ks69hElement = formElement.find("#ks69h");
        var ks69iElement = formElement.find("#ks69i");
        var ks69jElement = formElement.find("#ks69j");
        var ks69kElement = formElement.find("#ks69k");
        var ks69lElement = formElement.find("#ks69l");
        var ks70Element = formElement.find("#ks70");
        var sl1Element = formElement.find("#sl1");
        var sl1aElement = formElement.find("#sl1a");
        var sl2Element = formElement.find("#sl2");
        var sl2aElement = formElement.find("#sl2a");
        var sl3Element = formElement.find("#sl3");
        var sl3aElement = formElement.find("#sl3a");
        var sl4Element = formElement.find("#sl4");
        var sl4aElement = formElement.find("#sl4a");
        var sl5Element = formElement.find("#sl5");
        var sl5aElement = formElement.find("#sl5a");
        var sl6Element = formElement.find("#sl6");
        var sl6aElement = formElement.find("#sl6a");
        var sl7Element = formElement.find("#sl7");
        var sl7aElement = formElement.find("#sl7a");
        var sl8Element = formElement.find("#sl8");
        var sl8aElement = formElement.find("#sl8a");
        var sl9Element = formElement.find("#sl9");
        var sl9aElement = formElement.find("#sl9a");
        var sl10Element = formElement.find("#sl10");
        var sl10aElement = formElement.find("#sl0a");
        var sl11Element = formElement.find("#sl11");
        var sl12Element = formElement.find("#sl12");
        var sl13Element = formElement.find("#sl13");
        var sl14Element = formElement.find("#sl14");
        var sl15Element = formElement.find("#sl15");
        var sl16Element = formElement.find("#sl16");
        var sl17Element = formElement.find("#sl17");
        var sl18Element = formElement.find("#sl18");
        var sl19Element = formElement.find("#sl19");
        var sl20Element = formElement.find("#sl20");
        var sl21Element = formElement.find("#sl21");
        var sl22Element = formElement.find("#sl22");
        var sl23Element = formElement.find("#sl23");
        var sl24Element = formElement.find("#sl24");
        var sl24aElement = formElement.find("#sl24a");
        var sl25Element = formElement.find("#sl25");
        var sl26Element = formElement.find("#sl26");
        var sl27Element = formElement.find("#sl27");

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
        .done(function(_return){
            idElement.val(_return.data.id);
            idPasienElement.val(_return.data.idPasien);
            kunjunganElement.val(_return.data.kunjungan);
            tglPeriksaElement.val(_return.data.tglPeriksa);
            tdElement.val(_return.data.td);
            td2Element.val(_return.data.td2);
            nadiElement.val(_return.data.nadi);
            tbElement.val(_return.data.td);
            bbElement.val(_return.data.bb);
            MedrecElement.val(_return.data.medrec);
            kesadaranElement.val(_return.data.kesadaran);
            ks1Element.val(_return.data.ks1);
            ks2Element.val(_return.data.ks2);
            ks3Element.val(_return.data.ks3);
            ks4Element.val(_return.data.ks4);
            ks5Element.val(_return.data.ks5);
            ks6Element.val(_return.data.ks6);
            ks7Element.val(_return.data.ks7);
            ks8Element.val(_return.data.ks8);
            ks9Element.val(_return.data.ks9);
            ks10Element.val(_return.data.ks10);
            ks11Element.val(_return.data.ks11);
            ks12Element.val(_return.data.ks12);
            ks13Element.val(_return.data.ks13);
            ks14Element.val(_return.data.ks14);
            ks15Element.val(_return.data.ks15);
            ks16Element.val(_return.data.ks16);
            ks17Element.val(_return.data.ks17);
            ks18Element.val(_return.data.ks18);
            ks19Element.val(_return.data.ks19);
            ks20Element.val(_return.data.ks20);
            ks21Element.val(_return.data.ks21);
            ks22Element.val(_return.data.ks22);
            ks23Element.val(_return.data.ks23);
            ks24Element.val(_return.data.ks24);
            ks25Element.val(_return.data.ks25);
            ks26Element.val(_return.data.ks26);
            ks27Element.val(_return.data.ks27);
            ks28Element.val(_return.data.ks28);
            ks29Element.val(_return.data.ks29);
            ks30Element.val(_return.data.ks30);
            ks31Element.val(_return.data.ks31);
            ks32Element.val(_return.data.ks32);
            ks33Element.val(_return.data.ks33);
            ks34Element.val(_return.data.ks34);
            ks35Element.val(_return.data.ks35);
            ks36Element.val(_return.data.ks36);
            ks37Element.val(_return.data.ks37);
            ks38Element.val(_return.data.ks38);
            ks39Element.val(_return.data.ks39);
            ks40Element.val(_return.data.ks40);
            ks41Element.val(_return.data.ks41);
            ks42Element.val(_return.data.ks42);
            ks43Element.val(_return.data.ks43);
            ks44Element.val(_return.data.ks44);
            ks45Element.val(_return.data.ks45);
            ks46Element.val(_return.data.ks46);
            ks47Element.val(_return.data.ks47);
            ks48Element.val(_return.data.ks48);
            ks49Element.val(_return.data.ks49);
            ks50Element.val(_return.data.ks50);
            ks51Element.val(_return.data.ks51);
            ks52Element.val(_return.data.ks52);
            ks53Element.val(_return.data.ks53);
            ks54Element.val(_return.data.ks54);
            ks55Element.val(_return.data.ks55);
            ks56Element.val(_return.data.ks56);
            ks57Element.val(_return.data.ks57);
            ks58Element.val(_return.data.ks58);
            ks59Element.val(_return.data.ks59);
            ks60Element.val(_return.data.ks60);
            ks61Element.val(_return.data.ks61);
            ks62Element.val(_return.data.ks62);
            ks63Element.val(_return.data.ks63);
            ks64Element.val(_return.data.ks64);
            ks65Element.val(_return.data.ks65);
            ks66Element.val(_return.data.ks66);
            ks67Element.val(_return.data.ks67);
            ks68Element.val(_return.data.ks68);
            ks69aElement.val(_return.data.ks69a);
            ks69bElement.val(_return.data.ks69b);
            ks69cElement.val(_return.data.ks69c);
            ks69dElement.val(_return.data.ks69d);
            ks69eElement.val(_return.data.ks69e);
            ks69fElement.val(_return.data.ks69f);
            ks69gElement.val(_return.data.ks69g);
            ks69hElement.val(_return.data.ks69h);
            ks69iElement.val(_return.data.ks69i);
            ks69jElement.val(_return.data.ks69j);
            ks69kElement.val(_return.data.ks69k);
            ks69lElement.val(_return.data.ks69l);
            ks70Element.val(_return.data.ks70);
            sl1Element.val(_return.data.sl1);
            sl1aElement.val(_return.data.sl1a);
            sl2Element.val(_return.data.sl2);
            sl2aElement.val(_return.data.sl2a);
            sl3Element.val(_return.data.sl3);
            sl3aElement.val(_return.data.sl3a);
            sl4Element.val(_return.data.sl4);
            sl4aElement.val(_return.data.sl4a);
            sl5Element.val(_return.data.sl5);
            sl5aElement.val(_return.data.sl5a);
            sl6Element.val(_return.data.sl6);
            sl6aElement.val(_return.data.sl6a);
            sl7Element.val(_return.data.sl7);
            sl7aElement.val(_return.data.sl7a);
            sl8Element.val(_return.data.sl8);
            sl8aElement.val(_return.data.sl8a);
            sl9Element.val(_return.data.sl9);
            sl9aElement.val(_return.data.sl9a);
            sl10Element.val(_return.data.sl10);
            sl10aElement.val(_return.data.sl0a);
            sl11Element.val(_return.data.sl11);
            sl12Element.val(_return.data.sl12);
            sl13Element.val(_return.data.sl13);
            sl14Element.val(_return.data.sl14);
            sl15Element.val(_return.data.sl15);
            sl16Element.val(_return.data.sl16);
            sl17Element.val(_return.data.sl17);
            sl18Element.val(_return.data.sl18);
            sl19Element.val(_return.data.sl19);
            sl20Element.val(_return.data.sl20);
            sl21Element.val(_return.data.sl21);
            sl22Element.val(_return.data.sl22);
            sl23Element.val(_return.data.sl23);
            sl24Element.val(_return.data.sl24);
            sl24aElement.val(_return.data.sl24a);
            sl25Element.val(_return.data.sl25);
            sl26Element.val(_return.data.sl26);
            sl27Element.val(_return.data.sl27);
        });
    });

    $(".js-pemeriksaan-fisik-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-pemeriksaan-fisik');
        var idElement = formElement.find("#id");
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var tdElement = formElement.find("#td");
        var td2Element = formElement.find("#td2");
        var nadiElement = formElement.find("#nadi");
        var tbElement = formElement.find("#td");
        var bbElement = formElement.find("#bb");
        var medrecElement = formElement.find("#medrec");
        var kesadaranElement = formElement.find("#kesadaran");
        var ks1Element = formElement.find("#ks1");
        var ks2Element = formElement.find("#ks2");
        var ks3Element = formElement.find("#ks3");
        var ks4Element = formElement.find("#ks4");
        var ks5Element = formElement.find("#ks5");
        var ks6Element = formElement.find("#ks6");
        var ks7Element = formElement.find("#ks7");
        var ks8Element = formElement.find("#ks8");
        var ks9Element = formElement.find("#ks9");
        var ks10Element = formElement.find("#ks10");
        var ks11Element = formElement.find("#ks11");
        var ks12Element = formElement.find("#ks12");
        var ks13Element = formElement.find("#ks13");
        var ks14Element = formElement.find("#ks14");
        var ks15Element = formElement.find("#ks15");
        var ks16Element = formElement.find("#ks16");
        var ks17Element = formElement.find("#ks17");
        var ks18Element = formElement.find("#ks18");
        var ks19Element = formElement.find("#ks19");
        var ks20Element = formElement.find("#ks20");
        var ks21Element = formElement.find("#ks21");
        var ks22Element = formElement.find("#ks22");
        var ks23Element = formElement.find("#ks23");
        var ks24Element = formElement.find("#ks24");
        var ks25Element = formElement.find("#ks25");
        var ks26Element = formElement.find("#ks26");
        var ks27Element = formElement.find("#ks27");
        var ks28Element = formElement.find("#ks28");
        var ks29Element = formElement.find("#ks29");
        var ks30Element = formElement.find("#ks30");
        var ks31Element = formElement.find("#ks31");
        var ks32Element = formElement.find("#ks32");
        var ks33Element = formElement.find("#ks33");
        var ks34Element = formElement.find("#ks34");
        var ks35Element = formElement.find("#ks35");
        var ks36Element = formElement.find("#ks36");
        var ks37Element = formElement.find("#ks37");
        var ks38Element = formElement.find("#ks38");
        var ks39Element = formElement.find("#ks39");
        var ks40Element = formElement.find("#ks40");
        var ks41Element = formElement.find("#ks41");
        var ks42Element = formElement.find("#ks42");
        var ks43Element = formElement.find("#ks43");
        var ks44Element = formElement.find("#ks44");
        var ks45Element = formElement.find("#ks45");
        var ks46Element = formElement.find("#ks46");
        var ks47Element = formElement.find("#ks47");
        var ks48Element = formElement.find("#ks48");
        var ks49Element = formElement.find("#ks49");
        var ks50Element = formElement.find("#ks50");
        var ks51Element = formElement.find("#ks51");
        var ks52Element = formElement.find("#ks52");
        var ks53Element = formElement.find("#ks53");
        var ks54Element = formElement.find("#ks54");
        var ks55Element = formElement.find("#ks55");
        var ks56Element = formElement.find("#ks56");
        var ks57Element = formElement.find("#ks57");
        var ks58Element = formElement.find("#ks58");
        var ks59Element = formElement.find("#ks59");
        var ks60Element = formElement.find("#ks60");
        var ks61Element = formElement.find("#ks61");
        var ks62Element = formElement.find("#ks62");
        var ks63Element = formElement.find("#ks63");
        var ks64Element = formElement.find("#ks64");
        var ks65Element = formElement.find("#ks65");
        var ks66Element = formElement.find("#ks66");
        var ks67Element = formElement.find("#ks67");
        var ks68Element = formElement.find("#ks68");
        var ks69aElement = formElement.find("#ks69a");
        var ks69bElement = formElement.find("#ks69b");
        var ks69cElement = formElement.find("#ks69c");
        var ks69dElement = formElement.find("#ks69d");
        var ks69eElement = formElement.find("#ks69e");
        var ks69fElement = formElement.find("#ks69f");
        var ks69gElement = formElement.find("#ks69g");
        var ks69hElement = formElement.find("#ks69h");
        var ks69iElement = formElement.find("#ks69i");
        var ks69jElement = formElement.find("#ks69j");
        var ks69kElement = formElement.find("#ks69k");
        var ks69lElement = formElement.find("#ks69l");
        var ks70Element = formElement.find("#ks70");
        var sl1Element = formElement.find("#sl1");
        var sl1aElement = formElement.find("#sl1a");
        var sl2Element = formElement.find("#sl2");
        var sl2aElement = formElement.find("#sl2a");
        var sl3Element = formElement.find("#sl3");
        var sl3aElement = formElement.find("#sl3a");
        var sl4Element = formElement.find("#sl4");
        var sl4aElement = formElement.find("#sl4a");
        var sl5Element = formElement.find("#sl5");
        var sl5aElement = formElement.find("#sl5a");
        var sl6Element = formElement.find("#sl6");
        var sl6aElement = formElement.find("#sl6a");
        var sl7Element = formElement.find("#sl7");
        var sl7aElement = formElement.find("#sl7a");
        var sl8Element = formElement.find("#sl8");
        var sl8aElement = formElement.find("#sl8a");
        var sl9Element = formElement.find("#sl9");
        var sl9aElement = formElement.find("#sl9a");
        var sl10Element = formElement.find("#sl10");
        var sl10aElement = formElement.find("#sl0a");
        var sl11Element = formElement.find("#sl11");
        var sl12Element = formElement.find("#sl12");
        var sl13Element = formElement.find("#sl13");
        var sl14Element = formElement.find("#sl14");
        var sl15Element = formElement.find("#sl15");
        var sl16Element = formElement.find("#sl16");
        var sl17Element = formElement.find("#sl17");
        var sl18Element = formElement.find("#sl18");
        var sl19Element = formElement.find("#sl19");
        var sl20Element = formElement.find("#sl20");
        var sl21Element = formElement.find("#sl21");
        var sl22Element = formElement.find("#sl22");
        var sl23Element = formElement.find("#sl23");
        var sl24Element = formElement.find("#sl24");
        var sl24aElement = formElement.find("#sl24a");
        var sl25Element = formElement.find("#sl25");
        var sl26Element = formElement.find("#sl26");
        var sl27Element = formElement.find("#sl27");
        var _id = idElement.val();
        var _idPasien = idPasienElement.val();
        var _kunjungan = kunjunganElement.val();
        var _tglPeriksa = tglPeriksaElement.val();
        var _td = tdElement.val();
        var _td2 = td2Element.val();
        var _nadi = nadiElement.val();
        var _tb = tdElement.val();
        var _bb = bbElement.val();
        var _medrec = medrecElement.val();
        var _kesadaran = kesadaranElement.val();
        var _ks1 = ks1Element.val();
        var _ks2 = ks2Element.val();
        var _ks3 = ks3Element.val();
        var _ks4 = ks4Element.val();
        var _ks5 = ks5Element.val();
        var _ks6 = ks6Element.val();
        var _ks7 = ks7Element.val();
        var _ks8 = ks8Element.val();
        var _ks9 = ks9Element.val();
        var _ks10 = ks10Element.val();
        var _ks11 = ks11Element.val();
        var _ks12 = ks12Element.val();
        var _ks13 = ks13Element.val();
        var _ks14 = ks14Element.val();
        var _ks15 = ks15Element.val();
        var _ks16 = ks16Element.val();
        var _ks17 = ks17Element.val();
        var _ks18 = ks18Element.val();
        var _ks19 = ks19Element.val();
        var _ks20 = ks20Element.val();
        var _ks21 = ks21Element.val();
        var _ks22 = ks22Element.val();
        var _ks23 = ks23Element.val();
        var _ks24 = ks24Element.val();
        var _ks25 = ks25Element.val();
        var _ks26 = ks26Element.val();
        var _ks27 = ks27Element.val();
        var _ks28 = ks28Element.val();
        var _ks29 = ks29Element.val();
        var _ks30 = ks30Element.val();
        var _ks31 = ks31Element.val();
        var _ks32 = ks32Element.val();
        var _ks33 = ks33Element.val();
        var _ks34 = ks34Element.val();
        var _ks35 = ks35Element.val();
        var _ks36 = ks36Element.val();
        var _ks37 = ks37Element.val();
        var _ks38 = ks38Element.val();
        var _ks39 = ks39Element.val();
        var _ks40 = ks40Element.val();
        var _ks41 = ks41Element.val();
        var _ks42 = ks42Element.val();
        var _ks43 = ks43Element.val();
        var _ks44 = ks44Element.val();
        var _ks45 = ks45Element.val();
        var _ks46 = ks46Element.val();
        var _ks47 = ks47Element.val();
        var _ks48 = ks48Element.val();
        var _ks49 = ks49Element.val();
        var _ks50 = ks50Element.val();
        var _ks51 = ks51Element.val();
        var _ks52 = ks52Element.val();
        var _ks53 = ks53Element.val();
        var _ks54 = ks54Element.val();
        var _ks55 = ks55Element.val();
        var _ks56 = ks56Element.val();
        var _ks57 = ks57Element.val();
        var _ks58 = ks58Element.val();
        var _ks59 = ks59Element.val();
        var _ks60 = ks60Element.val();
        var _ks61 = ks61Element.val();
        var _ks62 = ks62Element.val();
        var _ks63 = ks63Element.val();
        var _ks64 = ks64Element.val();
        var _ks65 = ks65Element.val();
        var _ks66 = ks66Element.val();
        var _ks67 = ks67Element.val();
        var _ks68 = ks68Element.val();
        var _ks69a = ks69aElement.val();
        var _ks69b = ks69bElement.val();
        var _ks69c = ks69cElement.val();
        var _ks69d = ks69dElement.val();
        var _ks69e = ks69eElement.val();
        var _ks69f = ks69fElement.val();
        var _ks69g = ks69gElement.val();
        var _ks69h = ks69hElement.val();
        var _ks69i = ks69iElement.val();
        var _ks69j = ks69jElement.val();
        var _ks69k = ks69kElement.val();
        var _ks69l = ks69lElement.val();
        var _ks70 = ks70Element.val();
        var _sl1 = sl1Element.val();
        var _sl1a = sl1aElement.val();
        var _sl2 = sl2Element.val();
        var _sl2a = sl2aElement.val();
        var _sl3 = sl3Element.val();
        var _sl3a = sl3aElement.val();
        var _sl4 = sl4Element.val();
        var _sl4a = sl4aElement.val();
        var _sl5 = sl5Element.val();
        var _sl5a = sl5aElement.val();
        var _sl6 = sl6Element.val();
        var _sl6a = sl6aElement.val();
        var _sl7 = sl7Element.val();
        var _sl7a = sl7aElement.val();
        var _sl8 = sl8Element.val();
        var _sl8a = sl8aElement.val();
        var _sl9 = sl9Element.val();
        var _sl9a = sl9aElement.val();
        var _sl10 = sl10Element.val();
        var _sl10a = sl10aElement.val();
        var _sl11 = sl11Element.val();
        var _sl12 = sl12Element.val();
        var _sl13 = sl13Element.val();
        var _sl14 = sl14Element.val();
        var _sl15 = sl15Element.val();
        var _sl16 = sl16Element.val();
        var _sl17 = sl17Element.val();
        var _sl18 = sl18Element.val();
        var _sl19 = sl19Element.val();
        var _sl20 = sl20Element.val();
        var _sl21 = sl21Element.val();
        var _sl22 = sl22Element.val();
        var _sl23 = sl23Element.val();
        var _sl24 = sl24Element.val();
        var _sl24a = sl24aElement.val();
        var _sl25 = sl25Element.val();
        var _sl26 = sl26Element.val();
        var _sl27 = sl27Element.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {
                id : _id,
                idPasien : _idPasien,
                kunjungan : _kunjungan,
                tglPeriksa : _tglPeriksa,
                td : _td,
                td2 : _td2,
                nadi : _nadi,
                tb : _td,
                bb : _bb,
                medrec : _medrec,
                kesadaran : _kesadaran,
                ks1 : _ks1,
                ks2 : _ks2,
                ks3 : _ks3,
                ks4 : _ks4,
                ks5 : _ks5,
                ks6 : _ks6,
                ks7 : _ks7,
                ks8 : _ks8,
                ks9 : _ks9,
                ks10 : _ks10,
                ks11 : _ks11,
                ks12 : _ks12,
                ks13 : _ks13,
                ks14 : _ks14,
                ks15 : _ks15,
                ks16 : _ks16,
                ks17 : _ks17,
                ks18 : _ks18,
                ks19 : _ks19,
                ks20 : _ks20,
                ks21 : _ks21,
                ks22 : _ks22,
                ks23 : _ks23,
                ks24 : _ks24,
                ks25 : _ks25,
                ks26 : _ks26,
                ks27 : _ks27,
                ks28 : _ks28,
                ks29 : _ks29,
                ks30 : _ks30,
                ks31 : _ks31,
                ks32 : _ks32,
                ks33 : _ks33,
                ks34 : _ks34,
                ks35 : _ks35,
                ks36 : _ks36,
                ks37 : _ks37,
                ks38 : _ks38,
                ks39 : _ks39,
                ks40 : _ks40,
                ks41 : _ks41,
                ks42 : _ks42,
                ks43 : _ks43,
                ks44 : _ks44,
                ks45 : _ks45,
                ks46 : _ks46,
                ks47 : _ks47,
                ks48 : _ks48,
                ks49 : _ks49,
                ks50 : _ks50,
                ks51 : _ks51,
                ks52 : _ks52,
                ks53 : _ks53,
                ks54 : _ks54,
                ks55 : _ks55,
                ks56 : _ks56,
                ks57 : _ks57,
                ks58 : _ks58,
                ks59 : _ks59,
                ks60 : _ks60,
                ks61 : _ks61,
                ks62 : _ks62,
                ks63 : _ks63,
                ks64 : _ks64,
                ks65 : _ks65,
                ks66 : _ks66,
                ks67 : _ks67,
                ks68 : _ks68,
                ks69a : _ks69a,
                ks69b : _ks69b,
                ks69c : _ks69c,
                ks69d : _ks69d,
                ks69e : _ks69e,
                ks69f : _ks69f,
                ks69g : _ks69g,
                ks69h : _ks69h,
                ks69i : _ks69i,
                ks69j : _ks69j,
                ks69k : _ks69k,
                ks69l : _ks69l,
                ks70 : _ks70,
                sl1 : _sl1,
                sl1a : _sl1a,
                sl2 : _sl2,
                sl2a : _sl2a,
                sl3 : _sl3,
                sl3a : _sl3a,
                sl4 : _sl4,
                sl4a : _sl4a,
                sl5 : _sl5,
                sl5a : _sl5a,
                sl6 : _sl6,
                sl6a : _sl6a,
                sl7 : _sl7,
                sl7a : _sl7a,
                sl8 : _sl8,
                sl8a : _sl8a,
                sl9 : _sl9,
                sl9a : _sl9a,
                sl10 : _sl10,
                sl10a : _sl10a,
                sl11 : _sl11,
                sl12 : _sl12,
                sl13 : _sl13,
                sl14 : _sl14,
                sl15 : _sl15,
                sl16 : _sl16,
                sl17 : _sl17,
                sl18 : _sl18,
                sl19 : _sl19,
                sl20 : _sl20,
                sl21 : _sl21,
                sl22 : _sl22,
                sl23 : _sl23,
                sl24 : _sl24,
                sl24a : _sl24a,
                sl25 : _sl25,
                sl26 : _sl26,
                sl27 : _sl27,
                _token: _token
            }
        })
        .done(function(_return){
            $("#modal-edit-pemeriksaan-fisik").modal("hide");
            ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pemeriksaan-fisik');
        });
    });

    $('#modal-delete-pemeriksaan-fisik').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-pemeriksaan-fisik-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-pemeriksaan-fisik').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
        .done(function(_return){
            $("#modal-delete-pemeriksaan-fisik").modal("hide");
            ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pemeriksaan-fisik');
        });
    });
});