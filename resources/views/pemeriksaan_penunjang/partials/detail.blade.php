<hr/>
@if (is_null($pemeriksaanPenunjang))
    <div class="form-control" align="center"><h6> Pemeriksaan Penunjang Belum tersedia </h6></div>
@else
<div class="form-control" align="center"><h6> Pasien </h6></div>
<hr/>
<div class="form-row">    
    <div class="form-group col-md-4">
        <label for="nama_pasien">Nama Pasien</label>
        <div>
            <strong>{{  $pasien->nama ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-md-4">
        <label for="medrec">Medrek</label>
        <div>
            <strong>{{  $pasien->no_rekam_medis ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="form-group">
    <label for="kunjungan_pasien">Kunjungan : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getKunjungan() ?? '' }}</strong>
    </div>
</div>
<div class="form-group">
    <label for="tglperiksa_pasien">Tanggal Periksa : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getTglPeriksa() ?? '' }}</strong>
    </div>    
</div>    
<hr/> 
<div class="form-control" align="center"><h6> Pemeriksaan Penunjang </h6></div>
<hr/> 
<div class="form-row">
    <div class="col-12">
        <label for="">Biopsi : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA1() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA2() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No PA : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA3() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-row  col-12">
        <div class="col-12">
            <label for="">Hasil : </label>
        </div>
        <div class="form-group col-6">
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA7() ?? '' }}</strong>
            </div>
        </div>
        <div class="form-group col-6">
            <label for="">Jika Lainnya : </label>
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA7a() ?? '' }}</strong>
            </div>
        </div>
    </div>
</div>
<div class="form-row">
    <div class="col-12">
        <label for="">Histokimia : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA62() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA63() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No IHC : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA64() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Jenis IHC : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA65() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-row  col-12">
        <div class="col-12">
            <label for="">Hasil : </label>
        </div>
        <div class="form-group col-6">
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA66() ?? '' }}</strong>
            </div>
        </div>        
    </div>
</div>
<div class="form-row">
    <div class="col-12">
        <label for="">Karsinoma Nasofaring : (C11.9) : </label>
    </div>
    <div class="form-group col-4">
        <label for="">WHO Tipe : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA5() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Pemeriksaan Tambahan : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA4a() ?? '' }}</strong>
        </div>
    </div>    
</div>
<hr/>
<div class="form-row">
    <div class="col-12">
        <label for="">Hasil FNAB : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA9() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA10() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No PA : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA11() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-row  col-12">
        <div class="col-12">
            <label for="">Lokasi Lesi : </label>
        </div>
        <div class="form-group col-6">
            <label for="">Tiroid : </label>
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA12() ?? '' }}</strong>
            </div>
        </div>  
        <div class="form-group col-6">
            <label for="">Parotis : </label>
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA13() ?? '' }}</strong>
            </div>
        </div>  
        <div class="form-group col-6">
            <label for="">Lokasi KGB : </label>
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA15() ?? '' }}</strong>
            </div>
        </div>
        <div class="form-group col-6">
            <label for="">Lainnya : </label>
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA67() ?? '' }}</strong>
            </div>
        </div>   
        <div class="form-group col-6">
            <label for="">Hasil : </label>
            <div>
                <strong>{{  $pemeriksaanPenunjang->getA16() ?? '' }}</strong>
            </div>
        </div>     
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Gambar </h6></div>
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">CT Scan : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA17() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA18() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA19() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA20()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA201()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA202()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA203()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA20a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">MRI : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA21() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA22() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA23() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA24()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA241()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA242()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA243()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA24a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">Rontgen Thorax : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA25() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA26() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA27() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA28()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA281()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA282()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA283()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA28a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">USG Abdomen : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA29() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA30() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA31() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA32()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA321()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA322()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA323()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA32a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">Bone Scan : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA33() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA34() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA35() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA36()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA361()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA362()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA363()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA36a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">USG Leher : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA37() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA38() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA39() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA40()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA401()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA402()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA403()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA40a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">USG Tiroid : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA41() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA42() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA43() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA44()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA441()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA442()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA443()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA44a() ?? '' }}</strong>
    </div>    
</div> 
<div class="form-group">
    <label for="">Hasil Masing-Masing : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA45() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">Pet Scan / MIBI : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA57() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA58() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">No : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA59() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">File : </label>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA60()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA601()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA602()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
    <div class="col-3">
        <a href="#" data-toggle="modal" data-target="#show-image-modal">
            <img src="{{ asset($pemeriksaanPenunjang->getA603()) ??asset('img/blank.png') }}" class="img-thumbnail">
        </a>
    </div>
</div>
<div class="form-group">
    <label for="">Hasil : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA61() ?? '' }}</strong>
    </div>    
</div> 
<div class="form-group">
    <label for="">Pemeriksaan Tambahan : </label>
    <div>
        <strong>{{  $pemeriksaanPenunjang->getA45a() ?? '' }}</strong>
    </div>    
</div> 
<hr/>
<div class="row">
    <div class="col-12">
        <label for="">Audiometri Nadi Murni  : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA48() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA49() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Telinga Kanan : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA50() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Telinga Kanan : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA51() ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <label for="">Timpanometri  : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA52() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">RS : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA53() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Telinga Kanan : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA54() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Telinga Kanan : </label>
        <div>
            <strong>{{  $pemeriksaanPenunjang->getA55() ?? '' }}</strong>
        </div>
    </div>
</div>
@endif
@include('layouts.partials.image_viewer_modal')