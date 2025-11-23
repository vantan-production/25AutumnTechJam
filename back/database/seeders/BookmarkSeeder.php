<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class BookmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        // roito (user_id: 1) のブックマーク
        $roito = $users->where('email', 'roito@example.com')->first();
        if ($roito) {
            $roito->bookmarked()->attach([1, 2, 5]);
        }

        // shion (user_id: 2) のブックマーク
        $shion = $users->where('email', 'shion@example.com')->first();
        if ($shion) {
            $shion->bookmarked()->attach([1, 3, 4]);
        }

        // sakura (user_id: 3) のブックマーク
        $sakura = $users->where('email', 'sakura@example.com')->first();
        if ($sakura) {
            $sakura->bookmarked()->attach([2, 4]);
        }

        // haruto (user_id: 4) のブックマーク
        $haruto = $users->where('email', 'haruto@example.com')->first();
        if ($haruto) {
            $haruto->bookmarked()->attach([1, 5]);
        }

        // yui (user_id: 5) のブックマーク
        $yui = $users->where('email', 'yui@example.com')->first();
        if ($yui) {
            $yui->bookmarked()->attach([3]);
        }

        // ren (user_id: 6) のブックマーク
        $ren = $users->where('email', 'ren@example.com')->first();
        if ($ren) {
            $ren->bookmarked()->attach([2, 5]);
        }

        // aoi (user_id: 7) のブックマーク
        $aoi = $users->where('email', 'aoi@example.com')->first();
        if ($aoi) {
            $aoi->bookmarked()->attach([1, 4]);
        }
    }
}
