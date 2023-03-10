@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Pemeriksaan Penunjang</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pemeriksaan Penunjang<</li>
            </ol>
        </nav>
    </div>

    <div class="table-responsive">
        <table id="js-table-pemeriksaan-penunjang" class="table js-data-pemeriksaan-penunjang" data-token="{{ csrf_token() }}" data-url="{{ route("pemeriksaan-penunjang-ajax.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <a href="{{ route('pemeriksaan-penunjang.create') }}" class="btn btn-primary" data-id="1">Create</a>
            </div>
        </div>
        <br />
    </div>

    <!-- Start Modal -->
    @include('pemeriksaan_penunjang.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection