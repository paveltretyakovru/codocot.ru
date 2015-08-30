<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ConfigsController extends Controller
{
    /**
     * Филтруем запросы на получение пераметров
     */
    public function show(Request $request , $id ){
    	$result = [];

    	switch ($id) {
    		case 'preload':
    			
    			$result = [
    				'paths' => [
    					'images' => $this->getImagesPath()
    				] ,

    				'token' => csrf_token()
    			];

    			break;
    		
    		default:
    			
    			break;
    	}
    	return response()->json( $result );
    }

    private function getImagesPath(){
    	return asset('/images/');
    }
}
