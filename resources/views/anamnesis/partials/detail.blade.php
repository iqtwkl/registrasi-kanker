<h5 class="card-title">Anamnesis</h5>  
<hr/>
<div class="form-row" align="center"><h6> Pasien </h6></div>
<hr>   
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
<!--<div id="tabstrip">-->
<!--<ul>-->
    <!--<li> Karsinoma Nasofaring </li>
        <li> Neoplasma Sinonasal </li>
        <li> Neoplasma Oral Cavity </li>
        <li> Neoplasma Orofaring </li>
        <li> Angiofibroma Nasofaring </li>
        <li> Neoplasma Laring </li>
        <li> Neoplasma Parotis </li>
        <li> Neoplasma Telinga </li>
        <li> Neoplasma Esofagus </li>
        <li> Riwayat Keluarga </li>
        <li> Faktor Risiko </li>-->
    <!--</ul>-->
<div> <!-- FAKTOR RISIKO -->
    <div class="form-row" align="center"><h6> Faktor Risiko </h6></div>
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
    <div class="form-row" align="center"><h6> Riwayat Keluarga Yang Menderita Kanker</h6></div>
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
    <div class="form-row" align="center"><h6> Neoplasma Kulit Kepala Leher  </h6></div><hr>
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
    <div class="form-row" align="center"><h6> Neoplasma Sinonasal </h6></div>
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
    <div class="form-row" align="center"><h6> Karsinoma Nasofaring </h6></div>
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
    <div class="form-row" align="center"><h6> Angiofibroma Nasofaring Belia </h6></div><hr>
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
    <div class="form-row" align="center"><h6> Neoplasma Orofaring </h6></div>
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
    <div class="form-row" align="center"><h6> Neoplasma Rongga Mulut </h6></div><hr>
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
    <div class="form-row" align="center"><h6> Neoplasma Hipofaring  </h6></div><hr>
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
    <div class="form-row" align="center"><h6> Neoplasma Laring </h6></div><hr>
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
    <div align="center"><h3> Neoplasma 1/3 Proksimal  Esofagus </h3></div><hr>
    <table width="100%">
        <tbody><tr> <!-- IB. Sulit Menelan -->
        <td>Sulit Menelan </td>
        <td> : </td>
        <td><input id="Ib1_anamnesis1" type="radio" name="Ib1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Ib1_anamnesis2" type="radio" name="Ib1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
<!--                                          <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ib2_anamnesis1" type="radio" name="Ib2" value="1" data-md-icheck > Kanan </td>
        <td><input id="Ib2_anamnesis2" type="radio" name="Ib2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>-->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ib3_anamnesis1" type="radio" name="Ib3" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Ib3_anamnesis2" type="radio" name="Ib3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ib3_anamnesis3" type="radio" name="Ib3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- II. Nyeri Menelan -->
        <td>Nyeri Menelan </td>
        <td> : </td>
        <td><input id="Ii1_anamnesis1" type="radio" name="Ii1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Ii1_anamnesis2" type="radio" name="Ii1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
<!--                                          <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ii2_anamnesis1" type="radio" name="Ii2" value="1" data-md-icheck > Kanan </td>
        <td><input id="Ii2_anamnesis2" type="radio" name="Ii2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>-->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ii3_anamnesis1" type="radio" name="Ii3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ii3_anamnesis2" type="radio" name="Ii3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ii3_anamnesis3" type="radio" name="Ii3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- IH. SUARA SERAK -->
        <td>Suara Serak </td>
        <td> : </td>
        <td><input id="Ih1_anamnesis1" type="radio" name="Ih1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Ih1_anamnesis2" type="radio" name="Ih1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
<!--                                          <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ih2_anamnesis1" type="radio" name="Ih2" value="1" data-md-icheck > Kanan </td>
        <td><input id="Ih2_anamnesis2" type="radio" name="Ih2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>-->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ih3_anamnesis1" type="radio" name="Ih3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ih3_anamnesis2" type="radio" name="Ih3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ih3_anamnesis3" type="radio" name="Ih3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- IG. BATUK KRONIS -->
        <td>Batuk Kronis </td>
        <td> : </td>
        <td><input id="Ig1_anamnesis1" type="radio" name="Ig1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Ig1_anamnesis2" type="radio" name="Ig1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
<!--                                          <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ig2_anamnesis1" type="radio" name="Ig2" value="1" data-md-icheck > Kanan </td>
        <td><input id="Ig2_anamnesis2" type="radio" name="Ig2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>-->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ig3_anamnesis1" type="radio" name="Ig3" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Ig3_anamnesis2" type="radio" name="Ig3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ig3_anamnesis3" type="radio" name="Ig3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- ID. MUNTAH DARAH -->
        <td>Muntah Darah </td>
        <td> : </td>
        <td><input id="Id1_anamnesis1" type="radio" name="Id1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Id1_anamnesis2" type="radio" name="Id1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
