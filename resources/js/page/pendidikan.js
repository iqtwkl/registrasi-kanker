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
                        target: 'modal-edit-pendidikan',
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
                        target: 'modal-delete-pendidikan',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-pendidikan').hasClass('js-data-pendidikan')) {
        dataTable.init(".js-data-pendidikan", configs);
    }

    $('#modal-create-pendidikan').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');
        idElement.val("");
        namaElement.val("");
    });

    $(".js-pendidikan-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-pendidikan');
        var namaElement = formElement.find('input#nama');
        var _nama = namaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {nama: _nama, _token: _token}
        })
        .done(function(_return){
                $("#modal-create-pendidikan").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pendidikan');
        });
    });

    $('#modal-edit-pendidikan').on('show.bs.modal', function(e) {
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

    $(".js-pendidikan-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-pendidikan');
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
            $("#modal-edit-pendidikan").modal("hide");
            ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pendidikan');
        });
    });

    $('#modal-delete-pendidikan').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-pendidikan-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-pendidikan').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
        .done(function(_return){
            $("#modal-delete-pendidikan").modal("hide");
            ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pendidikan');
        });
    });
});