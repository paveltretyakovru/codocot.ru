<div class="login-form">

<form>

  <div class="form-group">
    <span class="help-block hidden"></span>
    <input type="text" class="form-control login-field" rv-value="model:login" placeholder="Email" id="login-name">
    <label class="login-field-icon fui-user" for="login-name"></label>
  </div>


  <div class="form-group">
    <input type="password" name="login" class="form-control login-field" rv-value="model:password" placeholder="Пароль" id="login-pass">
    <label class="login-field-icon fui-lock" for="login-pass"></label>
    <span class="help-block hidden"></span>
  </div>

</form>

  <a class="btn btn-primary btn-lg btn-block" id="js-login-button" href="#">Войти</a>
  <a class="btn btn-primary btn-lg btn-block" href="#user/registration">Регистрация</a>
  <a class="login-link" href="#">Потеряли пароль?</a>

  <div id="service-auth">
    
    {!-- Авторизация через ВК --}
    <a href="" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
      <span class="fa fa-vk fa-2x"></span>
    </a>

  </div>

</div>