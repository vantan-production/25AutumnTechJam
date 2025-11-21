<?php

namespace App\Http\Controllers;

use App\Models\Waypoint;
use Illuminate\Http\Request;

class WaypointTableController extends Controller
{
    public function index(Request $request) {
        $waypoint = Waypoint::select(
            'time'
            )->get();

        return response()->json([
            "success" => true,
            "data" => $waypoint,
        ]);
    }

    public function store(Request $request){
        Waypoint::create([
            'travel_plan_id'=> $request->travel_plan_id,
            'shop_id'=>$request->shop_id,
            'time' =>$request->time
        ]);

        return response()->json([
            "success"=>true
        ]);
    }
}
