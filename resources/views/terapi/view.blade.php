@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">
            Detail Terapi
        </h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item"><a href="{{ route('terapi') }}">Terapi</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $pasien->nama ?? '' }}</li>
            </ol>
        </nav>
    </div>
    <div class="row">        
        <div class="col-12">  
            <h5 class="card-title">Terapi</h5>        
            @include('terapi.partials.detail')
        </div>
    </div>
@endsection

@section('scripts')
