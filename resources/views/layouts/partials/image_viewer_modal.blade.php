<div class="modal fade show-image-modal" id="show-image-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                Preview Image
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
            </div>
            <div class="modal-body text-center">
                <img src="" class="img-fluid">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

@section('scripts')
<script>
    $(document).ready(function(){
        $('#show-image-modal').on('show.bs.modal', function(event) {
            var a = $(event.relatedTarget);
            var src = a.find('img').attr('src');
            console.log(src);
            var modal = $(this);
            var imgModal = modal.find('img');
            imgModal.attr('src', src);
        });
    });
</script>    
@endsection