@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Pemeriksaan Penunjang</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item "><a href="{{ route('pemeriksaan-penunjang') }}">Pemeriksaan Penunjang</a></li>
                <li class="breadcrumb-item active" aria-current="page">Edit</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            @include("pemeriksaan_penunjang.partials.form", [
                    'id' => $pemeriksaanPenunjang->getId(),
                    'nama_pasien' => $pemeriksaanPenunjang->getPasien()->getNama(),
                    'id_pasien' => $pemeriksaanPenunjang->getPasien()->getId(),
                    'medrec' => $pemeriksaanPenunjang->getPasien()->getMedrec(),
                    'kunjungan' => $pemeriksaanPenunjang->getKunjungan(),
                    'tanggal_periksa' => $pemeriksaanPenunjang->getTanggalPeriksa(),
                    'a1' => $pemeriksaanPenunjang->getA1(),
                    'a2' => $pemeriksaanPenunjang->getA2(),
                    'a3' => $pemeriksaanPenunjang->getA3(),
                    'a7' => $pemeriksaanPenunjang->getA7(),
                    'a7a' => $pemeriksaanPenunjang->getA7a(),
                    'a62' => $pemeriksaanPenunjang->getA62(),
                    'a63' => $pemeriksaanPenunjang->getA63(),
                    'a64' => $pemeriksaanPenunjang->getA64(),
                    'a65' => $pemeriksaanPenunjang->getA65(),
                    'a66' => $pemeriksaanPenunjang->getA66(),
                    'a5' => $pemeriksaanPenunjang->getA5(),
                    'a4a' => $pemeriksaanPenunjang->getA4a(),
                    'a9' => $pemeriksaanPenunjang->getA9(),
                    'a10' => $pemeriksaanPenunjang->getA10(),
                    'a11' => $pemeriksaanPenunjang->getA11(),
                    'a12' => $pemeriksaanPenunjang->getA12(),
                    'a13' => $pemeriksaanPenunjang->getA13(),
                    'a15' => $pemeriksaanPenunjang->getA15(),
                    'a67' => $pemeriksaanPenunjang->getA67(),
                    'a16' => $pemeriksaanPenunjang->getA16(),
                    'a17' => $pemeriksaanPenunjang->getA17(),
                    'a18' => $pemeriksaanPenunjang->getA18(),
                    'a19' => $pemeriksaanPenunjang->getA19(),
                    'a20' => $pemeriksaanPenunjang->getA20(),
                    'a201' => $pemeriksaanPenunjang->getA201(),
                    'a202' => $pemeriksaanPenunjang->getA202(),
                    'a203' => $pemeriksaanPenunjang->getA203(),
                    'a20a' => $pemeriksaanPenunjang->getA20a(),
                    'a21' => $pemeriksaanPenunjang->getA21(),
                    'a22' => $pemeriksaanPenunjang->getA22(),
                    'a23' => $pemeriksaanPenunjang->getA23(),
                    'a24' => $pemeriksaanPenunjang->getA24(),
                    'a241' => $pemeriksaanPenunjang->getA241(),
                    'a242' => $pemeriksaanPenunjang->getA242(),
                    'a243' => $pemeriksaanPenunjang->getA243(),
                    'a24a' => $pemeriksaanPenunjang->getA24a(),
                    'a25' => $pemeriksaanPenunjang->getA25(),
                    'a26' => $pemeriksaanPenunjang->getA26(),
                    'a27' => $pemeriksaanPenunjang->getA27(),
                    'a28' => $pemeriksaanPenunjang->getA28(),
                    'a281' => $pemeriksaanPenunjang->getA281(),
                    'a282' => $pemeriksaanPenunjang->getA282(),
                    'a283' => $pemeriksaanPenunjang->getA283(),
                    'a28a' => $pemeriksaanPenunjang->getA28a(),
                    'a29' => $pemeriksaanPenunjang->getA29(),
                    'a30' => $pemeriksaanPenunjang->getA30(),
                    'a31' => $pemeriksaanPenunjang->getA31(),
                    'a32' => $pemeriksaanPenunjang->getA32(),
                    'a321' => $pemeriksaanPenunjang->getA321(),
                    'a322' => $pemeriksaanPenunjang->getA322(),
                    'a323' => $pemeriksaanPenunjang->getA323(),
                    'a32a' => $pemeriksaanPenunjang->getA32a(),
                    'a33' => $pemeriksaanPenunjang->getA33(),
                    'a34' => $pemeriksaanPenunjang->getA34(),
                    'a35' => $pemeriksaanPenunjang->getA35(),
                    'a36' => $pemeriksaanPenunjang->getA36(),
                    'a361' => $pemeriksaanPenunjang->getA361(),
                    'a362' => $pemeriksaanPenunjang->getA362(),
                    'a363' => $pemeriksaanPenunjang->getA363(),
                    'a36a' => $pemeriksaanPenunjang->getA36a(),
                    'a37' => $pemeriksaanPenunjang->getA37(),
                    'a38' => $pemeriksaanPenunjang->getA38(),
                    'a39' => $pemeriksaanPenunjang->getA39(),
                    'a40' => $pemeriksaanPenunjang->getA40(),
                    'a401' => $pemeriksaanPenunjang->getA401(),
                    'a402' => $pemeriksaanPenunjang->getA402(),
                    'a403' => $pemeriksaanPenunjang->getA403(),
                    'a40a' => $pemeriksaanPenunjang->getA40a(),
                    'a41' => $pemeriksaanPenunjang->getA41(),
                    'a42' => $pemeriksaanPenunjang->getA42(),
                    'a43' => $pemeriksaanPenunjang->getA43(),
                    'a44' => $pemeriksaanPenunjang->getA44(),
                    'a441' => $pemeriksaanPenunjang->getA441(),
                    'a442' => $pemeriksaanPenunjang->getA442(),
                    'a443' => $pemeriksaanPenunjang->getA443(),
                    'a44a' => $pemeriksaanPenunjang->getA44a(),
                    'a45' => $pemeriksaanPenunjang->getA45(),
                    'a57' => $pemeriksaanPenunjang->getA57(),
                    'a58' => $pemeriksaanPenunjang->getA58(),
                    'a59' => $pemeriksaanPenunjang->getA59(),
                    'a60' => $pemeriksaanPenunjang->getA60(),
                    'a601' => $pemeriksaanPenunjang->getA601(),
                    'a602' => $pemeriksaanPenunjang->getA602(),
                    'a603' => $pemeriksaanPenunjang->getA603(),
                    'a60a' => $pemeriksaanPenunjang->getA60a(),
                    'a45a' => $pemeriksaanPenunjang->getA45a(),
                    'a48' => $pemeriksaanPenunjang->getA48(),
                    'a49' => $pemeriksaanPenunjang->getA49(),
                    'a50' => $pemeriksaanPenunjang->getA50(),
                    'a51' => $pemeriksaanPenunjang->getA51(),
                    'a52' => $pemeriksaanPenunjang->getA52(),
                    'a53' => $pemeriksaanPenunjang->getA53(),
                    'a54' => $pemeriksaanPenunjang->getA54(),
                    'a55' => $pemeriksaanPenunjang->getA55(),
                    'action' => route("pemeriksaan-penunjang.update"),
                    'button' => trans('form.save')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection