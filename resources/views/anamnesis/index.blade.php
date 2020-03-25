@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Anamnesis</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-anamnesis" id="js-data-anamnesis" data-token="{{ csrf_token() }}" data-url="{{ route("anamnesis.all") }}">
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
                    title: "Nama Pasien",
                    field: "nama_pasien",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "Kunjungan",
                    field: "Kunjungan",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "Tanggal Periksa",
                    field: "tgl_periksa",
                    columnType: {
                        type: 'field'
                    }
                },
                {
                    title: "No MedRec",
                    field: "medrec",
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
                             link: '/anamnesis/find',
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
                             link: '/anamnesis/find',
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
        
        dataTable.init(".js-data-anamnesis", configs);
    }
 });
</script>
@endsection