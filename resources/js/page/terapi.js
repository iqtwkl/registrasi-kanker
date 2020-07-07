$(document).ready(function(){
    var configs = {
        columns:[            
            {
                title: 'Nama',
                field: ['pasien', 'nama'],
                columnType: {
                    type: 'field'
                }
            },
            {
                title: 'Kunjungan',
                field: 'kunjungan',
                columnType: {
                    type: 'field'
                }
            },
            {
                title: 'No Rekam Medis',
                field: 'medrec',
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
                        target: 'modal-edit-terapi',
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
                        target: 'modal-delete-terapi',
                        modalParam: {
                            type: 'column',
                            value: 'id'
                        }
                    }
                }
            ]

        ]
    };

    if($('#js-table-terapi').hasClass('js-data-terapi')) {
        dataTable.init(".js-data-terapi", configs);
    }

    $('#modal-create-terapi').on('show.bs.modal', function(e) {
        var formElement = $(this);
        var idElement = formElement.find("#id");
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var medrecElement = formElement.find("#medrec");        
        idElement.val("");
        idPasienElement.val("");
        kunjunganElement.val("");
        tglPeriksaElement.val("");
        medrecElement.val("");
        kesadaranElement.val("");        
    });

    $(".js-terapi-save-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');

        var formElement = $('#modal-create-terapi');
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var medrecElement = formElement.find("#medrec");
        var _idPasien = idPasienElement.val();
        var _kunjungan = kunjunganElement.val();
        var _tglPeriksa = tglPeriksaElement.val();
        var _medrec = medrecElement.val();

        $.ajax({
            method: "POST",
            url: _url,
            data: {
                idPasien : _idPasien,
                kunjungan : _kunjungan,
                tglPeriksa : _tglPeriksa,
                medrec : _medrec,                
                _token: _token
            }
        })
        .done(function(_return){
                $("#modal-create-terapi").modal("hide");
                ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-terapi');
        });
    });

    $('#modal-edit-terapi').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
        var _url = $(this).attr('data-url');
        var _token = $(this).attr('data-token');
        var formElement = $(this);
        var idElement = formElement.find("#id");
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var medrecElement = formElement.find("#medrec");

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: id, _token: _token}
        })
        .done(function(_return){
            idElement.val(_return.data.id);
            idPasienElement.val(_return.data.idPasien);
            kunjunganElement.val(_return.data.kunjungan);
            tglPeriksaElement.val(_return.data.tglPeriksa);
            MedrecElement.val(_return.data.medrec);
            kesadaranElement.val(_return.data.kesadaran);
        });
    });

    $(".js-terapi-update-btn").click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var formElement = $('#modal-edit-terapi');
        var idElement = formElement.find("#id");
        var idPasienElement = formElement.find("#idPasien");
        var kunjunganElement = formElement.find("#kunjungan");
        var tglPeriksaElement = formElement.find("#tglPeriksa");
        var medrecElement = formElement.find("#medrec");
        
        var _id = idElement.val();
        var _idPasien = idPasienElement.val();
        var _kunjungan = kunjunganElement.val();
        var _tglPeriksa = tglPeriksaElement.val();
        var _medrec = medrecElement.val();
        

        $.ajax({
            method: "POST",
            url: _url,
            data: {
                id : _id,
                idPasien : _idPasien,
                kunjungan : _kunjungan,
                tglPeriksa : _tglPeriksa,
                medrec : _medrec,
                _token: _token
            }
        })
        .done(function(_return){
            $("#modal-edit-terapi").modal("hide");
            ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-terapi');
        });
    });

    $('#modal-delete-terapi').on('show.bs.modal', function(e) {
        var id = e.relatedTarget.dataset.id;
        $(this).attr('data-id', id);
    });

    $('.js-terapi-remove-btn').click(function(){
        var _token = $(this).attr('data-token');
        var _url = $(this).attr('data-url');
        var _id = $('#modal-delete-terapi').attr('data-id');

        $.ajax({
            method: "POST",
            url: _url,
            data: {id: _id, _token: _token}
        })
        .done(function(_return){
            $("#modal-delete-terapi").modal("hide");
            ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-terapi');
        });
    });
});