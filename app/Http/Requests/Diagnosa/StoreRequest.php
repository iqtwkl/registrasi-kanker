<?php
/**
 * Created by PhpStorm.
 * User: TMPCZuliansyah
 * Date: 06/02/2020
 * Time: 15:59
 */


namespace App\Http\Requests\Diagnosa;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest{
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