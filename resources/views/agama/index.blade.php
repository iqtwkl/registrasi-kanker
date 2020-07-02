@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Agama</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-agama" id="js-table-agama" data-token="{{ csrf_token() }}" data-url="{{ route("agama.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-create-agama" data-id="1">Create</button>
            </div>
        </div>
        <br />
    </div>

    <!-- Start Modal -->
    @include('agama.partials.modal_create')
    @include('agama.partials.modal_edit')
    @include('agama.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
<script type="text/javascript">
</script>
@endsection