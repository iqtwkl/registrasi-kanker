<div class="modal fade" id="modal-delete-pasien" data-id="" data-url="">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Delete</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="@lang('form.close')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>@lang('form.delete_confirmation')</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('form.close')</button>
                <button type="button" class="btn btn-primary js-pasien-remove-btn" data-url="{{ route('pasien-ajax.remove') }}" data-token="{{ csrf_token() }}">@lang('form.confirm')</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>