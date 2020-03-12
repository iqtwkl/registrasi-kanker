<a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
</a>
<nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
        <div class="sidebar-brand">
            <a href="#">Kodi Onkologi Bedah Kepala Leher</a>
            <div id="close-sidebar">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="sidebar-header">
            @include("layouts.partials.user_info")
        </div>
        <!-- sidebar-header  -->
        <div class="sidebar-search">
            <div>
                <div class="input-group">
                    <input type="text" class="form-control search-menu" placeholder="Search...">
                    <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-menu">
            <ul>
                <!--<li class="header-menu">
                    <span>General</span>
                </li>-->
                <li>
                    <a href="#">
                        <i class="fa fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('pasien') }}">
                        <i class="fa fa-users"></i>
                        <span>Pasien</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-book-medical"></i>
                        <span>Anamnesis</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-stethoscope"></i>
                        <span>Pemeriksaan Fisik</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-syringe"></i>
                        <span>Pemeriksaan Penunjang</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-diagnoses"></i>
                        <span>Diagnosis</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-procedures"></i>
                        <span>Terapi</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-print"></i>
                        <span>Cetak</span>
                    </a>
                </li>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class="fa fa-cogs"></i>
                        <span>Settings</span>
                    </a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li>
                                <a href="{{ route('users') }}">
                                    <i class="fa fa-users"></i>
                                    User
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-hospital-alt"></i>
                                    Rumah Sakit
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- sidebar-menu  -->
    </div>
</nav>