<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shop;

class ShopTableController extends Controller
{
    public function index(Request $request) {
        $query = Shop::with('images:id,shop_id,image_url')
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
            'is_sun',
            'is_mon',
            'is_tue',
            'is_wed',
            'is_thu',
            'is_fri',
            'is_sat'
        );

        $filters = $request->all();

        if (isset($filters['min_budget'])) {
            $query->where('min_budget', '>=', (int)$filters['min_budget']);
        }
        if (isset($filters['max_budget'])) {
            $query->where(function($q) use ($filters) {
                $q->where('min_budget', '<=', (int)$filters['max_budget'])
                    ->orWhereNull('min_budget');
            });
        }

        if (isset($filters['day_of_week'])) {
            $dayOfWeek = (int)$filters['day_of_week'];
            $dayFields = [
                0 => 'is_sun',
                1 => 'is_mon',
                2 => 'is_tue',
                3 => 'is_wed',
                4 => 'is_thu',
                5 => 'is_fri',
                6 => 'is_sat',
            ];
            if (isset($dayFields[$dayOfWeek])) {
                $query->where($dayFields[$dayOfWeek], true);
            }
        }

        if (isset($filters['genre']) && $filters['genre']) {
            $genre = $filters['genre'];
            $query->where('description', 'LIKE', '%' . $genre . '%');
        }

        if (isset($filters['staying_time'])) {
            $stayingTimeMinutes = (int)$filters['staying_time'];
            $query->whereRaw('TIMESTAMPDIFF(MINUTE, CONCAT(CURDATE(), " ", opens_at), CONCAT(CURDATE(), " ", closes_at)) >= ?', [$stayingTimeMinutes]);
        }

        $shops = $query->get();

        $shops->each(function ($shop) {
            $shop->image_urls = $shop->images->pluck('image_url');
            unset($shop->images);
        });

        return response()->json([
            "success" => true,
            "data" => $shops,
            "test" => $filters,
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