<!--                                          <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Id2_anamnesis1" type="radio" name="Id2" value="1" data-md-icheck > Kanan </td>
        <td><input id="Id2_anamnesis2" type="radio" name="Id2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>-->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Id3_anamnesis1" type="radio" name="Id3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Id3_anamnesis2" type="radio" name="Id3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Id3_anamnesis3" type="radio" name="Id3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- IE. NYERI DADA / PURUT -->
        <td>Nyeri Dada / Perut </td>
        <td> : </td>
        <td><input id="Ie1_anamnesis1" type="radio" name="Ie1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Ie1_anamnesis2" type="radio" name="Ie1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ie2_anamnesis1" type="radio" name="Ie2" value="1" data-md-icheck=""> Kanan</td>
        <td><input id="Ie2_anamnesis2" type="radio" name="Ie2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Ie2_anamnesis3" type="radio" name="Ie2" value="3" data-md-icheck=""> Bilateral </td>
        </tr>
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ie3_anamnesis1" type="radio" name="Ie3" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Ie3_anamnesis2" type="radio" name="Ie3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ie3_anamnesis3" type="radio" name="Ie3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- IF. GANGGUAN PENCERNAAN -->
        <td>Gangguan Pencernaan </td>
        <td> : </td>
        <td><input id="If1_anamnesis1" type="radio" name="If1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="If1_anamnesis2" type="radio" name="If1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
<!--                                          <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="If2_anamnesis1" type="radio" name="If2" value="1" data-md-icheck > Kanan </td>
        <td><input id="If2_anamnesis2" type="radio" name="If2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>-->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="If3_anamnesis1" type="radio" name="If3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="If3_anamnesis2" type="radio" name="If3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="If3_anamnesis3" type="radio" name="If3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <!-- IC. BAB Berwarna Hitam -->
        <tr>
        <td>BAB Berwarna Hitam </td>
        <td> : </td>
        <td><input id="Ic1_anamnesis1" type="radio" name="Ic1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Ic1_anamnesis2" type="radio" name="Ic1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <!--
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ic2_anamnesis1" type="radio" name="Ic2" value="1" data-md-icheck > Kanan </td>
        <td><input id="Ic2_anamnesis2" type="radio" name="Ic2" value="2" data-md-icheck > Kiri </td>
        <td></td>
        </tr>
        -->
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ic3_anamnesis1" type="radio" name="Ic3" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Ic3_anamnesis2" type="radio" name="Ic3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ic3_anamnesis3" type="radio" name="Ic3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> <!-- IA. BENJOLAN LEHER -->
        <td width="160">Benjolan di Leher </td>
        <td> : </td>
        <td width="120"><input id="Ia1_anamnesis1" type="radio" name="Ia1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Ia1_anamnesis2" type="radio" name="Ia1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ia2_anamnesis1" type="radio" name="Ia2" value="1" data-md-icheck=""> Kanan</td>
        <td><input id="Ia2_anamnesis2" type="radio" name="Ia2" value="2" data-md-icheck=""> Kiri</td>
        <td><input id="Ia2_anamnesis3" type="radio" name="Ia2" value="3" data-md-icheck=""> Bilateral</td>
        <td></td>
        </tr>
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ia3_anamnesis1" type="radio" name="Ia3" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Ia3_anamnesis2" type="radio" name="Ia3" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Ia3_anamnesis3" type="radio" name="Ia3" value="3" data-md-icheck=""> &gt;12 Bulan</td>
        </tr>
        <hr/>
    </tbody></table>
</div>
<div> <!-- Neoplasma Tracheobronkhial  -->
    <div align="center"><h3> Neoplasma Tracheobronkhial  </h3></div><hr>
    <table width="100%">
        <tbody><tr> 
        <td width="240">Sulit Makan  </td>
        <td> : </td>
        <td width="120"><input id="Nc1_anamnesis1" type="radio" name="Nc1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Nc1_anamnesis2" type="radio" name="Nc1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Nc2_anamnesis1" type="radio" name="Nc2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Nc2_anamnesis2" type="radio" name="Nc2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Nc2_anamnesis3" type="radio" name="Nc2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Batuk Kronis  </td>
        <td> : </td>
        <td width="120"><input id="Ne1_anamnesis1" type="radio" name="Ne1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Ne1_anamnesis2" type="radio" name="Ne1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Ne2_anamnesis1" type="radio" name="Ne2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ne2_anamnesis2" type="radio" name="Ne2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ne2_anamnesis3" type="radio" name="Ne2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Batuk berdarah  </td>
        <td> : </td>
        <td width="120"><input id="Na1_anamnesis1" type="radio" name="Na1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Na1_anamnesis2" type="radio" name="Na1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Na2_anamnesis1" type="radio" name="Na2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Na2_anamnesis2" type="radio" name="Na2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Na2_anamnesis3" type="radio" name="Na2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Sesak nafas  </td>
        <td> : </td>
        <td width="120"><input id="Nb1_anamnesis1" type="radio" name="Nb1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Nb1_anamnesis2" type="radio" name="Nb1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Nb2_anamnesis1" type="radio" name="Nb2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Nb2_anamnesis2" type="radio" name="Nb2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Nb2_anamnesis3" type="radio" name="Nb2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Benjolan di Leher  </td>
        <td> : </td>
        <td width="120"><input id="Nd1_anamnesis1" type="radio" name="Nd1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Nd1_anamnesis2" type="radio" name="Nd1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Nd2_anamnesis1" type="radio" name="Nd2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Nd2_anamnesis2" type="radio" name="Nd2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Nd2_anamnesis3" type="radio" name="Nd2" value="3" data-md-icheck=""> Bilateral </td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Nd3_anamnesis1" type="radio" name="Nd3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Nd3_anamnesis2" type="radio" name="Nd3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Nd3_anamnesis3" type="radio" name="Nd3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
    </tbody></table>
