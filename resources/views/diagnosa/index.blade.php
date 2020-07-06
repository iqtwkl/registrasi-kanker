@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Diagnosa</h2>
    <hr />
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