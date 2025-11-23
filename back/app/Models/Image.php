<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'shop_id',
        'image_url'
    ];

    function images() {
        return $this->belongsTo(Shop::class);
    }
}
