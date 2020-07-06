var dataTable = {
    configs: {
        search: null,
        columns:[],
        perPage: 10,
        page: 1,
        searchInput: true,
        loading: false,
        showDataInfo: false,
        baseUrl: window.location.protocol.concat("//") + window.location.host
    },
    init: function(_tableElement, _configs){
        if(_configs) {
            dataTable.set(_configs);
        }

        dataTable.fetchData(_tableElement);
    },
    fetchData: function(_tableElement){
        var _url = $(_tableElement).attr('data-url');
        var _token = $(_tableElement).attr('data-token');
        var _limit = dataTable.configs.perPage;
        var _offset = (dataTable.configs.page - 1);


        if(dataTable.configs.loading) {
            dataTable.generateLoading(_tableElement, true);
        }

        $.ajax({
            method: "POST",
            url: _url,
            data: {search: [], limit: _limit, offset: _offset, _token: _token, sort: []}
        })
            .done(function(_return){
                dataTable.generateSearchField(_tableElement);
                dataTable.generateTableHeader(_tableElement, _return.data);
                dataTable.generateTableBody(_tableElement, _return.data);
                dataTable.generateTableFoot(_tableElement, _return);
                dataTable.generatePagination(_tableElement, _return);

                if(dataTable.configs.loading) {
                    dataTable.generateLoading(_tableElement, false);
                }
            });
    },
    generateLoading: function(_tableElement, _show){
        if(_show) {
            var element = $(_tableElement);
            if ($(_tableElement).parent('.table-responsive').length > 0) {
                element = $(_tableElement).parent('.table-responsive');
            }
            var insertedHtml = '<div class="loading"><div class="loader"></div></div>';
            element.prepend(insertedHtml);
        }
        else{
            var element = $(_tableElement);
            if ($(_tableElement).parent('.table-responsive').length > 0) {
                element = $(_tableElement).parent('.table-responsive');
            }

            element.find(".loading").remove();
        }
    },
    generateSearchField: function(_tableElement){
        var element = $(_tableElement);
        if($(_tableElement).parent('.table-responsive').length > 0){
            element = $(_tableElement).parent('.table-responsive');
        }

        var inputSearchHtml = "";
        if(dataTable.configs.searchInput){
            inputSearchHtml = '<div class="col-sm-12 col-md-6">' +
            '<div id="example_filter" class="dataTables_filter float-right">' +
            '<label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example"></label>' +
            '</div>' +
            '</div>';
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
            '</div>' + inputSearchHtml +
            '</div>';

        element.prepend(insertedHtml);
    },
    generateTableHeader: function(_tableElement, _data){
        var columns = [];
        if(dataTable.configs.columns.length > 0){
            for(var i=0; i < dataTable.configs.columns.length; i++){
                if($.isArray(dataTable.configs.columns[i])){
                    if(dataTable.configs.columns[i].length > 0) {
                        columns.push({
                            title: (dataTable.configs.columns[i][0].title) ? dataTable.configs.columns[i][0].title : '',
                            sort: (dataTable.configs.columns[i][0].sort) ? dataTable.configs.columns[i][0].sort : false
                        });
                    }
                    else{
                        columns.push({
                            title: '',
                            sort: false
                        });
                    }
                }
                else {
                    columns.push({
                        title: (dataTable.configs.columns[i].title) ? dataTable.configs.columns[i].title : '',
                        sort: (dataTable.configs.columns[i].sort) ? dataTable.configs.columns[i].sort : false
                    });
                }
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

        var tHead = "<thead>" +
            "<tr>";
        for(var key in columns){
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
                console.log("column", dataTable.configs.columns[i]);
                if($.isArray(dataTable.configs.columns[i])){
                    var settings = [];
                    for(var j=0; j < dataTable.configs.columns[i].length; j++){
                        settings.push({
                            field: (dataTable.configs.columns[i][j].field) ? dataTable.configs.columns[i][j].field : '',
                            columnType: (dataTable.configs.columns[i][j].columnType) ? dataTable.configs.columns[i][j].columnType : {type: 'field'}
                        });
                    }

                    fieldSettings.push(settings);
                }
                else {
                    fieldSettings.push({
                        field: (dataTable.configs.columns[i].field) ? dataTable.configs.columns[i].field : '',
                        columnType: (dataTable.configs.columns[i].columnType) ? dataTable.configs.columns[i].columnType : {type: 'field'}
                    });
                }
            }
        }
        else if(_data.length > 0){
            var keys = Object.keys(_data[0]);
            for(var x=0; x < keys.length; x++){
                fieldSettings.push({
                    field: keys[x],
                    columnType:{ type: 'field' }
                });
            }
        }

        console.log("settings",fieldSettings);

        var allowedFields = [];
        for(var j=0; j < _data.length; j++){
            var fieldDetails = [];
            for(var k=0; k < fieldSettings.length; k++){
                if($.isArray(fieldSettings[k])){
                    var fieldsArray = [];
                    for(var x=0; x < fieldSettings[k].length; x++){
                        var field = fieldSettings[k][x].field;
                        if(fieldSettings[k][x].field){
                            if(fieldSettings[k][x].columnType.type == "field"){
                                field = _data[j][fieldSettings[k][x].field]
                            }
                        }

                        fieldsArray.push({
                            value: field,
                            columnType: fieldSettings[k][x].columnType
                        });
                    }

                    fieldDetails.push((fieldsArray));
                }
                else{
                    var field = fieldSettings[k].field;
                    if(fieldSettings[k].field){
                        if($.isArray(fieldSettings[k].field)) {                            
                            for(iField=0; iField < fieldSettings[k].field.length; iField++) {
                                if(fieldSettings[k].columnType.type == "field"){
                                    if(iField == 0) {
                                        field = _data[j][fieldSettings[k].field[iField]];
                                    } else {
                                        if(field != null) {
                                            field = field[fieldSettings[k].field[iField]];
                                        } else {
                                            field = "-";
                                        }
                                    }
                                }    
                            }
                        } else {
                            if(fieldSettings[k].columnType.type == "field"){
                                field = _data[j][fieldSettings[k].field];
                            }
                        }
                    }
                    fieldDetails.push({
                        value: field,
                        columnType: fieldSettings[k].columnType
                    });
                }
            }
            allowedFields.push(fieldDetails);
        }

        console.log("body", allowedFields);


        var tBody = "<tbody>";
        if(allowedFields.length > 0){
            for(var a = 0; a < allowedFields.length; a++){
                tBody+="<tr>";
                for(var b = 0; b < allowedFields[a].length; b++){
                    tBody+="<td>";
                    if($.isArray(allowedFields[a][b])){
                        if(allowedFields[a][b].length > 0){
                            console.log(allowedFields[a][b]);
                            for(var x=0; x < allowedFields[a][b].length; x++){
                                if(x>0){
                                    tBody += "&nbsp;&nbsp;";
                                }
                                if (allowedFields[a][b][x].columnType.type == "link") {
                                    var identifier = '';
                                    if (allowedFields[a][b][x].columnType.linkParam.type == 'column') {
                                        identifier = (_data.length) ? _data[a][allowedFields[a][b][x].columnType.linkParam.value] : '';
                                    }
                                    else if (allowedFields[a][b][x].columnType.linkParam.type == 'string') {
                                        identifier = allowedFields[a][b][x].columnType.linkParam.value;
                                    }

                                    var url = dataTable.configs.baseUrl + allowedFields[a][b][x].columnType.link + allowedFields[a][b][x].columnType.linkQuery + identifier;
                                    tBody += "<a href=\"" + url + "\" class=\"btn btn-primary\">" + allowedFields[a][b][x].value + "</a>";
                                }
                                else if(allowedFields[a][b][x].columnType.type == "modal"){
                                    var identifier = '';
                                    if (allowedFields[a][b][x].columnType.modalParam.type == 'column') {
                                        identifier = (_data.length) ? _data[a][allowedFields[a][b][x].columnType.modalParam.value] : '';
                                    }
                                    else if (allowedFields[a][b][x].columnType.modalParam.type == 'string') {
                                        identifier = allowedFields[a][b][x].columnType.modalParam.value;
                                    }

                                    tBody += "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#"+ allowedFields[a][b][x].columnType.target +"\" " +
                                    "data-id=\""+identifier+"\">" + allowedFields[a][b][x].value + "</button>";
                                }
                                else {
                                    tBody += allowedFields[a][b].value;
                                }
                            }
                        }
                    }
                    else {
                        if (allowedFields[a][b].columnType.type == "link") {
                            var identifier = '';
                            if (allowedFields[a][b].columnType.linkParam.type == 'column') {
                                identifier = (_data.length) ? _data[a][allowedFields[a][b].columnType.linkParam.value] : '';
                            }
                            else if (allowedFields[a][b].columnType.linkParam.type == 'string') {
                                identifier = allowedFields[a][b].columnType.linkParam.value;
                            }

                            var url = dataTable.configs.baseUrl + allowedFields[a][b].columnType.link + allowedFields[a][b].columnType.linkQuery + identifier;
                            tBody += "<a href=\"" + url + "\" class=\"btn btn-primary\">" + allowedFields[a][b].value + "</a>";
                        }
                        else if(allowedFields[a][b].columnType.type == "modal"){
                            var identifier = '';
                            if (allowedFields[a][b].columnType.modalParam.type == 'column') {
                                identifier = (_data.length) ? _data[a][allowedFields[a][b].columnType.modalParam.value] : '';
                            }
                            else if (allowedFields[a][b].columnType.modalParam.type == 'string') {
                                identifier = allowedFields[a][b].columnType.modalParam.value;
                            }

                            tBody += "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#"+ allowedFields[a][b].columnType.target +"\" " +
                            "data-id=\""+identifier+"\">" + allowedFields[a][b].value + "</button>";
                        }
                        else {
                            tBody += allowedFields[a][b].value;
                        }
                    }
                    tBody+="</td>";
                }
                tBody+="</tr>";
            }
        }
        tBody += "</tbody>";

        $(_tableElement).append(tBody);
    },
    generateTableFoot: function(_tableElement, _response){
        var totalColumns = 0;
        if(dataTable.configs.columns.length > 0){
            totalColumns = dataTable.configs.columns.length;
        }
        else if(_response.data.length > 0){
            totalColumns = Object.keys(_response.data[0]).length;
        }

        var currentData = (parseInt(dataTable.configs.page) * parseInt(dataTable.configs.perPage));
        if((currentData > _response.data.length) || (currentData < _response.data.length)){
            currentData = _response.data.length;
        }

        var info = "";
        if(dataTable.configs.showDataInfo){
            info = "Showing "+currentData+" of "+_response.totalRecords;
        }

        var tFoot = "<tfoot><tr><td colspan=\""+totalColumns+"\">"+info+"</td></tr></tfoot>";
        $(_tableElement).append(tFoot);
    },
    generatePagination: function(_tableElement, _totalData) {
        var paginationHtml = "<ul class=\"pagination pagination-sm no-margin pull-right\">";

        var currentPage = dataTable.configs.page;
        var startPage = 1;
        var totalPage = (parseInt(_totalData) / parseInt(dataTable.configs.perPage));
        var endPage = (parseInt(_totalData) / parseInt(dataTable.configs.perPage));

        if (parseInt(totalPage) > 10) {
            endPage = 10;
        }

        if (parseInt(currentPage) > 5) {
            paginationHtml += "<li class=\"page-item\"><span class=\"page-link\" onclick=\"dataTable.setPageAt(this)\" data-page=\"1\" data-element=\"" + _tableElement + "\">First</span></li>";
        }

        if (parseInt(currentPage) > 3) {
            paginationHtml += "<li class=\"page-item\"><span class=\"page-link\" onclick=\"dataTable.setPageAt(this)\" data-page=\"" + (parseInt(currentPage) - 1) + "\">Prev</span></li>";
        }

        if (parseInt(currentPage) > 5) {
            startPage = (parseInt(currentPage) - 4);
            endPage = (parseInt(currentPage) + 5);
        }

        if(parseInt(endPage) > parseInt(totalPage)) {
            endPage = totalPage;
        }

        if(parseInt(totalPage) > 1) {
            for (var i = startPage; i <= endPage; i++) {
                var activePage = "";
                var clickable = "onclick=\"dataTable.setPageAt(this)\"";
                if (i == currentPage) {
                    activePage = "active";
                    clickable = "";
                }
                paginationHtml += "<li class=\"page-item" + activePage + "\"><span class=\"page-link\" "+clickable+"  data-page=\"" + i + "\">" + i + "</span></li>";
            }
        }

        if((parseInt(totalPage) > 10) && (parseInt(currentPage) < parseInt(totalPage))) {
            paginationHtml += "<li class=\"page-item\"><span class=\"page-link\" onclick=\"dataTable.setPageAt(this)\" data-page=\"" + (parseInt(currentPage) + 1) + "\">Next</span></li>";
            var activePage = "";
            var clickable = "onclick=\"dataTable.setPageAt(this)\"";
            if (totalPage == currentPage) {
                activePage = "active";
                clickable = "";
            }
            paginationHtml += "<li class=\"page-item " + activePage + " \"><span class=\"page-link\" " + clickable + " data-page=\"" + parseInt(totalPage) + "\">Last</span></li>";
        }

        paginationHtml += "</ul>";

        $(paginationHtml).insertAfter(_tableElement);
    },
    setPageAt: function(_obj){
        var tableElement = $(_obj).attr("data-element");
        var page = $(_obj).attr("data-page");

        dataTable.configs.page = page;

        dataTable.fetchData(tableElement);
    },
    set: function(_configs){
        if(_configs.search){
            dataTable.configs.search = _configs.search;
        }

        if(_configs.columns){
            if(_configs.columns.length > 0){
                for(var i= 0; i < _configs.columns.length; i++){
                    if($.isArray(_configs.columns[i])){
                        var column = [];
                        for(var j=0; j < _configs.columns[i].length; j++){
                            column.push({
                                title: (_configs.columns[i][j].title) ? _configs.columns[i][j].title : '',
                                sort: (_configs.columns[i][j].sort) ? _configs.columns[i][j].sort : false,
                                field: (_configs.columns[i][j].field) ? _configs.columns[i][j].field : '',
                                columnType: (_configs.columns[i][j].columnType) ? _configs.columns[i][j].columnType : ''
                            });
                        }

                        dataTable.configs.columns.push(column);
                    }
                    else {
                        var column = {
                            title: (_configs.columns[i].title) ? _configs.columns[i].title : '',
                            sort: (_configs.columns[i].sort) ? _configs.columns[i].sort : false,
                            field: (_configs.columns[i].field) ? _configs.columns[i].field : '',
                            columnType: (_configs.columns[i].columnType) ? _configs.columns[i].columnType : ''
                        };

                        dataTable.configs.columns.push(column);
                    }
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