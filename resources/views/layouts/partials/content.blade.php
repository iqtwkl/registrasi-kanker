@if(Auth::check())
    Login
@else
    @yield('content')
@endif
