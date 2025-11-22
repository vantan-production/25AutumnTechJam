<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shop;

class ShopTableController extends Controller
{
    public function index(Request $request) {
        $shops = Shop::select(
            'id',
            'is_cafe', 
            'name', 
            'description', 
            'opens_at', 
            'closes_at', 
            'image_url', 
            'min_budget', 
            'latitude', 
            'longitude'  
            )->get();

        return response()->json([
            "success" => true,
            "data" => $shops,
        ]);
    }

    public function show($id) {
        $shop = Shop::find($id);
        return response()->json([
            'success' => true,
            'data' => $shop,
        ]);
    }
}