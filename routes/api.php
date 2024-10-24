<?php 


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/* TODO: Calls from front end to get pokemon list and single data */
Route::get('/pokedex', [PokedexController::class, 'index']);
Route::get('/pokedex/{id}', [PokedexController::class, 'show']);