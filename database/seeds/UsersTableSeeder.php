<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => "991a75ce-6124-11ea-bc55-0242ac130003",
            'nama' => 'admin',
            'email' => 'admin@mail.com',
            'password' => md5('password'),
            'parent' => '0',
            'hak_akses' => 0
        ]);
        DB::table('users')->insert([
            'id' => "991a75ce-6124-11ea-bc55-0242ac130004",
            'nama' => 'Rumah Sakit A',
            'email' => 'rsa@mail.com',
            'password' => md5('password'),
            'parent' => '0',
            'hak_akses' => 0
        ]);
        DB::table('users')->insert([
            'id' => "991a75ce-6124-11ea-bc55-0242ac130005",
            'nama' => 'Rumah Sakit B',
            'email' => 'rsb@mail.com',
            'password' => md5('password'),
            'parent' => '0',
            'hak_akses' => 0
        ]);
    }
}
