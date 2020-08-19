@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Dirujuk</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-dirujuk" id="js-table-dirujuk" data-token="{{ csrf_token() }}" data-url="{{ route("dirujuk.all") }}">
        </table>
        <div class="row">
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-create-dirujuk" data-id="1">Create</button>
            </div>
        </div>
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