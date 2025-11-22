<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopTableController;
use App\Http\Controllers\TravelPlansTableController;
use App\Http\Controllers\WaypointTableController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookmarkController;

Route::get('/shop', [ShopTableController::class, 'index']);
Route::get('/shop/{id}', [ShopTableController::class, 'show']);

Route::get('/user', [UserController::class, 'index']);
Route::post('/user/register', [UserController::class, 'store']);
Route::post('/user/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/bookmark', [BookmarkController::class, 'index']);
    ROute::post('/bookmark/store', [BookmarkController::class, 'store']);
    Route::get('/travel_plan', [TravelPlansTableController::class, 'index']);
    Route::post('/way_point', [WaypointTableController::class, 'index']);
});