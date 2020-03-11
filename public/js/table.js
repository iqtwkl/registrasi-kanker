var dataTable = {
    configs: {
        search: null,
        columns:[],
        perPage: 10,
        page: 1
    },
    init: function(_tableElement, _configs){
        if(_configs) {
            dataTable.set(_configs);
            console.log(_configs);
        }

        dataTable.fetchData(_tableElement);
    },
    fetchData: function(_tableElement){
        var _url = $(_tableElement).attr('data-url');
        var _token = $(_tableElement).attr('data-token');
        var _limit = dataTable.configs.perPage;
        var _offset = (dataTable.configs.page - 1);

        $.ajax({
            method: "POST",
            url: _url,
            data: {search: [], limit: _limit, offset: _offset, _token: _token, sort: []}
        }).done(function(_return){
            dataTable.generateSearchField(_tableElement);
            dataTable.generateTableHeader(_tableElement, _return.data);
            dataTable.generateTableBody(_tableElement, _return.data);
        });
    },
    generateSearchField: function(_tableElement){
        var element = $(_tableElement);
        if($(_tableElement).parent('.table-responsive').length > 0){
            element = $(_tableElement).parent('.table-responsive');
        }

        var insertedHtml = '<div class="row">' +
            '<div class="col-sm-12 col-md-6">' +
                '<div class="dataTables_length" id="example_length">' +
                    '<label>Show <select name="example_length" aria-controls="example" class="custom-select custom-select-sm form-control form-control-sm">' +
                        '<option value="10">10</option>' +
                        '<option value="25">25</option>' +
                        '<option value="50">50</option>' +
                        '<option value="100">100</option>' +
                    '</select> entries</label>' +
                '</div>' +
            '</div>' +
            '<div class="col-sm-12 col-md-6">' +
                '<div id="example_filter" class="dataTables_filter float-right">' +
                    '<label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example"></label>' +
                '</div>' +
            '</div>' +
        '</div>';

        element.prepend(insertedHtml);
    },
    generateTableHeader: function(_tableElement, _data){
        var columns = [];
        if(dataTable.configs.columns.length > 0){
            for(var i=0; i < dataTable.configs.columns.length; i++){
                columns.push({
                    title: dataTable.configs.columns[i].title,
                    sort: dataTable.configs.columns[i].sort
                });
            }
        }
        else if(_data.length > 0){
            var keys = Object.keys(_data[0]);
            for(var j=0; j < keys.length; j++){
                columns.push({
                    title: keys[j],
                    sort: false
                });
            }
        }

        console.log(columns);

        var tHead = "<thead>" +
            "<tr>";
        for(var key in columns){
            console.log(key);
            tHead +="<th>";
            tHead += columns[key].title;
            if(columns[key].sort){
                tHead+="";
            }
            tHead +="</th>";
        }
        tHead += "</tr></thead>";

        $(_tableElement).append(tHead);
    },
    generateTableBody: function(_tableElement, _data){
        var fieldSettings = [];
        if(dataTable.configs.columns.length > 0){
            for(var i=0; i < dataTable.configs.columns.length; i++){
                fieldSettings.push({
                    field: dataTable.configs.columns[i].field,
                    columnType: dataTable.configs.columns[i].columnType
                });
            }
        }
        else if(_data.length > 0){
            var keys = Object.keys(_data[0]);
            for(var x=0; x < keys.length; x++){
                fieldSettings.push({
                    field: keys[x],
                    columnType: 'text'
                });
            }
        }

        console.log(fieldSettings);

        var allowedFields = [];
        for(var j=0; j < _data.length; j++){
            for(var k=0; k < fieldSettings.length; k++){
                console.log(_data[j][fieldSettings[k].field])
            }
        }

        console.log(allowedFields);
/*
        var tBody = "<tbody>";
        if(allowedFields.length > 0){
            for(var a = 0; a < allowedFields.length; a++){
                tBody+="<tr>";
                    for(var b = 0; b < allowedFields[a].length; b++){
                        tBody+="<td>";
                        if(allowedFields[a][b].columnType == "link"){
                            tBody+="<a href=\""+allowedFields[a][b].link+"\" class=\"btn btn-primary\">"+allowedFields[a][b].field+"</a>";
                        }
                        else{
                            tBody+=allowedFields[a][b].field;
                        }
                        tBody+="</td>";
                    }
                tBody+="</tr>";
            }
        }
        tBody += "</tbody>";

        $(_tableElement).append(tBody);*/
    },
    set: function(_configs){
        if(_configs.search){
            dataTable.configs.search = _configs.search;
        }

        if(_configs.columns){
            if(_configs.columns.length > 0){
                for(var i= 0; i < _configs.columns.length; i++){
                    var column = {
                        title: (_configs.columns[i].title)?_configs.columns[i].title:'',
                        field: (_configs.columns[i].field)?_configs.columns[i].field:'',
                        sort: (_configs.columns[i].sort)?_configs.columns[i].sort:false,
                        columnType: (_configs.columns[i].columnType)?_configs.columns[i].columnType:'',
                        filterField: (_configs.columns[i].filterField)?(_configs.columns[i].filterField):''
                    };

                    dataTable.configs.columns.push(column);
                }
            }
        }

        if(_configs.perPage){
            dataTable.configs.perPage = _configs.perPage;
        }

        if(_configs.page){
            dataTable.configs.page = _configs.page;
        }
    },
    get: function(){
        return dataTable.configs;
    }
};
