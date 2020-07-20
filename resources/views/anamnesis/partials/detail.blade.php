<hr/>
@if (is_null($anamnesis))
  <div class="form-control" align="center"><h6> Anamnesis Belum tersedia </h6></div>
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
          <strong>{{  $anamnesis->getKunjungan() ?? '' }}</strong>
      </div>
  </div>
  <div class="form-group">
      <label for="tglperiksa_pasien">Tanggal Periksa : </label>
      <div>
          <strong>{{  $anamnesis->getTglPeriksa() ?? '' }}</strong>
      </div>
  </div>
  <hr>
  <div> <!-- FAKTOR RISIKO -->
      <div class="form-control" align="center"><h6> Faktor Risiko </h6></div>
      <hr>    
      <div class="form-group">
          <label for="">Konsumsi Alkohol : </label>
          <strong>{{  $anamnesis->getKa1() ?? '' }}</strong>                                       
      </div>  
      <div class="form-group">
          <label for="">Frekuensi : </label>
          <strong>{{  $anamnesis->getKa2() ?? '' }}</strong>                                       
      </div>  
      <div class="form-group">
          <label for="">Lamanya : </label>
          <strong>{{  $anamnesis->getKa3() ?? '' }}</strong>                                       
      </div>  
      <div class="form-group">
          <label for="">Jumlah : </label>
          <strong>{{  $anamnesis->getKa4() ?? '' }}</strong>                                       
      </div>  
      <hr/>
      <div class="form-group">
          <label for="">Riwayat Merokok : </label>
          <strong>{{  $anamnesis->getKb1() ?? '' }}</strong>                                       
      </div>
      <div class="form-group">
          <label for="">Frekuensi : </label>
          <strong>{{  $anamnesis->getKb2() ?? '' }}</strong>                                       
      </div>  
      <div class="form-group">
          <label for="">Lamanya : </label>
          <strong>{{  $anamnesis->getKb3() ?? '' }}</strong>                                       
      </div>  
      <div class="form-group">
          <label for="">Jumlah : </label>
          <strong>{{  $anamnesis->getKb4() ?? '' }}</strong>                                       
      </div>
      <hr/>
      <div class="form-group">
          <label for="">Konsumsi Ikan Asin Rutin : </label>
          <strong>{{  $anamnesis->getKc1() ?? '' }}</strong>                                       
      </div>
      <div class="form-group">
          <label for="">Frekuensi : </label>
          <strong>{{  $anamnesis->getKc2() ?? '' }}</strong>                                       
      </div>  
      <hr/>
      <div class="form-group">
          <label for="">Terpapar Asap Pembakaran : </label>
          <strong>{{  $anamnesis->getKd1() ?? '' }}</strong>                                       
      </div>
      <div class="form-group">
          <label for="">Frekuensi : </label>
          <strong>{{  $anamnesis->getKb2() ?? '' }}</strong>                                       
      </div>  
      <div class="form-group">
          <label for="">Lamanya : </label>
          <strong>{{  $anamnesis->getKb3() ?? '' }}</strong>                                       
      </div>
      <hr/>
      <div class="form-group">
          <label for="">Pemakaian Obat Nyamuk Bakar : </label>
          <strong>{{  $anamnesis->getKe1() ?? '' }}</strong>                                       
      </div>
      <div class="form-group">
          <label for="">Frekuensi : </label>
          <strong>{{  $anamnesis->getKe2() ?? '' }}</strong>                                       
      </div>
      <hr/>
      <div class="form-group">
          <label for="">Terpapar Debu Kayu : </label>
          <strong>{{  $anamnesis->getKf1() ?? '' }}</strong>                                       
      </div>
      <hr/>    
      <div class="form-group">
          <label for="">Terpapar Insektisida (Lebih 1 Tahun) : </label>
          <strong>{{  $anamnesis->getKg1() ?? '' }}</strong>                                       
      </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Konsumsi Makanan Kemasan  : </label>
          <strong>{{ $anamnesis->getKh1() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Paparan sinar matahari (UVB)  : </label>
          <strong>{{ $anamnesis->getLa() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- RIWAYAT KELUARGA -->
      <div class="form-control" align="center"><h6> Riwayat Keluarga Yang Menderita Kanker</h6></div>
      <hr>
      <div class="form-group">
          <label for='""'>Riwayat Kanker di Keluarga  : </label>
          <strong>{{ $anamnesis->getJa1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Jika Ya, Sebutkan Jenis Kanker  : </label>
          <strong>{{ $anamnesis->getJa2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'> Lain - lain  : </label>
          <strong>{{ $anamnesis->getJa2Lainnya() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Jika Ya, Sebutkan Hubungan Keluarga  : </label>
          <strong>{{ $anamnesis->getJa3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma Kulit Kepala Leher  -->
      <div class="form-control" align="center"><h6> Neoplasma Kulit Kepala Leher  </h6></div><hr>
      <div class="form-group">
          <label for='""'>Lesi di Kulit  : </label>
          <strong>{{ $anamnesis->getLa1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Perubahan Warna Kulit  : </label>
          <strong>{{ $anamnesis->getLb1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getJa3Lainnya() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getLa3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma SINONASAL -->
      <div class="form-control" align="center"><h6> Neoplasma Sinonasal </h6></div>
      <hr/>
      <div class="form-group">
          <label for='""'>Benjolan di Pipi  : </label>
          <strong>{{ $anamnesis->getBc1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBc2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBc3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Nyeri Pipi  : </label>
          <strong>{{ $anamnesis->getBf1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBf2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBf3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Rasa Baal Pipi / Gigi  : </label>
          <strong>{{ $anamnesis->getBb1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBb2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBb3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Epistaksis  : </label>
          <strong>{{ $anamnesis->getBk1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBk2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBk3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Massa di Hidung  : </label>
          <strong>{{ $anamnesis->getBa1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBa2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBa3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Gangguan Penciuman  : </label>
          <strong>{{ $anamnesis->getBd1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBd2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBd3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Benjolan di Palatum  : </label>
          <strong>{{ $anamnesis->getBe1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBe2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBe3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Gigi Nyeri / Goyah  : </label>
          <strong>{{ $anamnesis->getBj1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBj2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBj3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Mata Menonjol  : </label>
          <strong>{{ $anamnesis->getBg1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBg2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBg3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Muka Mencong  : </label>
          <strong>{{ $anamnesis->getBh1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getBh2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBh3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Suara Sengau  : </label>
          <strong>{{ $anamnesis->getBi1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getBi3() }}</strong>
        </div>
      <hr/>
  </div>
  <div> <!-- KARSINOMA NASOFARING -->
      <div class="form-control" align="center"><h6> Karsinoma Nasofaring </h6></div>
      <hr/>    
      <div class="form-group">
          <label for='""'>Hidung Tersumbat  : </label>
          <strong>{{ $anamnesis->getAb1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAb2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAb3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Ingus/Lendir Bercampur Darah  : </label>
          <strong>{{ $anamnesis->getAc1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAc2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAc3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Post Nasal Drip  : </label>
          <strong>{{ $anamnesis->getAe1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAe3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Telinga Terasa Penuh  : </label>
          <strong>{{ $anamnesis->getAd1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAd2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAd3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Tinitus  : </label>
          <strong>{{ $anamnesis->getAi1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAi2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAi3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Nyeri Telinga  : </label>
          <strong>{{ $anamnesis->getAj1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAj2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAj3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Gangguan Dengar  : </label>
          <strong>{{ $anamnesis->getAg1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAg2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAg3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Cairan Telinga  : </label>
          <strong>{{ $anamnesis->getAk1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAk2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAk3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Penglihatan Ganda  : </label>
          <strong>{{ $anamnesis->getAf1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAf2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAf3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Sakit Kepala  : </label>
          <strong>{{ $anamnesis->getAl1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAl3() }}</strong>
        </div>
      <hr/> <!-- AM. PARISE N. KRANAL -->
      <div class="form-group">
          <label for='""'>Parese N. Kranialis  : </label>
          <strong>{{ $anamnesis->getAm1() }}</strong>
      </div>
      <div class="form-group">
          <label valign="top">Nervus :</label>
          <span> {{ $anamnesis->getAm21() }} </span>
          <span> {{ $anamnesis->getAm22() }} </span>
          <span> {{ $anamnesis->getAm23() }} </span>
          <span> {{ $anamnesis->getAm24() }} </span>
          <span> {{ $anamnesis->getAm25() }} </span>
          <span> {{ $anamnesis->getAm26() }} </span>
          <span> {{ $anamnesis->getAm27() }} </span>
          <span> {{ $anamnesis->getAm28() }} </span>
          <span> {{ $anamnesis->getAm29() }} </span>
          <span> {{ $anamnesis->getAm210() }} </span>
          <span> {{ $anamnesis->getAm211() }} </span>
          <span> {{ $anamnesis->getAm212() }} </span>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAm3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Suara Sengau  : </label>
          <strong>{{ $anamnesis->getAn1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAn3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Benjolan Leher  : </label>
          <strong>{{ $anamnesis->getAa1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getAa2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getAa3() }}</strong>
        </div>
      <hr/>
          <!--
          <tr>  
          <td>Gangguan Dengat Bilat </td>
          <td> : </td>
          <td><input id="Ah1_anamnesis1" type="radio" name="Ah1" value="1" data-md-icheck > Ya</td>
          <td><input id="Ah1_anamnesis2" type="radio" name="Ah1" value="2" data-md-icheck > Tidak</td>
          <td>&nbsp;</td>
          </tr>
          <tr>
          <td>Lokasi </td>
          <td> : </td>
          <td><input id="Ah2_anamnesis1" type="radio" name="Ah2" value="1" data-md-icheck > Kanan</td>
          <td><input id="Ah2_anamnesis2" type="radio" name="Ah2" value="2" data-md-icheck > Kiri</td>
          <td><input id="Ah2_anamnesis3" type="radio" name="Ah2" value="3" data-md-icheck > Bilateral</td>
          </tr>
          <tr> 
          <td>Lama </td>
          <td> : </td>
          <td><input id="Ah3_anamnesis1" type="radio" name="Ah3" value="1" data-md-icheck > 0 - 6 Bulan</td>
          <td><input id="Ah3_anamnesis2" type="radio" name="Ah3" value="2" data-md-icheck > 6 - 12 Bulan</td>
          <td><input id="Ah3_anamnesis3" type="radio" name="Ah3" value="3" data-md-icheck > > 12 Bulan</td>
          </tr>
          <hr/>
          -->
      <hr>
  </div>
  <div> <!-- ANGIOFIBROMA NASOFARING -->
      <div class="form-control" align="center"><h6> Angiofibroma Nasofaring Belia </h6></div><hr>
      <hr>
      <div class="form-group">
          <label for='""'>Pembengkakan Hidung  : </label>
          <strong>{{ $anamnesis->getEd1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getEd2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getEd3() }}</strong>
        </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Epistaksis  : </label>
          <strong>{{ $anamnesis->getEb1() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getEb2() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getEb3() }}</strong>
        </div>
      <hr/>
      <!-- EG. Penurunan Pendengaran -->
      <div class="form-group">
          <label for='""'>Penurunan Pendengaran  : </label>
          <strong>{{ $anamnesis->getEg1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi : </label>
          <strong>{{ $anamnesis->getEg2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama : </label>
          <strong>{{ $anamnesis->getEg3() }}</strong>
      </div>
      <hr/>
      <!-- EF. Nyeri Pipi -->
      <div class="form-group">
          <label for='""'>Suara Sengau  : </label>
          <strong>{{ $anamnesis->getEf1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama : </label>
          <strong>{{ $anamnesis->getEf3() }}</strong>
      </div>
      <hr/>
      <!-- EA. Pandangan Ganda -->
      <div class="form-group">
          <label for='""'>Pandangan Buram  : </label>
          <strong>{{ $anamnesis->getEa1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getEa2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getEa3() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Sakit Kepala  : </label>
          <strong>{{ $anamnesis->getEc1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getEc2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getEc3() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
          <label for='""'>Sesak Nafas  : </label>
          <strong>{{ $anamnesis->getEe1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getEe3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma OROFARING -->
      <div class="form-control" align="center"><h6> Neoplasma Orofaring </h6></div>
      <hr/>
      <div class="form-group">
          <label for='""'>Nyeri Menelan  : </label>
          <strong>{{ $anamnesis->getDc1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getDc2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDc3() }}</strong>
      </div>
      <hr/>
      <!-- DH. Sulit Menelan -->
      <div class="form-group">
          <label for='""'>Sulit Menelan  : </label>
          <strong>{{ $anamnesis->getDh1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDh2() }}</strong>
      </div>
      <hr/>
      <!-- DA. GERAK LIDAH TERBATAS -->
      <div class="form-group">
          <label for='""'>Gerak Lidah Terbatas  : </label>
          <strong>{{ $anamnesis->getDa1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getDa2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDa3() }}</strong>
      </div>
      <hr/>
      <tr>  <!-- DE. MULUT BERBAU -->
      <div class="form-group">
          <label for='""'>Gerak Lidah Terbatas  : </label>
          <strong>{{ $anamnesis->getDa1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getDa2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDa3() }}</strong>
      </div>
      <hr/>
      <!-- DD. HOT POTATO VOIVE -->
      <div class="form-group">
          <label for='""'>Hot Potato Voice  : </label>
          <strong>{{ $anamnesis->getDd1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDd3() }}</strong>
      </div>
      <hr/>
      <!-- DF. SUKAR BUKA MULUT -->
      <div class="form-group">
          <label for='""'>Sukar Buka Mulut  : </label>
          <strong>{{ $anamnesis->getDf1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDf3() }}</strong>
      </div>
      <hr/>
      <!-- DG. Nyeri Telinga 
      <tr> 
      <td>Nyeri Telinga </td>
      <td> : </td>
      <td><input id="Dg1_anamnesis1" type="radio" name="Dg1" value="1" data-md-icheck > Ya</td>
      <td><input id="Dg1_anamnesis2" type="radio" name="Dg1" value="2" data-md-icheck > Tidak</td>
      </tr>
      <tr>
      <td>Lokasi </td>
      <td> : </td>
      <td><input id="Dg2_anamnesis1" type="radio" name="Dg2" value="1" data-md-icheck > Kanan</td>
      <td><input id="Dg2_anamnesis2" type="radio" name="Dg2" value="2" data-md-icheck > Kiri</td>
      <td><input id="Dg2_anamnesis3" type="radio" name="Dg2" value="3" data-md-icheck > Bilateral</td>
      </tr>
      <tr>
      <td>Lama </td>
      <td> : </td>
      <td><input id="Dg3_anamnesis1" type="radio" name="Dg3" value="1" data-md-icheck > 0 - 6 Bulan</td>
      <td><input id="Dg3_anamnesis2" type="radio" name="Dg3" value="2" data-md-icheck > 6 - 12 Bulan</td>
      <td><input id="Dg3_anamnesis3" type="radio" name="Dg3" value="3" data-md-icheck > > 12 Bulan</td>
      </tr>
      <hr/>
      -->
      <!-- DI. Sesak Nafas -->
      <div class="form-group">
          <label for='""'>Sesak Nafas  : </label>
          <strong>{{ $anamnesis->getDi1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDi2() }}</strong>
      </div>
      <hr/>
      <!-- DI. Benjolan di Leher -->
      <div class="form-group">
          <label for='""'>Benjolan di Leher  : </label>
          <strong>{{ $anamnesis->getDj1() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getDj2() }}</strong>
      </div>
      <div class="form-group">
          <label for='""'>Lama  : </label>
          <strong>{{ $anamnesis->getDj3() }}</strong>
      </div>
      <hr/>      
      <!-- DB. BERAT BADAN TURUN -->
      <!--
      <tr> 
      <td>Berat Badan Turun </td>
      <td> : </td>
      <td><input id="Db1_anamnesis1" type="radio" name="Db1" value="1" data-md-icheck > Ya</td>
      <td><input id="Db1_anamnesis2" type="radio" name="Db1" value="2" data-md-icheck > Tidak</td>
      <td>&nbsp;</td>
      </tr>
      <tr>
      <td>Lokasi </td>
      <td> : </td>
      <td><input id="Db2_anamnesis1" type="radio" name="Db2" value="1" data-md-icheck > Kanan</td>
      <td><input id="Db2_anamnesis2" type="radio" name="Db2" value="2" data-md-icheck > Kiri</td>
      <td><input id="Db2_anamnesis3" type="radio" name="Db2" value="3" data-md-icheck > Bilateral</td>
      </tr>
      <tr>
      <td>Lama </td>
      <td> : </td>
      <td><input id="Db3_anamnesis1" type="radio" name="Db3" value="1" data-md-icheck > 0 - 6 Bulan</td>
      <td><input id="Db3_anamnesis2" type="radio" name="Db3" value="2" data-md-icheck > 6 - 12 Bulan</td>
      <td><input id="Db3_anamnesis3" type="radio" name="Db3" value="3" data-md-icheck > > 12 Bulan</td>
      </tr>
      <hr/>
      -->    
  </div>
  <div> <!-- Neoplasma Rongga Mulut -->
      <div class="form-control" align="center"><h6> Neoplasma Rongga Mulut </h6></div><hr>
      <!-- CA. SARIAWAN SUKAR SEMBUH -->
      <div class="form-group">
        <label for='""'>Sariawan Sukar Sembuh  : </label>
        <strong>{{ $anamnesis->getCa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getCa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCa3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Luka Bergaung  : </label>
        <strong>{{ $anamnesis->getCf1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getCf2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCf3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Nyeri Pada Lesi  : </label>
        <strong>{{ $anamnesis->getCd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getCd2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCd3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Perdarahan Lokal  : </label>
        <strong>{{ $anamnesis->getCb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getCb2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCb3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Gerak Lidah Terbatas  : </label>
        <strong>{{ $anamnesis->getCg1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getCg2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCg3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sulit/Nyeri Menelan  : </label>
        <strong>{{ $anamnesis->getCc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCc3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sulit Berbicara  : </label>
        <strong>{{ $anamnesis->getCe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCe3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getCh1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCh2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getCi1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getCi2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getCi3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma Hipofaring  -->
      <div class="form-control" align="center"><h6> Neoplasma Hipofaring  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Nyeri Tenggorok  : </label>
        <strong>{{ $anamnesis->getMd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getMd2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sulit Menelan  : </label>
        <strong>{{ $anamnesis->getMa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getMa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Batuk Bercampur Darah  : </label>
        <strong>{{ $anamnesis->getMf1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getMf2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Suara Serak  : </label>
        <strong>{{ $anamnesis->getMb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getMb2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getMe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getMe3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getMc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getMc2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getMc3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma LARING -->
      <div class="form-control" align="center"><h6> Neoplasma Laring </h6></div><hr>
      <div class="form-group">
        <label for='""'>Suara Serak  : </label>
        <strong>{{ $anamnesis->getFa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Nyeri Menelan  : </label>
        <strong>{{ $anamnesis->getFd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFd2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sulit Menelan  : </label>
        <strong>{{ $anamnesis->getFe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFe2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Tersedak  : </label>
        <strong>{{ $anamnesis->getFf1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFf2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Batuk Berdarah : </label>
        <strong>{{ $anamnesis->getFh1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFh2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getFc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFc2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Nafas Bunyi  : </label>
        <strong>{{ $anamnesis->getFb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFb2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getFg1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getFg3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getFg2() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma 1/3 Proksimal ESOFAGUS -->
      <div class="form-control" align="center"><h6> Neoplasma 1/3 Proksimal  Esofagus </h6></div><hr>
      <div class="form-group">
        <label for='""'>Sulit Menelan  : </label>
        <strong>{{ $anamnesis->getIb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIb3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Nyeri Menelan  : </label>
        <strong>{{ $anamnesis->getIi1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIi3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Suara Serak  : </label>
        <strong>{{ $anamnesis->getIh1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIh3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Batuk Kronis  : </label>
        <strong>{{ $anamnesis->getIg1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIg3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Muntah Darah  : </label>
        <strong>{{ $anamnesis->getId1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getId3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Nyeri Dada / Perut  : </label>
        <strong>{{ $anamnesis->getIe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getIe2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIe3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Gangguan Pencernaan  : </label>
        <strong>{{ $anamnesis->getIf1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIf3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>BAB Berwarna Hitam  : </label>
        <strong>{{ $anamnesis->getIc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIc3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getIa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getIa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getIa3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma Tracheobronkhial  -->
      <div class="form-control" align="center"><h6> Neoplasma Tracheobronkhial  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Sulit Makan  : </label>
        <strong>{{ $anamnesis->getNc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getNc2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Batuk Kronis  : </label>
        <strong>{{ $anamnesis->getNe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getNe2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Batuk berdarah  : </label>
        <strong>{{ $anamnesis->getNa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getNa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sesak nafas  : </label>
        <strong>{{ $anamnesis->getNb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getNb2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getNd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getNd2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getNd3() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma Kelenjar Tiroid  -->
      <div class="form-control" align="center"><h6> Neoplasma Kelenjar Tiroid  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Benjolan Leher Bagian Depan  : </label>
        <strong>{{ $anamnesis->getOa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getOa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Suara Parau  : </label>
        <strong>{{ $anamnesis->getOb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getOb2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sulit Menelan  : </label>
        <strong>{{ $anamnesis->getOe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getOe2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getOd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getOd2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Riwayat terpapar radiasi  : </label>
        <strong>{{ $anamnesis->getOc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getOc2() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma Leher (ganas)  -->
      <div class="form-control" align="center"><h6> Neoplasma Leher (ganas)  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getPa1() }}</strong>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getPa2() }}</strong>
        </div>
        <div class="form-group col-md-4">
          <label for='""'>Lainnya  : </label>
          <strong>{{ $anamnesis->getPa2Lainnya() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama Keluhan  : </label>
          <strong>{{ $anamnesis->getPa3() }}</strong>
        </div>
      </div>
      
      <div class="form-group">
        <label for='""'>Nyeri di Daerah Benjolan  : </label>
        <strong>{{ $anamnesis->getPe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getPe2() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getPd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getPd2() }}</strong>
      </div>
      <hr/>
  </div>
  <div> <!-- Neoplasma Leher (jinak)  -->
      <div class="form-control" align="center"><h6> Neoplasma Leher (jinak)  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getQa1() }}</strong>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for='""'>Lokasi  : </label>
          <strong>{{ $anamnesis->getQa2() }}</strong>
        </div>
        <div class="form-group col-md-4">
          <label for='""'>Lainnya  : </label>
          <strong>{{ $anamnesis->getQa2Lainnya() }}</strong>
        </div>
        <div class="form-group">
          <label for='""'>Lama Keluhan  : </label>
          <strong>{{ $anamnesis->getQa3() }}</strong>
        </div>
      </div>
      
      <div class="form-group">
        <label for='""'>Nyeri di Daerah Benjolan  : </label>
        <strong>{{ $anamnesis->getQe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getQe2() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getQd1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getQd2() }}</strong>
      </div>        
      <hr/>
  </div>
  <div> <!-- Neoplasma Mandibula  -->
      <div class="form-control" align="center"><h6> Neoplasma Mandibula  </h6></div><hr>
      <div class="form-group">
        <label for=''>Benjolan di Rahang Bawah  : </label>
        <strong>{{ $anamnesis->getRa1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getRa2() }}</strong>
      </div>    
      <hr/>
      <div class="form-group">
        <label for=''>Nyeri pada Benjolan  : </label>
        <strong>{{ $anamnesis->getRb1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getRb2() }}</strong>
      </div>         
      <hr/>
      <div class="form-group">
        <label for=''>Nyeri pada Benjolan  : </label>
        <strong>{{ $anamnesis->getRc1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getRc2() }}</strong>
      </div>
      <hr/>
      <div class="form-group">
        <label for=''>Nyeri Gigi  : </label>
        <strong>{{ $anamnesis->getRf1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getRf2() }}</strong>
      </div>        
      <hr/>
      <div class="form-group">
        <label for=''>Gangguan Mengunyah  : </label>
        <strong>{{ $anamnesis->getRd1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getRd2() }}</strong>
      </div>                
      <hr/>
      <div class="form-group">
        <label for=''>Sulit Menelan : </label>
        <strong>{{ $anamnesis->getRe1() }}</strong>
      </div>
      <div class="form-group">
        <label for=''>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getRe2() }}</strong>
      </div>                
      <hr/>
  </div>
  <div> <!-- Neoplasma Kelenjar Liur -->
      <div class="class-row" align="center"><h6> Neoplasma Kelenjar Liur </h6></div><hr>
      <tr> <!-- GA. BENJOLAN PADA UJUNG BAWAH TELINGA -->
          <div class="form-group">
            <label for='""'>Benjolan Pada Ujung Bawah Telinga  : </label>
            <strong>{{ $anamnesis->getGa1() }}</strong>
          </div>
          <div class="form-group">
            <label for='""'>Lokasi  : </label>
            <strong>{{ $anamnesis->getGa2() }}</strong>
          </div>
          <div class="form-group">
            <label for='""'>Lama  : </label>
            <strong>{{ $anamnesis->getGa3() }}</strong>
          </div>
          <hr/> 
          <div class="form-group">
            <label for='""'>Benjolan di Bawah Rahang  : </label>
            <strong>{{ $anamnesis->getGg1() }}</strong>
          </div>
          <div class="form-group">
            <label for='""'>Lokasi  : </label>
            <strong>{{ $anamnesis->getGg2() }}</strong>
          </div>
          <div class="form-group">
            <label for='""'>Lama  : </label>
            <strong>{{ $anamnesis->getGg3() }}</strong>
          </div>
          <hr/>  
          <div class="form-group">
            <label for='""'>Nyeri pada Benjolan  : </label>
            <strong>{{ $anamnesis->getGh1() }}</strong>
          </div>
          <div class="form-group">
            <label for='""'>Lama  : </label>
            <strong>{{ $anamnesis->getGh2() }}</strong>
          </div>
          <hr/>  
          <div class="form-group">
            <label for=''>Ludah Bercampur Nanah  : </label>
            <strong>{{ $anamnesis->getGd1() }}</strong>
          </div>
          <div class="form-group">
            <label for=''>Lama  : </label>
            <strong>{{ $anamnesis->getGd2() }}</strong>
          </div>
          <hr/> 
          <div class="form-group">
            <label for=''>Wajah Mencong  : </label>
            <strong>{{ $anamnesis->getGb1() }}</strong>
          </div>
          <div class="form-group">
            <label for=''>Lokasi  : </label>
            <strong>{{ $anamnesis->getGb2() }}</strong>
          </div>
          <div class="form-group">
            <label for=''>Lama  : </label>
            <strong>{{ $anamnesis->getGb3() }}</strong>
          </div>
          <hr/>                                       
          <div class="form-group">
            <label for=''>Wajah Mencong  : </label>
            <strong>{{ $anamnesis->getGe1() }}</strong>
          </div>
          <div class="form-group">
            <label for=''>Lokasi  : </label>
            <strong>{{ $anamnesis->getGe2() }}</strong>
          </div>
          <div class="form-group">
            <label for=''>Lama  : </label>
            <strong>{{ $anamnesis->getGe3() }}</strong>
          </div>
          <hr/>        
  </div>
  <div> <!-- 17.	Limfoma  Kepala Leher  -->
      <div class="form-control" align="center"><h6>Limfoma Kepala Leher  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Sulit Menelan  : </label>
        <strong>{{ $anamnesis->getSb1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getSb2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Sesak Nafas  : </label>
        <strong>{{ $anamnesis->getSc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getSc2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Leher  : </label>
        <strong>{{ $anamnesis->getSa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lokasi  : </label>
        <strong>{{ $anamnesis->getSa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getSa3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Nyeri pada Benjolan  : </label>
        <strong>{{ $anamnesis->getSe1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getSe2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Benjolan di Bagian Tubuh Lainnya  : </label>
        <strong>{{ $anamnesis->getSd1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'> Aksila  : </label>
        <strong>{{ $anamnesis->getSd2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'> Inguinal  : </label>
        <strong>{{ $anamnesis->getSd3() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama Keluhan  : </label>
        <strong>{{ $anamnesis->getSd4() }}</strong>
      </div>
  </div>
  <div> <!-- 17.	Limfoma  Kepala Leher  -->
      <div class="form-control" align="center"><h6>Lain - Lain  </h6></div><hr>
      <div class="form-group">
        <label for='""'>Penurunan Berat Badan  : </label>
        <strong>{{ $anamnesis->getTa1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getTa2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Riwayat Pengobatan Sebelumnya  : </label>
        <strong>{{ $anamnesis->getTc1() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Jika Ya  : </label>
        <strong>{{ $anamnesis->getTc1Lainnya() }}</strong>
      </div>        
      <div class="form-group">
        <label for='""'>Lama  : </label>
        <strong>{{ $anamnesis->getTc2() }}</strong>
      </div>
      <div class="form-group">
        <label for='""'>Pertama Kali Ke Dokter  : </label>
        <strong>{{ $anamnesis->getTb1() }}</strong>
      </div>
      <div class="form-group">
        <div class="form-group col-md-6">
          <label for=''>Spesialisasi Dokter  : </label>
          <strong>{{ $anamnesis->getTb2() }}</strong>
        </div>
        <div class="form-group col-md-6">
          <label for=''>Lainnya  : </label>
          <strong>{{ $anamnesis->getTb2Lainnya() }}</strong>
        </div>
      </div>
      <hr/>
      <div class="form-group">
        <div class="form-group">
          <label for=''>Riwayat Penyakit Dahulu  : </label>
        </div>
        <div class="form-group col-md-3">
          <label for=''>GERD  : </label>
          <strong>{{ $anamnesis->getTb21() }}</strong>
        </div>
        <div class="form-group col-md-3">
          <label for=''>Barrett  : </label>
          <strong>{{ $anamnesis->getTb22() }}</strong>
        </div>
        <div class="form-group col-md-3">
          <label for=''>Achalasia  : </label>
          <strong>{{ $anamnesis->getTb23() }}</strong>
        </div>
        <div class="form-group col-md-3">
          <label for=''>Konsumsi Zat Korosif  : </label>
          <strong>{{ $anamnesis->getTb24() }}</strong>
        </div>
        <div class="form-group col-md-3">
          <label for=''>Lainnya  : </label>
          <strong>{{ $anamnesis->getTb25() }}</strong>
        </div>
        <div class="form-group col-md-3">
          <label for=''>Jika Ya  : </label>
          <strong>{{ $anamnesis->getTb25Lainnya() }}</strong>
        </div>
      </div>
      <hr/>        
  </div>
@endif