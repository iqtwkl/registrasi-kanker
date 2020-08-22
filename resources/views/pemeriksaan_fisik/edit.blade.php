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
                    'id' => $pemeriksaanFisik->getId(),
                    'nama_pasien' => $pemeriksaanFisik->getPasien()->getNama(),
                    'id_pasien' => $pemeriksaanFisik->getPasien()->getId(),
                    'medrec' => $pemeriksaanFisik->getPasien()->getMedrec(),
                    'kunjungan' => $pemeriksaanFisik->getKunjungan(),
                    'tanggal_periksa' => $pemeriksaanFisik->getTanggalPeriksa(),
                    'td' => $pemeriksaanFisik->getTd(),
                    'mmhg' => $pemeriksaanFisik->getMmhg(),
                    'nadi_menit' => $pemeriksaanFisik->getNadiMenit(),
                    'tinggi_badan' => $pemeriksaanFisik->getTinggiBadan(),
                    'berat_badan' => $pemeriksaanFisik->getBeratbadan(),
                    'kesadaran' => $pemeriksaanFisik->getKesadaran(),
                    'ks1' => $pemeriksaanFisik->getKs1(),
                    'ks66' => $pemeriksaanFisik->getKs66(),
                    'sl1' => $pemeriksaanFisik->getSl1(),
                    'sl1a' => $pemeriksaanFisik->getSl1a(),
                    'sl3' => $pemeriksaanFisik->getSl3(),
                    'sl3a' => $pemeriksaanFisik->getSl3a(),
                    'sl2' => $pemeriksaanFisik->getSl2(),
                    'sl2a' => $pemeriksaanFisik->getSl2a(),
                    'sl4' => $pemeriksaanFisik->getSl4(),
                    'sl4a' => $pemeriksaanFisik->getSl4a(),
                    'sl5' => $pemeriksaanFisik->getSl5(),
                    'sl5a' => $pemeriksaanFisik->getSl5a(),
                    'sl6' => $pemeriksaanFisik->getSl6(),
                    'sl6a' => $pemeriksaanFisik->getSl6a(),
                    'sl24' => $pemeriksaanFisik->getSl24(),
                    'sl24a' => $pemeriksaanFisik->getS24a(),
                    'sl7' => $pemeriksaanFisik->getSl7(),
                    'sl7a' => $pemeriksaanFisik->getSl7a(),
                    'sl8' => $pemeriksaanFisik->getSl8(),
                    'sl8a' => $pemeriksaanFisik->getSl8a(),
                    'sl9' => $pemeriksaanFisik->getSl9(),
                    'sl9a' => $pemeriksaanFisik->getSl9a(),
                    'sl10' => $pemeriksaanFisik->getSl10(),
                    'sl10a' => $pemeriksaanFisik->getSl10a(),
                    'ks30' => $pemeriksaanFisik->getKs30(),
                    'ks31' => $pemeriksaanFisik->getKs31(),
                    'ks32' => $pemeriksaanFisik->getKs32(),
                    'ks34' => $pemeriksaanFisik->getKs34(),
                    'ks36' => $pemeriksaanFisik->getKs36(),
                    'ks38' => $pemeriksaanFisik->getKs38(),
                    'ks42' => $pemeriksaanFisik->getKs42(),
                    'ks60' => $pemeriksaanFisik->getKs60(),
                    'ks64' => $pemeriksaanFisik->getKs64(),
                    'ks20' => $pemeriksaanFisik->getKs20(),
                    'ks21' => $pemeriksaanFisik->getKs21(),
                    'ks18' => $pemeriksaanFisik->getKs18(),
                    'ks19' => $pemeriksaanFisik->getKs19(),
                    'ks22' => $pemeriksaanFisik->getKs22(),
                    'ks23' => $pemeriksaanFisik->getKs23(),
                    'ks62' => $pemeriksaanFisik->getKs62(),
                    'ks63' => $pemeriksaanFisik->getKs63(),
                    'ks26' => $pemeriksaanFisik->getKs26(),
                    'ks27' => $pemeriksaanFisik->getKs27(),
                    'ks28' => $pemeriksaanFisik->getKs28(),
                    'ks24' => $pemeriksaanFisik->getKs24(),
                    'ks67' => $pemeriksaanFisik->getKs67(),
                    'ks57' => $pemeriksaanFisik->getKs57(),
                    'ks68' => $pemeriksaanFisik->getKs68(),
                    'ks70' => $pemeriksaanFisik->getKs70(),
                    'ks69a' => $pemeriksaanFisik->getKs69a(),
                    'ks69b' => $pemeriksaanFisik->getKs69b(),
                    'ks69c' => $pemeriksaanFisik->getKs69c(),
                    'ks69d' => $pemeriksaanFisik->getKs69d(),
                    'ks69e' => $pemeriksaanFisik->getKs69e(),
                    'ks69f' => $pemeriksaanFisik->getKs69f(),
                    'ks69g' => $pemeriksaanFisik->getKs69g(),
                    'ks69h' => $pemeriksaanFisik->getKs69h(),
                    'ks69i' => $pemeriksaanFisik->getKs69i(),
                    'ks69j' => $pemeriksaanFisik->getKs69j(),
                    'ks69k' => $pemeriksaanFisik->getKs69k(),
                    'ks69l' => $pemeriksaanFisik->getKs69l(),
                    'sl11' => $pemeriksaanFisik->getSl11(),
                    'sl12' => $pemeriksaanFisik->getSl12(),
                    'sl13' => $pemeriksaanFisik->getSl13(),
                    'sl14' => $pemeriksaanFisik->getSl14(),
                    'sl15' => $pemeriksaanFisik->getSl15(),
                    'sl16' => $pemeriksaanFisik->getSl16(),
                    'sl17' => $pemeriksaanFisik->getSl17(),
                    'sl18' => $pemeriksaanFisik->getSl18(),
                    'sl26' => $pemeriksaanFisik->getSl26(),
                    'sl19' => $pemeriksaanFisik->getSl19(),
                    'sl20' => $pemeriksaanFisik->getSl20(),
                    'sl21' => $pemeriksaanFisik->getSl21(),
                    'sl27' => $pemeriksaanFisik->getSl27(),
                    'sl22' => $pemeriksaanFisik->getSl2(),
                    'sl23' => $pemeriksaanFisik->getSl23(),
                    'sl25' => $pemeriksaanFisik->getSl25(),
                    'ks44' => $pemeriksaanFisik->getKs44(),
                    'ks65' => $pemeriksaanFisik->getKs65(),
                    'ks47' => $pemeriksaanFisik->getKs47(),
                    'ks48' => $pemeriksaanFisik->getKs48(),
                    'ks58' => $pemeriksaanFisik->getKs58(),
                    'ks59' => $pemeriksaanFisik->getKs59(),
                    'ks49' => $pemeriksaanFisik->getKs49(),
                    'ks50' => $pemeriksaanFisik->getKs50(),
                    'ks51' => $pemeriksaanFisik->getKs51(),
                    'ks55' => $pemeriksaanFisik->getKs55(),
                    'ks56' => $pemeriksaanFisik->getKs56(),
                    'ks52' => $pemeriksaanFisik->getKs52(),
                    'ks53' => $pemeriksaanFisik->getKs53(),
                    'ks54' => $pemeriksaanFisik->getKs54(),
                    'action' => route('pemeriksaan-fisik.update'),
                    'button' => trans('form.save')
                ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection