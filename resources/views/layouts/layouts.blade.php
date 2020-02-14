<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3">
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <!--<link href="{{ asset('css/all.css') }}" rel="stylesheet">-->
    <link href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" rel="stylesheet">
    <link href="{{ asset('css/sidebar.css') }}" rel="stylesheet">
    <title>Test</title>
    @yield("styled")
</head>
<body>
    @include("layouts.partials.content")

<script src="{{ asset("js/jquery-3.4.1.min.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/popper.min.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/bootstrap.min.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/sidebar.js") }}" type="text/javascript"></script>
<script src="{{ asset("js/table.js") }}" type="text/javascript"></script>
@yield("scripts")
</body>
</html>