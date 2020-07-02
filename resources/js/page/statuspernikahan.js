/**
 * Created by User2 on 4/7/2020.
 */
/**
 * Created by User2 on 3/30/2020.
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
            [
                {
                    title: 'Action',
                    field: 'Edit',
                    columnType: {
                        type: 'modal',
                        target: 'modal-edit-status-pernikahan',
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
                        target: 'modal-delete-status-pernikahan',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-status-pernikahan').hasClass('js-data-status-pernikahan')) {
        dataTable.init(".js-data-status-pernikahan", configs);
    }

    $('#modal-create-status-pernikahan').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');
        idElement.val("");
        namaElement.val("");
    });

    $(".js-status-pernikahan-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-status-pernikahan');
        var namaElement = formElement.find('input#nama');
        var _nama = namaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {nama: _nama, _token: _token}
        })
        .done(function(_return){
                $("#modal-create-status-pernikahan").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-status-pernikahan');
        });
    });

    $('#modal-edit-status-pernikahan').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
        .done(function(_return){
            idElement.val(_return.data.id);
            namaElement.val(_return.data.nama);
        });
    });

    $(".js-status-pernikahan-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-status-pernikahan');
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');
        var _id = idElement.val();
        var _nama = namaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, nama: _nama, _token: _token}
        })
        .done(function(_return){
            $("#modal-edit-status-pernikahan").modal("hide");
            ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-status-pernikahan');
        });
    });

    $('#modal-delete-status-pernikahan').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-status-pernikahan-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-status-pernikahan').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
        .done(function(_return){
            $("#modal-delete-status-pernikahan").modal("hide");
            ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-status-pernikahan');
        });
    });
});