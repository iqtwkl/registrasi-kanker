<?php

use Illuminate\Database\Seeder;

class RSWebTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = json_decode(file_get_contents('database\seeds\RSData.json'));
        foreach($contents as $content) {
            DB::table('users')->insert([
                'id' => $content->id,
                'kode' => $content->kode,
                'nama' => $content->nama,
                'alamat' => $content->alamat
            ]);
        }
    }
}
