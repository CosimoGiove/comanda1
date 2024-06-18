<?php

namespace App\Http\Controllers;
use App\Models\Seat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    public function index()
    {
        $seats = auth()->user()->seats;
        return view('seats.index', compact('seats'));
    }

    public function create()
    {
        return view('seats.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'numero_tavolo' => 'nullable|integer',
        ]);
        $seat = new Seat();
        $seat->name = $request->input('name');
        $seat->numero_tavolo = $request->input('numero_tavolo');
        $seat->user_id = auth()->user()->id;
        $seat->save();
        return redirect()->route('seats.index')->with('success', "Tavolo '$seat->name' creato con successo!");
    }

    public function destroy(Seat $seat)
    {
        $seat->delete();
        return redirect()->route('seats.index')->with('success', 'Tavolo eliminato con successo!');
    }
}
