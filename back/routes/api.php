<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopTableController;
use App\Http\Controllers\TravelPlansTableController;
use App\Http\Controllers\WaypointTableController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/shop', [ShopTableController::class, 'index']);

Route::get('/travel_plan', [TravelPlansTableController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/travel_plan/store',[TravelPlansTableController::class,'index']);
});
Route::post('/travel_plan/{id}/del',[TravelPlansTableController::class,'index']);

Route::get('/way_point', [WaypointTableController::class, 'index']);
Route::post('/way_point/store',[WaypointTableController::class,'index']);
Route::post('/way_point/{id}/del',[WaypointTableController::class,'index']);