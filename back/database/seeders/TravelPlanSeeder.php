<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TravelPlan;
use App\Models\User;

class TravelPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        // roitoの旅行プラン
        TravelPlan::create([
            'user_id' => $users->where('email', 'roito@example.com')->first()->id,
            'budget' => 5000,
            'staying_time' => 180, // 3時間 (分単位)
            'stay_at' => '10:00:00',
        ]);

        // shionの旅行プラン
        TravelPlan::create([
            'user_id' => $users->where('email', 'shion@example.com')->first()->id,
            'budget' => 3000,
            'staying_time' => 120, // 2時間
            'stay_at' => '14:00:00',
        ]);

        // sakuraの旅行プラン
        TravelPlan::create([
            'user_id' => $users->where('email', 'sakura@example.com')->first()->id,
            'budget' => 8000,
            'staying_time' => 240, // 4時間
            'stay_at' => '11:00:00',
        ]);

        // harutoの旅行プラン
        TravelPlan::create([
            'user_id' => $users->where('email', 'haruto@example.com')->first()->id,
            'budget' => 4000,
            'staying_time' => 150, // 2.5時間
            'stay_at' => '13:00:00',
        ]);

        // yuiの旅行プラン
        TravelPlan::create([
            'user_id' => $users->where('email', 'yui@example.com')->first()->id,
            'budget' => 6000,
            'staying_time' => 210, // 3.5時間
            'stay_at' => '09:00:00',
        ]);
    }
}
