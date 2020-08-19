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
                'id' => ''.'getId()',
                'nama_pasien' => ''.'getPasien()->getNama()',
                'id_pasien' => ''.'getPasien()->getId()',
                'medrec' => ''.'getPasien()->getMedrec()',
                'kunjungan' => ''.'getKunjungan()',
                'tanggal_periksa' => ''.'getTanggalPeriksa()',
                'b4' => ''.'getB4()',
                'b5' => ''.'getB5()',
                'b6' => ''.'getB6()',
                'b7' => ''.'getB7()',
                'b8' => ''.'getB8()',
                'b9' => ''.'getB9()',
                'b32' => ''.'getB32()',
                'b33' => ''.'getB33()',
                'b34' => ''.'getB34()',
                'b35' => ''.'getB35()',
                'b36' => ''.'getB36()',
                'b10' => ''.'getB10()',
                'b11' => ''.'getB11()',
                'b12' => ''.'getB12()',
                'b13' => ''.'getB13()',
                'b14' => ''.'getB14()',
                'b37' => ''.'getB37()',
                'b38' => ''.'getB38()',
                'b39' => ''.'getB39()',
                'b40' => ''.'getB40()',
                'b41' => ''.'getB41()',
                'b47' => ''.'getB47()',
                'b48' => ''.'getB48()',
                'b49' => ''.'getB49()',
                'b50' => ''.'getB50()',
                'b51' => ''.'getB51()',
                'b42' => ''.'getB42()',
                'b43' => ''.'getB43()',
                'b44' => ''.'getB44()',
                'b45' => ''.'getB45()',
                'b46' => ''.'getB46()',
                'b21' => ''.'getB21()',
                'b22a' => ''.'getB22a()',
                'b22b' => ''.'getB22b()',
                'b22c' => ''.'getB22c()',
                'b22d' => ''.'getB22d()',
                'b22i' => ''.'getB22i()',
                'b22e' => ''.'getB22e()',
                'b22f' => ''.'getB22f()',
                'b22g' => ''.'getB22g()',
                'b22h' => ''.'getB22h()',
                'b22j' => ''.'getB22j()',
                'b22k' => ''.'getB22k()',
                'b22p' => ''.'getB22p()',
                'b22u' => ''.'getB22u()',
                'b22v' => ''.'getB22v()',
                'b22_lainnya' => ''.'getB22Lainnya()',
                'b23' => ''.'getB23()',
                'b24' => ''.'getB24()',
                'b25' => ''.'getB25()',
                'b26' => ''.'getB26()',
                'b27' => ''.'getB27()',
                'b28' => ''.'getB28()',
                'b29' => ''.'getB29()',
                'b30' => ''.'getB30()',
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