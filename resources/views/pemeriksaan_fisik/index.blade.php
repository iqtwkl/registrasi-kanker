@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")

    <div class="header">
        <h2 class="header-title">Pemeriksaan Fisik</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pemeriksaan Fisik</li>
            </ol>
        </nav>
    </div>

    <div class="table-responsive">
        <table id="js-table-pemeriksaan-fisik" class="table js-data-pemeriksaan-fisik" data-token="{{ csrf_token() }}" data-url="{{ route("pemeriksaan-fisik-ajax.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <a href="{{ route('pemeriksaan-fisik.create') }}" class="btn btn-primary" data-id="1">Create</a>
            </div>
        </div>
        <br />
    </div>

    <!-- Start Modal -->
    @include('pemeriksaan_fisik.partials.modal_delete')
    <!--End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection