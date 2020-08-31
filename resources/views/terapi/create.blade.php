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
                'id' => '',
                'nama_pasien' => '',
                'id_pasien' => '',
                'medrec' => '',
                'kunjungan' => '',
                'tanggal_periksa' => '',
                'b4' => '',
                'b5' => '',
                'b6' => '',
                'b7' => '',
                'b8' => '',
                'b9' => '',
                'b32' => '',
                'b33' => '',
                'b34' => '',
                'b35' => '',
                'b36' => '',
                'b10' => '',
                'b11' => '',
                'b12' => '',
                'b13' => '',
                'b14' => '',
                'b37' => '',
                'b38' => '',
                'b39' => '',
                'b40' => '',
                'b41' => '',
                'b47' => '',
                'b48' => '',
                'b49' => '',
                'b50' => '',
                'b51' => '',
                'b42' => '',
                'b43' => '',
                'b44' => '',
                'b45' => '',
                'b46' => '',
                'b21' => '',
                'b22a' => '',
                'b22b' => '',
                'b22c' => '',
                'b22d' => '',
                'b22i' => '',
                'b22e' => '',
                'b22f' => '',
                'b22g' => '',
                'b22h' => '',
                'b22j' => '',
                'b22k' => '',
                'b22p' => '',
                'b22u' => '',
                'b22v' => '',
                'b22_lainnya' => '',
                'b23' => '',
                'b24' => '',
                'b25' => '',
                'b26' => '',
                'b27' => '',
                'b28' => '',
                'b29' => '',
                'b30' => '',
                'action' => route("terapi.store"),
                'button' => trans('form.save')
            ])
        </div>
    </div>

@endsection
@section('scripts')
    <script type="text/javascript">
    </script>
@endsection