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
                    'a1' => '',
                    'a2' => '',
                    'a3' => '',
                    'a7' => '',
                    'a7a' => '',
                    'a62' => '',
                    'a63' => '',
                    'a64' => '',
                    'a65' => '',
                    'a66' => '',
                    'a5' => '',
                    'a4a' => '',
                    'a9' => '',
                    'a10' => '',
                    'a11' => '',
                    'a12' => '',
                    'a13' => '',
                    'a15' => '',
                    'a67' => '',
                    'a16' => '',
                    'a17' => '',
                    'a18' => '',
                    'a19' => '',
                    'a20' => '',
                    'a201' => '',
                    'a202' => '',
                    'a203' => '',
                    'a20a' => '',
                    'a21' => '',
                    'a22' => '',
                    'a23' => '',
                    'a24' => '',
                    'a241' => '',
                    'a242' => '',
                    'a243' => '',
                    'a24a' => '',
                    'a25' => '',
                    'a26' => '',
                    'a27' => '',
                    'a28' => '',
                    'a281' => '',
                    'a282' => '',
                    'a283' => '',
                    'a28a' => '',
                    'a29' => '',
                    'a30' => '',
                    'a31' => '',
                    'a32' => '',
                    'a321' => '',
                    'a322' => '',
                    'a323' => '',
                    'a32a' => '',
                    'a33' => '',
                    'a34' => '',
                    'a35' => '',
                    'a36' => '',
                    'a361' => '',
                    'a362' => '',
                    'a363' => '',
                    'a36a' => '',
                    'a37' => '',
                    'a38' => '',
                    'a39' => '',
                    'a40' => '',
                    'a401' => '',
                    'a402' => '',
                    'a403' => '',
                    'a40a' => '',
                    'a41' => '',
                    'a42' => '',
                    'a43' => '',
                    'a44' => '',
                    'a441' => '',
                    'a442' => '',
                    'a443' => '',
                    'a44a' => '',
                    'a45' => '',
                    'a57' => '',
                    'a58' => '',
                    'a59' => '',
                    'a60' => '',
                    'a601' => '',
                    'a602' => '',
                    'a603' => '',
                    'a60a' => '',
                    'a45a' => '',
                    'a48' => '',
                    'a49' => '',
                    'a50' => '',
                    'a51' => '',
                    'a52' => '',
                    'a53' => '',
                    'a54' => '',
                    'a55' => '',
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