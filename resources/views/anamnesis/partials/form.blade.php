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
    <div class="form-group">
        <label for="ak1">Cairan Telinga </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak1_1" name="ak1" type="radio" value="1" @if(old('ak1',$ak1)=='1') checked @endif>
                <label class="form-check-label" for="ak1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak1_2" name="ak1" type="radio" value="2" @if(old('ak1',$ak1)=='2') checked @endif>
                <label class="form-check-label" for="ak1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ak2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak2_1" name="ak2" type="radio" value="1" @if(old('ak2',$ak2)=='1') checked @endif>
                <label class="form-check-label" for="ak2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak2_2" name="ak2" type="radio" value="2" @if(old('ak2',$ak2)=='2') checked @endif>
                <label class="form-check-label" for="ak2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak2_3" name="ak2" type="radio" value="2" @if(old('ak2',$ak2)=='2') checked @endif>
                <label class="form-check-label" for="ak2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ak3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak3_1" name="ak3" type="radio" value="1" @if(old('ak3',$ak3)=='1') checked @endif>
                <label class="form-check-label" for="ak3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak3_2" name="ak3" type="radio" value="2" @if(old('ak3',$ak3)=='2') checked @endif>
                <label class="form-check-label" for="ak3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ak3_3" name="ak3" type="radio" value="3" @if(old('ak3',$ak3)=='2') checked @endif>
                <label class="form-check-label" for="ak3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="af1">Penglihan Ganda </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af1_1" name="af1" type="radio" value="1" @if(old('af1',$af1)=='1') checked @endif>
                <label class="form-check-label" for="af1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af1_2" name="af1" type="radio" value="2" @if(old('af1',$af1)=='2') checked @endif>
                <label class="form-check-label" for="af1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="af2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af2_1" name="af2" type="radio" value="1" @if(old('af2',$af2)=='1') checked @endif>
                <label class="form-check-label" for="af2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af2_2" name="af2" type="radio" value="2" @if(old('af2',$af2)=='2') checked @endif>
                <label class="form-check-label" for="af2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af2_3" name="af2" type="radio" value="2" @if(old('af2',$af2)=='2') checked @endif>
                <label class="form-check-label" for="af2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="af3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af3_1" name="af3" type="radio" value="1" @if(old('af3',$af3)=='1') checked @endif>
                <label class="form-check-label" for="af3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af3_2" name="af3" type="radio" value="2" @if(old('af3',$af3)=='2') checked @endif>
                <label class="form-check-label" for="af3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="af3_3" name="af3" type="radio" value="3" @if(old('af3',$af3)=='2') checked @endif>
                <label class="form-check-label" for="af3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="al1">Sakit Kepala </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="al1_1" name="al1" type="radio" value="1" @if(old('al1',$al1)=='1') checked @endif>
                <label class="form-check-label" for="al1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="al1_2" name="al1" type="radio" value="2" @if(old('al1',$al1)=='2') checked @endif>
                <label class="form-check-label" for="al1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="al3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="al3_1" name="al3" type="radio" value="1" @if(old('al3',$al3)=='1') checked @endif>
                <label class="form-check-label" for="al3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="al3_2" name="al3" type="radio" value="2" @if(old('al3',$al3)=='2') checked @endif>
                <label class="form-check-label" for="al3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="al3_3" name="al3" type="radio" value="3" @if(old('al3',$al3)=='2') checked @endif>
                <label class="form-check-label" for="al3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="am1">Parese N. Kranialis </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="am1_1" name="am1" type="radio" value="1" @if(old('am1',$am1)=='1') checked @endif>
                <label class="form-check-label" for="am1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="am1_2" name="am1" type="radio" value="2" @if(old('am1',$am1)=='2') checked @endif>
                <label class="form-check-label" for="am1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="am21">Nervus </label>
        <div class="col-lg-4">
            <div class="form-check">
                <input class="form-check-input" id="am21" name="am21" type="checkbox" value="1" @if(old('am21',$am21)=='1') checked @endif>
                <label class="form-check-label" for="am21">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am22" name="am22" type="checkbox" value="1" @if(old('am22',$am22)=='1') checked @endif>
                <label class="form-check-label" for="am22">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am23" name="am23" type="checkbox" value="1" @if(old('am23',$am23)=='1') checked @endif>
                <label class="form-check-label" for="am23">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am24" name="am24" type="checkbox" value="1" @if(old('am24',$am24)=='1') checked @endif>
                <label class="form-check-label" for="am24">Ya</label>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-check">
                <input class="form-check-input" id="am25" name="am25" type="checkbox" value="1" @if(old('am25',$am25)=='1') checked @endif>
                <label class="form-check-label" for="am25">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am26" name="am26" type="checkbox" value="1" @if(old('am26',$am26)=='1') checked @endif>
                <label class="form-check-label" for="am26">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am27" name="am27" type="checkbox" value="1" @if(old('am27',$am27)=='1') checked @endif>
                <label class="form-check-label" for="am27">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am28" name="am28" type="checkbox" value="1" @if(old('am28',$am28)=='1') checked @endif>
                <label class="form-check-label" for="am28">Ya</label>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="form-check">
                <input class="form-check-input" id="am29" name="am29" type="checkbox" value="1" @if(old('am29',$am29)=='1') checked @endif>
                <label class="form-check-label" for="am29">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am210" name="am210" type="checkbox" value="1" @if(old('am210',$am210)=='1') checked @endif>
                <label class="form-check-label" for="am210">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am211" name="am211" type="checkbox" value="1" @if(old('am211',$am211)=='1') checked @endif>
                <label class="form-check-label" for="am211">Ya</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" id="am212" name="am212" type="checkbox" value="1" @if(old('am212',$am212)=='1') checked @endif>
                <label class="form-check-label" for="am212">Ya</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="am3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="am3_1" name="am3" type="radio" value="1" @if(old('am3',$am3)=='1') checked @endif>
                <label class="form-check-label" for="am3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="am3_2" name="am3" type="radio" value="2" @if(old('am3',$am3)=='2') checked @endif>
                <label class="form-check-label" for="am3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="am3_3" name="am3" type="radio" value="3" @if(old('am3',$am3)=='2') checked @endif>
                <label class="form-check-label" for="am3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="an1">Suara Sungau </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="an1_1" name="an1" type="radio" value="1" @if(old('an1',$an1)=='1') checked @endif>
                <label class="form-check-label" for="an1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="an1_2" name="an1" type="radio" value="2" @if(old('an1',$an1)=='2') checked @endif>
                <label class="form-check-label" for="an1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="an3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="an3_1" name="an3" type="radio" value="1" @if(old('an3',$an3)=='1') checked @endif>
                <label class="form-check-label" for="an3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="an3_2" name="an3" type="radio" value="2" @if(old('an3',$an3)=='2') checked @endif>
                <label class="form-check-label" for="an3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="an3_3" name="an3" type="radio" value="3" @if(old('an3',$an3)=='2') checked @endif>
                <label class="form-check-label" for="an3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="aa1">Benjolan Leher </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa1_1" name="aa1" type="radio" value="1" @if(old('aa1',$aa1)=='1') checked @endif>
                <label class="form-check-label" for="aa1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa1_2" name="aa1" type="radio" value="2" @if(old('aa1',$aa1)=='2') checked @endif>
                <label class="form-check-label" for="aa1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="aa2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa2_1" name="aa2" type="radio" value="1" @if(old('aa2',$aa2)=='1') checked @endif>
                <label class="form-check-label" for="aa2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa2_2" name="aa2" type="radio" value="2" @if(old('aa2',$aa2)=='2') checked @endif>
                <label class="form-check-label" for="aa2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa2_3" name="aa2" type="radio" value="2" @if(old('aa2',$aa2)=='2') checked @endif>
                <label class="form-check-label" for="aa2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="aa3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa3_1" name="aa3" type="radio" value="1" @if(old('aa3',$aa3)=='1') checked @endif>
                <label class="form-check-label" for="aa3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa3_2" name="aa3" type="radio" value="2" @if(old('aa3',$aa3)=='2') checked @endif>
                <label class="form-check-label" for="aa3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="aa3_3" name="aa3" type="radio" value="3" @if(old('aa3',$aa3)=='2') checked @endif>
                <label class="form-check-label" for="aa3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Angiofibroma Nasofaring Belia</h3>
    </div>
    <div class="form-group">
        <label for="ed1">Pembengkakan Hidun </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed1_1" name="ed1" type="radio" value="1" @if(old('ed1',$ed1)=='1') checked @endif>
                <label class="form-check-label" for="ed1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed1_2" name="ed1" type="radio" value="2" @if(old('ed1',$ed1)=='2') checked @endif>
                <label class="form-check-label" for="ed1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ed2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed2_1" name="ed2" type="radio" value="1" @if(old('ed2',$ed2)=='1') checked @endif>
                <label class="form-check-label" for="ed2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed2_2" name="ed2" type="radio" value="2" @if(old('ed2',$ed2)=='2') checked @endif>
                <label class="form-check-label" for="ed2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed2_3" name="ed2" type="radio" value="2" @if(old('ed2',$ed2)=='2') checked @endif>
                <label class="form-check-label" for="ed2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ed3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed3_1" name="ed3" type="radio" value="1" @if(old('ed3',$ed3)=='1') checked @endif>
                <label class="form-check-label" for="ed3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed3_2" name="ed3" type="radio" value="2" @if(old('ed3',$ed3)=='2') checked @endif>
                <label class="form-check-label" for="ed3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ed3_3" name="ed3" type="radio" value="3" @if(old('ed3',$ed3)=='2') checked @endif>
                <label class="form-check-label" for="ed3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="eb1">Epistaksis </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb1_1" name="eb1" type="radio" value="1" @if(old('eb1',$eb1)=='1') checked @endif>
                <label class="form-check-label" for="eb1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb1_2" name="eb1" type="radio" value="2" @if(old('eb1',$eb1)=='2') checked @endif>
                <label class="form-check-label" for="eb1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="eb2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb2_1" name="eb2" type="radio" value="1" @if(old('eb2',$eb2)=='1') checked @endif>
                <label class="form-check-label" for="eb2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb2_2" name="eb2" type="radio" value="2" @if(old('eb2',$eb2)=='2') checked @endif>
                <label class="form-check-label" for="eb2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb2_3" name="eb2" type="radio" value="2" @if(old('eb2',$eb2)=='2') checked @endif>
                <label class="form-check-label" for="eb2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="eb3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb3_1" name="eb3" type="radio" value="1" @if(old('eb3',$eb3)=='1') checked @endif>
                <label class="form-check-label" for="eb3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb3_2" name="eb3" type="radio" value="2" @if(old('eb3',$eb3)=='2') checked @endif>
                <label class="form-check-label" for="eb3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eb3_3" name="eb3" type="radio" value="3" @if(old('eb3',$eb3)=='2') checked @endif>
                <label class="form-check-label" for="eb3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="eg1">Penurunan Pendengaran </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg1_1" name="eg1" type="radio" value="1" @if(old('eg1',$eg1)=='1') checked @endif>
                <label class="form-check-label" for="eg1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg1_2" name="eg1" type="radio" value="2" @if(old('eg1',$eg1)=='2') checked @endif>
                <label class="form-check-label" for="eg1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="eg2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg2_1" name="eg2" type="radio" value="1" @if(old('eg2',$eg2)=='1') checked @endif>
                <label class="form-check-label" for="eg2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg2_2" name="eg2" type="radio" value="2" @if(old('eg2',$eg2)=='2') checked @endif>
                <label class="form-check-label" for="eg2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg2_3" name="eg2" type="radio" value="2" @if(old('eg2',$eg2)=='2') checked @endif>
                <label class="form-check-label" for="eg2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="eg3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg3_1" name="eg3" type="radio" value="1" @if(old('eg3',$eg3)=='1') checked @endif>
                <label class="form-check-label" for="eg3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg3_2" name="eg3" type="radio" value="2" @if(old('eg3',$eg3)=='2') checked @endif>
                <label class="form-check-label" for="eg3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="eg3_3" name="eg3" type="radio" value="3" @if(old('eg3',$eg3)=='2') checked @endif>
                <label class="form-check-label" for="eg3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ef1">Suara Sengau </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ef1_1" name="ef1" type="radio" value="1" @if(old('ef1',$ef1)=='1') checked @endif>
                <label class="form-check-label" for="ef1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ef1_2" name="ef1" type="radio" value="2" @if(old('ef1',$ef1)=='2') checked @endif>
                <label class="form-check-label" for="ef1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ef3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ef3_1" name="ef3" type="radio" value="1" @if(old('ef3',$ef3)=='1') checked @endif>
                <label class="form-check-label" for="ef3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ef3_2" name="ef3" type="radio" value="2" @if(old('ef3',$ef3)=='2') checked @endif>
                <label class="form-check-label" for="ef3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ef3_3" name="ef3" type="radio" value="3" @if(old('ef3',$ef3)=='2') checked @endif>
                <label class="form-check-label" for="ef3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ea1">Pandangan Buram </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea1_1" name="ea1" type="radio" value="1" @if(old('ea1',$ea1)=='1') checked @endif>
                <label class="form-check-label" for="ea1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea1_2" name="ea1" type="radio" value="2" @if(old('ea1',$ea1)=='2') checked @endif>
                <label class="form-check-label" for="ea1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ea2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea2_1" name="ea2" type="radio" value="1" @if(old('ea2',$ea2)=='1') checked @endif>
                <label class="form-check-label" for="ea2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea2_2" name="ea2" type="radio" value="2" @if(old('ea2',$ea2)=='2') checked @endif>
                <label class="form-check-label" for="ea2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea2_3" name="ea2" type="radio" value="2" @if(old('ea2',$ea2)=='2') checked @endif>
                <label class="form-check-label" for="ea2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dj3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea3_1" name="ea3" type="radio" value="1" @if(old('ea3',$ea3)=='1') checked @endif>
                <label class="form-check-label" for="ea3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea3_2" name="ea3" type="radio" value="2" @if(old('ea3',$ea3)=='2') checked @endif>
                <label class="form-check-label" for="ea3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ea3_3" name="ea3" type="radio" value="3" @if(old('ea3',$ea3)=='2') checked @endif>
                <label class="form-check-label" for="ea3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ec1">Sakit Kepala </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec1_1" name="ec1" type="radio" value="1" @if(old('ec1',$ec1)=='1') checked @endif>
                <label class="form-check-label" for="ec1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec1_2" name="ec1" type="radio" value="2" @if(old('ec1',$ec1)=='2') checked @endif>
                <label class="form-check-label" for="ec1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ec2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec2_1" name="ec2" type="radio" value="1" @if(old('ec2',$ec2)=='1') checked @endif>
                <label class="form-check-label" for="ec2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec2_2" name="ec2" type="radio" value="2" @if(old('ec2',$ec2)=='2') checked @endif>
                <label class="form-check-label" for="ec2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec2_3" name="ec2" type="radio" value="2" @if(old('ec2',$ec2)=='2') checked @endif>
                <label class="form-check-label" for="ec2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ec3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec3_1" name="ec3" type="radio" value="1" @if(old('ec3',$ec3)=='1') checked @endif>
                <label class="form-check-label" for="ec3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec3_2" name="ec3" type="radio" value="2" @if(old('ec3',$ec3)=='2') checked @endif>
                <label class="form-check-label" for="ec3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ec3_3" name="ec3" type="radio" value="3" @if(old('ec3',$ec3)=='2') checked @endif>
                <label class="form-check-label" for="ec3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ee1">Sesak Nafas </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ee1_1" name="ee1" type="radio" value="1" @if(old('ee1',$ee1)=='1') checked @endif>
                <label class="form-check-label" for="ee1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ee1_2" name="ee1" type="radio" value="2" @if(old('ee1',$ee1)=='2') checked @endif>
                <label class="form-check-label" for="ee1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ee3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ee3_1" name="ee3" type="radio" value="1" @if(old('ee3',$ee3)=='1') checked @endif>
                <label class="form-check-label" for="ee3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ee3_2" name="ee3" type="radio" value="2" @if(old('ee3',$ee3)=='2') checked @endif>
                <label class="form-check-label" for="ee3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ee3_3" name="ee3" type="radio" value="3" @if(old('ee3',$ee3)=='2') checked @endif>
                <label class="form-check-label" for="ee3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Neoplasma Orofaring</h3>
    </div>
    <div class="form-group">
        <label for="dc1">Sakit Kepala </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc1_1" name="dc1" type="radio" value="1" @if(old('dc1',$dc1)=='1') checked @endif>
                <label class="form-check-label" for="dc1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc1_2" name="dc1" type="radio" value="2" @if(old('dc1',$dc1)=='2') checked @endif>
                <label class="form-check-label" for="dc1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dc2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc2_1" name="dc2" type="radio" value="1" @if(old('dc2',$dc2)=='1') checked @endif>
                <label class="form-check-label" for="dc2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc2_2" name="dc2" type="radio" value="2" @if(old('dc2',$dc2)=='2') checked @endif>
                <label class="form-check-label" for="dc2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc2_3" name="dc2" type="radio" value="2" @if(old('dc2',$dc2)=='2') checked @endif>
                <label class="form-check-label" for="dc2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dc3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc3_1" name="dc3" type="radio" value="1" @if(old('dc3',$dc3)=='1') checked @endif>
                <label class="form-check-label" for="dc3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc3_2" name="dc3" type="radio" value="2" @if(old('dc3',$dc3)=='2') checked @endif>
                <label class="form-check-label" for="dc3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dc3_3" name="dc3" type="radio" value="3" @if(old('dc3',$dc3)=='2') checked @endif>
                <label class="form-check-label" for="dc3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="dh1">Sulit Menelan </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dh1_1" name="dh1" type="radio" value="1" @if(old('dh1',$dh1)=='1') checked @endif>
                <label class="form-check-label" for="dh1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dh1_2" name="dh1" type="radio" value="2" @if(old('dh1',$dh1)=='2') checked @endif>
                <label class="form-check-label" for="dh1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dh2">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dh2_1" name="dh2" type="radio" value="1" @if(old('dh2',$dh2)=='1') checked @endif>
                <label class="form-check-label" for="dh2_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dh2_2" name="dh2" type="radio" value="2" @if(old('dh2',$dh2)=='2') checked @endif>
                <label class="form-check-label" for="dh2_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dh2_3" name="dh2" type="radio" value="3" @if(old('dh2',$dh2)=='2') checked @endif>
                <label class="form-check-label" for="dh2_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="da1">Gerak Lidah Terbatas </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da1_1" name="da1" type="radio" value="1" @if(old('da1',$da1)=='1') checked @endif>
                <label class="form-check-label" for="da1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da1_2" name="da1" type="radio" value="2" @if(old('da1',$da1)=='2') checked @endif>
                <label class="form-check-label" for="da1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="da2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da2_1" name="da2" type="radio" value="1" @if(old('da2',$da2)=='1') checked @endif>
                <label class="form-check-label" for="da2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da2_2" name="da2" type="radio" value="2" @if(old('da2',$da2)=='2') checked @endif>
                <label class="form-check-label" for="da2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da2_3" name="da2" type="radio" value="2" @if(old('da2',$da2)=='2') checked @endif>
                <label class="form-check-label" for="da2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="da3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da3_1" name="da3" type="radio" value="1" @if(old('da3',$da3)=='1') checked @endif>
                <label class="form-check-label" for="da3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da3_2" name="da3" type="radio" value="2" @if(old('da3',$da3)=='2') checked @endif>
                <label class="form-check-label" for="da3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="da3_3" name="da3" type="radio" value="3" @if(old('da3',$da3)=='2') checked @endif>
                <label class="form-check-label" for="da3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="de1">Mulut Berbau </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="de1_1" name="de1" type="radio" value="1" @if(old('de1',$de1)=='1') checked @endif>
                <label class="form-check-label" for="de1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="de1_2" name="de1" type="radio" value="2" @if(old('de1',$de1)=='2') checked @endif>
                <label class="form-check-label" for="de1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="de3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="de3_1" name="de3" type="radio" value="1" @if(old('de3',$de3)=='1') checked @endif>
                <label class="form-check-label" for="de3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="de3_2" name="de3" type="radio" value="2" @if(old('de3',$de3)=='2') checked @endif>
                <label class="form-check-label" for="de3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="de3_3" name="de3" type="radio" value="3" @if(old('de3',$de3)=='2') checked @endif>
                <label class="form-check-label" for="de3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="dd1">Hot Potato Voice </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dd1_1" name="dd1" type="radio" value="1" @if(old('dd1',$dd1)=='1') checked @endif>
                <label class="form-check-label" for="dd1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dd1_2" name="dd1" type="radio" value="2" @if(old('dd1',$dd1)=='2') checked @endif>
                <label class="form-check-label" for="dd1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dd3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dd3_1" name="dd3" type="radio" value="1" @if(old('dd3',$dd3)=='1') checked @endif>
                <label class="form-check-label" for="dd3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dd3_2" name="dd3" type="radio" value="2" @if(old('dd3',$dd3)=='2') checked @endif>
                <label class="form-check-label" for="dd3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dd3_3" name="dd3" type="radio" value="3" @if(old('dd3',$dd3)=='2') checked @endif>
                <label class="form-check-label" for="dd3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="df1">Mulut Berbau </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="df1_1" name="df1" type="radio" value="1" @if(old('df1',$df1)=='1') checked @endif>
                <label class="form-check-label" for="df1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="df1_2" name="df1" type="radio" value="2" @if(old('df1',$ee1)=='2') checked @endif>
                <label class="form-check-label" for="df1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="df3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="df3_1" name="df3" type="radio" value="1" @if(old('df3',$df3)=='1') checked @endif>
                <label class="form-check-label" for="df3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="df3_2" name="df3" type="radio" value="2" @if(old('df3',$df3)=='2') checked @endif>
                <label class="form-check-label" for="df3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="df3_3" name="df3" type="radio" value="3" @if(old('df3',$df3)=='2') checked @endif>
                <label class="form-check-label" for="df3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="di1">Sesak Nafas </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="di1_1" name="di1" type="radio" value="1" @if(old('di1',$di1)=='1') checked @endif>
                <label class="form-check-label" for="di1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="di1_2" name="di1" type="radio" value="2" @if(old('di1',$ee1)=='2') checked @endif>
                <label class="form-check-label" for="di1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="di2">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="di2_1" name="di2" type="radio" value="1" @if(old('di2',$di2)=='1') checked @endif>
                <label class="form-check-label" for="di2_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="di2_2" name="di2" type="radio" value="2" @if(old('di2',$di2)=='2') checked @endif>
                <label class="form-check-label" for="di2_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="di2_3" name="di2" type="radio" value="3" @if(old('di2',$di2)=='2') checked @endif>
                <label class="form-check-label" for="di2_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="dj1">Benjolan di Leher </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj1_1" name="dj1" type="radio" value="1" @if(old('dj1',$dj1)=='1') checked @endif>
                <label class="form-check-label" for="dj1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj1_2" name="dj1" type="radio" value="2" @if(old('dj1',$dj1)=='2') checked @endif>
                <label class="form-check-label" for="dj1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dj2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj2_1" name="dj2" type="radio" value="1" @if(old('dj2',$dj2)=='1') checked @endif>
                <label class="form-check-label" for="dj2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj2_2" name="dj2" type="radio" value="2" @if(old('dj2',$dj2)=='2') checked @endif>
                <label class="form-check-label" for="dj2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj2_3" name="dj2" type="radio" value="2" @if(old('dj2',$dj2)=='2') checked @endif>
                <label class="form-check-label" for="dj2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="dj3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj3_1" name="dj3" type="radio" value="1" @if(old('dj3',$dj3)=='1') checked @endif>
                <label class="form-check-label" for="dj3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj3_2" name="dj3" type="radio" value="2" @if(old('dj3',$dj3)=='2') checked @endif>
                <label class="form-check-label" for="dj3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dj3_3" name="dj3" type="radio" value="3" @if(old('dj3',$dj3)=='2') checked @endif>
                <label class="form-check-label" for="dj3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <h3>Neoplasma Rongga Mulut</h3>
    </div>
    <div class="form-group">
        <label for="ca1">Sariawan Sukar Sembuh </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca1_1" name="ca1" type="radio" value="1" @if(old('ca1',$ca1)=='1') checked @endif>
                <label class="form-check-label" for="ca1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca1_2" name="ca1" type="radio" value="2" @if(old('ca1',$ca1)=='2') checked @endif>
                <label class="form-check-label" for="ca1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ca2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca2_1" name="ca2" type="radio" value="1" @if(old('ca2',$ca2)=='1') checked @endif>
                <label class="form-check-label" for="ca2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca2_2" name="ca2" type="radio" value="2" @if(old('ca2',$ca2)=='2') checked @endif>
                <label class="form-check-label" for="ca2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca2_3" name="ca2" type="radio" value="2" @if(old('ca2',$ca2)=='2') checked @endif>
                <label class="form-check-label" for="ca2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ca3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca3_1" name="ca3" type="radio" value="1" @if(old('ca3',$ca3)=='1') checked @endif>
                <label class="form-check-label" for="ca3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca3_2" name="ca3" type="radio" value="2" @if(old('ca3',$ca3)=='2') checked @endif>
                <label class="form-check-label" for="ca3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ca3_3" name="ca3" type="radio" value="3" @if(old('ca3',$ca3)=='2') checked @endif>
                <label class="form-check-label" for="ca3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="cf1">Sariawan Sukar Sembuh </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf1_1" name="cf1" type="radio" value="1" @if(old('cf1',$cf1)=='1') checked @endif>
                <label class="form-check-label" for="cf1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf1_2" name="cf1" type="radio" value="2" @if(old('cf1',$cf1)=='2') checked @endif>
                <label class="form-check-label" for="cf1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cf2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf2_1" name="cf2" type="radio" value="1" @if(old('cf2',$cf2)=='1') checked @endif>
                <label class="form-check-label" for="cf2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf2_2" name="cf2" type="radio" value="2" @if(old('cf2',$cf2)=='2') checked @endif>
                <label class="form-check-label" for="cf2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf2_3" name="cf2" type="radio" value="2" @if(old('cf2',$cf2)=='2') checked @endif>
                <label class="form-check-label" for="cf2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cf3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf3_1" name="cf3" type="radio" value="1" @if(old('cf3',$cf3)=='1') checked @endif>
                <label class="form-check-label" for="cf3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf3_2" name="cf3" type="radio" value="2" @if(old('cf3',$cf3)=='2') checked @endif>
                <label class="form-check-label" for="cf3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cf3_3" name="cf3" type="radio" value="3" @if(old('cf3',$cf3)=='2') checked @endif>
                <label class="form-check-label" for="cf3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="cd1">Nyeri pada lesi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd1_1" name="cd1" type="radio" value="1" @if(old('cd1',$cd1)=='1') checked @endif>
                <label class="form-check-label" for="cd1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd1_2" name="cd1" type="radio" value="2" @if(old('cd1',$cd1)=='2') checked @endif>
                <label class="form-check-label" for="cd1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cd2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd2_1" name="cd2" type="radio" value="1" @if(old('cd2',$cd2)=='1') checked @endif>
                <label class="form-check-label" for="cd2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd2_2" name="cd2" type="radio" value="2" @if(old('cd2',$cd2)=='2') checked @endif>
                <label class="form-check-label" for="cd2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd2_3" name="cd2" type="radio" value="2" @if(old('cd2',$cd2)=='2') checked @endif>
                <label class="form-check-label" for="cd2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cd3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd3_1" name="cd3" type="radio" value="1" @if(old('cd3',$cd3)=='1') checked @endif>
                <label class="form-check-label" for="cd3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd3_2" name="cd3" type="radio" value="2" @if(old('cd3',$cd3)=='2') checked @endif>
                <label class="form-check-label" for="cd3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cd3_3" name="cd3" type="radio" value="3" @if(old('cd3',$cd3)=='2') checked @endif>
                <label class="form-check-label" for="cd3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="cb1">Pendarahan lokal </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb1_1" name="cb1" type="radio" value="1" @if(old('cb1',$cb1)=='1') checked @endif>
                <label class="form-check-label" for="cb1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb1_2" name="cb1" type="radio" value="2" @if(old('cb1',$cb1)=='2') checked @endif>
                <label class="form-check-label" for="cb1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cb2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb2_1" name="cb2" type="radio" value="1" @if(old('cb2',$cb2)=='1') checked @endif>
                <label class="form-check-label" for="cb2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb2_2" name="cb2" type="radio" value="2" @if(old('cb2',$cb2)=='2') checked @endif>
                <label class="form-check-label" for="cb2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb2_3" name="cb2" type="radio" value="2" @if(old('cb2',$cb2)=='2') checked @endif>
                <label class="form-check-label" for="cb2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cb3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb3_1" name="cb3" type="radio" value="1" @if(old('cb3',$cb3)=='1') checked @endif>
                <label class="form-check-label" for="cb3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb3_2" name="cb3" type="radio" value="2" @if(old('cb3',$cb3)=='2') checked @endif>
                <label class="form-check-label" for="cb3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cb3_3" name="cb3" type="radio" value="3" @if(old('cb3',$cb3)=='2') checked @endif>
                <label class="form-check-label" for="cb3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="cg1">Gerak Lidah Terbatas </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg1_1" name="cg1" type="radio" value="1" @if(old('cg1',$cg1)=='1') checked @endif>
                <label class="form-check-label" for="cg1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg1_2" name="cg1" type="radio" value="2" @if(old('cg1',$cg1)=='2') checked @endif>
                <label class="form-check-label" for="cg1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cg2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg2_1" name="cg2" type="radio" value="1" @if(old('cg2',$cg2)=='1') checked @endif>
                <label class="form-check-label" for="cg2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg2_2" name="cg2" type="radio" value="2" @if(old('cg2',$cg2)=='2') checked @endif>
                <label class="form-check-label" for="cg2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg2_3" name="cg2" type="radio" value="2" @if(old('cg2',$cg2)=='2') checked @endif>
                <label class="form-check-label" for="cg2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cg3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg3_1" name="cg3" type="radio" value="1" @if(old('cg3',$cg3)=='1') checked @endif>
                <label class="form-check-label" for="cg3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg3_2" name="cg3" type="radio" value="2" @if(old('cg3',$cg3)=='2') checked @endif>
                <label class="form-check-label" for="cg3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cg3_3" name="cg3" type="radio" value="3" @if(old('cg3',$cg3)=='2') checked @endif>
                <label class="form-check-label" for="cg3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ce1">Sulit/Nyeri Menelan </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cc1_1" name="cc1" type="radio" value="1" @if(old('cc1',$cc1)=='1') checked @endif>
                <label class="form-check-label" for="cc1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cc1_2" name="cc1" type="radio" value="2" @if(old('cc1',$cc1)=='2') checked @endif>
                <label class="form-check-label" for="cc1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="cc3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cc3_1" name="cc3" type="radio" value="1" @if(old('cc3',$cc3)=='1') checked @endif>
                <label class="form-check-label" for="cc3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cc3_2" name="cc3" type="radio" value="2" @if(old('cc3',$cc3)=='2') checked @endif>
                <label class="form-check-label" for="cc3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="cc3_3" name="cc3" type="radio" value="3" @if(old('cc3',$cc3)=='2') checked @endif>
                <label class="form-check-label" for="cc3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ce1">Sulit Berbicara </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ce1_1" name="ce1" type="radio" value="1" @if(old('ce1',$ce1)=='1') checked @endif>
                <label class="form-check-label" for="ce1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ce1_2" name="ce1" type="radio" value="2" @if(old('ce1',$ce1)=='2') checked @endif>
                <label class="form-check-label" for="ce1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ce3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ce3_1" name="ce3" type="radio" value="1" @if(old('ce3',$ce3)=='1') checked @endif>
                <label class="form-check-label" for="ce3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ce3_2" name="ce3" type="radio" value="2" @if(old('ce3',$ce3)=='2') checked @endif>
                <label class="form-check-label" for="ce3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ce3_3" name="ce3" type="radio" value="3" @if(old('ce3',$ce3)=='2') checked @endif>
                <label class="form-check-label" for="ce3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ch1">Sesak Nafas </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ch1_1" name="ch1" type="radio" value="1" @if(old('ch1',$ch1)=='1') checked @endif>
                <label class="form-check-label" for="ch1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ch1_2" name="ch1" type="radio" value="2" @if(old('ch1',$ch1)=='2') checked @endif>
                <label class="form-check-label" for="ch1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ch3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ch3_1" name="ch3" type="radio" value="1" @if(old('ch3',$ch3)=='1') checked @endif>
                <label class="form-check-label" for="ch3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ch3_2" name="ch3" type="radio" value="2" @if(old('ch3',$ch3)=='2') checked @endif>
                <label class="form-check-label" for="ch3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ch3_3" name="ch3" type="radio" value="3" @if(old('ch3',$ch3)=='2') checked @endif>
                <label class="form-check-label" for="ch3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-group">
        <label for="ci1">Benjolan di Leher </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci1_1" name="ci1" type="radio" value="1" @if(old('ci1',$ci1)=='1') checked @endif>
                <label class="form-check-label" for="ci1_1">Ya</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci1_2" name="ci1" type="radio" value="2" @if(old('ci1',$ci1)=='2') checked @endif>
                <label class="form-check-label" for="ci1_2">Tidak</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ci2">Lokasi </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci2_1" name="ci2" type="radio" value="1" @if(old('ci2',$ci2)=='1') checked @endif>
                <label class="form-check-label" for="ci2_1">Kanan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci2_2" name="ci2" type="radio" value="2" @if(old('ci2',$ci2)=='2') checked @endif>
                <label class="form-check-label" for="ci2_2">Kiri</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci2_3" name="ci2" type="radio" value="2" @if(old('ci2',$ci2)=='2') checked @endif>
                <label class="form-check-label" for="ci2_3">Bilateral</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ci3">Lama </label>
        <div class="col-lg-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci3_1" name="ci3" type="radio" value="1" @if(old('ci3',$ci3)=='1') checked @endif>
                <label class="form-check-label" for="ci3_1">0 - 6 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci3_2" name="ci3" type="radio" value="2" @if(old('ci3',$ci3)=='2') checked @endif>
                <label class="form-check-label" for="ci3_2">6 - 12 Bulan</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="ci3_3" name="ci3" type="radio" value="3" @if(old('ci3',$ci3)=='2') checked @endif>
                <label class="form-check-label" for="ci3_3">&gt; 12 Bulan</label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <hr/>
    </div>
</form>