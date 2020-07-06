$.ajax({
    method: "POST",
    url: 'http://registrasi.kankertht-kepalaleher.info/proses/anamnesis/ajax_list?key=user_id&val=cda92de8-2162-4e73-a180-e3ea76d2a1cf',
    data: {draw: 1, start: 0, length: 1000}
}).done(function(_return){
    response = JSON.parse(_return);
    data = response.data;
    var anamnesis = [];
    for(i = 0; i < data.length; i++)  {
        id = data[i][0].substring(58, 94);
        $.ajax({
            method: "GET",
            url: 'http://registrasi.kankertht-kepalaleher.info/proses/anamnesis/edit/'+id
        }).done(function(_return){
            anamnesis[i] = JSON.parse(_return);
            console.log(_return);
        });
    }
});


$.ajax({
    method: "POST",
    url: 'http://registrasi.kankertht-kepalaleher.info/proses/pemeriksaan_fisik/ajax_list?key=user_id&val=cda92de8-2162-4e73-a180-e3ea76d2a1cf',
    data: {draw: 1, start: 0, length: 1000}
}).done(function(_return){
    response = JSON.parse(_return);
    data = response.data;
    for(i = 0; i < data.length; i++)  {
        id = data[i][0].substring(58, 94);
        $.ajax({
            method: "GET",
            url: 'http://registrasi.kankertht-kepalaleher.info/proses/pemeriksaan_fisik/edit/'+id
        }).done(function(_return){
            console.log(_return);
        });
    }
});

$.ajax({
    method: "POST",
    url: 'http://registrasi.kankertht-kepalaleher.info/proses/pemeriksaan_penunjang/ajax_list?key=user_id&val=cda92de8-2162-4e73-a180-e3ea76d2a1cf',
    data: {draw: 1, start: 0, length: 1000}
}).done(function(_return){
    response = JSON.parse(_return);
    data = response.data;
    for(i = 0; i < data.length; i++)  {
        id = data[i][0].substring(58, 94);
        $.ajax({
            method: "GET",
            url: 'http://registrasi.kankertht-kepalaleher.info/proses/pemeriksaan_penunjang/edit/'+id
        }).done(function(_return){
            console.log(_return);
        });
    }
});

$.ajax({
    method: "POST",
    url: 'http://registrasi.kankertht-kepalaleher.info/proses/pemeriksaan_diagnosis/ajax_list?key=user_id&val=cda92de8-2162-4e73-a180-e3ea76d2a1cf',
    data: {draw: 1, start: 0, length: 100000}
}).done(function(_return){
    response = JSON.parse(_return);
    data = response.data;
    for(i = 0; i < data.length; i++)  {
        id = data[i][0].substring(58, 94);
        $.ajax({
            method: "GET",
            url: 'http://registrasi.kankertht-kepalaleher.info/proses/pemeriksaan_diagnosis/edit/'+id
        }).done(function(_return){
            console.log(_return);
        });
    }
});