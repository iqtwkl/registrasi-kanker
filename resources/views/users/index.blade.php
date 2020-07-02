@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>User</h2>
    <hr />
    <div class="table-responsive">
        <table class="table js-data-users"  id="js-table-users" data-token="{{ csrf_token() }}" data-url="{{ route("users.all") }}">
        </table>
    </div>

    <!-- Start Modal -->
    @include('users.partials.modal_create')
    @include('users.partials.modal_edit')
    @include('users.partials.modal_delete')
    <!-- End Modal -->
@endsection

@section('scripts')
<script type="text/javascript">

</script>
@endsection