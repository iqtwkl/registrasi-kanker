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
                    'id' => ''.'getId()',
                    'nama_pasien' => ''.'getPasien()->getNama()',
                    'id_pasien' => ''.'getPasien()->getId()',
                    'medrec' => ''.'getPasien()->getMedrec()',
                    'kunjungan' => ''.'getKunjungan()',
                    'tanggal_periksa' => ''.'getTanggalPeriksa()',
                    'td' => ''.'getTd()',
                    'mmhg' => ''.'getMmhg()',
                    'nadi_menit' => ''.'getNadiMenit()',
                    'tinggi_badan' => ''.'getTinggiBadan()',
                    'berat_badan' => ''.'getBeratbadan()',
                    'kesadaran' => ''.'getKesadaran()',
                    'ks1' => ''.'getKs1()',
                    'ks66' => ''.'getKs66()',
                    'sl1' => ''.'getSl1()',
                    'sl1a' => ''.'getSl1a()',
                    'sl3' => ''.'getSl3()',
                    'sl3a' => ''.'getSl3a()',
                    'sl2' => ''.'getSl2()',
                    'sl2a' => ''.'getSl2a()',
                    'sl4' => ''.'getSl4()',
                    'sl4a' => ''.'getSl4a()',
                    'sl5' => ''.'getSl5()',
                    'sl5a' => ''.'getSl5a()',
                    'sl6' => ''.'getSl6()',
                    'sl6a' => ''.'getSl6a()',
                    'sl24' => ''.'getSl24()',
                    'sl24a' => ''.'getS24a()',
                    'sl7' => ''.'getSl7()',
                    'sl7a' => ''.'getSl7a()',
                    'sl8' => ''.'getSl8()',
                    'sl8a' => ''.'getSl8a()',
                    'sl9' => ''.'getSl9()',
                    'sl9a' => ''.'getSl9a()',
                    'sl10' => ''.'getSl10()',
                    'sl10a' => ''.'getSl10a()',
                    'ks30' => ''.'getKs30()',
                    'ks31' => ''.'getKs31()',
                    'ks32' => ''.'getKs32()',
                    'ks34' => ''.'getKs34()',
                    'ks36' => ''.'getKs36()',
                    'ks38' => ''.'getKs38()',
                    'ks42' => ''.'getKs42()',
                    'ks60' => ''.'getKs60()',
                    'ks64' => ''.'getKs64()',
                    'ks20' => ''.'getKs20()',
                    'ks21' => ''.'getKs21()',
                    'ks18' => ''.'getKs18()',
                    'ks19' => ''.'getKs19()',
                    'ks22' => ''.'getKs22()',
                    'ks23' => ''.'getKs23()',
                    'ks62' => ''.'getKs62()',
                    'ks63' => ''.'getKs63()',
                    'ks26' => ''.'getKs26()',
                    'ks27' => ''.'getKs27()',
                    'ks28' => ''.'getKs28()',
                    'ks24' => ''.'getKs24()',
                    'ks67' => ''.'getKs67()',
                    'ks57' => ''.'getKs57()',
                    'ks68' => ''.'getKs68()',
                    'ks70' => ''.'getKs70()',
                    'ks69a' => ''.'getKs69a()',
                    'ks69b' => ''.'getKs69b()',
                    'ks69c' => ''.'getKs69c()',
                    'ks69d' => ''.'getKs69d()',
                    'ks69e' => ''.'getKs69e()',
                    'ks69f' => ''.'getKs69f()',
                    'ks69g' => ''.'getKs69g()',
                    'ks69h' => ''.'getKs69h()',
                    'ks69i' => ''.'getKs69i()',
                    'ks69j' => ''.'getKs69j()',
                    'ks69k' => ''.'getKs69k()',
                    'ks69l' => ''.'getKs69l()',
                    'sl11' => ''.'getSl11()',
                    'sl12' => ''.'getSl12()',
                    'sl13' => ''.'getSl13()',
                    'sl14' => ''.'getSl14()',
                    'sl15' => ''.'getSl15()',
                    'sl16' => ''.'getSl16()',
                    'sl17' => ''.'getSl17()',
                    'sl18' => ''.'getSl18()',
                    'sl26' => ''.'getSl26()',
                    'sl19' => ''.'getSl19()',
                    'sl20' => ''.'getSl20()',
                    'sl21' => ''.'getSl21()',
                    'sl27' => ''.'getSl27()',
                    'sl22' => ''.'getSl2()',
                    'sl23' => ''.'getSl23()',
                    'sl25' => ''.'getSl25()',
                    'ks44' => ''.'getKs44()',
                    'ks65' => ''.'getKs65()',
                    'ks47' => ''.'getKs47()',
                    'ks48' => ''.'getKs48()',
                    'ks58' => ''.'getKs58()',
                    'ks59' => ''.'getKs59()',
                    'ks49' => ''.'getKs49()',
                    'ks50' => ''.'getKs50()',
                    'ks51' => ''.'getKs51()',
                    'ks55' => ''.'getKs55()',
                    'ks56' => ''.'getKs56()',
                    'ks52' => ''.'getKs52()',
                    'ks53' => ''.'getKs53()',
                    'ks54' => ''.'getKs54()',
                    'action' => ''.'',
                    'button' => trans('form.save')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection