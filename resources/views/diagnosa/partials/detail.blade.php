<hr/>
@if (is_null($diagnosa))
<div class="form-control" align="center"><h6> Diagnosa Belum tersedia </h6></div>
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
            <strong>{{  $diagnosa->getKunjungan() ?? '' }}</strong>
        </div>
    </div>
    <div class="form-group col-md-6">
        <label for="tglperiksa_pasien">Tanggal Periksa : </label>
        <div>
            <strong>{{  $diagnosa->getTglPeriksa() ?? '' }}</strong>
        </div>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Diagnosis </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Tumor Meeting : </label>
    <div>
        <strong>{{  $diagnosa->getB1() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Tanggal Tumor Meeting : </label>
    <div>
        <strong>{{  $diagnosa->getB2() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Jinak : </label>
    <div>
        <strong>{{  $diagnosa->getC1() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Lainnya, Sebutkan : </label>
    <div>
        <strong>{{  $diagnosa->getC16() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Ganas : </label>
    <div>
        <strong>{{  $diagnosa->getC2() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Lainnya, Sebutkan : </label>
    <div>
        <strong>{{  $diagnosa->getC17() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Stadium Neoplasma Laring, Orofaring, Hipofaring, Rongga Mulut, Kelenjar Liur, dan Sinus Paranasal </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">T/N/M</label>
    <div>
        <strong>{{  $diagnosa->getB31() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC3() ?? '' }}</strong>
    </div>
</div>
<div class="form-control" align="center"><h6> Stadium Karsinoma Nasofaring </h6></div>
<div class="form-group col-md-6">
    <label for="">T/N/M</label>
    <div>
        <strong>{{  $diagnosa->getC4() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC5() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Stadium Neoplasma Tiroid </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Karsinoma Papilari/Folikulari (Usia &lt 45 Tahun)</label>
    <div>
        <strong>{{  $diagnosa->getC18() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC6() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Karsinoma Papilari/Folikulari (Usia &gt 45 Tahun)</label>
    <div>
        <strong>{{  $diagnosa->getC7() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC8() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Karsinoma Medulari</label>
    <div>
        <strong>{{  $diagnosa->getC9() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC10() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Karsinoma Anaplastik</label>
    <div>
        <strong>{{  $diagnosa->getC11() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC12() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Stadium Neoplasma Kulit Kepala Leher </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">T/N/M</label>
    <div>
        <strong>{{  $diagnosa->getC13() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC14() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Stadium NHML </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">T/N/M</label>
    <div>
        <strong>{{  $diagnosa->getC19() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC20() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Stadium Neoplasma Kulit Kepala Leher </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">T/N/M</label>
    <div>
        <strong>{{  $diagnosa->getC13() ?? '' }}</strong>
    </div>
</div>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC14() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Stadium Angiofibroma Nasofaring Belia </h6></div>
<hr/>
<div class="form-group col-md-6">
    <label for="">Stadium</label>
    <div>
        <strong>{{  $diagnosa->getC22() ?? '' }}</strong>
    </div>
</div>
<hr/>
<div class="form-control" align="center"><h6> Kesimpulan </h6></div>
<hr/>
<div class="form-group col-md-6">    
    <div>
        <strong>{{  $diagnosa->getC15() ?? '' }}</strong>
    </div>
</div>
@endif