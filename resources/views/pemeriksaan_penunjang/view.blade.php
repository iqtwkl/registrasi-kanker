@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">
            Detail Pemeriksaan Penunjang
        </h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item"><a href="{{ route('pemeriksaan-penunjang') }}">Pemeriksaan Penunjang</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $pasien->nama ?? '' }}</li>
            </ol>
        </nav>
    </div>
    <div class="row">        
        <div class="col-12">       
            <h5 class="card-title">Pemeriksaan Penunjang</h5>  
            @include('pemeriksaan_penunjang.partials.detail')
        </div>
    </div>
@endsection

@section('scripts')
