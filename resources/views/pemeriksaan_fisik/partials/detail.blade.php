<hr/>
@if (is_null($pemeriksaanFisik))
    <div class="form-control" align="center"><h6> Pemeriksaan Fisik Belum tersedia </h6></div>
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
          <strong>{{  $pemeriksaanFisik->getKunjungan() ?? '' }}</strong>
      </div>
  </div>
  <div class="form-group">
    <label for="tglperiksa_pasien">Tanggal Periksa : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getTglPeriksa() ?? '' }}</strong>
    </div>
</div>
  <div class="form-group">
      <label for="">TD/mmHg: : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getTd() ?? '' }} / {{  $pemeriksaanFisik->getTd2() ?? '' }}</strong>
      </div>
  </div>
  <div class="form-group">
      <label for="kunjungan_pasien">Tinggi Badan (cm) : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getTb() ?? '' }}</strong>
      </div>
  </div>
  <div class="form-group">
      <label for="kunjungan_pasien">Nadi/menit : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getNadi() ?? '' }}</strong>
      </div>
  </div>
  <div class="form-group">
      <label for="kunjungan_pasien">Berat Badan (kg) : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getBb() ?? '' }}</strong>
      </div>
  </div>
  <div class="form-group">
      <label for="kunjungan_pasien">Kesadaran : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKesadaran() ?? '' }}</strong>
      </div>
  </div>
  <hr/>         
  <div class="form-control" align="center"><h6> Pemeriksaan Fisik </h6></div>
  <hr>   
  <div class="form-group">
      <label for="">Skala Karnofsky : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs1() ?? '' }}</strong>
      </div>
  </div>    
  <div class="form-group">
      <label for="">Status ECOG : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs66() ?? '' }}</strong>
      </div>
  </div>
  <hr/>
  <div class="form-control" align="center"><h6> Status Lokalis </h6></div>
  <hr>
  <div class="form-row">
      <label for="">Telinga : </label>
      <table class="table">
          <thead>
              <tr>
                  <td></td>
                  <td>Kiri</td>
                  <td>Kanan</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Mukosa</td>
                  <td>{{  $pemeriksaanFisik->getSl1a() ?? '' }}</td>
                  <td>{{  $pemeriksaanFisik->getSl1() ?? '' }}</td>
              </tr>
              <tr>
                  <td>Sekret</td>
                  <td>{{  $pemeriksaanFisik->getSl3a() ?? '' }}</td>
                  <td>{{  $pemeriksaanFisik->getSl3() ?? '' }}</td>
              </tr>
              <tr>
                  <td>Jenis</td>
                  <td>{{  $pemeriksaanFisik->getSl2a() ?? '' }}</td>
                  <td>{{  $pemeriksaanFisik->getSl2() ?? '' }}</td>
              </tr>
              <tr>
                <td>Membran Timpani</td>
                <td>{{  $pemeriksaanFisik->getSl4a() ?? '' }}</td>
                <td>{{  $pemeriksaanFisik->getSl4() ?? '' }}</td>
              </tr>
              <tr>
                <td>Jenis Perforasi</td>
                <td>{{  $pemeriksaanFisik->getSl5a() ?? '' }}</td>
                <td>{{  $pemeriksaanFisik->getSl5() ?? '' }}</td>
              </tr>
          </tbody>
      </table>
  </div>
  <hr/>
  <div class="form-row">
    <label for="">Hidung : </label>
    <table class="table">
        <thead>
            <tr>
                <td></td>
                <td>Kiri</td>
                <td>Kanan</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Mukosa</td>
                <td>{{  $pemeriksaanFisik->getSl6a() ?? '' }}</td>
                <td>{{  $pemeriksaanFisik->getSl6() ?? '' }}</td>
            </tr>
            <tr>
                <td>Sekret</td>
                <td>{{  $pemeriksaanFisik->getSl24a() ?? '' }}</td>
                <td>{{  $pemeriksaanFisik->getSl24() ?? '' }}</td>
            </tr>
            <tr>
                <td>Jenis</td>
                <td>{{  $pemeriksaanFisik->getSl7a() ?? '' }}</td>
                <td>{{  $pemeriksaanFisik->getSl7() ?? '' }}</td>
            </tr>
            <tr>
              <td>Konka</td>
              <td>{{  $pemeriksaanFisik->getSl8a() ?? '' }}</td>
              <td>{{  $pemeriksaanFisik->getSl8() ?? '' }}</td>
            </tr>
            <tr>
              <td>Septum</td>
              <td>{{  $pemeriksaanFisik->getSl9a() ?? '' }}</td>
              <td>{{  $pemeriksaanFisik->getSl9() ?? '' }}</td>
            </tr>
            <tr>
              <td>Pasase Udara</td>
              <td>{{  $pemeriksaanFisik->getSl10a() ?? '' }}</td>
              <td>{{  $pemeriksaanFisik->getSl10() ?? '' }}</td>
            </tr>
        </tbody>
    </table>
  </div>
  <hr>
  <div class="form-row">
    <label for="">Nasofaring Orofaring : </label>
    <table class="table">
        <thead>
            <tr>
                <td></td>
                <td>Kiri</td>
                <td>Kanan</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tonsil</td>
                <td>{{  $pemeriksaanFisik->getKs31() ?? '' }}</td>
                <td>{{  $pemeriksaanFisik->getKs30() ?? '' }}</td>
            </tr>
        </tbody>
    </table>
    <div class="form-group col-3">
      <label for="">Palatum molle : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs32() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Palatum durum : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs34() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Lidah : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs36() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Dasar Mulut : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs38() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Gigi geligi : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs42() ?? '' }}</strong>
      </div>
    </div>
  </div>
  <hr/>
  <div class="form-row">
    <div class="col-12">
      <label for="">Fleksibel Endoskopi : </label>
    </div>
    <div class="form-group col-3">
      <label for="">Epiglotis : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs60() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Tonsila Linguinalis : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs64() ?? '' }}</strong>
      </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <td></td>
                <td>Kiri</td>
                <td>Kanan</td>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>Aritenoid</td>
              <td>{{  $pemeriksaanFisik->getKs21() ?? '' }}</td>
              <td>{{  $pemeriksaanFisik->getKs20() ?? '' }}</td>
            </tr>
            <tr>
              <td>Plika Ariepiglotika</td>
              <td>{{  $pemeriksaanFisik->getKs19() ?? '' }}</td>
              <td>{{  $pemeriksaanFisik->getKs18() ?? '' }}</td>
          </tr>
          <tr>
            <td>Plica Ventrikularis</td>
            <td>{{  $pemeriksaanFisik->getKs23() ?? '' }}</td>
            <td>{{  $pemeriksaanFisik->getKs22() ?? '' }}</td>
          </tr>
          <tr>
            <td>Plika Vokalis</td>
            <td>{{  $pemeriksaanFisik->getKs63() ?? '' }}</td>
            <td>{{  $pemeriksaanFisik->getKs62() ?? '' }}</td>
          </tr>
          <tr>
            <td>Sub Glotis</td>
            <td>{{  $pemeriksaanFisik->getKs27() ?? '' }}</td>
            <td>{{  $pemeriksaanFisik->getKs26() ?? '' }}</td>
          </tr>
        </tbody>
    </table>
    <div class="form-group col-3">
      <label for="">Rima Glotis : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs28() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Trakea : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs24() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Deskripsikan Massa : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs67() ?? '' }}</strong>
      </div>
    </div>
  </div>
  <hr/>
  <div class="form-group col-3">
    <label for="">Maksilofasial : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs57() ?? '' }}</strong>
    </div>
  </div>
  <hr/>
  <div class="form-row">
    <div class="form-group col-3">
      <label for="">Parese N Kranialis : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs68() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group col-3">
      <label for="">Lokasi : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs70() ?? '' }}</strong>
      </div>
    </div>
  </div>
  <hr/>
  <div class="form-row">
    <div class="col-12">
      <label for="">Nervus : </label>
    </div>
    <div class="form-group  col-3">
      <label for="">N.1 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69a() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.2 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69b() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.3 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69c() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.4 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69d() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.5 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69e() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.6 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69f() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.7 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69g() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.8 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69h() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.9 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69i() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.10 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69j() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.11 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69k() ?? '' }}</strong>
      </div>
    </div>
    <div class="form-group  col-3">
      <label for="">N.12 : </label>
      <div>
          <strong>{{  $pemeriksaanFisik->getKs69l() ?? '' }}</strong>
      </div>
    </div>
  </div>
  <hr/>
  <div class="form-row">
    <label for="">Naseondoskopi : </label>
    <table class="table">
      <thead>
          <tr>
              <td>Kavum Nasi</td>
              <td></td>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td>Mukosa</td>
            <td>{{  $pemeriksaanFisik->getSl11() ?? '' }}</td>
          </tr>
          <tr>
            <td>Massa</td>
            <td>{{  $pemeriksaanFisik->getSl12() ?? '' }}</td>
          </tr>
          <tr>
            <td>Sekret</td>
            <td>{{  $pemeriksaanFisik->getSl13() ?? '' }}</td>
          </tr>
          <tr>
            <td>Jenis</td>
            <td>{{  $pemeriksaanFisik->getSl14() ?? '' }}</td>
          </tr>
          <tr>
            <td>Konka Inferior</td>
            <td>{{  $pemeriksaanFisik->getSl15() ?? '' }}</td>
          </tr>
          <tr>
            <td>Konka Media</td>
            <td>{{  $pemeriksaanFisik->getSl16() ?? '' }}</td>
          </tr>
          <tr>
            <td>Konka Bulosa</td>
            <td>{{  $pemeriksaanFisik->getSl17() ?? '' }}</td>
          </tr>
          <tr>
            <td>Polip</td>
            <td>{{  $pemeriksaanFisik->getSl18() ?? '' }}</td>
          </tr>
          <tr>
            <td>Sekret</td>
            <td>{{  $pemeriksaanFisik->getSl26() ?? '' }}</td>
          </tr>
          <tr>
            <td>Jenis</td>
            <td>{{  $pemeriksaanFisik->getSl19() ?? '' }}</td>
          </tr>
          <tr>
            <td>Koana</td>
            <td>{{  $pemeriksaanFisik->getSl20() ?? '' }}</td>
          </tr>
          <tr>
            <td>Torus Tubarius</td>
            <td>{{  $pemeriksaanFisik->getSl21() ?? '' }}</td>
          </tr>
          <tr>
            <td>Orifisium Tuba</td>
            <td>{{  $pemeriksaanFisik->getSl27() ?? '' }}</td>
          </tr>
          <tr>
            <td>Fossa Rosenmuller</td>
            <td>{{  $pemeriksaanFisik->getSl22() ?? '' }}</td>
          </tr>
          <tr>
            <td>Nasofaring</td>
            <td>{{  $pemeriksaanFisik->getSl23() ?? '' }}</td>
          </tr>
          <tr>
            <td>Bila Ada Massa</td>
            <td>{{  $pemeriksaanFisik->getSl25() ?? '' }}</td>
          </tr>
      </tbody>
    </table>
  </div>
  <hr/>
  <div class="form-group">
    <label for="">Parotis : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs44() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Ukuran Tumor : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs65() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Parese Saraf Fasialis : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs47() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Jika Ya : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs48() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Parese N VII : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs58() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Jika Perifer : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs59() ?? '' }}</strong>
    </div>
  </div>
  <hr/>
  <div class="form-group">
    <label for="">Tiroid : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs49() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Ukuran Tumor : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs50() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Jika Ya : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs48() ?? '' }}</strong>
    </div>
  </div>
  <hr/>
  <div class="form-group">
    <label for="">Kelenjar Getah Bening : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs51() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Jika Ya, Lokasi : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs55() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Bentuk : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs56() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Ukuran : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs52() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Deskripsi KGB : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs53() ?? '' }}</strong>
    </div>
  </div>
  <div class="form-group">
    <label for="">Lokasi KGB : </label>
    <div>
        <strong>{{  $pemeriksaanFisik->getKs54() ?? '' }}</strong>
    </div>
  </div>      
@endif