@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>User</h2>
    <hr />
    <div class="table-responsive">
        <table id="js-table-pendidikan" class="table js-data-pendidikan" data-token="{{ csrf_token() }}" data-url="{{ route("pendidikan.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('pendidikan.partials.modal_create')
    @include('pendidikan.partials.modal_edit')
    @include('pendidikan.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection