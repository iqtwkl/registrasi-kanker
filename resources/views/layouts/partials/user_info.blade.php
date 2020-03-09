<div class="user-pic">
    <img class="img-responsive img-rounded"
         src="{{ asset('img/user.jpg') }}"
         alt="User picture">
</div>
<div class="user-info">
    <span class="user-name">
        <strong>{{ auth()->user()->nama }}</strong>
    </span>
    <span class="user-role">Administrator</span>
    <span class="user-status">
        <i class="fa fa-circle"></i>
        <span>Online</span>
    </span>
    <span class="user-role"><a href="{{ route('logout') }}">logout</a></span>
</div>