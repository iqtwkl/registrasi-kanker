@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>User</h2>
    <hr />

    <div class="table-responsive js-data-users" data-token="{{ csrf_token() }}" data-url="{{ route("pasien.all") }}">
        <table class="table">
            <thead>
            <tr class="table-info">
                <th>No</th>
                <th>Nama</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>No Rekam Medis</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
@endsection

@section('scripts')
<script type="text/javascript">
 $(document).ready(function(){
     dataTable.init(".js-data-users");
 });
</script>
@endsection