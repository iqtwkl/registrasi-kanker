@extends('layouts.layouts')

@section("styled")

@endsection

@section("content")
    <h2>Rumah Sakit</h2>
    <hr />

    <div class="table-responsive">
        <table class="table js-data-rs" id="js-data-rs" data-token="{{ csrf_token() }}" data-url="{{ route("rs.all") }}">
        </table>
    </div>
@endsection

@section('scripts')
<script type="text/javascript">
 $(document).ready(function(){    
    if($('#js-data-rs').hasClass('js-data-rs')) {
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
                    title: "Kode",
                    field: "kode",
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
                    title: "Alamat",
                    field: "alamat",
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
                             link: '/rs/find',
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
                             link: '/rs/find',
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
        
        dataTable.init(".js-data-rs", configs);
    }
 });
</script>
@endsection