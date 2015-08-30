<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Кодокот</title>

    {{-- Core style level --}}
    {!! HTML::style('/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}
    {!! HTML::style('/bower_components/flat-ui/dist/css/flat-ui.css') !!}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    {{-- Plugins level --}}
    {!! HTML::style('/bower_components/pace/themes/green/pace-theme-minimal.css') !!}

    {{-- Tretyakov Pavel level --}}
    {!! HTML::style('/css/system.css') !!}
    
</head>


<body>

<div id="awan"></div>

<nav class="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">

  <!--  Region topmenu -->
  <div class="container" id="topmenu">
    
  </div><!-- /container -->
  <!-- /Region topmenu -->

</nav>


<div class="container" id="bg-content">

  {{-- Регион с контентом --}}
  <div class="col-md-8" id="region-content">
    {{-- #### CONTENT #### --}}
    <center>{!! HTML::image('images/cats/balloon.gif') !!}</center>
  </div><!-- /.col-md-8 -->
  {{-- Конец региона с контентом --}}

  {{-- Реогин с виджетами сайта --}}
  <div class="col-md-4 sidebar-block" id="region-widgets">
    {{-- #### WIDGETS #### --}}
  </div>
  {{-- Конец региона с виджетами сайта --}}

</div><!-- /.container -->


<footer class="navbar-fixed-bottom row-fluid">
  <div class="container">
    <div class="row">
      {!! HTML::image('images/cats/dance_cot.gif' , 'dance cat' , ['class' => 'dance_cat_gif'] ) !!}
    </div>
  </div>
</footer>
   
{!! HTML::script('//vk.com/js/api/openapi.js?116') !!}
{!! HTML::script('/bower_components/requirejs/require.js') !!}
{!! HTML::script('js/app/config.js') !!}

<script type="text/javascript">

 function authInfo(response) {
    if (response.session) {
      alert('user: '+response.session.mid);
    } else {
      alert('not auth');
    }
  }

  require(['app/app' , 'pace'] , function(app , pace){
    'use strict';

    pace.start({
      document: false
    });

    window.app = app || false;
    app.start();

    $('.dropdown-toggle').dropdown();

  });

</script>

</body>
</html>