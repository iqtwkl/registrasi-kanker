@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Terapi</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Terapi<</li>
            </ol>
        </nav>
    </div>

    <div class="table-responsive">
        <table id="js-table-terapi" class="table js-data-terapi" data-token="{{ csrf_token() }}" data-url="{{ route("terapi-ajax.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <a href="{{ route('terapi.create') }}" class="btn btn-primary" data-id="1">Create</a>
            </div>
        </div>
    </div>

    <!-- Start Modal -->
    @include('terapi.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection