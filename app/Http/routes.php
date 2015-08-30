<?php

Route::get('/', function () {
    return view('index');
});

Route::get('/configs' , function(){
	return \Response::json(['hello' => 'world']);
});

Route::resource('projects'	, 'ProjectsController'	);
Route::resource('news' 		, 'NewsController'		);
Route::resource('configs' 	, 'ConfigsController' , [ 'only' => [ 'index' , 'show' ] ] );

// Authentication routes...
Route::get(	'auth/login'	, 'Auth\AuthController@getLogin' 	);
Route::post('auth/login'	, 'Auth\AuthController@postLogin'	);
Route::get(	'auth/logout'	, 'Auth\AuthController@getLogout'	);

Route::get(	'auth/register'	, 'Auth\AuthController@getRegister'	);
Route::post('auth/register'	, 'Auth\AuthController@postRegister');