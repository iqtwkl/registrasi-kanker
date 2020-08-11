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
        <div class="col-lg-6">
            <div class="form-group">
                <label for="td_mmhg">TD/mmHg</label>
                <div class="row">
                    <div class="col-lg-4">
                        <input id="td_mmhg" name="td" type="number" class="form-control" value="{{ old('td',$td) }}">
                    </div>
                    <div class="col-lg-4">
                        <input id="td_mmhg" name="mmhg" type="number" class="form-control" value="{{ old('mmhg',$mmhg) }}">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="nadi_menit">Nadi/menit</label>
                <input id="nadi_menit" name="nadi_menit" type="text" class="form-control" value="{{ old('nadi_menit',$nadi_menit) }}">
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="col-lg-6">
            <div class="form-group">
                <label for="tinggi_badan">Tinggi Badan (cm)</label>
                <input id="tinggi_badan" name="tinggi_badan" type="text" class="form-control" value="{{ old('tinggi_badan',$tinggi_badan) }}">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label for="berat_badan">Berat Badan (kg)</label>
                <input id="berat_badan" name="berat_badan" type="text" class="form-control" value="{{ old('berat_badan',$berat_badan) }}">
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kesadaran">Kesadaran</label>
        <select id="kesadaran" name="kesadaran" class="form-control">
            <option value="0"></option>
            <option value="1" @if(old('kesadaran',$kesadaran) == '1') checked @endif>Kompos Mentis</option>
            <option value="2" @if(old('kesadaran',$kesadaran) == '2') checked @endif>Delirium</option>
            <option value="3" @if(old('kesadaran',$kesadaran) == '3') checked @endif>Somnolen</option>
            <option value="4" @if(old('kesadaran',$kesadaran) == '4') checked @endif>Koma</option>
            <option value="5" @if(old('kesadaran',$kesadaran) == '5') checked @endif>Sopor</option>
        </select>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Pemeriksaan Fisik</h3>
    </div>
    <div class="form-group">
        <label for="ks1">Skala Karnofsky </label>
        <div class="form-check">
            <input class="form-check-input" id="ks1_1" name="ks1" type="radio" value="1" @if(old('ks1',$ks1)=='1') checked @endif>
            <label class="form-check-label" for="ks1_1"> 0 &nbsp;&nbsp; Meninggal</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_2" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='2') checked @endif>
            <label class="form-check-label" for="ks1_2"> 10 &nbsp;&nbsp; Penderita sampai pada keadaan terminal (moribund), proses kematian sedang berlangsung.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_3" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='3') checked @endif>
            <label class="form-check-label" for="ks1_3"> 20 &nbsp;&nbsp; Sangat terlihat sakit. Harus mendapatkan perawatan khusus di Rumah Sakit dan perawatan penunjang yang memadai.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_4" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='4') checked @endif>
            <label class="form-check-label" for="ks1_4"> 30 &nbsp;&nbsp; Sangat tidak berdaya. Membutuhkan perawatan medis khusus di Rumah Sakit walaupun tidak dalam keadaan yang mengancam jiwa.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_5" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='5') checked @endif>
            <label class="form-check-label" for="ks1_5"> 40 &nbsp;&nbsp; Membutuhkan perhatian medis secara khusus dan pendampingan.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_6" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='6') checked @endif>
            <label class="form-check-label" for="ks1_6"> 50 &nbsp;&nbsp; Tidak dapat melakukan aktifitas sehari-hari. Sangat membutuhkan bantuan orang lain dan pengobatan medis.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_7" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='7') checked @endif>
            <label class="form-check-label" for="ks1_7"> 60 &nbsp;&nbsp; Tidak dapat melakukan aktifitas sehari-hari. Membutuhkan bantuan orang lain pada keadaan yang sangat sulit, sebagian besar keperluan diri dapat dipenuhi oleh diri sendiri.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_8" name="ks1" type="radio" value="2" @if(old('ks1',$ks1)=='8') checked @endif>
            <label class="form-check-label" for="ks1_8"> 70 &nbsp;&nbsp; Tidak dapat melakukan aktifitas sehari-hari. Mampu menjaga keadaan diri sendiri (care for self).</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_9" name="ks1" type="radio" value="9" @if(old('ks1',$ks1)=='9') checked @endif>
            <label class="form-check-label" for="ks1_9"> 80 &nbsp;&nbsp; Mampu melakukan aktifitas dengan usaha (effort). Didapatkan beberapa tanda gejala dari penyakit.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_10" name="ks1" type="radio" value="10" @if(old('ks1',$ks1)=='10') checked @endif>
            <label class="form-check-label" for="ks1_10"> 90 &nbsp;&nbsp; Mampu melakukan aktifitas sehari-hari, Didapatkan tanda minimal dari gejala dan penyakit.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks1_11" name="ks1" type="radio" value="11" @if(old('ks1',$ks1)=='11') checked @endif>
            <label class="form-check-label" for="ks1_11"> 100 &nbsp;&nbsp; Aktifitas normal, tidak ada keluhan, tidak didapatkan adanya penyakit.</label>
        </div>
    </div>
    <div class="form-group">
        <label for="ks66">Status ECOG </label>
        <div class="form-check">
            <input class="form-check-input" id="ks66_1" name="ks66" type="radio" value="1" @if(old('ks66',$ks66)=='1') checked @endif>
            <label class="form-check-label" for="ks66_1"> 0 &nbsp;&nbsp; Sepenuhnya aktif, dapat mengerjakan aktifitas sama seperti sebelum sakit tanpa ada hambatan.</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks66_2" name="ks66" type="radio" value="2" @if(old('ks66',$ks66)=='2') checked @endif>
            <label class="form-check-label" for="ks66_2"> 1 &nbsp;&nbsp; Terdapat hambatan pada aktifitas fisik berat namun masih dapat berjalan dan mengerjakan pekerjaan ringan atau pekerjaan yang sifatnya tidak banyak berpindah tempat. contohnya, pekerjaan rumah ringan, pekerjaan kantor</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks66_3" name="ks66" type="radio" value="2" @if(old('ks66',$ks66)=='3') checked @endif>
            <label class="form-check-label" for="ks66_3"> 2 &nbsp;&nbsp; Dapat berjalan dan mengurus diri sendiri namun tidak dapat mengerjakan aktifitas lainnya. Jumlah aktivitas lebih dari 50%</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks66_4" name="ks66" type="radio" value="2" @if(old('ks66',$ks66)=='4') checked @endif>
            <label class="form-check-label" for="ks66_4"> 3 &nbsp;&nbsp; Hanya dapat mengurus dirinya secara terbatas, kegiatannya terbatas di tempat tidur dan kursi lebih dari 50% dari jumlah aktivitas biasa</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks66_5" name="ks66" type="radio" value="2" @if(old('ks66',$ks66)=='5') checked @endif>
            <label class="form-check-label" for="ks66_5"> 4 &nbsp;&nbsp; Tidak dapat beraktifitas. Tidak dapat mengurus dirinya sendiri. Secara penuh terbatas pada tempat tidur</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ks66_6" name="ks66" type="radio" value="2" @if(old('ks66',$ks66)=='6') checked @endif>
            <label class="form-check-label" for="ks66_6"> 5 &nbsp;&nbsp; Kemation.</label>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Status Lokalis</h3>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6"  width="100%">
            <tr>
                <td width="36%">Telinga</td>
                <td width="32%">Kanan</td>
                <td width="32%">Kiri</td>
            </tr>
            <tr>
                <td align="right">Mukosa &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl1" id="sl1_1">
                        <option value=""></option>
                        <option value="1" @if(old('sl1',$sl1) == '1') checked @endif>Tenang</option>
                        <option value="2" @if(old('sl1',$sl1) == '2') checked @endif>Hiperemis</option>
                        <option value="3" @if(old('sl1',$sl1) == '3') checked @endif>Laserasi</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl1a" id="sl1a_1">
                        <option value=""></option>
                        <option value="1" @if(old('sl1a',$sl1a) == '1') checked @endif>Tenang</option>
                        <option value="2" @if(old('sl1a',$sl1a) == '2') checked @endif>Hiperemis</option>
                        <option value="3" @if(old('sl1a',$sl1a) == '3') checked @endif>Laserasi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Sekret &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl3" id="sl3_1">
                        <option value=""></option>
                        <option value="1" @if(old('sl3',$sl3) == '1') checked @endif>Ada</option>
                        <option value="2" @if(old('sl3',$sl3) == '2') checked @endif>Tidak</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl3a" id="sl3a_1">
                        <option value=""></option>
                        <option value="1" @if(old('sl3a',$sl3a) == '1') checked @endif>Ada</option>
                        <option value="2" @if(old('sl3a',$sl3a) == '2') checked @endif>Tidak</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Jenis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl2" id="sl2_1">
                        <option value=""></option>
                        <option value="1">Serous</option>
                        <option value="2">Mukoid</option>
                        <option value="3">Seromukoid</option>
                        <option value="4">Purulen</option>
                        <option value="5">Mukopurulen</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl2a" id="sl2a_1">
                        <option value=""></option>
                        <option value="1">Serous</option>
                        <option value="2">Mukoid</option>
                        <option value="3">Seromukoid</option>
                        <option value="4">Purulen</option>
                        <option value="5">Mukopurulen</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Membran Timpani &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl4" id="sl4_1">
                        <option value=""></option>
                        <option value="1">Intak</option>
                        <option value="2">Perforasi</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl4a" id="sl4a_1">
                        <option value=""></option>
                        <option value="1">Intak</option>
                        <option value="2">Perforasi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Jenis Perforasi &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl5" id="sl5_1">
                        <option value=""></option>
                        <option value="1">Sentral</option>
                        <option value="2">Marginal</option>
                        <option value="3">Total</option>
                        <option value="4">Tidak Dapat Dinilai</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl5a" id="sl5a_1">
                        <option value=""></option>
                        <option value="1">Sentral</option>
                        <option value="2">Marginal</option>
                        <option value="3">Total</option>
                        <option value="4">Tidak Dapat Dinilai</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
    <div class="form-row"><br/></div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="36%">Hidung</td>
                <td width="32%">Kanan</td>
                <td width="32%">Kiri</td>
            </tr>
            <tr>
                <td align="right">Mukosa &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl6" id="sl6_1">
                        <option value=""></option>
                        <option value="1">Tenang</option>
                        <option value="2">Hiperemis</option>
                        <option value="3">Laserasi</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl6a" id="sl6a_1">
                        <option value=""></option>
                        <option value="1">Tenang</option>
                        <option value="2">Hiperemis</option>
                        <option value="3">Laserasi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Sekret &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl24" id="sl24_1">
                        <option value=""></option>
                        <option value="1">Ada</option>
                        <option value="2">Tidak</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl24a" id="sl24a_1">
                        <option value=""></option>
                        <option value="1">Ada</option>
                        <option value="2">Tidak</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Jenis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl7" id="sl7_1">
                        <option value=""></option>
                        <option value="1">Serous</option>
                        <option value="2">Mukoid</option>
                        <option value="3">Seromukoid</option>
                        <option value="4">Purulen</option>
                        <option value="5">Mukopurulen</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl7a" id="sl7a_1">
                        <option value=""></option>
                        <option value="1">Serous</option>
                        <option value="2">Mukoid</option>
                        <option value="3">Seromukoid</option>
                        <option value="4">Purulen</option>
                        <option value="5">Mukopurulen</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Konka &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl8" id="sl8_1">
                        <option value=""></option>
                        <option value="1">Eutrofi</option>
                        <option value="2">Hipertrofi</option>
                        <option value="3">Atrofi</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl8a" id="sl8a_1">
                        <option value=""></option>
                        <option value="1">Eutrofi</option>
                        <option value="2">Hipertrofi</option>
                        <option value="3">Atrofi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Septum &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl9" id="sl9_1">
                        <option value=""></option>
                        <option value="1">Tidak Ada Deviasi</option>
                        <option value="2">Deviasi</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl9a" id="sl9a_1">
                        <option value=""></option>
                        <option value="1">Tidak Ada Deviasi</option>
                        <option value="2">Deviasi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Pasase Udara &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="sl10" id="sl10_1">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Menurun</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="sl10a" id="sl10a_1">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Menurun</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="36%">Nasofaring Orofaring</td>
                <td width="32%">Kanan</td>
                <td width="32%">Kiri</td>
            </tr>
            <tr>
                <td align="right">Tonsil &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks30" id="ks30">
                        <option value=""></option>
                        <option value="1">T0</option>
                        <option value="2">T1</option>
                        <option value="3">T2</option>
                        <option value="4">T3</option>
                        <option value="5">T4</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="ks31" id="ks31">
                        <option value=""></option>
                        <option value="1">T0</option>
                        <option value="2">T1</option>
                        <option value="3">T2</option>
                        <option value="4">T3</option>
                        <option value="5">T4</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Palatum molle &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks32" id="ks32">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Bulging</option>
                        <option value="3">Ulkus</option>
                        <option value="4">Destruksi</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Palatum durum &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks34" id="ks34">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Bulging</option>
                        <option value="3">Infiltrasi Tumor</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Lidah &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks36" id="ks36">
                        <option value=""></option>
                        <option value="1">Eritroplakia</option>
                        <option value="2">Melanosis</option>
                        <option value="3">Hiperpigmentasi</option>
                        <option value="4">Normal</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Dasar Mulut &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks38" id="ks38">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Mulut</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Gigi geligi &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks42" id="ks42">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Maloklusi</option>
                        <option value="3">Karies Dentis</option>
                    </select>
                </td>
                <td></td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="36%">Fleksibel Endoskopi</td>
                <td width="32%">Kanan</td>
                <td width="32%">Kiri</td>
            </tr>
            <tr>
                <td align="right">Epiglotis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks60" id="ks60">
                        <option value=""></option>
                        <option value="1">Tenang</option>
                        <option value="2">Hiperemis</option>
                        <option value="3">Massa</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Tonsila Linguinalis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks64" id="ks64">
                        <option value=""></option>
                        <option value="1">Tenang</option>
                        <option value="2">Massa</option>
                        <option value="3">Hipertrofi Grade I</option>
                        <option value="4">Hipertrofi Grade II</option>
                        <option value="5">Hipertrofi Grade III</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Aritenoid &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks20" id="ks20">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Tumor Eksofitik</option>
                        <option value="3">Tumor Ulseratif</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="ks21" id="ks21">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Tumor Eksofitik</option>
                        <option value="3">Tumor Ulseratif</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Plika Ariepiglotika &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks18" id="ks18">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Tumor Eksofitik</option>
                        <option value="3">Tumor Ulseratif</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="ks19" id="ks19">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Tumor Eksofitik</option>
                        <option value="3">Tumor Ulseratif</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Plica Ventrikularis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks22" id="ks22">
                        <option value=""></option>
                        <option value="1">Normal</option>
                        <option value="2">Tumor Eksofitik</option>
                        <option value="3">Tumor Ulseratif</option>
                        <option value="4">Pergerakan Simetris</option>
                        <option value="5">Pergerakan Asimetris</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="ks23" id="ks23">
                        <option value=""></option>
                        <option value="1" @if(old('ks23',$ks23) == '1') checked @endif>Normal</option>
                        <option value="2" @if(old('ks23',$ks23) == '2') checked @endif>Tumor Eksofitik</option>
                        <option value="3" @if(old('ks23',$ks23) == '3') checked @endif>Tumor Ulseratif</option>
                        <option value="4" @if(old('ks23',$ks23) == '4') checked @endif>Pergerakan Simetris</option>
                        <option value="5" @if(old('ks23',$ks23) == '5') checked @endif>Pergerakan Asimetris</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Plika Vokalis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks62" id="ks62">
                        <option value=""></option>
                        <option value="1" @if(old('ks62',$ks62) == '1') checked @endif>Tenang</option>
                        <option value="2" @if(old('ks62',$ks62) == '2') checked @endif>Hiperemis</option>
                        <option value="3" @if(old('ks62',$ks62) == '3') checked @endif>Massa</option>
                        <option value="4" @if(old('ks62',$ks62) == '4') checked @endif>Pergerakan Simetris</option>
                        <option value="5" @if(old('ks62',$ks62) == '5') checked @endif>Pergerakan Asimetris</option>
                        <option value="5" @if(old('ks62',$ks62) == '6') checked @endif>Parese</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="ks63" id="ks63">
                        <option value=""></option>
                        <option value="1" @if(old('ks63',$ks63) == '1') checked @endif>Tenang</option>
                        <option value="2" @if(old('ks63',$ks63) == '2') checked @endif>Hiperemis</option>
                        <option value="3" @if(old('ks63',$ks63) == '3') checked @endif>Massa</option>
                        <option value="4" @if(old('ks63',$ks63) == '4') checked @endif>Pergerakan Simetris</option>
                        <option value="5" @if(old('ks63',$ks63) == '5') checked @endif>Pergerakan Asimetris</option>
                        <option value="6" @if(old('ks63',$ks63) == '6') checked @endif>Parese</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Sub Glotis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks26" id="ks26">
                        <option value=""></option>
                        <option value="1" @if(old('ks26',$ks26) == '1') checked @endif>Normal</option>
                        <option value="2" @if(old('ks26',$ks26) == '2') checked @endif>Tumor Eksofitik</option>
                        <option value="3" @if(old('ks26',$ks26) == '3') checked @endif>Tumor Ulseratif</option>
                    </select>
                </td>
                <td>
                    <select class="form-control" name="ks27" id="ks27">
                        <option value=""></option>
                        <option value="1" @if(old('ks27',$ks27) == '1') checked @endif>Normal</option>
                        <option value="2" @if(old('ks27',$ks27) == '2') checked @endif>Tumor Eksofitik</option>
                        <option value="3 "@if(old('ks27',$ks27) == '3') checked @endif>Tumor Ulseratif</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td align="right">Rima Glotis &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks28" id="ks28">
                        <option value=""></option>
                        <option value="1" @if(old('ks28',$ks28) == '1') checked @endif>Terbuka</option>
                        <option value="2" @if(old('ks28',$ks28) == '2') checked @endif>Tertutup</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Trakea &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <select class="form-control" name="ks24" id="ks24">
                        <option value=""></option>
                        <option value="1" @if(old('ks24',$ks24) == '1') checked @endif>Letak Tengah</option>
                        <option value="2" @if(old('ks24',$ks24) == '2') checked @endif>Terdorong Ke Kiri</option>
                        <option value="3" @if(old('ks24',$ks24) == '3') checked @endif>Terdorong Ke Kanan</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td align="right">Deskripsikan Massa &nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td colspan="2">
                    <input class="form-control" type="text" name="ks67" id="ks67" value="{{ old('ks67', $ks67) }}">
                </td>
            </tr>
        </table>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="25%">Maksilofasial</td>
                <td width="25%"><input class="" type="radio" name="ks57" id="ks57" value="1" @if(old('ks57', $ks57) == '1') checked @endif>Simetris</td>
                <td width="25%"><input class="" type="radio" name="ks57" id="ks57" value="1" @if(old('ks57', $ks57) == '2') checked @endif>Asimetris</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%">Parese N Kranialis</td>
                <td width="25%"><input class="" type="radio" name="ks68" id="ks68" value="1" @if(old('ks68', $ks68) == '1') checked @endif>Ya</td>
                <td width="25%"><input class="" type="radio" name="ks68" id="ks68" value="1" @if(old('ks68', $ks68) == '2') checked @endif>Tidak</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks70" id="ks70" value="1" @if(old('ks70', $ks70) == '1') checked @endif>Kiri</td>
                <td width="25%"><input class="" type="radio" name="ks70" id="ks70" value="1" @if(old('ks70', $ks70) == '2') checked @endif>Kanan</td>
                <td width="25%"><input class="" type="radio" name="ks70" id="ks70" value="1" @if(old('ks70', $ks70) == '2') checked @endif>Bilateral</td>
            </tr>
            <tr>
                <td width="25%">Nervus</td>
                <td width="25%"><input class="" type="radio" name="ks69a" id="ks69a" value="1" @if(old('ks69a', $ks69a) == '1') checked @endif>N.1</td>
                <td width="25%"><input class="" type="radio" name="ks69e" id="ks69e" value="1" @if(old('ks69e', $ks69e) == '1') checked @endif>N.5</td>
                <td width="25%"><input class="" type="radio" name="ks69i" id="ks69i" value="1" @if(old('ks69i', $ks69i) == '1') checked @endif>N.9</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks69b" id="ks69b" value="1" @if(old('ks69b', $ks69b) == '1') checked @endif>N.2</td>
                <td width="25%"><input class="" type="radio" name="ks69f" id="ks69f" value="1" @if(old('ks69f', $ks69f) == '1') checked @endif>N.6</td>
                <td width="25%"><input class="" type="radio" name="ks69j" id="ks69j" value="1" @if(old('ks69j', $ks69j) == '1') checked @endif>N.10</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks69c" id="ks69c" value="1" @if(old('ks69c', $ks69c) == '1') checked @endif>N.3</td>
                <td width="25%"><input class="" type="radio" name="ks69g" id="ks69g" value="1" @if(old('ks69g', $ks69e) == '1') checked @endif>N.7</td>
                <td width="25%"><input class="" type="radio" name="ks69k" id="ks69k" value="1" @if(old('ks69k', $ks69k) == '1') checked @endif>N.11</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks69d" id="ks69d" value="1" @if(old('ks69d', $ks69a) == '1') checked @endif>N.4</td>
                <td width="25%"><input class="" type="radio" name="ks69h" id="ks69h" value="1" @if(old('ks69h', $ks69h) == '1') checked @endif>N.8</td>
                <td width="25%"><input class="" type="radio" name="ks69l" id="ks69l" value="1" @if(old('ks69i', $ks69l) == '1') checked @endif>N.12</td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="25%">Naseondoskopi</td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Kavum Nasi</td>
                <td width="25%"></td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Mukosa</td>
                <td width="25%"><input class="" type="radio" name="sl11" id="sl11_1" value="1" @if(old('sl11', $sl11) == '1') checked @endif>Tenang</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl11" id="sl11_2" value="2" @if(old('sl11', $sl11) == '2') checked @endif>Hiperemis</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl11" id="sl11_3" value="3" @if(old('sl11', $sl11) == '3') checked @endif>Lividae</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Massa</td>
                <td width="25%"><input class="" type="radio" name="sl12" id="sl12_1" value="1" @if(old('sl12', $sl12) == '1') checked @endif>Tumor Eksofitik</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl12" id="sl12_2" value="2" @if(old('sl12', $sl12) == '2') checked @endif>Tumor Ulceratif</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Sekret</td>
                <td width="25%"><input class="" type="radio" name="sl13" id="sl13_1" value="1" @if(old('sl13', $sl13) == '1') checked @endif>Ya</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl13" id="sl13_2" value="2" @if(old('sl13', $sl13) == '2') checked @endif>Tidak</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Jenis</td>
                <td width="25%"><input class="" type="radio" name="sl14" id="sl14_1" value="1" @if(old('sl14', $sl14) == '1') checked @endif>Serous</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl14" id="sl14_2" value="2" @if(old('sl14', $sl14) == '2') checked @endif>Mukoid</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl14" id="sl14_3" value="3" @if(old('sl14', $sl14) == '3') checked @endif>SeroMukoid</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl14" id="sl14_4" value="4" @if(old('sl14', $sl14) == '4') checked @endif>Purulen</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl14" id="sl14_5" value="5" @if(old('sl14', $sl14) == '5') checked @endif>MukoPurulen</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Konka Inferior</td>
                <td width="25%"><input class="" type="radio" name=sl15" id=sl15_1" value="1" @if(old('sl15', $sl15) == '1') checked @endif>Eutrofi</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name=sl15" id=sl15_2" value="2" @if(old('sl15', $sl15) == '2') checked @endif>Hipertrofi</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name=sl15" id=sl15_3" value="3" @if(old('sl15', $sl15) == '3') checked @endif>Atrofi</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Konka Media</td>
                <td width="25%"><input class="" type="radio" name=sl16" id=sl16_1" value="1" @if(old('sl16', $sl16) == '1') checked @endif>Eutrofi</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name=sl16" id=sl16_2" value="2" @if(old('sl16', $sl16) == '2') checked @endif>Eutrofi</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name=sl16" id=sl16_3" value="3" @if(old('sl16', $sl16) == '3') checked @endif>Atrofi</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Konka Bulosa</td>
                <td width="25%"><input class="" type="radio" name=sl17" id=sl17_1" value="1" @if(old('sl17', $sl17) == '1') checked @endif>Ya</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name=sl17" id=sl17_2" value="2" @if(old('sl17', $sl17) == '2') checked @endif>Tidak</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Polip</td>
                <td width="25%"><input class="" type="radio" name=sl18" id=sl18_1" value="1" @if(old('sl18', $sl18) == '1') checked @endif>Ya</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name=sl18" id=sl18_2" value="2" @if(old('sl18', $sl18) == '2') checked @endif>Tidak</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Sekret</td>
                <td width="25%"><input class="" type="radio" name="sl26" id="sl26_1" value="1" @if(old('sl26', $sl26) == '1') checked @endif>Ya</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl26" id="sl26_2" value="2" @if(old('sl26', $sl26) == '2') checked @endif>Tidak</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%">Jenis</td>
                <td width="25%"><input class="" type="radio" name="sl19" id="sl19_1" value="1" @if(old('sl19', $sl19) == '1') checked @endif>Serous</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl19" id="sl19_2" value="2" @if(old('sl19', $sl19) == '2') checked @endif>Mukoid</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl19" id="sl19_3" value="3" @if(old('sl19', $sl19) == '3') checked @endif>SeroMukoid</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl19" id="sl19_4" value="4" @if(old('sl19', $sl19) == '4') checked @endif>Purulen</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl19" id="sl19_5" value="5" @if(old('sl15', $sl19) == '5') checked @endif>MukoPurulen</td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Koana</td>
                <td width="25%"><input class="" type="radio" name="sl20" id="sl20_1" value="1" @if(old('sl20', $sl20) == '1') checked @endif>Polip</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl20" id="sl20_2" value="2" @if(old('sl20', $sl20) == '2') checked @endif>Tumor Eksofitik</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl20" id="sl20_3" value="3" @if(old('sl20', $sl20) == '3') checked @endif>Tumor Ulceratif</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Torus Tubarius</td>
                <td width="25%"><input class="" type="radio" name="sl21" id="sl21_1" value="1" @if(old('sl21', $sl21) == '1') checked @endif>Tenang</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl21" id="sl21_2" value="2" @if(old('sl21', $sl21) == '2') checked @endif>Tumor Eksofitik</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl21" id="sl21_3" value="3" @if(old('sl21', $sl21) == '3') checked @endif>Tumor Ulceratif</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Orifisium Tuba</td>
                <td width="25%"><input class="" type="radio" name="sl27" id="sl27_1" value="1" @if(old('sl27', $sl27) == '1') checked @endif>Tenang</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl27" id="sl27_2" value="2" @if(old('sl27', $sl27) == '2') checked @endif>Tumor Eksofitik</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl27" id="sl27_3" value="3" @if(old('sl27', $sl27) == '3') checked @endif>Tumor Ulceratif</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Fossa Rosenmuller</td>
                <td width="25%"><input class="" type="radio" name="sl22" id="sl22_1" value="1" @if(old('sl22', $sl22) == '1') checked @endif>Tenang</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl22" id="sl22_2" value="2" @if(old('sl22', $sl22) == '2') checked @endif>Tumor Eksofitik</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl22" id="sl22_3" value="3" @if(old('sl22', $sl22) == '3') checked @endif>Tumor Ulceratif</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Nasofaring</td>
                <td width="25%"><input class="" type="radio" name="sl23" id="sl23_1" value="1" @if(old('sl23', $sl23) == '1') checked @endif>Normal</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl23" id="sl23_2" value="2" @if(old('sl23', $sl23) == '2') checked @endif>Tumor Eksofitik</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="sl23" id="sl23_3" value="3" @if(old('sl23', $sl23) == '3') checked @endif>Tumor Ulceratif</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td colspan="4">&nbsp;</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Bila Ada Massa</td>
                <td width="25%"><input class="" type="text" name="sl25" id="sl25" value="{{old('sl25', $sl25)}}"></td>
                <td width="25%"></td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="25%">Parotis</td>
                <td width="25%"><input class="" type="radio" name="ks44" id="ks44_1" value="1" @if(old('ks44', $ks44) == '1') checked @endif>Kiri</td>
                <td width="25%"><input class="" type="radio" name="ks44" id="ks44_2" value="2" @if(old('ks44', $ks44) == '2') checked @endif>Kanan</td>
                <td width="25%"><input class="" type="radio" name="ks44" id="ks44_3" value="3" @if(old('ks44', $ks44) == '3') checked @endif>Bilateral</td>
            </tr>
            <tr>
                <td width="25%">Ukuran Tumor</td>
                <td colspan="3"><input class="" type="text" name="ks65" id="ks65" value="{{old('ks65', $ks65)}}"></td>
            </tr>
            <tr>
                <td width="25%">Parese Saraf Fasialis</td>
                <td width="25%"><input class="" type="radio" name="ks47" id="ks47_1" value="1" @if(old('ks47', $ks47) == '1') checked @endif>Ya</td>
                <td width="25%"><input class="" type="radio" name="ks47" id="ks47_2" value="2" @if(old('ks47', $ks47) == '2') checked @endif>Tidak</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%">Jika Ya</td>
                <td width="25%"><input class="" type="radio" name="ks48" id="ks48_1" value="1" @if(old('ks48', $ks48) == '1') checked @endif>Kiri</td>
                <td width="25%"><input class="" type="radio" name="ks48" id="ks48_2" value="2" @if(old('ks48', $ks48) == '2') checked @endif>Kanan</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%">Parese N VII</td>
                <td width="25%"><input class="" type="radio" name="ks58" id="ks58_1" value="1" @if(old('ks58', $ks58) == '1') checked @endif>Sentral</td>
                <td width="25%"><input class="" type="radio" name="ks58" id="ks58_2" value="2" @if(old('ks58', $ks58) == '2') checked @endif>Perifer</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Jika Perifer</td>
                <td width="25%"><input class="" type="radio" name="ks59" id="ks59_1" value="1" @if(old('ks59', $ks59) == '1') checked @endif>HB I</td>
                <td width="25%"><input class="" type="radio" name="ks59" id="ks59_4" value="4" @if(old('ks59', $ks59) == '4') checked @endif>HB IV</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks59" id="ks59_2" value="1" @if(old('ks59', $ks59) == '2') checked @endif>HB II</td>
                <td width="25%"><input class="" type="radio" name="ks59" id="ks59_5" value="4" @if(old('ks59', $ks59) == '5') checked @endif>HB V</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks59" id="ks59_3" value="1" @if(old('ks59', $ks59) == '3') checked @endif>HB III</td>
                <td width="25%"><input class="" type="radio" name="ks59" id="ks59_6" value="4" @if(old('ks59', $ks59) == '6') checked @endif>HB VI</td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="25%">Tiroid</td>
                <td width="25%"><input class="" type="radio" name="ks49" id="ks49_1" value="1" @if(old('ks49', $ks49) == '1') checked @endif>Unilateral</td>
                <td width="25%"><input class="" type="radio" name="ks49" id="ks49_2" value="2" @if(old('ks49', $ks49) == '2') checked @endif>Kiri</td>
                <td width="25%"><input class="" type="radio" name="ks49" id="ks49_3" value="3" @if(old('ks49', $ks49) == '3') checked @endif>Kanan</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks49" id="ks49_4" value="4" @if(old('ks49', $ks49) == '4') checked @endif>Bilateral</td>
                <td width="25%"><input class="" type="radio" name="ks49" id="ks49_5" value="5" @if(old('ks49', $ks49) == '5') checked @endif>Normal</td>
                <td width="25%"><input class="" type="radio" name="ks49" id="ks49_6" value="6" @if(old('ks49', $ks49) == '6') checked @endif>Ikut Bergerak Saat Menelan  </td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Ukuran Tumor</td>
                <td colspan="2"><input class="" type="text" name="ks50" id="ks50" value="{{old('ks50', $ks50)}}"></td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-md-6" width="100%">
            <tr>
                <td width="25%">Kelenjar Betah Bening</td>
                <td width="25%"><input class="" type="radio" name="ks51" id="ks51_1" value="1" @if(old('ks51', $ks51) == '1') checked @endif>Ada</td>
                <td width="25%"><input class="" type="radio" name="ks51" id="ks51_2" value="2" @if(old('ks51', $ks51) == '2') checked @endif>Tidak Ada</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%">Jika Ada</td>
                <td width="25%"><input class="" type="radio" name="ks55" id="ks55_1" value="1" @if(old('ks55', $ks55) == '1') checked @endif>Kiri</td>
                <td width="25%"><input class="" type="radio" name="ks55" id="ks55_2" value="2" @if(old('ks55', $ks55) == '2') checked @endif>Kanan</td>
                <td width="25%"><input class="" type="radio" name="ks55" id="ks55_3" value="3" @if(old('ks55', $ks55) == '3') checked @endif>Bilateral  </td>
            </tr>
            <tr>
                <td width="25%">Bentuk</td>
                <td width="25%"><input class="" type="radio" name="ks56" id="ks56_1" value="1" @if(old('ks56', $ks56) == '1') checked @endif>Soloter</td>
                <td width="25%"><input class="" type="radio" name="ks56" id="ks56_2" value="2" @if(old('ks56', $ks56) == '2') checked @endif>Multiple</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Ukuran (cm)</td>
                <td colspan="2"><input class="" type="text" name="ks52" id="ks52" value="{{old('ks52', $ks52)}}"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Deskripsi KGB</td>
                <td width="25%"><input class="" type="radio" name="ks53" id="ks53_1" value="1" @if(old('ks53', $ks53) == '1') checked @endif>Keras</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks53" id="ks53_2" value="2" @if(old('ks53', $ks53) == '2') checked @endif>Lunak</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks53" id="ks53_3" value="3" @if(old('ks53', $ks53) == '3') checked @endif>Terfiksir</td>
                <td width="25%"></td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%">Lokasi KGB</td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_1" value="1" @if(old('ks54', $ks54) == '1') checked @endif>Level Ia</td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_6" value="6" @if(old('ks54', $ks54) == '6') checked @endif>Level IV</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_2" value="2" @if(old('ks54', $ks54) == '2') checked @endif>Level Ib</td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_7" value="7" @if(old('ks54', $ks54) == '7') checked @endif>Level Va</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_3" value="3" @if(old('ks54', $ks54) == '3') checked @endif>Level IIa</td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_8" value="8" @if(old('ks54', $ks54) == '8') checked @endif>Level Vb</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_4" value="4" @if(old('ks54', $ks54) == '4') checked @endif>Level IIb</td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_9" value="9" @if(old('ks54', $ks54) == '9') checked @endif>Level VI</td>
            </tr>
            <tr>
                <td width="25%"></td>
                <td width="25%"></td>
                <td width="25%"><input class="" type="radio" name="ks54" id="ks54_5" value="5" @if(old('ks54', $ks54) == '5') checked @endif>Level III</td>
                <td width="25%"></td>
            </tr>
        </table>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>