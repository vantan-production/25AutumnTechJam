<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shop;

class ShopTableController extends Controller
{
    public function index(Request $request) {
        // Eager Loadingで画像も一緒に取得
        $shops = Shop::with('images:id,shop_id,image_url')
            ->select(
                'id',
                'is_cafe', 
                'name', 
                'description', 
                'opens_at', 
                'closes_at', 
                'min_budget', 
                'address',
                'phone_number',
                'latitude', 
                'longitude',
                'station_distance'  // 追加
            )
            ->get();

        // shopのimagesからimage_urlのみを取得
        $shops->each(function ($shop) {
            $shop->image_urls = $shop->images->pluck('image_url');
            unset($shop->images);
        });

        return response()->json([
            "success" => true,
            "data" => $shops,
        ]);
    }

    public function show($id) {
        $shop = Shop::with('images:id,shop_id,image_url')->find($id);
        if (!$shop){
            return response()->json([
                'success' => false,
                'message' => 'ショップ情報の取得に失敗しました。'
            ], 404);
        }
        
        // image_urlsに変換
        $shop->image_urls = $shop->images->pluck('image_url');
        unset($shop->images);
        
        return response()->json([
            'success' => true,
            'data' => $shop,
        ]);
    }
}