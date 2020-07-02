@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Pasien</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-dirujuk" id="js-table-dirujuk" data-token="{{ csrf_token() }}" data-url="{{ route("dirujuk.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('dirujuk.partials.modal_create')
    @include('dirujuk.partials.modal_edit')
    @include('dirujuk.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">
    </script>
@endsection