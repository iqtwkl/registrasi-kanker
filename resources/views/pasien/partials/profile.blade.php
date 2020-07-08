<h5 class="card-title">Profil Pasien</h5>
<hr/>
<div class="form-row">
    <div class="form-group col-md-3">
        <label for="">Nama</label>
        <div>
            <strong>{{  $profile->getNama() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-3">
        <label for="">Nomor Rekam Medis</label>
        <div>
            <strong>{{  $profile->getNoRekamMedis() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-3">
        <label for="">Rumah Sakit</label>
        <div>
            <strong>{{  $profile->rumahSakit->nama }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-3">
        <label for="">Dirujuk Dari</label>
        <div>
            <strong>{{  $profile->getRujuk() ?? '' }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-group">
    <label for="">Nama Orang Tua</label>
    <div>
        <strong>{{  $profile->getNamaOrangTua() ?? '' }}</strong>
    </div>                                        
</div>                            
<div class="form-row">
    <div class="form-group col-md-3">
        <label for="">Tempat Lahir</label>
        <div>
            <strong>{{  $profile->getTempatLahir() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-9">
        <label for="">Tanggal Lahir</label>
        <div>
            <strong>{{  $profile->getTanggalLahir() ?? '' }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-group">
    <label for="">Pendidikan</label>
    <div>
        <strong>{{  $profile->getPendidikan() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Pekerjaan</label>
    <div>
        <strong>{{  $profile->getPekerjaan() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Agama</label>
    <div>
        <strong>{{  $profile->getAgama() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Perkawinan</label>
    <div>
        <strong>{{  $profile->getPerkawinan() }}</strong>
    </div>                                        
</div>
<div class="form-group">
    <label for="">Jumlah Anak</label>
    <div>
        <strong>{{  $profile->getAnak() }}</strong>
    </div>                                        
</div>                                
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">Suku</label>
        <div>
            <strong>{{  $profile->getSuku() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-6">
        <label for="">Kewarganegaraan</label>
        <div>
            <strong>{{  $profile->getAsing() }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">Sedang Hamil</label>
        <div>
            <strong>{{  $profile->getHamil() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-6">
        <label for="">Sedang Menyusui</label>
        <div>
            <strong>{{  $profile->getMenyusui() ?? '' }}</strong>
        </div>                                        
    </div>
</div>
<div class="form-group">
    <label for="">Alamat</label>
    <div>
        <strong>{{  $profile->getJalan() }}</strong>
    </div> 
</div>
<div class="form-row">
    <div class="form-group col-md-4">
        <label for="inputZip">RT</label>
        <div>
            <strong>{{  $profile->getRt() }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="">RW</label>
        <div>
            <strong>{{  $profile->getRw() }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="inputZip">Kelurahan</label>
        <div>
            <strong>{{  $profile->getKelurahan() }}</strong>
        </div>
    </div>                              
</div>                                
<div class="form-row">
    <div class="form-group col-md-4">
        <label for="inputState">Kecamatan</label>
        <div>
            <strong>{{  $profile->getKecamatan() }}</strong>
        </div>
    </div>                                    
    <div class="form-group col-md-4">
        <label for="">Kota / Kab</label>
        <div>
            <strong>{{  $profile->getKabupaten() }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="inputState">Provinsi</label>
        <div>
            <strong>{{  $profile->getProvinsi() }}</strong>
        </div>
    </div>                                    
</div>
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">No Telp</label>
        <div>
            <strong>{{ $profile->getKodeTelpon() ?? '' }}-{{ $profile->getTelepon() ?? '' }}</strong>
        </div>                                        
    </div>
    <div class="form-group col-md-6">
        <label for="">No Handphone</label>
        <div>
            <strong>{{  $profile->getNo() }}</strong>
        </div>                                        
    </div>
</div>