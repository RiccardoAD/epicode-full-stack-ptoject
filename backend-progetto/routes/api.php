<?php

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });



use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TimeSlotController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/appointments', [AppointmentController::class, 'index']);
    Route::post('/appointments', [AppointmentController::class, 'store']);
    Route::get('/appointments/{id}', [AppointmentController::class, 'show']);
    Route::put('/appointments/{id}', [AppointmentController::class, 'update']);
    Route::delete('/appointments/{id}', [AppointmentController::class, 'destroy']);
    
    Route::get('/services', [ServiceController::class, 'index']);
    Route::post('/services', [ServiceController::class, 'store'])->middleware('admin');
    Route::get('/services/{id}', [ServiceController::class, 'show']);
    Route::put('/services/{id}', [ServiceController::class, 'update'])->middleware('admin');
    Route::delete('/services/{id}', [ServiceController::class, 'destroy'])->middleware('admin');

    Route::get('/time_slots', [TimeSlotController::class, 'index']);
    Route::post('/time_slots', [TimeSlotController::class, 'store'])->middleware('admin');
    Route::get('/time_slots/{id}', [TimeSlotController::class, 'show']);
    Route::put('/time_slots/{id}', [TimeSlotController::class, 'update'])->middleware('admin');
    Route::delete('/time_slots/{id}', [TimeSlotController::class, 'destroy'])->middleware('admin');
});

// Rotte per l'autenticazione
Route::post('/register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'store']);
Route::post('/login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy'])->middleware('auth:sanctum');