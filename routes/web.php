<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokedexController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('{any?}', function () {
    if(env('LOG_VISIT')){
        Log::info(request()->ip().' @ '.\Carbon\Carbon::now()->format('Y-m-d h:i:s'));
    }
    return view('welcome');
})->where('any', '.*');