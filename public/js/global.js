/**
 * Created by User2 on 4/7/2020.
 */
$(function() {
    $( ".js-datepicker" ).datepicker();
});

function ShowMessageBox(title, message, status, btn1text, tableClass) {
    var icon = 'ui-icon-info';
    if (status == 0) {
        icon = 'ui-icon-alert';
    }
    else if (status == 1) {
        icon = 'ui-icon-circle-check';
    }

    $("#dialog-icon").addClass(icon);
    $("#lblMessage").html(message);
    $("#dialog").dialog({
        resizable: false,
        draggable: false,
        title: title,
        modal: true,
        width: '400px',
        height: 'auto',
        bgiframe: false,
        hide: {effect: 'scale', duration: 400},
        show: {effect: 'scale', duration: 400},
        buttons: [
            {
                text: btn1text,
                "class": '',
                click: function () {
                    if(typeof tableClass === "undefined"){
                        $("#dialog").dialog('close');
                    }
                    else{
                        dataTable.reload(tableClass);
                        $("#dialog").dialog('close');
                    }
                }
            }
        ]
    });
}