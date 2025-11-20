<?php

namespace App\Http\Controllers;

use App\Models\TravelPlan;
use Illuminate\Http\Request;

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
}
