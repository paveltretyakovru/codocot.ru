<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Кодошелуха</title>
    {{-- Core style level --}}
    {!! HTML::style('/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}
    {!! HTML::style('/bower_components/flat-ui/dist/css/flat-ui.css') !!}

    {{-- Plugins level --}}
    {!! HTML::style('/bower_components/pace/themes/green/pace-theme-minimal.css') !!}
</head>


<body>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                @include('includes.menu')
            </div>

            <div class="col-md-12">
                @yield('content')
            </div>
        </div>
    </div>	

	{!! HTML::script('/bower_components/requirejs/require.js') !!}
    {!! HTML::script('js/app/config.js') !!}

    <script type="text/javascript">
    	require(['app/app' , 'pace'] , function(app , pace){
    		'use strict';

            pace.start({
                document: false
            });

    		window.app = app || false;
    		app.start();
    	});
    </script>
</body>
</html>