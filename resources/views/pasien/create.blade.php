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
                    'nama' => '',
                    'kode_rs' => '',
                    'no_rekam_medis' => '',
                    'nama_orang_tua' => '',
                    'tempat_lahir' => '',
                    'tgl_lahir' => '',
                    'pendidikan' => '',
                    'pekerjaan' => '',
                    'hamil' => -1,
                    'menyusui' => -1,
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
                    'provinsi_o' => '',
                    'listRs' => [],
                    'listPendidikan' => [],
                    'listPekerjaan' => [],
                    'listAgama' => [],
                    'listPerkawinan' => [],
                    'button' => 'Simpan',
                    'action' => route('pasien.store')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection