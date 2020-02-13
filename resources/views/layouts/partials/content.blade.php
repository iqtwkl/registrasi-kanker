@if(Auth::check())
    <div class="page-wrapper chiller-theme toggled">
        @include("layouts.partials.main_menu")
        <!-- sidebar-wrapper  -->
        <main class="page-content">
            <div class="container-fluid">
                @yield('content')
            </div>
        </main>
        <!-- page-content" -->
    </div>
@else
    @yield('content')
@endif
