@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Anamnesis</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item "><a href="{{ route('anamnesis') }}">Anamnesis</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            @include("anamnesis.partials.form", [
                    'id' => ''.'getId()',
                    'nama_pasien' => ''.'getPasien()->getNama()',
                    'id_pasien' => ''.'getPasien()->getId()',
                    'medrec' => ''.'getPasien()->getMedrec()',
                    'kunjungan' => ''.'getKunjungan()',
                    'tanggal_periksa' => ''.'getTanggalPeriksa()',
                    'ka1' => ''.'getKa1()',
                    'ka2' => ''.'getKa2()',
                    'ka3' => ''.'getKa3()',
                    'ka4' => ''.'getKa4()',
                    'kb1' => ''.'getKb1()',
                    'kb2' => ''.'getKb2()',
                    'kb3' => ''.'getKb3()',
                    'kb4' => ''.'getKb4()',
                    'kc1' => ''.'getKc1()',
                    'kc2' => ''.'getKc2()',
                    'kd1' => ''.'getKd1()',
                    'kd2' => ''.'getKd2()',
                    'kd3' => ''.'getKd3()',
                    'ke1' => ''.'getKe1()',
                    'ke2' => ''.'getKe2()',
                    'kf1' => ''.'getKf1()',
                    'kg1' => ''.'getKg1()',
                    'kh1' => ''.'getKh1()',
                    'la' => ''.'getLa()',
                    'ja1' => ''.'getJa1()',
                    'ja2' => ''.'getKa2()',
                    'ja2lainnya' => ''.'getJa2Lainnya()',
                    'ja3' => ''.'getJa3()',
                    'ja3lainnya' => ''.'getJa3Lainnya()',
                    'la1' => ''.'getLa1()',
                    'lb1' => ''.'getLb1()',
                    'lb1lainnya' => ''.'getLb1Lainnya()',
                    'la3' => ''.'getLa3()',
                    'bc1' => ''.'getBc1()',
                    'bc2' => ''.'getBc2()',
                    'bc3' => ''.'getBc3()',
                    'bf1' => ''.'getBf1()',
                    'bf2' => ''.'getBf2()',
                    'bf3' => ''.'getBf3()',
                    'bb1' => ''.'getBb1()',
                    'bb2' => ''.'getBb2()',
                    'bb3' => ''.'getBb3()',
                    'bk1' => ''.'getBk1()',
                    'bk2' => ''.'getBk2()',
                    'bk3' => ''.'getBk3()',
                    'ba1' => ''.'getBa1()',
                    'ba2' => ''.'getBa2()',
                    'ba3' => ''.'getBa3()',
                    'bd1' => ''.'getBd1()',
                    'bd2' => ''.'getBd2()',
                    'bd3' => ''.'getBd3()',
                    'be1' => ''.'getBe1()',
                    'be2' => ''.'getBe2()',
                    'be3' => ''.'getBe3()',
                    'bj1' => ''.'getBj1()',
                    'bj2' => ''.'getBj2()',
                    'bj3' => ''.'getBj3()',
                    'bg1' => ''.'getBg1()',
                    'bg2' => ''.'getBg2()',
                    'bg3' => ''.'getBg3()',
                    'bh1' => ''.'getBh1()',
                    'bh2' => ''.'getBh2()',
                    'bh3' => ''.'getBh3()',
                    'bi1' => ''.'getBi1()',
                    'bi3' => ''.'getBi3()',
                    'ab1' => ''.'getAb1()',
                    'ab2' => ''.'getAb2()',
                    'ab3' => ''.'getAb3()',
                    'ac1' => ''.'getAc1()',
                    'ac2' => ''.'getAc2()',
                    'ac3' => ''.'getAc3()',
                    'ae1' => ''.'getAe1()',
                    'ae3' => ''.'getAe3()',
                    'ad1' => ''.'getAd1()',
                    'ad2' => ''.'getAd2()',
                    'ad3' => ''.'getAd3()',
                    'ai1' => ''.'getAi1()',
                    'ai2' => ''.'getAi2()',
                    'ai3' => ''.'getAi3()',
                    'aj1' => ''.'getAj1()',
                    'aj2' => ''.'getAj2()',
                    'aj3' => ''.'getAj3()',
                    'ag1' => ''.'getAg1()',
                    'ag2' => ''.'getAg2()',
                    'ag3' => ''.'getAg3()',
                    'action' => ''
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection