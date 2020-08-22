@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Pasien</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item "><a href="{{ route('pasien') }}">Pasien</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            @include("pasien.partials.form", [
                    'id' => 0,
                    'no_rekam_medis' => '',
                    'nama' => '',
                    'nama_orang_tua' => '',
                    'tempat_lahir' => '',
                    'tgl_lahir' => '',
                    'usia' => '',
                    'pendidikan' => '',
                    'pekerjaan' => '',
                    'suku' => '',
                    'jenis_kelamin' => '',
                    'hamil' => '',
                    'menyusui' => '',
                    'asing' => '',
                    'kode_rs' => '',
                    'agama' => '',
                    'rujuk' => '',
                    'perkawinan' => '',
                    'anak' => '',
                    'jalan' => '',
                    'rt' => '',
                    'rw' => '',
                    'kelurahan' => '',
                    'kecamatan' => '',
                    'kabupaten' => '',
                    'provinsi' => '',
                    'telp' => '',
                    'handphone' => '',
                    'listRs' => $listRs,
                    'listPendidikan' => $listPendidikan,
                    'listPekerjaan' => $listPekerjaan,
                    'listAgama' => $listAgama,
                    'listPerkawinan' => $listPerkawinan,
                    'listDirujuk' => $listDirujuk,
                    'listJumlahAnak' => $listJumlahAnak,
                    'action' => route('pasien.store'),
                    'button' => trans('Simpan')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection