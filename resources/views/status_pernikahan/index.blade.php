@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Agama</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-status-pernikahan" id="js-table-status-pernikahan" data-token="{{ csrf_token() }}" data-url="{{ route("status-pernikahan.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-create-status-pernikahan" data-id="1">Create</button>
            </div>
        </div>
        <br />
    </div>

    <!-- Start Modal -->
    @include('status_pernikahan.partials.modal_create')
    @include('status_pernikahan.partials.modal_edit')
    @include('status_pernikahan.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
<script type="text/javascript">
</script>
@endsection