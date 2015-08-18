<?php

Route::get('/', function () {
    return view('index');
});

Route::get('/configs' , function(){
	return \Response::json(['hello' => 'world']);
});

Route::resource('projects'	, 'ProjectsController'	);
Route::resource('news' 		, 'NewsController'		);

