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
        <label for="tgl_periksa">Tanggal Kunjungan</label>
        <input id="tgl_periksa" name="tgl_periksa" type="text" class="form-control" value="{{ old('tgl_kunjungan',$tgl_kunjungan) }}">
    </div>
    <div class="form_group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>