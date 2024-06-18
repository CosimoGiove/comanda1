<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SeatController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [Controller::class, 'index']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Route::get('/seats', [SeatController::class, 'index'])->name('seats.index');
    // Route::get('/seats/create', [SeatController::class, 'create'])->name('seats.create');
    // Route::post('/seats', [SeatController::class, 'store'])->name('seats.store');
    // Route::delete('/seats/{seat}', [SeatController::class, 'destroy'])->name('seats.destroy');
});
Route::get('/seats', [SeatController::class, 'index'])->name('seats.index');
Route::get('/seats/create', [SeatController::class, 'create'])->name('seats.create');
Route::post('/seats', [SeatController::class, 'store'])->name('seats.store');
Route::delete('/seats/{seat}', [SeatController::class, 'destroy'])->name('seats.destroy');

require __DIR__.'/auth.php';
