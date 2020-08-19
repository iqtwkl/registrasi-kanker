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
        <label for="tgl_periksa">Tanggal Periksa</label>
        <input id="tgl_periksa" name="tgl_periksa" type="text" class="form-control" value="{{ old('tgl_periksa',$tanggal_periksa) }}">
    </div>
    <div class="form-group">
        <hr/>
    </div>
    <div class="form-row">
        <table class="col-lg-6">
            <tr>
                <td colspan="5">Rencana Terapi </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Rencana Terapi</td>
                <td colspan="3">
                    <input id="b4_1" type="radio" name="b4" value="1"> Operasi + Radioterapi / kemoterapi <br>
                    <input id="b4_2" type="radio" name="b4" value="2"> Radioterapi<br>
                    <input id="b4_3" type="radio" name="b4" value="3"> Kemoterapi <br>
                    <input id="b4_4" type="radio" name="b4" value="4"> Kemoradiasi <br>
                    <input id="b4_5" type="radio" name="b4" value="5"> Operasi <br>
                </td>
            </tr>
            <tr>
                <td colspan="5">Radioterapi </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jenis</td>
                <td colspan="3">
                    <input id="b5_1" type="radio" name="b5" value="1"> Cobalt <br>
                    <input id="b5_2" type="radio" name="b5" value="2"> 2D/3D <br>
                    <input id="b5_3" type="radio" name="b5" value="3"> IMRT <br>
                    <input id="b5_3" type="radio" name="b5" value="3"> Linac <br>
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Mulai</td>
                <td colspan="3">
                    <input id="b6" type="text" name="b6" class="form-control" value="{{ old('b6', $b6) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Selesai</td>
                <td colspan="3">
                    <input id="b7" type="text" name="b7" class="form-control" value="{{ old('b7', $b7) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Dosis</td>
                <td colspan="3">
                    <input id="b8" type="text" name="b8" class="form-control" value="{{ old('b8', $b8) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Frekuensi</td>
                <td colspan="3">
                    <input id="b9" type="text" name="b9" class="form-control" value="{{ old('b9', $b9) }}">
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Kemoterapi </td>
            </tr>
            <tr>
                <td colspan="5">Adjuvan kemoterapi </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Mulai</td>
                <td colspan="3">
                    <input id="b32" type="text" name="b32" class="form-control" value="{{ old('b32', $b32) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Selesai</td>
                <td colspan="3">
                    <input id="b33" type="text" name="b33" class="form-control" value="{{ old('b33', $b33) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Obat</td>
                <td colspan="3">
                    <input id="b34" type="text" name="b34" class="form-control" value="{{ old('b34', $b34) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Dosis</td>
                <td colspan="3">
                    <input id="b35" type="text" name="b35" class="form-control" value="{{ old('b35', $b35) }}">
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jumlah Pemberian</td>
                <td colspan="3">
                    <input id="b36_1" type="radio" name="b36" value="1" @if(old('b36', $b36) == '1') checked @endif> 3x <br>
                    <input id="b36_2" type="radio" name="b36" value="2" @if(old('b36', $b36) == '2') checked @endif> > 3x
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Neoadjuvan Kemoterapi </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Mulai</td>
                <td colspan="3">
                    <input id="b10" type="text" name="b10" class="form-control" value="{{ old('b10', $b10) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Selesai</td>
                <td colspan="3">
                    <input id="b11" type="text" name="b11" class="form-control" value="{{ old('b11', $b11) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Obat</td>
                <td colspan="3">
                    <input id="b12" type="text" name="b12" class="form-control" value="{{ old('b12', $b12) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Dosis</td>
                <td colspan="3">
                    <input id="b13" type="text" name="b13" class="form-control" value="{{ old('b13', $b13) }}">
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jumlah Pemberian</td>
                <td colspan="3">
                    <input id="b14_1" type="radio" name="b14" value="1" @if(old('b14', $b14) == '1') checked @endif> 3x <br>
                    <input id="b14_2" type="radio" name="b14" value="2" @if(old('b14', $b14) == '2') checked @endif> > 3x
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Konkomitan  kemoterapi</td>
            </tr>
            <tr>
                <td cols="2">Tanggal Mulai</td>
                <td colspan="3">
                    <input id="b37" type="text" name="b37" class="form-control" value="{{ old('b37', $b37) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Selesai</td>
                <td colspan="3">
                    <input id="b38" type="text" name="b38" class="form-control" value="{{ old('b38', $b38) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Obat</td>
                <td colspan="3">
                    <input id="b39" type="text" name="b39" class="form-control" value="{{ old('b39', $b39) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Dosis</td>
                <td colspan="3">
                    <input id="b40" type="text" name="b40" class="form-control" value="{{ old('b40', $b40) }}">
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jumlah Pemberian</td>
                <td colspan="3">
                    <input id="b41_1" type="radio" name="b41" value="1" @if(old('b41', $b41) == '1') checked @endif> 3x <br>
                    <input id="b41_2" type="radio" name="b41" value="2" @if(old('b41', $b41) == '2') checked @endif> > 3x
                </td>
            </tr>
            <tr>
                <td colspan="5">Konkuren kemoterapi</td>
            </tr>
            <tr>
                <td cols="2">Tanggal Mulai</td>
                <td colspan="3">
                    <input id="b47" type="text" name="b47" class="form-control" value="{{ old('b47', $b47) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Selesai</td>
                <td colspan="3">
                    <input id="b48" type="text" name="b48" class="form-control" value="{{ old('b48', $b48) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Obat</td>
                <td colspan="3">
                    <input id="b49" type="text" name="b49" class="form-control" value="{{ old('b49', $b49) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Dosis</td>
                <td colspan="3">
                    <input id="b50" type="text" name="b50" class="form-control" value="{{ old('b50', $b50) }}">
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jumlah Pemberian</td>
                <td colspan="3">
                    <input id="b51_1" type="radio" name="b51" value="1" @if(old('b51', $b51) == '1') checked @endif> 3x <br>
                    <input id="b51_2" type="radio" name="b51" value="2" @if(old('b51', $b51) == '2') checked @endif> > 3x
                </td>
            </tr>
            <tr>
                <td colspan="5">Terapi Target</td>
            </tr>
            <tr>
                <td cols="2">Tanggal Mulai</td>
                <td colspan="3">
                    <input id="b42" type="text" name="b42" class="form-control" value="{{ old('b42', $b42) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Selesai</td>
                <td colspan="3">
                    <input id="b43" type="text" name="b43" class="form-control" value="{{ old('b43', $b43) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Obat</td>
                <td colspan="3">
                    <input id="b44" type="text" name="b44" class="form-control" value="{{ old('b44', $b44) }}">
                </td>
            </tr>
            <tr>
                <td cols="2">Dosis</td>
                <td colspan="3">
                    <input id="b45" type="text" name="b45" class="form-control" value="{{ old('b45', $b50) }}">
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jumlah Pemberian</td>
                <td colspan="3">
                    <input id="46_1" type="radio" name="b46" value="1" @if(old('b46', $b46) == '1') checked @endif> 3x <br>
                    <input id="46_2" type="radio" name="b46" value="2" @if(old('b46', $b46) == '2') checked @endif> > 3x
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Operasi</td>
            </tr>
            <tr>
                <td cols="2" valign="top">Operasi</td>
                <td colspan="3">
                    <input id="b21_1" type="radio" name="b21" value="1" @if(old('b21', $b21) == '1') checked @endif> Ya <br>
                    <input id="b21_2" type="radio" name="b21" value="2" @if(old('b21', $b21) == '2') checked @endif> Tidak
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jumlah Pemberian</td>
                <td colspan="3">
                    <input id="b22a" type="checkbox" name="b22a" @if(old('b22a', $b22a) == '1') checked @endif> Maksilektomi <br>
                    <input id="b22b" type="checkbox" name="b22b" @if(old('b22b', $b22b) == '1') checked @endif> Parotidektomi <br>
                    <input id="b22c" type="checkbox" name="b22c" @if(old('b22c', $b22c) == '1') checked @endif> Mandibulektomi  <br>
                    <input id="b22d" type="checkbox" name="b22d" @if(old('b22d', $b22d) == '1') checked @endif> Laringektomi  <br>
                    <input id="b22i" type="checkbox" name="b22i" @if(old('b22i', $b22i) == '1') checked @endif> Eksenterasi Orbita  <br>
                    <input id="b22e" type="checkbox" name="b22e" @if(old('b22e', $b22e) == '1') checked @endif> Glosektomi  <br>
                    <input id="b22f" type="checkbox" name="b22f" @if(old('b22f', $b22f) == '1') checked @endif> Tiroidektomi  <br>
                    <input id="b22g" type="checkbox" name="b22g" @if(old('b22g', $b22g) == '1') checked @endif> Endoskopi approach <br>
                    <input id="b22h" type="checkbox" name="b22h" @if(old('b22h', $b22h) == '1') checked @endif> Nasofaringektomi <br>
                    <input id="b22j" type="checkbox" name="b22j" @if(old('b22j', $b22j) == '1') checked @endif> Eksisi Luas <br>
                    <input id="b22k" type="checkbox" name="b22k" @if(old('b22k', $b22k) == '1') checked @endif> Ekstirpasi Massa  <br>
                    <input id="b22p" type="checkbox" name="b22p" @if(old('b22p', $b22p) == '1') checked @endif> Rhinotomi lateral <br>
                    <input id="b22u" type="checkbox" name="b22u" @if(old('b22u', $b22u) == '1') checked @endif> Cryosurgery (bedah beku) <br>
                    <input id="b22v" type="checkbox" name="b22v" @if(old('b22v', $b22v) == '1') checked @endif> Lainnya
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top"></td>
                <td colspan="3">
                    <input id="b22_lainnya" name="b22_lainnya" placeholder="Sebutkan" type="text" class="form-control" value="{{ old('b22_lainnya', $b22_lainnya) }}" />
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td cols="2" valign="top">Diseksi Leher</td>
                <td colspan="3">
                    <input id="b23_1" type="radio" name="b23" value="1" @if(old('b23', $b23) == '1') checked @endif> Ya <br>
                    <input id="b23_2" type="radio" name="b23" value="2" @if(old('b23', $b23) == '2') checked @endif> Tidak
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Jika Ya, Pilih</td>
                <td colspan="3">
                    <input id="b24_1" type="radio" name="b24" value="1" @if(old('b24', $b23) == '1') checked @endif> Radikal <br>
                    <input id="b24_2" type="radio" name="b24" value="2" @if(old('b24', $b23) == '2') checked @endif> Radikal modifikas <br>
                    <input id="b24_3" type="radio" name="b24" value="3" @if(old('b24', $b23) == '3') checked @endif> Selektif
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td cols="2" valign="top">Follow up</td>
                <td colspan="3">
                    <input id="b25_1" type="radio" name="b25" value="1" @if(old('b25', $b25) == '1') checked @endif> <3 bulan &nbsp; <br>
                    <input id="b25_2" type="radio" name="b25" value="2" @if(old('b25', $b25) == '2') checked @endif> 6 bulan &nbsp; <br>
                    <input id="b25_3" type="radio" name="b25" value="3" @if(old('b25', $b25) == '3') checked @endif> >12 bulan &nbsp; <br>
                    <input id="b25_4" type="radio" name="b25" value="4" @if(old('b25', $b25) == '4') checked @endif> 3-6 bulan &nbsp;<br>
                    <input id="b25_5" type="radio" name="b25" value="5" @if(old('b25', $b25) == '5') checked @endif> 12 bulan
                </td>
            </tr>
            <tr>
                <td cols="2">Tanggal Kunjunagn Follow up</td>
                <td colspan="3">
                    <input id="b26" type="text" name="b26" class="form-control" value="{{ old('b26', $b26) }}">
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Keluhan</td>
                <td colspan="3">
                    <input id="b27_1" type="radio" name="b27" value="1" @if(old('b27', $b27) == '1') checked @endif> Ya <br>
                    <input id="b27_2" type="radio" name="b27" value="2" @if(old('b27', $b27) == '2') checked @endif> Tidak
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
            <tr>
                <td colspan="5">Klinis</td>
            </tr>
            <tr>
                <td cols="2" valign="top">No Respons</td>
                <td colspan="3">
                    <input id="b28_1" type="radio" name="b28" value="1" @if(old('b28', $b28) == '1') checked @endif> Ya <br>
                    <input id="b28_2" type="radio" name="b28" value="2" @if(old('b28', $b28) == '2') checked @endif> Tidak
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Partial Respons</td>
                <td colspan="3">
                    <input id="b29_1" type="radio" name="b29" value="1" @if(old('b29', $b29) == '1') checked @endif> Ya <br>
                    <input id="b29_2" type="radio" name="b29" value="2" @if(old('b29', $b29) == '2') checked @endif> Tidak
                </td>
            </tr>
            <tr>
                <td cols="2" valign="top">Komplit Respons</td>
                <td colspan="3">
                    <input id="b30_1" type="radio" name="b30" value="1" @if(old('b30', $b30) == '1') checked @endif> Ya <br>
                    <input id="b30_2" type="radio" name="b30" value="2" @if(old('b30', $b30) == '2') checked @endif> Tidak
                </td>
            </tr>
            <tr>
                <td colspan="5"></td>
            </tr>
        </table>
    </div>
    <div class="form_group">
        <button class="btn btn-primary" type="submit" name="save" id="save">{{ $button }}</button>
    </div>
</form>