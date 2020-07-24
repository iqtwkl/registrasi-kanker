<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:30
 */

namespace App\Http\Requests\Pasien;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required',
            'nama' => '',
            'kode_rs' => '',
            'no_rekam_medis' => '',
            'nama_orang_tua' => '',
            'tempat_lahir' => '',
            'tgl_lahir' => '',
            'pendidikan' => '',
            'pekerjaan' => '',
            'hamil' => '',
            'menyusui' => '',
            'rujuk' => '',
            'agama' => '',
            'perkawinan' => '',
            'keturunan' => '',
            'suku' => '',
            'asing' => '',
            'daerah' => '',
            'jalan' => '',
            'rt' => '',
            'rw' => '',
            'no' => '',
            'kode_telp' => '',
            'telp' => '',
            'kelurahan' => '',
            'kecamatan' => '',
            'kabupaten' => '',
            'provinsi' => '',
            'jalan_o' => '',
            'rt_o' => '',
            'rw_o' => '',
            'no_o' => '',
            'kode_telp_o' => '',
            'telp_o' => '',
            'kelurahan_o' => '',
            'kecamatan_o' => '',
            'kabupaten_o' => '',
            'provinsi_o' => ''
        ];
    }

    /**
     * Set custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [];
    }
}