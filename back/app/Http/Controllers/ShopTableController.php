<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shop;

class ShopTableController extends Controller
{
    public function index(Request $request) {
        $query = Shop::select(
            'id',
            'is_cafe', 
            'name', 
            'description', 
            'image_url',
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

        if ($request->has('min_budget')) {
            $query->where('min_budget', '>=', $request->input('min_budget'));
        }
        if ($request->has('max_budget')) {
            $query->where(function($q) use ($request) {
                $q->where('min_budget', '<=', $request->input('max_budget'))
                  ->orWhereNull('min_budget');
            });
        }

        if ($request->has('day_of_week')) {
            $dayOfWeek = (int)$request->input('day_of_week');
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

        if ($request->has('genre') && $request->input('genre')) {
            $genre = $request->input('genre');
            $query->where('description', 'LIKE', '%' . $genre . '%');
        }

        if ($request->has('staying_time')) {
            $stayingTimeMinutes = (int)$request->input('staying_time');
            $query->whereRaw('TIMESTAMPDIFF(MINUTE, CONCAT(CURDATE(), " ", opens_at), CONCAT(CURDATE(), " ", closes_at)) >= ?', [$stayingTimeMinutes]);
        }

        $shops = $query->get();

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