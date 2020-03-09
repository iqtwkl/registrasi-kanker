<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PasienTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pasien')->insert([
            'id' => Str::uuid()->toString(),
            'nama' => 'Pasien Nomor Satu',
            'kode_rs' => 'rs1',
            'no_rekam_medis' => Str::uuid()->toString(),
            'tempat_lahir' => 'Bandung',
            'tgl_lahir' => date('Y-m-d',730080000),
            'id_rs' => '0',
            'nama_orang_tua' => '0',
            'pendidikan' => '0',
            'pekerjaan' => '0',
            'hamil' => '0',
            'menyusui' => '0',
            'rujuk' => '0',
            'agama' => '0',
            'perkawinan' => '0',
            'anak' => '0',
            'keturunan' => '0',
            'suku' => '0',
            'asing' => '0',
            'daerah' => '0',
            'jalan' => '0',
            'rt' => '0',
            'rw' => '0',
            'no' => '0',
            'kode_telp' => '0',
            'telp' => '0',
            'kelurahan' => '0',
            'kecamatan' => '0',
            'provinsi' => '0',
            'kabupaten' => '0',
            'jalan_o' => '0',
            'rt_o' => '0',
            'rw_o' => '0',
            'no_o' => '0',
            'kode_telp_o' => '0',
            'telp_o' => '0',
            'kelurahan_o' => '0',
            'kecamatan_o' => '0',
            'provinsi_o' => '0',
            'kabupaten_o' => '0',
        ]);
        DB::table('pasien')->insert([
            'id' => Str::uuid()->toString(),
            'nama' => 'Pasien Nomor Dua',
            'kode_rs' => 'rs1',
            'no_rekam_medis' => Str::uuid()->toString(),
            'tempat_lahir' => 'Bandung',
            'tgl_lahir' => date('Y-m-d',73010000),
            'id_rs' => '0',
            'nama_orang_tua' => '0',
            'pendidikan' => '0',
            'pekerjaan' => '0',
            'hamil' => '0',
            'menyusui' => '0',
            'rujuk' => '0',
            'agama' => '0',
            'perkawinan' => '0',
            'anak' => '0',
            'keturunan' => '0',
            'suku' => '0',
            'asing' => '0',
            'daerah' => '0',
            'jalan' => '0',
            'rt' => '0',
            'rw' => '0',
            'no' => '0',
            'kode_telp' => '0',
            'telp' => '0',
            'kelurahan' => '0',
            'kecamatan' => '0',
            'provinsi' => '0',
            'kabupaten' => '0',
            'jalan_o' => '0',
            'rt_o' => '0',
            'rw_o' => '0',
            'no_o' => '0',
            'kode_telp_o' => '0',
            'telp_o' => '0',
            'kelurahan_o' => '0',
            'kecamatan_o' => '0',
            'provinsi_o' => '0',
            'kabupaten_o' => '0',
        ]);
    }
}
