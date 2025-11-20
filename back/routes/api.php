<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopTableController;
use App\Http\Controllers\TravelPlansTableController;
use App\Http\Controllers\WaypointTableController;
use App\Http\Controllers\UserController;

Route::get('/shop', [ShopTableController::class, 'index']);
Route::get('/travel_plan', [TravelPlansTableController::class, 'index']);
Route::get('/way_point', [WaypointTableController::class, 'index']);

Route::post('/user/register', [UserController::class, 'store']);
Route::post('/user/login', [UserController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
});