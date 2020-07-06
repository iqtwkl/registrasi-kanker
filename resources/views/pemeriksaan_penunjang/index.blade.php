@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Pemeriksaan Penunjang</h2>
    <hr />
    <div class="table-responsive">
        <table id="js-table-pemeriksaan-penunjang" class="table js-data-pemeriksaan-penunjang" data-token="{{ csrf_token() }}" data-url="{{ route("pemeriksaan-penunjang.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('pemeriksaan_penunjang.partials.modal_create')
    @include('pemeriksaan_penunjang.partials.modal_edit')
    @include('pemeriksaan_penunjang.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection