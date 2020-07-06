<?php

use Illuminate\Database\Seeder;

class DiagnosaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = json_decode(file_get_contents(storage_path('database/diagnosa.json')));
        foreach($contents as $content) {
            DB::table('diagnosa')->insert([
                "id"=> $content->id_pemeriksaan_diagnosis,
                "id_pasien"=> $content->id_pasien,
                "kunjungan"=> intval($content->kunjungan),
                "tglPeriksa"=> $content->tgl_periksa,
                "medrec"=> $content->medrec,
                "b1"=> $content->b1,
                "b2"=> $content->b2,
                "b31"=>$content->b31,
                "c1"=> $content->c1,
                "c2"=> $content->c2,
                "c3"=> $content->c3,
                "c4"=> $content->c4,
                "c5"=> $content->c5,
                "c6"=> $content->c6,
                "c7"=> $content->c7,
                "c8"=> $content->c8,
                "c9"=> $content->c9,
                "c10"=>$content->c10,
                "c11"=>$content->c11,
                "c12"=>$content->c12,
                "c13"=>$content->c13,
                "c14"=>$content->c14,
                "c15"=>$content->c15,
                "c16"=>$content->c16,
                "c17"=>$content->c17,
                "c18"=>$content->c18,
                "c19"=>$content->c19,
                "c20"=>$content->c20,
                "c21"=>$content->c21,
                "c22"=>$content->c22,             
                "created_by" => $content->user_id,
                "last_updated_by" => $content->user_id,
            ]);
        }
    }
}
