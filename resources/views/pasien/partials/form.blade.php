<form id="form" method="post" action="">
    {{ csrf_field() }}
    <input type="hidden" id="id" name="id" value="{{ $id }}">
    <div class="form-group">
        <label for="nama">Nama</label>
        <input id="nama" name="nama" type="text" class="form-control" value="{{ old('nama', $nama) }}">
    </div>
    <div class="form-group">
        <label for="nama">Rumah Sakit</label>
        <select name="kode_rs" id="kode_rs" class="form-control">
            <option value="0">Silahkan Pilih</option>
            @foreach($listRs as $key => $itemRs)
                <option value="{{ $itemRs->getKode() }}" @if(old('kode_rs', $kode_rs) == $itemRs->getKode()) checked @endif>{{ $itemRs->getNama() }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="no_rekam_medis">No Rekam Medis</label>
        <input id="no_rekam_medis" name="no_rekam_medis" type="text" class="form-control" value="{{ old('no_rekam_medis', $no_rekam_medis) }}">
    </div>
    <div class="form-group">
        <label for="nama_orang_tua">Nama Orang Tua</label>
        <input id="nama_orang_tua" name="nama_orang_tua" type="text" class="form-control" value="{{ old('nama_orang_tua', $nama_orang_tua) }}">
    </div>
    <div class="form-group">
        <label for="tempat_lahir">Tempat Lahir</label>
        <input id="tempat_lahir" name="tempat_lahir" type="text" class="form-control" value="{{ old('tempat_lahir', $tempat_lahir) }}">
    </div>
    <div class="form-group">
        <label for="tgl_lahir">Tanggal Lahir</label>
        <input id="tgl_lahir" name="tgl_lahir" type="text" class="form-control" value="{{ old('tgl_lahir', $tgl_lahir) }}">
    </div>
    <div class="form-group">
        <label for="pendidikan">Pendidikan</label>
        <select name="pendidikan" id="pendidikan" class="form-control">
            <option value="0">Silahkan Pilih</option>
            @foreach($listPendidikan as $key => $itemPendidikan)
                <option value="{{ $itemPendidikan->getId() }}" @if(old('pendidikan', $pendidikan) == $itemPendidikan->getId()) checked @endif>{{ $itemPendidikan->getNama() }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="pekerjaan">Pekerjaan</label>
        <select name="pekerjaan" id="pekerjaan" class="form-control">
            <option value="0">Silahkan Pilih</option>
            @foreach($listPekerjaan as $key => $itemPekerjaan)
                <option value="{{ $itemPekerjaan->getId() }}" @if(old('pekerjaan', $pekerjaan) == $itemPekerjaan->getId()) checked @endif>{{ $itemPekerjaan->getNama() }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="hamil">Hamil</label>
        <input id="hamil1" name="hamil" type="checkbox" value="1" @if(old('hamil', $hamil) == 1) checked @endif> Ya
        <input id="hamil1" name="hamil" type="checkbox" value="0" @if(old('hamil', $hamil) == 0) checked @endif> Tidak
    </div>
    <div class="form-group">
        <label for="menyusui">Menyusui</label>
        <input id="menyusui1" name="menyusui" type="checkbox" value="1" @if(old('menyusui', $menyusui) == 1) checked @endif> Ya
        <input id="menyusui2" name="menyusui" type="checkbox" value="0" @if(old('menyusui', $menyusui) == 0) checked @endif> Tidak
    </div>
    <div class="form-group">
        <label for="rujuk">Rujuk</label>
        <input id="rujuk" name="rujuk" type="text" class="form-control" value="{{ old('rujuk', $rujuk) }}">
    </div>
    <div class="form-group">
        <label for="agama">Agama</label>
        <select name="agama" id="agama" class="form-control">
            <option value="0">Silahkan Pilih</option>
            @foreach($listAgama as $key => $itemAgama)
                <option value="{{ $itemAgama->getId() }}" @if(old('agama', $agama) == $itemAgama->getId()) checked @endif>{{ $itemAgama->getNama() }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="perkawinan" class="form-control">Perkawinan</label>
        <select name="perkawinan" id="perkawinan" class="form-control">
            <option value="0">Silahkan Pilih</option>
            @foreach($listPerkawinan as $key => $itemPerkawinan)
                <option value="{{ $itemPerkawinan->getId() }}" @if(old('perkawinan', $perkawinan) == $itemPerkawinan->getId()) checked @endif>{{ $itemPerkawinan->getNama() }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="keturunan">Keturunan</label>
        <input id="keturunan" name="keturunan" type="text" class="form-control" value="{{ old('keturunan', $keturunan)}}">
    </div>
    <div class="form-group">
        <label for="suku">Suku</label>
        <input id="suku" name="suku" type="text" class="form-control" value="{{ old('suku', $suku)}}">
    </div>
    <div class="form-group">
        <label for="asing">Asing</label>
        <input id="asing" name="asing" type="checkbox" class="form-control" @if(old('asing', $asing) == 'Asing') checked @endif value="Asing">
    </div>
    <div class="form-group">
        <label for="daerah">Daerah</label>
        <input id="daerah" name="daerah" type="text" class="form-control" value="{{ old('daerah', $daerah)}}">
    </div>
    <div class="form-group">
        <label for="jalan">Jalan</label>
        <input id="jalan" name="jalan" type="text" class="form-control" value="{{ old('jalan', $jalan)}}">
    </div>
    <div class="form-group">
        <label for="rt">RT</label>
        <input id="rt" name="rt" type="text" class="form-control" value="{{ old('rt', $rt)}}">
    </div>
    <div class="form-group">
        <label for="rw">RW</label>
        <input id="rw" name="rw" type="text" class="form-control" value="{{ old('rw', $rw)}}">
    </div>
    <div class="form-group">
        <label for="no">No</label>
        <input id="no" name="no" type="text" class="form-control" value="{{ old('no', $no)}}">
    </div>
    <div class="form-group">
        <label for="kode_telp">Kode Telepon</label>
        <input id="kode_telp" name="kode_telp" type="text" class="form-control" value="{{ old('kode_telp', $kode_telp)}}">
    </div>
    <div class="form-group">
        <label for="telp">Telepon</label>
        <input id="telp" name="telp" type="text" class="form-control" value="{{ old('telp', $telp)}}">
    </div>
    <div class="form-group">
        <label for="kelurahan">Kelurahan</label>
        <input id="kelurahan" name="kelurahan" type="text" class="form-control" value="{{ old('kelurahan', $kelurahan)}}">
    </div>
    <div class="form-group">
        <label for="kecamatan">Kecamatan</label>
        <input id="kecamatan" name="kecamatan" type="text" class="form-control" value="{{ old('kecamatan', $kecamatan)}}">
    </div>
    <div class="form-group">
        <label for="kabupaten">Kabupaten</label>
        <input id="kabupaten" name="kabupaten" type="text" class="form-control" value="{{ old('kabupaten', $kabupaten)}}">
    </div>
    <div class="form-group">
        <label for="provinsi">Provinsi</label>
        <input id="provinsi" name="provinsi" type="text" class="form-control" value="{{ old('provinsi', $provinsi)}}">
    </div>
    <div class="form-group">
        <h2>Alamat Orang Tua</h2>
    </div>
    <div class="form-group">
        <label for="jalan_o">Jalan</label>
        <input id="jalan_o" name="jalan_o" type="text" class="form-control" value="{{ old('jalan_o', $jalan_o)}}">
    </div>
    <div class="form-group">
        <label for="rt_o">RT</label>
        <input id="rt_o" name="rt_o" type="text" class="form-control" value="{{ old('rt_o', $rt_o)}}">
    </div>
    <div class="form-group">
        <label for="rw_o">RW</label>
        <input id="rw_o" name="rw_o" type="text" class="form-control" value="{{ old('rw_o', $rw_o)}}">
    </div>
    <div class="form-group">
        <label for="no_o">No</label>
        <input id="no_o" name="no_o" type="text" class="form-control" value="{{ old('no_o', $no_o)}}">
    </div>
    <div class="form-group">
        <label for="kode_telp_o">Kode Telepon</label>
        <input id="kode_telp_o" name="kode_telp_o" type="text" class="form-control" value="{{ old('kode_telp_o', $kode_telp_o)}}">
    </div>
    <div class="form-group">
        <label for="telp"_o>No</label>
        <input id="telp_o" name="telp_o" type="text" class="form-control" value="{{ old('telp_o', $telp_o)}}">
    </div>
    <div class="form-group">
        <label for="kelurahan_o">Kelurahan</label>
        <input id="kelurahan_o" name="kelurahan_o" type="text" class="form-control" value="{{ old('kelurahan_o', $kelurahan_o)}}">
    </div>
    <div class="form-group">
        <label for="kecamatan_o">Kecamatan</label>
        <input id="kecamatan_o" name="kecamatan_o" type="text" class="form-control" value="{{ old('kecamatan_o', $kecamatan_o)}}">
    </div>
    <div class="form-group">
        <label for="kabupaten_o">Kabupaten</label>
        <input id="kabupaten_o" name="kabupaten_o" type="text" class="form-control" value="{{ old('kabupaten_o', $kabupaten_o)}}">
    </div>
    <div class="form-group">
        <label for="provinsi_o">Provinsi</label>
        <input id="provinsi_o" name="provinsi_o" type="text" class="form-control" value="{{ old('provinsi_o', $provinsi_o)}}">
    </div>
    <div class="form-group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>