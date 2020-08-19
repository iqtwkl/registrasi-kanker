<form id="form" method="post" action="{{ $action }}">
    <input type="hidden" id="id" name="id" value="{{$id}}">
    <div class="form-group">
        <h3>Pasien</h3>
    </div>
    <div class="form-group">
        <label for="nama">Nama Pasien</label>
        <input id="nama" name="nama" type="text" class="form-control" value="{{ old('nama',$nama_pasien) }}">
        <input type="hidden" id="id_pasien" name="id_pasien" value="{{ old('id_pasien',$id_pasien) }}">
    </div>
    <div class="form-group">
        <label for="medrec">Medical Record</label>
        <input id="medrec" name="medrec" type="text" class="form-control" value="{{ old('medrec',$medrec) }}">
    </div>
    <div class="form-group">
        <label for="kunjungan">Kunjungan</label>
        <input id="kunjungan" name="kunjungan" type="text" class="form-control" value="{{ old('kunjungan',$kunjungan) }}">
    </div>
    <div class="form-group">
        <label for="tgl_periksa">Tanggal Periksa</label>
        <input id="tgl_periksa" name="tgl_periksa" type="text" class="form-control" value="{{ old('tgl_periksa',$tanggal_periksa) }}">
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-lg-6">
            <tr>
                <td colspan="5" align="center"><h2>Diagnosa</h2></td>
            </tr>
            <tr>
                <td width="40%" colspan="2">Tumor Meeting</td>
                <td width="20%"><input id="b1-1" type="radio" name="b1" value="1" @if(old('b1', $b1) == '1') checked @endif> Ya</td>
                <td width="20%"></td>
                <td width="20%"><input id="b1-2" type="radio" name="b1" value="2" @if(old('b1', $b1) == '2') checked @endif> Ya</td>
            </tr>
            <tr>
                <td colspan="2">Tanggal Tumor Meeting</td>
                <td colspan="3"><input id="b2" type="text" name="b2" value="1" @if(old('b2', $b2) == '1') checked @endif></td>
            </tr>
            <tr>
                <td colspan="2" valign="top">Jinak</td>
                <td colspan="3">
                    <input id="c1_1" type="radio" name="c1" value="1" @if(old('c1', $c1) == '1') checked @endif> Inverted Papiloma <br>
                    <input id="c1_2" type="radio" name="c1" value="2" @if(old('c1', $c1) == '2') checked @endif> Angifibroma Nasofaring Belia <br>
                    <input id="c1_3" type="radio" name="c1" value="3" @if(old('c1', $c1) == '3') checked @endif> Kista Brakialis <br>
                    <input id="c1_4" type="radio" name="c1" value="4" @if(old('c1', $c1) == '4') checked @endif> Wegener’s Garnulomatosis <br>
                    <input id="c1_5" type="radio" name="c1" value="5" @if(old('c1', $c1) == '5') checked @endif> Hemangioma <br>
                    <input id="c1_6" type="radio" name="c1" value="6" @if(old('c1', $c1) == '6') checked @endif> Tumor Wartin <br>
                    <input id="c1_7" type="radio" name="c1" value="7" @if(old('c1', $c1) == '7') checked @endif> Stroma Nodusa Non Toksik <br>
                    <input id="c1_8" type="radio" name="c1" value="8" @if(old('c1', $c1) == '8') checked @endif> Kista Duktus Tiroglosus <br>
                    <input id="c1_9" type="radio" name="c1" value="9" @if(old('c1', $c1) == '9') checked @endif> Papiloma <br>
                    <input id="c1_10" type="radio" name="c1" value="10" @if(old('c1', $c1) == '10') checked @endif> Kista <br>
                    <input id="c1_11" type="radio" name="c1" value="11" @if(old('c1', $c1) == '11') checked @endif> Ameloblastoma <br>
                </td>
            </tr>
            <tr>
                <td cols="2">Lainnya, sebutkan</td>
                <td colspan="3"><input id="c16" name="c16" class="form_control" value="{{ old('c16', $c16) }}"></td>
            </tr>
            <tr>
                <td colspan="2" valign="top">Ganas</td>
                <td colspan="3">
                    <input id="c2_1" type="radio" name="c2" value="1" @if(old('c2', $c2) == '1') checked @endif> Karsinoma Sinus Frontalis <br>
                    <input id="c2_3" type="radio" name="c2" value="3" @if(old('c2', $c2) == '3') checked @endif> Karsinoma Sinus Etmoidalis <br>
                    <input id="c2_4" type="radio" name="c2" value="4" @if(old('c2', $c2) == '4') checked @endif> Karsinoma Sinus Maksilaris <br>
                    <input id="c2_5" type="radio" name="c2" value="5" @if(old('c2', $c2) == '5') checked @endif> Karsinoma Sinus Spenoidalis <br>
                    <input id="c2_6" type="radio" name="c2" value="6" @if(old('c2', $c2) == '6') checked @endif> Karsinoma Kavum Nasi <br>
                    <input id="c2_12" type="radio" name="c2" value="12" @if(old('c2', $c2) == '12') checked @endif> Karsinoma sinonasal <br>
                    <input id="c2_7" type="radio" name="c2" value="7" @if(old('c2', $c2) == '7') checked @endif> Karsinoma Laring <br>
                    <input id="c2_8" type="radio" name="c2" value="8" @if(old('c2', $c2) == '8') checked @endif> Karsinoma Tiroid <br>
                    <input id="c2_9" type="radio" name="c2" value="9" @if(old('c2', $c2) == '9') checked @endif> Karsinoma Nasofaring <br>
                    <input id="c2_10" type="radio" name="c2" value="10" @if(old('c2', $c2) == '10') checked @endif> Limfoma Non Hodgkin Kepala Leher <br>
                    <input id="c2_11" type="radio" name="c2" value="11" @if(old('c2', $c2) == '11') checked @endif> Melanoma Maligna <br>
                    <input id="c2_13" type="radio" name="c2" value="13" @if(old('c2', $c2) == '13') checked @endif> Karsinoma Lidah <br>
                    <input id="c2_14" type="radio" name="c2" value="14" @if(old('c2', $c2) == '14') checked @endif> Karsinoma Basis Lidah <br>
                    <input id="c2_15" type="radio" name="c2" value="15" @if(old('c2', $c2) == '15') checked @endif> Karsinoma Orofaring <br>
                    <input id="c2_16" type="radio" name="c2" value="16" @if(old('c2', $c2) == '16') checked @endif> Karsinoma Hipofaring <br>
                    <input id="c2_17" type="radio" name="c2" value="17" @if(old('c2', $c2) == '17') checked @endif> Karsinoma Palatum <br>
                    <input id="c2_18" type="radio" name="c2" value="18" @if(old('c2', $c2) == '18') checked @endif> Karsinoma Parotis <br>
                    <input id="c2_19" type="radio" name="c2" value="19" @if(old('c2', $c2) == '19') checked @endif> Karsinoma Kelenjar Submandibular <br>
                    <input id="c2_20" type="radio" name="c2" value="20" @if(old('c2', $c2) == '20') checked @endif> Karsinoma Trakheobronkhial <br>
                    <input id="c2_21" type="radio" name="c2" value="21" @if(old('c2', $c2) == '21') checked @endif> Karsinoma 1/3 Proksimal Esofagus <br>
                    <input id="c2_22" type="radio" name="c2" value="22" @if(old('c2', $c2) == '22') checked @endif> Karsinoma Kulit Kepala Leher <br>
                    <input id="c2_24" type="radio" name="c2" value="24" @if(old('c2', $c2) == '24') checked @endif> Karsinoma Leher <br>
                    <input id="c2_23" type="radio" name="c2" value="23" @if(old('c2', $c2) == '23') checked @endif> Karsinoma Leher <br>
                </td>
            </tr>
            <tr>
                <td cols="2">Lainnya, sebutkan</td>
                <td colspan="3"><input id="c17" name="c17" class="form-control" value="{{ old('c17', $c17) }}"></td>
            </tr>
            <tr>
                <td colspan="5"><h3> Stadium Neoplasma Laring, Orofaring, Hipofaring, Rongga Mulut, Kelenjar Liur, dan Sinus Paranasal </h3></td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="b31_1" type="radio" name="b31" value="1" @if(old('b31', $b31) == '1') checked @endif> T1 <br>
                    <input id="b31_2" type="radio" name="b31" value="2" @if(old('b31', $b31) == '2') checked @endif> T2 <br>
                    <input id="b31_3" type="radio" name="b31" value="3" @if(old('b31', $b31) == '3') checked @endif> T3 <br>
                    <input id="b31_4" type="radio" name="b31" value="4" @if(old('b31', $b31) == '4') checked @endif> T4a <br>
                    <input id="b31_5" type="radio" name="b31" value="5" @if(old('b31', $b31) == '5') checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="b31_6" type="radio" name="b31" value="6" @if(old('b31', $b31) == '6') checked @endif> N1 <br>
                    <input id="b31_7" type="radio" name="b31" value="7" @if(old('b31', $b31) == '7') checked @endif> N2 <br>
                    <input id="b31_8" type="radio" name="b31" value="8" @if(old('b31', $b31) == '8') checked @endif> N2a <br>
                    <input id="b31_9" type="radio" name="b31" value="9" @if(old('b31', $b31) == '9') checked @endif> N2b <br>
                    <input id="b31_10" type="radio" name="b31" value="10" @if(old('b31', $b31) == '10') checked @endif> N3
                </td>
                <td></td>
                <td>
                    <input id="b31_11" type="radio" name="b31" value="11" @if(old('b31', $b31) == '11') checked @endif> M0 <br>
                    <input id="b31_12" type="radio" name="b31" value="12" @if(old('b31', $b31) == '12') checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c3_1" type="radio" name="c3" value="1" @if(old('c3', $c3) == '1') checked @endif> Stadium In Situ <br>
                    <input id="c3_2" type="radio" name="c3" value="2" @if(old('c3', $c3) == '2') checked @endif> Stadium I <br>
                    <input id="c3_3" type="radio" name="c3" value="3" @if(old('c3', $c3) == '3') checked @endif> Stadium II <br>
                    <input id="c3_4" type="radio" name="c3" value="4" @if(old('c3', $c3) == '4') checked @endif> Stadium IVa <br>
                    <input id="c3_5" type="radio" name="c3" value="5" @if(old('c3', $c3) == '5') checked @endif> Stadium IVb <br>
                    <input id="c3_6" type="radio" name="c3" value="6" @if(old('c3', $c3) == '6') checked @endif> Stadium IVc
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5"><h3> Stadium Karsinoma Nasofaring </h3></td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c4_1" type="radio" name="c4" value="1" @if(old('c4', $c4) == '1') checked @endif> Tis <br>
                    <input id="c4_2" type="radio" name="c4" value="2" @if(old('c4', $c4) == '2') checked @endif> T1 <br>
                    <input id="c4_3" type="radio" name="c4" value="3" @if(old('c4', $c4) == '3') checked @endif> T2 <br>
                    <input id="c4_4" type="radio" name="c4" value="4" @if(old('c4', $c4) == '4') checked @endif> T3 <br>
                    <input id="c4_5" type="radio" name="c4" value="5" @if(old('c4', $c4) == '5') checked @endif> T4a <br>
                    <input id="c4_6" type="radio" name="c4" value="6" @if(old('c4', $c4) == '6') checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c4_7" type="radio" name="c4" value="7" @if(old('c4', $c4) == '7') checked @endif> N1 <br>
                    <input id="c4_8" type="radio" name="c4" value="8" @if(old('c4', $c4) == '8') checked @endif> N2 <br>
                    <input id="c4_9" type="radio" name="c4" value="9" @if(old('c4', $c4) == '9') checked @endif> N3 <br>
                    <input id="c4_10" type="radio" name="c4" value="10" @if(old('c4', $c4) == '10') checked @endif> N4 <br>
                </td>
                <td></td>
                <td>
                    <input id="c4_11" type="radio" name="c4" value="11" @if(old('c4', $c4) == '11') checked @endif> M0 <br>
                    <input id="c4_12" type="radio" name="c4" value="12" @if(old('c4', $c4) == '12') checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c5_1" type="radio" name="c5" value="1" @if(old('c5', $c5) == '1') checked @endif> Stadium 0 <br>
                    <input id="c5_2" type="radio" name="c5" value="2" @if(old('c5', $c5) == '2') checked @endif> Stadium I <br>
                    <input id="c5_3" type="radio" name="c5" value="3" @if(old('c5', $c5) == '3') checked @endif> Stadium II <br>
                    <input id="c5_4" type="radio" name="c5" value="4" @if(old('c5', $c5) == '4') checked @endif> Stadium IVa <br>
                    <input id="c5_5" type="radio" name="c5" value="5" @if(old('c5', $c5) == '5') checked @endif> Stadium IVb <br>
                    <input id="c5_6" type="radio" name="c5" value="6" @if(old('c5', $c5) == '6') checked @endif> Stadium IVc
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5" align="center"><h3>Stadium Neoplasma Tiroid </h3></td>
            </tr>
            <tr>
                <td colspan="5">Karsinoma Papilari/Folikulari </td>
            </tr>
            <tr>
                <td colspan="5">Usia &lt; 45 tahun </td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c18_1" type="radio" name="c18" value="1" @if(old('c18', $c18) == '1') checked @endif> T1 <br>
                    <input id="c18_2" type="radio" name="c18" value="2" @if(old('c18', $c18) == '2') checked @endif> T2 <br>
                    <input id="c18_3" type="radio" name="c18" value="3" @if(old('c18', $c18) == '3') checked @endif> T3 <br>
                    <input id="c18_4" type="radio" name="c18" value="4" @if(old('c18', $c18) == '4') checked @endif> T4a <br>
                    <input id="c18_5" type="radio" name="c18" value="5" @if(old('c18', $c18) == '5') checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c18_6" type="radio" name="c18" value="6" @if(old('c18', $c18) == '6') checked @endif> N0 <br>
                    <input id="c18_7" type="radio" name="c18" value="7" @if(old('c18', $c18) == '7') checked @endif> N1a <br>
                    <input id="c18_8" type="radio" name="c18" value="8" @if(old('c18', $c18) == '8') checked @endif> N1b <br>
                    <
                <td></td>
                <td>
                    <input id="c18_8" type="radio" name="c18" value="9" @if(old('c18', $c18) == '9') checked @endif> M0 <br>
                    <input id="c18_9" type="radio" name="c18" value="10" @if(old('c18', $c18) == '10') checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c6_1" type="radio" name="c6" value="1" @if(old('c6', $c6 == '1')) checked @endif> Stadium 1 <br>
                    <input id="c6_2" type="radio" name="c6" value="2" @if(old('c6', $c6 == '2')) checked @endif> Stadium II
                </td>
            </tr>
            <tr>
                <td colspan="5">Usia &lt; 45 tahun </td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c7_1" type="radio" name="c7" value="1" @if(old('c7', $c7 == '1')) checked @endif> T1 <br>
                    <input id="c7_2" type="radio" name="c7" value="2" @if(old('c7', $c7 == '2')) checked @endif> T2 <br>
                    <input id="c7_3" type="radio" name="c7" value="3" @if(old('c7', $c7 == '3')) checked @endif> T3 <br>
                    <input id="c7_4" type="radio" name="c7" value="4" @if(old('c7', $c7 == '4')) checked @endif> T4a <br>
                    <input id="c7_5" type="radio" name="c7" value="5" @if(old('c7', $c7 == '5')) checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c7_6" type="radio" name="c7" value="6" @if(old('c7', $c7 == '6')) checked @endif> N0 <br>
                    <input id="c7_7" type="radio" name="c7" value="7" @if(old('c7', $c7 == '7')) checked @endif> N1a <br>
                    <input id="c7_8" type="radio" name="c7" value="8" @if(old('c7', $c7 == '8')) checked @endif> N1b <br>
                    <
                <td></td>
                <td>
                    <input id="c7_11" type="radio" name="c7" value="9" @if(old('c7', $c7 == '9')) checked @endif> M0 <br>
                    <input id="c7_12" type="radio" name="c7" value="10" @if(old('c7', $c7 == '10')) checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c8_1" type="radio" name="c8" value="1" @if(old('c8', $c8 == '1')) checked @endif> Stadium 1 <br>
                    <input id="c8_2" type="radio" name="c8" value="2" @if(old('c8', $c8 == '2')) checked @endif> Stadium II <br>
                    <input id="c8_2" type="radio" name="c8" value="3" @if(old('c8', $c8 == '3')) checked @endif> Stadium III <br>
                    <input id="c8_2" type="radio" name="c8" value="4" @if(old('c8', $c8 == '4')) checked @endif> Stadium IVa <br>
                    <input id="c8_2" type="radio" name="c8" value="5" @if(old('c8', $c8 == '5')) checked @endif> Stadium IVb <br>
                    <input id="c8_2" type="radio" name="c8" value="6" @if(old('c8', $c8 == '6')) checked @endif> Stadium IVc
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Karsinoma Medulari </td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c9_1" type="radio" name="c9" value="1" @if(old('c9', $c9 == '1')) checked @endif> T1 <br>
                    <input id="c9_2" type="radio" name="c9" value="2" @if(old('c9', $c9 == '2')) checked @endif> T2 <br>
                    <input id="c9_3" type="radio" name="c9" value="3" @if(old('c9', $c9 == '3')) checked @endif> T3 <br>
                    <input id="c9_4" type="radio" name="c9" value="4" @if(old('c9', $c9 == '4')) checked @endif> T4a <br>
                    <input id="c9_5" type="radio" name="c9" value="5" @if(old('c9', $c9 == '5')) checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c9_6" type="radio" name="c9" value="6" @if(old('c9', $c9 == '6')) checked @endif> N0 <br>
                    <input id="c9_7" type="radio" name="c9" value="7" @if(old('c9', $c9 == '7')) checked @endif> N1a <br>
                    <input id="c9_8" type="radio" name="c9" value="8" @if(old('c9', $c9 == '8')) checked @endif> N1b <br>
                    <
                <td></td>
                <td>
                    <input id="c9_9" type="radio" name="c9" value="9" @if(old('c9', $c9 == '9')) checked @endif> M0 <br>
                    <input id="c9_10" type="radio" name="c9" value="10" @if(old('c9', $c9 == '10')) checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c10_1" type="radio" name="c10" value="1" @if(old('c10', $c10 == '1')) checked @endif> Stadium 1 <br>
                    <input id="c10_2" type="radio" name="c10" value="2" @if(old('c10', $c10 == '2')) checked @endif> Stadium II <br>
                    <input id="c10_2" type="radio" name="c10" value="3" @if(old('c10', $c10 == '3')) checked @endif> Stadium III <br>
                    <input id="c10_2" type="radio" name="c10" value="4" @if(old('c10', $c10 == '4')) checked @endif> Stadium IVa <br>
                    <input id="c10_2" type="radio" name="c10" value="5" @if(old('c10', $c10 == '5')) checked @endif> Stadium IVb <br>
                    <input id="c10_2" type="radio" name="c10" value="6" @if(old('c10', $c10 == '6')) checked @endif> Stadium IVc
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Karsinoma Anaplastik </td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c11_1" type="radio" name="c11" value="1" @if(old('c11', $c11 == '1')) checked @endif> T4a <br>
                    <input id="c11_2" type="radio" name="c11" value="2" @if(old('c11', $c11 == '2')) checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c11_3" type="radio" name="c11" value="3" @if(old('c11', $c11 == '3')) checked @endif> N0 <br>
                    <input id="c11_4" type="radio" name="c11" value="4" @if(old('c11', $c11 == '4')) checked @endif> N1a <br>
                    <input id="c11_5" type="radio" name="c11" value="5" @if(old('c11', $c11 == '5')) checked @endif> N1b <br>
                    <
                <td></td>
                <td>
                    <input id="c11_6" type="radio" name="c11" value="6" @if(old('c11', $c11 == '6')) checked @endif> M0 <br>
                    <input id="c11_7" type="radio" name="c11" value="7" @if(old('c11', $c11 == '7')) checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c12_1" type="radio" name="c12" value="1" @if(old('c12', $c12 == '1')) checked @endif> Stadium 1 <br>
                    <input id="c12_2" type="radio" name="c12" value="2" @if(old('c12', $c12 == '2')) checked @endif> Stadium II <br>
                    <input id="c12_3" type="radio" name="c12" value="3" @if(old('c12', $c12 == '3')) checked @endif> Stadium III <br>
                    <input id="c12_4" type="radio" name="c12" value="4" @if(old('c12', $c12 == '4')) checked @endif> Stadium IVa <br>
                    <input id="c12_5" type="radio" name="c12" value="5" @if(old('c12', $c12 == '5')) checked @endif> Stadium IVb <br>
                    <input id="c12_6" type="radio" name="c12" value="6" @if(old('c12', $c12 == '6')) checked @endif> Stadium IVc
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Stadium Neoplasma Kulit Kepala Leher </td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c13_1" type="radio" name="c13" value="1" @if(old('c13', $c13 == '1')) checked @endif> T3 <br>
                    <input id="c13_2" type="radio" name="c13" value="2" @if(old('c13', $c13 == '2')) checked @endif> T4a <br>
                    <input id="c13_3" type="radio" name="c13" value="3" @if(old('c13', $c13 == '3')) checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c13_4" type="radio" name="c13" value="4" @if(old('c13', $c13 == '4')) checked @endif> N0 <br>
                    <input id="c13_5" type="radio" name="c13" value="5" @if(old('c13', $c13 == '5')) checked @endif> N1 <br>
                    <
                <td></td>
                <td>
                    <input id="c13_6" type="radio" name="c13" value="6" @if(old('c13', $c13 == '6')) checked @endif> M0 <br>
                    <input id="c13_7" type="radio" name="c13" value="7" @if(old('c13', $c13 == '7')) checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c14_1" type="radio" name="c14" value="1" @if(old('c14', $c14 == '1')) checked @endif> Stadium III <br>
                    <input id="c14_2" type="radio" name="c14" value="2" @if(old('c14', $c14 == '2')) checked @endif> Stadium IVa <br>
                    <input id="c14_2" type="radio" name="c14" value="3" @if(old('c14', $c14 == '3')) checked @endif> Stadium IVb <br>
                    <input id="c14_2" type="radio" name="c14" value="4" @if(old('c14', $c14 == '4')) checked @endif> Stadium IVc <br>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Stadium NHML </td>
            </tr>
            <tr>
                <td>T</td>
                <td></td>
                <td>N</td>
                <td></td>
                <td>M</td>
            </tr>
            <tr>
                <td>
                    <input id="c19_1" type="radio" name="c19" value="1"  @if(old('c19', $c19)) checked @endif> T3 <br>
                    <input id="c19_1" type="radio" name="c19" value="2"  @if(old('c19', $c19)) checked @endif> T4a <br>
                    <input id="c19_2" type="radio" name="c19" value="3"  @if(old('c19', $c19)) checked @endif> T4b
                </td>
                <td></td>
                <td>
                    <input id="c19_6" type="radio" name="c19" value="4"  @if(old('c19', $c19)) checked @endif> N0 <br>
                    <input id="c19_7" type="radio" name="c19" value="5"  @if(old('c19', $c19)) checked @endif> N1 <br>
                    <
                <td></td>
                <td>
                    <input id="c19_11" type="radio" name="c19" value="6"  @if(old('c19', $c19)) checked @endif> M0 <br>
                    <input id="c19_12" type="radio" name="c19" value="7"  @if(old('c19', $c19)) checked @endif> M1
                </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c20_1" type="radio" name="c20" value="1" @if(old('c20', $c20)) checked @endif> Stadium I <br>
                    <input id="c20_2" type="radio" name="c20" value="2" @if(old('c20', $c20)) checked @endif> Stadium II <br>
                    <input id="c20_3" type="radio" name="c20" value="3" @if(old('c20', $c20)) checked @endif> Stadium III <br>
                    <input id="c20_4" type="radio" name="c20" value="4" @if(old('c20', $c20)) checked @endif> Stadium IV <br>
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Stadium Angiofibroma Nasofaring Belia </td>
            </tr>
            <tr>
                <td cols="2">Stadium</td>
                <td colspan="3">
                    <input id="c22_1" type="radio" name="c22" value="1" @if(old('c22', $c22)) checked @endif> Stadium Ia <br>
                    <input id="c22_2" type="radio" name="c22" value="2" @if(old('c22', $c22)) checked @endif> Stadium Ib <br>
                    <input id="c22_3" type="radio" name="c22" value="3" @if(old('c22', $c22)) checked @endif> Stadium IIa <br>
                    <input id="c22_4" type="radio" name="c22" value="4" @if(old('c22', $c22)) checked @endif> Stadium IIb <br>
                    <input id="c22_5" type="radio" name="c22" value="5" @if(old('c22', $c22)) checked @endif> Stadium IIc <br>
                    <input id="c22_6" type="radio" name="c22" value="6" @if(old('c22', $c22)) checked @endif> Stadium IIIa <br>
                    <input id="c22_7" type="radio" name="c22" value="7" @if(old('c22', $c22)) checked @endif> Stadium IIIb
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="2">Kesimpulan </td>
                <td><input id="c15" type="text" name="c15" class="form-control" value="{{ old('c15', $c15) }}"></td>
            </tr>
        </table>
    </div>
    <div class="form_group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>