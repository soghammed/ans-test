<?php 


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/pokedex', [PokedexController::class, 'index']);
Route::get('/pokedex/{id}', [PokedexController::class, 'show']);