@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Pemeriksaan Fisik</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item "><a href="{{ route('pemeriksaan-fisik') }}">Pemeriksaan Fisik</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            @include("pemeriksaan_fisik.partials.form", [
                    'id' => '',
                    'nama_pasien' => '',
                    'id_pasien' => '',
                    'medrec' => '',
                    'kunjungan' => '',
                    'tanggal_periksa' => '',
                    'td' => '',
                    'mmhg' => '',
                    'nadi_menit' => '',
                    'tinggi_badan' => '',
                    'berat_badan' => '',
                    'kesadaran' => '',
                    'ks1' => '',
                    'ks66' => '',
                    'sl1' => '',
                    'sl1a' => '',
                    'sl3' => '',
                    'sl3a' => '',
                    'sl2' => '',
                    'sl2a' => '',
                    'sl4' => '',
                    'sl4a' => '',
                    'sl5' => '',
                    'sl5a' => '',
                    'sl6' => '',
                    'sl6a' => '',
                    'sl24' => '',
                    'sl24a' => '',
                    'sl7' => '',
                    'sl7a' => '',
                    'sl8' => '',
                    'sl8a' => '',
                    'sl9' => '',
                    'sl9a' => '',
                    'sl10' => '',
                    'sl10a' => '',
                    'ks30' => '',
                    'ks31' => '',
                    'ks32' => '',
                    'ks34' => '',
                    'ks36' => '',
                    'ks38' => '',
                    'ks42' => '',
                    'ks60' => '',
                    'ks64' => '',
                    'ks20' => '',
                    'ks21' => '',
                    'ks18' => '',
                    'ks19' => '',
                    'ks22' => '',
                    'ks23' => '',
                    'ks62' => '',
                    'ks63' => '',
                    'ks26' => '',
                    'ks27' => '',
                    'ks28' => '',
                    'ks24' => '',
                    'ks67' => '',
                    'ks57' => '',
                    'ks68' => '',
                    'ks70' => '',
                    'ks69a' => '',
                    'ks69b' => '',
                    'ks69c' => '',
                    'ks69d' => '',
                    'ks69e' => '',
                    'ks69f' => '',
                    'ks69g' => '',
                    'ks69h' => '',
                    'ks69i' => '',
                    'ks69j' => '',
                    'ks69k' => '',
                    'ks69l' => '',
                    'sl11' => '',
                    'sl12' => '',
                    'sl13' => '',
                    'sl14' => '',
                    'sl15' => '',
                    'sl16' => '',
                    'sl17' => '',
                    'sl18' => '',
                    'sl26' => '',
                    'sl19' => '',
                    'sl20' => '',
                    'sl21' => '',
                    'sl27' => '',
                    'sl22' => '',
                    'sl23' => '',
                    'sl25' => '',
                    'ks44' => '',
                    'ks65' => '',
                    'ks47' => '',
                    'ks48' => '',
                    'ks58' => '',
                    'ks59' => '',
                    'ks49' => '',
                    'ks50' => '',
                    'ks51' => '',
                    'ks55' => '',
                    'ks56' => '',
                    'ks52' => '',
                    'ks53' => '',
                    'ks54' => '',
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