</div>
<div> <!-- Neoplasma Kelenjar Tiroid  -->
    <div align="center"><h3> Neoplasma Kelenjar Tiroid  </h3></div><hr>
    <table width="100%">
        <tbody><tr> 
        <td width="240">Benjolan Leher Bagian Depan   </td>
        <td> : </td>
        <td width="120"><input id="Oa1_anamnesis1" type="radio" name="Oa1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Oa1_anamnesis2" type="radio" name="Oa1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Oa2_anamnesis1" type="radio" name="Oa2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Oa2_anamnesis2" type="radio" name="Oa2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Oa2_anamnesis3" type="radio" name="Oa2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Suara Parau  </td>
        <td> : </td>
        <td width="120"><input id="Ob1_anamnesis1" type="radio" name="Ob1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Ob1_anamnesis2" type="radio" name="Ob1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Ob2_anamnesis1" type="radio" name="Ob2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ob2_anamnesis2" type="radio" name="Ob2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ob2_anamnesis3" type="radio" name="Ob2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Sulit Menelan  </td>
        <td> : </td>
        <td width="120"><input id="Oe1_anamnesis1" type="radio" name="Oe1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Oe1_anamnesis2" type="radio" name="Oe1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Oe2_anamnesis1" type="radio" name="Oe2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Oe2_anamnesis2" type="radio" name="Oe2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Oe2_anamnesis3" type="radio" name="Oe2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Sesak Nafas  </td>
        <td> : </td>
        <td width="120"><input id="Od1_anamnesis1" type="radio" name="Od1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Od1_anamnesis2" type="radio" name="Od1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Od2_anamnesis1" type="radio" name="Od2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Od2_anamnesis2" type="radio" name="Od2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Od2_anamnesis3" type="radio" name="Od2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Riwayat terpapar radiasi  </td>
        <td> : </td>
        <td width="120"><input id="Oc1_anamnesis1" type="radio" name="Oc1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Oc1_anamnesis2" type="radio" name="Oc1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Oc2_anamnesis1" type="radio" name="Oc2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Oc2_anamnesis2" type="radio" name="Oc2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Oc2_anamnesis3" type="radio" name="Oc2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
    </tbody></table>
</div>
<div> <!-- Neoplasma Leher (ganas)  -->
    <div align="center"><h3> Neoplasma Leher (ganas)  </h3></div><hr>
    <table width="100%">
        <tbody><tr> 
        <td width="240">Benjolan di Leher   </td>
        <td> : </td>
        <td width="120"><input id="Pa1_anamnesis1" type="radio" name="Pa1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Pa1_anamnesis2" type="radio" name="Pa1" value="2" data-md-icheck=""> Tidak</td>
        <td width="120">&nbsp;</td>
        <td width="120">&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Pa2_anamnesis1" type="radio" name="Pa2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Pa2_anamnesis2" type="radio" name="Pa2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Pa2_anamnesis3" type="radio" name="Pa2" value="3" data-md-icheck=""> Bilateral </td>
        <td><input id="Pa2_anamnesis4" type="radio" name="Pa2" value="4" data-md-icheck=""> Lainnya </td>
        <td><div class="md-input-wrapper"><input id="Pa2Lainnya" name="Pa2Lainnya" class="md-input" type="text" style="width: 30%;"><span class="md-input-bar"></span></div></td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Pa3_anamnesis1" type="radio" name="Pa3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Pa3_anamnesis2" type="radio" name="Pa3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td colspan="3"><input id="Pa3_anamnesis3" type="radio" name="Pa3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <!-- 
        <tr> 
        <td width="240" >Sulit Menelan  </td>
        <td> : </td>
        <td width="120"><input id="Pb1_anamnesis1" type="radio" name="Pb1" value="1" data-md-icheck > Ya</td>
        <td width="120"><input id="Pb1_anamnesis2" type="radio" name="Pb1" value="2" data-md-icheck > Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Pb2_anamnesis1" type="radio" name="Pb2" value="1" data-md-icheck > 0-6 Bulan</td>
        <td><input id="Pb2_anamnesis2" type="radio" name="Pb2" value="2" data-md-icheck > 6-12 Bulan </td>
        <td><input id="Pb2_anamnesis3" type="radio" name="Pb2" value="3" data-md-icheck > >12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240" >Suara Serak  </td>
        <td> : </td>
        <td width="120"><input id="Pc1_anamnesis1" type="radio" name="Pc1" value="1" data-md-icheck > Ya</td>
        <td width="120"><input id="Pc1_anamnesis2" type="radio" name="Pc1" value="2" data-md-icheck > Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Pc2_anamnesis1" type="radio" name="Pc2" value="1" data-md-icheck > 0-6 Bulan</td>
        <td><input id="Pc2_anamnesis2" type="radio" name="Pc2" value="2" data-md-icheck > 6-12 Bulan </td>
        <td><input id="Pc2_anamnesis3" type="radio" name="Pc2" value="3" data-md-icheck > >12 Bulan </td>
        </tr>
        <hr/>
        -->
        <tr> 
        <td width="240">Nyeri di Daerah Benjolan </td>
        <td> : </td>
        <td width="120"><input id="Pe1_anamnesis1" type="radio" name="Pe1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Pe1_anamnesis2" type="radio" name="Pe1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Pe2_anamnesis1" type="radio" name="Pe2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Pe2_anamnesis2" type="radio" name="Pe2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Pe2_anamnesis3" type="radio" name="Pe2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <tr> 
        <td width="240">Sesak Nafas  </td>
        <td> : </td>
        <td width="120"><input id="Pd1_anamnesis1" type="radio" name="Pd1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Pd1_anamnesis2" type="radio" name="Pd1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Pd2_anamnesis1" type="radio" name="Pd2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Pd2_anamnesis2" type="radio" name="Pd2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Pd2_anamnesis3" type="radio" name="Pd2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
    </tbody></table>
