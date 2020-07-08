@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <div class="header">
        <h2 class="header-title">Pasien</h2>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pasien</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 col-xl-12">
            <div class="table-responsive">
                <table class="table js-data-pasien" id="js-table-pasien" data-token="{{ csrf_token() }}" data-url="{{ route("pasien.all") }}">
                </table>
                <div class="">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-create-pasien" data-id="1">Create</button>
                </div>
            </div>
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