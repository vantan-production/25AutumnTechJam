<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Bookmark;
use App\Models\Shop;

class BookmarkController extends Controller
{
    public function index(Request $request) {

        try {
            $max_item = $request["max_number"];

            /** @var User $user */
            $user = Auth::User();
            $bookmarks = $user->bookmarked()
                ->select(
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
                ->take($max_item)
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
}
