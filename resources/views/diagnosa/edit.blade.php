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
                'id' => ''.'getId()',
                'nama_pasien' => ''.'getPasien()->getNama()',
                'id_pasien' => ''.'getPasien()->getId()',
                'medrec' => ''.'getPasien()->getMedrec()',
                'kunjungan' => ''.'getKunjungan()',
                'tanggal_periksa' => ''.'getTanggalPeriksa()',
                'b1' => ''.'getB1()',
                'b2' => ''.'getB2()',
                'c1' => ''.'getC1()',
                'c16' => ''.'getC16()',
                'c2' => ''.'getC2()',
                'c17' => ''.'getC17()',
                'b31' => ''.'getB31()',
                'c3' => ''.'getC3()',
                'c4' => ''.'getC4()',
                'c5' => ''.'getC5()',
                'c18' => ''.'getC18()',
                'c6' => ''.'getC6()',
                'c7' => ''.'getC7()',
                'c8' => ''.'getC8()',
                'c9' => ''.'getC9()',
                'c10' => ''.'getC10()',
                'c11' => ''.'getC11()',
                'c12' => ''.'getC12()',
                'c13' => ''.'getC13()',
                'c14' => ''.'getC14()',
                'c19' => ''.'getC19()',
                'c20' => ''.'getC20()',
                'c22' => ''.'getC22()',
                'c15' => ''.'getC15()',
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