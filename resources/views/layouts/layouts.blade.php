<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3">
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/all.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" rel="stylesheet">
    <title>KODI ONKOLOGI BKL</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @yield("styled")
</head>
<body>
    @include("layouts.partials.content")
    @include("layouts.partials.dialog")

<script src="{{ asset("js/jquery-3.4.1.min.js") }}" type="text/javascript"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="{{ asset("js/popper.min.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/bootstrap.min.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/sidebar.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/app.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/table.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/global.js") }}" type="text/javascript"></script>
@yield("scripts")
</body>
</html>