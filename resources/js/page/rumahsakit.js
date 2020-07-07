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
                title: 'Kode',
                field: 'kode',
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
                        target: 'modal-edit-rumah-sakit',
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
                        target: 'modal-delete-rumah-sakit',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-rumah-sakit').hasClass('js-data-rumah-sakit')) {
        dataTable.init(".js-data-rumah-sakit", configs);
    }

    $('#modal-create-rumah-sakit').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var kodeElement = formElement.find('input#kode');
        var namaElement = formElement.find('input#nama');
        var alamatElement = formElement.find('input#alamat');
        idElement.val("");
        kodeElement.val("");
        namaElement.val("");
        alamatElement.val("");
    });

    $(".js-rumah-sakit-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-rumah-sakit');
        var kodeElement = formElement.find('input#kode');
        var namaElement = formElement.find('input#nama');
        var alamatElement = formElement.find('input#alamat');
        var _kode = kodeElement.val();
        var _nama = namaElement.val();
        var _alamat = alamatElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {kode: _kode, nama: _nama, alamat: _alamat, _token: _token}
        })
        .done(function(_return){
                $("#modal-create-rumah-sakit").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-rumah-sakit');
        });
    });

    $('#modal-edit-rumah-sakit').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var kodeElement = formElement.find('input#kode');
        var namaElement = formElement.find('input#nama');
        var alamatElement = formElement.find('input#alamat');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
        .done(function(_return){
            idElement.val(_return.data.id);
            kodeElement.val(_return.data.kode);
            namaElement.val(_return.data.nama);
            alamatElement.val(_return.data.alamat);
        });
    });

    $(".js-rumah-sakit-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-rumah-sakit');
        var idElement = formElement.find('input#id');
        var kodeElement = formElement.find('input#kode');
        var namaElement = formElement.find('input#nama');
        var alamatElement = formElement.find('input#alamat');
        var _id = idElement.val();
        var _kode = kodeElement.val();
        var _nama = namaElement.val();
        var _alamat = alamatElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, kode: _kode, nama: _nama, alamat: _alamat, _token: _token}
        })
        .done(function(_return){
            $("#modal-edit-rumah-sakit").modal("hide");
            ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-rumah-sakit');
        });
    });

    $('#modal-delete-rumah-sakit').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-rumah-sakit-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-rumah-sakit').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
        .done(function(_return){
            $("#modal-delete-rumah-sakit").modal("hide");
            ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-rumah-sakit');
        });
    });
});