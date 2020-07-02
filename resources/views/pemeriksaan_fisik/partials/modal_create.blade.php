<div class="modal fade" id="modal-create-pemeriksaan-fisik" data-id="" data-url="{{ route('pemeriksaan-fisik.getById') }}" data-token="{{ csrf_token() }}">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Create</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="@lang('form.close')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                @include("pemeriksaan-fisik.partials.form")
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('form.close')</button>
                <button type="button" class="btn btn-primary">@lang('form.save')</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>