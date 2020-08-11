<form id="form" method="post" action="{{ $action }}">
    {{ csrf_field() }}
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
        <h3>Faktor Resiko</h3>
    </div>
    <div class="form-group">
        <label for="ka1">Komsumsi Alkohol</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka1_1" name="ka1" type="radio" value="1" @if(old('ka1',$ka1)=='1') checked @endif>
                <label class="form-check-label" for="ka1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka1_2" name="ka1" type="radio" value="2" @if(old('ka1',$ka1)=='2') checked @endif>
                <label class="form-check-label" for="ka1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ka2">Frekuensi</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka2_1" name="ka2" type="radio" value="1" @if(old('ka2',$ka2)=='1') checked @endif>
                <label class="form-check-label" for="ka2_1">1-3X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka2_2" name="ka2" type="radio" value="2" @if(old('ka2',$ka2)=='2') checked @endif>
                <label class="form-check-label" for="ka2_2">3-7X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka2_3" name="ka2" type="radio" value="3" @if(old('ka2',$ka2)=='3') checked @endif>
                <label class="form-check-label" for="ka2_3">7X / Minggu</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ka3">Lamanya</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka3_1" name="ka3" type="radio" value="1" @if(old('ka3',$ka3)=='1') checked @endif>
                <label class="form-check-label" for="ka3_1">0 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka3_2" name="ka3" type="radio" value="2" @if(old('ka3',$ka3)=='2') checked @endif>
                <label class="form-check-label" for="ka3_2">12 - 60 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka3_3" name="ka3" type="radio" value="3" @if(old('ka3',$ka3)=='3') checked @endif>
                <label class="form-check-label" for="ka3_3">&gt; 60 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ka4">Jumlah</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka4_1" name="ka4" type="radio" value="1" @if(old('ka4',$ka4)=='1') checked @endif>
                <label class="form-check-label" for="ka4_1">&lt;1 Gelas/hari</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ka4_2" name="ka4" type="radio" value="2" @if(old('ka4',$ka4)=='2') checked @endif>
                <label class="form-check-label" for="ka4_2">&gt;1 Gelas/hari</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="kb1">Riwayat Merokok</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb1_1" name="kb1" type="radio" value="1" @if(old('kb1',$kb1)=='1') checked @endif>
                <label class="form-check-label" for="kb1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb1_2" name="kb1" type="radio" value="2" @if(old('kb1',$kb1)=='2') checked @endif>
                <label class="form-check-label" for="kb1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kb2">Frekuensi</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb2_1" name="kb2" type="radio" value="1" @if(old('kb2',$kb2)=='1') checked @endif>
                <label class="form-check-label" for="kb2_1">1-3X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb2_2" name="kb2" type="radio" value="2" @if(old('kb2',$kb2)=='2') checked @endif>
                <label class="form-check-label" for="kb2_2">3-7X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb2_3" name="kb2" type="radio" value="3" @if(old('kb2',$kb2)=='3') checked @endif>
                <label class="form-check-label" for="kb2_3">7X / Minggu</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kb3">Lamanya</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb3_1" name="kb3" type="radio" value="1" @if(old('kb3',$kb3)=='1') checked @endif>
                <label class="form-check-label" for="kb3_1">0 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb3_2" name="kb3" type="radio" value="2" @if(old('kb3',$kb3)=='2') checked @endif>
                <label class="form-check-label" for="kb3_2">12 - 60 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb3_3" name="kb3" type="radio" value="3" @if(old('kb3',$kb3)=='3') checked @endif>
                <label class="form-check-label" for="kb3_3">&gt; 60 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kb4">Jumlah</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb4_1" name="kb4" type="radio" value="1" @if(old('kb4',$kb4)=='1') checked @endif>
                <label class="form-check-label" for="kb4_1">0-12 Batang/hari</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb4_2" name="kb4" type="radio" value="2" @if(old('kb4',$kb4)=='2') checked @endif>
                <label class="form-check-label" for="kb4_2">10-24 Batang/hari</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kb4_3" name="kb4" type="radio" value="3" @if(old('kb4',$kb4)=='3') checked @endif>
                <label class="form-check-label" for="kb4_3">&gt;24 Batang/hari</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="kc1">Konsumsi Ikan Asin Rutin</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kc1_1" name="kc1" type="radio" value="1" @if(old('kc1',$kc1)=='1') checked @endif>
                <label class="form-check-label" for="kc1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kc1_2" name="kc1" type="radio" value="2" @if(old('kc1',$kc1)=='2') checked @endif>
                <label class="form-check-label" for="kc1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kc2">Frekuensi</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kc2_1" name="kc2" type="radio" value="1" @if(old('kc2',$kc2)=='1') checked @endif>
                <label class="form-check-label" for="kc2_1">1-3X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kc2_2" name="kc2" type="radio" value="2" @if(old('kc2',$kc2)=='2') checked @endif>
                <label class="form-check-label" for="kc2_2">3-7X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kc2_3" name="kc2" type="radio" value="3" @if(old('kc2',$kc2)=='3') checked @endif>
                <label class="form-check-label" for="kc2_3">7X / Minggu</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="kd1">Terpapar Asap Pembakaran</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd1_1" name="kd1" type="radio" value="1" @if(old('kd1',$kd1)=='1') checked @endif>
                <label class="form-check-label" for="kd1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd1_2" name="kd1" type="radio" value="2" @if(old('kd1',$kd1)=='2') checked @endif>
                <label class="form-check-label" for="kd1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kd2">Frekuensi</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd2_1" name="kd2" type="radio" value="1" @if(old('kd2',$kd2)=='1') checked @endif>
                <label class="form-check-label" for="kd2_1">1-3X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd2_2" name="kd2" type="radio" value="2" @if(old('kd2',$kd2)=='2') checked @endif>
                <label class="form-check-label" for="kd2_2">3-7X / Minggu</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd2_3" name="kd2" type="radio" value="3" @if(old('kd2',$kd2)=='3') checked @endif>
                <label class="form-check-label" for="kd2_3">7X / Minggu</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="kd3">Lamanya</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd3_1" name="kd3" type="radio" value="1" @if(old('kd3',$kd3)=='1') checked @endif>
                <label class="form-check-label" for="kd3_1">0 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd3_2" name="kd3" type="radio" value="2" @if(old('kd3',$kd3)=='2') checked @endif>
                <label class="form-check-label" for="kd3_2">12 - 60 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kd3_3" name="kd3" type="radio" value="3" @if(old('kd3',$kd3)=='3') checked @endif>
                <label class="form-check-label" for="kd3_3">&gt; 60 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ke1">Pemakaian Obat Nyamuk Bakar</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ke1_1" name="ke1" type="radio" value="1" @if(old('ke1',$ke1)=='1') checked @endif>
                <label class="form-check-label" for="ke1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ke1_2" name="ke1" type="radio" value="2" @if(old('ke1',$ke1)=='2') checked @endif>
                <label class="form-check-label" for="ke1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ke2">Frekuensi</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ke2_1" name="ke2" type="radio" value="1" @if(old('ke2',$ke2)=='1') checked @endif>
                <label class="form-check-label" for="ke2_1">1 - 3 / Hari</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ke2_2" name="ke2" type="radio" value="2" @if(old('ke2',$ke2)=='2') checked @endif>
                <label class="form-check-label" for="ke2_2">3 - 5 / Hari</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ke2_3" name="ke2" type="radio" value="3" @if(old('ke2',$ke2)=='3') checked @endif>
                <label class="form-check-label" for="ke2_3">&gt; 5 / Hari</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="kf1">Terpapar Debu Kayu</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kf1_1" name="kf1" type="radio" value="1" @if(old('kf1',$kf1)=='1') checked @endif>
                <label class="form-check-label" for="kf1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kf1_2" name="kf1" type="radio" value="2" @if(old('kf1',$kf1)=='2') checked @endif>
                <label class="form-check-label" for="kf1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="kg1">Terpapar Insektisida (Lebih 1 Tahun) </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kg1_1" name="kg1" type="radio" value="1" @if(old('kg1',$kg1)=='1') checked @endif>
                <label class="form-check-label" for="kg1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kg1_2" name="kg1" type="radio" value="2" @if(old('kg1',$kg1)=='2') checked @endif>
                <label class="form-check-label" for="kg1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="kh1">Konsumsi Makanan Kemasan </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kh1_1" name="kh1" type="radio" value="1" @if(old('kh1',$kh1)=='1') checked @endif>
                <label class="form-check-label" for="kh1_1">Mie Kemasan </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kh1_2" name="kh1" type="radio" value="2" @if(old('kh1',$kh1)=='2') checked @endif>
                <label class="form-check-label" for="kh1_2">Mie Kaleng</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kh1_2" name="kh1" type="radio" value="3" @if(old('kh1',$kh1)=='3') checked @endif>
                <label class="form-check-label" for="kh1_2">Minuman Kemasan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="kh1_2" name="kh1" type="radio" value="4" @if(old('kh1',$kh1)=='4') checked @endif>
                <label class="form-check-label" for="kh1_2">Makanan Panggang/Bakar</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="la">Paparan sinar matahari (UVB) </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la_1" name="la" type="radio" value="1" @if(old('la',$la)=='1') checked @endif>
                <label class="form-check-label" for="la_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la_2" name="la" type="radio" value="2" @if(old('la',$la)=='2') checked @endif>
                <label class="form-check-label" for="la_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Riwayat Keluarga Yang Menderita Kanker</h3>
    </div>
    <div class="form-group">
        <label for="ja1">Riwayat Kanker di Keluarga </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ja1_1" name="ja1" type="radio" value="1" @if(old('ja1',$ja1)=='1') checked @endif>
                <label class="form-check-label" for="ja1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ja1_2" name="ja1" type="radio" value="2" @if(old('ja1',$ja1)=='2') checked @endif>
                <label class="form-check-label" for="ja1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ja2">Jika Ya, Sebutkan Jenis Kanker </label>
        <div class="form-check">
            <input class="form-check-input" id="ja2_1" name="ja2" type="radio" value="1" @if(old('ja2',$ja2)=='1') checked @endif>
            <label class="form-check-label" for="ja2_1">Sama</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja2_2" name="ja2" type="radio" value="2" @if(old('ja2',$ja2)=='2') checked @endif>
            <label class="form-check-label" for="ja2_2">Ca Cervix</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja2_3" name="ja2" type="radio" value="2" @if(old('ja2',$ja2)=='3') checked @endif>
            <label class="form-check-label" for="ja2_3">Ca Mammae</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja2_4" name="ja2" type="radio" value="2" @if(old('ja2',$ja2)=='4') checked @endif>
            <label class="form-check-label" for="ja2_4">Ca Prostat</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja2_5" name="ja2" type="radio" value="2" @if(old('ja2',$ja2)=='5') checked @endif>
            <label class="form-check-label" for="ja2_5">Ca Paru</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja2_6" name="ja2" type="radio" value="2" @if(old('ja2',$ja2)=='6') checked @endif>
            <label class="form-check-label" for="ja2_6">Ca Kolon</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja2_7" name="ja2" type="radio" value="2" @if(old('ja2',$ja2)=='7') checked @endif>
            <label class="form-check-label" for="ja2_7">Ca Lainnya</label>
        </div>
        <input id="ja2lainnya" name="ja2lainnya" type="text" class="form-control" value="{{ old('ja2lainnya',$ja2lainnya) }}">
    </div>
    <div class="form-group">
        <label for="ja3">Jika Ya, Sebutkan Hubungan Keluarga </label>
        <div class="form-check">
            <input class="form-check-input" id="ja3_1" name="ja3" type="radio" value="1" @if(old('ja3',$ja3)=='1') checked @endif>
            <label class="form-check-label" for="ja3_1">Kakek</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_2" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='2') checked @endif>
            <label class="form-check-label" for="ja3_2">Nenek</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_3" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='3') checked @endif>
            <label class="form-check-label" for="ja3_3">Ayah</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_4" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='4') checked @endif>
            <label class="form-check-label" for="ja3_4">Ibu</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_5" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='5') checked @endif>
            <label class="form-check-label" for="ja3_5">Paman / Tante</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_6" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='6') checked @endif>
            <label class="form-check-label" for="ja3_6">Kakak / Adik</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_7" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='7') checked @endif>
            <label class="form-check-label" for="ja3_7">Anak</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" id="ja3_8" name="ja3" type="radio" value="2" @if(old('ja3',$ja3)=='8') checked @endif>
            <label class="form-check-label" for="ja3_8">Lainnya</label>
        </div>
        <input id="ja3lainnya" name="ja3lainnya" type="text" class="form-control" value="{{ old('ja3lainnya',$ja3lainnya) }}">
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Neoplasma Kulit Kepala Leher</h3>
    </div>
    <div class="form-group">
        <label for="la1">Lesi di Kulit </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la1_1" name="la1" type="radio" value="1" @if(old('la1',$la1)=='1') checked @endif>
                <label class="form-check-label" for="la1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la1_2" name="la1" type="radio" value="2" @if(old('la1',$la1)=='2') checked @endif>
                <label class="form-check-label" for="la1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="lb1">Perubahan Warna Kulit </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="lb1_1" name="lb1" type="radio" value="1" @if(old('lb1',$lb1)=='1') checked @endif>
                <label class="form-check-label" for="lb1_1">Kemerahan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="lb1_2" name="lb1" type="radio" value="2" @if(old('lb1',$lb1)=='2') checked @endif>
                <label class="form-check-label" for="lb1_2">Luka Borok</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="lb1_3" name="lb1" type="radio" value="3" @if(old('lb1',$lb1)=='2') checked @endif>
                <label class="form-check-label" for="lb1_3">Lesi Krusta</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="lb1lainnya">Lokasi </label>
        <input id="lb1lainnya" name="lb1lainnya" type="text" class="form-control" value="{{ old('lb1lainnya',$lb1lainnya) }}">
    </div>
    <div class="form-group">
        <label for="la3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la3_1" name="la3" type="radio" value="1" @if(old('la3',$la3)=='1') checked @endif>
                <label class="form-check-label" for="la3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la3_2" name="la3" type="radio" value="2" @if(old('la3',$la3)=='2') checked @endif>
                <label class="form-check-label" for="la3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="la3_3" name="la3" type="radio" value="3" @if(old('la3',$la3)=='2') checked @endif>
                <label class="form-check-label" for="la3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Neoplasma Sinonasal</h3>
    </div>
    <div class="form-group">
        <label for="bc1">Benjolan di Pipi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc1_1" name="bc1" type="radio" value="1" @if(old('bc1',$bc1)=='1') checked @endif>
                <label class="form-check-label" for="bc1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc1_2" name="bc1" type="radio" value="2" @if(old('bc1',$bc1)=='2') checked @endif>
                <label class="form-check-label" for="bc1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bc2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc2_1" name="bc2" type="radio" value="1" @if(old('bc2',$bc2)=='1') checked @endif>
                <label class="form-check-label" for="bc2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc2_2" name="bc2" type="radio" value="2" @if(old('bc2',$bc2)=='2') checked @endif>
                <label class="form-check-label" for="bc2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc2_3" name="bc2" type="radio" value="2" @if(old('bc2',$bc2)=='2') checked @endif>
                <label class="form-check-label" for="bc2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bc3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc3_1" name="bc3" type="radio" value="1" @if(old('bc3',$bc3)=='1') checked @endif>
                <label class="form-check-label" for="bc3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc3_2" name="bc3" type="radio" value="2" @if(old('bc3',$bc3)=='2') checked @endif>
                <label class="form-check-label" for="bc3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bc3_3" name="bc3" type="radio" value="3" @if(old('bc3',$bc3)=='2') checked @endif>
                <label class="form-check-label" for="bc3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bf1">Nyeri di pipi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf1_1" name="bf1" type="radio" value="1" @if(old('bf1',$bf1)=='1') checked @endif>
                <label class="form-check-label" for="bf1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf1_2" name="bf1" type="radio" value="2" @if(old('bf1',$bf1)=='2') checked @endif>
                <label class="form-check-label" for="bf1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bf2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf2_1" name="bf2" type="radio" value="1" @if(old('bf2',$bf2)=='1') checked @endif>
                <label class="form-check-label" for="bf2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf2_2" name="bf2" type="radio" value="2" @if(old('bf2',$bf2)=='2') checked @endif>
                <label class="form-check-label" for="bf2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf2_3" name="bf2" type="radio" value="2" @if(old('bf2',$bf2)=='2') checked @endif>
                <label class="form-check-label" for="bf2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bf3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf3_1" name="bf3" type="radio" value="1" @if(old('bf3',$bf3)=='1') checked @endif>
                <label class="form-check-label" for="bf3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf3_2" name="bf3" type="radio" value="2" @if(old('bf3',$bf3)=='2') checked @endif>
                <label class="form-check-label" for="bf3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bf3_3" name="bf3" type="radio" value="3" @if(old('bf3',$bf3)=='2') checked @endif>
                <label class="form-check-label" for="bf3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bb1">Rasa Baal Pipi / Gigi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb1_1" name="bb1" type="radio" value="1" @if(old('bb1',$bb1)=='1') checked @endif>
                <label class="form-check-label" for="bb1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb1_2" name="bb1" type="radio" value="2" @if(old('bb1',$bb1)=='2') checked @endif>
                <label class="form-check-label" for="bb1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bb2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb2_1" name="bb2" type="radio" value="1" @if(old('bb2',$bb2)=='1') checked @endif>
                <label class="form-check-label" for="bb2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb2_2" name="bb2" type="radio" value="2" @if(old('bb2',$bb2)=='2') checked @endif>
                <label class="form-check-label" for="bb2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb2_3" name="bb2" type="radio" value="2" @if(old('bb2',$bb2)=='2') checked @endif>
                <label class="form-check-label" for="bb2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bb3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb3_1" name="bb3" type="radio" value="1" @if(old('bb3',$bb3)=='1') checked @endif>
                <label class="form-check-label" for="bb3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb3_2" name="bb3" type="radio" value="2" @if(old('bb3',$bb3)=='2') checked @endif>
                <label class="form-check-label" for="bb3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bb3_3" name="bb3" type="radio" value="3" @if(old('bb3',$bb3)=='2') checked @endif>
                <label class="form-check-label" for="bb3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bk1">Epistaksis </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk1_1" name="bk1" type="radio" value="1" @if(old('bk1',$bk1)=='1') checked @endif>
                <label class="form-check-label" for="bk1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk1_2" name="bk1" type="radio" value="2" @if(old('bk1',$bk1)=='2') checked @endif>
                <label class="form-check-label" for="bk1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bk2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk2_1" name="bk2" type="radio" value="1" @if(old('bk2',$bk2)=='1') checked @endif>
                <label class="form-check-label" for="bk2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk2_2" name="bk2" type="radio" value="2" @if(old('bk2',$bk2)=='2') checked @endif>
                <label class="form-check-label" for="bk2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk2_3" name="bk2" type="radio" value="2" @if(old('bk2',$bk2)=='2') checked @endif>
                <label class="form-check-label" for="bk2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bk3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk3_1" name="bk3" type="radio" value="1" @if(old('bk3',$bk3)=='1') checked @endif>
                <label class="form-check-label" for="bk3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk3_2" name="bk3" type="radio" value="2" @if(old('bk3',$bk3)=='2') checked @endif>
                <label class="form-check-label" for="bk3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bk3_3" name="bk3" type="radio" value="3" @if(old('bk3',$bk3)=='2') checked @endif>
                <label class="form-check-label" for="bk3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ba1">Massa di Hidung</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba1_1" name="ba1" type="radio" value="1" @if(old('ba1',$ba1)=='1') checked @endif>
                <label class="form-check-label" for="ba1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba1_2" name="ba1" type="radio" value="2" @if(old('ba1',$ba1)=='2') checked @endif>
                <label class="form-check-label" for="ba1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ba2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba2_1" name="ba2" type="radio" value="1" @if(old('ba2',$ba2)=='1') checked @endif>
                <label class="form-check-label" for="ba2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba2_2" name="ba2" type="radio" value="2" @if(old('ba2',$ba2)=='2') checked @endif>
                <label class="form-check-label" for="ba2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba2_3" name="ba2" type="radio" value="2" @if(old('ba2',$ba2)=='2') checked @endif>
                <label class="form-check-label" for="ba2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ba3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba3_1" name="ba3" type="radio" value="1" @if(old('ba3',$ba3)=='1') checked @endif>
                <label class="form-check-label" for="ba3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba3_2" name="ba3" type="radio" value="2" @if(old('ba3',$ba3)=='2') checked @endif>
                <label class="form-check-label" for="ba3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ba3_3" name="ba3" type="radio" value="3" @if(old('ba3',$ba3)=='2') checked @endif>
                <label class="form-check-label" for="ba3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bd1">Gangguan Penciuman</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd1_1" name="bd1" type="radio" value="1" @if(old('bd1',$bd1)=='1') checked @endif>
                <label class="form-check-label" for="bd1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd1_2" name="bd1" type="radio" value="2" @if(old('bd1',$bd1)=='2') checked @endif>
                <label class="form-check-label" for="bd1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bd2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd2_1" name="bd2" type="radio" value="1" @if(old('bd2',$bd2)=='1') checked @endif>
                <label class="form-check-label" for="bd2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd2_2" name="bd2" type="radio" value="2" @if(old('bd2',$bd2)=='2') checked @endif>
                <label class="form-check-label" for="bd2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd2_3" name="bd2" type="radio" value="2" @if(old('bd2',$bd2)=='2') checked @endif>
                <label class="form-check-label" for="bd2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bd3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd3_1" name="bd3" type="radio" value="1" @if(old('bd3',$bd3)=='1') checked @endif>
                <label class="form-check-label" for="bd3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd3_2" name="bd3" type="radio" value="2" @if(old('bd3',$bd3)=='2') checked @endif>
                <label class="form-check-label" for="bd3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bd3_3" name="bd3" type="radio" value="3" @if(old('bd3',$bd3)=='2') checked @endif>
                <label class="form-check-label" for="bd3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="be1">Benjolan di Palatum</label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be1_1" name="be1" type="radio" value="1" @if(old('be1',$be1)=='1') checked @endif>
                <label class="form-check-label" for="be1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be1_2" name="be1" type="radio" value="2" @if(old('be1',$be1)=='2') checked @endif>
                <label class="form-check-label" for="be1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="be2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be2_1" name="be2" type="radio" value="1" @if(old('be2',$be2)=='1') checked @endif>
                <label class="form-check-label" for="be2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be2_2" name="be2" type="radio" value="2" @if(old('be2',$be2)=='2') checked @endif>
                <label class="form-check-label" for="be2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be2_3" name="be2" type="radio" value="2" @if(old('be2',$be2)=='2') checked @endif>
                <label class="form-check-label" for="be2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="be3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be3_1" name="be3" type="radio" value="1" @if(old('be3',$be3)=='1') checked @endif>
                <label class="form-check-label" for="be3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be3_2" name="be3" type="radio" value="2" @if(old('be3',$be3)=='2') checked @endif>
                <label class="form-check-label" for="be3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="be3_3" name="be3" type="radio" value="3" @if(old('be3',$be3)=='2') checked @endif>
                <label class="form-check-label" for="be3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bj1">Gigi Nyeri / Goyah </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj1_1" name="bj1" type="radio" value="1" @if(old('bj1',$bj1)=='1') checked @endif>
                <label class="form-check-label" for="bj1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj1_2" name="bj1" type="radio" value="2" @if(old('bj1',$bj1)=='2') checked @endif>
                <label class="form-check-label" for="bj1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bj2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj2_1" name="bj2" type="radio" value="1" @if(old('bj2',$bj2)=='1') checked @endif>
                <label class="form-check-label" for="bj2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj2_2" name="bj2" type="radio" value="2" @if(old('bj2',$bj2)=='2') checked @endif>
                <label class="form-check-label" for="bj2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj2_3" name="bj2" type="radio" value="2" @if(old('bj2',$bj2)=='2') checked @endif>
                <label class="form-check-label" for="bj2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bj3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj3_1" name="bj3" type="radio" value="1" @if(old('bj3',$bj3)=='1') checked @endif>
                <label class="form-check-label" for="bj3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj3_2" name="bj3" type="radio" value="2" @if(old('bj3',$bj3)=='2') checked @endif>
                <label class="form-check-label" for="bj3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bj3_3" name="bj3" type="radio" value="3" @if(old('bj3',$bj3)=='2') checked @endif>
                <label class="form-check-label" for="bj3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bg1">Mata Menonjol </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg1_1" name="bg1" type="radio" value="1" @if(old('bg1',$bg1)=='1') checked @endif>
                <label class="form-check-label" for="bg1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg1_2" name="bg1" type="radio" value="2" @if(old('bg1',$bg1)=='2') checked @endif>
                <label class="form-check-label" for="bg1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bg2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg2_1" name="bg2" type="radio" value="1" @if(old('bg2',$bg2)=='1') checked @endif>
                <label class="form-check-label" for="bg2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg2_2" name="bg2" type="radio" value="2" @if(old('bg2',$bg2)=='2') checked @endif>
                <label class="form-check-label" for="bg2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg2_3" name="bg2" type="radio" value="2" @if(old('bg2',$bg2)=='2') checked @endif>
                <label class="form-check-label" for="bg2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bg3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg3_1" name="bg3" type="radio" value="1" @if(old('bg3',$bg3)=='1') checked @endif>
                <label class="form-check-label" for="bg3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg3_2" name="bg3" type="radio" value="2" @if(old('bg3',$bg3)=='2') checked @endif>
                <label class="form-check-label" for="bg3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bg3_3" name="bg3" type="radio" value="3" @if(old('bg3',$bg3)=='2') checked @endif>
                <label class="form-check-label" for="bg3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bh1">Muka Mencong </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh1_1" name="bh1" type="radio" value="1" @if(old('bh1',$bh1)=='1') checked @endif>
                <label class="form-check-label" for="bh1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh1_2" name="bh1" type="radio" value="2" @if(old('bh1',$bh1)=='2') checked @endif>
                <label class="form-check-label" for="bh1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bh2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh2_1" name="bh2" type="radio" value="1" @if(old('bh2',$bh2)=='1') checked @endif>
                <label class="form-check-label" for="bh2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh2_2" name="bh2" type="radio" value="2" @if(old('bh2',$bh2)=='2') checked @endif>
                <label class="form-check-label" for="bh2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh2_3" name="bh2" type="radio" value="2" @if(old('bh2',$bh2)=='2') checked @endif>
                <label class="form-check-label" for="bh2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bh3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh3_1" name="bh3" type="radio" value="1" @if(old('bh3',$bh3)=='1') checked @endif>
                <label class="form-check-label" for="bh3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh3_2" name="bh3" type="radio" value="2" @if(old('bh3',$bh3)=='2') checked @endif>
                <label class="form-check-label" for="bh3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bh3_3" name="bh3" type="radio" value="3" @if(old('bh3',$bh3)=='2') checked @endif>
                <label class="form-check-label" for="bh3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="bi1">Suara Sengau </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bi1_1" name="bi1" type="radio" value="1" @if(old('bi1',$bi1)=='1') checked @endif>
                <label class="form-check-label" for="bi1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bi1_2" name="bi1" type="radio" value="2" @if(old('bi1',$bi1)=='2') checked @endif>
                <label class="form-check-label" for="bi1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="bi3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bi3_1" name="bi3" type="radio" value="1" @if(old('bi3',$bi3)=='1') checked @endif>
                <label class="form-check-label" for="bi3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bi3_2" name="bi3" type="radio" value="2" @if(old('bi3',$bi3)=='2') checked @endif>
                <label class="form-check-label" for="bi3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="bi3_3" name="bi3" type="radio" value="3" @if(old('bi3',$bi3)=='2') checked @endif>
                <label class="form-check-label" for="bi3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ab1">Karsinoma Nasofaring </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab1_1" name="ab1" type="radio" value="1" @if(old('ab1',$ab1)=='1') checked @endif>
                <label class="form-check-label" for="ab1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab1_2" name="ab1" type="radio" value="2" @if(old('ab1',$ab1)=='2') checked @endif>
                <label class="form-check-label" for="ab1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ab2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab2_1" name="ab2" type="radio" value="1" @if(old('ab2',$ab2)=='1') checked @endif>
                <label class="form-check-label" for="ab2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab2_2" name="ab2" type="radio" value="2" @if(old('ab2',$ab2)=='2') checked @endif>
                <label class="form-check-label" for="ab2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab2_3" name="ab2" type="radio" value="2" @if(old('ab2',$ab2)=='2') checked @endif>
                <label class="form-check-label" for="ab2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ab3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab3_1" name="ab3" type="radio" value="1" @if(old('ab3',$ab3)=='1') checked @endif>
                <label class="form-check-label" for="ab3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab3_2" name="ab3" type="radio" value="2" @if(old('ab3',$ab3)=='2') checked @endif>
                <label class="form-check-label" for="ab3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ab3_3" name="ab3" type="radio" value="3" @if(old('ab3',$ab3)=='2') checked @endif>
                <label class="form-check-label" for="ab3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ac1">Ingus/Lendir Bercampur Darah </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac1_1" name="ac1" type="radio" value="1" @if(old('ac1',$ac1)=='1') checked @endif>
                <label class="form-check-label" for="ac1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac1_2" name="ac1" type="radio" value="2" @if(old('ac1',$ac1)=='2') checked @endif>
                <label class="form-check-label" for="ac1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ac2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac2_1" name="ac2" type="radio" value="1" @if(old('ac2',$ac2)=='1') checked @endif>
                <label class="form-check-label" for="ac2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac2_2" name="ac2" type="radio" value="2" @if(old('ac2',$ac2)=='2') checked @endif>
                <label class="form-check-label" for="ac2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac2_3" name="ac2" type="radio" value="2" @if(old('ad2',$ac2)=='2') checked @endif>
                <label class="form-check-label" for="ac2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ac3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac3_1" name="ac3" type="radio" value="1" @if(old('ac3',$ac3)=='1') checked @endif>
                <label class="form-check-label" for="ac3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac3_2" name="ac3" type="radio" value="2" @if(old('ac3',$ac3)=='2') checked @endif>
                <label class="form-check-label" for="ac3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ac3_3" name="ac3" type="radio" value="3" @if(old('ac3',$ac3)=='2') checked @endif>
                <label class="form-check-label" for="ac3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ae1">Post Nasal Drip </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ae1_1" name="ae1" type="radio" value="1" @if(old('ae1',$ae1)=='1') checked @endif>
                <label class="form-check-label" for="ae1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ae1_2" name="ae1" type="radio" value="2" @if(old('ae1',$ae1)=='2') checked @endif>
                <label class="form-check-label" for="ae1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ae3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ae3_1" name="ae3" type="radio" value="1" @if(old('ab3',$ab3)=='1') checked @endif>
                <label class="form-check-label" for="ae3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ae3_2" name="ae3" type="radio" value="2" @if(old('ab3',$ab3)=='2') checked @endif>
                <label class="form-check-label" for="ae3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ae3_3" name="ae3" type="radio" value="3" @if(old('ab3',$ab3)=='2') checked @endif>
                <label class="form-check-label" for="ae3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ad1">Telinga Terasa Penuh </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad1_1" name="ad1" type="radio" value="1" @if(old('ad1',$ad1)=='1') checked @endif>
                <label class="form-check-label" for="ad1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad1_2" name="ad1" type="radio" value="2" @if(old('ad1',$ad1)=='2') checked @endif>
                <label class="form-check-label" for="ad1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ad2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad2_1" name="ad2" type="radio" value="1" @if(old('ad2',$ad2)=='1') checked @endif>
                <label class="form-check-label" for="ad2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad2_2" name="ad2" type="radio" value="2" @if(old('ad2',$ad2)=='2') checked @endif>
                <label class="form-check-label" for="ad2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad2_3" name="ad2" type="radio" value="2" @if(old('ad2',$ad2)=='2') checked @endif>
                <label class="form-check-label" for="ad2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ad3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad3_1" name="ad3" type="radio" value="1" @if(old('ad3',$ad3)=='1') checked @endif>
                <label class="form-check-label" for="ad3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad3_2" name="ad3" type="radio" value="2" @if(old('ad3',$ad3)=='2') checked @endif>
                <label class="form-check-label" for="ad3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ad3_3" name="ad3" type="radio" value="3" @if(old('ad3',$ad3)=='2') checked @endif>
                <label class="form-check-label" for="ad3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ai1">Tintus </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai1_1" name="ai1" type="radio" value="1" @if(old('ai1',$ai1)=='1') checked @endif>
                <label class="form-check-label" for="ai1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai1_2" name="ai1" type="radio" value="2" @if(old('ai1',$ai1)=='2') checked @endif>
                <label class="form-check-label" for="ai1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ai2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai2_1" name="ai2" type="radio" value="1" @if(old('ai2',$ai2)=='1') checked @endif>
                <label class="form-check-label" for="ai2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai2_2" name="ai2" type="radio" value="2" @if(old('ai2',$ai2)=='2') checked @endif>
                <label class="form-check-label" for="ai2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai2_3" name="ai2" type="radio" value="2" @if(old('ai2',$ai2)=='2') checked @endif>
                <label class="form-check-label" for="ai2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ai3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai3_1" name="ai3" type="radio" value="1" @if(old('ai3',$ai3)=='1') checked @endif>
                <label class="form-check-label" for="ai3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai3_2" name="ai3" type="radio" value="2" @if(old('ai3',$ai3)=='2') checked @endif>
                <label class="form-check-label" for="ai3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ai3_3" name="ai3" type="radio" value="3" @if(old('ai3',$ai3)=='2') checked @endif>
                <label class="form-check-label" for="ai3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="aj1">Nyeri Telinga </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj1_1" name="aj1" type="radio" value="1" @if(old('aj1',$aj1)=='1') checked @endif>
                <label class="form-check-label" for="aj1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj1_2" name="aj1" type="radio" value="2" @if(old('aj1',$aj1)=='2') checked @endif>
                <label class="form-check-label" for="aj1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="aj2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj2_1" name="aj2" type="radio" value="1" @if(old('aj2',$aj2)=='1') checked @endif>
                <label class="form-check-label" for="aj2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj2_2" name="aj2" type="radio" value="2" @if(old('aj2',$aj2)=='2') checked @endif>
                <label class="form-check-label" for="aj2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj2_3" name="aj2" type="radio" value="2" @if(old('aj2',$aj2)=='2') checked @endif>
                <label class="form-check-label" for="aj2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="aj3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj3_1" name="aj3" type="radio" value="1" @if(old('aj3',$aj3)=='1') checked @endif>
                <label class="form-check-label" for="aj3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj3_2" name="aj3" type="radio" value="2" @if(old('aj3',$aj3)=='2') checked @endif>
                <label class="form-check-label" for="aj3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aj3_3" name="aj3" type="radio" value="3" @if(old('aj3',$aj3)=='2') checked @endif>
                <label class="form-check-label" for="aj3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ag1">Gangguan Dengar </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag1_1" name="ag1" type="radio" value="1" @if(old('ag1',$ag1)=='1') checked @endif>
                <label class="form-check-label" for="ag1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag1_2" name="ag1" type="radio" value="2" @if(old('ag1',$ag1)=='2') checked @endif>
                <label class="form-check-label" for="ag1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ag2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag2_1" name="ag2" type="radio" value="1" @if(old('ag2',$ag2)=='1') checked @endif>
                <label class="form-check-label" for="ag2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag2_2" name="ag2" type="radio" value="2" @if(old('ag2',$ag2)=='2') checked @endif>
                <label class="form-check-label" for="ag2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag2_3" name="ag2" type="radio" value="2" @if(old('ag2',$ag2)=='2') checked @endif>
                <label class="form-check-label" for="ag2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ag3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag3_1" name="ag3" type="radio" value="1" @if(old('ag3',$ag3)=='1') checked @endif>
                <label class="form-check-label" for="ag3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag3_2" name="ag3" type="radio" value="2" @if(old('ag3',$ag3)=='2') checked @endif>
                <label class="form-check-label" for="ag3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ag3_3" name="ag3" type="radio" value="3" @if(old('ag3',$ag3)=='2') checked @endif>
                <label class="form-check-label" for="ag3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
</form>