</div>
<div> <!-- Neoplasma Leher (jinak)  -->
    <div align="center"><h3> Neoplasma Leher (jinak)  </h3></div><hr>
    <table width="100%">
        <tbody><tr> 
        <td width="240">Benjolan di Leher   </td>
        <td> : </td>
        <td width="120"><input id="Qa1_anamnesis1" type="radio" name="Qa1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Qa1_anamnesis2" type="radio" name="Qa1" value="2" data-md-icheck=""> Tidak</td>
        <td width="120">&nbsp;</td>
        <td width="120">&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Qa2_anamnesis1" type="radio" name="Qa2" value="1" data-md-icheck=""> Kiri</td>
        <td><input id="Qa2_anamnesis2" type="radio" name="Qa2" value="2" data-md-icheck=""> Kanan</td>
        <td><input id="Qa2_anamnesis3" type="radio" name="Qa2" value="3" data-md-icheck=""> Bilateral </td>
        <td><input id="Qa2_anamnesis4" type="radio" name="Qa2" value="4" data-md-icheck=""> Lainnya </td>
        <td><div class="md-input-wrapper"><input id="Qa2Lainnya" name="Qa2Lainnya" class="md-input" type="text" style="width: 30%;"><span class="md-input-bar"></span></div></td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Qa3_anamnesis1" type="radio" name="Qa3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Qa3_anamnesis2" type="radio" name="Qa3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Qa3_anamnesis3" type="radio" name="Qa3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <!--
        <tr> 
        <td width="240" >Suara Serak  </td>
        <td> : </td>
        <td width="120"><input id="Qb1_anamnesis1" type="radio" name="Qb1" value="1" data-md-icheck > Ya</td>
        <td width="120"><input id="Qb1_anamnesis2" type="radio" name="Qb1" value="2" data-md-icheck > Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Qb2_anamnesis1" type="radio" name="Qb2" value="1" data-md-icheck > 0-6 Bulan</td>
        <td><input id="Qb2_anamnesis2" type="radio" name="Qb2" value="2" data-md-icheck > 6-12 Bulan </td>
        <td><input id="Qb2_anamnesis3" type="radio" name="Qb2" value="3" data-md-icheck > >12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240" >Sulit Menelan  </td>
        <td> : </td>
        <td width="120"><input id="Qc1_anamnesis1" type="radio" name="Qc1" value="1" data-md-icheck > Ya</td>
        <td width="120"><input id="Qc1_anamnesis2" type="radio" name="Qc1" value="2" data-md-icheck > Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Qc2_anamnesis1" type="radio" name="Qc2" value="1" data-md-icheck > 0-6 Bulan</td>
        <td><input id="Qc2_anamnesis2" type="radio" name="Qc2" value="2" data-md-icheck > 6-12 Bulan </td>
        <td><input id="Qc2_anamnesis3" type="radio" name="Qc2" value="3" data-md-icheck > >12 Bulan </td>
        </tr>
        <hr/>
        -->
        <tr> 
        <td width="240">Nyeri di Daerah Benjolan </td>
        <td> : </td>
        <td width="120"><input id="Qe1_anamnesis1" type="radio" name="Qe1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Qe1_anamnesis2" type="radio" name="Qe1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Qe2_anamnesis1" type="radio" name="Qe2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Qe2_anamnesis2" type="radio" name="Qe2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Qe2_anamnesis3" type="radio" name="Qe2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <tr> 
        <td width="240">Sesak Nafas  </td>
        <td> : </td>
        <td width="120"><input id="Qd1_anamnesis1" type="radio" name="Qd1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Qd1_anamnesis2" type="radio" name="Qd1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Qd2_anamnesis1" type="radio" name="Qd2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Qd2_anamnesis2" type="radio" name="Qd2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Qd2_anamnesis3" type="radio" name="Qd2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
    </tbody></table>
</div>
<div> <!-- Neoplasma Mandibula  -->
    <div align="center"><h3> Neoplasma Mandibula  </h3></div><hr>
    <table width="100%">
        <tbody><tr> 
        <td width="240">Benjolan di Rahang Bawah </td>
        <td> : </td>
        <td width="120"><input id="Ra1_anamnesis1" type="radio" name="Ra1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Ra1_anamnesis2" type="radio" name="Ra1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Ra2_anamnesis1" type="radio" name="Ra2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ra2_anamnesis2" type="radio" name="Ra2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ra2_anamnesis3" type="radio" name="Ra2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Nyeri pada Benjolan  </td>
        <td> : </td>
        <td width="120"><input id="Rb1_anamnesis1" type="radio" name="Rb1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Rb1_anamnesis2" type="radio" name="Rb1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Rb2_anamnesis1" type="radio" name="Rb2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Rb2_anamnesis2" type="radio" name="Rb2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Rb2_anamnesis3" type="radio" name="Rb2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Rasa Baal  </td>
        <td> : </td>
        <td width="120"><input id="Rc1_anamnesis1" type="radio" name="Rc1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Rc1_anamnesis2" type="radio" name="Rc1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Rc2_anamnesis1" type="radio" name="Rc2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Rc2_anamnesis2" type="radio" name="Rc2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Rc2_anamnesis3" type="radio" name="Rc2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Nyeri Gigi  </td>
        <td> : </td>
        <td width="120"><input id="Rf1_anamnesis1" type="radio" name="Rf1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Rf1_anamnesis2" type="radio" name="Rf1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Rf2_anamnesis1" type="radio" name="Rf2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Rf2_anamnesis2" type="radio" name="Rf2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Rf2_anamnesis3" type="radio" name="Rf2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Gangguan Mengunyah  </td>
        <td> : </td>
        <td width="120"><input id="Rd1_anamnesis1" type="radio" name="Rd1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Rd1_anamnesis2" type="radio" name="Rd1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Rd2_anamnesis1" type="radio" name="Rd2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Rd2_anamnesis2" type="radio" name="Rd2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Rd2_anamnesis3" type="radio" name="Rd2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Sulit Menelan  </td>
        <td> : </td>
        <td width="120"><input id="Re1_anamnesis1" type="radio" name="Re1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Re1_anamnesis2" type="radio" name="Re1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Re2_anamnesis1" type="radio" name="Re2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Re2_anamnesis2" type="radio" name="Re2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Re2_anamnesis3" type="radio" name="Re2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
    </tbody></table>
