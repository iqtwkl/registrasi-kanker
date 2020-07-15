<h5 class="card-title">Profil Pasien</h5>
<hr/>
<div class="form-row">
    <div class="form-group col-md-3">
        <label for="">Nama</label>
        <div>
            <strong>{{  $pasien->getNama() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-3">
        <label for="">Nomor Rekam Medis</label>
        <div>
            <strong>{{  $pasien->getNoRekamMedis() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-3">
        <label for="">Rumah Sakit</label>
        <div>
            <strong>{{  $pasien->rumahSakit->nama }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-3">
        <label for="">Dirujuk Dari</label>
        <div>
            <strong>{{  $pasien->getRujuk() ?? '' }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-group">
    <label for="">Nama Orang Tua</label>
    <div>
        <strong>{{  $pasien->getNamaOrangTua() ?? '' }}</strong>
    </div>                                        
</div>                            
<div class="form-row">
    <div class="form-group col-md-3">
        <label for="">Tempat Lahir</label>
        <div>
            <strong>{{  $pasien->getTempatLahir() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-9">
        <label for="">Tanggal Lahir</label>
        <div>
            <strong>{{  $pasien->getTanggalLahir() ?? '' }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-group">
    <label for="">Pendidikan</label>
    <div>
        <strong>{{  $pasien->getPendidikan() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Pekerjaan</label>
    <div>
        <strong>{{  $pasien->getPekerjaan() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Agama</label>
    <div>
        <strong>{{  $pasien->getAgama() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Perkawinan</label>
    <div>
        <strong>{{  $pasien->getPerkawinan() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Jumlah Anak</label>
    <div>
        <strong>{{  $pasien->getAnak() }}</strong>
    </div>                                        
</div>                                
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">Suku</label>
        <div>
            <strong>{{  $pasien->getSuku() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-6">
        <label for="">Kewarganegaraan</label>
        <div>
            <strong>{{  $pasien->getAsing() }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">Sedang Hamil</label>
        <div>
            <strong>{{  $pasien->getHamil() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-6">
        <label for="">Sedang Menyusui</label>
        <div>
            <strong>{{  $pasien->getMenyusui() ?? '' }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-group">
    <label for="">Alamat</label>
    <div>
        <strong>{{  $pasien->getJalan() }}</strong>
    </div> 
</div>
<div class="form-row">
    <div class="form-group col-md-4">
        <label for="inputZip">RT</label>
        <div>
            <strong>{{  $pasien->getRt() }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="">RW</label>
        <div>
            <strong>{{  $pasien->getRw() }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="inputZip">Kelurahan</label>
        <div>
            <strong>{{  $pasien->getKelurahan() }}</strong>
        </div>
    </div>                              
</div>                                
<div class="form-row">
    <div class="form-group col-md-4">
        <label for="inputState">Kecamatan</label>
        <div>
            <strong>{{  $pasien->getKecamatan() }}</strong>
        </div>
    </div>                                    
    <div class="form-group col-md-4">
        <label for="">Kota / Kab</label>
        <div>
            <strong>{{  $pasien->getKabupaten() }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="inputState">Provinsi</label>
        <div>
            <strong>{{  $pasien->getProvinsi() }}</strong>
        </div>
    </div>                                    
</div>
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">No Telp</label>
        <div>
            <strong>{{ $pasien->getKodeTelpon() ?? '' }}-{{ $pasien->getTelepon() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-6">
        <label for="">No Handphone</label>
        <div>
            <strong>{{  $pasien->getNo() }}</strong>
        </div>                                        
    </div>
</div>