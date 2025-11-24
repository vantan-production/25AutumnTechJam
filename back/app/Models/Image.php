<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Shop;

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
