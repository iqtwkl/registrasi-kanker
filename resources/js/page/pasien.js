/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function(){
    urls = document.URL.split('/');
    url = '/pasien';
    if(urls[urls.length-2] == 'public') 
        url = '/public/pasien';
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
                    field: 'View',
                    columnType: {
                        type: 'link',
                        link: url,
                        linkQuery: '/find/',
                        linkParam: {
                            type: 'column',
                            value: 'id'
                        } 
                    }
                },
                {
                    title: 'Action',
                    field: 'Edit',
                    columnType: {
                        type: 'link',
                        link: url,
                        linkQuery: '/edit/',
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
});