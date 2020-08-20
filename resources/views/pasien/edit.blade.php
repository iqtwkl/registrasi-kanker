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
            @dump($pasien->getPendidikan());
            @include("pasien.partials.form", [
                    'id' => $pasien->getId(),
                    'no_rekam_medis' => $pasien->getNoRekamMedis(),
                    'nama' => $pasien->getNama(),
                    'nama_orang_tua' => $pasien->getNamaOrangTua(),
                    'tempat_lahir' => $pasien->getTempatLahir(),
                    'tgl_lahir' => $pasien->getTanggalLahir(),
                    'usia' => '',
                    'pendidikan' => $pasien->getPendidikan(),
                    'pekerjaan' => $pasien->getPekerjaan(),
                    'suku' => $pasien->getSuku(),
                    'jenis_kelamin' => $pasien->getJenisKelamin(),
                    'hamil' => $pasien->getHamilOriginal(),
                    'menyusui' => $pasien->getMenyusuiOriginal(),
                    'asing' => $pasien->getAsingOriginal(),
                    'kode_rs' => $pasien->getKodeRs(),
                    'agama' => $pasien->getAgama(),
                    'rujuk' => $pasien->getRujuk(),
                    'perkawinan' => $pasien->getPerkawinan(),
                    'anak' => $pasien->getAnak(),
                    'jalan' => $pasien->getJalan(),
                    'rt' => $pasien->getRt(),
                    'rw' => $pasien->getRw(),
                    'kelurahan' => $pasien->getKelurahan(),
                    'kecamatan' => $pasien->getKecamatan(),
                    'kabupaten' => $pasien->getKabupaten(),
                    'provinsi' => $pasien->getProvinsi(),
                    'telp' => $pasien->getTelepon(),
                    'handphone' => '',
                    'listRs' => $listRs,
                    'listPendidikan' => $listPendidikan,
                    'listPekerjaan' => $listPekerjaan,
                    'listAgama' => $listAgama,
                    'listPerkawinan' => $listPerkawinan,
                    'listDirujuk' => $listDirujuk,
                    'listJumlahAnak' => $listJumlahAnak,
                    'button' => trans('Simpan'),
                    'action' => route('pasien.update')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection