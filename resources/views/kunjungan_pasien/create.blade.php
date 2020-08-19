@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Kunjungan Pasien</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page" href="{{ route('kunjungan-pasien') }}">Kunjungan Pasien<</li>
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
                'tanggal_kunjungan' => '',
                'action' => '',
                'button' => trans('form.save')
            ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection