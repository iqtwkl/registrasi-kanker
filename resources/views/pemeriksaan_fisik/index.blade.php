@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Pemeriksaan Fisik</h2>
    <hr />
    <div class="table-responsive">
        <table id="js-table-pemeriksaan-fisik" class="table js-data-pemeriksaan-fisik" data-token="{{ csrf_token() }}" data-url="{{ route("pemeriksaan-fisik.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('pemeriksaan_fisik.partials.modal_create')
    @include('pemeriksaan_fisik.partials.modal_edit')
    @include('pemeriksaan_fisik.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection