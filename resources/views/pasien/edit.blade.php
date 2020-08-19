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
                <li class="breadcrumb-item active" aria-current="page">Edit</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            @include("pasien.partials.form", [
                    'id' => $pasien->getId(),
                    'nama' => $pasien->getNama(),
                    'kode_rs' => $pasien->rumahSakit()->getKode(),
                    'no_rekam_medis' => $pasien->getNoRekamMedis(),
                    'nama_orang_tua' => $pasien->getNamaOrangTua(),
                    'tempat_lahir' => $pasien->getTempatLahir(),
                    'tgl_lahir' => $pasien->getTanggalLahir(),
                    'pendidikan' => $pasien->getPendidikan(),
                    'pekerjaan' => $pasien->getPekerjaan(),
                    'hamil' => $pasien->getHamilOriginal(),
                    'menyusui' => $pasien->getMenyusuiOriginal(),
                    'rujuk' => $pasien->getRujuk(),
                    'agama' => $pasien->getAgama(),
                    'perkawinan' => $pasien->getPerkawinan(),
                    'keturunan' => $pasien->getKeturunan(),
                    'suku' => $pasien->getSuku(),
                    'jenis_kelamin' => '',
                    'asing' => $pasien->getAsing(),
                    'daerah' => $pasien->getDaerah(),
                    'usia' => '',
                    'jalan' => $pasien->getJalan(),
                    'rt' => $pasien->getRt(),
                    'rw' => $pasien->getRw(),
                    'no' => $pasien->getNo(),
                    'kode_telp' => $pasien->getKodeTelpon(),
                    'handphone' => '',
                    'telp' => $pasien->getTelepon(),
                    'kelurahan' => $pasien->getKelurahan(),
                    'kecamatan' => $pasien->getKecamatan(),
                    'kabupaten' => $pasien->getKabupaten(),
                    'provinsi' => $pasien->getProvinsi(),
                    'jalan_o' => $pasien->getJalanO(),
                    'rt_o' => $pasien->getRtO(),
                    'rw_o' => $pasien->getRwO(),
                    'no_o' => $pasien->getNoO(),
                    'kode_telp_o' => $pasien->getKodeTelponO(),
                    'telp_o' => $pasien->getTeleponO(),
                    'kelurahan_o' => $pasien->getKelurahanO(),
                    'kecamatan_o' => $pasien->getKecamatanO(),
                    'kabupaten_o' => $pasien->getKabupatenO(),
                    'provinsi_o' => $pasien->getProvinsiO(),
                    'listRs' => [],
                    'listPendidikan' => [],
                    'listPekerjaan' => [],
                    'listAgama' => [],
                    'listPerkawinan' => [],
                    'listDirujuk' => [],
                    'listJumlahAnak' => [],
                    'button' => 'Perbarui',
                    'action' => route('pasien.update')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection