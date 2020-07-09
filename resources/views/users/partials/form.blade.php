<form id="form">
    <input type="hidden" id="id_user" name="id_user" value="">
    <div class="form-group">
        <label for="nama_user">Nama</label>
        <input id="nama_user" name="nama_user" type="text" class="form-control">
    </div>
    @if($is_create ?? '')
    <div id="password" class="form-group">
        <label for="password">Passsword</label>
        <input type="password" id="password" class="form-control" name="password">
    </div>
    @endif
    <div class="form-group">
        <div class="parsley-row">
            <label for="email">Email<span class="req">*</span></label>
            <input type="email" name="email" id="email" class="form-control">
        </div>
    </div>
    <div class="form-group">
        <label for="hak_akses">Previlage</label>
        <select class="form-control" name="hak_akses" id="hak_akses">
            <option value="">Please Select</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
        </select>
    </div>
</form>