</div>
<div> <!-- Neoplasma Kelenjar Liur -->
    <div align="center"><h3> Neoplasma Kelenjar Liur </h3></div><hr>
    <table width="100%">
        <tbody><tr> <!-- GA. BENJOLAN PADA UJUNG BAWAH TELINGA -->
        <td width="240">Benjolan Pada Ujung Bawah Telinga </td>
        <td> : </td>
        <td width="120"><input id="Ga1_anamnesis1" type="radio" name="Ga1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Ga1_anamnesis2" type="radio" name="Ga1" value="2" data-md-icheck=""> Tidak</td>
        <td width="120">&nbsp;</td>
        <td width="100">&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ga2_anamnesis1" type="radio" name="Ga2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Ga2_anamnesis2" type="radio" name="Ga2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Ga2_anamnesis3" type="radio" name="Ga2" value="3" data-md-icheck=""> Bilateral </td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Ga3_anamnesis1" type="radio" name="Ga3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ga3_anamnesis2" type="radio" name="Ga3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ga3_anamnesis3" type="radio" name="Ga3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <tr> <!-- GB. Benjolan di Bawah Rahang -->
        <td>Benjolan di Bawah Rahang </td>
        <td> : </td>
        <td><input id="Gg1_anamnesis1" type="radio" name="Gg1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Gg1_anamnesis2" type="radio" name="Gg1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Gg2_anamnesis1" type="radio" name="Gg2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Gg2_anamnesis2" type="radio" name="Gg2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Gg2_anamnesis3" type="radio" name="Gg2" value="3" data-md-icheck=""> Bilateral </td>
        <td><input id="Gg2_anamnesis4" type="radio" name="Gg2" value="4" data-md-icheck=""> Lainnya </td>
        <td><div class="md-input-wrapper"><input id="Gg2Lainnya" name="Gg2Lainnya" class="md-input" type="text" style="width: 30%;"><span class="md-input-bar"></span></div></td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Gg3_anamnesis1" type="radio" name="Gg3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Gg3_anamnesis2" type="radio" name="Gg3" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Gg3_anamnesis3" type="radio" name="Gg3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <tr> <!-- GD. LUDAH BERCAMPUR NANAH -->
        <td>Nyeri pada Benjolan </td>
        <td> : </td>
        <td><input id="Gh1_anamnesis1" type="radio" name="Gh1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Gh1_anamnesis2" type="radio" name="Gh1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Gh2_anamnesis1" type="radio" name="Gh2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Gh2_anamnesis2" type="radio" name="Gh2" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Gh2_anamnesis3" type="radio" name="Gh2" value="3" data-md-icheck=""> &gt;12 Bulan</td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <tr> <!-- GD. LUDAH BERCAMPUR NANAH -->
        <td>Ludah Bercampur Nanah </td>
        <td> : </td>
        <td><input id="Gd1_anamnesis1" type="radio" name="Gd1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Gd1_anamnesis2" type="radio" name="Gd1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Gd2_anamnesis1" type="radio" name="Gd2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Gd2_anamnesis2" type="radio" name="Gd2" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Gd2_anamnesis3" type="radio" name="Gd2" value="3" data-md-icheck=""> &gt;12 Bulan</td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <tr> <!-- GB. WAJAH MENCONG -->
        <td>Wajah Mencong </td>
        <td> : </td>
        <td><input id="Gb1_anamnesis1" type="radio" name="Gb1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Gb1_anamnesis2" type="radio" name="Gb1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Gb2_anamnesis1" type="radio" name="Gb2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Gb2_anamnesis2" type="radio" name="Gb2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Gb2_anamnesis3" type="radio" name="Gb2" value="3" data-md-icheck=""> Bilateral </td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Gb3_anamnesis1" type="radio" name="Gb3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Gb3_anamnesis2" type="radio" name="Gb3" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Gb3_anamnesis3" type="radio" name="Gb3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        <!-- <tr> 
        <td>Demam </td>
        <td> : </td>
        <td><input id="Gc1_anamnesis1" type="radio" name="Gc1" value="1" data-md-icheck > Ya</td>
        <td><input id="Gc1_anamnesis2" type="radio" name="Gc1" value="2" data-md-icheck > Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <hr/>-->
        <!--
        <tr> 
        <td width="240" >Sulit Menelan </td>
        <td> : </td>
        <td width="120"><input id="Gf1_anamnesis1" type="radio" name="Gf1" value="1" data-md-icheck > Ya</td>
        <td width="120"><input id="Gf1_anamnesis2" type="radio" name="Gf1" value="2" data-md-icheck > Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Gf2_anamnesis1" type="radio" name="Gf2" value="1" data-md-icheck > 0-6 Bulan</td>
        <td><input id="Gf2_anamnesis2" type="radio" name="Gf2" value="2" data-md-icheck > 6-12 Bulan </td>
        <td><input id="Gf2_anamnesis3" type="radio" name="Gf2" value="3" data-md-icheck > >12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
        -->
        <tr> 
        <td width="240">Benjolan di Leher </td>
        <td> : </td>
        <td width="120"><input id="Ge1_anamnesis1" type="radio" name="Ge1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Ge1_anamnesis2" type="radio" name="Ge1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td>
        <td> : </td>
        <td><input id="Ge2_anamnesis1" type="radio" name="Ge2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Ge2_anamnesis2" type="radio" name="Ge2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Ge2_anamnesis3" type="radio" name="Ge2" value="3" data-md-icheck=""> Bilateral </td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Ge3_anamnesis1" type="radio" name="Ge3" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ge3_anamnesis2" type="radio" name="Ge3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Ge3_anamnesis3" type="radio" name="Ge3" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <tr>
            <td colspan="7"><hr></td>
        </tr>
    </tbody></table>
