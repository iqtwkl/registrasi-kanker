@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Pasien</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-pasien" id="js-table-pasien" data-token="{{ csrf_token() }}" data-url="{{ route("pasien.all") }}">
        </table>
        <div class="">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-create-pasien" data-id="1">Create</button>
        </div>
    </div>

    <!-- Start Modal -->
    @include('pasien.partials.modal_create')
    @include('pasien.partials.modal_edit')
    @include('pasien.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
<script type="text/javascript">
</script>
@endsection