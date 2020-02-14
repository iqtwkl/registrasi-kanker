var dataTable = {
    query:{},
    limit: 10,
    offset: 0,
    sort: {},
    init: function(_className){
        var _filter = {};
        $(_className+'-filter-value').each(function(){
            _filter[$(this).attr('name')] = $(this).val();
        });
        dataTable.set(_filter);
        dataTable.initSort(_className);
        dataTable.setDefaultSort(_className);

        dataTable.getContent(_className, dataTable.get());
        dataTable.search(_className);
        dataTable.searchKey(_className);
        dataTable.setSorting(_className);
    },
    getContent: function(_className,_filter){
        var _url = $(_className).attr('data-url');
        var _token = $(_className).attr('data-token');
        $.ajax({
            method: "POST",
            url: _url,
            data: {search: _filter.filter, limit: _filter.limit, offset: _filter.offset, _token: _token, sort: dataTable.sort}
        }).done(function(_return){
            //$(_className+' > tbody').html(_return);


        });
    },
    search: function(_className){
        $(_className+'-filter-button').click(function(){
            var _filter = {};
            $(_className+'-filter-value').each(function(){
                _filter[$(this).attr('name')] = $(this).val();
            });

            dataTable.set(_filter);
            dataTable.getContent(_className, dataTable.get());
        });
    },
    searchKey: function(_className){
        $(_className+'-filter-value').keyup(function(event) {
            if (event.keyCode === 13) {
                var _filter = {};
                $(_className+'-filter-value').each(function(){
                    _filter[$(this).attr('name')] = $(this).val();
                });

                dataTable.set(_filter);
                dataTable.getContent(_className, dataTable.get());
            }
        });
    },
    initSort: function(_className){
        $(_className+' td.js-sort').each(function(i, item){
            $(item).attr('data-sort', '');
            if($(item).find('i').length < 1){
                $(item).append(' <i class=""></i>');
            }

            $(item).find('i').attr('class', 'fas fa-sort');
        });
    },
    setDefaultSort: function(_className){
        dataTable.sort = {};
        $(_className+' td.js-sort').each(function(i, item){
            if(i==0) {
                $(item).attr('data-sort', 'asc');
                $(item).find('i').attr('class', 'fas fa-sort-down');
                dataTable.sort[$(item).attr('data-order')] = $(item).attr('data-sort');
            }
        });
    },
    setSorting: function(_className){
        $(_className+' td.js-sort').click(function(){
            var _sort = $(this).attr('data-sort');
            dataTable.initSort(_className);
            $(this).attr('data-sort', _sort);
            dataTable.sort = {};
            if($(this).attr('data-sort') == 'asc'){
                $(this).attr('data-sort', 'desc');
                $(this).find('i').attr('class', 'fas fa-sort-up');
                dataTable.sort[$(this).attr('data-order')] = $(this).attr('data-sort');
                dataTable.getContent(_className, dataTable.get());
            }
            else{
                $(this).attr('data-sort', 'asc');
                $(this).find('i').attr('class', 'fas fa-sort-down');
                dataTable.sort[$(this).attr('data-order')] = $(this).attr('data-sort');
                dataTable.getContent(_className, dataTable.get());
            }
        });
    },
    generatePagination: function(totalData){

    },
    getDataPageAt: function(_className, _page){
        var _classPageButton = _className+'-page-at';
        var _filter = {};
        $(_className+'-filter-value').each(function(){
            _filter[$(this).attr('name')] = $(this).val();
        });

        dataTable.offset = (parseInt(_page) - 1);
        dataTable.set(_filter);

        dataTable.getContent(_className, dataTable.get());
    },
    set: function(_filter){
        dataTable.query = {
            filter : _filter,
            limit : dataTable.limit,
            offset : dataTable.offset
        };
    },
    get: function(){
        return dataTable.query;
    }
};
