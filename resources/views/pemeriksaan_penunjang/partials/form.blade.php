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
    <div class="form-group">
        <h2>Pemeriksaan Penunjang</h2>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-lg-6">
            <tr>
                <td>Biopsi</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a1" name="a1" type="text" value="{{ old('a1', $a1)}}"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a2" name="a2" type="text" value="{{ old('a2', $a2)}}"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No. PA</td>
                <td><input id="a3" name="a3" type="text" value="{{ old('a3', $a3)}}"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">Hasil</td>
                <td>
                    <input id="a7_1" type="radio" name="a7" value="1" @if(old('a7', $a7)) checked @endif> Non Hodgkin Limfoma Maligna<br>
                    <input id="a7_2" type="radio" name="a7" value="2" @if(old('a7', $a7)) checked @endif> Karsinoma Tidak Berkeratin <br>
                    <input id="a7_3" type="radio" name="a7" value="3" @if(old('a7', $a7)) checked @endif> Tidak Berdiferensiasi <br>
                    <input id="a7_4" type="radio" name="a7" value="4" @if(old('a7', $a7)) checked @endif> T/NK Cell Lymphoma <br>
                    <input id="a7_5" type="radio" name="a7" value="5" @if(old('a7', $a7)) checked @endif> Adenocystic Carcinoma <br>
                    <input id="a7_6" type="radio" name="a7" value="6" @if(old('a7', $a7)) checked @endif> Karsinoma Sel Skuamosa <br>
                    <input id="a7_7" type="radio" name="a7" value="7" @if(old('a7', $a7)) checked @endif> Neuroendokrin <br>
                    <input id="a7_8" type="radio" name="a7" value="8" @if(old('a7', $a7)) checked @endif> Rhabdomyosarcoma <br>
                    <input id="a7_9" type="radio" name="a7" value="9" @if(old('a7', $a7)) checked @endif> AdenoCarsinoma <br>
                    <input id="a7_10" type="radio" name="a7" value="10" @if(old('a7', $a7)) checked @endif> Karsinoma Sel Basal <br>
                    <input id="a7_11" type="radio" name="a7" value="11" @if(old('a7', $a7)) checked @endif> Melanoma Maligna <br>
                    <input id="a7_12" type="radio" name="a7" value="12" @if(old('a7', $a7)) checked @endif> Polymorphous Low-Grade AdenoCarcinoma <br>
                    <input id="a7_13" type="radio" name="a7" value="13" @if(old('a7', $a7)) checked @endif> Mucoepidermoid Carcinoma <br>
                    <input id="a7_14" type="radio" name="a7" value="14" @if(old('a7', $a7)) checked @endif> Hemangioma <br>
                    <input id="a7_15" type="radio" name="a7" value="15" @if(old('a7', $a7)) checked @endif> Small Cell Carcinoma <br>
                    <input id="a7_16" type="radio" name="a7" value="16" @if(old('a7', $a7)) checked @endif> Atypical Carcinoid <br>
                    <input id="a7_17" type="radio" name="a7" value="17" @if(old('a7', $a7)) checked @endif> Chondrosarcoma <br>
                    <input id="a7_18" type="radio" name="a7" value="18" @if(old('a7', $a7)) checked @endif> Spindle Cell  Carcinoma <br>
                    <input id="a7_19" type="radio" name="a7" value="19" @if(old('a7', $a7)) checked @endif> Rhabdomyosarcoma <br>
                    <input id="a7_20" type="radio" name="a7" value="20" @if(old('a7', $a7)) checked @endif> Pleomorfik Adenoma <br>
                    <input id="a7_21" type="radio" name="a7" value="21" @if(old('a7', $a7)) checked @endif> Granular Cell Tumor <br>
                </td>
                <td>
                    <input id="a7_22" type="radio" name="a7" value="22" @if(old('a7', $a7)) checked @endif> Fibrus Histiositoma <br>
                    <input id="a7_24" type="radio" name="a7" value="24" @if(old('a7', $a7)) checked @endif> Chondroma <br>
                    <input id="a7_25" type="radio" name="a7" value="25" @if(old('a7', $a7)) checked @endif> Chondroblastoma <br>
                    <input id="a7_26" type="radio" name="a7" value="26" @if(old('a7', $a7)) checked @endif> Schwanoma <br>
                    <input id="a7_27" type="radio" name="a7" value="27" @if(old('a7', $a7)) checked @endif> Paraganglioma <br>
                    <input id="a7_28" type="radio" name="a7" value="28" @if(old('a7', $a7)) checked @endif> Hemangioendotelioma <br>
                    <input id="a7_29" type="radio" name="a7" value="29" @if(old('a7', $a7)) checked @endif> Vascular Malformation <br>
                    <input id="a7_30" type="radio" name="a7" value="30" @if(old('a7', $a7)) checked @endif> Struma Uninodusa Non Toksika <br>
                    <input id="a7_31" type="radio" name="a7" value="31" @if(old('a7', $a7)) checked @endif> Struma Multinodusa Non Toksika <br>
                    <input id="a7_32" type="radio" name="a7" value="32" @if(old('a7', $a7)) checked @endif> Papilari Carcinoma Tiroid <br>
                    <input id="a7_33" type="radio" name="a7" value="33" @if(old('a7', $a7)) checked @endif> Folikuler Carcinoma Tiroid <br>
                    <input id="a7_34" type="radio" name="a7" value="34" @if(old('a7', $a7)) checked @endif> Medulare Carcinoma Tiroid <br>
                    <input id="a7_35" type="radio" name="a7" value="35" @if(old('a7', $a7)) checked @endif> Anaplastic Carcinoma Tiroid <br>
                    <input id="a7_36" type="radio" name="a7" value="36" @if(old('a7', $a7)) checked @endif> Kista Duktus Tiroglosus <br>
                    <input id="a7_37" type="radio" name="a7" value="37" @if(old('a7', $a7)) checked @endif> Tumor Warthin <br>
                    <input id="a7_38" type="radio" name="a7" value="38" @if(old('a7', $a7)) checked @endif> Karsinoma Sel Asinik <br>
                    <input id="a7_39" type="radio" name="a7" value="39" @if(old('a7', $a7)) checked @endif> Kista Brankial : Tipe I <br>
                    <input id="a7_39" type="radio" name="a7" value="39" @if(old('a7', $a7)) checked @endif> Kista Brankial : Tipe II <br>
                    <input id="a7_39" type="radio" name="a7" value="39" @if(old('a7', $a7)) checked @endif> Kista Brankial : Tipe III <br>
                    <input id="a7_39" type="radio" name="a7" value="39" @if(old('a7', $a7)) checked @endif> Kista Brankial : Tipe IV <br>
                    <input id="a7_40" type="radio" name="a7" value="40" @if(old('a7', $a7)) checked @endif> Wegener’s Granulomatosis (WG) <br>
                </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><input id="a7_41" type="radio" name="a7" value="41" @if(old('a7', $a7)) checked @endif> Lainnya, sebutkan : <input id="a7a" name="a7a" type="text" value="{{ old('a7a', $a7a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td>Histokimia</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a62" name="a62" type="text" value="{{ old('a62', $a62) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a63" name="a63" type="text" value="{{ old('a63', $a63) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No. IHC</td>
                <td><input id="a64" name="a64" type="text" value="{{ old('a64', $a64) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Jenis IHC</td>
                <td><input id="a65" name="a65" type="text" value="{{ old('a65', $a65) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a66" name="a66" type="text" value="{{ old('a66', $a66) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5">Karsinoma Nasofaring : (C11.9)</td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">WHO Tipe</td>
                <td colspan="3">
                    <input id="a5_1" type="radio" name="a5" value="1" @if(old('a5',$a5) == '1') checked @endif> 1 &nbsp;&nbsp;
                    <input id="a5_2" type="radio" name="a5" value="2" @if(old('a5',$a5) == '2') checked @endif> 2 &nbsp;&nbsp;
                    <input id="a5_3" type="radio" name="a5" value="3" @if(old('a5',$a5) == '3') checked @endif> 3
                </td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">Pemeriksaan Tambahan</td>
                <td colspan="3">
                    <input id="a4a" type="text" name="a4a" value="{{ old('a4a',$a4a) }}">
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td>Hasil FNAB</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a9" name="a9" type="text" value="{{ old('a9', $a9) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a10" name="a10" type="text" value="{{ old('a10', $a10) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No. PA</td>
                <td><input id="a11" name="a11" type="text" value="{{ old('a11', $a11) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Lokasi Lesi</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">Tiroid</td>
                <td colspan="3">
                    <input id="a12_1" type="radio" name="a12" value="1" @if(old('a12',$a12) == '1') checked @endif> Kiri &nbsp;&nbsp;
                    <input id="a12_2" type="radio" name="a12" value="2" @if(old('a12',$a12) == '2') checked @endif> Kanan &nbsp;&nbsp;
                    <input id="a12_3" type="radio" name="a12" value="3" @if(old('a12',$a12) == '3') checked @endif> Bilateral
                </td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">Parotis</td>
                <td colspan="3">
                    <input id="a13_1" type="radio" name="a13" value="1" @if(old('a13',$a13) == '1') checked @endif> Kiri &nbsp;&nbsp;
                    <input id="a13_2" type="radio" name="a13" value="2" @if(old('a13',$a13) == '2') checked @endif> Kanan &nbsp;&nbsp;
                    <input id="a13_3" type="radio" name="a13" value="3" @if(old('a13',$a13) == '3') checked @endif> Bilateral
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td></td>
                <td>Lokasi KGB</td>
                <td colspan="3"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <input id="a15_1" type="radio" name="a15" value="1" @if(old('a15',$a15) == '1') checked @endif> Level Ia <br>
                    <input id="a15_2" type="radio" name="a15" value="2" @if(old('a15',$a15) == '2') checked @endif> Level Ib <br>
                    <input id="a15_3" type="radio" name="a15" value="3" @if(old('a15',$a15) == '3') checked @endif> Level IIa <br>
                    <input id="a15_4" type="radio" name="a15" value="4" @if(old('a15',$a15) == '4') checked @endif> Level IIb <br>
                    <input id="a15_5" type="radio" name="a15" value="5" @if(old('a15',$a15) == '5') checked @endif> Level III <br>
                </td>
                <td valign="top">
                    <input id="a15_6" type="radio" name="a15" value="6" @if(old('a15',$a15) == '6') checked @endif> Level IV <br>
                    <input id="a15_7" type="radio" name="a15" value="7" @if(old('a15',$a15) == '7') checked @endif> Level Va <br>
                    <input id="a15_8" type="radio" name="a15" value="8" @if(old('a15',$a15) == '8') checked @endif> Level Vb <br>
                    <input id="a15_9" type="radio" name="a15" value="9" @if(old('a15',$a15) == '9') checked @endif> Level VI <br>
                </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Lainnya, Sebutkan</td>
                <td colspan="3"><input id="a67" name="a67" type="text" value="{{ old('a67', $a67) }}" /></td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td colspan="3"><input id="a16" name="a16" type="text" value="{{ old('a16', $a16) }}" /></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td>Imaging</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>CT Scan</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a17" name="a17" type="text" value="{{ old('a17', $a17) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a18" name="a18" type="text" value="{{ old('a18', $a18) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a19" name="a19" type="text" value="{{ old('a19', $a19) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a20" name="a20" type="file" accept="image/*" type="file" data-value="{{ old('a20', $a20) }}" /><br/>
                    <input id="a201" name="a201" type="file" accept="image/*" type="file" data-value="{{ old('a201', $a201) }}" /><br/>
                    <input id="a202" name="a202" type="file" accept="image/*" type="file" data-value="{{ old('a202', $a202) }}" /><br/>
                    <input id="a203" name="a203" type="file" accept="image/*" type="file" data-value="{{ old('a203', $a203) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a20a" name="a20a" type="text" value="{{ old('a20a', $a20a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td>MRI</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a21" name="a21" type="text" value="{{ old('a21', $a21) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a22" name="a22" type="text" value="{{ old('a22', $a22) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a23" name="a23" type="text" value="{{ old('a23', $a23) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a24" name="a24" type="file" accept="image/*" type="file" data-value="{{ old('a24', $a24) }}" /><br/>
                    <input id="a241" name="a241" type="file" accept="image/*" type="file" data-value="{{ old('a241', $a241) }}" /><br/>
                    <input id="a242" name="a242" type="file" accept="image/*" type="file" data-value="{{ old('a242', $a242) }}" /><br/>
                    <input id="a243" name="a243" type="file" accept="image/*" type="file" data-value="{{ old('a243', $a243) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a24a" name="a24a" type="text" value="{{ old('a24a', $a24a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td>Rontgen Thorax</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a25" name="a25" type="text" value="{{ old('a25', $a25) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a26" name="a26" type="text" value="{{ old('a26', $a26) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a27" name="a27" type="text" value="{{ old('a27', $a27) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a28" name="a28" type="file" accept="image/*" type="file" data-value="{{ old('a28', $a28) }}" /><br/>
                    <input id="a281" name="a281" type="file" accept="image/*" type="file" data-value="{{ old('a281', $a281) }}" /><br/>
                    <input id="a282" name="a282" type="file" accept="image/*" type="file" data-value="{{ old('a282', $a282) }}" /><br/>
                    <input id="a283" name="a283" type="file" accept="image/*" type="file" data-value="{{ old('a283', $a283) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a28a" name="a28a" type="text" value="{{ old('a28a', $a28a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">USG Abdomen</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a29" name="a29" type="text" value="{{ old('a29', $a29) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a30" name="a30" type="text" value="{{ old('a30', $a30) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a31" name="a31" type="text" value="{{ old('a31', $a31) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a32" name="a32" type="file" accept="image/*" type="file" data-value="{{ old('a32', $a32) }}" /><br/>
                    <input id="a321" name="a321" type="file" accept="image/*" type="file" data-value="{{ old('a321', $a321) }}" /><br/>
                    <input id="a322" name="a322" type="file" accept="image/*" type="file" data-value="{{ old('a322', $a322) }}" /><br/>
                    <input id="a323" name="a323" type="file" accept="image/*" type="file" data-value="{{ old('a323', $a323) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a32a" name="a32a" type="text" value="{{ old('a32a', $a32a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Bone Scan</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a33" name="a33" type="text" value="{{ old('a33', $a33) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a34" name="a34" type="text" value="{{ old('a34', $a34) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a35" name="a35" type="text" value="{{ old('a35', $a35) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a36" name="a36" type="file" accept="image/*" type="file" data-value="{{ old('a36', $a36) }}" /><br/>
                    <input id="a361" name="a361" type="file" accept="image/*" type="file" data-value="{{ old('a361', $a361) }}" /><br/>
                    <input id="a362" name="a362" type="file" accept="image/*" type="file" data-value="{{ old('a362', $a362) }}" /><br/>
                    <input id="a363" name="a363" type="file" accept="image/*" type="file" data-value="{{ old('a363', $a363) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a36a" name="a36a" type="text" value="{{ old('a36a', $a36a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">USG Leher</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a37" name="a37" type="text" value="{{ old('a37', $a37) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a38" name="a38" type="text" value="{{ old('a38', $a38) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a39" name="a39" type="text" value="{{ old('a39', $a39) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a44" name="a40" type="file" accept="image/*" type="file" data-value="{{ old('a40', $a40) }}" /><br/>
                    <input id="a401" name="a401" type="file" accept="image/*" type="file" data-value="{{ old('a401', $a401) }}" /><br/>
                    <input id="a402" name="a402" type="file" accept="image/*" type="file" data-value="{{ old('a402', $a402) }}" /><br/>
                    <input id="a403" name="a403" type="file" accept="image/*" type="file" data-value="{{ old('a403', $a403) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a40a" name="a40a" type="text" value="{{ old('a40a', $a40a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">USG Tiroid</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a41" name="a41" type="text" value="{{ old('a41', $a41) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a42" name="a42" type="text" value="{{ old('a42', $a42) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a43" name="a43" type="text" value="{{ old('a43', $a43) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a44" name="a44" type="file" accept="image/*" type="file" data-value="{{ old('a44', $a44) }}" /><br/>
                    <input id="a441" name="a441" type="file" accept="image/*" type="file" data-value="{{ old('a441', $a441) }}" /><br/>
                    <input id="a442" name="a442" type="file" accept="image/*" type="file" data-value="{{ old('a442', $a442) }}" /><br/>
                    <input id="a443" name="a443" type="file" accept="image/*" type="file" data-value="{{ old('a443', $a443) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a44a" name="a44a" type="text" value="{{ old('a44a', $a44a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil Masing-masing</td>
                <td><input id="a45" name="a45" type="text" value="{{ old('a45', $a45) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Pet-Scan/MIBI</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a57" name="a57" type="text" value="{{ old('a57', $a41) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>RS</td>
                <td><input id="a58" name="a58" type="text" value="{{ old('a58', $a58) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>No</td>
                <td><input id="a59" name="a59" type="text" value="{{ old('a59', $a59) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td valign="top">File</td>
                <td colspan="3">
                    <input id="a60" name="a60" type="file" accept="image/*" type="file" data-value="{{ old('a60', $a60) }}" /><br/>
                    <input id="a601" name="a601" type="file" accept="image/*" type="file" data-value="{{ old('a601', $a601) }}" /><br/>
                    <input id="a602" name="a602" type="file" accept="image/*" type="file" data-value="{{ old('a602', $a602) }}" /><br/>
                    <input id="a603" name="a603" type="file" accept="image/*" type="file" data-value="{{ old('a603', $a603) }}" /><br/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Hasil</td>
                <td><input id="a60a" name="a60a" type="text" value="{{ old('a60a', $a60a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Pemeriksaan Tambahan</td>
                <td><input id="a45a" name="a45a" type="text" value="{{ old('a45a', $a45a) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Audiometri Nadi Murni</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a48" name="a48" type="text" value="{{ old('a48', $a48) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Rumah Sakit</td>
                <td><input id="a49" name="a49" type="text" value="{{ old('a49', $a49) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Telinga Kanan</td>
                <td><input id="a50" name="a50" type="text" value="{{ old('a50', $a50) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Telinga Kiri</td>
                <td><input id="a51" name="a51" type="text" value="{{ old('a51', $a51) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Timpanometri</td>
            </tr>
            <tr>
                <td></td>
                <td>Tanggal</td>
                <td><input id="a52" name="a52" type="text" value="{{ old('a52', $a52) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Rumah Sakit</td>
                <td><input id="a53" name="a53" type="text" value="{{ old('a53', $a53) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Telinga Kanan</td>
                <td><input id="a54" name="a54" type="text" value="{{ old('a54', $a54) }}" /></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Telinga Kiri</td>
                <td><input id="a55" name="a55" type="text" value="{{ old('a55', $a55) }}" /></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>