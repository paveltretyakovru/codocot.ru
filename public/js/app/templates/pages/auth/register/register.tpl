<div class="row register-row">

    <section class="container-fluid">			
    	<form type="POST">
			<div class="col-md-12">
				<h3 class="dark-grey">Регистрация</h3>
				
				<div class="form-group col-lg-12">
					<div class="input-group">						
					  <span class="input-group-addon fui-mail" id="basic-email" name="email"></span>
					  <input type="text" class="form-control" placeholder="Email" aria-describedby="basic-email" rv-value="model:email">
					</div>
					<span class="help-block hidden"></span>
				</div>

				<div class="form-group col-lg-6">
					<div class="input-group">
					  <span class="input-group-addon fui-lock" id="basic-password"></span>
					  <input type="password" class="form-control" placeholder="Пароль" aria-describedby="basic-password" rv-value="model:password" name="password">
					</div>
					<span class="help-block hidden"></span>
				</div>
				
				<div class="form-group col-lg-6">
					<div class="input-group">
					  <span class="input-group-addon fui-lock" id="basic-repassword"></span>
					  <input type="password" class="form-control" placeholder="Повторите пароль" aria-describedby="basic-repassword" rv-value="model:repassword" name="repassword">
					</div>
					<span class="help-block hidden"></span>
				</div>

				<div class="form-group col-lg-12">
					<input type="submit" class="btn btn-success width-100" value="Зарегестрироваться">
				</div>
			
			</div>
		</form>
	</section>


	<img src="{{ HTML::image '/cats/yellow_sit_cat.png' }}">

</div>