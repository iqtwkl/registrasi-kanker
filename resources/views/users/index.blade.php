@extends('layouts.layouts')

@section("styled")
    <style>
        .loading {
            position: fixed; /* Stay in place */
            z-index: 99; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        .loader {
            margin: auto;
            margin-top: 200px;
            border: 8px solid #f3f3f3;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
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
         var configs = {
             columns:[
                 {
                     title: 'ID',
                     field: 'id',
                     columnType: {
                         type: 'field'
                     }
                 },
                 {
                     title: 'Nama',
                     field: 'nama',
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
                             link: '/users/find',
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
                             link: '/users/find',
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
        dataTable.init(".js-data-users", configs);
     }
 });
</script>
@endsection