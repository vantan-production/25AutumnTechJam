<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $fillable = [
        "name",
        "address",
        "opens_at",
        "closes_at",
        "tell",
        "img_url",
        "latitude",
        "longitude"
    ];
    public function waypoints() {
        return $this->hasMany(Waypoint::class);
    }
    public function users() {
        return $this->belongsToMany(User::class, "bookmark");
    }
}
