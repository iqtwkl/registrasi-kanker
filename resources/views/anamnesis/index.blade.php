@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Anamnesis</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-anamnesis" id="js-table-anamnesis" data-token="{{ csrf_token() }}" data-url="{{ route("anamnesis.all") }}">
        </table>
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