@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Terapi</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item "><a href="{{ route('terapi') }}">Terapi</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            @include("pemeriksaan_penunjang.partials.form", [
                'id' => $terapi->getId(),
                'nama_pasien' => $terapi->getPasien()->getNama(),
                'id_pasien' => $terapi->getPasien()->getId(),
                'medrec' => $terapi->getPasien()->getMedrec(),
                'kunjungan' => $terapi->getKunjungan(),
                'tanggal_periksa' => $terapi->getTanggalPeriksa(),
                'b4' => $terapi->getB4(),
                'b5' => $terapi->getB5(),
                'b6' => $terapi->getB6(),
                'b7' => $terapi->getB7(),
                'b8' => $terapi->getB8(),
                'b9' => $terapi->getB9(),
                'b32' => $terapi->getB32(),
                'b33' => $terapi->getB33(),
                'b34' => $terapi->getB34(),
                'b35' => $terapi->getB35(),
                'b36' => $terapi->getB36(),
                'b10' => $terapi->getB10(),
                'b11' => $terapi->getB11(),
                'b12' => $terapi->getB12(),
                'b13' => $terapi->getB13(),
                'b14' => $terapi->getB14(),
                'b37' => $terapi->getB37(),
                'b38' => $terapi->getB38(),
                'b39' => $terapi->getB39(),
                'b40' => $terapi->getB40(),
                'b41' => $terapi->getB41(),
                'b47' => $terapi->getB47(),
                'b48' => $terapi->getB48(),
                'b49' => $terapi->getB49(),
                'b50' => $terapi->getB50(),
                'b51' => $terapi->getB51(),
                'b42' => $terapi->getB42(),
                'b43' => $terapi->getB43(),
                'b44' => $terapi->getB44(),
                'b45' => $terapi->getB45(),
                'b46' => $terapi->getB46(),
                'b21' => $terapi->getB21(),
                'b22a' => $terapi->getB22a(),
                'b22b' => $terapi->getB22b(),
                'b22c' => $terapi->getB22c(),
                'b22d' => $terapi->getB22d(),
                'b22i' => $terapi->getB22i(),
                'b22e' => $terapi->getB22e(),
                'b22f' => $terapi->getB22f(),
                'b22g' => $terapi->getB22g(),
                'b22h' => $terapi->getB22h(),
                'b22j' => $terapi->getB22j(),
                'b22k' => $terapi->getB22k(),
                'b22p' => $terapi->getB22p(),
                'b22u' => $terapi->getB22u(),
                'b22v' => $terapi->getB22v(),
                'b22_lainnya' => $terapi->getB22Lainnya(),
                'b23' => $terapi->getB23(),
                'b24' => $terapi->getB24(),
                'b25' => $terapi->getB25(),
                'b26' => $terapi->getB26(),
                'b27' => $terapi->getB27(),
                'b28' => $terapi->getB28(),
                'b29' => $terapi->getB29(),
                'b30' => $terapi->getB30(),
                'action' => route("terapi.update"),
                'button' => trans('form.save')
            ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection