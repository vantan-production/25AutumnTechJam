<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Waypoint extends Model
{
    protected $fillable = [
        "travel_plan_id",
        "shop_id",
        "time",
    ];
    public function travelPlans() {
        return $this->belongsTo(TravelPlan::class);
    }
    public function shop() {
        return $this->belongsTo(Shop::class);
    }
}
