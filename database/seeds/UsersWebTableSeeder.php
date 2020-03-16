<?php

use Illuminate\Database\Seeder;

class UsersWebTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = json_decode(file_get_contents(storage('database/UserData.json')));
        foreach($contents as $content) {
            DB::table('users')->insert([
                'id' => $content->id_user,
                'nama' => $content->nama_user,
                'email' => $content->email,
                'password' => $content->password,
                'parent' => $content->parent,
                'hak_akses' => $content->hak_akses
            ]);
        }
    }
}
