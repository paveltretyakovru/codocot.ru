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

    {{-- Tretyakov Pavel level --}}
    {!! HTML::style('css/system/sidebar.css') !!}
</head>


<body>
    @include('includes.menu')


<div id="wrapper">

    @include('includes.sidebar')

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                     @yield('content')
                </div>
            </div>
        </div>
    </div>
    <!-- /#page-content-wrapper -->

</div>
    <!-- /#wrapper -->

   

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

            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
            $("#menu-toggle-2").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled-2");
                $('#menu ul').hide();
            });

            function initMenu() {
                $('#menu ul').hide();
                $('#menu ul').children('.current').parent().show();
                //$('#menu ul:first').show();
                $('#menu li a').click(
                    function() {
                        var checkElement = $(this).next();
                        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                            return false;
                        }
                        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                            $('#menu ul:visible').slideUp('normal');
                            checkElement.slideDown('normal');
                            return false;
                        }
                    }
                );
            }
            $(document).ready(function() {initMenu();});
        });
    </script>
</body>
</html>