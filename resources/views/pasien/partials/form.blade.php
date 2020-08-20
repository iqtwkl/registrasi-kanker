<form id="form" method="post" action="{{ $action }}">
    {{ csrf_field() }}
    <input type="hidden" id="id" name="id" value="{{ $id }}">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="no_rekam_medis">No Rekam Medis</label>
                <input id="no_rekam_medis" name="no_rekam_medis" type="text" class="form-control" value="{{ old('no_rekam_medis', $no_rekam_medis) }}">
            </div>
            <div class="form-group">
                <label for="nama">Nama Pasien (Lengkap)</label>
                <input id="nama" name="nama" type="text" class="form-control" value="{{ old('nama', $nama) }}">
            </div>
            <div class="form-group">
                <label for="nama_orang_tua">Nama Orang Tua (ayah/ibu lengkap)</label>
                <input id="nama_orang_tua" name="nama_orang_tua" type="text" class="form-control" value="{{ old('nama_orang_tua', $nama_orang_tua) }}">
            </div>
            <div class="form-group">
                <label for="tempat_lahir">Tempat Lahir</label>
                <input id="tempat_lahir" name="tempat_lahir" type="text" class="form-control" value="{{ old('tempat_lahir', $tempat_lahir) }}">
            </div>
            <div class="form-group">
                <label for="tgl_lahir">Tanggal Lahir</label>
                <input id="tgl_lahir" name="tgl_lahir" type="date" class="form-control" value="{{ old('tgl_lahir', $tgl_lahir) }}" aria-label="DD/MM/YYYY" aria-describedby="date-icon">
            </div>
            <div class="form-group">
                <label for="usia">Usia</label>
                <input id="usia" name="usia" type="text" class="form-control" value="{{ old('usia', $usia) }}" readonly>
            </div>
            <div class="form-group">
                <label for="pendidikan">Pendidikan</label>
                <select name="pendidikan" id="pendidikan" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listPendidikan as $key => $itemPendidikan)
                        <option value="{{ $itemPendidikan->getId() }}" @if(old('pendidikan', $pendidikan) == $itemPendidikan->getId()) selected @endif>{{ $itemPendidikan->getNama() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="pekerjaan">Pekerjaan</label>
                <select name="pekerjaan" id="pekerjaan" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listPekerjaan as $key => $itemPekerjaan)
                        <option value="{{ $itemPekerjaan->getId() }}" @if(old('pekerjaan', $pekerjaan) == $itemPekerjaan->getId()) selected @endif>{{ $itemPekerjaan->getNama() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="suku">Suku</label>
                <input id="suku" name="suku" type="text" class="form-control" value="{{ old('suku', $suku)}}">
            </div>
            <div class="form-group">
                <label for="jenis_kelamin">Jenis Kelamin</label>
                <select name="jenis_kelamin" id="jenis_kelamin" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    <option value="1" @if(old('jenis_kelamin', $jenis_kelamin) == '1') selected @endif>Laki-laki</option>
                    <option value="2" @if(old('jenis_kelamin', $jenis_kelamin) == '2') selected @endif>Perempuan</option>
                </select>
            </div>
            <div class="form-group">
                <label for="hamil">Hamil</label>
                <div class="col-lg-12">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="hamil1" name="hamil" type="radio" value="1" @if(old('hamil',$hamil)=='1') checked @endif>
                        <label class="form-check-label" for="hamil1">Ya</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="hamil2" name="hamil" type="radio" value="2" @if(old('hamil',$hamil)=='2') checked @endif>
                        <label class="form-check-label" for="hamil2">Tidak</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="menyusui">Menyusui</label>
                <div class="col-lg-12">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="menyusui1" name="menyusui" type="radio" value="1" @if(old('menyusui',$menyusui)=='1') checked @endif>
                        <label class="form-check-label" for="menyusui1">Ya</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="menyusui2" name="menyusui" type="radio" value="2" @if(old('menyusui',$menyusui)=='2') checked @endif>
                        <label class="form-check-label" for="menyusui2">Tidak</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="asing">Kewarganegaraan</label>
                <div class="col-lg-12">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="asing1" name="asing" type="radio" value="1" @if(old('asing',$asing)=='1') checked @endif>
                        <label class="form-check-label" for="asing1">WNI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" id="asing2" name="asing" type="radio" value="2" @if(old('asing',$asing)=='2') checked @endif>
                        <label class="form-check-label" for="asing2">WNA</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="nama">Rumah Sakit</label>
                <select name="kode_rs" id="kode_rs" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listRs as $key => $itemRs)
                        <option value="{{ $itemRs->getKodeRs() }}" @if(old('kode_rs', $kode_rs) == $itemRs->getKodeRs()) selected @endif>{{ $itemRs->getNama() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="agama">Agama</label>
                <select name="agama" id="agama" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listAgama as $key => $itemAgama)
                        <option value="{{ $itemAgama->getId() }}" @if(old('agama', $agama) == $itemAgama->getId()) selected @endif>{{ $itemAgama->getNama() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="rujuk">Dirujuk</label>
                <select name="rujuk" id="rujuk" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listDirujuk as $key => $itemDirujuk)
                        <option value="{{ $itemDirujuk->getId() }}" @if(old('rujuk', $rujuk) == $itemDirujuk->getId()) selected @endif>{{ $itemDirujuk->getNama() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="perkawinan">Status Perkawinan</label>
                <select name="perkawinan" id="perkawinan" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listPerkawinan as $key => $itemPerkawinan)
                        <option value="{{ $itemPerkawinan->getId() }}" @if(old('perkawinan', $perkawinan) == $itemPerkawinan->getId()) selected @endif>{{ $itemPerkawinan->getNama() }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="anak">Jumlah anak</label>
                <select name="anak" id="anal" class="form-control">
                    <option value="0">Silahkan Pilih</option>
                    @foreach($listJumlahAnak as $key => $itemJumlahAnak)
                        <option value="{{ $key }}" @if(old('anak', $anak) == $key) selected @endif>{{ $itemJumlahAnak }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="jalan">Jalan</label>
                <input id="jalan" name="jalan" type="text" class="form-control" value="{{ old('jalan', $jalan)}}">
            </div>
            <div class="form-row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="rt">RT</label>
                        <input id="rt" name="rt" type="text" class="form-control" value="{{ old('rt', $rt)}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="rw">RW</label>
                        <input id="rw" name="rw" type="text" class="form-control" value="{{ old('rw', $rw)}}">
                    </div>
                </div>
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
                <label for="kabupaten">Kota</label>
                <input id="kabupaten" name="kabupaten" type="text" class="form-control" value="{{ old('kabupaten', $kabupaten)}}">
            </div>
            <div class="form-group">
                <label for="provinsi">Provinsi</label>
                <input id="provinsi" name="provinsi" type="text" class="form-control" value="{{ old('provinsi', $provinsi)}}">
            </div>
            <div class="form-group">
                <label for="telp">Telepon</label>
                <input id="telp" name="telp" type="text" class="form-control" value="{{ old('telp', $telp)}}">
            </div>
            <div class="form-group">
                <label for="handphone">No Hp</label>
                <input id="handphone" name="handphone" type="text" class="form-control" value="{{ old('handphone', $handphone)}}">
            </div>
        </div>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>