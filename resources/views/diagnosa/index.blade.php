@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Diagnosa</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Diagnosa</li>
            </ol>
        </nav>
    </div>
    
    <div class="table-responsive">
        <table id="js-table-diagnosa" class="table js-data-diagnosa" data-token="{{ csrf_token() }}" data-url="{{ route("diagnosa.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('diagnosa.partials.modal_create')
    @include('diagnosa.partials.modal_edit')
    @include('diagnosa.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection