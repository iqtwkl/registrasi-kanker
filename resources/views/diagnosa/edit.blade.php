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
                'id' => $diagnosa->getId(),
                'nama_pasien' => $diagnosa->getPasien()->getNama(),
                'id_pasien' => $diagnosa->getPasien()->getId(),
                'medrec' => $diagnosa->getPasien()->getMedrec(),
                'kunjungan' => $diagnosa->getKunjungan(),
                'tanggal_periksa' => $diagnosa->getTanggalPeriksa(),
                'b1' => $diagnosa->getB1(),
                'b2' => $diagnosa->getB2(),
                'c1' => $diagnosa->getC1(),
                'c16' => $diagnosa->getC16(),
                'c2' => $diagnosa->getC2(),
                'c17' => $diagnosa->getC17(),
                'b31' => $diagnosa->getB31(),
                'c3' => $diagnosa->getC3(),
                'c4' => $diagnosa->getC4(),
                'c5' => $diagnosa->getC5(),
                'c18' => $diagnosa->getC18(),
                'c6' => $diagnosa->getC6(),
                'c7' => $diagnosa->getC7(),
                'c8' => $diagnosa->getC8(),
                'c9' => $diagnosa->getC9(),
                'c10' => $diagnosa->getC10(),
                'c11' => $diagnosa->getC11(),
                'c12' => $diagnosa->getC12(),
                'c13' => $diagnosa->getC13(),
                'c14' => $diagnosa->getC14(),
                'c19' => $diagnosa->getC19(),
                'c20' => $diagnosa->getC20(),
                'c22' => $diagnosa->getC22(),
                'c15' => $diagnosa->getC15(),
                'action' => route("diagnosa.update"),
                'button' => trans('form.save')
            ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection