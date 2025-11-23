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
            'shop_id' => 1, // コメダ珈琲 名古屋駅前店
            'time' => '10:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 1,
            'shop_id' => 2, // 味噌カツの矢場とん
            'time' => '11:30:00',
        ]);

        // Travel Plan 2 (shion) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 2,
            'shop_id' => 3, // スターバックス 名古屋ミッドランド店
            'time' => '14:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 2,
            'shop_id' => 5, // タリーズコーヒー 名古屋パルコ店
            'time' => '15:00:00',
        ]);

        // Travel Plan 3 (sakura) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 3,
            'shop_id' => 4, // ひつまぶし 備長
            'time' => '11:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 3,
            'shop_id' => 2, // 味噌カツの矢場とん
            'time' => '12:30:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 3,
            'shop_id' => 5, // タリーズコーヒー 名古屋パルコ店
            'time' => '14:00:00',
        ]);

        // Travel Plan 4 (haruto) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 4,
            'shop_id' => 1, // コメダ珈琲 名古屋駅前店
            'time' => '13:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 4,
            'shop_id' => 3, // スターバックス 名古屋ミッドランド店
            'time' => '14:30:00',
        ]);

        // Travel Plan 5 (yui) のウェイポイント
        Waypoint::create([
            'travel_plan_id' => 5,
            'shop_id' => 5, // タリーズコーヒー 名古屋パルコ店
            'time' => '09:00:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 5,
            'shop_id' => 1, // コメダ珈琲 名古屋駅前店
            'time' => '10:30:00',
        ]);

        Waypoint::create([
            'travel_plan_id' => 5,
            'shop_id' => 4, // ひつまぶし 備長
            'time' => '12:00:00',
        ]);
    }
}
