<?php

use Illuminate\Database\Seeder;

class PasienWebTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = json_decode(file_get_contents(storage_path('database/PasienData.json')));
        foreach($contents as $content) {
            DB::table('pasien')->insert([
                'id' => $content->id_pasien,
                'nama' => $content->nama_pasien,
                'kode_rs' => $content->kode_rs,
                'no_rekam_medis' => $content->noRekamMedis,
                'tempat_lahir' => $content->tempatLahir,
                'tgl_lahir' => date("Y-m-d", strtotime($content->tglLahir)),
                'nama_orang_tua' => $content->namaOrangTua,
                'pendidikan' => is_null($content->pendidikan) ? "0": $content->pendidikan,
                'pekerjaan' => is_null($content->pekerjaan) ? "0": $content->pekerjaan,
                'hamil' => is_null($content->hamil) ? "0": $content->hamil,
                'menyusui' => is_null($content->menyusui) ? "0": $content->menyusui,
                'rujuk' => is_null($content->rujuk) ? "0": $content->rujuk,
                'agama' => is_null($content->agama) ? "0": $content->agama,
                'perkawinan' => is_null($content->perkawinan) ? "0": $content->perkawinan,
                'anak' => is_null($content->anak) ? "0": $content->anak,
                'keturunan' => is_null($content->keturunan) ? "0": $content->keturunan,
                'suku' => is_null($content->suku) ? "0": $content->suku,
                'asing' => is_null($content->asing) ? "0": $content->asing,
                'daerah' => is_null($content->daerah) ? "0": $content->daerah,
                'jalan' => is_null($content->aJalan) ? "0": $content->aJalan,
                'rt' => is_null($content->aRt) ? "0": $content->aRt,
                'rw' => is_null($content->aRw) ? "0": $content->aRw,
                'no' => is_null($content->aNo) ? "0": $content->aNo,
                'kode_telp' => is_null($content->aKodeTelp) ? "0": $content->aKodeTelp,
                'telp' => is_null($content->aTelp) ? "0": $content->aTelp,
                'kelurahan' => is_null($content->aKelurahan) ? "0": $content->aKelurahan,
                'kecamatan' => is_null($content->aKecamatan) ? "0": $content->aKecamatan,
                'provinsi' => is_null($content->aProvinsi) ? "0": $content->aProvinsi,
                'kabupaten' => is_null($content->aKabupaten) ? "0": $content->aKabupaten,
                'jalan_o' => is_null($content->jJalan) ? "0": $content->jJalan,
                'rt_o' => is_null($content->jRt) ? "0": $content->jRt,
                'rw_o' => is_null($content->jRw) ? "0": $content->jRw,
                'no_o' => is_null($content->jNo) ? "0": $content->jNo,
                'kode_telp_o' => "0",
                'telp_o' => is_null($content->jTelp) ? "0": $content->jTelp,
                'kelurahan_o' => is_null($content->jKelurahan) ? "0": $content->jKelurahan,
                'kecamatan_o' => is_null($content->jKecamatan) ? "0": $content->jKecamatan,
                'provinsi_o' => is_null($content->aProvinsi) ? "0": $content->aProvinsi,
                'kabupaten_o' => is_null($content->aKabupaten) ? "0": $content->aKabupaten,
            ]);
        }
    }
}
