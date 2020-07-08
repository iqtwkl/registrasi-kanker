@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Rumah Sakit</h2>
    <hr />
    <div class="table-responsive">
        <table id="js-table-rumah-sakit" class="table js-data-rumah-sakit" data-token="{{ csrf_token() }}" data-url="{{ route("rumah-sakit.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-create-rumah-sakit" data-id="1">Create</button>
            </div>
        </div>
        <br />
    </div>

    <!-- Start Modal -->
    @include('rumah_sakit.partials.modal_create')
    @include('rumah_sakit.partials.modal_edit')
    @include('rumah_sakit.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection