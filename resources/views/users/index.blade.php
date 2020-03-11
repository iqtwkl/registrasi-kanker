@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>User</h2>
    <hr />

    <div class="table-responsive">
        <table id="js-table-users" class="table js-data-users" data-token="{{ csrf_token() }}" data-url="{{ route("users.all") }}">
        </table>
    </div>
@endsection

@section('scripts')
<script type="text/javascript">
 $(document).ready(function(){
     if($('#js-table-users').hasClass('js-data-users')) {
        dataTable.init(".js-data-users");
     }
 });
</script>
@endsection