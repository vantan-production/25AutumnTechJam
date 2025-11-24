<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Image;
use App\Models\Shop;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 画像URLのプール（カフェ用とその他用で分ける）
        $cafeImages = [
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
        ];

        $restaurantImages = [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
        ];

        // データベースから全ての店舗を取得
        $shops = Shop::all();

        // 各店舗に5枚ずつ画像を追加
        foreach ($shops as $shop) {
            // 店舗のis_cafeに基づいて画像プールを選択
            $imagePool = $shop->is_cafe ? $cafeImages : $restaurantImages;
            
            // 各店舗ごとに5枚の異なる画像を選択
            // shop_idをシードとして使用して、各店舗で異なる画像セットを取得
            $selectedImages = [];
            $poolSize = count($imagePool);
            
            for ($i = 0; $i < 5; $i++) {
                // shop_idとiを組み合わせて、各店舗で異なる画像を選択
                $imageIndex = (($shop->id - 1) * 5 + $i) % $poolSize;
                
                // 同じ画像が選ばれないようにする（必要に応じて）
                while (in_array($imagePool[$imageIndex], $selectedImages) && count($selectedImages) < $poolSize) {
                    $imageIndex = ($imageIndex + 1) % $poolSize;
                }
                
                $selectedImages[] = $imagePool[$imageIndex];
                
                Image::create([
                    'shop_id' => $shop->id,
                    'image_url' => $imagePool[$imageIndex],
                ]);
            }
        }
    }
}
