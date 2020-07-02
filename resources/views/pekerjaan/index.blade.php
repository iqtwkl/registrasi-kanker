@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>User</h2>
    <hr />
    <div class="table-responsive">
        <table id="js-table-pekerjaan" class="table js-data-pekerjaan" data-token="{{ csrf_token() }}" data-url="{{ route("pekerjaan.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('pekerjaan.partials.modal_create')
    @include('pekerjaan.partials.modal_edit')
    @include('pekerjaan.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection