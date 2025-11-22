<?php

namespace App\Http\Controllers;

use App\Models\TravelPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class TravelPlansTableController extends Controller
{
    public function index(Request $request) {
        /** @var User $user */
        $user = Auth::User();
        $travelPlans = $user->travelPlans()->select(
            'id',
            'budget',
            'staying_time',
            'stay_at'
            )->get();

        return response()->json([
            "success" => true,
            "data" => $travelPlans,
        ]);
    }
}
