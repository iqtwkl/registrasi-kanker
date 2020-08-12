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
                    'id' => '',
                    'nama_pasien' => '',
                    'id_pasien' => '',
                    'medrec' => '',
                    'kunjungan' => '',
                    'tanggal_periksa' => '',
                    'a1' => ''.'getA1()',
                    'a2' => ''.'getA2()',
                    'a3' => ''.'getA3()',
                    'a7' => ''.'getA7()',
                    'a7a' => ''.'getA7a()',
                    'a62' => ''.'getA62()',
                    'a63' => ''.'getA63()',
                    'a64' => ''.'getA64()',
                    'a65' => ''.'getA65()',
                    'a66' => ''.'getA66()',
                    'a5' => ''.'getA5()',
                    'a4a' => ''.'getA4a()',
                    'a9' => ''.'getA9()',
                    'a10' => ''.'getA10()',
                    'a11' => ''.'getA11()',
                    'a12' => ''.'getA12()',
                    'a13' => ''.'getA13()',
                    'a15' => ''.'getA15()',
                    'a67' => ''.'getA67()',
                    'a16' => ''.'getA16()',
                    'a17' => ''.'getA17()',
                    'a18' => ''.'getA18()',
                    'a19' => ''.'getA19()',
                    'a20' => ''.'getA20()',
                    'a201' => ''.'getA201()',
                    'a202' => ''.'getA202()',
                    'a203' => ''.'getA203()',
                    'a20a' => ''.'getA20a()',
                    'a21' => ''.'getA21()',
                    'a22' => ''.'getA22()',
                    'a23' => ''.'getA23()',
                    'a24' => ''.'getA24()',
                    'a241' => ''.'getA241()',
                    'a242' => ''.'getA242()',
                    'a243' => ''.'getA243()',
                    'a24a' => ''.'getA24a()',
                    'a25' => ''.'getA25()',
                    'a26' => ''.'getA26()',
                    'a27' => ''.'getA27()',
                    'a28' => ''.'getA28()',
                    'a281' => ''.'getA281()',
                    'a282' => ''.'getA282()',
                    'a283' => ''.'getA283()',
                    'a28a' => ''.'getA28a()',
                    'a29' => ''.'getA29()',
                    'a30' => ''.'getA30()',
                    'a31' => ''.'getA31()',
                    'a32' => ''.'getA32()',
                    'a321' => ''.'getA321()',
                    'a322' => ''.'getA322()',
                    'a323' => ''.'getA323()',
                    'a32a' => ''.'getA32a()',
                    'a33' => ''.'getA33()',
                    'a34' => ''.'getA34()',
                    'a35' => ''.'getA35()',
                    'a36' => ''.'getA36()',
                    'a361' => ''.'getA361()',
                    'a362' => ''.'getA362()',
                    'a363' => ''.'getA363()',
                    'a36a' => ''.'getA36a()',
                    'a37' => ''.'getA37()',
                    'a38' => ''.'getA38()',
                    'a39' => ''.'getA39()',
                    'a40' => ''.'getA40()',
                    'a401' => ''.'getA401()',
                    'a402' => ''.'getA402()',
                    'a403' => ''.'getA403()',
                    'a40a' => ''.'getA40a()',
                    'a41' => ''.'getA41()',
                    'a42' => ''.'getA42()',
                    'a43' => ''.'getA43()',
                    'a44' => ''.'getA44()',
                    'a441' => ''.'getA441()',
                    'a442' => ''.'getA442()',
                    'a443' => ''.'getA443()',
                    'a44a' => ''.'getA44a()',
                    'a45' => ''.'getA45()',
                    'a57' => ''.'getA57()',
                    'a58' => ''.'getA58()',
                    'a59' => ''.'getA59()',
                    'a60' => ''.'getA60()',
                    'a601' => ''.'getA601()',
                    'a602' => ''.'getA602()',
                    'a603' => ''.'getA603()',
                    'a60a' => ''.'getA60a()',
                    'a45a' => ''.'getA45a()',
                    'a48' => ''.'getA48()',
                    'a49' => ''.'getA49()',
                    'a50' => ''.'getA50()',
                    'a51' => ''.'getA51()',
                    'a52' => ''.'getA52()',
                    'a53' => ''.'getA53()',
                    'a54' => ''.'getA54()',
                    'a55' => ''.'getA55()',
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