</div>
<div> <!-- 17.	Limfoma  Kepala Leher  -->
    <div align="center"><h3>Limfoma Kepala Leher  </h3></div><hr>
    <table width="100%">
        <tbody><tr> 
        <td width="240">Sulit Menelan </td>
        <td> : </td>
        <td width="120"><input id="Sb1_anamnesis1" type="radio" name="Sb1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Sb1_anamnesis2" type="radio" name="Sb1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Sb2_anamnesis1" type="radio" name="Sb2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Sb2_anamnesis2" type="radio" name="Sb2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Sb2_anamnesis3" type="radio" name="Sb2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Sesak Nafas </td>
        <td> : </td>
        <td width="120"><input id="Sc1_anamnesis1" type="radio" name="Sc1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Sc1_anamnesis2" type="radio" name="Sc1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Sc2_anamnesis1" type="radio" name="Sc2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Sc2_anamnesis2" type="radio" name="Sc2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Sc2_anamnesis3" type="radio" name="Sc2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr>
        <td>Benjolan di Leher </td>
        <td> : </td>
        <td><input id="Sa1_anamnesis1" type="radio" name="Sa1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Sa1_anamnesis2" type="radio" name="Sa1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td> 
        <td> : </td>
        <td><input id="Sa2_anamnesis1" type="radio" name="Sa2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Sa2_anamnesis2" type="radio" name="Sa2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Sa2_anamnesis3" type="radio" name="Sa2" value="3" data-md-icheck=""> Bilateral</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td> 
        <td> : </td>
        <td><input id="Sa3_anamnesis1" type="radio" name="Sa3" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Sa3_anamnesis2" type="radio" name="Sa3" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Sa3_anamnesis3" type="radio" name="Sa3" value="3" data-md-icheck=""> &gt; 12 Bulan</td>
        </tr>
        <hr/>
        <tr> 
        <td width="240">Nyeri pada Benjolan </td>
        <td> : </td>
        <td width="120"><input id="Se1_anamnesis1" type="radio" name="Se1" value="1" data-md-icheck=""> Ya</td>
        <td width="120"><input id="Se1_anamnesis2" type="radio" name="Se1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lama Keluhan </td>
        <td> : </td>
        <td><input id="Se2_anamnesis1" type="radio" name="Se2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Se2_anamnesis2" type="radio" name="Se2" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Se2_anamnesis3" type="radio" name="Se2" value="3" data-md-icheck=""> &gt;12 Bulan </td>
        </tr>
        <hr/>
        <tr>
        <td>Benjolan di Bagian Tubuh Lainnya </td>
        <td> : </td>
        <td><input id="Sd1_anamnesis1" type="radio" name="Sd1" value="1" data-md-icheck=""> Ya</td>
        <td><input id="Sd1_anamnesis2" type="radio" name="Sd1" value="2" data-md-icheck=""> Tidak</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>Lokasi </td> 
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
        <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp; Aksila </td> 
        <td> : </td>
        <td><input id="Sd2_anamnesis1" type="radio" name="Sd2" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Sd2_anamnesis2" type="radio" name="Sd2" value="2" data-md-icheck=""> Kiri </td>
        <td><input id="Sd2_anamnesis3" type="radio" name="Sd2" value="3" data-md-icheck=""> Bilateral </td>
        <td> </td>
        </tr>
        <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp; Inguinal </td> 
        <td> : </td>
        <td><input id="Sd3_anamnesis1" type="radio" name="Sd3" value="1" data-md-icheck=""> Kanan </td>
        <td><input id="Sd3_anamnesis2" type="radio" name="Sd3" value="2" data-md-icheck=""> Kiri  </td>
        <td><input id="Sd3_anamnesis2" type="radio" name="Sd3" value="2" data-md-icheck=""> Bilateral  </td>
        </tr>
        <tr>
        <td>Lama Keluhan </td> 
        <td> : </td>
        <td><input id="Sd4_anamnesis1" type="radio" name="Sd4" value="1" data-md-icheck=""> 0-6 Bulan </td>
        <td><input id="Sd4_anamnesis2" type="radio" name="Sd4" value="2" data-md-icheck=""> 6-12 Bulan </td>
        <td><input id="Sd4_anamnesis3" type="radio" name="Sd4" value="3" data-md-icheck=""> &gt; 12 Bulan</td>
        </tr>
        <hr/>
    </tbody></table>
