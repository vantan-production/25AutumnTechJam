<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TravelPlan extends Model
{
    protected $fillable = [
        "user_id",
        "budget",
        "staying_time",
        "stay_at",
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function waypoints() {
        return $this->hasMany(Waypoint::class);
    }
}
