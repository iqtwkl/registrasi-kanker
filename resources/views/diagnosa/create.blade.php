@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Diagnosa</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item "><a href="{{ route('diagnosa') }}">Diagnosa</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
                @include("pemeriksaan_penunjang.partials.form", [
                    'id' => '',
                    'nama_pasien' => '',
                    'id_pasien' => '',
                    'medrec' => '',
                    'kunjungan' => '',
                    'tanggal_periksa' => '',
                    'b1' => '',
                    'b2' => '',
                    'c1' => '',
                    'c16' => '',
                    'c2' => '',
                    'c17' => '',
                    'b31' => '',
                    'c3' => '',
                    'c4' => '',
                    'c5' => '',
                    'c18' => '',
                    'c6' => '',
                    'c7' => '',
                    'c8' => '',
                    'c9' => '',
                    'c10' => '',
                    'c11' => '',
                    'c12' => '',
                    'c13' => '',
                    'c14' => '',
                    'c19' => '',
                    'c20' => '',
                    'c22' => '',
                    'c15' => '',
                    'action' => route("diagnosa.store"),
                    'button' => trans('form.save')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection