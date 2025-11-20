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
}
