<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use APP\Models\User;
use App\Models\Bookmark;
use App\Models\Shop;

class BookmarkController extends Controller
{
    public function index(Request $request) {

        try {

            /** @var User $user */
            $user = Auth::User();
            $bookmarks = $user->bookmarked()
                ->select(
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
                )
                ->get();

            return response()->json([
                "success" => true,
                "data" => $bookmarks,
            ]);
        } catch(\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => "ブックマークの取得に失敗しました。" . $e->getMessage(),
            ], 500);

        }
    }

    public function store(Request $request) {
        try {
            $validated = $request->validate([
                'shop_id' => 'required|integer|exists:shops,id',
            ]);
            $shop_id = $validated['shop_id'];
            /** @var User $user */
            $user = Auth::User();
            $user->bookmarked()->attach([$shop_id]);
        } catch(\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'ブックマークの紐付けに失敗しました ' + $e
            ], 500);
        }

        return response()->json([
            'success' => true,
        ]);
    }
}
