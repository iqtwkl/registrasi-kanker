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
    if($('#js-data-pasien').hasClass('js-data-pasien')) {
        var configs = {
            columns:[
                {
                    title: "ID",
                    field: "id",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "NO REKAM MEDIS",
                    field: "no_rekam_medis",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "NAMA",
                    field: "nama",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "TEMPAT LAHIR",
                    field: "tempat_lahir",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "TANGGAL LAHIR",
                    field: "tgl_lahir",
                    columnType: {
                        type: 'field'
                    }
                },
                [
                     {
                         title: 'Action',
                         field: 'Edit',
                         columnType: {
                             type: 'link',
                             link: '/pasien/find',
                             linkQuery: '/',
                             linkParam: {
                                 type: 'column',
                                 value: 'id'
                             }
                         }
                     },
                     {
                         title: 'Action',
                         field: 'Delete',
                         columnType: {
                             type: 'link',
                             link: '/pasien/find',
                             linkQuery: '/',
                             linkParam: {
                                 type: 'column',
                                 value: 'id'
                             }
                         }
                     }
                 ]
            ]
        };
        
        dataTable.init(".js-data-pasien", configs);
    }
 });
</script>
@endsection