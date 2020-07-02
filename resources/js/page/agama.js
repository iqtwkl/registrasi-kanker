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
                        target: 'modal-edit-agama',
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
                        target: 'modal-delete-agama',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-agama').hasClass('js-data-agama')) {
        dataTable.init(".js-data-agama", configs);
    }

    $('#modal-create-agama').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');
        idElement.val("");
        namaElement.val("");
    });

    $(".js-agama-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-agama');
        var namaElement = formElement.find('input#nama');
        var _nama = namaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {nama: _nama, _token: _token}
        })
        .done(function(_return){
                $("#modal-create-agama").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-agama');
        });
    });

    $('#modal-edit-agama').on('show.bs.modal', function(e) {
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

    $(".js-agama-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-agama');
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
            $("#modal-edit-agama").modal("hide");
            ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-agama');
        });
    });

    $('#modal-delete-agama').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-agama-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-agama').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
        .done(function(_return){
            $("#modal-delete-agama").modal("hide");
            ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-agama');
        });
    });
});