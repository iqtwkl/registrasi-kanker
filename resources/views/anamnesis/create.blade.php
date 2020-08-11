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
                    'id' => '',
                    'nama_pasien' => '',
                    'id_pasien' => '',
                    'medrec' => '',
                    'kunjungan' => '',
                    'tanggal_periksa' => '',
                    'ka1' => '',
                    'ka2' => '',
                    'ka3' => '',
                    'ka4' => '',
                    'kb1' => '',
                    'kb2' => '',
                    'kb3' => '',
                    'kb4' => '',
                    'kc1' => '',
                    'kc2' => '',
                    'kd1' => '',
                    'kd2' => '',
                    'kd3' => '',
                    'ke1' => '',
                    'ke2' => '',
                    'kf1' => '',
                    'kg1' => '',
                    'kh1' => '',
                    'la' => '',
                    'ja1' => '',
                    'ja2' => '',
                    'ja2lainnya' => '',
                    'ja3' => '',
                    'ja3lainnya' => '',
                    'la1' => '',
                    'lb1' => '',
                    'lb1lainnya' => '',
                    'la3' => '',
                    'bc1' => '',
                    'bc2' => '',
                    'bc3' => '',
                    'bf1' => '',
                    'bf2' => '',
                    'bf3' => '',
                    'bb1' => '',
                    'bb2' => '',
                    'bb3' => '',
                    'bk1' => '',
                    'bk2' => '',
                    'bk3' => '',
                    'ba1' => '',
                    'ba2' => '',
                    'ba3' => '',
                    'bd1' => '',
                    'bd2' => '',
                    'bd3' => '',
                    'be1' => '',
                    'be2' => '',
                    'be3' => '',
                    'bj1' => '',
                    'bj2' => '',
                    'bj3' => '',
                    'bg1' => '',
                    'bg2' => '',
                    'bg3' => '',
                    'bh1' => '',
                    'bh2' => '',
                    'bh3' => '',
                    'bi1' => '',
                    'bi3' => '',
                    'ab1' => '',
                    'ab2' => '',
                    'ab3' => '',
                    'ac1' => '',
                    'ac2' => '',
                    'ac3' => '',
                    'ae1' => '',
                    'ae3' => '',
                    'ad1' => '',
                    'ad2' => '',
                    'ad3' => '',
                    'ai1' => '',
                    'ai2' => '',
                    'ai3' => '',
                    'aj1' => '',
                    'aj2' => '',
                    'aj3' => '',
                    'ag1' => '',
                    'ag2' => '',
                    'ag3' => '',
                    'action' => ''
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection