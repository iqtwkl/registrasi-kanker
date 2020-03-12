@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Pasien</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-pasien" id="js-data-pasien" data-token="{{ csrf_token() }}" data-url="{{ route("pasien.all") }}">
        </table>
    </div>
@endsection

@section('scripts')
<script type="text/javascript">
 $(document).ready(function(){
     dataTable.init(".js-data-pasien");
 });
</script>
@endsection