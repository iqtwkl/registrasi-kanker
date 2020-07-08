@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">
            Detail Pasien
        </h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item"><a href="{{ route('pasien') }}">Pasien</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $profile->nama }}</li>
            </ol>
        </nav>
    </div>
    <div class="row">
        <div class="col-md-3 col-xl-2">

            <div class="card">                
                <div class="list-group list-group-flush" role="tablist">
                    
                    <a class="list-group-item list-group-item-action active" data-toggle="list" href="#profile" role="tab" aria-selected="true">
                        Profil
                    </a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#anamnesis" role="tab" aria-selected="false">
                        Anamnesis
                    </a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#pemeriksaan-fisik" role="tab" aria-selected="false">
                        Pemeriksaan Fisik
                    </a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#pemeriksaan-penunjang" role="tab" aria-selected="false">
                        Pemeriksaan Penunjang
                    </a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#diagnosa" role="tab" aria-selected="false">
                        Diagnosa
                    </a>
                    <a class="list-group-item list-group-item-action" data-toggle="list" href="#terapi" role="tab" aria-selected="false">
                        Terapi
                    </a>
                </div>
            </div>
        </div>

        <div class="col-md-9 col-xl-10">
            <div class="tab-content">
                <div class="tab-pane fade active show" id="profile" role="tabpanel">                    

                    <div class="card">
                        <div class="card-body">
                            @include('pasien.partials.profile')
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="anamnesis" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Anamnesis</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pemeriksaan-fisik" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Pemeriksaan Fisik</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pemeriksaan-penunjang" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Pemeriksaan Penunjang</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="diagnosa" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Diagnosa</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="terapi" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Terapi</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
