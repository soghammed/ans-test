<?php

namespace App\Http\Controllers;

use App\Models\Pokedex;
use Illuminate\Http\Request;

class PokedexController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /* TODO: Run api call here to get the pokemon data and return it as json */
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pokedex $pokedex, $id)
    {
        /* TODO: Run api call here to get the pokemon data and return it as json */
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pokedex $pokedex)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pokedex $pokedex)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pokedex $pokedex)
    {
        //
    }
}
