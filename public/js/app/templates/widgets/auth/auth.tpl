<div class="login-form">

<form>

  <input type="hidden" name="_token" rv-value="model:token">

  <div class="form-group">
    <input type="text" class="form-control" rv-value="model:email" placeholder="Email" id="login-email" name="email">
    <label class="login-field-icon fui-mail" for="login-email"></label>
    <span class="help-block hidden"></span>
  </div>


  <div class="form-group">
    <input type="password" class="form-control" rv-value="model:password" placeholder="Пароль" id="login-pass" name="password">
    <label class="login-field-icon fui-lock" for="login-pass"></label>
    <span class="help-block hidden"></span>
  </div>

</form>

  <a class="btn btn-primary btn-lg btn-block" id="js-login-button" href="#">Войти</a>


  <!-- Ссылки авторизации -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">        
        <a class="login-link" href="#auth/register">Регистрация</a>
      </div>
      <div class="col-md-6">
        <a class="login-link" href="#">Потеряли пароль?</a>        
      </div>
    </div>
  </div>

  <div id="service-auth">
    
    {!-- Авторизация через ВК --}
    <a href="" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
      <span class="fa fa-vk fa-2x"></span>
    </a>

  </div>

</div>