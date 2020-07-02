/**
 * Created by User2 on 3/23/2020.
 */
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
                            type: 'modal',
                            target: 'modal-edit-user',
                            modalParam: {
                                type: 'column',
                                value: 'id'
                            }
                        }
                    },
                    {
                        title: 'Action',
                        field: 'Delete',
                        columnType: {
                            type: 'modal',
                            target: 'modal-delete-user',
                            modalParam: {
                                type: 'column',
                                value: 'id'
                            }
                        }
                    }
                ]

            ]
        };

        if($('#js-table-users').hasClass('js-data-users')) {
            dataTable.init(".js-data-users", configs);
        }
    }

    $('#modal-edit-user').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
        .done(function(_return){
            console.log(_return);
            $('#id_user').val(_return.data.id);
            $('#nama_user').val(_return.data.nama);
            $('#email').val(_return.data.email);
            $('#hak_akses').val(_return.data.hak_akses);
        });
    });

    $('#modal-delete-user').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });
});

function PreviewImage(obj){

}
