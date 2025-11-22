<?php

namespace App\Http\Controllers;

use App\Models\Waypoint;
use Illuminate\Http\Request;
use App\Models\TravelPlan;
use PhpParser\Node\Stmt\Foreach_;

class WaypointTableController extends Controller
{
    public function index(Request $request) {
        try {
            $shops = [];
            $times = [];

            $travel_plan = TravelPlan::find($request->travel_plan_id);
            $waypoints = $travel_plan->waypoints()
                ->with('shopid,name,description,min_budget,opens_at,closes_at')
                ->get();
            
            foreach ($waypoints as $waypoint) {
                $shops[] = $waypoint->shop;
                $times[] = $waypoint->time;
            };

        } catch(\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => '行き先の取得に失敗しました',
                'error' => $e->getMessage(),
            ]);
        }

        return response()->json([
            "success" => true,
            "data" => [
                'time' => $times,
            ],
            "shop" => $shops,
        ]);
    }
}