</div>
<div> <!-- 17.	Limfoma  Kepala Leher  -->
    <div align="center"><h3>Lain - Lain  </h3></div><hr>
    <table width="100%">
        <tbody><tr>
        <td width="250">Penurunan Berat Badan </td>
        <td> : </td>
        <td width="180"><input id="Ta1_anamnesis1" type="radio" name="Ta1" value="1" data-md-icheck=""> Ya</td>
        <td width="150"><input id="Ta1_anamnesis2" type="radio" name="Ta1" value="2" data-md-icheck=""> Tidak</td>
        <td width="150">&nbsp;</td>
        </tr>
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Ta2_anamnesis1" type="radio" name="Ta2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Ta2_anamnesis2" type="radio" name="Ta2" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Ta2_anamnesis3" type="radio" name="Ta2" value="3" data-md-icheck=""> &gt;12 Bulan</td>
        </tr>
        <hr/>
        <tr>
        <td width="250">Riwayat Pengobatan Sebelumnya </td>
        <td> : </td>
        <td width="180"><input id="Tc1_anamnesis1" type="radio" name="Tc1" value="1" data-md-icheck=""> Ya </td>
        <td width="180"><input id="Tc1_anamnesis2" type="radio" name="Tc1" value="2" data-md-icheck=""> Tidak </td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jika Ya </td>
        <td> :</td>
        <td><div class="md-input-wrapper"><input id="Tc1Lainnya" name="Tc1Lainnya" class="md-input" type="text"><span class="md-input-bar"></span></div></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>Lama </td>
        <td> : </td>
        <td><input id="Tc2_anamnesis1" type="radio" name="Tc2" value="1" data-md-icheck=""> 0-6 Bulan</td>
        <td><input id="Tc2_anamnesis2" type="radio" name="Tc2" value="2" data-md-icheck=""> 6-12 Bulan</td>
        <td><input id="Tc2_anamnesis3" type="radio" name="Tc2" value="3" data-md-icheck=""> &gt;12 Bulan</td>
        </tr>
        <hr/>
        <tr> 
        <td>Pertama Kali Ke Dokter </td>
        <td> : </td>
        <td><input id="Tb1_anamnesis1" type="radio" name="Tb1" value="1" data-md-icheck=""> &lt; 6 Bulan </td>
        <td> <input id="Tb1_anamnesis2" type="radio" name="Tb1" value="2" data-md-icheck=""> &gt; 6 Bulan</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><input id="Tb2_anamnesis1" type="radio" name="Tb2" value="1" data-md-icheck=""> Dokter Umum </td>
        <td><input id="Tb2_anamnesis2" type="radio" name="Tb2" value="2" data-md-icheck=""> Dokter THT-KL </td>
        <td><input id="Tb2_anamnesis3" type="radio" name="Tb2" value="3" data-md-icheck=""> Lainnya</td>
        <td><div class="md-input-wrapper"><label> Lain - lain </label><input id="Tb2Lainnya" name="Tb2Lainnya" class="md-input" type="text" style="width: 30%;"><span class="md-input-bar"></span></div></td>
        </tr>
        <tr> 
        <td valign="top">Riwayat Penyakit Dahulu </td>
        <td valign="top"> : </td>
        <td>
            <input id="Tb21" type="checkbox" name="Tb21"> GERD <br>
            <input id="Tb22" type="checkbox" name="Tb22"> Barrett <br>
            <input id="Tb23" type="checkbox" name="Tb23"> Achalasia <br>
            <input id="Tb24" type="checkbox" name="Tb24"> Konsumsi Zat Korosif <br>
            <input id="Tb25" type="checkbox" name="Tb25"> Lainnya 
        </td>
        <td>
            <br><br><br><br><br>
            <div class="md-input-wrapper"><label> Lain - lain </label><input id="Tb25Lainnya" name="Tb25Lainnya" class="md-input" type="text" style="width: 30%;"><span class="md-input-bar"></span></div>
        </td>
        <td>
        </td>
        <td>&nbsp;</td>
        </tr>
        <hr/>
    </tbody></table>
