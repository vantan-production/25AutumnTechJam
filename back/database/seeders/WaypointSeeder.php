<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Waypoint;
use App\Models\TravelPlan;
use App\Models\Shop;

class WaypointSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Travel Plan 1 (roito) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 1,
            'shop_id' => 1, // スターバックスコーヒー 渋谷店
            'time' => '10:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 1,
            'shop_id' => 2, // ブルーボトルコーヒー 清澄白河店
            'time' => '11:30:00',
        ]);

        // Travel Plan 2 (shion) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 2,
            'shop_id' => 3, // カフェ・ド・クリエ 新宿店
            'time' => '14:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 2,
            'shop_id' => 5, // タリーズコーヒー 表参道店
            'time' => '15:00:00',
        ]);

        // Travel Plan 3 (sakura) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 3,
            'shop_id' => 4, // コメダ珈琲店 池袋東口店
            'time' => '11:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 3,
            'shop_id' => 6, // ドトールコーヒーショップ 新宿西口店
            'time' => '12:30:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 3,
            'shop_id' => 7, // エクセルシオールカフェ 銀座店
            'time' => '14:00:00',
        ]);

        // Travel Plan 4 (haruto) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 4,
            'shop_id' => 8, // カフェ・ベローチェ 秋葉原店
            'time' => '13:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 4,
            'shop_id' => 9, // サンマルクカフェ 六本木店
            'time' => '14:30:00',
        ]);

        // Travel Plan 5 (yui) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 5,
            'shop_id' => 10, // プロント 丸の内店
            'time' => '09:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 5,
            'shop_id' => 1, // スターバックスコーヒー 渋谷店
            'time' => '10:30:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 5,
            'shop_id' => 7, // エクセルシオールカフェ 銀座店
            'time' => '12:00:00',
        ]);
    }
}
