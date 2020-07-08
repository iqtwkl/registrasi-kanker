@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Anamnesis</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Anamnesis</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            <div class="table-responsive">
                <table class="table js-data-anamnesis" id="js-table-anamnesis" data-token="{{ csrf_token() }}" data-url="{{ route("anamnesis.all") }}">
                </table>
            </div>
        </div>
    </div>

    <!-- Start Modal -->
    @include('anamnesis.partials.modal_create')
    @include('anamnesis.partials.modal_edit')
    @include('anamnesis.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">
    </script>
@endsection