<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Image;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Image::create([
            'shop_id' => 1,
            'image_url' => 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop',
        ]);

        Image::create([
            'shop_id' => 2,
            'image_url' => 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop',
        ]);

        Image::create([
            'shop_id' => 3,
            'image_url' => 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop',
        ]);

        Image::create([
            'shop_id' => 4,
            'image_url' => 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
        ]);

        Image::create([
            'shop_id' => 5,
            'image_url' => 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop',
        ]);
    }
}