</div>
<!--<div>  Neoplasma TELINGA
                    <div align="center"><H3> Neoplasma Telinga </h3></div><br>
                    <table width="100%">
                        <tr>HA. BENJOLAN DITELINGA
                        <td width="180" >Benjolan di Telinga </td>
                        <td> : </td>
                        <td width="120"><input id="Ha1_anamnesis1" type="radio" name="Ha1" value="1" data-md-icheck > Ya</td>
                        <td width="120"><input id="Ha1_anamnesis2" type="radio" name="Ha1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Ha2_anamnesis1" type="radio" name="Ha2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Ha2_anamnesis2" type="radio" name="Ha2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Ha3_anamnesis1" type="radio" name="Ha3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Ha3_anamnesis2" type="radio" name="Ha3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Ha3_anamnesis3" type="radio" name="Ha3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr>HB. KELUAR CAIRAN DI TELINGA
                        <td>Keluar Cairan di Telinga </td>
                        <td> : </td>
                        <td><input id="Hb1_anamnesis1" type="radio" name="Hb1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hb1_anamnesis2" type="radio" name="Hb1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hb2_anamnesis1" type="radio" name="Hb2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hb2_anamnesis2" type="radio" name="Hb2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hb3_anamnesis1" type="radio" name="Hb3" value="1" data-md-icheck > 0-6 Bulan</td>
                        <td><input id="Hb3_anamnesis2" type="radio" name="Hb3" value="2" data-md-icheck > 6-12 Bulan</td>
                        <td><input id="Hb3_anamnesis3" type="radio" name="Hb3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr>HC. PENURUNAN PENDENGARAN
                        <td>Penurunan Pendengaran </td>
                        <td> : </td>
                        <td><input id="Hc1_anamnesis1" type="radio" name="Hc1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hc1_anamnesis2" type="radio" name="Hc1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hc2_anamnesis1" type="radio" name="Hc2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hc2_anamnesis2" type="radio" name="Hc2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hc3_anamnesis1" type="radio" name="Hc3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Hc3_anamnesis2" type="radio" name="Hc3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Hc3_anamnesis3" type="radio" name="Hc3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr>HD. TELINGA TERASA PENUH
                        <td>Telinga Terasa Penuh </td>
                        <td> : </td>
                        <td><input id="Hd1_anamnesis1" type="radio" name="Hd1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hd1_anamnesis2" type="radio" name="Hd1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hd2_anamnesis1" type="radio" name="Hd2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hd2_anamnesis2" type="radio" name="Hd2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hd3_anamnesis1" type="radio" name="Hd3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Hd3_anamnesis2" type="radio" name="Hd3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Hd3_anamnesis3" type="radio" name="Hd3" value="3" data-md-icheck > >12 Bulan</td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr>HE. TELINGA BERBUNYI
                        <td>Telinga Berbunyi </td>
                        <td> : </td>
                        <td><input id="He1_anamnesis1" type="radio" name="He1" value="1" data-md-icheck > Ya</td>
                        <td><input id="He1_anamnesis2" type="radio" name="He1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="He2_anamnesis1" type="radio" name="He2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="He2_anamnesis2" type="radio" name="He2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="He3_anamnesis1" type="radio" name="He3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="He3_anamnesis2" type="radio" name="He3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="He3_anamnesis3" type="radio" name="He3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr> HF. PUSING BERPUTAR
                        <td>Pusing Berputar </td>
                        <td> : </td>
                        <td><input id="Hf1_anamnesis1" type="radio" name="Hf1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hf1_anamnesis2" type="radio" name="Hf1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hf2_anamnesis1" type="radio" name="Hf2" value="1" data-md-icheck > Kanan</td>
                        <td><input id="Hf2_anamnesis2" type="radio" name="Hf2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hf3_anamnesis1" type="radio" name="Hf3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Hf3_anamnesis2" type="radio" name="Hf3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Hf3_anamnesis3" type="radio" name="Hf3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr>HG. GANGGUAN KESEIMBANGAN
                        <td>Gangguan Keseimbangan </td>
                        <td> : </td>
                        <td><input id="Hg1_anamnesis1" type="radio" name="Hg1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hg1_anamnesis2" type="radio" name="Hg1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hg2_anamnesis1" type="radio" name="Hg2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hg2_anamnesis2" type="radio" name="Hg2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hg3_anamnesis1" type="radio" name="Hg3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Hg3_anamnesis2" type="radio" name="Hg3" value="2" data-md-icheck > 6-12 Bulan</td>
                        <td><input id="Hg3_anamnesis3" type="radio" name="Hg3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr>  HH. MUKA MENCONG 
                        <td>Muka Mencong </td>
                        <td> : </td>
                        <td><input id="Hh1_anamnesis1" type="radio" name="Hh1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hh1_anamnesis2" type="radio" name="Hh1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hh2_anamnesis1" type="radio" name="Hh2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hh2_anamnesis2" type="radio" name="Hh2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hh3_anamnesis1" type="radio" name="Hh3" value="1" data-md-icheck > 0-6 Bulan</td>
                        <td><input id="Hh3_anamnesis2" type="radio" name="Hh3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Hh3_anamnesis3" type="radio" name="Hh3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        <tr> HI. NYERI TELINGA
                        <td>Nyeri Telinga </td>
                        <td> : </td>
                        <td><input id="Hi1_anamnesis1" type="radio" name="Hi1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hi1_anamnesis2" type="radio" name="Hi1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hi2_anamnesis1" type="radio" name="Hi2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hi2_anamnesis2" type="radio" name="Hi2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hi3_anamnesis1" type="radio" name="Hi3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Hi3_anamnesis2" type="radio" name="Hi3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Hi3_anamnesis3" type="radio" name="Hi3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                        HJ. KELUAR DARAH DARI TELINGA
                        <tr> 
                        <td>Keluar Darah Dari Telinga </td>
                        <td> : </td>
                        <td><input id="Hj1_anamnesis1" type="radio" name="Hj1" value="1" data-md-icheck > Ya</td>
                        <td><input id="Hj1_anamnesis2" type="radio" name="Hj1" value="2" data-md-icheck > Tidak</td>
                        <td>&nbsp;</td>
                        </tr>
                        <tr>
                        <td>Lokasi </td>
                        <td> : </td>
                        <td><input id="Hj2_anamnesis1" type="radio" name="Hj2" value="1" data-md-icheck > Kanan </td>
                        <td><input id="Hj2_anamnesis2" type="radio" name="Hj2" value="2" data-md-icheck > Kiri </td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Lama </td>
                        <td> : </td>
                        <td><input id="Hj3_anamnesis1" type="radio" name="Hj3" value="1" data-md-icheck > 0-6 Bulan </td>
                        <td><input id="Hj3_anamnesis2" type="radio" name="Hj3" value="2" data-md-icheck > 6-12 Bulan </td>
                        <td><input id="Hj3_anamnesis3" type="radio" name="Hj3" value="3" data-md-icheck > >12 Bulan </td>
                        </tr>
                        <tr>
                            <td colspan="5"><hr></td>
                        </tr>
                    </table>
</div> -->
<!--</div>-->