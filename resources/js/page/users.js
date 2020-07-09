/**
 * Created by User2 on 3/23/2020.
 */
$(document).ready(function(){
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
            {
                title: 'Email',
                field: 'email',
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

    $('#modal-create-user').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');
        var passwordElement = formElement.find('input#password');
        var emailElement = formElement.find('input#email');
        var hakAksesElement = formElement.find('select#hak_akses');
        idElement.val("");
        namaElement.val("");
        passwordElement.val("");
        emailElement.val("");
        hakAksesElement.val("");
    });

    $(".js-user-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-users');
        var namaElement = formElement.find('input#nama_user');
        var passwordElement = formElement.find('input#password');
        var emailElement = formElement.find('input#email');
        var hakAksesElement = formElement.find('select#hak_akses');
        var _nama = namaElement.val();
        var _email = emailElement.val();
        var _password = passwordElement.val();
        var _hak_akses = hakAksesElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {nama: _nama, password: _password, email: _email, _token: _token}
        })
        .done(function(_return){
            $("#modal-create-user").modal("hide");
            ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-users');
        });
    });

    $('#modal-edit-user').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');

        var formElement = $(this);
        var idElement = formElement.find('input#id_user');
        var namaElement = formElement.find('input#nama_user');
        var emailElement = formElement.find('input#email');
        var hakAksesElement = formElement.find('select#hak_akses');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
        .done(function(_return){
            console.log(_return);
            idElement.val(_return.data.id);
            namaElement.val(_return.data.nama);
            emailElement.val(_return.data.email);
            hakAksesElement.val(_return.data.hak_akses);
        });
    });

    $(".js-user-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-user');
        var idElement = formElement.find('input#id_user');
        var namaElement = formElement.find('input#nama_user');
        var emailElement = formElement.find('input#email');
        var hakAksesElement = formElement.find('select#hak_akses');
        var _id = idElement.val();
        var _nama = namaElement.val();
        var _email = emailElement.val();
        var _hak_akses = hakAksesElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, nama: _nama, email: _email, hak_akses: _hak_akses, _token: _token}
        })
            .done(function(_return){
                $("#modal-edit-agama").modal("hide");
                ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-users');
            });
    });

    $('#modal-delete-user').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-user-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-user').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
            .done(function(_return){
                $("#modal-delete-user").modal("hide");
                ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-users');
            });
    });
});

function PreviewImage(obj){

}
