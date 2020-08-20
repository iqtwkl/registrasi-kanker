<hr/>
@if (is_null($terapi))
<div class="form-control" align="center"><h6> Rencana Terapi Belum tersedia </h6></div>   
@else
<div class="form-control" align="center"><h6> Pasien </h6></div>
<hr/>
<div class="form-row">    
    <div class="form-group col-md-6">
        <label for="nama_pasien">Nama Pasien</label>
        <div>
            <strong>{{  $pasien->nama ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-md-6">
        <label for="medrec">Medrek</label>
        <div>
            <strong>{{  $pasien->no_rekam_medis ?? '' }}</strong>
        </div>
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-6">
        <label for="">Kunjungan : </label>
        <div>
            <strong>{{  $terapi->getKunjungan() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-md-6">
        <label for="tglperiksa_pasien">Tanggal Periksa : </label>
        <div>
            <strong>{{  $terapi->getTglPeriksa() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Rencana Terapi </h6></div>
<hr/>
<div class="form-group">
    <label for="">Rencana Terapi : </label>
    <div>
        <strong>{{  $terapi->getB4() ?? '' }}</strong>
    </div>
</div>
<div class="form-row">
    <div class="col-12">
        <label for="">Radioterapi : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Jenis : </label>
        <div>
            <strong>{{  $terapi->getB5() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Mulai : </label>
        <div>
            <strong>{{  $terapi->getB6() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Selesai : </label>
        <div>
            <strong>{{  $terapi->getB7() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Dosis : </label>
        <div>
            <strong>{{  $terapi->getB8() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Frekuensi : </label>
        <div>
            <strong>{{  $terapi->getB9() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Kemoterapi </h6></div>
<hr/>
<div class="form-row">
    <div class="col-12">
        <label for="">Adjuvan Kemoterapi : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Mulai : </label>
        <div>
            <strong>{{  $terapi->getB32() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Selesai : </label>
        <div>
            <strong>{{  $terapi->getB33() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Obat : </label>
        <div>
            <strong>{{  $terapi->getB34() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Dosis : </label>
        <div>
            <strong>{{  $terapi->getB35() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Jumlah Pemberian : </label>
        <div>
            <strong>{{  $terapi->getB36() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-row">
    <div class="col-12">
        <label for="">Neoadjuvan Kemoterapi : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Mulai : </label>
        <div>
            <strong>{{  $terapi->getB10() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Selesai : </label>
        <div>
            <strong>{{  $terapi->getB11() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Obat : </label>
        <div>
            <strong>{{  $terapi->getB12() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Dosis : </label>
        <div>
            <strong>{{  $terapi->getB13() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Jumlah Pemberian : </label>
        <div>
            <strong>{{  $terapi->getB14() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-row">
    <div class="col-12">
        <label for="">Konkomitan Kemoterapi : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Mulai : </label>
        <div>
            <strong>{{  $terapi->getB37() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Selesai : </label>
        <div>
            <strong>{{  $terapi->getB38() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Obat : </label>
        <div>
            <strong>{{  $terapi->getB36() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Dosis : </label>
        <div>
            <strong>{{  $terapi->getB40() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Jumlah Pemberian : </label>
        <div>
            <strong>{{  $terapi->getB41() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-row">
    <div class="col-12">
        <label for="">Terapi Target : </label>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Mulai : </label>
        <div>
            <strong>{{  $terapi->getB42() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tanggal Selesai : </label>
        <div>
            <strong>{{  $terapi->getB43() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Jenis : </label>
        <div>
            <strong>{{  $terapi->getB44() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Dosis : </label>
        <div>
            <strong>{{  $terapi->getB45() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Jumlah Pemberian : </label>
        <div>
            <strong>{{  $terapi->getB46() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Operasi </h6></div>
<hr/>
<div class="form-row">
    <div class="form-group col-12">
        <label for="">Operasi : </label>
        <div>
            <strong>{{  $terapi->getB21() ?? '' }}</strong>
        </div>
    </div>
    <hr/>
    <div class="form-group col-12">
        <label for="">Jenis Operasi : </label>        
    </div>
    <div class="form-group col-4">
        <label for="">Masilektomi : </label>
        <div>
            <strong>{{  $terapi->getB22a() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Parotidektomi : </label>
        <div>
            <strong>{{  $terapi->getB22b() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Mandibulektomi : </label>
        <div>
            <strong>{{  $terapi->getB22c() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Laringektomi : </label>
        <div>
            <strong>{{  $terapi->getB22d() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Eksenterasi Orbita : </label>
        <div>
            <strong>{{  $terapi->getB22i() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Glosektomi : </label>
        <div>
            <strong>{{  $terapi->getB22e() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Tiroidektomi : </label>
        <div>
            <strong>{{  $terapi->getB22f() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Endoskopi approach : </label>
        <div>
            <strong>{{  $terapi->getB22g() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Nasofaringektomi : </label>
        <div>
            <strong>{{  $terapi->getB22h() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Eksisi Luas : </label>
        <div>
            <strong>{{  $terapi->getB22j() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Ekstirpasi Massa : </label>
        <div>
            <strong>{{  $terapi->getB22k() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Rhinotomi lateral : </label>
        <div>
            <strong>{{  $terapi->getB22p() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Cryosurgery (bedah beku) : </label>
        <div>
            <strong>{{  $terapi->getB22u() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-4">
        <label for="">Lainnya : </label>
        <div>
            <strong>{{  $terapi->getB22v() ?? '' }}</strong> - <strong>{{  $terapi->getB22_lainnya() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr>
<div class="form-row">
    <div class="form-group col-6">
        <label for="">Diseksi Leher : </label>
        <div>
            <strong>{{  $terapi->getB23() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-6">
        <label for="">Jenis : </label>
        <div>
            <strong>{{  $terapi->getB24() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-group">
    <label for="">Follow Up : </label>
    <div>
        <strong>{{  $terapi->getB25() ?? '' }}</strong>
    </div>
</div>
<div class="form-group">
    <label for="">Tanggal Kunjungan Follow Up : </label>
    <div>
        <strong>{{  $terapi->getB26() ?? '' }}</strong>
    </div>
</div>
<div class="form-group">
    <label for="">Keluhan : </label>
    <div>
        <strong>{{  $terapi->getB27() ?? '' }}</strong>
    </div>
</div>
<hr>
<div class="form-row">
    <div class="col-12">
        <label for="">Klinis : </label>
    </div>
    <div class="form-group">
        <label for="">No Respons : </label>
        <div>
            <strong>{{  $terapi->getB28() ?? '' }}</strong>
        </div>
        <div class="form-group">
            <label for="">Partial Respons : </label>
            <div>
                <strong>{{  $terapi->getB29() ?? '' }}</strong>
            </div>
        </div>
        <div class="form-group">
            <label for="">Komplit Respons : </label>
            <div>
                <strong>{{  $terapi->getB30() ?? '' }}</strong>
            </div>
        </div>
    </div>
</div>
@endif