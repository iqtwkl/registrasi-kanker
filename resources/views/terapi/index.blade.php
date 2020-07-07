@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Terapi</h2>
    <hr />
    <div class="table-responsive">
        <table id="js-table-terapi" class="table js-data-terapi" data-token="{{ csrf_token() }}" data-url="{{ route("terapi.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('terapi.partials.modal_create')
    @include('terapi.partials.modal_edit')
    @include('terapi.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection