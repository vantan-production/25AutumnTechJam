<?php

namespace App\Http\Controllers;

use App\Models\TravelPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TravelPlansTableController extends Controller
{
    public function index(Request $request) {
        $travelPlan = TravelPlan::select(
            'budget',
            'staying_time',
            'stay_at'
            )->get();

        return response()->json([
            "success" => true,
            "data" => $travelPlan,
        ]);
    }


    public function store(Request $request){
        $userId = Auth::user()->id;

        TravelPlan::create([
            'user_id' => $userId,
            'budget' => $request->budget,
            'staying_time' => $request->staying_time,
            'stay_at' => $request->stay_at
        ]);

        return response()->json([
            'success'=>true
        ]);
    }
}
