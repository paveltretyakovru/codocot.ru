<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Кодокот</title>

    {{-- Core style level --}}
    {!! HTML::style('/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}
    {!! HTML::style('/bower_components/flat-ui/dist/css/flat-ui.css') !!}

    {{-- Plugins level --}}
    {!! HTML::style('/bower_components/pace/themes/green/pace-theme-minimal.css') !!}

    {{-- Tretyakov Pavel level --}}
    {!! HTML::style('/css/system.css') !!}
</head>


<body>

<div id="awan"></div>

<nav class="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">

  <div class="container">
    <div class="col-xs-12">

      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
        <span class="sr-only">Toggle navigation</span>
        </button>
        <a class="navbar-brand" href="#" id="codocotologo"><img src="images/cats/logono.png"></a>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-01">
        
        <ul class="nav navbar-nav navbar-left">
          <li><a href="#fakelink">Проекты</a></li>
        </ul>

        <form class="navbar-form navbar-right" action="#" role="search">
          <div class="form-group">
            <div class="input-group">
              <input class="form-control" id="navbarInput-01" type="search" placeholder="Поиск">
              <span class="input-group-btn">
                <button type="submit" class="btn"><span class="fui-search"></span></button>
              </span>
            </div>
          </div>
        </form>
      </div><!-- /.navbar-collapse -->

    </div><!-- /col-xs-12 -->
  </div><!-- /container -->

</nav>

<div class="container" id="bg-content">
  <div class="col-md-8">

    <div class="row row_margin">
        <p>Sushi gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
        <p>Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.</p>
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>      
    </div>

    <div class="row row_margin">    
        <p>Sushi gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
        <p>Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.</p>
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
    </div>

    <div class="row row_margin">
        <p>Sushi gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
        <p>Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.</p>
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>      
    </div>

  </div><!-- /.col-md-8 -->

  <div class="col-md-4 sidebar-block">
    <div class="row row_margin" style="margin:auto">

      <script type="text/javascript" src="//vk.com/js/api/openapi.js?116"></script>
      <!-- VK Widget -->
      <div id="vk_groups"></div>
      <script type="text/javascript">
      VK.Widgets.Group("vk_groups", {mode: 2, width: "300", height: "400"}, 100009050);
      </script>
    </div>
  </div>
</div><!-- /.container -->


<footer class="navbar-fixed-bottom row-fluid">
  <div class="container">
    <div class="row">
      {!! HTML::image('images/cats/dance_cot.gif' , 'dance cat' , ['class' => 'dance_cat_gif'] ) !!}
    </div>
  </div>
</footer>
   

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

    $('.dropdown-toggle').dropdown();

  });

</script>

</body>
</html>