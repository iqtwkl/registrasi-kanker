/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function(){
    var configs = {
        columns:[            
            {
                title: 'Nama',
                field: 'nama',
                columnType: {
                    type: 'field'
                }
            },
            {
                title: 'No Rekam Medis',
                field: 'no_rekam_medis',
                columnType: {
                    type: 'field'
                }
            },
            {
                title: 'Domisili',
                field: 'kabupaten',
                columnType: {
                    type: 'field'
                }
            },
            {
                title: 'Rumah Sakit',
                field: ['rumah_sakit','nama'],
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
                        target: 'modal-edit-pasien',
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
                        target: 'modal-delete-pasien',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-pasien').hasClass('js-data-pasien')) {
        dataTable.init(".js-data-pasien", configs);
    }    

    $('#modal-edit-pasien').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        console.log('id',id);
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

    $(".js-pasien-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-pasien');
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
                $("#modal-edit-pasien").modal("hide");
                ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pasien');
            });
    });

    $('#modal-delete-pasien').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-pasien-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-pasien').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
            .done(function(_return){
                $("#modal-delete-pasien").modal("hide");
                ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pasien');
            });
    });

    $('#modal-create-pasien').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find('input#id');
        var namaElement = formElement.find('input#nama');
        idElement.val("");
        namaElement.val("");
    });

    $(".js-pasien-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-pasien');
        var namaElement = formElement.find('input#nama');
        var _nama = namaElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {nama: _nama, _token: _token}
        })
            .done(function(_return){
                $("#modal-create-pasien").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pasien');
            });
    });
});