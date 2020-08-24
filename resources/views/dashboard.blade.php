@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
<div class="header">
    <h2 class="header-title">Dashboard</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
    </nav>
</div>
<div class="row">
    <div class="col-lg-3">
        <div class="card widget-flat">
            <div class="card-body" id="report-pasien" data-url={{ route('dashboard.pasien.report') }}>
                <div class="float-right">
                    <i class="mdi mdi-account-multiple widget-icon"></i>
                </div>
                <h5 class="text-muted font-weight-normal mt-0" title="Jumlah Pasien">Pasien</h5>
                <h3 class="mt-3 mb-3">@{{countAll}}</h3>
                <p class="mb-0 text-muted">
                    <span class="text-success mr-2 font-weight-bold"><i class="mdi mdi-arrow-up-bold"></i> @{{countNew}}</span>
                    <span class="text-nowrap">Pasien Baru bulan ini</span>  
                </p>
            </div> <!-- end card-body-->
        </div> <!-- end card-->
    </div> <!-- end col-->

    <div class="col-lg-3">
        <div class="card widget-flat">
            <div class="card-body" id="report-pemeriksaan-fisik" data-url={{ route('dashboard.pasien.report') }}>
                <div class="float-right">
                    <i class="mdi mdi-cart-plus widget-icon bg-success-lighten text-success"></i>
                </div>
                <h5 class="text-muted font-weight-normal mt-0" title="Pemeriksaan Fisik">Pemeriksaan Fisik</h5>
                <h3 class="mt-3 mb-3">@{{countAll}}</h3>
                <p class="mb-0 text-muted">
                    <span class="text-success mr-2 font-weight-bold"><i class= "mdi mdi-arrow-down-bold"></i> @{{countNew}}</span>
                    <span class="text-nowrap">Pemeriksaan bulan ini</span>
                </p>
            </div> <!-- end card-body-->
        </div> <!-- end card-->
    </div> <!-- end col-->

    <div class="col-lg-3">
        <div class="card widget-flat">
            <div class="card-body" id="report-diagnosis" data-url={{ route('dashboard.pasien.report') }}>
                <div class="float-right">
                    <i class="mdi mdi-currency-usd widget-icon bg-success-lighten text-success"></i>
                </div>
                <h5 class="text-muted font-weight-normal mt-0" title="Average Revenue">Diangosis</h5>
                <h3 class="mt-3 mb-3">@{{countAll}}</h3>
                <p class="mb-0 text-muted">
                    <span class="text-success mr-2"><i class="mdi mdi-arrow-down-bold"></i> @{{countNew}}</span>
                    <span class="text-nowrap">Diagnosis bulan ini</span>
                </p>
            </div> <!-- end card-body-->
        </div> <!-- end card-->
    </div> <!-- end col-->

    <div class="col-lg-3">
        <div class="card widget-flat">
            <div class="card-body" id="report-terapi" data-url={{ route('dashboard.pasien.report') }}>
                <div class="float-right">
                    <i class="mdi mdi-pulse widget-icon"></i>
                </div>
                <h5 class="text-muted font-weight-normal mt-0" title="Growth">Terapi</h5>
                <h3 class="mt-3 mb-3">@{{countAll}}</h3>
                <p class="mb-0 text-muted">
                    <span class="text-success mr-2"><i class="mdi mdi-arrow-up-bold"></i> @{{countNew}}</span>
                    <span class="text-nowrap">Terapi bulan ini</span>
                </p>
            </div> <!-- end card-body-->
        </div> <!-- end card-->
    </div> <!-- end col-->
</div>
<div class="row">
    <div class="col-8">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title mb-3">Kunjungan Per Bulan</h4>
                <div id="kunjungan-chart">
                    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>
        </div>    
    </div>
    <div class="col-4">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title mb-3">Gender Pasien</h4>
                <div id="gender-chart">
                    <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>
        </div>    
    </div>
</div>
<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-body">
                <div class="dropdown float-right">
                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                        <i class="mdi mdi-dots-vertical"></i>
                    </a>                    
                </div>
                <h4 class="header-title mb-2">Aktivitas Terkini</h4>

                <div data-simplebar="init" style="max-height: 600px;"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" style="height: auto; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px;">
                    <div class="timeline-alt pb-0">
                        <div class="timeline-item">
                            <i class="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-info font-weight-bold mb-1 d-block">You sold an item</a>
                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">5 minutes ago</small>
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <i class="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-primary font-weight-bold mb-1 d-block">Product on the Bootstrap Market</a>
                                <small>Dave Gamache added
                                    <span class="font-weight-bold">Admin Dashboard</span>
                                </small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <i class="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-info font-weight-bold mb-1 d-block">Robert Delaney</a>
                                <small>Send you message
                                    <span class="font-weight-bold">"Are you there?"</span>
                                </small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <i class="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-primary font-weight-bold mb-1 d-block">Audrey Tobey</a>
                                <small>Uploaded a photo
                                    <span class="font-weight-bold">"Error.jpg"</span>
                                </small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <i class="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-info font-weight-bold mb-1 d-block">You sold an item</a>
                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">16 hours ago</small>
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <i class="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-primary font-weight-bold mb-1 d-block">Product on the Bootstrap Market</a>
                                <small>Dave Gamache added
                                    <span class="font-weight-bold">Admin Dashboard</span>
                                </small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">22 hours ago</small>
                                </p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <i class="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div class="timeline-item-info">
                                <a href="#" class="text-info font-weight-bold mb-1 d-block">Robert Delaney</a>
                                <small>Send you message
                                    <span class="font-weight-bold">"Are you there?"</span>
                                </small>
                                <p class="mb-0 pb-2">
                                    <small class="text-muted">2 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- end timeline -->
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 755px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 238px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div> <!-- end slimscroll -->
            </div>
        </div>
    </div>
    <div class="col-8">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title mb-3">Pasien Terbaru</h4>
                <div class="table-responsive">
                    
                    <br/>
                </div>            
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection