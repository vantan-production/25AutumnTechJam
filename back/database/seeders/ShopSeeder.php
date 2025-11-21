<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Shop;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Shop::create([
            'is_cafe' => true,
            'name' => 'スターバックスコーヒー 渋谷店',
            'description' => '世界中で愛されるコーヒーチェーン。落ち着いた雰囲気でゆっくりとコーヒーを楽しめます。Wi-Fi完備で作業にも最適です。',
            'address' => '東京都渋谷区道玄坂1-5-9',
            'phone_number' => '03-1234-5678',
            'image_url' => 'https://example.com/images/starbucks.jpg',
            'min_budget' => 500,
            'opens_at' => '07:00:00',
            'closes_at' => '22:00:00',
            'latitude' => 35.6595,
            'longitude' => 139.7004,
            'is_sun' => true,
            'is_mon' => true,
            'is_tue' => true,
            'is_wed' => true,
            'is_thu' => true,
            'is_fri' => true,
            'is_sat' => true,
        ]);

        Shop::create([
            'is_cafe' => true,
            'name' => 'ブルーボトルコーヒー 清澄白河店',
            'description' => 'サードウェーブコーヒーの代表格。丁寧に淹れられたコーヒーと美味しいペストリーが人気です。',
            'address' => '東京都江東区平野1-4-8',
            'phone_number' => '03-2345-6789',
            'image_url' => 'https://example.com/images/bluebottle.jpg',
            'min_budget' => 600,
            'opens_at' => '08:00:00',
            'closes_at' => '19:00:00',
            'latitude' => 35.6812,
            'longitude' => 139.8013,
            'is_sun' => true,
            'is_mon' => false,
            'is_tue' => true,
            'is_wed' => true,
            'is_thu' => true,
            'is_fri' => true,
            'is_sat' => true,
        ]);

        Shop::create([
            'is_cafe' => false,
            'name' => 'カフェ・ド・クリエ 新宿店',
            'description' => 'モーニングからランチまで楽しめるカフェ。パスタやサンドイッチなどの軽食も充実しています。',
            'address' => '東京都新宿区新宿3-38-1',
            'phone_number' => '03-3456-7890',
            'image_url' => 'https://example.com/images/crie.jpg',
            'min_budget' => 800,
            'opens_at' => '07:30:00',
            'closes_at' => '21:00:00',
            'latitude' => 35.6938,
            'longitude' => 139.7034,
            'is_sun' => true,
            'is_mon' => true,
            'is_tue' => true,
            'is_wed' => true,
            'is_thu' => true,
            'is_fri' => true,
            'is_sat' => true,
        ]);

        Shop::create([
            'is_cafe' => true,
            'name' => 'コメダ珈琲店 池袋東口店',
            'description' => '名古屋発祥の喫茶店チェーン。ボリューム満点のモーニングとシロノワールが名物です。',
            'address' => '東京都豊島区南池袋1-28-2',
            'phone_number' => '03-4567-8901',
            'image_url' => 'https://example.com/images/komeda.jpg',
            'min_budget' => 450,
            'opens_at' => '06:30:00',
            'closes_at' => '23:00:00',
            'latitude' => 35.7295,
            'longitude' => 139.7109,
            'is_sun' => true,
            'is_mon' => true,
            'is_tue' => true,
            'is_wed' => true,
            'is_thu' => true,
            'is_fri' => true,
            'is_sat' => true,
        ]);
    }
}
